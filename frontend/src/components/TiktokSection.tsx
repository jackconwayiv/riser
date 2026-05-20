import { ProductName } from "./ProductName.tsx";
import { PRODUCT_NAME } from "../content/brand.ts";

/** Canonical embed id (short link https://www.tiktok.com/t/ZP8pFvhfb/ resolves here). */
const TIKTOK_EMBED_ID = "7566261149524643085";

export function HomeTikTokBlock() {
  const embedSrc = `https://www.tiktok.com/player/v1/${TIKTOK_EMBED_ID}?autoplay=0`;

  return (
    <section className="home-tiktok section section--alt">
      <div className="container">
        <h2 className="section__title">
          Watch how <ProductName /> makes lifting easy even in tight places
        </h2>
        <div className="home-tiktok__wrap">
          <iframe
            src={embedSrc}
            title={`${PRODUCT_NAME} - TikTok video`}
            allow="encrypted-media; picture-in-picture; fullscreen; accelerometer; gyroscope"
            className="home-tiktok__iframe"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
