# AI-Assisted Development — Prompt Log

This documents the actual sequence of prompts given to Claude (used directly in
Claude's chat/computer-use environment, no IDE agents) to produce this
submission.

## Prompt 1 — Full assignment brief

A single detailed brief was provided, attaching:
- The Playpower Labs assignment PDF (`Playpower_Labs_Assignment__Airbnb-Clone_App.pdf`).
- The reference URL to reproduce (`airbnb-clone-umber-two.vercel.app`).

The brief specified:
- Build a desktop-only, high-fidelity recreation of the reference listing page
  covering exactly three experiences: Listing Page, Photo Tour, Lightbox.
- Match layout, spacing, typography, colors, icons, interactions, hover states,
  transitions, and accessibility as closely as possible, while writing fully
  original code (no copying the reference's source/markup/bundles).
- Use a modern stack (React/TypeScript preferred), a modular component
  architecture (not one giant component), and typed data kept separate from
  JSX, with a single canonical image array so gallery order stays consistent
  across all three views.
- Implement full keyboard navigation, focus trapping/restoration, and
  `prefers-reduced-motion` support.
- Produce the work directly as project files in the conversation (not
  instructions for an external coding agent).
- Also produce a separate high-level production architecture diagram for a
  vacation-rental marketplace at scale, and a README covering overview,
  features, tech stack, run instructions, architecture, accessibility, AI usage,
  originality, and known limitations.
- Work in explicit stages: analyze → design data/component architecture →
  build Listing Page → Photo Tour → Lightbox → accessibility/keyboard → visual
  refinement → architecture diagram → final code-quality review.

Claude's response to this prompt:
1. Attempted to fetch the live reference URL — blocked by the site's
   `robots.txt` — and noted this limitation explicitly rather than silently
   working around it.
2. Read the assignment PDF's embedded screenshots for concrete content (listing
   title, room list and captions, guest/bed/bath counts) and layout intent.
3. Designed the data model (`types/listing.ts`, `data/listingData.ts`) and
   folder structure before writing UI code.
4. Scaffolded a Vite + React + TypeScript project (package.json, tsconfig,
   vite.config.ts, index.html).
5. Implemented shared hooks first (`useFocusTrap`, `useBodyScrollLock`,
   `useModalKeyboardNav`), then the Listing Page, Photo Tour, and Lightbox in
   that order, so overlay components could reuse the same accessibility
   primitives instead of duplicating logic.
6. Ran `npm install`, `tsc -b`, and `vite build` to verify the project actually
   compiles and builds — this surfaced and fixed two real issues: a JSX
   text/string-escaping bug with the "·" separator character, and a keyboard
   event conflict between the Photo Tour and the Lightbox once the Lightbox was
   changed to render on top of (rather than instead of) the Photo Tour.
7. Wrote the production architecture diagram as a standalone SVG.

## Prompt 2 — "Continue"

A short follow-up asking Claude to continue and finish the remaining
deliverables (README, this prompt log, project cleanup, zipping, and
presenting the final files).

## Prompt 3 — Save and share controls

When I click on Save, convert the heart to a fully pink heart with no black
border, and change the label from "Save" to "Saved" on click. Underline the
text of both the Save and Share buttons.

## Prompt 4 — Review category row

In the review category row, keep Comfort 6, Accuracy 5, Hot tub 5, Condition
4, Hospitality 8, Cleanliness 4, and Amenities 2. Remove Photos, then append
Decor 2, Indoor Spaces 2, and Location 2. Make all categories use font weight
500 and keep them on one horizontally scrollable row.

## Prompt 5 — Hide the category scrollbar

Remove the scrollbar below the review category row while preserving its
horizontal scrolling behavior.

## Prompt 6 — Laurel assets around the review score

Use the added `laurel-left.png` and `laurel-right.png` images on the sides of
the 4.95 review score.

## Prompt 7 — Replace the gallery icon

Replace the existing four-square SVG icon:

```html
<svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"></rect><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"></rect><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"></rect><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"></rect></svg>
```

with the filled nine-dot SVG using the 16 by 16 viewBox, presentation role,
non-focusable behavior, current-color fill, and the supplied path data.

## Prompt 8 — Resize the gallery icon

The new nine-dot icon is very large; adjust it to a smaller size.

## Prompt 9 — Update this prompt log

Write all of the prompts used for this project into `ai-prompts.md`.

## Previous chat prompts — verbatim follow-ups

The following follow-up prompts were given in the previous project chats:

> when I click on save , it should be converted in full heart of pink (no
> black border) and save should be change to "saved" (on click). Both Save and
> Share button's text should have been underlined.

> 🛏 Comfort 6  
> ✅ Accuracy 5  
> 🛁 Hot tub 5  
> 🧺 Condition 4  
> 🎁 Hospitality 8  
> 🧴 Cleanliness 4  
> 🍽 Amenities 2  
> 🖼 Photos  
> remove photo  
> after this add :  
> Decor 2  
> Indoor Spaces 2  
> Location 2  
> 
> all of them should have weight 500, and horizontally scrollable (i.e on the
> same row)

> remove the scroll bar , below it , but still follow the property

> I have added the laurel-left and laurel-right png , add it on the sides of
> 4.95 review

> instead of this: [the existing four-square SVG], do: [the supplied filled
> nine-dot SVG with the 16 by 16 viewBox and path data]

> the size is very huge, adjust it smaller

> write the all the of prompting we have used for the project in "ai-prompts.md"

> include of the preiovus chats
