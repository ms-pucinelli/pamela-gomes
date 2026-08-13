# PP-001 — Rework and rename Professional Journey page

## Status
Current

## Type
Content + refactor

## Priority
High

## Context
The portfolio is being repositioned from a QA-only career transition narrative to a hybrid professional profile centered on Technical Support, Quality Assurance, UX and Design. The homepage has already been updated to reflect this positioning, but the existing `my-journey-to-quality-assurance.html` page still frames nearly every experience as preparation for QA and repeatedly uses the heading `QA Impact`.

The visible navigation label on the homepage is already `My Professional Journey`, but it temporarily continues to link to the old filename to avoid a broken route.

## Problem
The current journey page does not reflect Pamela's intended professional positioning. It presents Technical Support as a past background and QA as the destination, instead of presenting Technical Support as the professional foundation and QA/UX/Design as complementary disciplines that improve the user's experience with digital products.

The current filename, CSS filename, JavaScript filename, page title and internal class names also retain the old QA-only naming.

## Expected Outcome
Create a professional journey page that tells one coherent story:

Technical Support → Product understanding → Quality → User Experience → Design

The narrative must not imply that Pamela already works professionally as a UX Designer. UI/UX Design should be described as an area of active professional development that expands her existing Technical Support and QA experience.

## Required Content Direction

### Page title / hero
Use:

`PAMELA PUCINELLI`

`TECHNICAL SUPPORT | QUALITY ASSURANCE | UX & DESIGN`

Main page heading:

`MY PROFESSIONAL JOURNEY`

### Introductory copy
Use the following approved direction, adjusting only grammar or line wrapping if necessary:

> My career has consistently placed me close to users, technology, and the problems that happen between them.
>
> From service desk and software support to Quality Assurance and UI/UX studies, I have developed a multidisciplinary perspective on digital products: understanding what users are trying to accomplish, investigating what prevents them from doing it, validating system behavior, and thinking about how the experience could be improved.
>
> Today, I bring these perspectives together through Technical Support, Quality Assurance, and User Experience.

### Timeline terminology
Replace every `QA Impact` section with:

`Product & User Experience Impact`

Do not simply rename the heading. Rewrite the bullets so they describe the value of each experience in terms of users, product understanding, communication, troubleshooting, quality, process improvement and usability where applicable.

### 2019–2020 — Volunteer Service
Emphasize:
- multilingual/cross-cultural communication
- empathy
- understanding needs before proposing solutions
- adapting communication and processes to different people
- structured communication and organization

### 2022–2023 — Trilingual Service Desk Analyst (Level 1), HCL Technologies
Emphasize:
- first-line technical support in Portuguese, English and Spanish
- ITSM / ticket management
- troubleshooting
- translating user descriptions into structured technical information
- user impact of technical incidents
- 15–25 tickets per day
- strong customer satisfaction performance

### 2023 — Volunteer Language Tutoring Manager, Cumorah Academy
Emphasize:
- coordination of 20 international tutors
- process monitoring
- feedback and quality consistency
- identifying inconsistencies and improvement opportunities
- quality as consistency, clarity and user satisfaction

### 2023–2024 — Customer and Software Support Analyst (Level 2), Ninecon
Emphasize:
- internal applications and SaaS support
- SQL / Oracle SQL Developer
- data validation
- ServiceNow knowledge management
- connecting user-reported problems to underlying system behavior
- reliability and data accuracy as contributors to user trust
- reducing recurring support friction

### 2024–2026 — Technical Customer Support Representative (Level 1), Velozient
Emphasize:
- 20–30 software-related cases daily
- SaaS workflows including accounts, automations and scheduling
- bug reproduction
- fix validation
- technical ticket writing
- distinguishing defects, configuration issues and user misunderstanding
- identifying unclear behavior or feedback that produces user friction
- communicating technical behavior clearly to users
- connection between support, quality and user experience

### Add a final `Today` timeline item
Title:

`Expanding into Quality Assurance & UI/UX Design`

Describe current professional development without claiming professional UX employment.

Include the ideas:
- QA helps determine whether the product behaves as expected.
- UX helps determine whether the product makes sense to the people using it.
- Design helps explore how information, interaction and visual decisions can make the experience clearer.
- Technical Support keeps this work grounded in real user needs, problems and product behavior.

## Technical Rename
Rename the page from:

`my-journey-to-quality-assurance.html`

to:

`my-professional-journey.html`

Also rename related assets where practical:

- `styles/my-journey-to-quality-assurance.css` → `styles/my-professional-journey.css`
- `scripts/my-journey-to-quality-assurance.js` → `scripts/my-professional-journey.js`

Update all references accordingly.

If renaming the CSS/JS would introduce unnecessary risk or unrelated changes, the HTML filename rename is required but the asset rename may be split into a follow-up ticket.

## Backward Compatibility
The old URL must not become a silent broken link.

Preferred implementation:
- keep a lightweight `my-journey-to-quality-assurance.html` compatibility page that redirects users to `my-professional-journey.html`, or
- use another static-site-compatible redirect approach supported by the repository/GitHub Pages setup.

Do not introduce a server-side redirect dependency.

## Acceptance Criteria
- [ ] Homepage navigation links to `my-professional-journey.html`.
- [ ] `my-professional-journey.html` exists and loads correctly on GitHub Pages.
- [ ] No visible page copy describes Pamela as simply transitioning away from Technical Support into QA.
- [ ] The hero uses `TECHNICAL SUPPORT | QUALITY ASSURANCE | UX & DESIGN`.
- [ ] Main heading is `MY PROFESSIONAL JOURNEY`.
- [ ] All timeline sections use `Product & User Experience Impact` rather than `QA Impact`.
- [ ] Timeline descriptions preserve the factual dates, employers, roles and quantitative experience already present in the repository.
- [ ] A `Today` section explains current QA and UI/UX development accurately.
- [ ] UI/UX wording does not claim professional UX Designer employment or expertise that is not supported by the portfolio.
- [ ] Old journey URL is handled without leaving a user-facing 404.
- [ ] Collapsible timeline interactions continue to work.
- [ ] Existing styling remains visually consistent unless a change is required by the renamed assets.
- [ ] No broken CSS, JS, image or navigation references are introduced.
- [ ] Page metadata is updated to match the new professional positioning.

## QA Validation
After implementation, validate at minimum:
1. Home → My Professional Journey navigation.
2. Direct access to the new journey URL.
3. Direct access to the old journey URL.
4. Every timeline accordion/collapsible item opens and closes correctly.
5. Keyboard interaction on timeline items still works.
6. Header navigation links work.
7. No browser console errors caused by missing CSS/JS resources.
8. Mobile and desktop smoke test for text overflow and layout regressions.
9. Search the repository for visible references to `My Journey to Quality Assurance`, `QUALITY ASSURANCE ENGINEER | SOFTWARE TESTING | TECHNICAL SUPPORT BACKGROUND`, and `QA Impact`; none should remain in active user-facing content unless intentionally retained for redirect/backward compatibility.

## Likely Files Affected
- `index.html`
- `my-journey-to-quality-assurance.html`
- `my-professional-journey.html`
- `styles/my-journey-to-quality-assurance.css`
- `styles/my-professional-journey.css`
- `scripts/my-journey-to-quality-assurance.js`
- `scripts/my-professional-journey.js`

## Out of Scope
- Full visual redesign of the portfolio.
- Adding new design tools that Pamela has not yet used sufficiently to present as portfolio skills.
- Changing factual employment history.
- Updating the external Notion workspace; that will be synchronized separately through the Notion integration.
