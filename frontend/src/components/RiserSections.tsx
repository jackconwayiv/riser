import { Link } from "react-router-dom";
import { ProductName, textWithProductName } from "./ProductName.tsx";
import { PRODUCT_NAME } from "../content/brand.ts";
import {
  EMS_WORLD_AWARD_QUOTE,
  EMS_WORLD_AWARD_QUOTE_ATTRIBUTION,
  EMS_WORLD_AWARD_URL,
  FIREHOUSE_AWARD_QUOTE,
  FIREHOUSE_AWARD_QUOTE_ATTRIBUTION,
  FIREHOUSE_AWARD_URL,
  ORG_STATS,
  RISER_SPECS,
  RISER_STEPS,
  USFA_ERGONOMICS_WELLNESS_PDF_URL,
} from "../content/riserContent.ts";

const asset = (path: string) => import.meta.env.BASE_URL + path;

export function AwardsSection() {
  return (
    <section
      className="home-awards section section--alt"
      aria-label="Recognition"
    >
      <div className="container">
        <div className="home-awards__grid">
          <figure className="home-awards__figure">
            <figcaption className="home-awards__caption">
              2025 EMS World Innovation Awards Winner
            </figcaption>
            <a
              href={EMS_WORLD_AWARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-awards__link image-link"
            >
              <img
                src={asset("inno-winner.jpg")}
                alt="2025 EMS World Innovation Awards winner badge"
                width={280}
                height={140}
                loading="lazy"
                decoding="async"
                className="home-awards__img"
              />
            </a>
            <blockquote className="home-awards__quote" cite={EMS_WORLD_AWARD_URL}>
              <p>{textWithProductName(EMS_WORLD_AWARD_QUOTE)}</p>
              <footer className="home-awards__quote-cite">
                —{EMS_WORLD_AWARD_QUOTE_ATTRIBUTION}
              </footer>
            </blockquote>
          </figure>
          <figure className="home-awards__figure">
            <figcaption className="home-awards__caption">
              Firehouse Innovation Awards 2025 Winner
            </figcaption>
            <a
              href={FIREHOUSE_AWARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-awards__link image-link"
            >
              <img
                src={asset("firehouse-2025.png")}
                alt="Firehouse Innovation Awards 2025 winner"
                width={280}
                height={140}
                loading="lazy"
                decoding="async"
                className="home-awards__img"
              />
            </a>
            <blockquote className="home-awards__quote" cite={FIREHOUSE_AWARD_URL}>
              <p>{textWithProductName(FIREHOUSE_AWARD_QUOTE)}</p>
              <footer className="home-awards__quote-cite">
                —{FIREHOUSE_AWARD_QUOTE_ATTRIBUTION}
              </footer>
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function ValueSection() {
  return (
    <section className="home-value section section--alt">
      <div className="container">
        <h2 className="section__title home-value__title">
          Why <ProductName />?
        </h2>
        <div className="home-value__layout">
          <figure className="home-value__media">
            <img
              src={asset("RISER-action-side.jpg")}
              alt="Side view of The RISER in active use"
              width={320}
              height={240}
              loading="lazy"
              decoding="async"
              className="home-value__img"
            />
          </figure>
          <p className="home-value__lead">
            The first and only portable lifting device that reduces the amount of
            force needed to lift a patient by providing a stable platform and
            leverage, yielding a{" "}
            <strong className="home-value__stat">6:1 mechanical advantage</strong>{" "}
            for two users. A <strong className="home-value__stat">300 lb</strong>{" "}
            patient can be lifted using only{" "}
            <strong className="home-value__stat">50 lb</strong> of force.
          </p>
          <figure className="home-value__media">
            <img
              src={asset("RISER-action-angle.jpg")}
              alt="Angled view of The RISER in active use"
              width={320}
              height={240}
              loading="lazy"
              decoding="async"
              className="home-value__img"
            />
          </figure>
        </div>
        <div className="home-value__actions">
          <Link className="btn btn--primary" to="/product#specifications-features">
            View specifications
          </Link>
          <Link className="btn btn--secondary" to="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export function StepsSection() {
  return (
    <section className="home-steps section">
      <div className="container">
        <h2 className="home-steps__title">
          How <ProductName /> Works:
        </h2>
        <ol className="home-steps__grid">
          {RISER_STEPS.map((step, idx) => (
            <li key={step} className="home-step">
              <span className="home-step__num" aria-hidden>
                {idx + 1}
              </span>
              <p className="home-step__text">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SpecsSection() {
  return (
    <section
      id="specifications-features"
      className="home-specs section section--alt"
    >
      <div className="container">
        <h2 className="section__title">Specifications and Features:</h2>
        <div className="home-specs__layout">
          <div className="home-specs__media home-specs__media--left">
            <img
              src={asset("RISER Ambulance Storage.jpg")}
              alt="The RISER stored vertically in an ambulance backboard compartment next to a yellow backboard"
              width={400}
              height={500}
              loading="lazy"
              decoding="async"
              className="home-specs__img home-specs__img--crop-frame"
            />
          </div>
          <ul className="home-specs__list">
            {RISER_SPECS.map((spec) => (
              <li key={spec.label}>
                <span className="home-specs__label">{spec.label}:</span>{" "}
                {spec.body}
              </li>
            ))}
          </ul>
          <div className="home-specs__media home-specs__media--right">
            <img
              src={asset("side-by-side.jpg")}
              alt="The RISER shown side by side in deployed and compact profile views"
              width={400}
              height={500}
              loading="lazy"
              decoding="async"
              className="home-specs__img home-specs__img--crop-frame"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function MechanicalAdvantageVideoSection() {
  const videoSrc =
    import.meta.env.BASE_URL + encodeURI("EMS WORLD PROMO.mov");

  return (
    <section
      className="home-mechanical-promo section"
      aria-labelledby="mechanical-advantage-video-heading"
    >
      <div className="container">
        <h2
          id="mechanical-advantage-video-heading"
          className="home-mechanical-promo__title"
        >
          <ProductName /> Gives a Pair of Operators a 6:1 Mechanical Advantage
        </h2>
        <div className="home-mechanical-promo__frame">
          <video
            className="home-mechanical-promo__video"
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            aria-label={`Promotional video: ${PRODUCT_NAME} 6:1 mechanical advantage (EMS World)`}
          >
            Your browser does not support embedded video.{" "}
            <a className="home-mechanical-promo__fallback" href={videoSrc}>
              Download the video
            </a>
            .
          </video>
        </div>
      </div>
    </section>
  );
}

export function OrgCaseSection() {
  return (
    <section className="home-org-case section">
      <div className="container">
        <header className="home-org-case__intro">
          <h2 className="home-org-case__title">
            Why should my organization buy <ProductName />?
          </h2>
        </header>

        <div className="home-org-case__endorse">
          <a
            className="home-org-case__endorse-link image-link"
            href={USFA_ERGONOMICS_WELLNESS_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open U.S. Fire Administration Emergency Services: Ergonomics and Wellness (PDF, new tab)"
          >
            <img
              className="home-org-case__logo"
              src={asset("stats/US Fire Admin logo.png")}
              alt="U.S. Fire Administration"
              width={120}
              height={60}
              loading="lazy"
              decoding="async"
            />
            <figure className="home-org-case__endorse-quote">
              <blockquote cite={USFA_ERGONOMICS_WELLNESS_PDF_URL}>
                <p>
                  Ergonomic interventions are recommended tools to reduce the risk
                  of musculoskeletal industrial injuries ... by implementing the use
                  of equipment that can reduce physical demands.
                </p>
              </blockquote>
              <figcaption className="home-org-case__source-cite">
                Source: U.S. Fire Administration
              </figcaption>
            </figure>
          </a>
        </div>

        <div className="home-org-case__stats-wrap">
          <div className="home-org-case__stat-grid" role="list">
            {ORG_STATS.map((item) => {
              const inner = (
                <div className="home-stat-card__row">
                  <img
                    className="home-org-case__logo"
                    src={asset(item.logoSrc)}
                    alt=""
                    width={120}
                    height={60}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="home-stat-card__text">
                    <p className="home-stat-card__body">{item.body}</p>
                    <p className="home-stat-card__source home-org-case__source-cite">
                      Source: {item.agency}
                    </p>
                  </div>
                </div>
              );

              return (
                <article
                  key={item.id}
                  className={`home-stat-card${
                    item.sourceUrl ? " home-stat-card--linked" : ""
                  }`}
                  role="listitem"
                >
                  {item.sourceUrl ? (
                    <a
                      className="home-stat-card__link linked-card"
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${item.agency} source document (opens in new tab)`}
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
