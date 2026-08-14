# PP-005 — Add English / Portuguese language selector and bilingual portfolio content

## Status
Completed

## Type
Feature + accessibility + content localization

## Priority
High

## Outcome
The portfolio now supports English and Brazilian Portuguese across both active pages using a shared static localization layer.

Implemented pages:
- `index.html`
- `my-professional-journey.html`

## Final approved interaction

### Language selector
- A compact selector is available in the upper-right area of the header on both pages.
- The selector uses `images/languages.svg`.
- The currently selected language is displayed directly in the selector.
- When the selector is opened, only the OTHER available language is shown in the dropdown. This is intentional: the current language is already visible in the selector itself.
- Selecting the alternate language updates the page immediately and closes the dropdown.
- The selection persists across navigation and reloads using client-side storage.
- English remains the default when no valid preference exists.

### Approved visual behavior
The current placement and visual arrangement of the language icon and language label were reviewed and approved by Pamela during the implementation iteration with Codex. The implemented layout should be treated as the intended design for this ticket.

### Translation behavior
- Meaningful visitor-facing content switches between English and Brazilian Portuguese.
- `<html lang>`, document title and meta description are updated with the active language.
- Professional Journey accordion labels are localized while preserving PP-003 behavior.
- Language-name captions in the tools carousel are localized while preserving PP-004 behavior.
- Proper names, brands, technologies, project names, URLs and technical identifiers remain unchanged where appropriate.

## Intentional terminology exception
`QUALITY & USER EXPERIENCE` remains in English in both language modes. This is an intentional branding/portfolio terminology decision approved by Pamela and should not be treated as a missing translation.

This applies to portfolio-facing terminology such as `QUALITY & USER EXPERIENCE PORTFOLIO` where the phrase is intentionally retained in English.

## Implementation notes
- Shared localization logic is implemented in `scripts/i18n.js`.
- The language selector is present on both portfolio pages.
- `images/languages.svg` is used by the selector.
- `scripts/my-professional-journey.js` integrates localized `View details` / `Hide details` labels without changing the accordion interaction model.
- Existing carousel pointer behavior and reduced-motion behavior remain in place.

## QA / Review Result
- Code-level review of the localization architecture completed.
- Pamela performed a manual smoke test of the implemented bilingual experience.
- Pamela confirmed the final behavior matches the intended interaction and visual design.
- Previously raised review notes concerning showing both languages simultaneously, translating `QUALITY & USER EXPERIENCE`, and the icon arrangement were superseded by explicit product decisions made during implementation.

## Final acceptance
- [x] Language selector is available on both active pages.
- [x] `languages.svg` is used.
- [x] Current language is visibly identified.
- [x] Dropdown exposes the alternate language only, by approved design.
- [x] English and Brazilian Portuguese switching works.
- [x] Language choice persists between pages/reloads.
- [x] English safely remains the default/fallback.
- [x] `<html lang>`, title and meta description update with language.
- [x] Homepage visitor-facing copy is localized except intentional English branding terminology.
- [x] Professional Journey visitor-facing copy is localized.
- [x] `View details` / `Hide details` are localized and PP-003 behavior is preserved.
- [x] Carousel localization does not regress PP-004 behavior.
- [x] Proper names and technical identifiers remain appropriate.
- [x] Selector keyboard/accessibility behavior is preserved.
- [x] Final visual implementation passed Pamela's smoke test.

## Final status
Approved and completed after implementation review plus manual smoke testing.
