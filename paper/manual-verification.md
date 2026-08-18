# Method Paper: manual verification register

This register is part of the publication gate. A checked box means that a human reviewer inspected the cited source itself, not merely a search result, project label, or secondary quotation.

| ID | Claim or decision | Current evidence | Required human action | Status |
| --- | --- | --- | --- | --- |
| A01 | Public author name and order | Alex K, ORCID `0009-0004-8829-4273`, as first creator, with "Heavens Remember Editorial Board" as second | Keep the ORCID published name in step with the citation string; add an affiliation if one is ever declared | DECIDED |
| A02 | Author biography | A board description is carried in the metadata block of all four paper files | Revise if the attribution changes to named individuals | DECIDED |
| A03 | First publication date | 2026-08-19, the date the paper went live at `/methodology/paper` | Keep in step with `date-released` in `CITATION.cff` | DECIDED |
| A04 | DOI | Deposited at Zenodo on 2026-08-19. Concept DOI `10.5281/zenodo.22003724` (all versions), version DOI `10.5281/zenodo.22003725` (v1.4). Minted automatically from the GitHub release of `infoindustry/heavens-remember-research` | Add the new version DOI to both papers and `CITATION.cff` on every subsequent release | DECIDED |
| A05 | Paper licence | CC BY-SA 4.0, following the recommendation in `docs/licensing-audit.md`; project code stays MIT | Confirm compatibility with quoted material before any external deposit | DECIDED |
| A06 | Dataset licence and attribution | CC BY-SA 4.0 with HYG 4.1 attribution retained, per `docs/licensing-audit.md` | Approve the exact attribution and ShareAlike notice for the method-paper JSON | DECIDED |
| H01 | Rolleston as a precursor of the later Gospel-in-the-Stars literature | Original 1862 volume and bibliographic catalogue are linked in `references.bib` | Inspect title page, preface, and publication sequence (1862-1865); approve wording | OPEN |
| H02 | Seiss publication history | 1885 new/enlarged edition; sources report an 1882 first edition | Inspect both title pages and decide which edition is cited in prose | OPEN |
| H03 | Bullinger's dependence on Rolleston and responsibility for his interpretation | Bullinger 1893 preface, pp. iii-v in the Gutenberg transcription | Verify against a page scan and record exact page references | OPEN |
| H04 | Ancient constellation transmission | Rogers 1998 parts I-II; Hunger and Pingree 1989 | A historian of astronomy should review every historical summary sentence | OPEN |
| H05 | Modern constellation identity and official star names | IAU constellation pages and WGSN catalogue | Archive dated copies of the exact IAU lists used at publication | OPEN |
| D01 | HYG 4.1 source file | Cached `hygdata_v41.csv`, SHA-256 recorded in JSON | Deposit the exact CSV or a licence-compliant retrieval manifest and verify its hash | OPEN |
| D02 | Meaning of the HYG `proper` field | Generator and classification tests; three Gould forms are excluded | Compare the field documentation with HYG 4.1 README and approve the exception rule | OPEN |
| D03 | The 629-star selection | Reproducible generator rule: named stars plus reference-contour endpoints in 56 selected constellations | Independently rerun from a clean cache and compare the resulting hash | OPEN |
| D04 | Historical status of all 56 constellation entries | `docs/constellation-antiquity-register-v1.0.md`: 47 Ptolemaic figures, 3 Argo descendants, 6 special cases | Verify every row against the cited source, add page/table locators, and approve which strata define the project's historical core | OPEN |
| D05 | Six non-Ptolemaic/special entries | Coma Berenices, Canes Venatici, Leo Minor, Lynx, Crux, Triangulum Australe | Decide whether each remains in the main analysis, is reported only as a secondary stratum, or is excluded from claims about ancient topography | OPEN |
| M01 | Counts 385,264 / 230,680,184 / 375,294 / 18,427 | `data/research-alignments.json` and generator counters | Independent rerun and code review by a second person | OPEN |
| M02 | Score formula and weights 75/15/10 | `scripts/find-celestial-alignments.mjs` | Confirm that the weights are heuristic; freeze or version them for reproducibility | OPEN |
| M03 | One best record per reversible constellation chain | `chainKey` and `bestByConstellationChain` | Confirm that choosing by score, rather than minimum deviation, is intended | OPEN |
| M04 | Variant count | Full count is retained, but only 12 variant records per chain are stored | Decide whether the publication archive must include every star-level hit | OPEN |
| R01 | The 556-result precision table | Generated from the current JSON | Recompute independently and sign off on band boundaries | OPEN |
| R02 | Proper-name distribution 43/199/220/94 | Central classification rule and tests | Audit the 94 three-name records against IAU WGSN and HYG documentation | OPEN |
| R03 | Frequent-constellation table | Counts appearances in the 556 retained records, not raw hits | Approve this denominator and add a null-model expectation before inferential use | OPEN |
| C01 | Final research-question wording | Draft now asks whether ancient-sky topography permits a coherent biblical reconstruction; star names are an independent additional layer | Approve the RU/EN wording and the declared boundary between computation, history, and hermeneutics | OPEN |
| C02 | Final twelve case studies | Current list contains 10 published and 2 draft candidates | Keep the current mixed set or approve a replacement set; document the editorial and historical rule | OPEN |
| C03 | `rasalgethi-deneb-lambda-andromedae` | All HIP objects resolve, but the unordered triple is absent from the automatic corpus | Decide whether it remains as a negative case and document why it was originally nominated | OPEN |
| C04 | `chi-herculis-kappa-cygni-algenib` | Two HIP values are zero/unresolved | Resolve the exact catalogue objects before any geometric claim | OPEN |
| E01 | Etymologies for all case-study star names | Project fields are empty; HYG proper names are labels, not etymological proof | Verify each name line by line using IAU WGSN, Kunitzsch and Smart, and language-specific primary scholarship | OPEN |
| E02 | Biblical semantic labels for the 56 constellations | Project editorial JSON | Mark every label as editorial unless a historical source directly supports it; record alternatives | OPEN |
| S01 | Scripture mappings in each case | Current finding seeds attach only general references (Genesis 1:14; Psalm 18:2/19:1) | Author/theological reviewer must select and justify case-specific passages | OPEN |
| S02 | Bible translation rights | Edition-specific and not covered by the dataset licence | Select RU/EN editions and approve quotation lengths or use references only | OPEN |
| X01 | Robustness and alternative-explanation controls | Proposed as an auxiliary analysis, not the project's primary question; not executed in v1.0 | Decide which sensitivity, permutation, or control-corpus checks are proportionate and label them separately from the hermeneutical reconstruction | OPEN |
| X02 | Independence of evaluation | No external review recorded | Arrange independent astronomical, historical-linguistic, statistical, and theological reviews appropriate to each layer | OPEN |

## Required author decisions before publication

1. Whether the collective attribution replaces, or is replaced by, named individuals with ORCIDs.
2. Confirmation of the declared paper and dataset licences at the first external deposit.
3. Exact primary research question and the boundary between geometric, historical, and hermeneutical conclusions.
4. Which historical strata in the 56-entry register define the main corpus, especially the six special cases.
5. Whether the present 12-case mixed set is retained; if not, the selection rule and replacement cases.
6. First publication venue/date and DOI deposit workflow.

## Version 1.4 additions

Version 1.4 reorganizes the corpus and adds source claims that v1.0 did not make. These rows are additional to the register above; every v1.0 row remains in force, because v1.4 reuses the v1.0 numbers unchanged.

| ID | Claim or decision | Current evidence | Required human action | Status |
| --- | --- | --- | --- | --- |
| V01 | `H1/H2/R-S/X` classification of all 56 entries | Defined as a rule in v1.4 §6.5; the register still records only the three v1.0 historical strata | Assign a code to every row of `constellation-antiquity-register-v1.0.md` and record the source that justifies it | OPEN |
| V02 | Argo Navis is a single ancient figure and Carina/Puppis/Vela are a later division | `ptolemyToomer1984`; `argoClassical` is a secondary collection | Verify the Ptolemaic catalogue entry and each classical locus (Aratus, Cicero, Vitruvius, Germanicus) in a primary critical edition | OPEN |
| V03 | Job 9:9 `weḥadrê têmān` as "chambers of the south" | `jobCambridge`, `jobKeilDelitzsch`, both entered with unverified locators | Check the Hebrew against BHS, confirm the commentary editions, volumes, and page numbers, and record whether the southern-sky reading is the majority view | OPEN |
| V04 | Treating the "chambers of the south" as a reconstructive sector of the sky map | Project's own architectural decision in v1.4 §4.4 and §6.6 | Approve the wording that separates the exegetical claim about Job from the project's reconstructive use of the phrase | OPEN |
| V05 | Removal of Canes Venatici, Leo Minor, and Lynx from the primary corpus | `hevelius1690`; v1.0 register rows for the six special cases | Confirm the Hevelius attestation and record where the archived early findings remain published | OPEN |
| V06 | Stability of a figure's semantic role across all chains (v1.4 §12.1) | Project editorial vocabulary | Mark this as a declared hermeneutical rule, not a historical finding, and state where the vocabulary is defined | OPEN |
| V07 | New bibliography entries added in v1.4 | `jobHebrew`, `jobCambridge`, `jobKeilDelitzsch`, `argoClassical`, `hungerSteele2019`, `verbuntVanGent2012` | Inspect each source and replace the "requires manual verification" notes in `references.bib` with exact locators | OPEN |
| V08 | v1.4 reuses v1.0 counts without a new run | v1.4 §8.1 states this explicitly; the run provenance is kept in `method-paper-data-v1.0.json` and §14 of the v1.0 papers | Confirm before publication that no v1.4 table has been silently recomputed, and that the new run replaces every table at once when it happens | OPEN |
