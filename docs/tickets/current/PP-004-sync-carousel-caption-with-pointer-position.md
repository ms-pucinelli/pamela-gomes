# PP-004 — Keep carousel captions synchronized with the pointer position

## Status
Current

## Type
Bug + interaction

## Priority
High

## Context
The `TOOLS, TECHNOLOGIES & LANGUAGES` section uses continuously animated carousels. Each icon has a caption that is currently shown through CSS using `.tech-item:hover .caption`.

During browser retesting, a defect was observed while leaving the mouse pointer stationary over the moving carousel. Because the carousel items themselves move under the pointer through CSS transforms, the browser can keep the hover state associated with the previously hovered `.tech-item` instead of updating the visible caption to match the icon that is currently underneath the stationary pointer.

This results in captions lingering or becoming visually out of sync with the icon under the cursor.

## Problem
The caption state is tied to the element's CSS `:hover` state rather than to the pointer's current physical position over the animated carousel.

Expected interaction is spatial:

- if the pointer is directly over an icon, that icon's caption should be visible;
- as the carousel moves and that icon leaves the pointer position, its caption should disappear immediately;
- if another icon moves underneath the same stationary pointer, the new icon's caption should appear automatically;
- this should continue successively as icons pass beneath the stationary pointer;
- when the pointer leaves the carousel area, no hover caption should remain visible.

The user should not have to move the mouse to force the caption state to refresh.

## Expected Behavior
Example with the mouse completely stationary:

1. Pointer is positioned over the carousel.
2. `SQL` passes underneath the pointer → `SQL` caption appears.
3. `SQL` moves away → `SQL` caption disappears immediately.
4. `C#` moves underneath the same stationary pointer → `C#` caption appears.
5. `C#` moves away → its caption disappears.
6. The behavior repeats for every following icon.

At most one hover-driven caption should be visible for a pointer position at any time.

## Implementation Direction
Do not rely solely on `.tech-item:hover` for the animated carousel behavior.

Use a robust pointer-position approach. A likely implementation is:

- track the latest pointer coordinates while the pointer is inside a `.tech-container`;
- while that carousel is animating, determine which element is currently under those coordinates (for example with `document.elementFromPoint(...)` or an equivalent hit-testing approach);
- resolve the closest `.tech-item` belonging to that carousel;
- add/remove a dedicated state class such as `.is-pointer-target` so only the currently hit-tested item's caption is shown;
- clear the state as soon as the pointer leaves the carousel container;
- avoid unnecessary global polling when the pointer is not over a carousel;
- prefer `requestAnimationFrame` while pointer tracking is active rather than a high-frequency timer.

The exact implementation may differ if a simpler solution reliably satisfies all acceptance criteria across supported browsers.

## Accessibility Requirements
- Do not remove the existing keyboard/focus behavior for captions.
- `:focus-within` may continue to expose the caption for keyboard users independently of pointer tracking.
- Do not make captions interactive unless needed.
- Preserve `prefers-reduced-motion` behavior.
- Pointer tracking must not interfere with scrolling or keyboard navigation.

## Acceptance Criteria
- [ ] Moving the pointer onto an icon shows that icon's caption.
- [ ] Moving the pointer away from the carousel removes all pointer-driven captions immediately.
- [ ] With the pointer stationary, a caption disappears as soon as its icon moves away from underneath the pointer.
- [ ] With the pointer stationary, the next icon that moves underneath it automatically shows its own caption.
- [ ] The above behavior continues successively for every icon passing underneath the pointer.
- [ ] No stale caption remains attached to an icon that is no longer physically under the pointer.
- [ ] At most one pointer-driven caption is visible per carousel at a time.
- [ ] Caption labels remain correctly sized for long names such as `Microsoft Teams`, `ServiceNow`, and `Portuguese`.
- [ ] Keyboard/focus caption behavior still works.
- [ ] `prefers-reduced-motion` behavior remains functional.
- [ ] No console errors are introduced.
- [ ] Behavior works at desktop and narrow/mobile widths where pointer interaction is applicable.

## QA Validation
1. Place the mouse over the middle of a moving carousel and do not move it for at least 10 seconds.
2. Confirm that captions automatically change as different icons pass beneath the stationary pointer.
3. Confirm the previous caption disappears before/when the next item becomes the pointer target.
4. Move the mouse out of the carousel and confirm no caption remains visible.
5. Re-enter over a different location and repeat.
6. Test long labels such as `Microsoft Teams`, `ServiceNow`, `Portuguese`, and `Support` tools.
7. Test keyboard focus behavior separately.
8. Enable reduced motion and verify there is no regression.
9. Check browser console for errors.

## Likely Files Affected
- `styles/index.css`
- `index.html` only if a script reference or data attribute is needed
- a JavaScript file under `scripts/` for carousel pointer tracking

## Out of Scope
- Changing carousel speed or direction.
- Replacing the carousel design.
- Changing the skill/tool group structure.
- Modifying Professional Timeline accordions (PP-003).
