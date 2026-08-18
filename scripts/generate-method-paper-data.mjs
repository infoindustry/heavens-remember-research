import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const alignmentPath = resolve(root, "data/research-alignments.json");
const variantsPath = resolve(root, "data/research-alignment-variants.json");
const hygPath = resolve(root, ".cache/sky-v2/hygdata_v41.csv");
const outputPath = resolve(root, "docs/method-paper-data-v1.0.json");

const caseStudies = [
  { slug: "rasalgethi-deneb-lambda-andromedae", status: "draft", hips: [84345, 102098, 116584] },
  { slug: "chi-herculis-kappa-cygni-algenib", status: "draft", hips: [0, 0, 1067] },
  { slug: "gacrux-alderamin-nembus", status: "published", hips: [61084, 105199, 7607] },
  { slug: "lesath-sheratan-jishui", status: "published", hips: [85696, 8903, 37265] },
  { slug: "la-superba-albireo-fomalhaut", status: "published", hips: [62223, 95947, 113368] },
  { slug: "guniibuu-sadalmelik-algenib", status: "published", hips: [84405, 109074, 1067] },
  { slug: "alhena-zubenelgenubi-albali", status: "published", hips: [31681, 72622, 102618] },
  { slug: "cih-sham-ginan", status: "published", hips: [4427, 96757, 60260] },
  { slug: "sadr-gienah-theemin", status: "published", hips: [100453, 59803, 21393] },
  { slug: "gienah-taygeta-hamal", status: "published", hips: [59803, 17531, 9884] },
  { slug: "acamar-mebsuta-xuange", status: "published", hips: [13847, 32246, 69732] },
  { slug: "markab-hassaleh-ukdah", status: "published", hips: [113963, 23015, 47431] },
];

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

const [alignmentBuffer, variantsBuffer, hygBuffer] = await Promise.all([
  readFile(alignmentPath),
  readFile(variantsPath),
  readFile(hygPath),
]);
const alignmentData = JSON.parse(alignmentBuffer);
const precise = alignmentData.findings.filter((finding) => finding.deviation <= 0.001);
const precisionEdges = [0.00001, 0.00005, 0.0001, 0.00025, 0.0005, 0.001];
let lower = 0;
const precisionDistribution = precisionEdges.map((upper) => {
  const record = {
    lowerExclusiveDegrees: lower,
    upperInclusiveDegrees: upper,
    count: precise.filter((finding) => finding.deviation > lower && finding.deviation <= upper).length,
    cumulativeCount: precise.filter((finding) => finding.deviation <= upper).length,
  };
  lower = upper;
  return record;
});

const byUnorderedTriple = new Map();
for (const finding of precise) {
  const group = byUnorderedTriple.get(finding.unorderedGroupKey) ?? [];
  group.push(finding);
  byUnorderedTriple.set(finding.unorderedGroupKey, group);
}
const multiplicity = Object.fromEntries(
  [1, 2, 3].map((count) => [count, [...byUnorderedTriple.values()].filter((group) => group.length === count).length]),
);

const constellationFrequency = new Map();
for (const finding of precise) {
  for (const hip of finding.starHips) {
    const star = alignmentData.stars[String(hip)];
    const existing = constellationFrequency.get(star.constellation.slug) ?? {
      slug: star.constellation.slug,
      ru: star.constellation.ru,
      en: star.constellation.en,
      count: 0,
    };
    existing.count += 1;
    constellationFrequency.set(star.constellation.slug, existing);
  }
}

const resolvedCases = caseStudies.map((item) => {
  const validHips = item.hips.filter((hip) => hip > 0);
  const unorderedGroupKey = validHips.length === 3
    ? [...validHips].sort((a, b) => a - b).join("-")
    : null;
  const matches = unorderedGroupKey
    ? alignmentData.findings.filter((finding) => finding.unorderedGroupKey === unorderedGroupKey)
    : [];
  return {
    ...item,
    unresolvedHipCount: item.hips.filter((hip) => hip <= 0).length,
    unorderedGroupKey,
    inAutomaticCorpus: matches.length > 0,
    automaticMatches: matches.map((finding) => ({
      id: finding.id,
      orderedChainKey: finding.orderedChainKey,
      deviationDegrees: finding.deviation,
      firstToSecondDegrees: finding.firstToSecond,
      secondToTargetDegrees: finding.secondToTarget,
      score: finding.score,
      variantCount: finding.variantCount,
      properNameCount: finding.properNameCount,
      stars: finding.starHips.map((hip) => {
        const star = alignmentData.stars[String(hip)];
        return {
          hip: star.hip,
          properName: star.properName,
          catalogDesignation: star.catalogDesignation,
          raHoursJ2000: star.ra,
          decDegreesJ2000: star.dec,
          visualMagnitude: star.magnitude,
          constellation: star.constellation,
        };
      }),
    })),
  };
});

const variantCounts = precise.map((finding) => finding.variantCount);
const gitCommit = execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim();
const output = {
  schemaVersion: "1.0.0",
  paperVersion: "1.0",
  project: {
    name: "Heavens Remember",
    url: "https://www.heavensremember.top",
    repository: "https://github.com/infoindustry/stars",
    gitCommit,
  },
  provenance: {
    stellarCatalogue: "HYG Database 4.1",
    coordinateEpoch: "J2000",
    alignmentGeneratedAt: alignmentData.generatedAt,
    checksumsSha256: {
      hygdataV41Csv: sha256(hygBuffer),
      researchAlignmentsJson: sha256(alignmentBuffer),
      researchAlignmentVariantsJson: sha256(variantsBuffer),
    },
  },
  methodParameters: {
    constellationCount: alignmentData.filters.constellationCount,
    starSelection: alignmentData.filters.stars,
    distinctConstellations: alignmentData.filters.distinctConstellations,
    maximumCrossTrackDeviationDegrees: alignmentData.filters.thresholdDegrees,
    minimumFirstToThroughDegrees: 5,
    maximumFirstToThroughDegrees: 175,
    minimumForwardDegrees: 2,
    maximumForwardDegrees: alignmentData.filters.maximumForwardDegrees,
    maximumStoredVariantsPerChain: 12,
    nakedEyeMagnitudeLimit: 6,
  },
  constellationCorpus: {
    currentComputationalCount: 56,
    historicalStrataDraft: {
      independentPtolemaicFigures: 47,
      modernDescendantsOfArgoNavis: 3,
      specialCasesRequiringIndividualJustification: 6,
    },
    register: "docs/constellation-antiquity-register-v1.0.md",
    warning: "The computational corpus is not yet a source-verified homogeneous corpus of 56 ancient constellations.",
  },
  corpusCounts: alignmentData.statistics,
  preciseCorpusAtOrBelow001Degrees: {
    total: precise.length,
    precisionDistribution,
    properNameCountExact: alignmentData.statistics.properNameDistributionAt001,
    unorderedHipTriples: {
      unique: byUnorderedTriple.size,
      groupsByRetainedOrderedChainMultiplicity: multiplicity,
      note: "Forward/reverse constellation chains are canonicalized; multiplicity records different retained placements of the same three HIP objects, not duplicate reverse directions.",
    },
    variantCountSummary: {
      minimum: Math.min(...variantCounts),
      median: median(variantCounts),
      mean: Number((variantCounts.reduce((sum, value) => sum + value, 0) / variantCounts.length).toFixed(6)),
      maximum: Math.max(...variantCounts),
    },
    mostFrequentConstellations: [...constellationFrequency.values()]
      .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug))
      .slice(0, 20),
  },
  provisionalCaseStudies: resolvedCases,
  interpretationBoundary: {
    astronomy: "Coordinates, magnitudes, catalogue identifiers, and computed spherical geometry.",
    historical: "Requires source-by-source verification; a HYG proper-name field is not etymological evidence.",
    theological: "Editorial hypothesis supplied by Heavens Remember; not an astronomical inference.",
  },
};

await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Wrote ${outputPath}`);
