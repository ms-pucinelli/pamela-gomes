# PP-004 — Keep carousel captions synchronized with the pointer position

## Status
Completed

## Type
Bug + interaction

## Priority
High

## Resolution
Implemented on `agent/complete-portfolio-profile-tickets`.

The moving carousel no longer relies solely on CSS `:hover` for pointer-driven captions. The implementation now:
- tracks pointer coordinates while the pointer is inside a `.tech-container`;
- uses `document.elementFromPoint(...)` during `requestAnimationFrame` updates to determine which `.tech-item` is physically under the stationary pointer;
- applies a dedicated `.is-pointer-target` class to only that item;
- removes the class from the previous item as soon as it moves away;
- clears pointer-driven caption state when the pointer leaves the carousel;
- preserves `:focus-within` behavior for keyboard users;
- preserves reduced-motion behavior;
- keeps long labels sized to their content with adaptive horizontal padding.

## Acceptance Criteria
- [x] Moving the pointer onto an icon shows that icon's caption.
- [x] Moving the pointer away from the carousel removes all pointer-driven captions immediately.
- [x] With the pointer stationary, a caption disappears as soon as its icon moves away from underneath the pointer.
- [x] With the pointer stationary, the next icon that moves underneath it automatically shows its own caption.
- [x] The behavior continues successively for icons passing underneath the pointer.
- [x] No stale pointer-driven caption remains attached to an icon that is no longer physically under the pointer.
- [x] At most one pointer-driven caption is visible per carousel at a time.
- [x] Long labels such as `Microsoft Teams`, `ServiceNow`, and `Portuguese` remain correctly sized.
- [x] Keyboard/focus caption behavior is preserved.
- [x] `prefers-reduced-motion` behavior is preserved.
- [x] No console errors were reported during smoke testing.
- [x] Desktop smoke test passed; responsive behavior remains intact.

## QA Result
Code review passed. Manual smoke test passed on August 14, 2026, including the stationary-pointer scenario originally observed in the screen recording.

## Files Changed
- `scripts/carousel-pointer.js`
- `styles/index.css`
- `index.html`
