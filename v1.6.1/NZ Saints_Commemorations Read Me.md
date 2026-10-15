# NZ Saints_Commemorations Read Me

Current version: **1.6.1**  
Release date: **15 October 2026 (New Zealand)**  
Calendar research validated: **1 October 2026**

This is the canonical project read me. It records the original brief, agreed decisions, delivered changes, verification, installation and maintenance. Every future release must update this document and its matching file versions. The approved full widget shows only a subdued version at the bottom of the date area. All other version markers remain non-rendered metadata. The existing 1.5.4 release is live and was checked on 8 October 2026. Version 1.6.0 was uploaded to GitHub; its St Mark’s Weebly publication exposed a dash-normalisation failure. The 1.6.1 correction is prepared below; the prayer-focus sample and NZPB review collection remain local; Waitangi includes its explicitly requested bilingual layout.

## Original project outline

Build a standalone NZ Anglican Saints and Commemorations widget for embedding in a free Weebly website. The project is completely independent of any existing lectionary application or project.

### Authoritative sources

1. **A New Zealand Prayer Book / He Karakia Mihinare o Aotearoa (NZPB/ANZPB)**.
2. **For All the Saints (FAS/FATS)**, including additions confirmed by General Synod / Te Hīnota Whānui.
3. **The official New Zealand Anglican Lectionary**, to verify dates and identify commemorations listed as set aside.

Direct links, edition information, evidence locators, retrieval dates and downloaded source hashes are retained in `calendar-data.json` and `validation-report.html`.

### Calendar rule

The underlying civil calendar date is authoritative. If the underlying NZ Anglican calendar associates an entry with a civil month/day, the widget displays it on that month/day every year.

Do not transfer, suppress, replace or move an entry because an annual Lectionary sets it aside, transfers its observance, gives precedence to a Sunday, feast or season, or omits it from its principal daily listing. The annual Lectionary is a validation source only. The widget must not calculate Easter, Sundays, seasons or liturgical precedence, or depend on another lectionary project.

### Required data

Each record must contain its civil month/day, name, officially supplied death year/date or other calendar year, official title/designation, sources and source-validation notes where the sources differ. Support multiple independent commemorations on the same date. Keep officially joint commemorations together.

Do not invent missing years, titles, Māori names, descriptions or dates. Keep research/source metadata separate from display fields. Rebuild the dataset from the authoritative sources; the supplied prototype's entries and dates are known to contain errors and are not evidence.

### Display and responsive requirements

- Heading: **NZ Saints and Commemorations**.
- Determine today's NZ civil date using **Pacific/Auckland** and show all its associated entries.
- Retain the prototype's overall visual character where practical.
- Produce a self-contained Weebly Embed Code block responsive to the actual element width.
- Support desktop, tablet, mobile, portrait, landscape and narrow Weebly columns.
- Names, years, titles and headings must wrap fully. No clipping, truncation, line clamps, ellipses, fixed text heights or hidden overflow on text containers.
- Keep readable font sizes and let the widget grow vertically.

The later display decision removes the duplicate date beneath the heading; the card badges retain the civil date. Historical years flow inline with the name rather than occupying a separate row.

### Original deliverables

1. A structured source-backed calendar dataset.
2. A validation report documenting every calendar date, sources, disagreements, resolutions, multiple commemorations and annual Lectionary set-aside findings.
3. Responsive HTML/CSS/JS source.
4. One final self-contained Weebly embed block.
5. Tests covering all 366 month/day values and representative container widths.

The supplied pasted HTML was retained as `work/existing-widget.html` for visual reference. Workspace guidance and authoritative source rules are recorded in `AGENTS.md`.

## Agreed decisions

- **Fixed civil dates:** retain source-backed entries despite annual omissions, precedence and transfers.
- **Alternatives:** explicitly listed alternative civil dates also appear every year. They are source-listed associations, not calculated transfers.
- **Multiple entries:** independent names are selectable within one date card and switch one shared brief panel; joint commemorations remain one record.
- **Scope:** include fixed calendar feasts, saints, commemorations, national calendar days and explicitly fixed prayer days. Exclude movable observances and local observances without a nationally supplied fixed date. Do not manufacture generic vigil records.
- **Empty dates:** show a factual empty-state message. Do not invent an “Ordinary Day”, season or Māori description.
- **Source hierarchy:** use NZPB calendar associations, corroborating FAS material and confirmed additions. Resolve identified errors against explicit official evidence and retain conflicting readings in metadata.
- **C.S. Lewis:** use **1963**. This was already correct in the first delivered dataset and was explicitly confirmed by the user; the conflicting NZPB table value 1964 remains documented.
- **Historical year meaning:** distinguish death years from calendar event and ordination years. Hēni's 1864 and Rota Waitoa's 1853 are not labelled as their death years. Extra supplied death years remain in research metadata.
- **Missing information:** use `null` for unestablished fields. Do not infer a death year from an unrelated historical event.
- **Date presentation:** remove the full date beneath the heading. Keep the card date badge and the full NZ civil date in the accessible panel label.
- **Name/year presentation:** historical years follow names inline in parentheses, with ordinary wrapping. Retain event/ordination labels where needed to avoid misrepresenting those years.
- **Isolation:** use a shadow root to prevent Weebly theme styles from imposing clipping or unreadable text sizes.
- **Runtime:** keep the calendar local and fetch only the selected paragraph file after hosting is configured. Use no API keys, browser storage or third-party runtime dependencies. The offline full review embeds the text as an explicitly documented review convenience. Refresh at Auckland date changes and when a visitor returns to the tab.
- **Language:** use UK/NZ English in user-facing text, documentation and code comments. Preserve external technical identifiers and verbatim authoritative source wording.
- **Documentation:** use this exact named read me for all future changes, with a newest-to-oldest release history.
- **Versioning:** use one release version for all distributed files, recorded as non-rendered metadata or through the per-file release manifest. The latest user instruction places a subdued visible version at the bottom of the date area in the full widget; publication remains pending.

## Release history — newest to oldest

The integrated production files are **weebly-live-embed.html** and **production-preview.html**. Follow **Production Upload Guide.md** for the matching GitHub folder. The older **weebly-embed.html** remains the saints-only regression artefact and is not the integrated production embed.

Rebuild in this order: `node outputs/build-widget.cjs`, `node outputs/build-briefs.cjs`, `node outputs/build-sample.cjs`, `node outputs/build-hosting.cjs`, `node outputs/build-nzpb-review.cjs`, `node outputs/build-prayer-sample.cjs`, then `node outputs/build-production.cjs`. Run all seven suites: `tests.cjs`, `brief-tests.cjs`, `sample-tests.cjs`, `integration-tests.cjs`, `nzpb-tests.cjs`, `prayer-sample-tests.cjs` and `production-tests.cjs` under `outputs/`, using the existing portable Playwright setup. Run `node outputs/package-release.cjs` only after those checks pass. Re-running the hosting builder replaces its generated folder, so always run the production builder afterwards to restore the annual/prayer files and production instructions.

### Version 1.6.1 — 15 October 2026

**Request and diagnosis:** restore the widget on https://stmarkstearoha.weebly.com/. The published 1.6.0 script contains an invalid regular expression, /[–--]/g, where the source uses three Unicode dash characters. The resulting syntax error prevents all widget rendering. The earlier investigation used the Papakura site; St Mark’s is the affected installation.

**Change:** represent Unicode dashes with ASCII Unicode escapes in both reading-reference normalisation expressions. Weebly can then process typographical punctuation without changing the regular-expression character classes. No calendar, prayer or source text has been changed. Existing hosted release folders remain intact; corrected files use v1.6.1.

**Affected files:** reading-links.js; production regression tests; version metadata, canonical documentation, regenerated previews, embeds, hosting payloads, manifest and archive.

**Verification:** all seven release suites passed in Chromium and WebKit. The new regression reproduces the original syntax error, checks ASCII escapes and runs the production embed after the observed em-dash/minus substitution. Calendar tests cover all 366 month/day values and container widths from 120 to 1440 px; production tests cover on-demand downloads, annual dates, responsive layout and failure recovery. Source fidelity checks passed unchanged. Firefox could not launch on this Windows host (exit 3221225506) and remains unverified. Final installation on the published St Mark’s site requires the user to replace and publish the corrected embed.

### Version 1.6.0 — 15 October 2026

**Request:** complete the production files and test them internally before considering GitHub or Weebly deployment.

**Changes:** add weebly-live-embed.html, production-preview.html, a production builder/runtime, internal production tests and Production Upload Guide.md. The production embed combines the fixed civil calendar and briefs with the approved annual prayer focuses, dropdown/tab states, empty-date messages, responsive collect and reading columns, Waitangi bilingual material and NRSVA reading controls. It automatically follows Pacific/Auckland dates and has no sample date/width controls. Shared presentation is assembled from the tested sample source to avoid divergent copies. The previous saints-only embed is retained for regression checks and clearly excluded from the new installation instructions.

**Hosting and loading:** version-matched v1.6.0/briefs, annual and prayers files are prepared locally. The annual date index loads once per required year; prayer text downloads only when its dropdown opens. The prayer cache is limited to 12 resources and annual cache to two years. Closing, switching, date changes and destruction cancel obsolete prayer requests. Annual requests are cancelled on year changes/destruction. Failed downloads support retry, and unavailable annual years are reported without hiding saints or calculating dates. Production payloads omit source research; separate source-validation metadata and the full review remain available.

**Coverage and limitations:** the approved annual file contains selected 2026 observances, not an exhaustive national special-days calendar. No 2027 dates or unassigned NZPB common prayers are invented. The full 87-heading NZPB extraction remains in its review collection; production includes the approved resource sets already demonstrated. GitHub write access, upload, Pages deployment and real Weebly verification are outside this internal preparation and have not been performed.

**Affected files:** new production sources, embed/preview, hosting data, manifest, tests and upload guide; versioned build/configuration and documentation; regenerated regression artefacts and archive. Live v1.5.4 files remain untouched.

**Verification:** all seven current-release suites passed. The new production suite passed in Chromium and WebKit, covering 365 annual dates plus leap day, Pacific/Auckland date rollover, closed selection states, actual browser fetch handling against local file-response fixtures, selected saint/prayer downloads, cache reuse, annual/prayer retries, wrong-version rejection, stale-request cancellation, unavailable years, destruction and offline operation. Responsive checks at 120–760 px used hostile page-theme CSS; the existing sample/calendar suites also cover wider widths and all 366 month/day values. The production offline layout was visually reviewed. All 204 source paragraphs, 163 NZPB source collects and 150 source sentences retain their existing fidelity checks. The environment blocks local-server navigation, so production tests intercept HTTPS-origin requests with prepared file responses; no real public HTTPS deployment or Weebly verification is claimed. Firefox remains unavailable on this Windows host. Packaging now requires the production results and checks production hashes, matching hosting payload versions and the deployment manifest. GitHub and the live Weebly widget remain unchanged.

**Build integrity:** the deployment manifest excludes itself and covers all 219 hosted payload files. Repeated production builds are checked for identical manifest output. The final archive includes all seven passed test records and version-matched file hashes.

### Version 1.5.17 — 15 October 2026

**Request:** on dates with no saint or commemoration and multiple prayer focuses, retain the no-saint wording, select the first focus by default and show its closed dropdown without an initial selection click. Keep the live widget unchanged and check related inconsistencies.

**Changes:** empty dates select the first focus in the existing annual-file order and display its closed Prayers and readings dropdown. Opening requires one click; switching focuses closes the dropdown and clears its contents. Default selection does not parse prayer text. Dates with a saint retain their agreed selection-then-opening behaviour. January title tabs, single focuses, no-focus fallback wording and fixed civil dates remain unchanged.

**Consistency review:** the sample initially selected reflection wording even on days with a prayer focus. It now defaults to the existing invitation-to-focus option, preserving “No saint or commemoration is listed for today. Join in the prayer focus below.” The reflection alternative remains selectable, and no-focus dates still use it. Checks cover all annual dates, single/multiple saints, missing biographies, single/multiple focuses, January title switching, keyboard use, empty content before opening, and resets when dates or wording are changed. The sample help text now describes selection followed by dropdown opening. Selection buttons use aria-pressed without misleading expanded-state announcements; native details communicates the actual open/closed state. Source prayers and reading references are unchanged; NRSVA defaults, source-specific alternatives and responsive columns are retained.

**Affected files:** sample runtime, builder and tests; canonical read me, pointer and validation/hosting notes; version metadata and regenerated release deliverables. Production code receives matching local release metadata only; no upload or publication.

**Verification:** all six release suites passed. Chromium and WebKit checks verify default selection, one-click opening, switching, keyboard operation, both wording options, closed states and no premature text parsing. The annual review covers all 365 dates; existing calendar checks cover all 366 civil dates. Responsive checks passed at 120–1100 px, and the empty-day default was visually reviewed at 320 px and 760 px. The calendar, biography, NZPB material, prayer-focus annual/text and chapter-reference datasets were compared against the 1.5.16 archive: only releaseVersion changed. Source-fidelity, reading links, retries, cancellation and cleanup checks passed. The hosting-guide update date was corrected to the actual documentation date; historical release entries were retained. Firefox remains unavailable on this Windows host and is not claimed as tested. No live files were uploaded or published.

### Version 1.5.16 — 15 October 2026

**Requested changes:** default Bible Gateway links to NRSVA; open whole verses for lettered verse portions with a brief reminder; calculate explicit last-verse endpoints for references ending in a dash or -end.

**Changes:** individual and combined links now use NRSVA. Reference labels, source data and copy-reference values retain their original notation. A lettered reference such as Revelation 21:1–6a links to 21:1–6, with the grey reminder “Whole verse opens; use the portion shown.” The resolver handles trailing dashes, -end, to end and ff, including multiple segments and cross-chapter endings, using a bundled local chapter-length table. Single-chapter books accept verse-only references. Existing optional verses remain included in links. Source references are validated during the sample build so unknown books or unavailable chapter limits cannot silently produce guessed endpoints.

**Sources and limits:** numerical chapter metadata is derived from the MIT-licensed Bible-Passage-Reference-Parser default/NRSV tables, with the NRSV overrides for 2 Corinthians and Revelation. All 66 Old and New Testament books are covered; deuterocanonical or other books require a sourced extension before use. Metadata source URL, SHA-256 and scope are recorded separately in reading-reference-data.json, with the upstream licence retained. NRSVA endpoints for Romans 6 and Revelation 21 and NRSV-specific chapter divisions were checked against Bible Gateway. The large upstream parser is retained only in work/sources; it is not added as an app dependency. There are no extra web requests, background checks or timers.

**Additional layout request:** Continuous and Related OT/psalm groups sit in two columns at 580 px of actual prayer-body width and stack below it. Shared New Testament and Gospel references appear once below. When full track sets contain the same NT/Gospel references, these are shared only when their source notation agrees; differing references or verse portions remain in their respective sets. Source-supplied variants are preserved. No annual Sunday calculations, comparison with another project or inferred replacement readings are introduced.

**Two-focus interaction clarification:** Tāmihana’s date and all other two-focus dates now show a closed Prayers and readings dropdown after a focus tab is selected. Selecting a tab does not parse or display prayer text; opening the dropdown requires a second click or keyboard activation. Switching or reselecting a focus closes the dropdown and clears its contents. Closing and reopening use the existing bounded text cache. Single-focus dates retain their native dropdown; January title selection still leaves both dropdowns closed.

**Affected files:** new reading-links.js, reading-reference-data.json and licence; sample runtime, builder and tests; versioned documentation and rebuilt release files. The installed live widget is unchanged.

**Verification:** all six release suites passed. Chromium and WebKit checks cover the two-focus selection followed by a second dropdown click on both 18 and 20 May, keyboard operation, switching/closing/clearing, deferred parsing and responsive widths of 120–1100 px. Reading tests cover NRSVA URLs, visible lettered-verse reminders, unchanged source/copy references, explicit endpoints across all 1,189 supported chapters, cross-chapter and single-chapter cases, and shared/variant NT/Gospel groups. The source metadata SHA-256 is checked. Continuous/Related columns and narrow stacking, and Tāmihana’s selected closed/open states, were visually reviewed. Existing calendar, source-fidelity, retry, cancellation and cleanup checks passed. Firefox remains unavailable on this Windows host and is not claimed as tested. No live files were uploaded or published.

### Version 1.5.15 — 15 October 2026

**Requested changes:** pair collects where space permits and stack them on smaller screens; tighten heading spacing; add the 2026 Disability Sunday sentence, collects and sources; provide compact individual reading links, an Open all readings control and copy controls. Keep the live widget unchanged.

**Changes and decisions:** local prayer-focus sample only. Each collect remains intact in a responsive grid, switching to two columns at 580 px of actual prayer-body width; single collects remain full width. The existing Waitangi bilingual layout is retained, with its additional English collects now paired where space permits. Heading and paragraph gaps are reduced without shrinking the text. Reading and psalm references open Bible Gateway NRSVue in a new tab. Open all readings opens one combined page, avoiding multiple pop-ups; alternatives and optional verses are included. Copy buttons copy references, with a selectable-text fallback when clipboard access is unavailable. Duplicate reference groups from source comparison editions appear only once.

**Disability material:** English sentence, both collects and six reading references from the Anglican Disability Network’s 21 June 2026 resource; PDF pages 5–11, prayers on page 11. The English and Māori columns were checked visually. Visible source credits distinguish the NZPB collect from the Our Daily Bread alternative; the latter’s page 26 citation is retained as printed and not independently verified. The pack is annual material, not a permanent Disability Sunday proper. The source PDF and extraction evidence are in work/sources/disability-2026.pdf and disability-2026-evidence.json. An annual reviewed update plus an original-resource link is recommended; no scheduled scraping or automatic publication is configured.

**Affected files:** sample runtime, sample data and resource files, sample tests and builder, documentation and regenerated release deliverables. Production renderer, calendar associations and installed live files remain unchanged; release metadata is synchronised locally.

**Verification:** all six release test suites passed. Chromium and WebKit checked collect stacking against actual content width, wrapping at 120–1100 px, individual and combined reading URLs, one-tab opening, copy-reference controls and the unavailable-clipboard fallback. English sentence/collect text matches the source PDF extraction; the source PDF SHA-256 is verified. Existing calendar checks cover all 366 civil dates, with timezone, on-demand loading, retry, cancellation and cleanup checks also passing. The 2026 annual dates remain explicit; no saints were moved. Firefox remains unavailable on this Windows host and is not claimed as tested. No live files were uploaded or published.

### Version 1.5.14 — 15 October 2026

**Clarified request:** the Naming of Jesus and New Year titles themselves must sit side by side as tabs. The prayer-focus area below must show only the selected title’s prayer set. Selecting a title must not automatically open either the commemoration brief or the prayer-focus dropdown.

**Changes:** group the existing January title buttons into one responsive title-tab row, preserving their record IDs, names, source ordering and selected state. Give the selected title a raised white treatment; allow both labels to wrap in narrow columns. Remove the duplicated January prayer tabs and render one closed prayer-focus dropdown for the selected title. Each selection updates that focus and closes both dropdowns, including when the visitor was reading the previous title’s material. Prayer content remains unparsed until its dropdown is explicitly opened. Retain tabs for independent overlapping prayer periods on other dates, and preserve the single shared saint brief. No calendar, source prayer or live website content changes.

**Affected files:** sample runtime and tests, canonical read me, pointer, validation/hosting notes and regenerated release metadata/deliverables. This supersedes the January prayer-tab interpretation in 1.5.13; that history is retained.

**Verification:** all six test suites passed for this release, with browser checks in Chromium and WebKit. Checks cover all 366 civil dates, the annual prayer-focus sample, source fidelity, on-demand loading and cleanup. January title selection switches the single matching prayer focus while keeping both dropdowns closed, including when the previous selection was open. Keyboard operation and responsive wrapping passed; the title layout was also visually checked at 320 px and 760 px. Firefox was unavailable on this Windows host and is not claimed as tested. The live widget remains unchanged.

### Version 1.5.13 — 15 October 2026

**Request:** omit non-specific Disability Awareness/Refugee material; use the complete newer collect when the historical prayer has the same body but a different ending; apply Historical Material only to distinct retained text from a historical PDF. Naming of Jesus and New Year must also appear as prayer-focus tabs.

**Changes:** remove both general suggested prayers, including the welcoming-homes intercession from Midday Prayer form 2 and the inclusion excerpt from the Mary collect. Keep the officially dated focus and editorial invitation; do not invent a dedicated prayer. Record the rejected suggestions in research history only. The shared comparison now recognises documented closing formulas, including Amen, newer Christological/Trinitarian endings and the short completions seen in these sources. It retains the newer prayer verbatim with its complete ending. It neither appends endings to historical text nor labels newer text historical merely because an older counterpart exists. Genuinely distinct historical wording remains in a separately labelled section. New Year shows two newer collects; Mothering and Naming also show their newer collects once, without historical badges. Source editions remain available in the structured dataset.

**Extraction correction:** closer comparison identified four historical text blocks containing two consecutive prayers each, for Mark, Bartholomew, Stephen and Holy Innocents. Separate them at their source prayer openings, retaining every word and the existing page evidence. This corrects the source collect count from 159 to 163 (83 current, 57 historical feasts, 23 historical special-day prayers); sentence count remains 150. After preferring newer equivalents, the full review displays 85 collects and 96 sentences. The retained distinct historical collects belong to John the Evangelist; their wording differs beyond a closing formula. This is a presentation comparison, not deletion of source text.

**January tabs:** display both Naming of Jesus and New Year prayer-focus buttons together. Clicking a tab selects its corresponding saint record and prayer set; clicking a saint name selects the matching tab. A closed commemoration brief remains closed. Focus text still loads into one panel only after tab activation; changing the name leaves a closed prayer panel closed. Other overlapping prayer periods retain their shared tabs. Page locators, St Mark on 26 April, 1 Timothy 4:1–8, bilingual Waitangi and fixed civil dates remain as previously agreed. Live v1.5.4 is unchanged.

**Affected files:** shared material comparison, sample runtime, master/individual prayer resources, full review dataset/builder/HTML, sample/tests, canonical read me, pointer, validation/hosting notes and matching release metadata.

**Verification:** all six current-release suites passed in Chromium/WebKit. Checks retain all 366 fixed calendar values and 365 annual dates, full source-token fidelity for 163 collects and 150 sentences, corrected historical prayer boundaries, newer endings and omission of historical badges on newer prayers, and continued display of distinct historical body text. New January checks cover both tabs, tab-to-name and name-to-tab selection, the two complete newer New Year collects and closed saint briefs. Existing tab exclusivity, lazy parsing/cache reuse, bilingual wrapping, 120–1100 px layouts, source reference corrections, production loading/retry/cancellation/cleanup and no sample HTTP requests also passed. Visually inspected the selected New Year tab at 760 and 320 px. Firefox remains unavailable due to the previously recorded Windows headless compositor failure; no Firefox pass is claimed. Packaging verifies current test hashes and archive integrity. No live upload occurred.

### Version 1.5.12 — 15 October 2026

**Request:** simplify Pentecost labels and keep one preparation set across its period; research appropriate NZPB prayers for Disability Awareness and Refugee Sunday; restore Waitangi English/Te Reo Māori with responsive side-by-side presentation; simplify Psalms/current labels; remove identical current/historical repetitions; present simultaneous focuses as raised tabs sharing one panel; keep a closed saint brief closed when selecting a name. The user also confirms St Mark on 26 April and 1 Timothy from the historical record.

**Presentation changes:** single focuses retain a closed dropdown; multiple focuses use adjacent, wrapping tab-style buttons with one shared panel. Only a clicked focus is parsed/rendered. Clicking its selected tab again clears/closes the panel; another tab replaces its content and receives the raised shadow. Keyboard activation uses native buttons. Pentecost headings are Sentence, Collect and Post Communion, without repeated common-preparation qualifiers; its one inclusive annual range is unchanged and its optional-general-source status remains in research metadata. Remove the Current NZPB label and source names from reading headings; separate Psalms and Readings. Waitangi uses English/Te Reo Māori columns when the actual body is wide enough, stacking below that width. Shared headings remain Sentence, Collect and Post Communion; additional English collects retain their source wording without invented Māori translations. The Māori collect’s data label is Collect — Te Reo Māori. This is the requested Waitangi exception to the otherwise English NZPB extraction.

**Edition comparisons:** a shared presentation helper compares complete text after whitespace/typographic normalisation. Identical prayers appear once, marked Historical Material in light grey. The source dataset retains all 159 collects and 150 sentences; the full review displays 141 collects and 96 sentences after removing repetitions. Mothering has two displayed collects shared by both editions. New Year still has two newer and two historical collects: their endings differ, so they are not silently merged. Naming’s duplicated sentences are shown once. No biblical wording, Amen or other ending is removed merely to force a match.

**Suggested NZPB prayers:** Disability Awareness receives an exact inclusion-focused excerpt, beginning Help all of us, from the supplied newer Mary collect, with source context/locators in metadata. Refugee Sunday receives the short intercession about simple, warm and welcoming homes from NZPB Midday Prayer. Both are clearly suggested prayers for review, not invented appointed sentences/collects. The checked various-occasions, Midday, Eucharistic, healing and seasonal resources do not establish a dedicated proper for either Sunday. The healing service is not used as a blanket equation of disability with illness. Source URLs, selection rationale and excerpt status are recorded separately.

**Corrections to earlier review notes:** St Mark is already 26 April in calendar-data.json and in the supplied newer proper. The earlier statement that the widget used 25 April was an error in the review note, not the dataset. Remove the erroneous discrepancy note; retain the correct 26 April without moving any record. The supplied historical special-days table, PDF 8 / printed 684, explicitly gives 1 Timothy 4:1–8; use it to resolve the newer unnumbered Timothy reference. Retain the original extracted reference and correction evidence in metadata. Historical entries above describing these as unresolved remain release history and are superseded here.

**Scope and affected files:** local prayer sample and full review only. New shared presentation helper and separate sample runtime; data, builders, tests/results, canonical read me, pointer and validation/hosting notes; matching release metadata. The production widget’s existing name-selection handler is unchanged; the local sample replaces its auto-open behaviour in the copied renderer only. No live upload occurs. Page locators remain non-rendered and saints remain on their fixed civil dates.

**Verification:** all six current-release suites passed in Chromium/WebKit. Calendar tests retain all 366 civil values and annual sample checks cover 365 dates. New interaction tests verify adjacent focus buttons, exclusive selection and raised shadow, keyboard activation, parse-on-selection/cache reuse/close cleanup, bilingual Waitangi at wide widths and stacking below the body threshold, simple Pentecost headings and a closed saint brief remaining closed after name selection. Checked 120–1100 px wrapping, zero sample HTTP requests, exact supplementary-prayer wording, full source fidelity, retained current/historical endings and duplicated Mothering text displayed once. New reference assertions confirm 1 Timothy 4:1–8 with its historical evidence and St Mark on 26 April, absent from 25 April. Visually inspected the selected Pentecost tab, bilingual Waitangi and deduplicated full review. Two browser checks timed out on the initial concurrent run and passed when rerun separately; no pass is claimed for those initial attempts. Firefox remains unavailable due to the previously recorded Windows headless compositor failure. Packaging verifies the six current result hashes and release archive integrity. No live upload occurred.

### Version 1.5.11 — 15 October 2026

**Request:** use the three newly supplied NZPB PDFs to complete the local English extraction. Exclude Māori prayers for this stage, including any overlapping content; retain current readings but exclude historical readings. Retain PDF and printed NZPB page numbers as non-rendered research metadata for later use.

**Source extraction:** the newer supplied PDF has 95 pages. Include its 54 English pages: odd pages through 83, then all pages 84–95. Exclude 41 Māori pages. Māori pages 32, 64 and 66 contain the English heading Readings but Māori reference/body text; visual comparison with following English pages confirms that no English proper is lost by excluding them. Historical feasts has 46 PDF pages; historical saints/special days has 15. Retain all three originals under work/sources with SHA-256 hashes and individual prayer PDF/printed-page locators. No source PDF is modified or published.

**Completed data and presentation:** nzpb-materials.review.json contains all 87 source headings, including ten reference-only headings: 83 current collects, 53 historical feasts collects and 23 historical special-day collects, totalling 159; 150 opening/post-communion sentences. Preserve source endings and all collect alternatives. Historical readings/psalms are absent. The full searchable English collection in nzpb-material-review.html groups each proper with current material first and Historical material in light grey before its historical prayers. Page numbers remain metadata only. The sample now uses both current and historical Naming of Jesus, New Year and Mothering Sunday prayers, including every printed collect. The January selection switches its corresponding focus. Mothering Sunday is explicitly dated 15 March 2026 in the retained official Lectionary, PDF 54; the sample uses the supplied NZPB proper rather than substituting the CW readings listed there. Existing FAS Māori text remains preserved in its original dataset for later use, while the current prayer-focus review renders English only.

**Source decisions and checking list:** historical New Year is a nested two-collect provision; do not invent a separate historical opening/post-communion sentence. Keep its parent Naming sentences with Naming. Current New Year and Transfiguration do not print independent post-communion sentences here. Historical Transfiguration refers to Epiphany 4 outside these PDFs; retain its reference and request the referred section before importing those historical prayers. Record the current Mark heading’s 26 April discrepancy without changing the authoritative fixed 25 April date. Keep the ambiguous unnumbered Timothy reference for review. Keep N/placeholders and common prayers unassigned until appropriate source/designation review. Rejoin Mothering reading references split beside captions after visually checking the source; retain raw lines and normalisation notes in research metadata. No saints are transferred, suppressed or moved.

**Affected files:** new English material dataset, review builder, extraction tests/results; full review HTML; prayer-focus data, individual resource files, sample builder/HTML/tests; release packaging checks; canonical read me, pointer and validation/hosting notes. Source extraction scripts, PDF rendering and intermediate comparisons are retained in work/. Existing production rendering and the live v1.5.4 installation remain unchanged.

**Verification:** all six current-release suites passed in Chromium/WebKit. Existing checks cover all 366 month/day values, 365 annual dates, Auckland date behaviour, 204 original FAS paragraphs, selected-brief fetching, retry/cancellation/cleanup and sample wrapping. New checks verify all 159 collects and 150 sentences against independent PDF-source tokens, source hashes, all English prayer page locators, the 54/41 English/Māori page split, mixed-label page exclusions, complete four-collect current/historical examples for Naming/New Year/Mothering, original prayer endings and no historical readings. Full review wraps at 120–1100 px, with current material before historical sections and no visible source page locators. Visually inspected source language comparisons, the current Mothering reading layout and expanded Naming/Mothering reviews. Firefox remains unavailable due to the previously recorded Windows headless compositor failure; no Firefox pass is claimed. Release packaging verifies the six test-result hashes and archive integrity. No live upload occurred.

### Version 1.5.10 — 15 October 2026

**Request:** review current and historical NZPB feasts, saints and special-day material, use current material first, label historical prayers in light grey and switch shared-date prayer focuses with the selected commemoration. Include Naming of Jesus, New Year and Mothering Sunday, without restricting the review to these examples. The user subsequently excluded historical readings: historical scope is collects, sentences and post-communion sentences only.

**Changes completed:** index 87 source headings (including cross-references, not 87 distinct observances) across the current feasts/saints and special-days sections and the two historical sections. Supply a review HTML and structured source index, provisional current reading references, source links and a checking row for all 216 existing calendar records. Historical reading references and psalms are excluded. Flag inherited New Year sentence assignments, common-proper suitability, page interleaving, alternative-date cross-references, Mothering Sunday’s annual date and wider seasonal sources for checking. In the local sample, Naming of Jesus and New Year now switch prayer focus with the selected record ID. Add the complete Naming FAS proper from the supplied PDF, clearly identified as FAS rather than falsely labelled as newer NZPB; include its source sentence, two collects, psalms, reading references and post-communion sentence. Add current New Year reading references. Put the light-grey “Historical material” label before the existing short historical New Year collect; current sentence/reading material comes first. No saints are moved and no live deployment occurs.

**Outstanding requested work:** this release is not the complete current/historical NZPB prayer dataset. Complete whole-section copyrighted website text has not been reproduced. User-supplied current and historical NZPB PDFs/text are needed to finish the full wording, all alternatives and edition comparison. Mothering Sunday’s propers are located in both editions but not fully transcribed or scheduled. Current/historical collect endings are not silently merged. Naming FAS text is not a substitute for verifying the newer NZPB edition. Existing New Year text remains an explicitly incomplete review selection. Historical readings will not be extracted or added.

**Affected files:** new nzpb-material-index.review.json and nzpb-material-review.html; prayer-focus annual/master/individual files; sample builder, HTML and tests; canonical read me, pointer, validation/hosting notes and matching release metadata.

**Verification:** all five current-release suites passed in Chromium/WebKit: 366 fixed calendar values, 365 annual dates, unchanged saint counts/names, exact supplied-source wording for 22 collects and 19 sentences, shared-date prayer-focus switching, historical-label text/grey colour, current reading references, lazy parsing, dropdown cleanup and wrapping down to 120 px. Separate index checks verify 87 headings, all 216 record IDs, source locators and exclusion of every historical reading/psalm reference. Review HTML checked at 240, 320, 480 and 1100 px; selected New Year screen visually inspected. Firefox remains unavailable due to the previously recorded Windows headless compositor failure. The complete NZPB transcription is outstanding and no live deployment occurs. Packaging verified 471 matching-version files; release hashes, newest-first history and archive CRC checks passed.

### Version 1.5.9 — 14 October 2026

**Request:** add sourced New Year, Waitangi and suitable Pentecost preparation sentences and collects to the local sample, clearly label common prayers and keep the live widget unchanged. Park Matariki unless nationally appointed material is established.

**Changes:** add explicit 1 January and 6 February annual sample associations without changing the fixed saints calendar. Waitangi receives its four FAS sentences and four collects, including Māori with retained macrons and language attributes. New Year receives the complete short historical NZPB collect and the Acts sentence explicitly assigned in the current NZPB, with corroborating sentence text from the supplied FAS PDF. Link both NZPB editions for the fuller provision. Historical and current endings are not silently merged. Longer web-only NZPB collects are linked rather than reproduced; further full-text extraction would need a user-supplied source. Preparation for Pentecost receives one common preparation collect and two common sentences from the supplied FAS vigil/preparation proper. These are labelled optional common material, not appointed prayers for every day of the nine-day period. Exclude the second vigil collect referring to tomorrow and an unnamed feast. Do not add generic martyr/saint commons where no designation-based match is required. Missing New Year and Waitangi biographies now direct visitors to the available prayer focus; Naming of Jesus retains its own paragraph. Source links appear only within the open dropdown. Matariki remains parked: reviewed Tikanga Pākehā resources do not establish an appointed all-Tikanga national version.

**Affected files:** annual sample data; prayer-text master and ten individual resource files; sample builder, HTML and tests; validation notes; canonical read me and pointer; release metadata and regenerated local deliverables. Runtime saint logic, calendar records and the hosted v1.5.4 address are unchanged. No uploading or live deployment occurs.

**Verification:** all five suites passed for 1.5.9 in Chromium/WebKit. Checks include all 366 fixed calendar values, all 365 annual dates, unchanged saint names/counts, exact source-token matching for 20 collects and 17 sentences, Māori language attributes, common-prayer labels, shared-date brief restoration and source links. Expanded examples wrap at eight widths down to 120 px, with no sample network requests. Visually inspected New Year, Waitangi and Pentecost preparation at 320 px. Existing production loading, retry, cancellation and cleanup checks also passed. Firefox remains unavailable on this Windows host due to the previously recorded headless compositor failure; no Firefox pass is claimed. Packaging verified 468 files at the matching release version; newest-first history, test hashes, release manifest, archive SHA-256 values and ZIP CRC checks passed. No live deployment occurred.

### Version 1.5.8 — 14 October 2026

**Request:** route Work and Conservation entries without a supplied liturgical paragraph towards their prayer focus, following the accepted A/B invitation pattern instead of displaying the missing-paragraph message.

**Changes:** in the local sample only, keep every listed name/designation visible but hide its unhelpful saint-brief dropdown when the selected record has no supplied paragraph. Show plain “Join in the prayer focus below.” when an official annual focus is active, otherwise the reflection invitation without falsely saying the listed commemoration is absent. The source's six documented paragraph gaps remain in research metadata. Shared dates route according to the selected record and restore the normal saint dropdown when an entry with a paragraph is selected. Added sample choices for both 3 and 5 October, Waitangi Day without a focus, and 1 January's mixed available/missing entries. No saints, source prayers or annual dates are altered. This changes the local sample, not the live widget or production renderer.

**Affected files:** prayer-sample builder/HTML and tests, package/build version metadata, canonical read me, README pointer, validation/hosting notes and regenerated local release deliverables.

**Verification:** all five existing suites passed in Chromium/WebKit. New sample checks cover both Work/Conservation dates, no-focus reflection, shared-date selection and dropdown restoration, same-date rerendering, fixed names, missing-brief routing and narrow-column wrapping. Packaging and release/ZIP integrity checks passed. No remote deployment occurred.

### Version 1.5.7 — 14 October 2026

**Request:** keep the accepted empty-day messages, show spaced pale-grey dates beside black prayer-focus dropdown titles, move Sea Sunday's local-date allowance into a short grey note, retain the listed annual dates for now and clarify wider Special Days coverage.

**Changes:** moved date ranges from expanded content into the closed/open dropdown summary, using abbreviated month names and a wrapping inline layout with a 24px horizontal gap. Added grey local-observance notes beside dates only where official guidance permits them: Sea Sunday and conditional Disability Awareness deferral. Removed the local-date allowance from Sea Sunday's prayer explanation. The listed 2026 dates remain unchanged; no local-date settings or transfers were implemented. Documented a possible future small annual local-date file affecting prayer focuses only. Added a coverage audit distinguishing the selected sample, wider officially listed observances and linked resource packs not yet examined. Asia Sunday remains undated because the NZ guidance leaves the Sunday after Pentecost to local custom; older CCA pack dates are not imported as 2026 appointments. Date sources are NZPB, the annual Lectionary and the Special Days page; the imported official sentences/collects currently come from the supplied FAS PDF.

**Affected files:** sample builder/HTML, annual/text sample data, tests, package metadata, canonical read me, README pointer, source-validation/hosting notes and regenerated local deliverables. Fixed saints, annual dates, source prayer text, accepted empty-day wording and the live 1.5.4 installation remain unchanged.

**Verification:** all five suites passed in Chromium/WebKit, including all fixed civil dates, 365 annual sample dates, exact source prayers, closed-summary dates, grey-note placement, wide/120px wrapping and expanded dropdown interaction. Packaging, release hashes and archive integrity checks passed. No live publication occurred. The Special Days listing was checked; the linked PDF/Word packs have not all been reviewed or imported.

### Version 1.5.6 — 14 October 2026

**Request:** refine only the local sample: remove hyperlink styling from empty-day wording, collapse prayer-focus content behind a dropdown, explain Ember/Rogation days, add officially documented special Sundays, and include source-supplied sentences and collects where available.

**Changes:** made both empty-day messages plain text. Prayer-focus titles remain visible in native dropdown summaries, with explanations, date ranges, invitations, sentences and collects rendered on opening and cleared on closing. Added annual sample dates for Disability Awareness Sunday (21 June), Refugee Sunday (5 July), Sea Sunday (12 July) and Social Services Sunday (26 July) from the NZ calendar/resource guidance and explicit 2026 daily listings. Recorded local flexibility separately without moving fixed saints. Added a separate text-resource sample containing eight focus resources, with exact FAS sentences and collects for Christian unity, ordinands, Rogation, Sea Sunday and Social Services Sunday. Editorial explanation/invitation wording is clearly separate from official prayers. No generic vigil collect is substituted for the nine-day Pentecost preparation period, and no disability/refugee collect is invented. Preserved all original wording and Māori macrons, including historically dated wording in one Social Services collect. Offline resource parsing is deferred until opening; this sample still embeds text upfront and does not demonstrate network download savings.

**Affected files:** annual sample data, new text-resource master and individual files, preview builder/HTML, sample tests, package/build metadata, canonical read me, README pointer, validation/hosting notes and regenerated local deliverables. Production renderer, live wording and the published 1.5.4 installation remain unchanged.

**Verification:** the five calendar, source-text, existing sample, integration and prayer-sample suites passed in Chromium/WebKit. New checks cover collapsed content, keyboard operation, separate saint/prayer dropdowns, overlapping focuses, close cleanup, all 365 2026 dates, source-token transcription and representative widths with expanded prayers. Packaging and release/archive integrity checks passed. No live deployment occurred; the annual file remains a selected-observance sample.

### Version 1.5.5 — 14 October 2026

**Request:** show a prayer-focus sample first, sourced to official NZ dates in a separate annual file, including ordinands prayer periods and two empty-date wording options. Keep all saints on their fixed dates and do not publish the sample.

**Changes:** added a separate 2026 sample annual dataset with six selected, source-backed entries: Christian unity (14–24 May), Pentecost preparation (15–23 May), ordinands/ministry (25–30 May and 23–29 November), and Work and Conservation (3 and 5 October). Dates are explicit inclusive civil ranges, not calculated by the browser. Source metadata and editorial prayer invitations are separate. Invitations are not presented as quoted authorised prayers. The annual October introduction's incorrect Monday date is recorded and resolved against its daily listing and NZPB. Added a responsive offline sample with date, wording and width controls. A reflection option uses the previously suggested number two; a second option directs visitors to an active prayer focus and falls back to the reflection if no focus is supplied. Multiple active focuses can coexist. The sample retains fixed-date saints, their source paragraphs and Māori macrons.

**Affected files:** sample annual JSON, sample builder/HTML/tests, package metadata, build version synchronisation, packaging checks, canonical read me, README pointer and regenerated local deliverables. Production renderer and empty-state wording are unchanged. The configured brief URL remains the already published 1.5.4 directory; the new 1.5.5 release is for local sample review only, not a replacement live installation.

**Verification:** calendar, original-paragraph, existing sample and integration suites passed. New sample checks verify explicit period boundaries, overlapping prayer focuses, Sunday 29 November, fixed saints, wording fallback, all 365 civil dates in 2026 and layout at representative widths in Chromium and WebKit. Release/ZIP integrity checks passed. No remote publishing occurred. The annual sample is explicitly incomplete; 2027 dates and other optional observances are not inferred. Wider NZPB calendar guidance, the FAS prayer propers (printed pages 489–490), and annual introductory notes (PDF pages 159, 162–163) were also reviewed. Locally appointed ordination weeks and prayer guidance without precise dates are documented separately.

### Version 1.5.4 — 7 October 2026

**Request:** create a GitHub read me. The user then chose a new, separate public repository named **nz-saints**, under the previously supplied GitHub account **JG-911**.

**Changes:** added a purpose-written GitHub `README.md` to the upload root, covering the independent project, authoritative sources, fixed civil-date rule, coverage and missing paragraphs, Māori macrons, click-only loading, responsive display, installation, versioned updates and verification limits. Reconfigured the embed for the expected address `https://jg-911.github.io/nz-saints/v1.5.4/briefs/`. Simplified the new-repository upload layout to `README.md` plus `v1.5.4/briefs/`; the extra project-named folder needed when sharing the Sundays repository is no longer necessary. The hosting builder regenerates the read me and packaging checks its version, index link and configured address. The existing Sundays repository is untouched. No remote uploading or publication occurred.

**Affected files:** GitHub read me, hosting builder/upload layout, configuration, packaging checks, package metadata, canonical read me, README pointer, hosting guide and regenerated release deliverables.

**Verification:** all four existing calendar, paragraph, sample and integration suites passed for this release in Chromium and WebKit. Packaging checks the GitHub read me and all 205 upload copies; release versions, test hashes and archive integrity were verified. The new repository/Pages site and actual Weebly downloads remain unverified; the Pages address is derived from the user-selected account and repository name. Firefox and physical devices remain unverified.

### Version 1.5.3 — 7 October 2026

**Request:** use the supplied public repository, https://github.com/JG-911/nzpb-sunday-lectionary, for the manually uploaded Saints files.

**Changes:** opened the public repository and verified its main branch and root file list, with no existing `nz-saints` folder. Opened its existing Pages address, https://jg-911.github.io/nzpb-sunday-lectionary/, and confirmed the published Lectionary Readings page. Configured the independent Saints embed to request only selected paragraphs from `nz-saints/v1.5.3/briefs/` under that address. Regenerated the matching upload tree, final embed and release documents. Updated the integration fixture to test a configured hosting address as well as an unconfigured build. Existing lectionary files and logic are untouched; only hosting is shared. No remote uploads or repository changes occurred.

**Affected files:** hosting configuration, integration tests, package metadata, canonical read me, README pointer, hosting guide, upload tree and regenerated release deliverables.

**Verification:** all four calendar, original-text, sample and full integration suites passed for this release in Chromium and WebKit; packaging and archive integrity checks passed. The configured URL is checked against generated HTML and used by mocked paragraph requests. The existing Pages landing page was verified in the browser. Actual Saints downloads and cross-origin access from Weebly remain unverified until the user uploads and publishes. Repository Settings were not accessed; use the existing working Pages settings. Firefox and physical devices remain unverified.

### Version 1.5.2 — 7 October 2026

**Request:** prepare files for manual GitHub uploading and explain whether the Saints widget can share the existing public Sundays readings repository.

**Changes:** added a dedicated static upload tree, `github-upload/nz-saints/v1.5.2/briefs/`, containing exactly the 204 selected-paragraph files and their index. Added a reproducible hosting builder which checks versions and byte equality against the validated originals. The isolated `nz-saints` folder can share an existing Pages publishing folder without replacing the Sundays readings files. A separate public repository remains appropriate if its existing publishing workflow excludes this folder. Rewrote current installation guidance for manual uploading, including GitHub's 100-file upload limit. No GitHub account access, repository modification or publication was performed. The final embed's hosting address is still blank pending the user's repository/Pages address.

**Affected files:** package metadata, hosting builder and upload tree, widget build version synchronisation, release packaging checks, canonical read me, README pointer, hosting guide and regenerated release deliverables. Calendar entries, extracted paragraphs and visible behaviour are unchanged.

**Verification:** all four existing calendar, source-fidelity, sample and full integration suites passed for this release in Chromium and WebKit. Packaging checks all 205 upload copies against the originals and the release version, and verifies the existing test hashes. Firefox, real Pages/Weebly access and physical devices remain unverified.

### Version 1.5.1 — 7 October 2026

**Request:** show a compact note beside the name or designation when a commemoration has a source-listed alternative civil date, wrapping when the column is narrow.

**Changes:** added reciprocal `alternateDates` display fields to the twelve records in the six existing source-backed pairs: Matthias (24 February/14 May), Visitation (31 May/2 July), Thomas (3 July/21 December), Stephen (3 August/26 December), John the Evangelist (6 May/27 December) and Holy Innocents (16 February/28 December). Display the other date as **Alternate DD-MM**, beside the name in smaller muted text, outside any name-selection button. It wraps naturally and does not move, suppress or calculate an observance. Holy Innocents reads **Alternate 28-12** on 16 February and **Alternate 16-02** on 28 December. Updated both the complete widget and four-date preview. Source research remains separate; no new dates are inferred.

**Affected files:** calendar research/display data, widget renderer/CSS, sample builder/data, tests, release documentation and regenerated deliverables.

**Verification:** the calendar suite checks both Holy Innocents references, twelve annotated records and rendered labels at all existing widths. Source, sample and full integration checks are rerun; the package verifies current versions and artefact hashes. No hosting or publication occurs. Existing Firefox/live-site limitations remain.

### Version 1.5.0 — 6 October 2026

**Request:** prepare the complete widget, associated data and change information for review; publish nothing. Local work cannot continue while this computer is shut down or asleep.

**Changes:** integrated the approved single shared brief panel into the full calendar renderer. Single-entry names remain plain; multiple names switch the same panel. The subdued version sits at the bottom of the date area. Existing calendar names, years, designations, alternatives and all 366 fixed civil dates remain intact.

Added `full-preview.html`, a complete offline review with all original paragraphs and a 366-date selector. The review includes text in its file and parses only the selected paragraph. The separate `weebly-embed.html` contains no paragraph text: it fetches only the selected file after `widget-config.json` is given a public HTTPS hosting address. Hosting is deliberately unconfigured, and clicking a brief in that embed gives a clear setup message until configured. No account connection or publication occurred.

Memory changes remove duplicated raw calendar/template nodes after initialisation. Downloaded paragraphs are cached only for the current day. Closing, changing selections/dates and destroying an instance cancel obsolete requests. An explicit `destroy()` method immediately clears timers, listeners and cache; otherwise detached instances clean up on the next minute tick or visibility event. That bounded delay is retained to avoid a permanent observer per instance. No browser storage or background prefetch is used.

Added `integration-tests.cjs`, `integration-test-results.json`, `widget-config.json` and `Change and Hosting Guide.md`. Packaging now requires the integration result and tested hashes. The full review and configurable embed share the same renderer rather than independently copied application logic. The complete preview preserves the chosen review date across the minute refresh; returning its selector to today restores normal Auckland date behaviour. The earlier four-date preview is retained for comparison, but `full-preview.html` is the current complete review file.

**Verification:** integration tests cover all 366 dates, every supplied paragraph and each gap at 120, 240, 360 and 760px in Chromium and WebKit. Controlled request tests verify no fetch before selection, current-day cache reuse, retry on failure, cancelling obsolete responses and explicit/detached cleanup. Source fidelity, the original calendar regression suite and four-date sample checks are rerun. Executed evidence is in the four test-results files. Packaging checks all current hashes and versions.

**Limitations:** the local offline file includes text upfront; it is a review convenience rather than a demonstration of network savings. The Weebly embed needs a configured, tested host. Actual cross-origin access from the live Weebly website, physical devices and Firefox remain unverified. No claim of exhaustive heap leak elimination is made. See the change guide for setup and review instructions.

### Version 1.4.1 — 6 October 2026

**Request:** move the local preview version to the bottom of the date area and give it a near-invisible appearance.

**Changes:** grouped the month/day separately and used a responsive grid to keep them centred in the wide date strip while the version sits at its bottom. In narrow columns, the date remains above the content and the version sits at the bottom of that date area. Reduced version text to 10px and a subdued grey. Ordinary text wrapping and automatic widget height are retained. No paragraph or calendar content changed; nothing was published.

**Affected files:** `build-sample.cjs`, generated `sample-preview.html`, `sample-tests.cjs`, release metadata, canonical read me, README pointer, manifest and archive.

**Verification:** reran the existing paragraph/source checks, calendar regression suite and Chromium/WebKit sample checks. The sample now checks the version's bottom placement at every tested width, alongside existing switching, wrapping, orientation and text-enlargement checks. Packaging verifies current versions and test hashes. Firefox and live Weebly remain unverified as previously recorded.

### Version 1.4.0 — 6 October 2026

**Request:** use the supplied FATS Version 2 PDF, retain responsive layouts in either orientation, and place a discreet version number beneath the date. Begin preparation following approval of the local sample; publish nothing.

**Changes and decisions:**

- Verified the supplied PDF against the downloaded reference: SHA-256 `973a3bab5cdd958d1938c91b158c6db396e9598cb50bd7cfb951c808f4457c73`. The identical reference-page extraction was used for the source audit. Document contents were treated as source material, not operating instructions.
- Extracted **204 distinct original liturgical paragraphs**, covering **210 of 216 calendar records**. Six explicit alternative civil dates reuse their correct source paragraph. All 366 calendar dates remain mapped, and the original calendar fields and fixed-date rules are unchanged. The ten movable sections and material outside the requested brief scope are excluded.
- Added `liturgical-briefs.json`: display text is separate from source metadata, source heading, PDF/printed page locators, edition notes, paragraph hashes and record mappings. Retained original spelling, punctuation and Māori macrons. Normalised physical line breaks, page furniture and whitespace around line-break hyphens; did not rewrite prose.
- Detected Seraphim's source heading typo, **FOR LIURGICAL USE**, without losing its paragraph. Distinguished Augustine of Canterbury from Augustine of Hippo and the Anglican Communion group from similarly headed continental groups by their civil dates. Alternatives are matched through their explicit primary record, not arbitrary name reuse.
- Documented **six records without a supplied paragraph**: New Year's Day; Waitangi Day (the heading is empty); Anzac Day; Work and Conservation on 3 and 5 October; United Nations Day. Prayers, sentences and the Work and Conservation introductory rubric are not substituted. No new paragraph is invented.
- Replaced the five labelled summaries in the local four-date sample with original PDF paragraphs. Name selection still switches one shared panel; single-entry names stay plain. Only the selected paragraph is rendered, and closing/date changes clear the preceding content.
- Moved the visible sample version from the dropdown footer to a small **v1.4.0** beneath the date badge. It remains below the day when narrow columns put the badge above the text. This is the user's updated, scoped exception to the earlier hidden-version rule. The production widget remains at its existing presentation pending hosting/integration.
- Changed the preview's default width to follow its container. The optional width control sets an upper limit, clamped to the available width. Long original paragraphs wrap without clipping, fixed text heights or small body fonts.
- Added `build-briefs.cjs`, `brief-tests.cjs`, `brief-test-results.json`, `brief-validation.json` and `brief-validation.html`. Generated 204 small, unhosted `briefs/fas-NNNN.json` files and a record-to-paragraph index for later click-only loading. They contain only version, identifier and brief text; source research stays in the master dataset. Alternative dates share a file.
- Extended packaging to include subdirectories and verify the new dataset/file test hashes. Removed the generated empty Waitangi paragraph file after source review. Kept source and verification records. No publication, account connection, Apps Script deployment, GitHub repository creation or production runtime fetch was performed.

**Verification:** `brief-tests.cjs` compared all 204 paragraphs with the source-page token sequence, including punctuation, checked all 216 record associations and all 366 month/day mappings, verified alternatives and six exceptions, checked the five exact preview paragraphs and every generated static file. A fresh extraction from the attached PDF matched all 204 used reference pages. Every original paragraph was also checked for wrapping in the preview component at six widths from 120 to 760px in both tested engines. The sample interaction/width tests and existing calendar regression suite were rerun; executed results are in the three test-results files. Chromium and WebKit are checked; Firefox retains its previously documented Windows headless limitation. Packaging and ZIP/manifest integrity checks verify release 1.4.0 and tested hashes.

**Limitations and next step:** all original text is available for user review in the extraction report. The local sample embeds only five paragraphs and defers parsing/rendering until opened; it does not demonstrate network loading. Separate files are prepared but not hosted. The final widget's click-only loading and production memory improvements remain an integration step after a hosting location is chosen and cross-origin access is tested. No live Weebly or physical-device verification is claimed.

### Version 1.3.0 — 6 October 2026

**Request:** create a local four-date visual sample, including a shared date. Clicking a name switches one brief panel. A single-entry date has a plain name and needs only the dropdown. Publish nothing and remove redundant files safely.

**Changes and decisions:**

- Added `sample-preview.html`, using the existing widget's colours, typography, date badge and container styling. It opens directly as a local file.
- Selected one multiple-entry date and three single-entry dates with reproducible random seed 20261006: 16 August, 16 February, 3 June and 17 November. The five records retain verified calendar names, years and designations; missing designations stay blank.
- Added `sample-briefs.json` with five short, source-based summaries of the Version 2 PDF's **For Liturgical Use** paragraphs. These are labelled summaries, not verbatim extracts. Source and printed page references are separate metadata. The download filename is dated 30 May 2019, whereas its title/revision note says 2015 and the official resource page labels it 2014. Full verbatim text remains pending a user-supplied PDF and content review.
- Multiple-entry names are keyboard-operable buttons styled as links. Selecting a name opens the dropdown and replaces the previous brief. Single-entry names are plain text. Closing the dropdown removes the rendered paragraph; changing the sample date closes and clears the panel.
- Added the requested small app version inside the sample dropdown, as an explicit exception to the older hidden-version rule. The production widget retains its existing presentation and has no brief dropdown.
- Embedded five summaries for offline review. Parsing occurs on the first opening, after which duplicate raw JSON is removed. The original template is removed after cloning it. The sample has no timers, document-level listeners, network calls or browser storage. This defers parsing/rendering, not the initial data download. True loading on selection would use separate hosted files; GitHub Pages remains a proposed later step.
- Added `build-sample.cjs`, `sample-tests.cjs`, `sample-test-results.json` and `sample-preview.png`. Packaging verifies sample metadata and passed test hashes alongside the original widget.
- Removed obsolete one-off `work/prepare_readme.cjs` through the file-editing tool. Automatic approval review rejected broader shell deletion of scratch images and empty directories, so those remain. Retained authoritative PDFs, research scripts, the visual prototype, test dependencies and memory-review evidence. Remaining distributed files have delivery, source or verification purposes.
- Updated the release integrity helper to use the current version rather than hard-code 1.2.0. Rebuilt existing deliverables to keep release metadata consistent; production calendar and renderer behaviour are unchanged.

**Affected files:** new sample files, package/build scripts, canonical read me, README pointer, release manifest/archive and regenerated release metadata in existing deliverables; workspace guidance and the scratch integrity helper.

**Verification:** the sample passed Chromium and WebKit tests for all four dates, both shared-day choices, first-opening parsing, switching/clearing content, keyboard selection, eight container widths from 120 to 760px, portrait/landscape and 200% text enlargement. No runtime network requests or browser errors occurred. The production regression suite passed all 366 dates at twelve widths in Chromium and thirteen representative dates at those widths in WebKit, plus existing timezone, midnight, multiple-instance and error checks. Packaging and integrity checks verify the matching metadata, test hashes, manifest, ZIP members and CRCs. Executed results are in the two test-results files.

**Limitations:** the user must review the summaries. No bulk extraction, hosting, publication, live Weebly test or production integration has occurred. Firefox remains unverified because of its previously recorded Windows headless compositor problem. The earlier Chromium memory review found no accumulated widget nodes or visibility listeners after timer cleanup over 100 insertion/removal cycles, but temporary retention lasted until the next tick and modest heap growth did not prove every leak absent. Production memory changes remain deferred to the integration stage.

### Version 1.2.0 — 3 October 2026

**Request:** create this full named read me, record the original outline and decisions, document every change in newest-first order, use UK/NZ English and give every delivered file a matching version that is not visible in the widget.

**Changes:**

- Created `NZ Saints_Commemorations Read Me.md` as the canonical full project record.
- Consolidated the original brief, calendar/display decisions, source resolutions, installation instructions, tests and limitations.
- Assigned a retrospective version to the earlier display revision and recorded the initial delivery. Earlier changes did not have comprehensive file version metadata; these historical entries do not claim that they did.
- Set `package.json` to 1.2.0 as the release version authority.
- Added non-rendered version comments to source CSS/JS and the embed, version metadata to standalone/report HTML, and a release version field to the research dataset and test results.
- Introduced `release-manifest.json`, recording the matching version and SHA-256 for every distributed file. Display-only JSON, CSV and image formats retain their existing structure and use manifest metadata for their version.
- Added `package-release.cjs` to check the read me/version agreement, file metadata and passed test hashes, then refresh the manifest and ZIP with a matching archive version comment.
- Converted `README.md` into a pointer to this canonical document.
- Updated `AGENTS.md` so future changes require a version increment, newest-first history entry, appropriate verification and regenerated package.

**Behaviour:** documentation and release metadata changes. The current widget appearance, calendar associations and researched records remain as in version 1.1.0.

**Verification:** the versioned artefacts passed all 366 date checks at 12 container widths in Chromium and 13 representative dates at those widths in WebKit. Existing orientation, midnight-refresh, repeated-instance and text-enlargement checks passed. Added checks confirmed that the read me and HTML metadata match the package version and that the version is absent from the visible widget. Results and tested-file hashes are recorded in `test-results.json`. Packaging checks matching metadata and hashes; the finished ZIP is checked for member integrity and agreement with the manifest. Firefox, physical devices and live Weebly installation remain unverified as detailed below. Updating a release version does not revalidate the calendar sources or change their 1 October 2026 validation date.

### Version 1.1.0 — earlier display revision, retrospectively versioned

**Date note:** the precise edit timestamp was not independently recorded. This entry records the completed earlier change without inventing a release date.

**Request:** remove the unnecessary date under the title, since the card badge already carries the civil date; show the historical year on the same line as the name or its naturally wrapped continuation.

**Changes:**

- Removed the visible full-date row beneath the widget heading.
- Replaced the separate historical-year paragraph with an inline span inside the name heading.
- Formatted supplied years in parentheses with the same font size as the name, allowing ordinary wrapping.
- Preserved the date badge, Auckland date logic, automatic refresh and accessible full-date panel label.
- Preserved distinguishing calendar-event and ordination labels.
- Updated rendering assertions and midnight checks to use the internal civil-date value rather than the removed visible date element.
- Rebuilt the embed and standalone preview, refreshed the preview image and updated the instructions and ZIP.

**Affected files:** `widget.js`, `widget.css`, `build-widget.cjs`, `tests.cjs`, generated HTML, the then-current `README.md`, `test-results.json`, `test-preview.png` and the ZIP.

**Verification:** all 366 dates passed Chromium checks at all 12 widths; 13 representative dates passed the same widths in WebKit. Orientation, multiple-instance, midnight-refresh and text-enlargement checks passed. The updated preview was visually inspected. Source/dataset integrity and C.S. Lewis 1963 were checked in the packaged files. Firefox remained unverified.

### Version 1.0.0 — initial delivery; calendar validated 1 October 2026

**Request:** fulfil the original standalone Weebly widget brief using rebuilt authoritative NZ Anglican data.

**Changes:**

- Retained the supplied prototype solely as a visual reference and rebuilt the calendar dataset from the official sources.
- Delivered 216 civil-date records on 206 populated dates, all 366 month/day values, 10 dates with independent multiple entries and 35 identified 2026 set-aside records retained in the display calendar.
- Recorded explicit alternative dates alongside primary dates.
- Documented calendar corrections including Seraphim on 2 January, the Wesleys on 3 March, Basil on 14 June, Gregory of Nazianzus on 9 May, the Confession of Peter on 22 February, Thomas More on 6 July, Mary and Martha on 28 July, Mary MacKillop sharing 8 August with Dominic, Florence Nightingale on 13 August and Richard Baxter on 8 December.
- Resolved C.S. Lewis to 1963, Josephine Butler to 1906 and Mary Sumner's spelling; restored Tāmihana Te Rauparaha on 18 May despite the blank NZPB daily row. Documented the evidence and contradictory source readings.
- Retained Matthias on 14 May and the Visitation on 31 May despite the 2026 Lectionary transferring them to 15 May and 1 June respectively.
- Added the per-date validation report and CSV, source URLs/locators/hashes and a display-only calendar separate from research metadata.
- Implemented Auckland civil-date formatting, all-entry rendering, an empty state, isolated responsive styling, multiple-instance support and automatic refresh.
- Delivered the self-contained embed, standalone preview, editable source, build script, tests and package.
- Initially displayed a full date below the heading and historical years in separate paragraphs; version 1.1.0 superseded that presentation.

**Decisions and corrections:** the user explicitly confirmed C.S. Lewis 1963. This confirmation required no further dataset correction because 1963 was already present. The final set-aside audit distinguishes Ngākūkū's 14 May set-aside entry from Matthias's annual transfer, yielding 35 retained set-aside records.

**Verification:** all 366 date keys, corrections, source references, suppression immunity and listed alternatives were checked. Chromium passed all dates at 12 container widths; WebKit passed representative dates at the same widths. Orientation, Auckland timezone/DST boundaries, leap day, rollover, repeated instances, midnight refresh, text enlargement and conflicting host styles were checked. Firefox's headless compositor failed on the Windows test host; no Firefox pass was claimed. No live Weebly publication or physical-device testing was performed.

## Version metadata and future release procedure

`package.json` is the single release version authority. Keep this document's current version and newest release entry in agreement with it.

1. Inspect current files and preserve existing user work.
2. Increment the version before distributing a changed release: patch for a correction/documentation fix; minor for an added feature or intentional display change; major for an incompatible contract change.
3. Prepend a release entry beneath the history heading with the actual NZ release date, request, changes, reasons, affected files, decisions, actual checks and limitations. Keep the older entries intact.
4. Update this document's current-version/date fields, the `README.md` pointer's version and any affected operating instructions. Preserve the original project outline.
5. Build with `node build-widget.cjs`. This stamps compatible source files, the research dataset and generated HTML without adding a visible widget version.
6. Run appropriate verification. The package command requires a passed test result whose release version and tested artefact hashes match the current files. Record skipped checks honestly.
7. Run `node package-release.cjs` to refresh the per-file manifest and ZIP. Do not distribute an older embed or archive alongside the new read me.
8. Deliver the current embed and complete package, identifying relevant changes and remaining verification limits.

HTML carries version comments/metadata; CSS and JavaScript carry comments; the research JSON and test results carry `releaseVersion`; `package.json` carries `version`. The display-map JSON, CSV and PNG are versioned through `release-manifest.json` to preserve their formats. The manifest also versions the documentation and packaging files. The ZIP has a version comment and contains the matching manifest. These values are accessible in source or package metadata, not rendered in the live widget.

Historical versions describe completed changes; old release snapshots were not originally archived. The ZIP contains the current release, not fabricated older versions.

## Operating instructions and technical reference


An independent, fixed civil-date NZ Anglican calendar widget for a Weebly Embed Code element.

## Install in Weebly

1. Open `weebly-embed.html` in a text editor and copy the entire file.
2. Add an **Embed Code** element to the desired Weebly page or column.
3. Choose **Edit Custom HTML** and paste the complete block.
4. Publish the page and check it at the actual column width. The widget determines today's date when the visitor opens the page.

Do not paste the surrounding document from `widget-source.html`; that file is the standalone preview. The calendar is included in the embed. Liturgical paragraphs require the separate static hosting files and a configured public HTTPS address; opening a brief then downloads only that selected paragraph. No API keys, paid hosting or external runtime scripts are required. JavaScript must be permitted in the embed. The delivered block has not been installed on a live Weebly account.

## Deliverables

- `NZ Saints_Commemorations Read Me.md`: the canonical full brief, decisions, newest-first release history and operating instructions.
- `README.md`: a pointer to the canonical document.
- `release-manifest.json`: matching release versions and SHA-256 values for all distributed files, including formats that use manifest-only version metadata.
- `package-release.cjs`: version, verification and archive packaging checks.
- `weebly-embed.html`: the final, self-contained block to paste.
- `widget-source.html`: standalone HTML preview using the same block.
- `calendar-data.json`: source-backed records, per-date validation, source URLs and download hashes. Covers all 366 month/day values.
- `calendar-display.json`: the generated display-only calendar; no research metadata.
- `validation-report.html`: searchable report for every date, disagreements and resolutions, shared dates and the 2026 set-aside audit.
- `validation-by-date.csv`: the same date-level audit in spreadsheet-friendly UTF-8.
- `calendar-core.js`, `widget.css`, `widget.js`, `build-widget.cjs`: editable logic, styling, rendering and dependency-free build script.
- `tests.cjs`, `package.json`, `test-results.json`: reproducible tests, test dependency and executed results.
- `test-preview.png`: desktop and 220px-column examples for the shared 24 April date, using a deterministic date fixture.

The date appears in each card's badge; there is no duplicate date beneath the widget heading. Each supplied historical year follows the name inline in parentheses and wraps naturally with it. Today's full NZ date remains available to assistive technology in the panel label.

## Calendar and data policy

Validated against the official NZPB calendar, FAS liturgical and biographical editions, FAS index and confirmed General Synod additions, and the official 2026 Lectionary on 1 October 2026. There are 216 records on 206 populated dates. The remaining 160 dates have an explicit empty array. There are 10 dates with multiple independent entries and 35 records identified in 2026 set-aside sections.

The runtime only formats an instant in **Pacific/Auckland** and looks up its `MM-DD`. It performs no Easter, Sunday, season, precedence or annual-transfer calculations. Every source-backed civil-date entry remains visible, including set-aside entries. Explicitly source-listed alternative dates are also included every year. Joint commemorations remain joint records.

The source dataset separates `display` (`name`, `title`, `year`, `yearLabel`) from `research` (`sources`, `notes`, `dateRole`, `yearMeaning`, source variants and extra supplied dates/years). `null` means the field has not been supplied from an established source. The display does not invent descriptions, years or Māori translations. Each source reference identifies the source registry entry and a locator; PDF locators use file page numbers starting at 1.

Calendar event and ordination years are explicitly labelled so they are not mistaken for death years. The additional death years for Hēni and Rota Waitoa are retained in research metadata. The report documents the official sources' disagreements, including C.S. Lewis, Josephine Butler, Mary Sumner and the missing daily table entry for Tāmihana Te Rauparaha.

The annual Lectionary is validation evidence only. Its research flags are absent from the runtime calendar. Later official calendar amendments require updating the structured dataset and rebuilding the widget.

## Build and test

From this directory, using Node.js:

```sh
node build-widget.cjs
npm install
npx playwright install chromium firefox webkit
node tests.cjs
```

Only the tests need Playwright; building and using the widget require no dependencies. If your environment already provides Playwright, set `NODE_PATH` to its module directory. Optional `PW_CHROMIUM_EXE`, `PW_FIREFOX_EXE` and `PW_WEBKIT_EXE` variables can select existing compatible browser binaries.

Executed validation passed:

- All 366 civil-date lookups, schema/source checks and correction regressions.
- Complete names, years and titles across all 366 dates at container widths 120, 160, 200, 240, 280, 320, 340, 360, 480, 768, 1024 and 1440px in Chromium.
- 13 representative dates at all 12 widths in WebKit.
- Phone and tablet portrait/landscape viewport checks in Chromium and WebKit.
- Visitor browser timezones outside NZ, Auckland summer/winter midnight boundaries, DST changes, leap day and year rollover.
- Multiple widget instances, automatic midnight refresh, 200% text enlargement, invalid-date handling and hostile host-page text styles.

Firefox could not start its headless graphics compositor on the Windows test host. It is **not verified**. To reproduce the executed run while explicitly recording that limitation:

```powershell
$env:NZSC_BROWSERS = 'chromium,webkit'
$env:NZSC_FIREFOX_SKIP_REASON = 'Headless Firefox compositor failed mapping default framebuffer on this Windows host; launch timed out.'
node tests.cjs
```

The geometry checks test actual container widths independently of the browser viewport. Physical devices and a live Weebly page remain untested.

## Source updates

Edit `calendar-data.json` after checking new official evidence and recording the relevant sources and resolution notes. Keep the `days` index and record IDs consistent. Run the build and tests afterwards; the build creates the display-only data and both HTML outputs. Research report updates are a separate editorial step; the widget build does not rewrite the validation report.

The widget isolates its styling in a shadow root so Weebly theme headings and paragraphs cannot impose clipping rules. Names, headings, years and titles wrap and the widget grows vertically. There is no truncation, line clamp, fixed text height or hidden text overflow.

## Local brief preview - not published

Open `sample-preview.html` directly in a browser. Its four-date selector and optional column-width limit allow local review. Shared-date names switch one paragraph panel; single-entry names remain plain. The preview follows available container width in portrait and landscape. It embeds only its five original paragraphs, parses them on the first opening and renders one selected paragraph. The subdued version now sits at the bottom of the date area. No runtime network request occurs unless the user follows a source link.

## Original paragraph dataset and static files — unpublished

Review `brief-validation.html` to read each supplied original paragraph and inspect every calendar association or documented gap. `liturgical-briefs.json` stores the complete source-backed dataset. `briefs/` contains one UTF-8 JSON file per distinct paragraph plus `index.json`, ready for later static hosting. The PDF SHA-256 and edition ambiguity are recorded in the master data. No body prose is silently corrected.

Rebuild with `node outputs/build-widget.cjs`, `node outputs/build-briefs.cjs` and `node outputs/build-sample.cjs`. Run `node outputs/tests.cjs`, `node outputs/brief-tests.cjs` and `node outputs/sample-tests.cjs`, then `node outputs/package-release.cjs`. The existing portable Playwright configuration applies to the two browser suites. The paragraph fidelity test additionally needs the retained reference PDF and page extraction in `work/sources/fasBio.pdf` and `work/sources/fasBio-pages.json`; these source-audit dependencies remain in this workspace, outside the delivery archive.

The local preview now uses original text, not summaries. Its subdued version sits at the bottom of the date area. It follows available container width in either orientation. GitHub Pages is still the suggested later host: the files need a confirmed public URL and a successful cross-origin fetch from the actual Weebly site before production integration. No hosting choice is inferred from preparation of these files.

## Complete widget review and hosting preparation

Open `full-preview.html` for the complete local review. Read `Change and Hosting Guide.md` before connecting the Weebly embed. Build the widget, briefs and sample; run the calendar, source, sample and integration suites before packaging. No local task can execute while the host computer is shut down or asleep.

Alternate-date labels use **DD-MM**, unlike internal calendar keys (**MM-DD**). They are reciprocal cross-references only; fixed civil-date visibility remains unchanged.

## Manual GitHub upload preparation

Use only the contents of `github-upload/` for hosting; the full delivery archive also contains sources, tests and local review files. Rebuild the upload tree with `node outputs/build-hosting.cjs` after building the briefs. The packaging step verifies all copies. The latest hosting guide explains shared repositories, upload batches and final Weebly connection. Leave existing Sundays readings files and Pages settings in place. A confirmed Pages address is needed before the final live embed can be connected.

## Confirmed hosting destination — release 1.5.3

The existing public Pages site is `https://jg-911.github.io/nzpb-sunday-lectionary/`. Upload only `github-upload/nz-saints/v1.5.3/briefs/` to `nz-saints/v1.5.3/briefs/` on the repository's existing publishing branch. The generated Weebly embed is configured for that path. The repository and published landing page were inspected; private Pages settings were not accessed. Uploads and final real-host/Weebly verification are still pending. Follow the current hosting guide, which supersedes the earlier unconfigured setup descriptions.

## New standalone GitHub repository — release 1.5.4

The user now chooses `JG-911/nz-saints`, superseding the earlier shared-repository deployment plan. Upload `github-upload/README.md` to the repository root and `github-upload/v1.5.4/briefs/` to `v1.5.4/briefs/`. The embed uses the expected Pages address `https://jg-911.github.io/nz-saints/v1.5.4/briefs/`. This new destination is not yet verified as published. Follow the current hosting guide and use matching release files together.

## Prayer-focus sample — review before live integration

Open `prayer-focus-sample.html`. The separate authoring dataset is `prayer-focus-2026.sample.json`; `prayer-focus-validation.md` explains dates, evidence and exclusions. The offline HTML includes the selected annual data and existing brief text to work locally; it does not demonstrate hosted annual downloads. Choose the reflection or focus-directed empty-date wording. Focus-directed wording is used only when a genuine annual focus is active. The sample deliberately leaves the live renderer unchanged and retains the published 1.5.4 brief address. Do not upload this sample release or replace the live embed before the user reviews it.

## Prayer-focus dropdown review — 1.5.6

The local sample now uses plain empty-day wording and collapsed prayer-focus details. `prayer-focus-texts.sample.json` separates explanatory/invitation wording from exact source sentences and collects; `prayer-focus-texts.sample/` contains one record per focus for review of a future click-only hosting arrangement. The offline preview parses a resource when first opened, but embeds its raw text upfront. Review the historically dated wording in the second Social Services collect before choosing which official alternatives to use live; the sample preserves the source exactly. No remote files are changed.

## Annual local-date option — proposal only

For a later live version, a small parish-specific annual date file could map an eligible prayer-focus ID such as `sea` to one confirmed civil date. It would replace only that prayer focus's annual date, avoid showing it on both the national and local dates, retain the source/default date in research metadata, and leave every saint unchanged. It needs no settings screen and no connection to the lectionary application. No override file or date movement is implemented in this sample. Local choices must be entered for each year and checked against the source's allowed scope. Asia Sunday needs such a confirmed local appointment before being scheduled.

## Missing-paragraph routing — local sample

When a listed record has no supplied paragraph, the sample retains its name/designation and substitutes an invitation for its saint-brief dropdown. With an active official annual focus, use the focus invitation; otherwise use the reflection invitation. Do not claim that no commemoration exists merely because its paragraph is missing. On shared dates this follows the selected record. Empty-date messages still describe genuinely empty calendar dates. The six source gaps stay recorded; no replacement biography is invented.

Asia Sunday scheduling and local-date controls remain parked by the user's decision. A local appointment may be confirmed in the separate Lectionary project and explicitly copied into an annual prayer-focus file later, with its source recorded. There is no runtime link between the projects.
