# Airbnb-Clone Listing Page — Take-Home Submission

## Overview

A desktop-only, high-fidelity recreation of a single Airbnb-style listing page with
its two overlay experiences: a full-screen **Photo Tour** and a single-photo
**Lightbox**. Built as a static frontend app (no backend) with React, TypeScript,
and CSS Modules.

The reference (`airbnb-clone-umber-two.vercel.app`) blocks automated fetching via
`robots.txt`, so this implementation was reconstructed from the assignment's
embedded reference screenshots (title, gallery layout, room captions, rating/meta
line) plus an independent, from-scratch implementation of standard listing-page
conventions — observed and rebuilt, not copied. See **Originality** below.

## Features

- **Listing Page** — title with share/save actions, a 5-photo hero grid (1 large +
  4 small) with a "Show all photos" control, property type / guest-bed-bath meta,
  rating and Superhost line, description, and a sticky booking card with
  price/date/guest fields and a Reserve button.
- **Photo Tour** — full-screen overlay opened from any hero photo or "Show all
  photos." Shows a scrollable thumbnail strip of every photo, a large captioned
  image (room name + detail line), and position dots. Clicking the large image
  opens the Lightbox at that exact photo.
- **Lightbox** — full-screen single-photo viewer stacked on top of the Photo Tour,
  with previous/next controls (disabled at the first/last photo), a close button,
  and a caption showing the room name and position (e.g. "Bedroom · 4 / 8").
  Clicking photo *N* anywhere always opens photo *N* here, because every surface
  reads from one canonical image array.

## Tech Stack

- React 18 + TypeScript
- Vite (dev server / build)
- CSS Modules for component-scoped styling (no CSS framework, no icon library —
  icons are small inline SVGs in `src/components/ui/icons.tsx`)
- Zero backend: all listing/gallery data lives in `src/data/listingData.ts`

## Run Instructions

```bash
npm install
npm run dev       # starts the Vite dev server, prints a local URL
```

Other scripts:

```bash
npm run build      # type-checks (tsc -b) and produces a production build in dist/
npm run preview    # serves the production build locally
npm run lint        # type-check only, no emit
```

Requires Node.js 18+. The app was verified with `npm run build` during
development (clean type-check, clean production build).

## Architecture

### Frontend structure

```
src/
  components/
    layout/       Header
    listing/       ListingPage, ListingHeader, ListingMeta, BookingCard
    gallery/        GalleryGrid (hero grid + "Show all photos")
    photo-tour/    PhotoTour (full-screen thumbnail + large image view)
    lightbox/      Lightbox (full-screen single-photo viewer)
    ui/             IconButton, inline icon set
  data/            listingData.ts — the single canonical image array + listing info
  types/           listing.ts — shared TypeScript interfaces
  hooks/           useFocusTrap, useBodyScrollLock, useModalKeyboardNav
  styles/          tokens.css (design tokens), globals.css (resets)
```

`App.tsx` holds one small piece of state — which overlay is open and at what
index — and keeps the Photo Tour mounted underneath the Lightbox (rather than
swapping between them) so focus and DOM state stay stable when the Lightbox
closes back to the tour.

Data (`listingData.ts`) is fully separated from presentation: every component
receives typed props and contains no hard-coded listing content, so swapping in
a real backend later would only mean replacing the data source.

### Production marketplace architecture

A separate diagram, `architecture-diagram.svg`, covers the production-scale
system a real vacation-rental marketplace would need — client → CDN/edge →
frontend → API gateway → backend services (auth, listing, booking, search,
payment, media) → data layer (relational DB with read replicas, cache, search
index, object storage, an append-only payment ledger) → async event
queue/notifications, plus cross-cutting observability and a deployment/scaling
layer. This is scoped as architectural thinking only — the demo app itself
intentionally ships as a static frontend, per the assignment's guidance not to
over-build backend services that aren't required.

## Accessibility

- All interactive elements are real `<button>`/`<a>` tags with descriptive
  `aria-label`s (e.g. "Open photo tour, starting at photo 3 of 8: ...").
- Both overlays use `role="dialog"` + `aria-modal="true"` and trap Tab/Shift+Tab
  focus within themselves (`useFocusTrap`), moving focus in on open and
  restoring it to the previously focused element on close.
- **Escape** closes the active overlay; **ArrowLeft/ArrowRight** move between
  photos in both the Photo Tour and the Lightbox (`useModalKeyboardNav`).
- While the Lightbox is open on top of the Photo Tour, the Photo Tour is marked
  `aria-hidden` and `inert` (and loses pointer events) so it can't be reached by
  keyboard or screen reader and can't be accidentally clicked through.
- The Lightbox's previous/next buttons are `disabled` (not just hidden) at the
  first/last photo, which both prevents the action and announces the boundary
  to assistive tech.
- All content photos have descriptive `alt` text; decorative thumbnail images
  use empty `alt` since the containing button already has a full label.
- Transitions respect `prefers-reduced-motion` (durations collapse to `0ms`).

## AI-assisted development

This was built conversationally with Claude directly in the chat/computer-use
environment (no IDE agents or terminal automation), in stages:

1. Read the assignment PDF and screenshots to extract concrete content (title,
   room list, meta counts) and layout intent (hero grid, thumbnail-strip tour,
   arrow-nav lightbox).
2. Designed the data model and component/folder structure before writing any
   UI code, so the canonical image array could be shared across all three views
   from the start.
3. Implemented Listing Page → Photo Tour → Lightbox in that order, wiring
   shared hooks (focus trap, scroll lock, keyboard nav) as each overlay needed
   them, rather than duplicating logic per component.
4. Ran `tsc -b` and `vite build` after implementation to catch type and build
   errors directly, fixing issues (e.g. JSX text vs. string-escape handling for
   the "·" separator, a keyboard-event conflict between the two stacked
   overlays) before treating any stage as done.
5. Wrote this README and the architecture diagram last, once the implementation
   was verified to build cleanly.

The full prompt sequence is in `ai-prompts.md`.

## Originality

This implementation was independently authored. No source code, markup, CSS, or
JavaScript from the reference site was inspected or copied — the reference URL
could not even be fetched programmatically due to its `robots.txt`. The visual
and behavioral target was reconstructed from the assignment's own screenshots
and standard, publicly-known Airbnb listing-page conventions (grid gallery →
full-screen tour → single-photo lightbox), then implemented from scratch with an
original component architecture, original CSS, and placeholder photography.
The brand name and mark used in the header ("stayfinder") are original, not
Airbnb's.

## Known limitations

- Built and verified against the assignment's screenshots, not the live
  reference pixel-by-pixel, since the reference blocks automated fetching. Exact
  colors, spacing, and font choices may need a manual tuning pass against the
  live site.
- Desktop-only, per the assignment's explicit scope — no mobile layout.
- Booking card fields (dates, guests) are static UI, not a working date picker,
  since booking logic is outside the stated scope (Listing Page, Photo Tour,
  Lightbox).
- Uses placeholder photography (picsum.photos) rather than the real listing's
  images.
- No automated test suite; verification was via TypeScript's compiler and a
  production build, not unit/e2e tests.
