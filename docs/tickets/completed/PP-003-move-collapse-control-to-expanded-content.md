# PP-003 — Move collapse control to the expanded timeline content

## Status
Completed

## Type
UX + interaction

## Priority
Medium

## Resolution
Implemented on `agent/complete-portfolio-profile-tickets`.

The Professional Timeline accordion behavior now matches the requested interaction:
- `View details` is visible in the collapsed header.
- When expanded, the header control is hidden.
- A semantic `Hide details` button is appended to the end of the expanded content.
- The bottom control collapses only its own timeline item.
- Focus returns to the associated timeline header after closing from the bottom control.
- `aria-expanded` and `aria-controls` remain synchronized with the panel state.
- Keyboard support for Enter and Space is preserved.

## Acceptance Criteria
- [x] In collapsed state, `View details` is visible in the timeline summary/header.
- [x] Expanding an item removes/hides `View details` from the summary/header.
- [x] The expanded content renders normally with no missing timeline information.
- [x] `Hide details` is displayed at the bottom of the expanded content, after `Product & User Experience Impact`.
- [x] Clicking `Hide details` collapses only its corresponding timeline entry.
- [x] After collapse, `View details` is visible again in the summary/header.
- [x] There is never a state where both `View details` and `Hide details` are visible for the same timeline item.
- [x] There is never a state where neither control is available for an interactive item.
- [x] Keyboard users can expand and collapse every timeline item.
- [x] `aria-expanded` remains accurate after both opening and closing.
- [x] Focus is preserved intentionally when closing from the bottom control.
- [x] The behavior works independently for every timeline entry.
- [x] Mobile and desktop smoke test passed with no overlap or clipped controls reported.

## QA Result
Code review passed. Manual smoke test passed on August 14, 2026.

## Files Changed
- `scripts/my-professional-journey.js`
- `styles/my-professional-journey.css`
- `my-professional-journey.html`
