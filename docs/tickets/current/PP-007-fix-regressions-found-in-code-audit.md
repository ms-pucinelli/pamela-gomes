# PP-007 — Fix regressions found in portfolio code audit

## Status
Current

## Type
Bug + maintenance

## Priority
Medium

## Context
A code audit of the current `main` branch after PP-005 identified two concrete regressions unrelated to the requested navigation-layout adjustment.

These should be fixed without changing the visual design or localization behavior.

## Bug 1 — Footer year is not populated
Both active pages render:

`<span id="currentyear"></span>`

The repository still contains `scripts/getdates.js`, but neither `index.html` nor `my-professional-journey.html` currently loads it. As a result, the footer year is left empty.

The existing script also assumes an element with `id="lastupdated"` exists and writes to it unconditionally. That element is not present on the active pages, so simply re-adding the script reference without making the script defensive could introduce a runtime error.

### Expected fix
- Ensure the current year renders on both active pages.
- Reuse or simplify `scripts/getdates.js` rather than duplicating year logic across pages.
- Make the script safe when optional elements such as `#lastupdated` are absent.
- Do not introduce console errors.

## Bug 2 — Legacy Professional Journey URL now returns 404
PP-001 required backward compatibility for the old route:

`my-journey-to-quality-assurance.html`

The current `main` branch no longer contains that file. Existing bookmarks or external links to the old URL therefore return a 404 instead of reaching the renamed Professional Journey page.

### Expected fix
Restore a lightweight static redirect page at:

`my-journey-to-quality-assurance.html`

It should redirect to:

`my-professional-journey.html`

Use a GitHub Pages/static-site-compatible approach and include a normal fallback link for visitors when automatic redirect is unavailable.

The legacy page should not duplicate the full Professional Journey content.

## Acceptance Criteria
- [ ] The footer displays the current year on `index.html`.
- [ ] The footer displays the current year on `my-professional-journey.html`.
- [ ] Footer year behavior works in both English and Portuguese because it is language-neutral.
- [ ] `getdates.js` or its replacement does not throw when `#lastupdated` is absent.
- [ ] No new console errors are introduced.
- [ ] Direct access to `my-journey-to-quality-assurance.html` no longer returns 404.
- [ ] The legacy URL leads users to `my-professional-journey.html`.
- [ ] The redirect includes a usable fallback link.
- [ ] Current navigation and bilingual behavior remain unchanged.

## QA Validation
1. Open both active pages and confirm the footer shows the current calendar year.
2. Inspect the browser console for errors on both pages.
3. Switch languages and confirm footer behavior remains unchanged.
4. Open the old Professional Journey URL directly.
5. Confirm it reaches the current Professional Journey page and does not produce a 404.
6. Confirm normal direct access to `my-professional-journey.html` still works.

## Likely Files Affected
- `index.html`
- `my-professional-journey.html`
- `scripts/getdates.js`
- `my-journey-to-quality-assurance.html` (restored redirect page)

## Out of Scope
- Redesigning the footer.
- Adding last-modified UI that is not already present.
- Changing Professional Journey content.
- Changing localization copy or language-selector behavior.
- Changing the navigation layout tracked in PP-006.
