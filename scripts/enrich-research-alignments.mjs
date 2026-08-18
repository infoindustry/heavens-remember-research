import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  alignmentNameMetadata,
  classifyStarDesignation,
} from "./lib/star-classification.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function extractJsonArray(source, declaration) {
  const declarationIndex = source.indexOf(declaration);
  if (declarationIndex < 0) throw new Error(`Cannot find ${declaration}`);
  const assignment = source.indexOf("=", declarationIndex);
  const start = source.indexOf("[", assignment);
  const end = source.lastIndexOf("];\n");
  if (start < 0 || end < 0) throw new Error(`Cannot parse ${declaration}`);
  return JSON.parse(source.slice(start, end + 1));
}

const alignmentPath = resolve(root, "data/research-alignments.json");
const [skySource, alignmentSource] = await Promise.all([
  readFile(resolve(root, "src/data/generated-sky.ts"), "utf8"),
  readFile(alignmentPath, "utf8"),
]);
const skyCatalog = extractJsonArray(skySource, "export const skyCatalog");
const data = JSON.parse(alignmentSource);
const catalogByHipAndSlug = new Map();

for (const constellation of skyCatalog) {
  for (const star of [...constellation.stars, ...constellation.referenceStars]) {
    catalogByHipAndSlug.set(`${star.hip}:${constellation.slug}`, {
      star,
      abbreviation: constellation.abbreviation,
    });
  }
}

const stars = Object.fromEntries(
  Object.entries(data.stars).map(([hip, star]) => {
    const catalog = catalogByHipAndSlug.get(`${hip}:${star.constellation.slug}`);
    if (!catalog) throw new Error(`Missing generated-sky source for HIP ${hip} in ${star.constellation.slug}`);
    const classification = classifyStarDesignation(catalog.star, catalog.abbreviation);
    return [hip, {
      ...star,
      name: classification.properName ?? classification.catalogDesignation ?? star.name,
      properName: classification.properName,
      hasProperName: classification.hasProperName,
      designationKind: classification.designationKind,
      catalogDesignation: classification.catalogDesignation,
      magnitude: catalog.star.magnitude,
      ra: catalog.star.ra,
      dec: catalog.star.dec,
    }];
  }),
);

const findings = data.findings.map((finding) => {
  const alignmentStars = finding.starHips.map((hip) => stars[String(hip)]);
  if (alignmentStars.some((star) => !star)) throw new Error(`Missing star for ${finding.id}`);
  return { ...finding, ...alignmentNameMetadata(alignmentStars) };
});
const thresholdCorpus = findings.filter((finding) => finding.deviation <= .001);
const properNameDistributionAt001 = Object.fromEntries(
  [0, 1, 2, 3].map((count) => [count, thresholdCorpus.filter((finding) => finding.properNameCount === count).length]),
);

const provenanceSuffix = "proper names classified from the HYG proper field";
// Enrichment must be idempotent: re-running it may not append the suffix again.
const source = data.source.includes(provenanceSuffix)
  ? data.source
  : `${data.source}; ${provenanceSuffix}`;

const output = {
  ...data,
  generatedAt: new Date().toISOString(),
  source,
  statistics: {
    ...data.statistics,
    properNameDistributionAt001,
  },
  stars,
  findings,
};

await writeFile(alignmentPath, `${JSON.stringify(output)}\n`);
console.log(`Enriched ${Object.keys(stars).length} stars and ${findings.length} precomputed alignments.`);
console.log(`Proper-name distribution at <= 0.001° (0/1/2/3): ${[0, 1, 2, 3].map((count) => properNameDistributionAt001[count]).join("/")}`);
