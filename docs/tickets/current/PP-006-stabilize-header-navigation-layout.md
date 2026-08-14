# PP-006 — Stabilize header navigation layout across pages and languages

## Status
Current

## Type
Bug + layout consistency

## Priority
High

## Context
When navigating between `index.html` and `my-professional-journey.html`, the first navigation item changes between `My Professional Journey` and `Home` (or their Portuguese equivalents). Because `.navigation-bar` currently uses a flex layout with `justify-content: space-evenly`, changing the width of that first label causes the browser to recalculate the spacing between all navigation items.

This is visible as `LinkedIn` and `Contact Me` shifting horizontally when switching pages. The behavior was confirmed in a recorded browser smoke test.

## Goal
Keep the navigation positions visually stable when switching between portfolio pages and when changing language.

The first navigation slot may grow or shrink as needed to fit `Home`, `My Professional Journey`, `Início`, or `Minha Jornada Profissional`, but that size change must not move the `LinkedIn` and `Contact Me` navigation items.

## Expected Behavior
- The navigation bar keeps three stable visual slots/positions.
- `LinkedIn` remains in the same horizontal position on both active pages.
- `Contact Me` / `Entre em Contato` remains anchored to its own slot and does not shift because the first navigation label changed width.
- The first navigation slot may contain a shorter or longer label without redistributing the positions of the other slots.
- Switching between English and Portuguese must not make the navigation jump horizontally.
- The existing navigation height, palette, hover/focus styling, and general visual identity should remain consistent.

## Implementation Direction
The current root cause is the combination of flex sizing and `justify-content: space-evenly`.

Prefer a layout whose item positions do not depend on sibling text width. A three-column CSS Grid is likely appropriate, for example with stable equal-width columns and each link centered within its own column. The exact implementation may differ if it satisfies all acceptance criteria.

Do not hard-code pixel positions for individual links.

Do not use JavaScript for this layout problem unless there is a compelling reason.

## Responsive Behavior
- Desktop navigation should remain visually stable across both pages and both languages.
- On narrow/mobile widths, labels may wrap if genuinely necessary, but one item's text length must not cause unrelated navigation items to jump unpredictably.
- Navigation must remain readable and tappable.
- No text should overflow the viewport.
- Do not hide navigation items to solve layout constraints.

## Accessibility
- Preserve semantic `<nav>` and anchor elements.
- Preserve keyboard focus styling.
- Do not change link destinations.
- Do not introduce focus-order differences between pages.

## Acceptance Criteria
- [ ] Navigating from homepage to Professional Journey no longer shifts `LinkedIn` horizontally.
- [ ] Navigating from homepage to Professional Journey no longer shifts `Contact Me` horizontally due to the first label width.
- [ ] Returning to homepage preserves the same positions.
- [ ] The first nav item can display `Home` or `My Professional Journey` without moving the other slots.
- [ ] Portuguese labels (`Início`, `Minha Jornada Profissional`, `Entre em Contato`) remain stable.
- [ ] Switching language in place does not produce navigation reflow that moves unrelated items between slots.
- [ ] Hover and focus states still work.
- [ ] Desktop and narrow/mobile layouts do not overlap or clip.
- [ ] No JavaScript errors are introduced.

## QA Validation
1. Load homepage in English and note the positions of all three nav items.
2. Navigate repeatedly between homepage and Professional Journey and verify `LinkedIn` and `Contact Me` remain stationary.
3. Switch to Portuguese and repeat.
4. Toggle language on each page and verify the nav slots remain stable.
5. Test desktop and narrow viewport widths.
6. Test keyboard Tab navigation and focus states.
7. Check for wrapping, clipping, and horizontal overflow.

## Likely Files Affected
- `styles/index.css`

## Out of Scope
- Redesigning the header.
- Changing language selector behavior.
- Changing navigation destinations or labels beyond localization already defined by PP-005.
- Fixing unrelated bugs discovered during the repository audit (tracked separately).
