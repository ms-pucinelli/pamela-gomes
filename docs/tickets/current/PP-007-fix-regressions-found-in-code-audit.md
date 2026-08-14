# PP-007 — Restore footer current year and remove obsolete last-updated logic

## Status
Current

## Type
Bug + maintenance

## Priority
Medium

## Context
A code audit of the current `main` branch after PP-005 identified one concrete regression unrelated to the requested navigation-layout adjustment.

Both active pages render:

`<span id="currentyear"></span>`

The repository still contains `scripts/getdates.js`, but neither `index.html` nor `my-professional-journey.html` currently loads it. As a result, the footer year is left empty.

The existing script also contains logic for `#lastupdated`, but Pamela no longer wants that behavior in the portfolio. `#lastupdated` should not be restored or supported.

The old Professional Journey route `my-journey-to-quality-assurance.html` is intentionally retired. Do not recreate a redirect page for it. The active and canonical page is `my-professional-journey.html`, and legacy QA-named page/assets may remain deleted.

## Goal
Restore the current year in the footer on both active pages while removing obsolete last-updated logic entirely.

## Expected Fix
- Ensure the current calendar year renders on `index.html`.
- Ensure the current calendar year renders on `my-professional-journey.html`.
- Reuse or simplify `scripts/getdates.js` rather than duplicating year logic across pages.
- Remove all `#lastupdated` handling from `getdates.js`.
- Do not add any `#lastupdated` element to the HTML.
- Load the current-year script safely on both active pages.
- Do not introduce console errors.
- Do not restore `my-journey-to-quality-assurance.html` or any other QA-named legacy journey assets.

## Acceptance Criteria
- [ ] The footer displays the current year on `index.html`.
- [ ] The footer displays the current year on `my-professional-journey.html`.
- [ ] Footer year behavior works in both English and Portuguese because it is language-neutral.
- [ ] `scripts/getdates.js` contains only the logic needed for the current year, with no `#lastupdated` access.
- [ ] Neither active page contains a `#lastupdated` element.
- [ ] No new console errors are introduced.
- [ ] `my-professional-journey.html` remains the only active Professional Journey page.
- [ ] `my-journey-to-quality-assurance.html` is not recreated.
- [ ] Current navigation and bilingual behavior remain unchanged.

## QA Validation
1. Open `index.html` and confirm the footer shows the current calendar year.
2. Open `my-professional-journey.html` and confirm the footer shows the same current year.
3. Switch between English and Portuguese and confirm the year remains correct.
4. Reload both pages and confirm the year still populates.
5. Check the browser console for JavaScript errors.
6. Confirm there is no `#lastupdated` UI or script behavior.
7. Confirm `my-professional-journey.html` remains the active journey page and no QA-named legacy page is added.

## Likely Files Affected
- `index.html`
- `my-professional-journey.html`
- `scripts/getdates.js`

## Out of Scope
- Redesigning the footer.
- Adding last-modified information.
- Restoring legacy QA-named journey routes or assets.
- Changing Professional Journey content.
- Changing localization copy or language-selector behavior.
- Changing the navigation layout tracked in PP-006.
