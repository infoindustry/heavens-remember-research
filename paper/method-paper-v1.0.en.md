# Heavens Remember: A Great-Circle Method for Discovering Biblical Narrative Chains on the Celestial Sphere

**Author:** Heavens Remember Editorial Board  
**Author contributions (CRediT):** conceptualization, methodology, software, analysis, visualization, and writing — Heavens Remember Editorial Board  
**About the board:** The Heavens Remember Editorial Board carries the astronomical, historical, philological, and biblical layers of the project. It is responsible for separating verifiable data from interpretation, for checking historical and etymological claims against their sources, and for recording substantive revisions. The computational layer runs through the project's own scripts over HYG Database 4.1; the semantic reconstruction proceeds within a declared biblical hermeneutic. Individual contributors are named as forms of public attribution are approved.  
**Project:** Heavens Remember  
**Document version:** 1.0  
**Preparation date:** 18 August 2026  
**Date of first publication:** 19 August 2026  
**Project URL:** https://www.heavensremember.top  
**Repository for paper and data:** https://github.com/infoindustry/heavens-remember-research  
**DOI:** https://doi.org/10.5281/zenodo.22003724 — all versions; version 1.4: 10.5281/zenodo.22003725  
**Paper copyright and licence:** © Heavens Remember. Paper text: CC BY 4.0. Reproduction scripts: MIT. Data derived from HYG Database 4.1: CC BY-SA 4.0 with source attribution retained.

> Document status. This is a methods and research paper, not a claim that a theological proposition or an astronomical interpretation has been proved. Numerical results reproduce the project at commit `c664e318962cd7f51d098b6c0312a58af578c18e`. Historical, linguistic, and theological layers are not inferred automatically from geometry.

## 2. Abstract

Heavens Remember maps geometric relations among historical sky figures and investigates whether sequences of those figures permit the reconstruction of a coherent biblical narrative within an explicitly stated biblical hermeneutic. The astronomical layer uses J2000 right ascension and declination coordinates and visual magnitudes from HYG Database 4.1 [@hyg41]. From the 56 constellations in the current computational corpus, the algorithm constructs a set of 629 stars: endpoints of reference contours plus objects with a non-empty proper-name field. For each admissible directed pair, it defines the plane of a great circle and tests a third star by cross-track angular deviation and by its forward position along the directed arc.

The frozen run tested 385,264 directed pairs and 230,680,184 candidate triples. The geometric constraints admitted 375,294 hits; canonicalizing forward and reverse orders at the constellation-chain level left 18,427 unique chains. At a deviation of no more than 0.001°, 556 chains remain. Ninety-four of these contain three objects classified as proper names from the HYG `proper` field after three Gould catalogue forms are excluded. These counts describe exhaustive search and deduplication. They are not a chance probability and do not validate a theological interpretation.

The paper separates five layers: (1) catalogue-based astronomical data; (2) spherical geometry and software selection; (3) source-verifiable historical claims about figures and names; (4) the project's authored theological semantics; and (5) open questions. Geometry is computed; antiquity is established from historical sources; semantic connection is reconstructed hermeneutically; and a historically verified star-name meaning, where available, forms a separate additional layer. The twelve case studies reproduce the project's initial set: ten are published on the website, one is absent from the automatic corpus, and one contains unresolved identifiers. Negative and incomplete cases are retained.

## 3. Research question

The primary question is:

> Does the topography of historically ancient constellations preserve sequential relations which, when their ancient figures and historically attested star names are considered, permit the reconstruction of a coherent biblical narrative?

The secondary question is:

> In which cases does a verified historical meaning of a proper star name provide an independent additional layer of that reconstruction?

The project does not attempt to derive the Gospel scientifically from the stars. Coordinates, corpus membership, and computed geometry are objectively reproducible; historical antiquity is assessed by source criticism; and biblical narrative coherence is argued within a declared hermeneutic. Statistical controls may expose overfitting and test robustness, but they are not the primary research question and do not measure the truth of a theological reading.

## 4. Historical context

Christian narrative readings of traditional sky figures acquired influential forms in the nineteenth century. Frances Rolleston issued *Mazzaroth; or, The Constellations* in parts from 1862 to 1865. Joseph A. Seiss published *The Gospel in the Stars* (first edition, 1882; the bibliography uses the enlarged 1885 edition). E. W. Bullinger published *The Witness of the Stars* in 1893 [@rolleston1862; @seiss1885; @bullinger1893]. In his preface, Bullinger acknowledges Rolleston's collection while taking responsibility for his own interpretation. These books are primary sources for the history of the idea; they are not current astronomical or philological authorities.

The history of the constellations is more complex than a single narrative scheme. The International Astronomical Union standardizes the modern set of 88 constellations and their boundaries, while figures, names, and asterisms have Mesopotamian, Mediterranean, and other cultural histories formed at different times [@iauConstellations; @rogers1998mesopotamian; @rogers1998mediterranean; @hungerPingree1989]. The antiquity of a figure does not establish the antiquity of a particular Christian interpretation. A connection between a modern name and an older form requires a documented source chain.

Modern Bible atlases map terrestrial locations, routes, and the historical settings of texts [@curtis2007; @curridBarrett2010]. Heavens Remember adopts a related discipline—separating map from interpretation—but maps the celestial sphere. Its central difference from classic *Gospel in the Stars* systems is procedural: the desired constellation sequence is not supplied to the algorithm. A complete geometric scan of a fixed set occurs first; a transparent interpretation protocol may be applied only afterward. This reduces but does not remove fitting risk, because the semantic vocabulary and the selection of interesting results can still be shaped after inspection.

## 5. Data

### 5.1 Catalogue and coordinates

The stellar source is a locally pinned HYG Database 4.1 file. The generator downloads `hygdata_v41.csv`, joins HIP identifiers, coordinates, visual magnitude, Bayer/Flamsteed designations, and the `proper` field, then writes coordinates labelled as epoch J2000 [@hyg41]. Right ascension is stored in hours and declination in degrees. Stellar distance is not used: each record is treated as a direction from the centre of a unit sphere.

SHA-256 of the local source CSV: `d9f69fd86bbf90a4e4d52b4c5c53eacfa6dfc0bfdef85bfd94f095e0bebe4ebd`.

### 5.2 Selection of 629 stars

The full atlas generator builds all 88 modern constellations and generally includes stars to magnitude 6.5, together with line and artwork anchors. The Method Paper scan is limited to 56 slugs in `biblicalArtworkSlugs`. Within each, main and reference stars are merged by HIP. A star enters the research set when it has a non-empty `proper` value or is an endpoint in the selected contour. `referenceSegments` are used when present; otherwise the main `segments` are used. Deduplication by HIP yields exactly 629 objects.

The current list is not an arbitrary sample of interpretively convenient figures, but neither can it accurately be described without qualification as 56 ancient constellations. It has three historical strata: (1) 47 modern constellations corresponding to independent figures in Ptolemy's catalogue; (2) Carina, Puppis, and Vela, which are modern independent constellations collectively representing ancient Argo Navis; and (3) six special cases—Coma Berenices, Canes Venatici, Leo Minor, Lynx, Crux, and Triangulum Australe. Coma Berenices is attested in antiquity as an asterism; Canes Venatici, Leo Minor, and Lynx took independent form in Hevelius; Triangulum Australe belongs to early-modern mapping of the southern sky; and the stars of Crux belonged to Centaurus in the ancient catalogue [@ptolemyToomer1984; @hevelius1690; @bayer1603; @lacaille1756].

The historical criterion is therefore introduced as a testable corpus rule, not as a retrospective justification of the existing list: the primary historical stratum contains figures with documented ancient origin or use before the formation of the modern 88-constellation system; late figures cannot acquire ancient status because they are interpretively convenient. All 56 entries and exceptions are recorded in `docs/constellation-antiquity-register-v1.0.md`. Until its source-by-source audit is complete, numerical results refer to the **current computational corpus of 56**, while claims about ancient topography must identify which historical strata they use.

### 5.3 Magnitude and proper names

Visual magnitude comes from HYG. The research corpus uses `m ≤ 6.0` for its naked-eye flag, distinct from the full atlas generator's 6.5 inclusion limit.

`properName` normally equals a non-empty HYG `proper` value. Bayer, Flamsteed, HIP, and Gould labels remain catalogue designations. Three strings—`96 G. Psc`, `268 G. Cet`, and `82 G. Eri`—appear in `proper` but match a Gould designation pattern and are not counted as proper names. A `proper` string establishes only the current code classification; it does not establish etymology, antiquity, or theological meaning. Current standard forms should be checked against the IAU Working Group on Star Names, and etymologies against specialist references and language-specific primary evidence [@iauStarNames; @kunitzschSmart2006].

### 5.4 Catalogue limitations

HYG is an aggregated open catalogue, not a new astrometric reduction. Coordinates are rounded during generation of `generated-sky.ts`; proper names reflect one version-specific field; multiple systems appear as catalogue records. The coordinate frame is fixed at J2000 and the method does not model precession, proper motion, or the sky of a historical observer. This paper measures J2000 directions, not a reconstructed ancient sky.

## 6. Geometric method

### 6.1 Unit vectors

For right ascension `RA` in hours and declination `Dec` in degrees, define

`α = RA × 15°`,  `δ = Dec`.

After conversion to radians, the stellar direction is

`r(α,δ) = (cos δ cos α, cos δ sin α, sin δ)`.

This is a standard representation in positional spherical astronomy [@smartGreen1977; @meeus1998].

### 6.2 Great-circle plane and direction

Let `a` be the first star and `b` the through star. The normal to the oriented great-circle plane is

`n = (a × b) / ||a × b||`.

Nearly degenerate pairs with `||a × b|| < 10⁻⁸` are rejected. The directed angle from `x` to `y` for normal `n` is

`θ(x,y;n) = atan2((x × y) · n, x · y) mod 2π`.

In degrees, `θ(a,b;n)` must be between 5° and 175°, excluding very close and nearly antipodal base pairs.

### 6.3 Cross-track deviation

For candidate `c`, cross-track angular deviation from the great-circle plane is

`ε = asin(clamp(|c · n|, 0, 1))`.

The full scan admits `ε ≤ 0.3°`. The strict descriptive corpus in this paper uses `ε ≤ 0.001°`.

### 6.4 Forward range and distances

Let `θ₁₂ = θ(a,b;n)` and `θ₁₃ = θ(a,c;n)`. The continuation after the through star is

`Δθ = θ₁₃ - θ₁₂`.

The candidate is accepted when `2° ≤ Δθ ≤ 120°`. The output stores `firstToSecond = θ₁₂` and `secondToTarget = Δθ`. The latter is distance along the directed great circle, not necessarily the shortest pairwise separation between `b` and `c`.

```text
great-circle plane

  a (start) ----- θ₁₂ -----> b (through) ---- Δθ ----> projection of c
                                                        |
                                                        | ε
                                                        c (target)
```

The diagram is illustrative. Computation occurs on the sphere, not on a flat map.

## 7. Automatic search

The algorithm iterates ordered `first`, `second`, and `target` indices. The stars and their constellations must all be distinct. The pair counter increments after testing distinct constellations, a nondegenerate normal, and the 5°-175° interval. The triple counter increments for each third star in a third constellation before deviation and forward-range tests.

| Stage | Count |
| --- | ---: |
| Selected stars | 629 |
| Admissible directed pairs | 385,264 |
| Candidate triples tested | 230,680,184 |
| Geometric hits at ε ≤ 0.3° and 2° ≤ Δθ ≤ 120° | 375,294 |
| Reversal-canonicalized constellation chains | 18,427 |

### 7.1 Keys, reversals, and variants

`orderedChainKey` records the actual constellation-slug order of the retained stellar triple: `first>through>target`.

`unorderedGroupKey` sorts the three HIP identifiers numerically. It reveals when the same objects produce retained orders with different through points.

For constellation-level deduplication, `forwardKey = A>B>C` and `reverseKey = C>B>A` are compared lexicographically; the smaller becomes the internal `chainKey`. A simple reversal is therefore not a separate chain. For each `chainKey`, the record with the highest `score` is kept—not necessarily the record with the smallest deviation.

`variantCount` is the count of all stellar hits in the `chainKey` group. A separate file retains no more than 12 detailed variants, sorted by deviation and then score. Consequently, `variantCount` may greatly exceed the number of stored variant records.

### 7.2 Heuristic score

For visual magnitude `m`, prominence is

`p(m) = clamp((6.5 - m) / 6.5, 0, 1)`.

`prominence` is the mean `p(m)` across the three stars, and `balance = min(θ₁₂, Δθ) / max(θ₁₂, Δθ)`. With full threshold `T = 0.3°`:

`score = 75(1 - ε/T) + 15 prominence + 10 balance`.

The 75/15/10 weights are a project ranking heuristic. Score is not a probability, statistical significance, Bayes factor, or theological confidence measure. Interface quality labels are likewise heuristic bins, not confidence levels.

## 8. Main results

### 8.1 Precision distribution for 556 chains

| ε band, degrees | In band | Cumulative |
| --- | ---: | ---: |
| 0 < ε ≤ 0.00001 | 3 | 3 |
| 0.00001 < ε ≤ 0.00005 | 20 | 23 |
| 0.00005 < ε ≤ 0.0001 | 31 | 54 |
| 0.0001 < ε ≤ 0.00025 | 85 | 139 |
| 0.00025 < ε ≤ 0.0005 | 142 | 281 |
| 0.0005 < ε ≤ 0.001 | 275 | 556 |

### 8.2 Proper-name distribution

| Exact proper-name count | Chains | Share of 556 |
| ---: | ---: | ---: |
| 0 | 43 | 7.73% |
| 1 | 199 | 35.79% |
| 2 | 220 | 39.57% |
| 3 | 94 | 16.91% |

Three proper names means three non-empty values accepted by the current HYG classification rule. It must not be described as three verified historical etymologies before a separate audit.

### 8.3 Repeated orders of one HIP triple

The 556 records represent 477 unique unordered HIP triples. Of these, 417 have one retained order, 41 have two, and 19 have three. Reverse order is already collapsed by `chainKey`; multiplicity two or three occurs when different objects can satisfy the through-point role. These records are not independent replications.

### 8.4 Most frequent constellations

The following counts are appearances among 1,668 positions in the 556 retained chains, not among the 375,294 raw hits.

| Constellation | Appearances |
| --- | ---: |
| Eridanus | 74 |
| Pisces | 67 |
| Gemini | 62 |
| Scorpius | 58 |
| Sagittarius | 54 |
| Andromeda | 47 |
| Orion | 47 |
| Hercules | 45 |
| Pegasus | 45 |
| Hydra | 45 |
| Centaurus | 44 |
| Taurus | 43 |

Frequency depends on selected-star density, figure extent, contours, and deduplication. Without normalization and a null model, it is not semantic prominence. Within the ≤0.001° corpus, `variantCount` has minimum 1, median 30.5, mean 47.588129, and maximum 373.

## 9. Interpretation protocol

Each case must pass five sequential gates.

1. **Geometry.** Before meaning is read, freeze HIP identifiers, J2000 RA/Dec, magnitudes, order, ε, arc distances, algorithm parameters, keys, and all alternative orders of the same HIP triple.
2. **Constellation figure.** Report the modern IAU identity, historically attested figures with dated sources, and the project's biblical editorial label separately. They are not interchangeable.
3. **Star name.** Treat the HYG/IAU form as an identifier. Permit an etymological statement only with a line-level source, language, source form, range of meanings, and confidence label. A doubtful etymology cannot be used as positive evidence.
4. **Scripture.** Choose passages by a declared rule. Show competing passages and explain coherence independently of isolated word resemblance.
5. **Alternatives.** Publish failed, neutral, and competing readings and, where available, assessments by independent reviewers. Website status `published` means project publication, not external peer review.

Version 1.0 asserts no individual etymologies for the twelve cases: the corresponding project fields are empty. The biblical constellation meanings below are authored Heavens Remember editorial labels, not IAU or HYG conclusions.

## 10. Twelve initial case studies

The set reproduces the current `seeds` order in `src/data/findings.ts`. The final confirmatory set requires an author decision.

| No. | Triple | Status | Primary constellation order | ε | Score |
| ---: | --- | --- | --- | ---: | ---: |
| 1 | Rasalgethi → Deneb → 16 Lam And | draft, outside corpus | — | — | — |
| 2 | Chi Her → Kappa Cyg → Algenib | draft, 2 HIP unresolved | — | — | — |
| 3 | Gacrux → Alderamin → Nembus | published | Southern Cross → Cepheus → Andromeda | 0.000228145° | 86.468 |
| 4 | Lesath → Sheratan → Jishui | published | Scorpius → Aries → Gemini | 0.000071338° | 87.875 |
| 5 | La Superba → Albireo → Fomalhaut | published | Hunting Dogs → Swan → Southern Fish | 0.000098877° | 92.316 |
| 6 | Guniibuu → Sadalmelik → Algenib | published | Serpent Bearer → Water Bearer → Pegasus | 0.000270083° | 86.876 |
| 7 | Alhena → Zubenelgenubi → Albali | published | Twins → Scales → Water Bearer | 0.000167752° | 90.340 |
| 8 | Cih → Sham → Ginan | published | Cassiopeia → Arrow → Southern Cross | 0.000116890° | 88.170 |
| 9 | Sadr → Gienah → Theemin | published | Swan → Crow → Eridanus | 0.000241774° | 91.395 |
| 10 | Gienah → Taygeta → Hamal | published | Crow → Bull → Ram | 0.000270948° | 84.804 |
| 11 | Acamar → Mebsuta → Xuange | published | Eridanus → Twins → Boötes | 0.000009430° | 91.896 |
| 12 | Markab → Hassaleh → Ukdah | published | Pegasus → Charioteer → Water Snake | 0.000379425° | 92.227 |

### 10.1 Rasalgethi — Deneb — 16 Lam And

All three HIP objects resolve: 84345, 102098, and 116584. The third is a Bayer/Flamsteed catalogue designation rather than a proper name. The unordered triple does not occur among the 18,427 retained automatic results. It remains a negative draft case. No geometric or theological support should be assigned until its original nomination is documented.

### 10.2 Chi Herculis — Kappa Cygni — Algenib

The first two HIP values in the current seed are zero; only Algenib, HIP 1067, resolves. No geometry is published. This case demonstrates that the protocol stops at its first gate: display strings alone are not enough for calculation.

### 10.3 Gacrux — Alderamin — Nembus

HIP 61084 → 105199 → 7607; magnitudes 1.59 / 2.45 / 3.59; arc distances 155.82° and 37.30°; `variantCount = 5`. Editorial labels: “Cross of Redemption → Enthroned Christ—King and Shepherd → Church-Bride.” The same HIP triple has a second retained order, “Southern Cross → Andromeda → Cepheus,” with ε = 0.000411792°. Both orders must be evaluated together. Individual etymologies and case-specific Scripture passages remain pending.

### 10.4 Lesath — Sheratan — Jishui

HIP 85696 → 8903 → 37265; magnitudes 2.70 / 2.64 / 4.89; distances 130.69° and 75.31°; `variantCount = 29`. Editorial sequence: “Sting of Sin → God's Lamb, liberating His people → Suffering Savior and enthroned Judge.” An alternative through point gives “Scorpius → Gemini → Aries” with ε = 0.000123361°. It is a competing reading, not a hidden duplicate.

### 10.5 La Superba — Albireo — Fomalhaut

HIP 62223 → 95947 → 113368; magnitudes 5.42 / 3.05 / 1.17; distances 77.78° and 75.89°; `variantCount = 4`. Editorial sequence: “Shepherd's Rod → Saving Cross → Refreshed people of God.” The geometry is balanced, but the semantic terms are project-authored and the star-name etymologies have not been evaluated.

### 10.6 Guniibuu — Sadalmelik — Algenib

HIP 84405 → 109074 → 1067; magnitudes 4.33 / 2.95 / 2.83; distances 74.35° and 35.10°; `variantCount = 2`. Editorial sequence: “Shepherd-Victor → Giver of the water of life → Blessing of Abraham.” A low variant count describes stellar realizations of the group; it does not automatically increase statistical or theological confidence.

### 10.7 Alhena — Zubenelgenubi — Albali

HIP 31681 → 72622 → 102618; magnitudes 1.93 / 2.75 / 3.78; distances 125.74° and 86.63°; `variantCount = 33`. Editorial sequence: “Suffering Savior and enthroned Judge → Broken order → Giver of the water of life.” Each Arabic-name claim requires its own philological record; resemblance or a popular gloss is not accepted as evidence.

### 10.8 Cih — Sham — Ginan

HIP 4427 → 96757 → 60260; magnitudes 2.15 / 4.39 / 3.59; distances 69.07° and 115.28°; `variantCount = 27`. Editorial sequence: “Church—Wife of the Lamb → God's arrow of judgment → Cross of Redemption.” HYG classifies all three strings as proper names, but v1.0 makes no claim about their historical semantics.

### 10.9 Sadr — Gienah — Theemin

HIP 100453 → 59803 → 21393; magnitudes 2.23 / 2.58 / 3.81; distances 125.18° and 101.22°; `variantCount = 25`. Editorial sequence: “Saving Cross → Final Judgment → Fiery river of God's judgment.” The same HIP triple is retained as “Swan → Eridanus → Crow” with ε = 0.000272903°. The alternate order belongs in a robustness test.

### 10.10 Gienah — Taygeta — Hamal

HIP 59803 → 17531 → 9884; magnitudes 2.58 / 4.30 / 2.01; distances 130.92° and 22.39°; `variantCount = 27`. Editorial sequence: “Final Judgment → Coming Judge → God's Lamb, liberating His people.” The short second leg is allowed by the ≥2° rule but may affect perceived narrative form and must be represented in controls.

### 10.11 Acamar — Mebsuta — Xuange

HIP 13847 → 32246 → 69732; magnitudes 2.88 / 3.06 / 4.18; distances 83.85° and 86.59°; `variantCount = 362`. This is the smallest ε among the twelve cases. Editorial sequence: “Fiery river of God's judgment → Suffering Savior and enthroned Judge → Shepherd and Guardian of God's Flock.” The very large variant count means the constellation chain has many stellar realizations; it is not independent repetition of one story.

### 10.12 Markab — Hassaleh — Ukdah

HIP 113963 → 23015 → 47431; magnitudes 2.49 / 2.69 / 3.90; distances 80.16° and 74.60°; `variantCount = 77`. Editorial sequence: “Blessing of Abraham → Lord of Creation—Good Shepherd → Satan under judgment.” Deviation is below 0.001°, but individual name meanings and the linked scriptural sequence require independent review.

## 11. Robustness checks and alternative explanations

This section does not define the primary purpose of Heavens Remember or turn a hermeneutical question into a demand to derive the Gospel statistically. It specifies auxiliary checks: how sensitive the geometric observations are to corpus composition, and how easily similar semantic coherence can be produced after replacing historical and biblical labels. A scan of 230.7 million candidates means that a small angular deviation alone is expected and must not be presented as a rare semantic discovery [@westfallYoung1993; @benjaminiHochberg1995].

A possible robustness protocol should:

1. Freeze the 629 stars, 56 constellations, all thresholds, score, and deduplication rule.
2. Compare the full computational corpus of 56 with the historically verified core derived from the antiquity register.
3. Randomly permute the 56 biblical editorial labels among constellations while preserving geometry and constellation frequencies; calculate the same prespecified coherence statistic for every permutation.
4. Compare neutral IAU labels, classical mythographic descriptions, random thematic vocabularies of similar length, and non-biblical narrative corpora.
5. If a separate confirmatory study is undertaken, formulate its tested sequences in advance and apply them to a new data version or a held-out corpus portion.
6. If a separate statistical study is undertaken, declare its metric, comparison family, and treatment of multiple selection in advance; these requirements belong to that experiment, not to the project's historical-hermeneutical purpose.

Label permutation tests only the reconstruction's sensitivity to this vocabulary; it is not the project's primary method and does not evaluate supernatural causation. Discovery, historical verification, and later robustness testing remain distinct stages [@nosekEtAl2018].

## 12. Limitations

- The current computational set of 56 is historically heterogeneous; until the register is complete, results from the entire set cannot be attributed to “ancient constellations” as a single class.
- Selected-star density differs by constellation; raw constellation frequencies are unnormalized.
- Geometry uses rounded J2000 coordinates from one aggregated catalogue and omits uncertainties, proper motion, and independent-catalogue replication.
- The 0.3°, 5°-175°, and 2°-120° thresholds and score weights are engineering choices.
- The best chain representative is selected by score, mixing precision, brightness, and balance.
- Reversals are collapsed, but one HIP triple may produce different through points; these records are dependent.
- No more than 12 detailed variants are stored even when `variantCount` is larger.
- HYG `proper` is not a verified etymology corpus. Case-study etymologies remain unaudited.
- Project semantic labels are theological editorial content, not historical consensus.
- Case-specific Scripture passages and narrative-coherence rules remain author decisions.
- The twelve cases were not chosen by a preregistered rule; two are negative or unresolved.
- No randomness-control experiment has yet been executed in v1.0.

## 13. Theological status

Heavens Remember investigates possible celestial witness within a Christian theological hypothesis. The project may offer an interpretation, but must name its authorship and distinguish it from measurement. A geometric match establishes only the relation of J2000 directions under selected rules. It is not independent proof of revelation, of an inspired star-name lexicon, or of Christianity.

The project is not astrology. It makes no claim that stars influence character, fate, decisions, or terrestrial events; it creates no horoscopes and predicts no future. Its subjects are cartographic geometry, the history of sky images, and theological hermeneutics. Neither a geometric nor a possible statistical result replaces historical verification or hermeneutical argument.

## 14. Reproducibility

### 14.1 Frozen version

- HYG: 4.1; coordinate epoch: J2000.
- Algorithm: `scripts/find-celestial-alignments.mjs`.
- Name classifier: `scripts/lib/star-classification.mjs`.
- Finding method version: `great-circle-j2000-v1`.
- Git commit: `c664e318962cd7f51d098b6c0312a58af578c18e`.
- Main corpus generation time: `2026-08-18T16:11:24.690Z`.
- SHA-256 `data/research-alignments.json`: `06bf87c26d27e460ce5e4e3800cb1ed335aa6f2277570f828584cac705a212fa`.
- SHA-256 `data/research-alignment-variants.json`: `a084f1cde6ffa2a5b27a14cd3cd1df951a70631b1f95c6f3192956a51d5b6f84`.

### 14.2 Machine-readable output

Counts, distributions, checksums, and the twelve cases are exported in `docs/method-paper-data-v1.0.json`. The full source corpus is `data/research-alignments.json`; limited variant detail is in `data/research-alignment-variants.json`. External deposit should preserve findability, accessibility, interoperability, and reuse metadata [@wilkinsonEtAl2016].

Reproduction commands:

```bash
npm install
npm run prepare:data
npm run validate:data
npm run research:alignments -- --threshold=0.3 --forward=120 --variants=12
npm run research:enrich-alignments
node scripts/generate-method-paper-data.mjs
npm test
```

`prepare:data` may change the generation timestamp in `generated-sky.ts`. Strict replication requires the same HYG file and pinned external contour sources. A rerun must compare hashes as well as counts.

## 15. Conclusion

Method Paper v1.0 converts Heavens Remember from a collection of visual observations into a documented research map. Its firm result at this stage is a transparent computational fact: within the current corpus of 629 stars, a complete directed scan yields 18,427 reversal-canonicalized chains, 556 of which have deviation no greater than 0.001°, and 94 of which contain three HYG proper names under a frozen rule.

The next necessary layer is source-based verification of the antiquity of every sky figure and of the historical meaning of every star name used. Only then can the geometric map be read hermeneutically as a possible sequence within a biblical narrative. Control experiments remain useful checks on robustness and fitting risk, but they replace neither historical work nor theological argument.

## 16. Bibliography

Complete machine-readable records are in `docs/references.bib`.

1. Benjamini, Y.; Hochberg, Y. “Controlling the False Discovery Rate: A Practical and Powerful Approach to Multiple Testing.” *JRSS B* 57(1), 1995, 289-300. https://doi.org/10.1111/j.2517-6161.1995.tb02031.x
2. Bullinger, E. W. *The Witness of the Stars*. London: The Author, 1893. https://www.gutenberg.org/ebooks/49018
3. Currid, J. D.; Barrett, D. P. *Crossway ESV Bible Atlas*. Crossway, 2010. https://www.crossway.org/books/crossway-esv-bible-atlas-hccase/
4. Curtis, A., ed. *Oxford Bible Atlas*. 4th ed. Oxford University Press, 2007.
5. HYG Database contributors. *HYG Stellar Database, Version 4.1*. 2024. https://github.com/astronexus/HYG-Database
6. Hunger, H.; Pingree, D. *MUL.APIN: An Astronomical Compendium in Cuneiform*. Archiv für Orientforschung, Beiheft 24, 1989. https://cdli.earth/publications/76321
7. International Astronomical Union. “The Constellations.” https://www.iau.org/public/themes/constellations/
8. IAU Working Group on Star Names. “Naming Stars and the IAU Catalog of Star Names.” https://www.iau.org/public/themes/naming_stars/
9. Kunitzsch, P.; Smart, T. *A Dictionary of Modern Star Names*. Sky Publishing Corporation, 2006. ISBN 978-1-931559-44-7.
10. Meeus, J. *Astronomical Algorithms*. 2nd ed. Willmann-Bell, 1998. ISBN 978-0-943396-61-3.
11. Nosek, B. A.; Ebersole, C. R.; DeHaven, A. C.; Mellor, D. T. “The Preregistration Revolution.” *PNAS* 115(11), 2018, 2600-2606. https://doi.org/10.1073/pnas.1708274114
12. Rogers, J. H. “Origins of the Ancient Constellations: I. The Mesopotamian Traditions.” *JBAA* 108(1), 1998, 9-28. https://articles.adsabs.harvard.edu/pdf/1998JBAA..108....9R
13. Rogers, J. H. “Origins of the Ancient Constellations: II. The Mediterranean Traditions.” *JBAA* 108(2), 1998, 79-89. https://articles.adsabs.harvard.edu/pdf/1998JBAA..108...79R
14. Rolleston, F. *Mazzaroth; or, The Constellations*. London: Rivingtons, 1862-1865. https://books.google.com/books?id=hTABAAAAQAAJ
15. Seiss, J. A. *The Gospel in the Stars; or, Primeval Astronomy*. New and enlarged ed. Philadelphia: J. B. Lippincott, 1885. https://archive.org/details/gospelinstarsorp00seis_0
16. Smart, W. M.; Green, R. M. *Textbook on Spherical Astronomy*. Cambridge University Press, 1977.
17. Westfall, P. H.; Young, S. S. *Resampling-Based Multiple Testing*. John Wiley and Sons, 1993.
18. Wilkinson, M. D. et al. “The FAIR Guiding Principles for Scientific Data Management and Stewardship.” *Scientific Data* 3, 160018 (2016). https://doi.org/10.1038/sdata.2016.18
19. Ptolemy, C. *Ptolemy's Almagest*. Trans. G. J. Toomer. Princeton University Press, 1998. https://doi.org/10.2307/j.ctvzxx967
20. Condos, T. *Star Myths of the Greeks and Romans*. Phanes Press, 1997. https://redwheelweiser.com/book/star-myths-of-the-greeks-and-romans-9781890482930/
21. Bayer, J. *Uranometria*. Augsburg, 1603. https://books.google.com/books?id=ivZeAAAAcAAJ
22. Hevelius, J. *Firmamentum Sobiescianum sive Uranographia*. Gdańsk, 1690. https://objects.library.uu.nl/reader/1874-33126
23. Lacaille, N.-L. de. “Table des Ascensions Droites et des Déclinaisons Apparentes des Étoiles australes...” *Mémoires de l'Académie Royale des Sciences*, 1756, 539-592. https://pbarbier.com/catalogs/lacaille/remarks.html

## Appendix A. Decisions required from the author

The paper is published under the collective attribution "Heavens Remember Editorial Board" with the licences declared above. The following remain open:

1. whether the collective attribution is replaced by a personal name, author order, affiliation, and ORCID;
2. confirmation of the declared licences at the first external deposit;
3. the deposit venue and a minted DOI;
4. the exact wording of the primary and secondary research questions;
5. which historical strata in the 56-entry register belong to the main study;
6. the final twelve cases: whether to retain the two negative/unresolved cases and the rule for any replacements;
7. the corpus of biblical sequences, case-specific Scripture passages, and admissible alternatives;
8. independent astronomical, historical-philological, statistical, and theological review.

The complete unresolved fact and source table is `docs/method-paper-manual-verification.md`.
