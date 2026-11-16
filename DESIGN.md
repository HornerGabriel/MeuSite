---
name: Gabriel Horner · Design
description: A quiet gallery wall with a signature on it.
colors:
  ground: "#ffffff"
  field: "#f1f5ef"
  ink: "#3a3a3a"
  text: "#6b6b6b"
  quiet: "#737373"
  muted: "#8a8a8a"
  hairline: "#ececea"
  tile: "#f3f3f1"
  green: "#a9bba3"
  green-mid: "#8fa688"
  green-soft: "#eef2ec"
  green-wash: "#e4ebe1"
  green-deep: "#5f7559"
typography:
  display:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.4vw, 3.25rem)"
    fontWeight: 200
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "clamp(1.625rem, 1.3rem + 1.2vw, 2.125rem)"
    fontWeight: 200
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  nav:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 1.875rem)"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 300
    lineHeight: 1.35
  title-sm:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.2
  lead:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.7
  body:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.7
  caption:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.4
  small:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "0.875rem"
    fontWeight: 300
    lineHeight: 1.7
  fine:
    fontFamily: "Aleo, Rockwell, Georgia, serif"
    fontSize: "0.8125rem"
    fontWeight: 300
    lineHeight: 1.45
rounded:
  none: "0px"
  focus: "2px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  page-inline: "clamp(1.25rem, 7vw, 5rem)"
  row: "clamp(1.75rem, 4vw, 2.5rem)"
  grid-row-gap: "clamp(2rem, 4vw, 3rem)"
  grid-col-gap: "clamp(1.5rem, 3.5vw, 2.75rem)"
  section: "clamp(4rem, 9vw, 6rem)"
  wrap: "1100px"
components:
  site-header:
    backgroundColor: "{colors.field}"
    padding: "clamp(1.25rem, 2.5vw, 1.375rem) clamp(1.25rem, 4vw, 2.5rem) clamp(0.75rem, 1.5vw, 1rem)"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.nav}"
    padding: "0.25rem 0"
  nav-link-active:
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
  button-pill:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.green-deep}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
  button-pill-hover:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
  tile-media:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.none}"
  tile-media-wash:
    backgroundColor: "{colors.green-wash}"
  tile-media-sage:
    backgroundColor: "{colors.green-soft}"
  tile-caption:
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
  service-row:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
    padding: "clamp(1.75rem, 4vw, 2.5rem) 0"
  site-footer:
    textColor: "{colors.quiet}"
    typography: "{typography.small}"
    padding: "2rem clamp(1.25rem, 4vw, 2.5rem) 2.5rem"
---

# Design System: Gabriel Horner · Design

## Overview

**Creative North Star: "The Quiet Gallery Wall"**

The site is a white gallery wall with a signature on it. A pale, almost-white sage lintel carries the hand-signed logo, three large light nav words and a single icon; it stays perfectly still while the room below it changes from page to page. Everything under the lintel is white, low in contrast and set in one light slab face, so the work (and, until it exists, its placeholder tiles) is the loudest thing on screen.

Density is low and centred. Pages are single columns of centred titles and leads that open into a three-column grid, a two-column split or hairline-ruled rows. Structure comes from thin rules and whitespace, never from boxes, fills or shadows. Colour is about 90% white and grey ink; the remaining 10% is pastel green alone, spent as small marks and a few states: a short underline, a dot, a tint, a selection, the pill button and a couple of highlighted words. There is no brown anywhere.

The world explicitly refuses the dark "creative developer" portfolio with big claims and stat counters.

**Key Characteristics:**
- Still, almost-white pastel-green header lintel held in place across page navigations.
- One light slab serif (Aleo) at weights 200 and 300 only.
- Low-contrast grey ink on pure white; no colour fields.
- Pastel green only, as 2px marks, 7px dots, tile tints and Deep Sage interaction states, never surfaces.
- Hairline-separated rows instead of cards; flat, shadowless, square-cornered.
- A single Deep Sage pill outline button that fills with Deep Sage on hover.

## Colors

A near-monochrome grey palette on pure white, with one sage-green family held back for marks and states.

### Primary
- **Gallery Ink** (ink): headings, active nav item, captions, prices and dates. The darkest value on the site; nothing is pure black except the signature logo.

### Secondary
- **Sage Line** (green-mid): the 2px × 1.25rem mark under the active nav item, the mark above the bundle service heading, the 7px dots on the process steps, and the 2px hover underline that grows under a linked tile caption.
- **Deep Sage** (green-deep): the pill button's stroke, text and hover fill; nav and icon hover; the footer phone link; the "Hoje" timeline date; the bundle's "sob consulta" price; the 2px focus ring (offset 4px) and the text caret. The only green dark enough to carry text (5:1 on white).

### Tertiary
- **Sage Mist** (green): reserved light green for future marks.
- **Sage Wash** (green-soft): text selection background and the "sage" placeholder tile tint.
- **Moss Wash** (green-wash): the slightly deeper "wash" placeholder tile tint.

### Neutral
- **Gallery White** (ground): the page body. Every content surface sits on it.
- **Lintel Sage** (field): the header band only; a pastel green so light it reads as tinted white. It is the one green surface the Ten Percent Rule allows.
- **Soft Graphite** (text): body copy, leads, price labels, footer links at rest.
- **Quiet Grey** (quiet): small text (footer line, price note, the "a partir de" prefix). The lightest grey allowed for text under 24px.
- **Muted Grey** (muted): inactive nav items (rendered at 24px and above) and the 14px social icons. Never used for small text.
- **Hairline** (hairline): every 1px rule: service rows, timeline rows, process step tops, the about split and the footer top.
- **Placeholder Stone** (tile): the default placeholder tile fill until real project images replace it.

### Named Rules
**The Ten Percent Rule.** Green stays at or under 10% of any screen. It appears as a 2px mark, a 7px dot, a selection, a placeholder tint, a hover underline, the Deep Sage pill button, Deep Sage hover states and at most a couple of highlighted words per page. A pastel section background breaks the world. Brown is retired: never reintroduce it.

**The Legible Grey Rule.** Muted Grey is for nav words at 24px or larger and for icons. Any text smaller than that uses Quiet Grey or darker.

**The Mark, Not Field Rule.** Accent marks are 2px tall and about 1.25rem wide, or 7px round. They point at one thing; they never frame or fill an area.

## Typography

**Display Font:** Aleo (with Rockwell, Georgia, serif), self-hosted variable woff2, weights 200–500, latin subset.
**Body Font:** Aleo, the same face.

**Character:** A soft, light slab serif that reads warm and hand-made at large sizes and calm at body size. One face does everything; hierarchy comes from size and weight 200 vs 300, not from a second family.

### Hierarchy
- **Display** (200, 2.25rem → 3.25rem fluid, 1.2): the centred page title on Sobre and Serviços. On the portfolio home the title is visually hidden so the grid starts immediately under the header.
- **Headline** (200, 1.625rem → 2.125rem fluid, 1.2): the closing contact heading on every page.
- **Nav** (300, 1.5rem → 1.875rem fluid, 1.2, -0.01em): the three header nav words. Large on purpose; the nav is part of the signature lintel.
- **Title** (300, 1.375rem, 1.35): service names and section titles ("Trajetória", "Ferramentas", "Como funciona").
- **Title small** (300, 1.0625rem): process step names.
- **Lead** (300, 1.0625rem, 1.7): centred intro paragraphs, capped at 60–62ch; left-aligned below 640px.
- **Body** (300, 1rem, 1.7): all running text. Text-wrap pretty on paragraphs, balance on headings.
- **Caption** (300, 1rem, 1.4): centred tile captions in Gallery Ink.
- **Small** (300, 0.875rem): footer and price note. **Fine** (300, 0.8125rem): the "a partir de" price prefix.

Prices, years and date ranges use tabular numerals.

### Named Rules
**The One Face Rule.** Aleo is the only family. Display sizes use weight 200; everything else uses 300. No weight above 300 ships, including for emphasis.

**The Sentence Case Rule.** No uppercase labels, no letter-spaced tracking above zero. Headings carry slight negative tracking only at display, headline and nav sizes.

## Layout

The header is a full-width centred band (logo 112–130px wide, nav, icon row). The main column has fluid inline padding (page-inline) and a 1100px wrap; individual blocks cap narrower: portfolio grid 940px, services and process 960px, about split 880px, contact band 640px, leads 60–62ch.

Portfolio: three-column grid of 4:3.1 tiles, two columns below 860px, one below 480px. About: 1.15fr / 1fr split under a hairline, stacking below 640px. Services: three-column rows (name / description / prices), two columns with the name spanning below 860px, one column below 640px. Process: four steps, then two, then one.

Rhythm: rows breathe at the row step; major sections separate at the section step. Marketing pages close with the contact band (4.5rem → 7rem) then the footer; project pages close with Related projects + actions, then the footer.

### Named Rules
**The Hairline Row Rule.** Lists of things (services, timeline entries, process steps) are separated by 1px Hairline rules on white, not placed in cards.

**The Centred Spine Rule.** Titles, leads, captions, the contact band and the footer are centred. Data inside rows (prices, timeline, process text) is left-aligned.

## Elevation & Depth

The system is completely flat. There are no shadows anywhere. Depth is a single tonal step: the Lintel Sage header sits above Gallery White. Hierarchy below it comes from hairlines and whitespace. Motion is the only other source of depth: tiles rise 14px out of a 4px blur on load (staggered 70ms), and tile images scale to 1.03 on hover inside their clipped frame.

### Named Rules
**The Flat Wall Rule.** Surfaces are flat at rest and in every state. Hover changes colour, a mark's length or an image's scale, never elevation.

**The Still Lintel Rule.** Page navigation is a cross-document view transition: the root crossfades for 0.35s while the header is held completely still. New pages must keep the same header markup so the lintel never moves. Reduced motion turns the transition off.

## Shapes

Square by default. Tiles, rules and the header band have no radius. Rounded forms: the full pill shared by both button styles, and the 7px circle of the process dots. The focus ring carries a 2px radius so it reads softly around text. Lines are always 1px (structure) or 2px (marks, focus).

## Components

### Buttons
Soft, outlined and quiet until touched.
- **Shape:** full pill (999px).
- **Primary (contact):** 1px Deep Sage stroke, transparent on white, Deep Sage text in body type, padding 0.8rem × 1.5rem, optional 16px leading icon with a 0.6rem gap. Hover fills Deep Sage; text turns white.
- **Quiet (home / secondary):** same pill, 1px Gallery Ink stroke and ink text (`.button--quiet`). Hover fills ink.
- **Focus:** the global 2px Deep Sage ring, 4px offset.

### Navigation
- **Style:** three centred words in the nav type role, Muted Grey at rest, gap 1.25–2rem.
- **Hover:** turns Deep Sage over 0.3s.
- **Active page:** Gallery Ink plus a centred 2px × 1.25rem Sage Line mark just below the word, which scales in from the centre over 0.45s.
- **Mobile:** the same words wrap centred; no hamburger.
- **Social row:** 32px hit targets holding 14px icons in Muted Grey, Deep Sage on hover.

### Cards / Containers
There are no cards. The portfolio tile is an image frame, not a container.
- **Tile media:** square-cornered 4:3.1 frame, clipped, Placeholder Stone fill (or Sage Wash / Moss Wash tints) until a cover image lands.
- **Caption:** centred, 1rem below the frame, Gallery Ink. When the tile links to a project, a 2px Sage Line underline grows from the centre on hover.

### Service Row
The signature data pattern: a hairline-bounded row with the service name as a title, a description in Soft Graphite, and a price list where labels sit left and tabular prices sit right in Gallery Ink, each prefixed by "a partir de" in the fine role. The bundle row is marked by a single 2px Sage Line mark above its name (positioned absolutely so the row's columns stay aligned) and its "sob consulta" price in Deep Sage.

### Process Steps
Four short columns, each topped by a hairline with a 7px Sage Line dot sitting on its left end.

### Contact Band
Closing beat on marketing pages (home, Sobre, Serviços): a centred headline in weight 200, one line of body and the primary WhatsApp pill.

### Related projects (case studies)
Project pages close with a hairline, the title "Outros projetos", three portfolio tiles (live links or soon placeholders using sage/wash tones), then `.project-actions`: quiet Home pill + primary WhatsApp pill.

### Footer
Hairline top, centred small text in Quiet Grey, phone link in Deep Sage that underlines on hover.

## Do's and Don'ts

### Do:
- **Do** keep the header markup identical on every page so the view transition holds the lintel still.
- **Do** keep green use to the listed marks and states: active-nav underline, bundle mark, process dots, selection, placeholder tints, linked-caption hover underline, the pill button, hover states, the footer phone link and the two highlighted words.
- **Do** separate lists with 1px Hairline rules and generous row padding.
- **Do** set every word in Aleo at weight 200 (display, headline) or 300 (everything else).
- **Do** use Quiet Grey or darker for any text under 24px; reserve Muted Grey for large nav words and icons.
- **Do** end marketing pages with the contact band; end project pages with related tiles plus Home and WhatsApp actions.
- **Do** keep the signature logo black and unaltered.

### Don't:
- **Don't** fill a section or band with green, and don't use brown anywhere.
- **Don't** introduce cards, panels, shadows or rounded containers.
- **Don't** add a second typeface or any weight above 300.
- **Don't** add dark sections, stat counters or big-claim headlines.
- **Don't** animate or restyle the header between pages.
- **Don't** add uppercase labels or tracked-out small text above headings.
