# PP-001 — Rework and rename Professional Journey page

## Status
Completed

## Type
Content + refactor

## Priority
High

## Context
The portfolio was repositioned from a QA-only career transition narrative to a hybrid professional profile centered on Technical Support, Quality Assurance, UX and Design.

## Expected Outcome
Tell one coherent professional story:

Technical Support → Product understanding → Quality → User Experience → Design

The wording must not imply professional UX Designer employment. UI/UX Design is presented as an area of active professional development that expands existing Technical Support and QA experience.

## Implemented
- Created `my-professional-journey.html`.
- Updated the hero to `TECHNICAL SUPPORT | QUALITY ASSURANCE | UX & DESIGN`.
- Added the `MY PROFESSIONAL JOURNEY` introduction.
- Rewrote the 2019–2020, 2022–2023, 2023, 2023–2024, and 2024–2026 timeline entries around product and user experience impact while preserving employers, roles, dates and quantitative details.
- Added `Today — Expanding into Quality Assurance & UI/UX Design`.
- Replaced the old `QA Impact` framing with `Product & User Experience Impact`.
- Renamed the active stylesheet and script to `my-professional-journey.css` and `my-professional-journey.js`.
- Removed the obsolete QA-named CSS and JS assets.
- Updated the homepage navigation to the new route.
- Preserved backward compatibility through `my-journey-to-quality-assurance.html`, which redirects to the new page.
- Improved accordion accessibility with keyboard support and `aria-expanded` state.
- Updated page metadata to match the hybrid professional positioning.

## Acceptance Criteria
- [x] Homepage navigation links to `my-professional-journey.html`.
- [x] `my-professional-journey.html` exists.
- [x] Active page copy no longer frames Technical Support merely as a past background on the way to QA.
- [x] Hero uses `TECHNICAL SUPPORT | QUALITY ASSURANCE | UX & DESIGN`.
- [x] Main heading is `MY PROFESSIONAL JOURNEY`.
- [x] Timeline uses `Product & User Experience Impact` rather than `QA Impact`.
- [x] Factual dates, employers, roles and quantitative experience are preserved.
- [x] A `Today` section explains current QA and UI/UX development without overstating professional UX experience.
- [x] The old journey URL is handled without a user-facing 404.
- [x] Collapsible timeline behavior has click and keyboard handling.
- [x] New CSS/JS/image/navigation references are internally consistent.
- [x] Page metadata matches the new professional positioning.

## QA Validation
Static/code-level validation performed on the implementation branch:
1. Confirmed Home links to `my-professional-journey.html`.
2. Confirmed new journey HTML exists.
3. Confirmed legacy journey HTML redirects to the new route and includes a manual fallback link.
4. Confirmed each timeline item uses the same `.collapsible` + adjacent `.content` structure expected by the script.
5. Confirmed Enter and Space keyboard handling is implemented.
6. Confirmed `aria-expanded` is synchronized by the script.
7. Confirmed active CSS and JS filenames use the new professional-journey naming.
8. Confirmed old QA-named CSS and JS assets were removed.
9. Added responsive width rules to avoid the previous fixed 800px mobile overflow risk.

## Remaining Validation
A final browser smoke test on the deployed GitHub Pages version should be performed after merge to confirm hosting behavior, visual rendering and redirect behavior in production.

## Files Affected
- `index.html`
- `my-professional-journey.html`
- `my-journey-to-quality-assurance.html`
- `styles/my-professional-journey.css`
- `scripts/my-professional-journey.js`

## Completed
2026-08-13
