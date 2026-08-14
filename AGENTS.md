# AGENTS.md

## Purpose

This repository contains Pamela Pucinelli's professional portfolio. Changes should preserve a coherent hybrid positioning centered on Technical Support, Quality Assurance, UX, and Design, with the overall goal of improving the user's experience with digital products.

Codex should treat this file as the repository-level implementation guide.

## Source of work

Implementation work should normally come from tickets in:

`docs/tickets/current/`

Each ticket is expected to contain the context, requested behavior, acceptance criteria, likely affected files, and QA expectations for that change.

Do not implement work from `docs/tickets/completed/` unless the user explicitly asks to reopen or revise a completed ticket.

## Required workflow

When asked to implement a ticket:

1. Read this `AGENTS.md` first.
2. Read the complete ticket in `docs/tickets/current/`.
3. Inspect the relevant existing HTML, CSS, and JavaScript before editing.
4. Implement only the scope described by the ticket.
5. Avoid unrelated refactors, formatting sweeps, dependency changes, or visual redesigns.
6. Preserve existing functionality unless the ticket explicitly changes it.
7. Run the most relevant checks available for the change.
8. Report exactly which files changed, what behavior changed, and what validation was performed.
9. Leave the ticket in `docs/tickets/current/` after implementation. Do not move it to `completed` yourself unless the user explicitly instructs you to do so.

The ticket is moved to `docs/tickets/completed/` only after the implementation has been reviewed and validated.

## Scope discipline

Treat each ticket as the contract for the change.

- Do not invent new requirements.
- Do not combine unrelated improvements into the same implementation.
- Do not modify completed tickets.
- Do not change factual employment history, dates, employers, metrics, languages, tools, or professional claims unless the ticket explicitly requests it.
- Do not add skills or tools merely to make the portfolio look more complete.
- Do not change external Notion content unless the task explicitly includes that work.
- If you discover an unrelated bug or improvement, report it separately instead of silently fixing it.

## Professional positioning

The portfolio should not frame Pamela as leaving Technical Support behind in order to become only a QA professional.

The intended narrative is:

**Technical Support → Product Understanding → Quality → User Experience → Design**

Technical Support is the professional foundation. Quality Assurance and UI/UX Design are complementary disciplines that expand Pamela's ability to understand products, investigate issues, reduce friction, validate behavior, and improve the user experience.

Do not claim professional UX Designer employment or expertise that is not supported by the portfolio. UI/UX Design should be described as an area of active study and professional development when appropriate.

## Frontend conventions

This is a lightweight static portfolio. Prefer simple HTML, CSS, and JavaScript solutions that fit the existing structure.

- Do not introduce a frontend framework unless explicitly requested.
- Do not add dependencies for behavior that can be implemented clearly with existing HTML/CSS/JS.
- Preserve semantic HTML.
- Preserve meaningful `alt` text for images.
- Preserve keyboard accessibility.
- Keep ARIA state synchronized with interactive state.
- Respect `prefers-reduced-motion` where motion is involved.
- Avoid introducing broken relative paths or renamed assets without updating all references.
- Preserve mobile responsiveness and existing visual identity unless the ticket explicitly calls for a redesign.

## Accessibility expectations

Interactive behavior must remain usable with keyboard navigation.

For expandable/collapsible content:

- use semantic interactive controls where practical;
- support keyboard activation;
- keep `aria-expanded` accurate;
- keep `aria-controls`/relationships meaningful where used;
- manage focus deliberately when controls move, disappear, or content collapses;
- do not create interaction states that are understandable only through color or animation.

## Validation expectations

For relevant changes, check at minimum:

- affected navigation and links;
- direct access to renamed or new pages;
- CSS, JS, and image paths;
- keyboard behavior for interactive controls;
- ARIA state changes;
- obvious console/runtime errors when a browser test is available;
- mobile/narrow layout regressions;
- text overflow, overlap, clipping, and hover/focus states;
- reduced-motion behavior when animation is affected.

If a full browser test is not available, state clearly that validation was static/code-level only.

## Ticket lifecycle

`docs/tickets/current/` contains work that has not yet completed review and validation.

`docs/tickets/completed/` contains tickets that have already passed implementation review and QA validation.

Do not mark your own implementation as completed by moving its ticket unless explicitly instructed. The normal workflow is:

**Ticket → Codex implementation → PR/code review → QA/retest → move ticket to completed → merge**

## Pull request behavior

When implementing a ticket for a PR:

- keep the diff limited to the ticket;
- summarize the user-facing behavior change;
- list files changed;
- state validation performed;
- call out anything you could not validate;
- do not include unrelated cleanup.

## Current repository direction

The active portfolio terminology is:

- `TECHNICAL SUPPORT | QUALITY ASSURANCE | UX & DESIGN`
- `MY PROFESSIONAL JOURNEY`
- `Product & User Experience Impact`
- `TOOLS, TECHNOLOGIES & LANGUAGES`
- `QUALITY & USER EXPERIENCE PORTFOLIO`

Preserve this terminology unless a future ticket explicitly changes it.
