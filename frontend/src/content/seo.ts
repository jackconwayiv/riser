export type PageSeo = {
  title: string;
  description: string;
  /** Path only, e.g. `/product` */
  path: string;
  /** Filename under public/, served at `/static/<file>` in production */
  ogImage?: string;
};

const DEFAULT_OG_IMAGE = "riser-hero.jpg";
const DEFAULT_SITE_URL = "https://the-riser.org";
const DEFAULT_BASE_URL = "/static/";

function resolveSiteUrl(): string {
  const fromVite =
    typeof import.meta !== "undefined" &&
    import.meta.env?.VITE_PUBLIC_SITE_URL;
  if (fromVite) return String(fromVite).replace(/\/$/, "");

  const nodeEnv = (
    globalThis as { process?: { env?: Record<string, string | undefined> } }
  ).process?.env;
  const fromNode = nodeEnv?.VITE_PUBLIC_SITE_URL;
  if (fromNode) return fromNode.replace(/\/$/, "");

  return DEFAULT_SITE_URL;
}

function resolveBaseUrl(): string {
  const fromVite =
    typeof import.meta !== "undefined" && import.meta.env?.BASE_URL;
  if (fromVite) return String(fromVite);

  return DEFAULT_BASE_URL;
}

export const ROUTE_SEO: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "The RISER — EMS & Fire Patient Lifting Device",
    description:
      "The RISER is a patient lifting device built by a firefighter for EMS and fire crews. Winner of 2025 EMS World Innovation & Firehouse Magazine Innovation awards.",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/product": {
    path: "/product",
    title: "Product specs & features | The RISER",
    description:
      "Explore The RISER: mechanical advantage lifting, ambulance storage, specifications, and step-by-step usage for EMS and fire patient handling.",
    ogImage: "RISER-action-side.jpg",
  },
  "/data-driven": {
    path: "/data-driven",
    title: "Data-Driven | The RISER",
    description:
      "Published data on EMS lifting injuries, ergonomics, and organizational ROI. Sources from NIH, NAEMT, NIOSH, and the U.S. Fire Administration.",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/about": {
    path: "/about",
    title: "About EMS Innovations | The RISER",
    description:
      "Firefighter-founded EMS Innovations created The RISER after years in the field and a colleague's career-ending back injury. Meet inventor Rick Beedle and our story.",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/contact": {
    path: "/contact",
    title: "Contact | The RISER",
    description:
      "Contact Rick Beedle and the EMS Innovations team about The RISER. Sales, support, and partnerships for EMS and fire departments.",
    ogImage: DEFAULT_OG_IMAGE,
  },
};

const HOME_SEO = ROUTE_SEO["/"];

export function getSiteUrl(): string {
  return resolveSiteUrl();
}

/** Absolute URL for a public asset (production: `/static/…`). */
export function absoluteAssetUrl(filename: string): string {
  const siteUrl = resolveSiteUrl();
  const base = resolveBaseUrl().replace(/\/$/, "");
  const assetPath = `${base}/${filename}`.replace(/\/{2,}/g, "/");
  return `${siteUrl}${assetPath.startsWith("/") ? assetPath : `/${assetPath}`}`;
}

export function getSeoForPath(pathname: string): PageSeo {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return ROUTE_SEO[normalized] ?? HOME_SEO;
}

export function canonicalUrl(path: string): string {
  const p = path === "/" ? "" : path;
  return `${resolveSiteUrl()}${p}`;
}

export function ogImageUrl(filename: string): string {
  return absoluteAssetUrl(filename);
}

/** Marketing routes included in build-time HTML prerender. */
export const PRERENDER_ROUTES = Object.keys(ROUTE_SEO);

/** Built HTML shell filename per route (served by Django `frontend` view). */
export const ROUTE_HTML_FILES: Record<string, string> = {
  "/": "index.html",
  "/product": "product.html",
  "/data-driven": "data-driven.html",
  "/about": "about.html",
  "/contact": "contact.html",
};
