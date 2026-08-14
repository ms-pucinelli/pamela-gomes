# PP-002 — Organize tools, technologies and languages into meaningful groups

## Status
Current

## Type
UX + content structure

## Priority
Medium

## Context
The homepage previously labeled a mixed collection of programming languages, operating systems, support platforms, collaboration tools, design tools and spoken languages as `TECHNOLOGIES`.

The heading has already been corrected to `TOOLS, TECHNOLOGIES & LANGUAGES`, but the content is still presented as one continuous undifferentiated carousel/list.

## Problem
Presenting HTML, SQL, Zendesk, Canva and Portuguese as equivalent items under one visual category makes the portfolio harder to scan and weakens the hybrid professional narrative.

The section should make it immediately understandable that Pamela combines technical knowledge, support tooling, design exposure and multilingual communication.

## Expected Outcome
Preserve the existing visual identity and continuous animation where possible, but introduce clear semantic grouping.

Suggested groups:

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

Only add Figma or other design tools when they are genuinely supported by Pamela's current portfolio/studies. Do not add tools solely to make the section look more complete.

### Languages
- Portuguese
- English
- Spanish

## UX Notes
The implementation does not have to use literal headings for every group if doing so harms the current layout. Tabs, labels, grouped rows or another simple treatment are acceptable, provided the grouping is obvious and accessible.

Avoid a redesign that makes recruiters work harder to understand the section.

## Acceptance Criteria
- [ ] The section title remains `TOOLS, TECHNOLOGIES & LANGUAGES`.
- [ ] Items are semantically grouped rather than visually presented as one category.
- [ ] Programming/technical skills are distinguishable from support platforms.
- [ ] Languages are clearly distinguishable from software/tools.
- [ ] Design tools have their own meaningful grouping.
- [ ] No unsupported tools or skills are added.
- [ ] Existing mobile responsiveness is preserved or improved.
- [ ] The existing continuous animation may be retained only if grouping remains understandable and motion does not impair usability.
- [ ] All icons retain meaningful alt text.
- [ ] Keyboard and screen-reader accessibility is not worsened.

## QA Validation
1. Verify grouping at desktop width.
2. Verify grouping on a narrow mobile viewport.
3. Confirm no logos overlap or become unreadable.
4. Confirm all image resources load successfully.
5. Verify text labels remain visible and understandable without relying solely on logos.
6. Verify the section remains usable with animations disabled/reduced where supported by the existing implementation.

## Likely Files Affected
- `index.html`
- `styles/index.css`

## Out of Scope
- Full homepage redesign.
- Inventing new skills or tools.
- Replacing the current portfolio branding.
