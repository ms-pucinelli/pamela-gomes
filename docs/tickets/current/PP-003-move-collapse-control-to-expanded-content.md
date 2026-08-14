# PP-003 — Move collapse control to the expanded timeline content

## Status
Current

## Type
UX + interaction

## Priority
Medium

## Context
The `PROFESSIONAL TIMELINE` uses collapsible cards. In the current interaction, the control starts as `▼ View details` inside the collapsed card header. After expansion, the same control remains visually attached to that header and changes to `▲ Hide details`.

Pamela wants the expanded state to feel more natural: once the user opens a timeline item, the original `View details` control should disappear from the header, and the `Hide details` control should be presented at the end of the content that was just revealed.

The end position should be after the final content block for that timeline entry, currently the `Product & User Experience Impact` section.

## Problem
Keeping the close control in the original header means the user may need to move their pointer or attention back to the top of the expanded card after reading the newly revealed content. This creates unnecessary movement and weakens the sense that `Hide details` closes the exact content region the user just finished reading.

## Expected Behavior
### Collapsed state
- The timeline summary/header displays `▼ View details`.
- The detailed content remains hidden.
- No `Hide details` control is visible inside the hidden content.

### Expanded state
- The `View details` control disappears from the timeline summary/header.
- The detailed content becomes visible.
- A clearly styled `▲ Hide details` control appears at the bottom of the expanded content.
- The `Hide details` control is placed after the final content section, including `Product & User Experience Impact`.
- Activating `Hide details` collapses the same timeline item.
- After collapse, the header returns to its original state with `▼ View details` visible again.

## Interaction Notes
The implementation should preserve the existing visual identity of the timeline. The bottom control may reuse the current secondary button styling, but it should visually belong to the expanded panel rather than look like ordinary body text.

Do not require the user to scroll back to the timeline header simply to close an expanded section.

If multiple timeline entries may be open simultaneously, each bottom `Hide details` control must only collapse its own associated entry.

## Accessibility Requirements
- The original header/summary remains keyboard operable.
- `Enter` and `Space` continue to expand the item where applicable.
- The bottom `Hide details` control must be a semantic keyboard-operable control (`button` preferred).
- `aria-expanded` on the controlling summary/header must correctly reflect the state.
- The expanded panel should remain correctly associated with its controlling summary via `aria-controls`/ID or an equivalent accessible relationship.
- When `Hide details` collapses the item, keyboard focus should be handled intentionally. Preferred behavior: return focus to the corresponding timeline summary/header so keyboard users do not lose their location after the panel disappears.

## Acceptance Criteria
- [ ] In collapsed state, `View details` is visible in the timeline summary/header.
- [ ] Expanding an item removes/hides `View details` from the summary/header.
- [ ] The expanded content renders normally with no missing timeline information.
- [ ] `Hide details` is displayed at the bottom of the expanded content, after `Product & User Experience Impact`.
- [ ] Clicking `Hide details` collapses only its corresponding timeline entry.
- [ ] After collapse, `View details` is visible again in the summary/header.
- [ ] There is never a state where both `View details` and `Hide details` are visible for the same timeline item.
- [ ] There is never a state where neither control is available for an interactive item.
- [ ] Keyboard users can expand and collapse every timeline item.
- [ ] `aria-expanded` remains accurate after both opening and closing.
- [ ] Focus is not lost when the bottom `Hide details` button collapses its panel; preferably focus returns to the associated summary/header.
- [ ] The behavior works independently for every timeline entry.
- [ ] Mobile and desktop layouts do not introduce overlap, clipped controls, or excessive spacing.

## QA Validation
1. Open each Professional Timeline item using `View details`.
2. Confirm `View details` disappears from that item's header immediately after expansion.
3. Scroll through the expanded content and confirm `Hide details` appears after the final `Product & User Experience Impact` content.
4. Click `Hide details` and confirm only that entry collapses.
5. Confirm `View details` reappears in the collapsed header.
6. Repeat using keyboard only: Tab, Enter/Space, Tab to the bottom close control, activate it.
7. Verify focus returns to or remains logically associated with the collapsed timeline entry.
8. Test opening multiple entries and closing them independently if the interface supports multiple simultaneous open states.
9. Smoke test at narrow mobile and desktop widths.
10. Check browser console for JavaScript errors during repeated expand/collapse interactions.

## Likely Files Affected
- `my-professional-journey.html`
- `styles/my-professional-journey.css`
- `scripts/my-professional-journey.js`

## Out of Scope
- Rewriting the Professional Timeline copy.
- Changing the timeline's overall visual design.
- Changing the grouping/order of professional experiences.
- Forcing accordion behavior where only one item can be open at a time unless required for the interaction implementation.
