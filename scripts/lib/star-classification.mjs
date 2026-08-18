export const NAKED_EYE_MAGNITUDE_LIMIT = 6;

function clean(value) {
  const normalized = typeof value === "string" ? value.trim() : "";
  return normalized || null;
}

function hygCatalogDesignationInProperField(value) {
  return /^\d+\s+G\.\s+[A-Z][A-Za-z]{2}$/.test(value);
}

export function classifyStarDesignation(star, constellationAbbreviation = "") {
  const hygProperValue = clean(star.proper ?? star.properName);
  const misplacedCatalogDesignation = hygProperValue && hygCatalogDesignationInProperField(hygProperValue)
    ? hygProperValue
    : null;
  const properName = misplacedCatalogDesignation ? null : hygProperValue;
  const bayer = clean(star.bayer);
  const flamsteed = clean(star.flamsteed ?? star.flam);
  const abbreviation = clean(constellationAbbreviation);
  const catalogParts = [flamsteed, bayer].filter(Boolean);
  const catalogDesignation = catalogParts.length
    ? [...catalogParts, abbreviation].filter(Boolean).join(" ")
    : misplacedCatalogDesignation
      ? misplacedCatalogDesignation
    : Number.isFinite(Number(star.hip))
      ? `HIP ${Number(star.hip)}`
      : null;

  return {
    properName,
    hasProperName: properName !== null,
    designationKind: properName
      ? "proper"
      : bayer
        ? "bayer"
        : flamsteed
          ? "flamsteed"
          : misplacedCatalogDesignation
            ? "other"
          : catalogDesignation?.startsWith("HIP ")
            ? "hip"
            : "other",
    catalogDesignation,
  };
}

export function alignmentNameMetadata(stars) {
  const properNameCount = stars.reduce(
    (count, star) => count + (star.hasProperName ? 1 : 0),
    0,
  );
  if (properNameCount < 0 || properNameCount > 3) {
    throw new Error(`Invalid proper-name count: ${properNameCount}`);
  }

  return {
    properNameCount,
    allStarsProperNamed: properNameCount === 3,
    allStarsNakedEyeVisible: stars.every(
      (star) => Number(star.magnitude) <= NAKED_EYE_MAGNITUDE_LIMIT,
    ),
    unorderedGroupKey: stars
      .map((star) => Number(star.hip))
      .sort((a, b) => a - b)
      .join("-"),
    orderedChainKey: stars
      .map((star) => star.constellation.slug)
      .join(">"),
  };
}
