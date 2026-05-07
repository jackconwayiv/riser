import { useState } from "react";
import { Link } from "react-router-dom";

const asset = (path: string) => import.meta.env.BASE_URL + path;

type OrgStatAccent = "fire" | "ems" | "neutral";

const ORG_STATS: {
  id: string;
  agency: string;
  body: string;
  accent: OrgStatAccent;
}[] = [
  {
    id: "nih",
    agency: "NIH",
    body: "53% of EMS injuries are caused by strains or sprains. 51% of which occurred when moving a patient NOT involving a gurney.",
    accent: "neutral",
  },
  {
    id: "naemt",
    agency: "NAEMT",
    body: "1 in 4 EMS workers will suffer a career-ending back injury within the first 4 years of service.",
    accent: "neutral",
  },
  {
    id: "niosh",
    agency: "NIOSH",
    body: "$1,600 daily cost of EMS worker absence.",
    accent: "ems",
  },
  {
    id: "nfpa",
    agency: "NFPA",
    body: "52% of firefighter injuries are strains or sprains. 30% of lost time is due to strains or sprains.",
    accent: "fire",
  },
  {
    id: "iaff",
    agency: "IAFF",
    body: "50% of firefighter disability retirements stem from an on-duty back injury.",
    accent: "fire",
  },
  {
    id: "osha-cost",
    agency: "OSHA",
    body: "$32,023 average cost of workplace strain injury.",
    accent: "ems",
  },
  {
    id: "cdc",
    agency: "CDC",
    body: "Mechanical lifting devices reduce healthcare worker injuries by 66%.",
    accent: "ems",
  },
  {
    id: "osha-lift",
    agency: "OSHA",
    body: "Safe patient handling programs that include mechanical lifts reduce lifting injuries by 95%.",
    accent: "neutral",
  },
  {
    id: "nist",
    agency: "NIST",
    body: "$50,000–$200,000 annual cost of firefighter injuries per fire department.",
    accent: "ems",
  },
];

/** Canonical embed id (short link https://www.tiktok.com/t/ZP8pFvhfb/ resolves here). */
const TIKTOK_EMBED_ID = "7566261149524643085";
const TIKTOK_PAGE_URL = "https://www.tiktok.com/t/ZP8pFvhfb/";

function HomeTikTokBlock() {
  const [showEmbed, setShowEmbed] = useState(false);
  const embedSrc = `https://www.tiktok.com/embed/v2/${TIKTOK_EMBED_ID}`;

  return (
    <section
      className="home-tiktok section section--alt"
      aria-labelledby="home-tiktok-heading"
    >
      <div className="container">
        <h2 id="home-tiktok-heading" className="section__title">
          See it in action
        </h2>
        <div className="home-tiktok__wrap">
          {showEmbed ? (
            <iframe
              src={embedSrc}
              title="The Riser — TikTok video"
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
        <p className="home-tiktok__footnote">
          <a href={TIKTOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
            Open on TikTok
          </a>
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div
          className="hero__photo"
          style={{ backgroundImage: `url(${asset("riser-hero.jpg")})` }}
          aria-hidden
        />
        <div
          className="hero__svgwash"
          style={{ backgroundImage: `url(${asset("hero.svg")})` }}
          aria-hidden
        />
        <div className="hero__scrim" aria-hidden />
        <div className="hero__inner">
          <span className="hero__eyebrow">EMS Innovations</span>
          <h1 id="hero-heading" className="hero__title">
            <img
              className="hero__logo"
              src={asset("riser-logo.jpg")}
              alt="The Riser"
              width={640}
              height={180}
              fetchPriority="high"
              decoding="async"
            />
          </h1>
          <p className="hero__tagline">Lift Smarter. Not Harder.</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/product">
              Explore the product
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section
        className="home-awards section section--alt"
        aria-labelledby="home-awards-heading"
      >
        <div className="container">
          <h2 id="home-awards-heading" className="visually-hidden">
            Recognition
          </h2>
          <div className="home-awards__grid">
            <figure className="home-awards__figure">
              <img
                src={asset("inno-winner.jpg")}
                alt="2025 EMS World Innovation Awards finalist badge"
                width={280}
                height={140}
                loading="lazy"
                decoding="async"
                className="home-awards__img"
              />
              <figcaption className="home-awards__caption">
                2025 EMS World Innovation Awards — finalist
              </figcaption>
            </figure>
            <figure className="home-awards__figure">
              <img
                src={asset("firehouse-innovation.jpg")}
                alt="Firehouse Innovation Awards 2025 winner"
                width={280}
                height={140}
                loading="lazy"
                decoding="async"
                className="home-awards__img"
              />
              <figcaption className="home-awards__caption">
                Firehouse Innovation Awards 2025 — winner
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="home-position section">
        <div className="container home-position__inner">
          <p className="home-position__text">
            A new type of patient lifting device created by a{" "}
            <strong className="home-emphasis">firefighter</strong> specifically
            for <strong className="home-emphasis">EMS</strong> use.
          </p>
        </div>
      </section>

      <section
        className="home-value section section--alt home-value--border"
        aria-labelledby="home-value-heading"
      >
        <div className="container">
          <h2 id="home-value-heading" className="visually-hidden">
            Why The Riser
          </h2>
          <p className="home-value__lead">
            The first and only portable lifting device that reduces the amount of
            force needed to lift a patient by providing a stable platform and
            leverage, yielding a{" "}
            <strong className="home-value__stat">6:1 mechanical advantage</strong>{" "}
            for two users. A{" "}
            <strong className="home-value__stat">300 lb</strong> patient can be
            lifted using only <strong className="home-value__stat">50 lb</strong>{" "}
            of force.
          </p>
          <div className="home-value__actions">
            <Link className="btn btn--primary" to="/product">
              View specifications
            </Link>
            <Link className="btn btn--secondary" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section
        className="home-steps section"
        aria-labelledby="home-steps-heading"
      >
        <div className="container">
          <h2 id="home-steps-heading" className="home-steps__title">
            How it works
          </h2>
          <ol className="home-steps__grid">
            <li className="home-step">
              <span className="home-step__num" aria-hidden>
                1
              </span>
              <p className="home-step__text">
                Seatbelt your patient and set wheel brakes.
              </p>
            </li>
            <li className="home-step">
              <span className="home-step__num" aria-hidden>
                2
              </span>
              <p className="home-step__text">
                Release flat lock and lift or pull straps.
              </p>
            </li>
            <li className="home-step">
              <span className="home-step__num" aria-hidden>
                3
              </span>
              <p className="home-step__text">
                Lift until you hear the auto-lock click.
              </p>
            </li>
            <li className="home-step">
              <span className="home-step__num" aria-hidden>
                4
              </span>
              <p className="home-step__text">
                Disengage wheel brakes and roll.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <HomeTikTokBlock />

      <section
        className="home-specs section section--alt"
        aria-labelledby="home-specs-heading"
      >
        <div className="container">
          <h2 id="home-specs-heading" className="section__title">
            Specifications and features
          </h2>
          <div className="home-specs__layout">
            <div className="home-specs__media home-specs__media--left">
              <img
                src={asset("RISER Ambulance Storage.jpg")}
                alt="The Riser stored vertically in an ambulance backboard compartment next to a yellow backboard"
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                className="home-specs__img"
              />
            </div>
            <ul className="home-specs__list">
              <li>
                <span className="home-specs__label">Size:</span> Same length and
                width as a backboard (17&quot; × 72&quot;).
              </li>
              <li>
                <span className="home-specs__label">Storage:</span> Backboard
                compartment — no modifications needed.
              </li>
              <li>
                <span className="home-specs__label">Materials:</span> Stainless
                steel with HDPE (high-density polyethylene) seating and backrest
                inset into the steel.
              </li>
              <li>
                <span className="home-specs__label">Cleaning:</span> All
                non-porous materials — just spray and wipe.
              </li>
              <li>
                <span className="home-specs__label">Portability:</span> Locks
                flat and rolls like airline luggage.
              </li>
              <li>
                <span className="home-specs__label">Usability:</span> Lift from
                rear or sides; pull straps from front.
              </li>
              <li>
                <span className="home-specs__label">Mobility:</span> Rear caster
                wheels allow 360° rotation.
              </li>
            </ul>
            <div className="home-specs__media home-specs__media--right">
              <img
                src={asset("riser-logo.jpg")}
                alt="The Riser logo"
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="home-specs__img home-specs__img--logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="home-org-case section section--alt"
        aria-labelledby="home-org-heading"
      >
        <div className="container">
          <header className="home-org-case__intro">
            <h2 id="home-org-heading" className="home-org-case__title">
              Why should my organization buy{" "}
              <img
                className="home-org-case__title-logo"
                src={asset("riser-logo.jpg")}
                alt="The Riser"
                width={200}
                height={56}
                loading="lazy"
                decoding="async"
              />
              ?
            </h2>
          </header>

          <div className="home-org-case__endorse">
            <div className="home-org-case__endorse-badge" aria-hidden>
              USFA
            </div>
            <figure className="home-org-case__endorse-quote">
              <blockquote cite="https://www.usfa.fema.gov/">
                <p>
                  Ergonomic interventions are recommended tools to reduce the risk
                  of musculoskeletal industrial injuries … by implementing the use
                  of equipment that can reduce physical demands.
                </p>
              </blockquote>
              <figcaption className="home-org-case__endorsecite">
                Source: U.S. Fire Administration
              </figcaption>
            </figure>
          </div>

          <div className="home-org-case__stats-wrap">
            <h3 id="home-org-stats-heading" className="home-org-case__stats-lead">
              Supporting research and statistics
            </h3>
            <div
              className="home-org-case__stat-grid"
              role="list"
              aria-labelledby="home-org-stats-heading"
            >
              {ORG_STATS.map((item) => (
                <article
                  key={item.id}
                  className={`home-stat-card home-stat-card--${item.accent}`}
                  role="listitem"
                >
                  <h4 className="home-stat-card__agency">{item.agency}</h4>
                  <p className="home-stat-card__body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="home-org-case__roi">
            <div className="home-org-case__roi-brand">
              <img
                src={asset("ems-innovations.jpg")}
                alt="EMS Innovations"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                className="home-org-case__roi-img"
              />
            </div>
            <p className="home-org-case__roi-text">
              The cost of{" "}
              <img
                className="home-org-case__roi-inline-logo"
                src={asset("riser-logo.jpg")}
                alt="The Riser"
                width={140}
                height={40}
                loading="lazy"
                decoding="async"
              />{" "}
              will be recouped with the prevention of a single injury of just one
              employee and will continue to save the organization money
              exponentially over its lifespan.
            </p>
          </div>
        </div>
      </section>

      <section className="home-ems" aria-labelledby="home-ems-heading">
        <div className="container home-ems__inner">
          <div className="home-ems__brand">
            <img
              src={asset("ems-innovations.jpg")}
              alt="EMS Innovations"
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
              className="home-ems__logo"
            />
          </div>
          <div className="home-ems__contact">
            <h2 id="home-ems-heading" className="home-ems__title">
              EMS Innovations, LLC
            </h2>
            <p className="home-ems__line">
              <a
                className="home-ems__link"
                href="https://www.ems-innovations.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.ems-innovations.com
              </a>
            </p>
            <p className="home-ems__line">
              <a className="home-ems__link" href="tel:+14807103954">
                480-710-3954
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
