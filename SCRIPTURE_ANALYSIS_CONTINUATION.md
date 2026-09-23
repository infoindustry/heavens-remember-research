# Scripture analysis continuation

Canonical file:
- data/scripture-alignments-unique429-v0.5.json

Current state:
- 500 most precise retained alignment records were deduplicated into 429 unique unordered star triples.
- All 429 were re-run with a two-pass method.

Method:
1. Pass 1: read the three Heavens Remember image meanings as one narrative before looking for Bible references.
2. Pass 2: search Scripture for where that three-image narrative appears. A match may be one verse, one chapter, several chapters in one book, or a cross-book cluster.
3. Star-name etymology is excluded from this pass and must be source-verified separately.

v0.5 summary:
- total: 429
- strong: 220
- plausible: 198
- weak: 9
- no_match: 2

Match scope:
- single-scene: 220
- single-scene-broad: 74
- same-book-cluster: 67
- cross-book-cluster: 57
- partial: 9
- none: 2

Proper-name distribution:
- 0 names: 34
- 1 name: 153
- 2 names: 166
- 3 names: 76

Important correction:
- triple 61317-78493-93805
- chain: eagle>northern-crown>hunting-dogs
- meanings: Cast down like lightning -> Crown of life -> Shepherd's Rod
- current result: strong / single-scene
- primary corpus: Revelation 12
- support: Luke 10:18; Revelation 2:10; James 1:12; Psalm 23:4
- Earlier rule-based passes undervalued this triple because they searched prebuilt motif combinations rather than the whole biblical scene.

Version status:
- scripture-alignments-proper3-v0.1.json: 94-record pilot
- scripture-alignments-top500-v0.2.json: 500-record intermediate file
- scripture-alignments-unique429-v0.3.json: superseded
- scripture-alignments-unique429-v0.4.json: superseded
- scripture-alignments-unique429-v0.5.json: current canonical analysis

Next steps:
1. Manually review strong matches in geometric order.
2. Confirm that each claimed chapter/book really contains all three motifs.
3. Add sequenceCoherence where image order matters.
4. Add verified star-name etymology as a separate layer.
5. Later compare against shuffled/random control triples.

Keep the geometry layer, image-reading layer, Scripture-search layer, and star-name-etymology layer separate.
