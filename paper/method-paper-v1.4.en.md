# Heavens Remember: Restoring the Celestial Sermon through Constellation Topography and the Great-Circle Method

**Author:** Heavens Remember Editorial Board  
**Author contributions (CRediT):** conceptualization, methodology, software, analysis, visualization, and writing — Heavens Remember Editorial Board  
**About the board:** The Heavens Remember Editorial Board carries the astronomical, historical, philological, and biblical layers of the project. It is responsible for separating verifiable data from interpretation, for checking historical and etymological claims against their sources, and for recording substantive revisions. The computational layer runs through the project's own scripts over HYG Database 4.1; the semantic reconstruction proceeds within a declared biblical hermeneutic. Individual contributors are named as forms of public attribution are approved.  
**Project:** Heavens Remember  
**Document version:** 1.4  
**Preparation date:** 18 August 2026  
**Date of first publication:** 19 August 2026  
**Project URL:** https://www.heavensremember.top  
**Repository for paper and data:** https://github.com/infoindustry/heavens-remember-research  
**DOI:** https://doi.org/10.5281/zenodo.22003724 — all versions; version 1.4: 10.5281/zenodo.22003725  
**Copyright and licence:** © Heavens Remember. Paper text: CC BY 4.0. Reproduction scripts: MIT. Data derived from HYG Database 4.1: CC BY-SA 4.0 with source attribution retained.

> **Foundation of the project.** "The heavens declare the glory of God" (Ps. 18/19). Heavens Remember studies the sky as a surviving map of that declaration and restores its structure through the geometry of the celestial sphere, ancient sky figures, historical star names, and the biblical narrative. The numerical results given in this document preserve the reproducible baseline of the first complete computational run; version 1.4 defines the updated semantic architecture of the corpus and the rules for the next recomputation.

---

## 1. The heavens declare: the task of Heavens Remember

In the biblical picture of the world, the sky speaks. Psalm 18(19) describes the heavens as a herald of the glory of God: day pours forth speech to day, night reveals knowledge to night. Psalm 146/147 speaks of God, who numbers the stars and calls them each by name. The book of Job preserves the names of celestial groups, speaks of Mazzaroth, and mentions the enigmatic "chambers of the south."

Heavens Remember proceeds from this biblical picture: **the celestial sermon exists; the task of the project is to restore its map, its sequence, and its vocabulary.**

The project looks for a coherent structure in which individual findings become parts of one narrative. It investigates how the real positions of stars connect sky figures; which of those figures were known to the ancient world; which star names preserve earlier meanings; and how all of this composes the sequence of the biblical narrative.

The work is built in six layers:

1. **Astronomical layer** — coordinates, magnitudes, identifiers, angular distances, and the precision of geometric relations.
2. **Topographic layer** — real relations between regions of the sky and figures along great circles of the celestial sphere.
3. **Historical layer** — ancient figures, asterisms, and sky traditions attested by sources.
4. **Philological layer** — historical forms and meanings of proper star names.
5. **Biblical layer** — the place of each figure within the whole story of Scripture and the Gospel.
6. **Reconstructive layer** — restoration of lost or unrecognized parts of the celestial narrative, especially in the "chambers of the south."

The order of investigation is simple:

**star → geometric relation → sky figure → historical image → name → Scripture → narrative chain.**

### 1.1 Two spaces of one celestial map

Heavens Remember works with two spaces.

**A. The historically preserved sky.**  
Here ancient tradition preserved the figure itself: Aries, Scorpius, Gemini, Orion, Andromeda, Cepheus, and other ancient images. The project restores their original place in the celestial biblical narrative.

**B. The "chambers of the south."**  
Here the project investigates regions where ancient Near Eastern nomenclature survived only in part and left room for reconstruction. Geometry and topography become the map by which the semantic structure of the southern sky is restored. Modern names are used as coordinate locators, while the figure itself and its place in the narrative are determined within the Heavens Remember reconstruction.

Both spaces belong to one task: **the restoration of the celestial sermon as a whole narrative.**

## 2. Abstract

Heavens Remember restores the structure of the celestial sermon by investigating geometric relations between stars and sky figures, the historical antiquity of those figures, the meanings of star names, and their place in the biblical narrative. The astronomical layer uses J2000 right ascension and declination coordinates and visual magnitudes from HYG Database 4.1 [@hyg41].

The first complete computational baseline used 56 modern slug identifiers and produced a set of 629 stars: endpoints of reference contours plus objects with a non-empty proper-name field. For each admissible directed pair, the plane of a great circle was constructed, after which a third star was tested by cross-track angular deviation and by its forward position along the directed arc.

That run tested 385,264 directed pairs and 230,680,184 stellar triples. The geometric filters admitted 375,294 hits; canonicalizing forward and reverse orders at the constellation-triple level left 18,427 unique chains. At a deviation of no more than 0.001°, 556 chains remain; 94 of these contain three objects with proper names from the HYG `proper` field after three Gould catalogue forms are excluded.

Version 1.4 moves the project from a general computational search to the restoration of an integral map. The primary semantic corpus is formed from ancient sky figures together with a separate reconstructive layer for the "chambers of the south." Late cartographic formations are removed from the ancient core. Carina, Puppis, and Vela are removed as three independent semantic figures; ancient Argo Navis may be studied separately as a single Ship if it receives a place in the whole celestial narrative.

The principal unit of research is the **narrative chain**, in which geometric topography joins the figures, while historical images, star names, and Scripture disclose the content of that connection.

## 3. Tasks of restoration

### 3.1 Restore the topography of the narrative

Find directed geometric relations between sky figures and trace how they form sequences of the whole biblical narrative.

### 3.2 Restore the ancient layer of images

Establish from sources which figures and asterisms genuinely belong to the ancient sky, and separate them from late cartographic nomenclature.

### 3.3 Restore the vocabulary of star names

Trace the historical forms, languages, and meanings of proper star names, and determine how those meanings refine the place of a star inside a discovered narrative chain.

### 3.4 Investigate Mazzaroth and the order of the sky figures

Correlate ancient sky figures with the biblical image of Mazzaroth and study them as parts of an ordered celestial system and a single narrative.

### 3.5 Open the "chambers of the south"

Map the southern regions as a separate reconstructive layer and restore their place in the whole celestial sermon through geometry, topography, and the biblical structure of the narrative.

### 3.6 Assemble a single celestial narrative

Join individual confirmed chains into a longer structure: promise, sin and judgment, the Lamb and redemption, Christ as King and Shepherd, the people of God, the Bride, final judgment, and the victory of the King.

## 4. The biblical foundation of the celestial sermon

### 4.1 "The heavens declare"

Psalm 18(19) sets the project's principal image: **the heavens declare the glory of God**. The psalm then speaks of speech passed from day to day, and of knowledge that night reveals to night. The sky acts as the bearer of a message that exists in time and is available to an observer through the order of creation.

Heavens Remember takes this image literally as a direction of research: the celestial map holds the structure of a testimony, and the project's task is to restore **what exactly this map tells**.

### 4.2 God calls the stars by name

Psalm 146/147 links God's dominion over the sky with two acts: God numbers the multitude of the stars and calls them each by name. Star names therefore occupy a special place in Heavens Remember. Their history is investigated as a possible surviving vocabulary of the celestial sermon.

Philological work moves backward from the modern form of a name: language → early attested form → range of meanings → the place of the star within the figure → the place of that figure within the narrative chain.

### 4.3 Mazzaroth and the established order of the sky

Job 38:31-33 joins the Pleiades, Orion, Mazzaroth, and celestial order in a single divine address to man. For Heavens Remember, Mazzaroth is the key to studying the annual circle of sky figures as an ordered system. The project therefore considers the constellations in their mutual arrangement, direction, and sequence.

### 4.4 Job 9:9 and the "chambers of the south"

The Hebrew text of Job 9:9 contains the expression:

`וְחַדְרֵי תֵמָן`

**weḥadrê têmān** — "chambers / inner rooms / hidden places of the south." In the verse it stands beside the celestial groups `עָשׁ`, `כְּסִיל`, `כִימָה`, traditionally associated with the Bear, Orion, and the Pleiades [@jobCambridge; @jobKeilDelitzsch].

In the architecture of Heavens Remember, the "chambers of the south" denote **a distinct reconstructive sector of the celestial map**. Here the project discloses structure from geometry and from the region's place in the whole narrative, while surviving historical names and traditions are added as a separate data layer.

### 4.5 What Heavens Remember restores

The celestial sermon is restored along four traces at once:

1. **topography** — which figures are actually connected on the celestial sphere;
2. **image** — what the figure represents in ancient tradition or in the southern reconstruction;
3. **name** — what has survived in the proper names of the stars;
4. **Scripture** — what place the image occupies in the whole story of the Gospel.

A chain grows stronger when all four layers speak in the same direction.

## 5. Historical context

Christian narrative readings of traditional sky figures acquired influential forms in the nineteenth century. Frances Rolleston issued *Mazzaroth; or, The Constellations* in parts from 1862 to 1865; Joseph A. Seiss published *The Gospel in the Stars* (first edition, 1882; the bibliography uses the enlarged 1885 edition); E. W. Bullinger published *The Witness of the Stars* in 1893 [@rolleston1862; @seiss1885; @bullinger1893]. These books form an important historical layer of the *Gospel in the Stars* tradition and serve as comparative material for the new Heavens Remember reconstruction.

The history of the sky figures themselves is more complex than any single scheme. The modern 88 constellations and their boundaries are standardized by the International Astronomical Union, whereas figures, names, and asterisms have Mesopotamian, Greek, Mediterranean, and other origins formed at different times [@iauConstellations; @rogers1998mesopotamian; @rogers1998mediterranean; @hungerPingree1989].

Mesopotamian sources show that ancient observers organized the fixed stars into figures of gods, people, animals, objects, and vehicles; a number of zodiacal images known today have deep Near Eastern parallels [@hungerPingree1989]. This provides the historical background for reconstructing an earlier semantic layer of the celestial map.

Modern Bible atlases map terrestrial locations, routes, and the historical settings of texts [@curtis2007; @curridBarrett2010]. Heavens Remember applies a related discipline to the celestial sphere: it first fixes the map and the geometry, then separates historical evidence from interpretation.

---

## 6. Architecture of the corpus

### 6.1 Catalogue and coordinates

The stellar source is a locally pinned HYG Database 4.1 file. The generator downloads `hygdata_v41.csv`, joins HIP identifiers, coordinates, visual magnitude, Bayer/Flamsteed designations, and the `proper` field, then writes coordinates labelled as epoch J2000 [@hyg41].

Right ascension is stored in hours and declination in degrees. Stellar distance is not used: each record is treated as a direction from the centre of a unit sphere.

SHA-256 of the local source CSV:

`d9f69fd86bbf90a4e4d52b4c5c53eacfa6dfc0bfdef85bfd94f095e0bebe4ebd`

### 6.2 The frozen computational corpus v1.0

The frozen run whose numerical results are reported in this document used 56 slug identifiers from `biblicalArtworkSlugs`. Within each, main and reference stars were merged by HIP. A star entered the research set when it had a non-empty `proper` value or was an endpoint of the selected contour. `referenceSegments` were used when available; otherwise the main `segments` were used. Deduplication by HIP yielded 629 objects.

This corpus is a **computational snapshot** of 56 modern slug identifiers. The historical register separately reduces them to ancient figures, late figures, and reconstructive regions.

### 6.3 Ancient figure, modern map region, and reconstructed image

Version 1.4 fixes a fundamental distinction:

- **computational constellation / slug** — a modern software container or map region;
- **historical sky figure** — a historically attested figure or asterism;
- **reconstructed sky figure** — a figure or semantic structure restored by Heavens Remember from the topography of a celestial region and its place in the whole celestial sermon.

This distinction matters most where the modern system divides one ancient figure among several constellations or, conversely, carves a late figure out of the stars of an older constellation.

### 6.4 Argo Navis and the removal of Carina / Puppis / Vela from the semantic corpus

Ancient tradition knows the large figure **Argo / Argo Navis — the Ship**. In Ptolemy it is a single sky figure; the modern Carina, Puppis, and Vela are a later division of its area [@ptolemyToomer1984; @argoClassical].

**Decision of version 1.4:**

- Carina, Puppis, and Vela are removed from the semantic corpus as three independent figures;
- earlier computational results in which they appeared as separate slugs are retained only as the baseline of the first run;
- Argo Navis is studied separately as a single ancient Ship and enters the new corpus only once its place in the whole celestial sermon has been determined.

In this way the single ancient image of the Ship keeps its unity in the project's semantic architecture as well.

### 6.5 Figure statuses in version 1.4

| Code | Status | Role in Heavens Remember |
| --- | --- | --- |
| **H1** | Ancient independent figure | Primary historical corpus |
| **H2** | Ancient asterism / part of a larger figure | Historical layer with its own provenance card |
| **R-S** | "Chambers of the south" / southern reconstruction | Reconstructed southern image identified from topography and narrative |
| **X** | Outside the semantic corpus | Late or technical figure retained only in the archive/map |

The primary semantic corpus of v1.4 is built from `H1`, `H2`, and `R-S`.

Working examples:

- Scorpius, Aries, Gemini, Orion, Andromeda, Cepheus, Aquarius, Pegasus, Taurus, Eridanus, and other ancient figures are `H1`;
- an ancient asterism that later acquired independent status may be `H2`;
- Crux and other figures disclosed in the "chambers of the south" reconstruction are `R-S`;
- Canes Venatici, Leo Minor, Lynx, and also Carina/Puppis/Vela as separate independent meanings are `X` for the primary v1.4 corpus.

### 6.6 The "chambers of the south" as a reconstructive map

For a southern figure, the project card contains five independent layers:

1. the stars and their exact coordinates;
2. geometric relations with other regions;
3. the modern cartographic locator;
4. the reconstructed Heavens Remember image;
5. its place in the whole biblical sequence.

Historical names of southern stars and figures are added wherever they can be traced through sources. The central object remains the celestial topography itself: it shows which parts of the narrative a given region is connected to.

The "chambers of the south" are thus investigated as a hidden part of one celestial sermon, while local historical traditions are recorded in separate source cards.

### 6.7 Magnitude and proper names

Visual magnitude is taken from HYG. The "visible to the naked eye" flag in the research corpus uses the threshold `m ≤ 6.0`; this is a separate filter from the 6.5 limit in the general atlas generator.

`properName` is normally equal to the non-empty HYG `proper` value. Bayer, Flamsteed, HIP, and Gould are retained as catalogue designations. The three forms `96 G. Psc`, `268 G. Cet`, and `82 G. Eri` are classified as Gould designations and excluded from the list of proper names.

The HYG `proper` field is used to identify stars with proper names. For each such star the project creates a separate philological card: modern form, historical form, language, etymology, range of meanings, and sources [@iauStarNames; @kunitzschSmart2006].

### 6.8 Catalogue basis

HYG is used as the aggregated open baseline catalogue. Coordinates pass through the generation of `generated-sky.ts`; proper names are taken from the field of the specific version; multiple systems are represented by catalogue records.

The baseline coordinate system is fixed at J2000. The next stage of the project provides for separate historical epochs with precession and proper motions taken into account where this is material.

For extremely small values of `ε`, the project uses an additional high-precision astrometric run in order to fix the geometry to the highest available accuracy.

---

## 7. Geometric method

### 7.1 Unit vectors

For right ascension `RA` in hours and declination `Dec` in degrees, the angles are

`α = RA × 15°`,  `δ = Dec`.

After conversion to radians, a star is represented by the unit vector

`r(α,δ) = (cos δ cos α, cos δ sin α, sin δ)`.

This is the standard representation of positional spherical astronomy [@smartGreen1977; @meeus1998].

### 7.2 Great-circle plane and direction

Let `a` be the first star and `b` the through star. The normal to the plane of the oriented great circle is

`n = (a × b) / ||a × b||`.

Near-degenerate pairs, for which `||a × b|| < 10⁻⁸`, are excluded.

The directed angle from `x` to `y` under the normal `n` is computed as

`θ(x,y;n) = atan2((x × y) · n, x · y) mod 2π`.

In degrees, `θ(a,b;n)` must lie between 5° and 175°. This excludes pairs that are too close together and pairs that are nearly antipodal.

### 7.3 Cross-track deviation of the third star

For a third star `c`, the cross-track angular deviation from the great-circle plane is

`ε = asin(clamp(|c · n|, 0, 1))`.

The main exhaustive search retains triples at `ε ≤ 0.3°`. The strict descriptive sub-corpus uses `ε ≤ 0.001°`.

The `0.001°` threshold is used as a strict research filter for isolating especially precise geometric cases.

### 7.4 Forward position and distances

Let `θ₁₂ = θ(a,b;n)` and `θ₁₃ = θ(a,c;n)`. Then the continuation past the through star is

`Δθ = θ₁₃ - θ₁₂`.

A candidate is accepted when `2° ≤ Δθ ≤ 120°`.

In the output, `firstToSecond = θ₁₂` and `secondToTarget = Δθ`. The name of the second field denotes distance along the directed great circle, not necessarily the shortest pairwise distance between `b` and `c`.

```text
great-circle plane

  a (start) ---- θ₁₂ ----> b (through) ---- Δθ ----> projection of c
                                                     |
                                                     | ε
                                                     c (target)
```

The diagram is illustrative; the computation is performed on the sphere, not on a flat map.

---

## 8. Automatic search and frozen results

### 8.1 Exhaustive scan

The algorithm iterates over ordered indices `first`, `second`, and `target`. The stars must be distinct and must belong to three different computational constellations/slugs. The pair counter is incremented after the constellation-difference check, the non-degenerate normal, and the 5°-175° range. The triple counter is incremented for each third star from the third constellation before the deviation and forward-range checks.

The frozen v1.0 run produced:

| Stage | Count |
| --- | ---: |
| Selected stars | 629 |
| Admissible directed pairs | 385,264 |
| Tested stellar triples | 230,680,184 |
| Geometric hits at ε ≤ 0.3° and 2° ≤ Δθ ≤ 120° | 375,294 |
| Unique reversibly canonicalized constellation chains | 18,427 |

> **Baseline and new corpus.** The figures above fix the reproducible run of version 1.0. After the exclusion of Carina/Puppis/Vela and the approval of the v1.4 corpus, a new complete run will be published with its own checksums.

### 8.2 Keys and repetitions

`orderedChainKey` stores the actual order of slug constellations for a retained stellar triple: `first>through>target`.

`unorderedGroupKey` sorts the three HIP values numerically and joins them with hyphens. It shows when the same three objects yield several retained orders with a different choice of through point.

For constellation deduplication, `forwardKey = A>B>C` and `reverseKey = C>B>A` are constructed; the lexicographically smaller becomes the internal `chainKey`. A simple reversal of one arc is therefore not counted as a separate chain.

For each `chainKey`, the record with the highest `score` is retained, not necessarily the one with the minimum deviation.

`variantCount` is the number of all stellar hits that fell into the `chainKey` group. A separate file stores at most 12 best variants per group, sorted by deviation and then by score.

### 8.3 Heuristic score

For a star of magnitude `m`, brightness prominence is defined as

`p(m) = clamp((6.5 - m) / 6.5, 0, 1)`.

`prominence` is the mean `p(m)` of the three stars;

`balance = min(θ₁₂, Δθ) / max(θ₁₂, Δθ)`.

At the full threshold `T = 0.3°`:

`score = 75(1 - ε/T) + 15 prominence + 10 balance`.

The weights 75/15/10 form the project's ranking heuristic: precision carries the principal weight, followed by brightness and geometric balance.

### 8.4 Precision of the 556 chains in baseline v1.0

| ε range, degrees | In band | Cumulative |
| --- | ---: | ---: |
| 0 < ε ≤ 0.00001 | 3 | 3 |
| 0.00001 < ε ≤ 0.00005 | 20 | 23 |
| 0.00005 < ε ≤ 0.0001 | 31 | 54 |
| 0.0001 < ε ≤ 0.00025 | 85 | 139 |
| 0.00025 < ε ≤ 0.0005 | 142 | 281 |
| 0.0005 < ε ≤ 0.001 | 275 | 556 |

### 8.5 Proper names in baseline v1.0

| Proper names, exactly | Chains | Share of 556 |
| ---: | ---: | ---: |
| 0 | 43 | 7.73% |
| 1 | 199 | 35.79% |
| 2 | 220 | 39.57% |
| 3 | 94 | 16.91% |

Three proper names means three non-empty and admissible HYG `proper` values under the current classifier. The historical etymology of each name is established by a separate philological card with source, language form, and range of meanings.

### 8.6 Repeated orders of one HIP triple

The 556 records correspond to 477 unique unordered HIP triples. Of these, 417 are represented by one retained order, 41 by two, and 19 by three. The reverse order is already collapsed by `chainKey`; a multiplicity of 2 or 3 arises when the same triple satisfies the constraints with a different object as the midpoint.

### 8.7 Most frequent constellations in baseline v1.0

The counts below are appearances among the 1,668 positions in the 556 retained chains.

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

Frequency reflects the combined influence of the number of selected stars, the geometric extent of a figure, its contours, and the deduplication procedure.

---

## 9. Protocol for reading a celestial chain

Every published chain follows the same path **from map to sermon**.

### Stage 1. Geometry

Record HIP values, J2000 RA/Dec, visual magnitudes, star order, `ε`, distances, algorithm parameters, deduplication keys, and all geometrically admissible orders of the same HIP triple.

### Stage 2. The sky figure

For each position, record:

- the modern IAU name or the software slug;
- the ancient figure/asterism, or the `R-S` status;
- the code `H1`, `H2`, `R-S`, or `X`;
- the Heavens Remember semantic name.

### Stage 3. The figure's place in the whole sermon

Each figure receives a stable role in the overall map. The meaning of a figure is preserved from chain to chain. Aries, read as the Lamb, remains the Lamb throughout the system; Eridanus, read as the fiery river of judgment, keeps that role in every relation found.

### Stage 4. The star name

For a proper name, record:

- the modern form;
- the historical form;
- the language;
- the earliest attestation;
- the etymology and range of meanings;
- the sources.

The name becomes the **internal signature** of a specific point of the chain: it may refine, strengthen, or narrow the meaning of the figure.

### Stage 5. Scripture

Scripture passages that disclose the chain's imagery and narrative sequence are attached to it. The card distinguishes direct biblical imagery, typological connections, and the reconstructive Heavens Remember reading.

### Stage 6. The full sequence

The triple is considered inside a longer celestial narrative. The card's principal question is: **what phrase of the whole celestial sermon does this chain form, and which other chains does it join?**

### Stage 7. Publication of the map

The public card shows the geometry itself, the figures, the semantic sequence, the star names, the Scripture passages, and the neighbouring chains. Alternative geometric orders of the same triple are also retained on the map.

## 10. The twelve initial case studies

The original `seeds` set from `src/data/findings.ts` is retained below as the history of the first stage of the search. In version 1.4 each case is assigned a place in the new architecture of the corpus: the ancient core, the "chambers of the south," or the archive outside the primary semantic corpus.

| № | Triple | Figure order | ε | Status in v1.4 |
| ---: | --- | --- | ---: | --- |
| 1 | Rasalgethi → Deneb → 16 Lam And | — | — | rejected / outside the automatic corpus |
| 2 | Chi Her → Kappa Cyg → Algenib | — | — | unresolved / 2 HIP values unresolved |
| 3 | Gacrux → Alderamin → Nembus | Crux → Cepheus → Andromeda | 0.000228145° | **Chambers of the south / R-S** |
| 4 | Lesath → Sheratan → Jishui | Scorpius → Aries → Gemini | 0.000071338° | **Ancient core / H1** |
| 5 | La Superba → Albireo → Fomalhaut | Canes Venatici → Cygnus → Piscis Austrinus | 0.000098877° | **Archive / X** because of Canes Venatici |
| 6 | Guniibuu → Sadalmelik → Algenib | Ophiuchus → Aquarius → Pegasus | 0.000270083° | **Ancient core / H1** |
| 7 | Alhena → Zubenelgenubi → Albali | Gemini → Libra → Aquarius | 0.000167752° | **Ancient core / H1** |
| 8 | Cih → Sham → Ginan | Cassiopeia → Sagitta → Crux | 0.000116890° | **Chambers of the south / R-S** |
| 9 | Sadr → Gienah → Theemin | Cygnus → Corvus → Eridanus | 0.000241774° | **Ancient core / H1** |
| 10 | Gienah → Taygeta → Hamal | Corvus → Taurus → Aries | 0.000270948° | **Ancient core / H1** |
| 11 | Acamar → Mebsuta → Xuange | Eridanus → Gemini → Boötes | 0.000009430° | **Ancient core / H1** |
| 12 | Markab → Hassaleh → Ukdah | Pegasus → Auriga → Hydra | 0.000379425° | **Ancient core / H1** |

The status `Ancient core / H1` denotes a chain built on ancient sky figures of the primary corpus; the source register holds the history and dating of each figure.

### 10.1 Rasalgethi — Deneb — 16 Lam And

All three HIP values resolve: 84345, 102098, and 116584; the third record is a Bayer/Flamsteed catalogue designation. The unordered triple is absent from the 18,427 retained automatic results. The case is kept as a draft control example.

### 10.2 Chi Herculis — Kappa Cygni — Algenib

In the current seed the first two HIP values are zero; Algenib, HIP 1067, resolves. The case is at the first stage of the protocol — resolution of identifiers.

### 10.3 Gacrux — Alderamin — Nembus

HIP 61084 → 105199 → 7607; magnitudes 1.59 / 2.45 / 3.59; distances 155.82° and 37.30°; `variantCount = 5`.

Editorial labels of the project:

**Cross of Redemption → Enthroned Christ—King and Shepherd → Church-Bride.**

The same HIP triple has a second retained order, "Crux → Andromeda → Cepheus," with `ε = 0.000411792°`.

In version 1.4, Crux belongs to the **"chambers of the south" / R-S** layer, whereas Cepheus and Andromeda belong to the ancient historical core. Geometrically the chain remains `Crux → Cepheus → Andromeda`, and its meaning is read as "Cross of Redemption → Enthroned Christ → Church-Bride."

### 10.4 Lesath — Sheratan — Jishui

HIP 85696 → 8903 → 37265; magnitudes 2.70 / 2.64 / 4.89; distances 130.69° and 75.31°; `variantCount = 29`.

Figure order:

**Scorpius → Aries → Gemini.**

The Heavens Remember editorial sequence:

**Sting of Sin → God's Lamb, liberating His people → Suffering Savior and enthroned Judge.**

The strength of the case lies in the combination of three historically known figures and their place in the project's overall evangelical hermeneutic. The names Lesath, Sheratan, and Jishui form the next, philological layer of verification and refinement.

An alternative middle object yields the order "Scorpius → Gemini → Aries" with `ε = 0.000123361°`. It must be published as a competing geometric order.

### 10.5 La Superba — Albireo — Fomalhaut

HIP 62223 → 95947 → 113368; magnitudes 5.42 / 3.05 / 1.17; distances 77.78° and 75.89°; `variantCount = 4`.

Editorial sequence:

**Shepherd's Rod → Saving Cross → Refreshed people of God.**

Canes Venatici is a late cartographic figure and is removed from the primary semantic corpus of v1.4. The case is retained in the archive of the early search.

### 10.6 Guniibuu — Sadalmelik — Algenib

HIP 84405 → 109074 → 1067; magnitudes 4.33 / 2.95 / 2.83; distances 74.35° and 35.10°; `variantCount = 2`.

Figure order:

**Ophiuchus → Aquarius → Pegasus.**

Editorial sequence:

**Shepherd-Victor → Giver of the water of life → Blessing of Abraham.**

The historical status of the figures and each star name are verified separately.

### 10.7 Alhena — Zubenelgenubi — Albali

HIP 31681 → 72622 → 102618; magnitudes 1.93 / 2.75 / 3.78; distances 125.74° and 86.63°; `variantCount = 33`.

Figure order:

**Gemini → Libra → Aquarius.**

Editorial sequence:

**Suffering Savior and enthroned Judge → Broken order → Giver of the water of life.**

For each Arabic name, a separate philological card is created with the historical form, language, meaning, and sources.

### 10.8 Cih — Sham — Ginan

HIP 4427 → 96757 → 60260; magnitudes 2.15 / 4.39 / 3.59; distances 69.07° and 115.28°; `variantCount = 27`.

Figure order:

**Cassiopeia → Sagitta → Crux.**

Editorial sequence:

**Church—Wife of the Lamb → God's arrow of judgment → Cross of Redemption.**

All three strings are classified by HYG as proper names; their historical semantics undergo separate philological verification. Crux has the status `R-S`; the chain belongs to the map of the "chambers of the south."

### 10.9 Sadr — Gienah — Theemin

HIP 100453 → 59803 → 21393; magnitudes 2.23 / 2.58 / 3.81; distances 125.18° and 101.22°; `variantCount = 25`.

Figure order:

**Cygnus → Corvus → Eridanus.**

Editorial sequence:

**Saving Cross → Final Judgment → Fiery river of God's judgment.**

The same HIP triple is also retained as "Cygnus → Eridanus → Corvus" with `ε = 0.000272903°`; both orders are recorded in the full map of this triple.

### 10.10 Gienah — Taygeta — Hamal

HIP 59803 → 17531 → 9884; magnitudes 2.58 / 4.30 / 2.01; distances 130.92° and 22.39°; `variantCount = 27`.

Figure order:

**Corvus → Taurus → Aries.**

Editorial sequence:

**Final Judgment → Coming Judge → God's Lamb, liberating His people.**

The short second leg is 22.39° and is recorded in the card as a characteristic geometric feature of the chain.

### 10.11 Acamar — Mebsuta — Xuange

HIP 13847 → 32246 → 69732; magnitudes 2.88 / 3.06 / 4.18; distances 83.85° and 86.59°; `variantCount = 362`.

This is the minimum `ε` among the twelve cases:

`ε = 0.000009430°`.

Figure order:

**Eridanus → Gemini → Boötes.**

Editorial sequence:

**Fiery river of God's judgment → Suffering Savior and enthroned Judge → Shepherd and Guardian of God's Flock.**

The extremely small `ε` makes this case a priority for a separate high-precision astrometric run. The large `variantCount` shows the many stellar realizations of this constellation chain.

### 10.12 Markab — Hassaleh — Ukdah

HIP 113963 → 23015 → 47431; magnitudes 2.49 / 2.69 / 3.90; distances 80.16° and 74.60°; `variantCount = 77`.

Figure order:

**Pegasus → Auriga → Hydra.**

Editorial sequence:

**Blessing of Abraham → Lord of Creation—Good Shepherd → Satan under judgment.**

The deviation remains below 0.001°. The next layer of this case is the philological card for the names Markab, Hassaleh, and Ukdah and their place in the sequence.

---

## 11. The next stage of restoring the map

Version 1.4 defines a concrete programme for continuing the work:

1. rebuild the automatic corpus without Carina, Puppis, and Vela as independent semantic figures;
2. remove the late northern `X` figures from the primary semantic search;
3. complete the register of ancient `H1/H2` figures with datings and sources;
4. create a separate register of the "chambers of the south" `R-S`;
5. perform a new complete run and publish its counts, commit, and checksums;
6. verify the most precise chains against high-precision astrometric coordinates and in historical epochs;
7. create philological cards for every proper name participating in strong chains;
8. join triples into long routes of the celestial narrative;
9. build an interactive map on which a user can walk a chain from star to star and from image to image;
10. correlate the discovered routes with the overall sequence of the Gospel and of biblical history.

The statistical tables and distributions in this work serve as cartography of the corpus: they show the density, recurrence, precision, and structure of the relations found. The principal result of the next stage is the **restored sequence of the celestial sermon**, while the numerical distributions describe its geometric map.

## 12. The celestial sermon as a single narrative

Heavens Remember treats the celestial sphere as **a single narrative space**. An individual line matters insofar as it occupies a place in a longer sequence.

In the historically preserved sky, ancient figures supply a vocabulary of images. In the "chambers of the south," geometry helps to restore lost parts of the map. Proper star names supply local semantic signatures. Scripture discloses the overall plot and the order of the images.

For each figure the project asks three questions that disclose its place in the whole narrative:

1. **Where does the line come to it from?**
2. **Where does it lead next?**
3. **Which part of the Gospel does the whole sequence express?**

In this way individual triples become sentences, sentences become chapters, and the whole map becomes a celestial sermon.

### 12.1 Stability of meanings

The semantic role of a figure is fixed in the project's shared vocabulary and preserved across all chains. This makes it possible to read the sky as a text with a stable vocabulary, in which the same celestial word keeps its meaning in different places of the narrative.

### 12.2 Names as internal signatures

The name of an individual star sits inside a figure and inside a specific geometric chain. When its historical meaning agrees with the role of the figure and the direction of the narrative, it acts as a signature that refines the meaning of that place on the map.

### 12.3 The southern chambers as lost chapters

The southern reconstructive layer is treated as a region where the celestial geometry survived completely while the historical nomenclature survived only in fragments. Here the narrative connection is restored from topography to image and then to Scripture.

### 12.4 The aim of the reconstruction

The final task is to obtain a map on which the biblical narrative reads sequentially through the sky figures: from promise and fall, through the Lamb, redemption, and the King, to the people of God, the Bride, judgment, and final victory.


---

## 13. Conclusion

**The heavens declare. Heavens Remember restores that declaration.**

The great-circle method makes visible relations that are hard to notice on a flat map or when viewing individual constellations one after another. The first complete computational baseline showed the scale of the material: 629 stars yielded 18,427 unique constellation chains; 556 chains have `ε ≤ 0.001°`; 94 of them pass through three stars with HYG proper names.

These numbers open the entrance to the map. The content is disclosed when a line passes through stable celestial images and those images occupy consecutive places in biblical history.

The following chain is especially telling:

**Scorpius → Aries → Gemini**  
**Sting of Sin → God's Lamb → Suffering Savior and enthroned Judge.**

Here geometry joins three ancient figures, the project's shared vocabulary discloses their place in the Gospel, and Lesath, Sheratan, and Jishui become the next level of reading — the historical names of specific stars within that line.

Version 1.4 takes the next important step. The primary corpus is cleared of late technical divisions; ancient figures form the historical core; the "chambers of the south" receive their own reconstructive layer; star names are collected into a separate philological vocabulary; and triples begin to join into longer narrative routes.

The aim of the project is **to restore the ancient celestial sermon as a coherent narrative**: to see its words in the figures, its syntax in the topography, its signatures in the star names, and its meaning in Scripture.

**Heavens Remember restores the sermon that the heavens continue to speak.**

## 14. Bibliography

Complete machine-readable records are in `docs/references.bib`.

1. Benjamini, Y.; Hochberg, Y. "Controlling the False Discovery Rate: A Practical and Powerful Approach to Multiple Testing." *JRSS B* 57(1), 1995, 289-300. https://doi.org/10.1111/j.2517-6161.1995.tb02031.x
2. Bullinger, E. W. *The Witness of the Stars*. London: The Author, 1893. https://www.gutenberg.org/ebooks/49018
3. Currid, J. D.; Barrett, D. P. *Crossway ESV Bible Atlas*. Crossway, 2010.
4. Curtis, A., ed. *Oxford Bible Atlas*. 4th ed. Oxford University Press, 2007.
5. HYG Database contributors. *HYG Stellar Database, Version 4.1*. 2024. https://github.com/astronexus/HYG-Database
6. Hunger, H.; Pingree, D. *MUL.APIN: An Astronomical Compendium in Cuneiform*. Archiv für Orientforschung, Beiheft 24, 1989. https://cdli.earth/publications/76321
7. Hunger, H.; Steele, J. M. *The Babylonian Astronomical Compendium MUL.APIN*. Routledge, 2019.
8. International Astronomical Union. "The Constellations." https://www.iau.org/public/themes/constellations/
9. IAU Working Group on Star Names. "Naming Stars and the IAU Catalog of Star Names." https://www.iau.org/public/themes/naming_stars/
10. Kunitzsch, P.; Smart, T. *A Dictionary of Modern Star Names*. Sky Publishing Corporation, 2006.
11. Meeus, J. *Astronomical Algorithms*. 2nd ed. Willmann-Bell, 1998.
12. Nosek, B. A.; Ebersole, C. R.; DeHaven, A. C.; Mellor, D. T. "The Preregistration Revolution." *PNAS* 115(11), 2018, 2600-2606. https://doi.org/10.1073/pnas.1708274114
13. Rogers, J. H. "Origins of the Ancient Constellations: I. The Mesopotamian Traditions." *JBAA* 108(1), 1998, 9-28.
14. Rogers, J. H. "Origins of the Ancient Constellations: II. The Mediterranean Traditions." *JBAA* 108(2), 1998, 79-89.
15. Rolleston, F. *Mazzaroth; or, The Constellations*. London: Rivingtons, 1862-1865.
16. Seiss, J. A. *The Gospel in the Stars; or, Primeval Astronomy*. New and enlarged ed. Philadelphia: J. B. Lippincott, 1885.
17. Smart, W. M.; Green, R. M. *Textbook on Spherical Astronomy*. Cambridge University Press, 1977.
18. Westfall, P. H.; Young, S. S. *Resampling-Based Multiple Testing*. John Wiley & Sons, 1993.
19. Wilkinson, M. D. et al. "The FAIR Guiding Principles for Scientific Data Management and Stewardship." *Scientific Data* 3, 160018 (2016). https://doi.org/10.1038/sdata.2016.18
20. Ptolemy, C. *Ptolemy's Almagest*. Trans. G. J. Toomer. Princeton University Press, 1998. https://doi.org/10.2307/j.ctvzxx967
21. Condos, T. *Star Myths of the Greeks and Romans*. Phanes Press, 1997.
22. Bayer, J. *Uranometria*. Augsburg, 1603.
23. Hevelius, J. *Firmamentum Sobiescianum sive Uranographia*. Gdańsk, 1690.
24. Lacaille, N.-L. de. "Table des Ascensions Droites et des Déclinaisons Apparentes des Étoiles australes..." *Mémoires de l'Académie Royale des Sciences*, 1756, 539-592.
25. **Hebrew Bible, Job 9:9.** Masoretic text: `עֹשֶׂה־עָשׁ כְּסִיל וְכִימָה וְחַדְרֵי תֵמָן`. Mechon-Mamre Hebrew Bible, Job 9.
26. Classical descriptions of Argo collected in: *A Dictionary of Greek and Roman Antiquities*, "Astronomia," section "The Ship Argo"; the references there include Aratus, Cicero, Vitruvius, and Germanicus.
27. Verbunt, F.; van Gent, R. H. "The star catalogues of Ptolemaios and Ulugh Beg: Machine-readable versions and comparison with the modern Hipparcos Catalogue." *Astronomy & Astrophysics* 544, A31 (2012). https://doi.org/10.1051/0004-6361/201219596
28. *Cambridge Bible for Schools and Colleges*, commentary on Job 9:9: "the chambers of the south" as the deep regions of the southern heavens.
29. Keil, C. F.; Delitzsch, F. *Biblical Commentary on the Old Testament*, commentary on Job 9:9: `תימן חדרי` as southern celestial regions/constellations hidden or lost from view.

### Keys added to `references.bib` in version 1.4

- `jobHebrew` — Hebrew Bible, Job 9:9, Mechon-Mamre.
- `jobCambridge` — *Cambridge Bible for Schools and Colleges*, commentary on Job 9:9.
- `jobKeilDelitzsch` — Keil & Delitzsch, commentary on Job 9:9.
- `argoClassical` — classical testimonies to Argo/the Ship in Aratus/Ptolemy and the classical tradition.
- `hungerSteele2019` — Hunger & Steele, MUL.APIN (Routledge, 2019).
- `verbuntVanGent2012` — Verbunt & van Gent, machine-readable catalogues of Ptolemy and Ulugh Beg.

---


---

## Appendix A. Minimal sky-figure card

```yaml
id: aries
modern_iau_name: Aries
computational_slug: aries
historical_status: H1
historical_figure: Ram
historical_sources:
  - source: "..."
    date: "..."
    culture: "..."
    claim_supported: "..."
heavens_remember_label: "God's Lamb"
reading_role: "stable Heavens Remember meaning"
southern_chambers_layer: false
notes: "..."
```

For the southern reconstruction:

```yaml
id: crux
modern_iau_name: Crux
computational_slug: crux
historical_status: R-S
historical_figure: "southern sky sector"
historical_notes: "In the ancient catalogue the corresponding stars belong to the area of Centaurus."
heavens_remember_label: "Cross of Redemption"
reading_role: "chambers-of-the-south reconstruction"
southern_chambers_layer: true
notes: "Crux is used as a modern locator of the restored image of the Cross."
```

---

## Appendix B. Minimal star-name card

```yaml
star:
  hip: 8903
  current_name: Sheratan
  constellation: Aries
name_history:
  language: "..."
  original_form: "..."
  earliest_attestation: "..."
  source: "..."
  semantic_range:
    - "..."
confidence: "high | medium | low | unresolved"
role_in_reading: "confirms | clarifies | narrows | neutral | conflicts | unresolved"
notes: "..."
```

The key principle: **first the map and the figure, then its place in the celestial sermon, then the star name as the internal signature of that point in the narrative.**
