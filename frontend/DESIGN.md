# RISER design vocabulary

Single source of truth for UI tokens: [`src/index.css`](src/index.css) (`:root`).

## Branding

**Product name:** always **The RISER** — capital *The*, then *RISER* in all caps. Not “The Riser”, “the RISER”, or “RISER” alone in prose unless quoting a third party.

- Code: [`src/content/brand.ts`](src/content/brand.ts) exports `PRODUCT_NAME` (`"The RISER"`). In UI, wrap visible mentions with [`<ProductName />`](src/components/ProductName.tsx) or `textWithProductName()` for plain strings.
- Visible mentions are **bold** (`.product-name` / `<strong>`). SEO titles, `alt` text, and JSON-LD stay plain text.
- Logo image filenames (e.g. `RISER-logo-transparent.png`) are assets only; visible text should still use `PRODUCT_NAME`.

## Surfaces (backgrounds)

| Token | Use |
|-------|-----|
| `--surface-canvas` | Default page background (body) |
| `--surface-raised` | White sections (`.section--alt`), cards on canvas |
| `--surface-muted` | Soft gray bands (e.g. steps section) |
| `--surface-navy` | **Page hero** (breadcrumbs + title), home position band, footer |
| `--surface-muted` | Gray band — **About story/mission**, steps section |
| `--surface-brand` | Red gradient — bottom CTA, TikTok block |
| `--surface-warm-start` | Org-case section gradient start only |
| `--surface-media` | Video / embed chrome |

## Text colors

| Token | Use |
|-------|-----|
| `--text` | Body copy on light backgrounds |
| `--text-muted` | Leads, meta, secondary copy on light |
| `--brand-navy` | Headings on light |
| `--text-on-dark` | Copy on navy / red CTA |
| `--text-on-dark-muted` | Secondary copy on dark |
| `--text-on-dark-faint` | Footer copyright |
| `--on-brand-solid` | Pure white on red (top bar, primary buttons on red) |

## Type scale

| Token | Typical class |
|-------|----------------|
| `--type-display` | `.page-hero__title` |
| `--type-heading` | `.section__title`, `.home-steps__title` |
| `--type-heading-sm` | `.about-story__block h2`, contact name, org-case titles |
| `--type-subheading` | `.prose h2`, contact hours |
| `--type-lead` | `.section__lead`, `.page-hero__lead`, `.about-cta__lead` |
| `--type-body-sm` | `.card__text`, spec lists |
| `--type-caption` | Crumbs, contact meta |
| `--type-eyebrow` | `.hero__eyebrow` |
| `--type-ui` | Nav, buttons, tables |

**Emphasis lead:** `.home-value__lead` uses `--type-lead` sizing with `--text` (not muted) for stronger intro copy.

## Buttons

Base: `.btn` + modifier. Colors come from `--btn-*` tokens in `:root` ([`src/index.css`](src/index.css)).

### Usage rules

- **`btn--primary`** — default everywhere on light/canvas/white/gray bands (red fill, white text).
- **`btn--secondary`** — only on light sections (`.section--alt`, `.page-body`); subtle gray fill, not ghost.
- **`btn--ghost`** — only on dark surfaces (`.hero`, `.about-cta`); do not use on white or gray bands.

### Per-surface matrix

| Surface | Background token | Primary | Secondary | Ghost |
|---------|------------------|---------|-----------|-------|
| Canvas / page body | `--surface-canvas` | Red + white text | Subtle gray fill + navy text | Do not use |
| White band | `--surface-raised` (`.section--alt`) | Red + white text | Subtle gray fill + navy text | Do not use |
| Gray band | `--surface-muted` | Red + white text (if added) | Subtle gray fill | Do not use |
| Navy hero | `--surface-navy` + scrim | Red + white text | — | Frosted glass + gold border |
| Red CTA | `--surface-brand` (`.about-cta`) | **White fill + navy text** (scoped) | — | Dark glass + white border (scoped) |

### Token reference

| Token | Role |
|-------|------|
| `--btn-primary-bg` / `--btn-primary-fg` | Default primary |
| `--btn-secondary-bg` / `--btn-secondary-border` | Light-surface secondary |
| `--btn-ghost-bg` / `--btn-ghost-border` | Dark-surface ghost |

**Bottom CTA pattern (all marketing pages):**

```html
<section class="about-cta">
  <div class="container about-cta__inner">
    <p class="about-cta__lead">…</p>
    <!-- optional second line, or sole line on Product/About: -->
    <p class="about-cta__sub">…</p>
    <div class="about-cta__actions">
      <a class="btn btn--primary" href="…">Primary action</a>
      <a class="btn btn--ghost" href="…">Secondary action</a>
    </div>
  </div>
</section>
```

Contact page has no bottom CTA; the form is the conversion.

## Section patterns

- **Standard section:** `.section` on canvas
- **White band:** `.section.section--alt`
- **Navy band:** `.page-hero`, `.home-position`, `.home-mechanical-promo`, footer
- **Gray band:** `.about-story` (same token as `.home-steps`)
- **Red brand band:** `.about-cta`, `.home-tiktok`
- **Closing CTA:** `.about-cta` only — always red brand gradient
