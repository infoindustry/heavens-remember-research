# Heavens Remember — method paper and research data

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22003724.svg)](https://doi.org/10.5281/zenodo.22003724)

This repository holds the citable record of the Heavens Remember method paper and the star data the paper's numbers are computed from. It is the archival companion to the project website at <https://www.heavensremember.top>.

The project maps geometric relations between stars and sky figures on the celestial sphere, tests which of those figures are historically attested, and reconstructs their place in the biblical narrative. The method is a great-circle scan: for every admissible directed pair of stars, the plane of a great circle is constructed, and a third star is tested by its cross-track angular deviation and its forward position along the directed arc.

## Contents

| Path | What it is |
| --- | --- |
| `paper/method-paper-v1.4.ru.md` | Method paper, version 1.4, Russian — current version |
| `paper/method-paper-v1.4.en.md` | Method paper, version 1.4, English — current version |
| `paper/method-paper-v1.0.ru.md` | Method paper, version 1.0, Russian — frozen baseline |
| `paper/method-paper-v1.0.en.md` | Method paper, version 1.0, English — frozen baseline |
| `paper/references.bib` | Shared BibTeX bibliography |
| `paper/constellation-antiquity-register-v1.0.md` | Provenance cards and historical strata for the 56 corpus entries |
| `paper/manual-verification.md` | Source-verification register: what a human has and has not checked |
| `data/method-paper-data-v1.0.json` | Machine-readable counts, distributions, checksums, and the twelve case studies |
| `data/research-alignments.json` | The full retained corpus: 18,427 unique constellation chains |
| `data/research-alignment-variants.json` | Up to 12 star-level variants per chain |
| `data/atlas-manifest.json` | Layer-by-layer licence and attribution manifest |
| `src/data/generated-sky.ts` | Star catalogue derived from HYG 4.1 and Stellarium figure lines |
| `scripts/` | The scan, enrichment, and appendix generators |

## The numbers

The frozen v1.0 run tested 385,264 directed pairs and 230,680,184 stellar triples. The geometric filters admitted 375,294 hits; canonicalizing forward and reverse orders at the constellation-chain level left 18,427 unique chains. At a deviation of no more than 0.001°, 556 chains remain, of which 94 pass through three stars carrying proper names in the HYG `proper` field.

Version 1.4 reuses these numbers unchanged and reorganizes the corpus: figures are classified `H1` (ancient independent), `H2` (ancient asterism), `R-S` (chambers-of-the-south reconstruction), and `X` (outside the semantic corpus).

## Reproducing the corpus

```bash
curl -L -o hygdata_v41.csv https://codeberg.org/astronexus/hyg/raw/branch/main/data/hyg/CURRENT/hygdata_v41.csv
mkdir -p .cache/sky-v2 && mv hygdata_v41.csv .cache/sky-v2/
node scripts/find-celestial-alignments.mjs --threshold=0.3 --forward=120 --variants=12
node scripts/enrich-research-alignments.mjs
node scripts/generate-method-paper-data.mjs
```

The HYG source file is not redistributed here. Fetch it from upstream and verify it against the SHA-256 recorded in `data/method-paper-data-v1.0.json`:

```
d9f69fd86bbf90a4e4d52b4c5c53eacfa6dfc0bfdef85bfd94f095e0bebe4ebd
```

Node.js 22 or later. No dependencies to install — the scripts use only Node built-ins.

## What this repository does not contain

By design, and following `data/atlas-manifest.json`:

- **Constellation artwork.** Derived from Stellarium illustrations by Johan Meuris, under the Free Art License, which is not compatible with the dataset licence. It is distributed separately.
- **The full editorial corpus.** `data/constellation-editorial*.json` here is a reduced extract carrying only the `semanticName` label per figure — the ~58 short strings the pipeline reads. The full interpretive commentary stays with the project.
- **Quoted primary text.** Bible and literary quotations are edition-specific and are not offered under the dataset licence. Citations appear in the paper; the quoted text does not.
- **The website application source.** Not needed to verify any claim in the paper.

## Known limitations

These are stated plainly because a DOI freezes a citable record.

1. **Six bibliography entries are unverified.** `jobHebrew`, `jobCambridge`, `jobKeilDelitzsch`, `argoClassical`, `hungerSteele2019`, and `verbuntVanGent2012` carry `note` fields saying their editions and page locators still require inspection against the sources. Rows `V01`–`V08` of `paper/manual-verification.md` track this.
2. **`generatedAt` makes the checksums run-specific.** `data/research-alignments.json` embeds a generation timestamp, so re-running the pipeline produces a different SHA-256 even when every computed value is identical. The recorded checksums identify the specific archived artifact, not a reproducible hash of the computation.
3. **The frozen corpus carries a repeated provenance string.** `source` in `data/research-alignments.json` repeats "proper names classified from the HYG proper field" three times, because enrichment was run three times over the same file before the script was made idempotent. The repetition is cosmetic and affects no computed value; it is left in place so the archived file still matches the SHA-256 the paper documents.
4. **The `H1/H2/R-S/X` codes are not yet assigned row by row.** `paper/constellation-antiquity-register-v1.0.md` documents three historical strata over the 56 entries but does not yet carry the v1.4 codes.
5. **Attribution is collective.** The work is published as "Heavens Remember Editorial Board". Whether named individuals with ORCIDs replace that form is an open decision.

## Licences

This repository is deliberately mixed-licence. Check the layer before reusing.

| Layer | Licence |
| --- | --- |
| Paper text (`paper/`) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| Research data (`data/`, `src/data/`) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| Scripts (`scripts/`) | [MIT](LICENSE-SCRIPTS) |

The data layer is CC BY-SA because it derives from HYG Database 4.1 and Stellarium figure lines, both of which are CC BY-SA; ShareAlike carries through to derivatives. See `THIRD_PARTY_NOTICES.md` for the full attribution chain.

## Citing

Cite the concept DOI to always point at the latest version:

> Heavens Remember Editorial Board (2026). *Heavens Remember: Restoring the Celestial Sermon through Constellation Topography and the Great-Circle Method*. Zenodo. https://doi.org/10.5281/zenodo.22003724

To pin the exact release you used, cite its version DOI instead — `10.5281/zenodo.22003725` for v1.4. Machine-readable metadata is in `CITATION.cff`.
