import { useState } from "react";

/** Canonical embed id (short link https://www.tiktok.com/t/ZP8pFvhfb/ resolves here). */
const TIKTOK_EMBED_ID = "7566261149524643085";

export function HomeTikTokBlock() {
  const [showEmbed, setShowEmbed] = useState(false);
  const embedSrc = `https://www.tiktok.com/embed/v2/${TIKTOK_EMBED_ID}`;

  return (
    <section className="home-tiktok section section--alt">
      <div className="container">
        <h2 className="section__title">
          Watch how The RISER makes lifting easy even in tight places:
        </h2>
        <div className="home-tiktok__wrap">
          {showEmbed ? (
            <iframe
              src={embedSrc}
              title="The Riser - TikTok video"
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="home-tiktok__iframe"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button
              type="button"
              className="home-tiktok__poster"
              onClick={() => setShowEmbed(true)}
              aria-label="Load and play TikTok video"
            >
              <span className="home-tiktok__poster-play" aria-hidden>
                <svg
                  className="home-tiktok__poster-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </span>
              <span className="home-tiktok__poster-text">Play video</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
