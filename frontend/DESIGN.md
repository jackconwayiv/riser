# Riser design vocabulary

Single source of truth for UI tokens: [`src/index.css`](src/index.css) (`:root`).

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

Base: `.btn` + modifier.

| Modifier | On light / white | On navy (hero) | On red CTA (`.about-cta`) |
|----------|------------------|----------------|---------------------------|
| `--primary` | Red fill | Red fill | **White fill** (scoped override) |
| `--secondary` | White card style | — | — |
| `--ghost` | — | Glass + gold border | Glass + gold border |

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
