/**
 * Post-build: emit one HTML shell per route with correct <head> metadata.
 * Run after `vite build` via `npm run build`.
 */
import * as cheerio from "cheerio";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  getCanonicalHref,
  getHeadMetaSpecs,
  PRERENDER_HEAD_REMOVE_SELECTORS,
} from "../src/content/headTags.ts";
import { ROUTE_HTML_FILES, ROUTE_SEO } from "../src/content/seo.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.resolve(__dirname, "../../backend/frontend_build");
const TEMPLATE = path.join(BUILD_DIR, "index.html");

function applyHeadToHtml(html: string, routePath: string): string {
  const seo = ROUTE_SEO[routePath];
  if (!seo) {
    throw new Error(`No SEO config for route: ${routePath}`);
  }

  const $ = cheerio.load(html);

  for (const selector of PRERENDER_HEAD_REMOVE_SELECTORS) {
    $(selector).remove();
  }

  $("title").text(seo.title);

  const head = $("head");
  head.append(`<link rel="canonical" href="${getCanonicalHref(seo)}">`);

  for (const spec of getHeadMetaSpecs(seo)) {
    const attr = spec.attr === "name" ? "name" : "property";
    head.append(
      `<meta ${attr}="${spec.key}" content="${escapeAttr(spec.content)}">`,
    );
  }

  return $.html();
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function main() {
  const template = readFileSync(TEMPLATE, "utf-8");

  for (const [routePath, filename] of Object.entries(ROUTE_HTML_FILES)) {
    const outPath = path.join(BUILD_DIR, filename);
    const html = applyHeadToHtml(template, routePath);
    writeFileSync(outPath, html, "utf-8");
    console.log(`prerender: ${routePath} -> ${filename}`);
  }
}

main();
