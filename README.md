<!-- NZ Saints and Commemorations | Version 1.9.5 -->
# Approved full widget: GitHub and Weebly instructions

Prepared locally, version **1.9.5**. Nothing has been published. Use this package for the approved full widget; older v-numbered folders, weebly-live-embed.html and the older Production Upload Guide describe the retained earlier renderer.

## What to upload when you are ready

Extract github-ready.zip. It contains just these three files, with no release folder:

- saints-widget.html — the complete approved widget and its calendar, brief and liturgical/prayer material.
- saints-embed.js — the small Weebly loader and automatic height adjustment.
- README.md — these instructions for the repository.

Upload these files into the **root of JG-911/nz-saints**, alongside any existing files. Do not upload the ZIP itself or put the files inside another github-ready folder. Keep all existing files and older folders intact: the current live embed may still use them. There are no 204 brief files to upload for this package. Do not upload any files to nzpb-sunday-lectionary.

## Updating the existing installation to 1.9.5

When ready to publish, replace these three files at the existing repository root: saints-widget.html, saints-embed.js and README.md. Use the same names and paths; do not create a version folder or delete older files. The loader is included to keep its release metadata aligned; its embedding contract is unchanged.

**No Weebly change or republish is needed if its Saints block already loads https://jg-911.github.io/nz-saints/saints-embed.js.** The same address will load the updated hosted page after a reload. An older version in the block's HTML comment does not control the widget version. If a site still uses an older inline widget or v-numbered address, use the one-time replacement steps below for that site only.

Uploading/committing to the Pages publishing branch can make this release live automatically on every site using the stable loader. These files are prepared only; do not upload until ready to publish.

## First installation or migration — a publishing step for later

1. Open JG-911/nz-saints on GitHub and select its existing Pages publishing branch. Check Settings → Pages if unsure; do not change a working Pages configuration.
2. At the repository root choose Add file → Upload files. Drag in the three files from the extracted ZIP and review the changes. Root README.md will be replaced; existing application files/folders are retained.
3. Commit only when ready to publish these files. Uploading to a branch used by Pages can publish automatically, even before changing Weebly.
4. Wait for the Pages deployment to finish. Open https://jg-911.github.io/nz-saints/saints-widget.html and confirm the date, visible version 1.9.5, a brief, and a readings dropdown. This address has been prepared, not verified live.
5. Only after that check, replace the existing Saints Embed Code contents in Weebly with the complete block below. Replace the Saints widget block only; leave the Sundays/Lectionary block alone. Use Edit Custom HTML, select all the old Saints code and paste this block. Do not append it to the old code.
6. Publish Weebly only when ready. Check the published page on desktop/mobile, expand and close a panel, and check its height. A preview in the Weebly editor alone does not verify the published page.

## Exact Weebly replacement code

Copy the complete contents of weebly-full-widget-embed.html, or this identical block:

```html
<!-- NZ Saints and Commemorations | Version 1.9.5 | stable full-widget embed -->
<div data-nzsc-embed style="width:100%;min-width:0;">
  <p data-nzsc-fallback><a href="https://jg-911.github.io/nz-saints/saints-widget.html" target="_blank" rel="noopener noreferrer">Open NZ Saints and Commemorations</a></p>
</div>
<script src="https://jg-911.github.io/nz-saints/saints-embed.js" defer></script>
```

The script loads the widget in a responsive frame. Its height follows the content, including opened and closed dropdowns; there is no fixed text height. A small fallback link remains if the script/frame cannot initialise. JavaScript must be allowed in the Weebly Embed Code element, as for the existing widget. The application code is served from GitHub, avoiding the editor's earlier rewriting of inline punctuation.

## Future updates — keep the same names

Use the same three filenames at the same repository root. There is no new v-folder for each release, and no routine Weebly code replacement. Most widget/content changes affect saints-widget.html and README.md; upload saints-embed.js only when the loader changes. The version remains recorded in metadata/read me and subdued in the date area. GitHub commit history retains earlier revisions without extra public folders.

**Simplest recurring workflow: GitHub Desktop.** Clone JG-911/nz-saints once. Fetch/pull existing changes before editing. Copy the new prepared files over the matching files in that local clone; retain everything else. Review the Changes list, commit the intended changes, then Push origin only when ready to publish. This sends the changes without manually uploading folders/batches. You can instead use the browser to upload only changed files to their existing paths: a matching filename/path updates that file rather than creating a numbered duplicate. Renaming it creates a separate file. GitHub still needs the changed contents; it cannot update a file that has not been supplied or edited.

Stable URLs can remain cached briefly. Wait for Pages to finish, reload the page and use a hard refresh if an older version is shown. Do not create a new folder just to bypass a cache. A page already open will normally show the new application after reloading. A future change to the loader address, repository or embed contract would require a one-off Weebly change.

Official guidance: [GitHub Desktop commits](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop), [pushing changes](https://docs.github.com/en/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop), [Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Included behaviour and remaining source checks

Includes the approved full review: all fixed civil-date saints and short FAS briefs, current NZPB-first sentences/collects/readings, separate closed FAS alternatives and historical material, pale blue title tabs, separate sage prayer focus, yearly focus rules, movable Corpus Christi, empty-day invitation, Auckland date/weekday and subtle version. About, Sentence, Collects, Readings and Post Communion are separate dropdowns where material is available, all closed initially. Opening Collects shows every collect. Each section has a bottom close button, with Open all/Close all controls scoped to its commemoration or prayer focus. Names/years/macrons, optional/bracketed readings and NRSVA links retain the approved handling. No date selector or review controls are shipped in the public widget.

The fixed calendar has all 366 month/day keys. Leap years and non-leap century years are handled by the Gregorian civil date; a non-leap year does not invent 29 February. Movable prayer focuses use the actual year. The review's artificial Feb-29 selector can advance to a leap year; the public widget has no selector and always uses today's Auckland date.

The complete page is about 1.1 MB before transfer compression. Brief/prayer/proper text is included in that page; closed details defer parsing/rendering, rather than downloading one file per saint. This preserves the approved local-review behaviour and avoids hundreds of manual upload files. Readings reuse the existing public Lectionary FAS reference file on demand and cache it for the widget session; no duplicate maintained FAS dataset is created here. Internet access to that existing file and Bible Gateway is still required for those external features. A failed readings request has a retry action; prayers remain available.

Seven individual legacy FAS alternative Psalm references remain unverified and unlinked; confirmed primary Bible references are used. November ordinands uses 23–29 November inclusive each year, including Sundays: the user's approved interpretation of the week before St Andrew's Day, with differences in annual Lectionary labels documented in the research. The additional special Sundays, missionary intercession, World Day of Prayer, National Bible Sunday and NZPB self-examination/devotion rules are included. The 2026 Disability Sunday liturgical pack is not silently reused in later years: the annual focus still appears, with a link for that year's resources. Full biographies and unconfirmed additional observances remain deferred. This package does not resolve those research issues by inference.

## Verification and rollback

Local checks use Chromium/WebKit and simulated cross-origin hosting/Weebly embedding. They do not claim a published Pages-to-Weebly test or physical phone verification; perform step 6 after upload. Firefox remains unverified in this Windows environment.

Keep a copy of the old Saints Weebly code before replacement. To roll back the first switch, paste that old code back and republish; its old GitHub data paths are retained. For later updates, restore the relevant earlier GitHub commit and redeploy the same stable filenames. Review the intended commit before pushing. Do not delete old hosting folders until a separate approved cleanup confirms they are unused.
