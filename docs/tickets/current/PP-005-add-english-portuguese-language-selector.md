# PP-005 — Add English / Portuguese language selector and bilingual portfolio content

## Status
Current

## Type
Feature + accessibility + content localization

## Priority
High

## Context
The portfolio is currently presented only in English. Pamela wants visitors to be able to switch the entire portfolio between English and Brazilian Portuguese from a compact language selector in the upper-right corner of the page.

This must work consistently on both active pages:

- `index.html`
- `my-professional-journey.html`

The portfolio is a lightweight static site and should remain implemented with HTML, CSS and JavaScript without introducing a frontend framework or localization dependency.

## Goal
Add a compact, polished language selector to the upper-right area of the header. The selector must show a small `languages.svg` icon together with the language currently active on the page. Clicking or activating it opens a dropdown containing the two supported languages:

- English
- Português

Selecting a language immediately translates the page and preserves the choice while the visitor navigates between portfolio pages.

## Visual / Interaction Direction

### Placement
- Place the language selector in the upper-right area of the header on both pages.
- It should have intentional spacing from the top and right edges: enough padding/margin to avoid looking attached to the viewport edge, while remaining compact.
- The selector must not overlap Pamela's name, professional title, navigation links, or other header content at desktop or mobile widths.
- The existing visual identity should be preserved.

### Closed state
The compact control should contain:

1. a relatively small language icon loaded from `images/languages.svg`;
2. a small bordered/filled language label showing the CURRENT page language.

Examples:

- icon + `English`
- icon + `Português`

The current-language label should visually read as a small box/chip rather than plain floating text.

Use the portfolio's existing main font. Do not introduce a different typeface for the selector or dropdown.

### Open state
Activating the selector opens a dropdown directly below/aligned with the control.

The dropdown shows both options:

- `English`
- `Português`

The currently active language should be visually distinguishable without relying only on color if practical.

Selecting the other language should:

- update the visible content immediately;
- update the current-language label in the selector;
- close the dropdown;
- preserve the selected language for subsequent page navigation.

### Closing behavior
The dropdown should close when appropriate, including:

- after selecting a language;
- pressing `Escape`;
- clicking/tapping outside the language selector.

## Default Language and Persistence
- Existing portfolio behavior is English, so `English` remains the default when no saved preference exists.
- Store the visitor's explicit selection using a simple client-side mechanism such as `localStorage`.
- Suggested key: `portfolioLanguage`.
- Supported stored values should be simple and stable, such as `en` and `pt-BR`.
- If a stored value is missing or invalid, fall back to English.
- When navigating between `index.html` and `my-professional-journey.html`, the previously selected language must remain active.

Do not require a server, cookies, external translation API, or page duplication such as separate `/pt/` and `/en/` copies unless there is a strong implementation reason. Prefer a shared static localization approach.

## Language Metadata
Changing the language must update more than visible body copy.

When English is active:
- `<html lang="en">`
- English document `<title>`
- English meta description

When Portuguese is active:
- `<html lang="pt-BR">`
- Portuguese document `<title>`
- Portuguese meta description

This must be correct on both active portfolio pages.

## Translation Scope
Translate all meaningful visitor-facing interface and portfolio copy into Brazilian Portuguese.

This includes, where applicable:

### Homepage
- navigation labels such as `My Professional Journey`, `Contact Me`;
- `WHO AM I?`;
- all paragraphs in the introduction/about section;
- `TOOLS, TECHNOLOGIES & LANGUAGES`;
- language-name captions (`Portuguese`, `English`, `Spanish`) when Portuguese is active;
- `QUALITY & USER EXPERIENCE PORTFOLIO`;
- `Quality Assurance & User Experience Portfolio`;
- `CODING PROJECTS`;
- meaningful image alt text where the description is natural language;
- any new language-selector accessibility labels.

### Professional Journey page
- navigation labels (`Home`, `Contact Me`, etc. where translation is appropriate);
- `MY PROFESSIONAL JOURNEY`;
- all introductory paragraphs;
- timeline date-state label `Today`;
- professional role/title descriptions where they are presented as readable portfolio content;
- timeline summary paragraphs;
- `Skills developed:`;
- `Experience developed:`;
- `Technical experience:`;
- `Product & User Experience Impact:`;
- `Current focus:`;
- every timeline bullet that is normal prose;
- `View details`;
- `Hide details`;
- relevant image/interactive accessibility text;
- document title and metadata.

## Content That Should NOT Be Translated
Preserve proper names, brands, technical identifiers, URLs, product names and technology names when translation would be incorrect or artificial.

Examples that should generally remain unchanged:

- Pamela Pucinelli
- HCL Technologies
- Cumorah Academy
- Ninecon Consultores Associados Ltda
- Velozient
- The Church of Jesus Christ of Latter-day Saints (unless Pamela later explicitly requests an official localized organization name)
- LinkedIn
- Monnve
- MIMC
- HTML5
- CSS3
- JavaScript
- Python
- SQL
- C#
- GraphQL
- macOS
- Windows
- Stripe
- Twilio
- Zendesk
- ServiceNow
- Jira
- Microsoft Teams
- Slack
- Canva
- Figma
- SaaS
- ITSM
- UI/UX
- QA where used as the established professional acronym
- file names, CSS classes, JavaScript identifiers, URLs and code/internal identifiers

Do not mechanically translate technical terms where the English form is the normal professional term in Portuguese. Preserve natural Brazilian technology-industry language.

## Translation Quality
The Portuguese version must read as intentional Brazilian Portuguese, not as a word-for-word machine translation.

Guidelines:
- preserve Pamela's professional meaning and level of experience;
- do not exaggerate claims during translation;
- maintain Technical Support as the professional foundation and QA/UI/UX as complementary disciplines;
- use natural Brazilian Portuguese terminology for support, QA, UX and software work;
- preserve all factual dates, employers, metrics and quantities exactly;
- do not alter the meaning of career-history bullets to make them sound more senior or broader than the English version.

## Suggested Technical Architecture
Use a shared localization mechanism rather than duplicating complete HTML pages.

A suitable lightweight approach is:

- a shared `scripts/i18n.js` (or similarly named file);
- a structured translations object/dictionary for `en` and `pt-BR`;
- stable translation keys attached to visitor-facing elements, such as `data-i18n` attributes;
- optional specialized attributes for translated `aria-label`, `alt`, document title and meta description;
- a reusable language-selector component/markup present on both pages;
- shared CSS for the selector where practical.

The exact implementation can differ if it remains clear, maintainable and consistent with `AGENTS.md`.

Avoid scattering large numbers of fragile text comparisons through JavaScript.

## Existing Dynamic Text — Important
The current portfolio contains visible strings generated outside normal HTML text nodes.

In particular, the Professional Journey interaction currently uses dynamically generated controls including:

- `▼ View details`
- `▲ Hide details`

These strings MUST participate in localization.

Do not leave English-only text in CSS pseudo-elements or JavaScript-generated UI while Portuguese is active.

If necessary, refactor the current implementation so these labels are controlled by the localization layer while preserving PP-003 accordion behavior and accessibility.

## Language Selector Asset
Add:

`images/languages.svg`

Requirements:
- use a simple language/globe/translation-style icon appropriate for the existing portfolio;
- keep it visually small inside the selector;
- SVG should scale cleanly;
- it must not dominate the header;
- use accessible labeling on the interactive selector; the decorative icon itself may use empty alt text if the adjacent/current-language text already communicates the control.

## Accessibility Requirements
The language selector is an interactive control and must be fully keyboard accessible.

At minimum:
- use a semantic `button` for the dropdown trigger;
- expose whether the menu is open using `aria-expanded`;
- associate the trigger with the menu using appropriate ARIA semantics/IDs where useful;
- `Enter` / `Space` activate the selector naturally through the button;
- dropdown options must be keyboard reachable and activatable;
- `Escape` closes the dropdown and returns/retains focus logically on the trigger;
- clicking outside closes the dropdown without trapping focus;
- a visible focus style must remain available;
- switching language must not destroy keyboard focus unexpectedly;
- selector meaning must not rely solely on the icon;
- the current language must be available as readable text.

The translated page must preserve all existing accessibility behavior from PP-003 and PP-004.

## Responsive Behavior
Desktop:
- selector appears in the upper-right of the header with comfortable top/right spacing;
- dropdown aligns predictably and stays within the viewport.

Mobile/narrow widths:
- selector remains reachable and readable;
- it must not overlap Pamela's name/title or navigation;
- dropdown must not render offscreen;
- language names must not be clipped;
- touch targets should remain practical even though the visual icon is small.

Do not solve mobile layout by hiding the language selector.

## Acceptance Criteria
- [ ] `images/languages.svg` exists and is used by the language selector.
- [ ] Both `index.html` and `my-professional-journey.html` show the selector in the upper-right area.
- [ ] The closed selector visibly shows the icon plus the CURRENT language in a small box/chip.
- [ ] Activating the selector opens a dropdown with `English` and `Português`.
- [ ] Selecting `Português` translates all meaningful visitor-facing portfolio copy into Brazilian Portuguese.
- [ ] Selecting `English` restores the full English version.
- [ ] The language changes without requiring an external translation service.
- [ ] The selection persists while navigating between the homepage and Professional Journey page.
- [ ] A fresh visitor with no saved preference sees English by default.
- [ ] `<html lang>` updates correctly between `en` and `pt-BR`.
- [ ] Each page's `<title>` and meta description update with the selected language.
- [ ] `View details` / `Hide details` are translated and continue to work correctly.
- [ ] Professional Timeline accordion functionality from PP-003 is unchanged apart from translated labels.
- [ ] Carousel pointer-caption behavior from PP-004 remains functional.
- [ ] Language captions such as Portuguese/English/Spanish are translated appropriately while technology and product names remain unchanged.
- [ ] Proper names, brands, technologies, project names, URLs and code identifiers are not incorrectly translated.
- [ ] Factual career dates, companies, roles/meaning, quantities and metrics remain accurate.
- [ ] Dropdown closes after selection, on `Escape`, and when clicking/tapping outside.
- [ ] Selector and dropdown are keyboard accessible with visible focus states.
- [ ] Current-language state is understandable without relying only on color/iconography.
- [ ] Desktop layout has intentional top/right spacing and no overlaps.
- [ ] Mobile layout has no clipping, overlap or offscreen dropdown.
- [ ] Existing navigation, carousel, timeline interactions, links and footer remain functional.
- [ ] No new console errors are introduced.

## QA Validation
1. Clear the saved language preference and load `index.html`; confirm English is the default.
2. Confirm the upper-right selector shows the language icon and `English`.
3. Open the selector with mouse and keyboard; verify both language options.
4. Select `Português`; verify the homepage translates immediately and selector now shows `Português`.
5. Inspect `<html lang>`, `<title>` and meta description in Portuguese mode.
6. Verify normal portfolio proper nouns/technology names remain unchanged.
7. Navigate to `my-professional-journey.html`; confirm Portuguese persists without needing to reselect it.
8. Expand every Professional Timeline item in Portuguese.
9. Confirm `View details` / `Hide details` display their Portuguese equivalents and PP-003 behavior still passes.
10. Verify every timeline paragraph/bullet is translated except intentional proper/technical terms.
11. Switch back to English from the Professional Journey page and confirm all content returns to English.
12. Navigate back to home and confirm English persists.
13. Test `Escape`, outside click, Tab, Enter and Space interactions on the selector.
14. Test at desktop and narrow mobile widths.
15. Verify the carousel's stationary-pointer caption behavior still passes after localization changes.
16. Verify reduced-motion behavior still works.
17. Check for clipped text, dropdown overflow, header overlaps and layout shifts in both languages.
18. Check browser console for JavaScript errors.
19. Reload both pages in each selected language to verify persistence.
20. Test an invalid manually stored language value and confirm safe fallback to English.

## Likely Files Affected
- `index.html`
- `my-professional-journey.html`
- `styles/index.css`
- `styles/my-professional-journey.css` only if page-specific selector/layout styling is necessary
- `scripts/i18n.js` (new, suggested)
- `scripts/my-professional-journey.js` if dynamic accordion labels need integration with localization
- `images/languages.svg` (new)

## Out of Scope
- Adding languages other than English and Brazilian Portuguese.
- Translating external Notion pages, LinkedIn, Monnve pages or external project sites.
- Automatic third-party translation APIs.
- Geo/IP-based language detection.
- Full visual redesign of the header/navigation.
- Rewriting career history beyond faithful localization.
