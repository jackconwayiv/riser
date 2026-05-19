import { useEffect } from "react";
import { applyHeadTags } from "../content/headTags.ts";
import type { PageSeo } from "../content/seo.ts";

export default function PageHead(seo: PageSeo) {
  useEffect(() => {
    applyHeadTags(seo);
  }, [seo.title, seo.description, seo.path, seo.ogImage]);

  return null;
}
