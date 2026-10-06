<!-- NZ Saints and Commemorations | Version 1.5.4 -->
# NZ Saints and Commemorations

An independent widget for a Weebly website, displaying saints and commemorations on their fixed New Zealand civil calendar dates. This folder hosts the liturgical paragraphs used by the widget. The Saints project has its own repository and does not depend on the NZPB Sundays readings project.

**Prepared release: 1.5.4.** Uploading and live-site verification are carried out separately; this read me does not certify publication.

## Calendar and sources

The widget uses today's date in **Pacific/Auckland** and displays every entry associated with that month/day. It supports multiple commemorations and source-listed alternative civil dates. It never calculates Easter, applies Sunday precedence, transfers or suppresses an entry because of an annual Lectionary decision.

Authoritative sources:

- [A New Zealand Prayer Book / He Karakia Mihinare o Aotearoa](https://anglicanprayerbook.nz/007.html).
- [For All the Saints](https://www.anglican.org.nz/Resources/Worship-Resources-Karakia-ANZPB-HKMOA/For-All-the-Saints-A-Resource-for-the-Commemorations-of-the-Calendar), using the supplied 2019 Version 2 PDF for its **For Liturgical Use** paragraphs, and General Synod / Te Hīnota Whānui confirmed calendar additions.
- [The official New Zealand Anglican Lectionary](https://anglican.org.nz/Resources/Worship-Resources-Karakia-ANZPB-HKMOA/Lectionary-and-Related), used for validation, including entries listed as set aside.

Calendar coverage: **366 month/day values, 216 records and 204 distinct paragraphs**. Those paragraphs serve 210 records; alternative dates can share a paragraph. Six records have no paragraph supplied in the requested PDF section. The widget explains those gaps without inventing text. Original Māori macrons and source wording are preserved; PDF line breaks and page furniture are normalised. C.S. Lewis is recorded as **1963**; source disagreements are retained in the full validation records.

This is an independent project and is not presented as an officially endorsed Anglican publication. Hosting the extracted text does not confer a new licence over the original source material.

## Files in this repository

- [v1.5.4/briefs/index.json](v1.5.4/briefs/index.json): associations between calendar record IDs and paragraph IDs, with null values for documented gaps.
- `v1.5.4/briefs/fas-....json`: 204 separate UTF-8 paragraph files. Each contains `releaseVersion`, `id` and `brief`.

Keep these names and the directory structure intact. Each release has a separate versioned directory.

## Weebly use and loading

The matching **weebly-embed.html** from the complete release is pasted into a Weebly **Embed Code** element. That file contains the fixed calendar, styles and widget code. It is supplied separately from this hosting folder.

The embed for this release uses:

`https://jg-911.github.io/nz-saints/v1.5.4/briefs/`

No paragraph is downloaded until the visitor opens the dropdown. On a shared date, selecting a name switches the one brief panel to that entry. A single entry has a plain name. The widget caches only the current date's selected paragraphs, clears that cache on a date change and cancels obsolete requests. It does not download or parse the PDF, use browser storage or require API keys, Google Apps Script or third-party runtime scripts.

The layout follows the width of the Weebly element in narrow columns, portrait and landscape. Text wraps fully, and the widget grows vertically. A subdued version appears at the bottom of the date area.

## Uploading and updates

Upload **README.md** and the **v1.5.4** folder to the root of the public **JG-911/nz-saints** repository. For browser uploads, create `v1.5.4/briefs/index.json` first, then upload the 204 paragraph files into its `briefs` directory in batches of no more than 100 files. Enable GitHub Pages from **main** and **/(root)**.

After deployment, open the hosting address above followed by **index.json**, then test a real paragraph download from the published Weebly page. A missing-file response indicates that the path or deployment needs checking.

For updates, upload the new versioned directory first, verify it, then replace the Weebly embed with the matching release. Retain the older published directory until the switch succeeds. Do not edit validated paragraph text casually or mix release versions.

## Full documentation and verification

The complete release includes **NZ Saints_Commemorations Read Me.md**, the original project outline, newest-first change history, calendar and paragraph validation reports, source metadata, responsive source files and tests. These are maintained with the development deliverables, outside this lightweight hosting folder.

Local release checks cover all 366 dates, original paragraph fidelity, representative container widths, shared-date selection, download retry/cancellation and instance cleanup in Chromium and WebKit. Firefox, physical devices and actual Pages-to-Weebly access are not claimed as verified by these local checks.
