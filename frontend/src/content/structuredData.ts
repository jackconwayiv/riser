import {
  EMS_WORLD_AWARD_URL,
  FIREHOUSE_AWARD_URL,
} from "./riserContent.ts";
import { absoluteAssetUrl, canonicalUrl, getSiteUrl } from "./seo.ts";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EMS Innovations, LLC",
    url: getSiteUrl(),
    logo: absoluteAssetUrl("riser-logo.jpg"),
    email: "rick@the-riser.org",
    telephone: "+1-480-710-3954",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "rick@the-riser.org",
      telephone: "+1-480-710-3954",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [EMS_WORLD_AWARD_URL, FIREHOUSE_AWARD_URL],
  };
}

export function productJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "The Riser",
    description:
      "Patient lifting device for EMS and fire crews with mechanical advantage, compact ambulance storage, and award-winning field design.",
    brand: {
      "@type": "Brand",
      name: "EMS Innovations",
    },
    manufacturer: {
      "@type": "Organization",
      name: "EMS Innovations, LLC",
    },
    image: [
      absoluteAssetUrl("riser-hero.jpg"),
      absoluteAssetUrl("RISER-action-side.jpg"),
    ],
    url: canonicalUrl("/product"),
    award: [
      "2025 EMS World Innovation Awards winner",
      "2025 Firehouse Innovation Awards winner",
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}
