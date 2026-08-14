# PP-002 — Organize tools, technologies and languages into meaningful groups

## Status
Completed

## Type
UX + content structure

## Priority
Medium

## Context
The homepage previously presented programming languages, operating systems, support platforms, collaboration tools, design tools and spoken languages as one undifferentiated animated list.

## Expected Outcome
Keep the section easy to scan while preserving the portfolio's visual identity and supporting the hybrid professional narrative.

## Implemented Groups
### Technical
- HTML5
- CSS3
- JavaScript
- Python
- SQL
- C#
- GraphQL
- macOS
- Windows

### Support & Collaboration
- Zendesk
- ServiceNow
- Stripe
- Microsoft Teams
- Slack

### Design
- Canva

### Languages
- Portuguese
- English
- Spanish

## Additional UX Finding Resolved During QA
During manual review, the icon captions were found to use a fixed width inherited from the icon container. Longer labels such as `Microsoft Teams`, `ServiceNow`, and language names could not size naturally with their text.

The caption styling was updated so that:
- caption width follows its content using `width: max-content`;
- labels stay on one line with `white-space: nowrap`;
- horizontal padding scales naturally around the complete word/phrase;
- captions remain visually attached to their moving icon through centered absolute positioning;
- captions do not intercept pointer events;
- the existing carousel animation remains intact.

## Accessibility / Motion Improvements
- Repeated carousel items are marked `aria-hidden="true"` and use empty alt text to avoid duplicate screen-reader announcements.
- Primary items retain meaningful alt text.
- `prefers-reduced-motion: reduce` disables the scrolling animation and hides the duplicated sequence.
- Group headings provide semantic context instead of relying only on icons.

## Acceptance Criteria
- [x] Section title remains `TOOLS, TECHNOLOGIES & LANGUAGES`.
- [x] Items are semantically grouped.
- [x] Programming/technical skills are distinguishable from support platforms.
- [x] Languages are clearly distinguishable from software/tools.
- [x] Design tools have their own grouping.
- [x] No unsupported tools or skills were added.
- [x] Responsive behavior was preserved/improved through mobile CSS rules.
- [x] Continuous animation is retained while grouping remains understandable.
- [x] Primary icons retain meaningful alt text.
- [x] Duplicate animation items are hidden from assistive technology.
- [x] Reduced-motion users receive a static layout.
- [x] Caption width and padding adapt to label length instead of remaining fixed to icon width.

## QA Validation
Static/code-level validation performed on the implementation branch:
1. Verified all four semantic groups exist in the HTML.
2. Verified each expected tool/language is under the intended group.
3. Verified duplicated animation sequences are marked as decorative.
4. Verified the caption uses content-sized width and non-wrapping text.
5. Verified responsive CSS switches the homepage to a single-column layout below 760px.
6. Verified reduced-motion handling removes animation and duplicate content.
7. Verified all referenced icon paths use existing repository naming already used by the previous implementation.

## Remaining Validation
A final visual smoke test should be performed on the deployed GitHub Pages version after merge, especially for animation continuity, caption placement and narrow mobile widths.

## Files Affected
- `index.html`
- `styles/index.css`

## Completed
2026-08-13
