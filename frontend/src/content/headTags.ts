import {
  canonicalUrl,
  getSiteUrl,
  ogImageUrl,
  type PageSeo,
} from "./seo.ts";

export type MetaSpec =
  | { attr: "name"; key: string; content: string }
  | { attr: "property"; key: string; content: string };

const SITE_NAME = "The Riser";
const OG_LOCALE = "en_US";
const DEFAULT_OG_IMAGE = "riser-hero.jpg";

export function getHeadMetaSpecs(seo: PageSeo): MetaSpec[] {
  const url = canonicalUrl(seo.path);
  const image = ogImageUrl(seo.ogImage ?? DEFAULT_OG_IMAGE);

  return [
    { attr: "name", key: "description", content: seo.description },
    { attr: "property", key: "og:title", content: seo.title },
    { attr: "property", key: "og:description", content: seo.description },
    { attr: "property", key: "og:url", content: url },
    { attr: "property", key: "og:type", content: "website" },
    { attr: "property", key: "og:site_name", content: SITE_NAME },
    { attr: "property", key: "og:locale", content: OG_LOCALE },
    { attr: "property", key: "og:image", content: image },
    { attr: "name", key: "twitter:card", content: "summary_large_image" },
    { attr: "name", key: "twitter:title", content: seo.title },
    { attr: "name", key: "twitter:description", content: seo.description },
    { attr: "name", key: "twitter:image", content: image },
  ];
}

export function getCanonicalHref(seo: PageSeo): string {
  return canonicalUrl(seo.path);
}

function upsertMeta(spec: MetaSpec) {
  const selector =
    spec.attr === "name"
      ? `meta[name="${spec.key}"]`
      : `meta[property="${spec.key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(spec.attr, spec.key);
    document.head.appendChild(el);
  }
  el.content = spec.content;
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Apply SEO head tags in the browser (client-side navigation). */
export function applyHeadTags(seo: PageSeo): void {
  document.title = seo.title;
  upsertCanonical(getCanonicalHref(seo));
  for (const spec of getHeadMetaSpecs(seo)) {
    upsertMeta(spec);
  }
}

/** Selector keys for tags replaced during static HTML prerender. */
export const PRERENDER_HEAD_REMOVE_SELECTORS = [
  'meta[name="description"]',
  'meta[property^="og:"]',
  'meta[name^="twitter:"]',
  'link[rel="canonical"]',
] as const;

export { getSiteUrl };
