import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  alignmentNameMetadata,
  classifyStarDesignation,
} from "./lib/star-classification.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const degreesPerRadian = 180 / Math.PI;
const threshold = Number(process.argv.find((value) => value.startsWith("--threshold="))?.split("=")[1] ?? .3);
const limitArgument = process.argv.find((value) => value.startsWith("--limit="));
const resultLimit = limitArgument ? Number(limitArgument.split("=")[1]) : Number.POSITIVE_INFINITY;
const maxForward = Number(process.argv.find((value) => value.startsWith("--forward="))?.split("=")[1] ?? 120);
const maxVariantsPerChain = Number(process.argv.find((value) => value.startsWith("--variants="))?.split("=")[1] ?? 12);

function extractJsonArray(source, declaration) {
  const declarationIndex = source.indexOf(declaration);
  if (declarationIndex < 0) throw new Error(`Cannot find ${declaration}`);
  const assignment = source.indexOf("=", declarationIndex);
  const start = source.indexOf("[", assignment);
  const end = source.lastIndexOf("];\n");
  if (start < 0 || end < 0) throw new Error(`Cannot parse ${declaration}`);
  return JSON.parse(source.slice(start, end + 1));
}

function extractMainSlugs(source) {
  const start = source.indexOf("export const biblicalArtworkSlugs = [");
  const end = source.indexOf("] as const", start);
  if (start < 0 || end < 0) throw new Error("Cannot parse biblicalArtworkSlugs");
  return [...source.slice(start, end).matchAll(/"([^"]+)"/g)].map((match) => match[1]);
}

function vector(ra, dec) {
  const rightAscension = ra * 15 / degreesPerRadian;
  const declination = dec / degreesPerRadian;
  return [
    Math.cos(declination) * Math.cos(rightAscension),
    Math.cos(declination) * Math.sin(rightAscension),
    Math.sin(declination),
  ];
}

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function normalizedCross(a, b) {
  const value = cross(a, b);
  const length = Math.hypot(...value);
  return length < 1e-8 ? null : value.map((part) => part / length);
}

function directedAngle(from, target, normal) {
  let angle = Math.atan2(dot(cross(from, target), normal), dot(from, target)) * degreesPerRadian;
  if (angle < 0) angle += 360;
  return angle;
}

function clamp(value) {
  return Math.max(-1, Math.min(1, value));
}

function qualityFor(deviation) {
  if (deviation <= .1) return "exceptional";
  if (deviation <= .25) return "very-strong";
  if (deviation <= .5) return "strong";
  return "visible";
}

const [skySource, artworkSource, editorialRuSource, editorialEnSource] = await Promise.all([
  readFile(resolve(root, "src/data/generated-sky.ts"), "utf8"),
  readFile(resolve(root, "src/data/biblical-artwork.ts"), "utf8"),
  readFile(resolve(root, "data/constellation-editorial.json"), "utf8"),
  readFile(resolve(root, "data/constellation-editorial.en.json"), "utf8"),
]);

const skyCatalog = extractJsonArray(skySource, "export const skyCatalog");
const mainSlugs = extractMainSlugs(artworkSource);
const mainSlugSet = new Set(mainSlugs);
const editorialRu = JSON.parse(editorialRuSource);
const editorialEn = JSON.parse(editorialEnSource);
const selectedByHip = new Map();

for (const constellation of skyCatalog) {
  if (!mainSlugSet.has(constellation.slug)) continue;
  const allStars = new Map(
    [...constellation.stars, ...constellation.referenceStars].map((star) => [star.hip, star]),
  );
  const contourSegments = constellation.referenceSegments.length
    ? constellation.referenceSegments
    : constellation.segments;
  const contourHips = new Set(contourSegments.flat());

  for (const star of allStars.values()) {
    if (!star.proper && !contourHips.has(star.hip)) continue;
    const classification = classifyStarDesignation(star, constellation.abbreviation);
    const candidate = {
      hip: star.hip,
      name: classification.properName ?? classification.catalogDesignation ?? star.name,
      properName: classification.properName,
      hasProperName: classification.hasProperName,
      designationKind: classification.designationKind,
      catalogDesignation: classification.catalogDesignation,
      ra: star.ra,
      dec: star.dec,
      magnitude: star.magnitude,
      constellation: {
        slug: constellation.slug,
        ru: constellation.name,
        en: constellation.commonName,
        biblicalRu: editorialRu[constellation.slug]?.semanticName ?? "",
        biblicalEn: editorialEn[constellation.slug]?.semanticName ?? "",
      },
      vector: vector(star.ra, star.dec),
    };
    const existing = selectedByHip.get(star.hip);
    if (!existing || (!existing.name && candidate.name)) selectedByHip.set(star.hip, candidate);
  }
}

const stars = [...selectedByHip.values()].sort((a, b) => a.hip - b.hip);
const bestByConstellationChain = new Map();
const variantsByConstellationChain = new Map();
let testedPairs = 0;
let testedTriples = 0;
let geometricHits = 0;

for (let firstIndex = 0; firstIndex < stars.length; firstIndex += 1) {
  const first = stars[firstIndex];
  for (let secondIndex = 0; secondIndex < stars.length; secondIndex += 1) {
    if (firstIndex === secondIndex) continue;
    const second = stars[secondIndex];
    if (first.constellation.slug === second.constellation.slug) continue;
    const normal = normalizedCross(first.vector, second.vector);
    if (!normal) continue;
    const throughAngle = directedAngle(first.vector, second.vector, normal);
    if (throughAngle < 5 || throughAngle > 175) continue;
    testedPairs += 1;

    for (let targetIndex = 0; targetIndex < stars.length; targetIndex += 1) {
      if (targetIndex === firstIndex || targetIndex === secondIndex) continue;
      const target = stars[targetIndex];
      if (
        target.constellation.slug === first.constellation.slug ||
        target.constellation.slug === second.constellation.slug
      ) continue;
      testedTriples += 1;
      const deviation = Math.asin(clamp(Math.abs(dot(target.vector, normal)))) * degreesPerRadian;
      if (deviation > threshold) continue;
      const targetAngle = directedAngle(first.vector, target.vector, normal);
      const forwardAngle = targetAngle - throughAngle;
      if (forwardAngle < 2 || forwardAngle > maxForward) continue;
      geometricHits += 1;

      const prominence = [first, second, target]
        .reduce((sum, star) => sum + Math.max(0, Math.min(1, (6.5 - star.magnitude) / 6.5)), 0) / 3;
      const balance = Math.min(throughAngle, forwardAngle) / Math.max(throughAngle, forwardAngle);
      const score = (1 - deviation / threshold) * 75 + prominence * 15 + balance * 10;
      const forwardKey = `${first.constellation.slug}>${second.constellation.slug}>${target.constellation.slug}`;
      const reverseKey = `${target.constellation.slug}>${second.constellation.slug}>${first.constellation.slug}`;
      const chainKey = forwardKey < reverseKey ? forwardKey : reverseKey;
      const finding = {
        id: `${first.hip}-${second.hip}-${target.hip}`,
        chainKey,
        score: Number(score.toFixed(3)),
        quality: qualityFor(deviation),
        deviation: Number(deviation.toFixed(9)),
        firstToSecond: Number(throughAngle.toFixed(2)),
        secondToTarget: Number(forwardAngle.toFixed(2)),
        first: { ...first, vector: undefined },
        through: { ...second, vector: undefined },
        target: { ...target, vector: undefined },
        ...alignmentNameMetadata([first, second, target]),
      };
      const existing = bestByConstellationChain.get(chainKey);
      if (!existing || finding.score > existing.score) bestByConstellationChain.set(chainKey, finding);
      const group = variantsByConstellationChain.get(chainKey) ?? { count: 0, findings: [] };
      group.count += 1;
      group.findings.push(finding);
      group.findings.sort((a, b) => a.deviation - b.deviation || b.score - a.score);
      if (group.findings.length > maxVariantsPerChain) group.findings.length = maxVariantsPerChain;
      variantsByConstellationChain.set(chainKey, group);
    }
  }
}

const rankedFindings = [...bestByConstellationChain.values()]
  .sort((a, b) => a.deviation - b.deviation || b.score - a.score);
const selectedFindings = Number.isFinite(resultLimit) ? rankedFindings.slice(0, resultLimit) : rankedFindings;
const findings = selectedFindings.map((finding) => ({
  id: finding.id,
  chainKey: finding.chainKey,
  variantCount: variantsByConstellationChain.get(finding.chainKey)?.count ?? 1,
  score: finding.score,
  quality: finding.quality,
  deviation: finding.deviation,
  firstToSecond: finding.firstToSecond,
  secondToTarget: finding.secondToTarget,
  properNameCount: finding.properNameCount,
  allStarsProperNamed: finding.allStarsProperNamed,
  allStarsNakedEyeVisible: finding.allStarsNakedEyeVisible,
  unorderedGroupKey: finding.unorderedGroupKey,
  orderedChainKey: finding.orderedChainKey,
  starHips: [finding.first.hip, finding.through.hip, finding.target.hip],
}));
const selectedChainKeys = new Set(selectedFindings.map((finding) => finding.chainKey));
const variantGroups = Object.fromEntries(
  [...variantsByConstellationChain.entries()]
    .filter(([chainKey]) => selectedChainKeys.has(chainKey))
    .map(([chainKey, group]) => [chainKey, group.findings.map((finding) => ({
      id: finding.id,
      deviation: finding.deviation,
      starHips: [finding.first.hip, finding.through.hip, finding.target.hip],
    }))]),
);
const outputStars = Object.fromEntries(stars.map(({ vector, ...star }) => {
  void vector;
  return [star.hip, star];
}));
const thresholdCorpus = findings.filter((finding) => finding.deviation <= .001);
const properNameDistributionAt001 = Object.fromEntries(
  [0, 1, 2, 3].map((count) => [count, thresholdCorpus.filter((finding) => finding.properNameCount === count).length]),
);

const output = {
  generatedAt: new Date().toISOString(),
  source: "HYG 4.1 / J2000 positions from generated-sky.ts",
  method: "Directed great-circle scan; one best stellar chain retained per reversible constellation triple, with variants stored separately.",
  filters: {
    constellationCount: mainSlugs.length,
    stars: "reference-contour endpoints plus named stars",
    distinctConstellations: true,
    thresholdDegrees: threshold,
    maximumForwardDegrees: maxForward,
  },
  statistics: {
    selectedStars: stars.length,
    testedPairs,
    testedTriples,
    geometricHits,
    uniqueConstellationChains: bestByConstellationChain.size,
    returnedFindings: findings.length,
    properNameDistributionAt001,
  },
  constellations: mainSlugs,
  stars: outputStars,
  findings,
};

const variantsOutput = {
  generatedAt: output.generatedAt,
  source: output.source,
  maxVariantsPerChain,
  groups: variantGroups,
};

const outputPath = resolve(root, "data/research-alignments.json");
const variantsOutputPath = resolve(root, "data/research-alignment-variants.json");
await Promise.all([
  writeFile(outputPath, `${JSON.stringify(output)}\n`),
  writeFile(variantsOutputPath, `${JSON.stringify(variantsOutput)}\n`),
]);
console.log(`Scanned ${mainSlugs.length} constellations and ${stars.length} significant stars.`);
console.log(`Tested ${testedPairs.toLocaleString()} directed pairs and ${testedTriples.toLocaleString()} candidate triples.`);
console.log(`Saved ${findings.length} ranked alignments to ${outputPath}.`);
console.log(`Saved up to ${maxVariantsPerChain} star-level variants per chain to ${variantsOutputPath}.`);
