import { Link } from "react-router-dom";
import {
  EMS_WORLD_AWARD_URL,
  FIREHOUSE_AWARD_URL,
  ORG_STATS,
  RISER_SPECS,
  RISER_STEPS,
} from "../content/riserContent.ts";

const asset = (path: string) => import.meta.env.BASE_URL + path;

export function AwardsSection() {
  return (
    <section className="home-awards section section--alt">
      <div className="container">
        <h2 className="section__title home-awards__title">Recognition</h2>
        <div className="home-awards__grid">
          <figure className="home-awards__figure">
            <a
              href={EMS_WORLD_AWARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-awards__link image-link"
            >
              <img
                src={asset("inno-winner.jpg")}
                alt="2025 EMS World Innovation Awards finalist badge"
                width={280}
                height={140}
                loading="lazy"
                decoding="async"
                className="home-awards__img"
              />
            </a>
            <figcaption className="home-awards__caption">
              2025 EMS World Innovation Awards - finalist
            </figcaption>
          </figure>
          <figure className="home-awards__figure">
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
            <figcaption className="home-awards__caption">
              Firehouse Innovation Awards 2025 - winner
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function ValueSection() {
  return (
    <section className="home-value section section--alt home-value--border">
      <div className="container">
        <h2 className="section__title home-value__title">Why The Riser</h2>
        <p className="home-value__lead">
          The first and only portable lifting device that reduces the amount of
          force needed to lift a patient by providing a stable platform and
          leverage, yielding a{" "}
          <strong className="home-value__stat">6:1 mechanical advantage</strong>{" "}
          for two users. A <strong className="home-value__stat">300 lb</strong>{" "}
          patient can be lifted using only{" "}
          <strong className="home-value__stat">50 lb</strong> of force.
        </p>
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
        <h2 className="home-steps__title">How it works</h2>
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
        <h2 className="section__title">Specifications and features</h2>
        <div className="home-specs__layout">
          <div className="home-specs__media home-specs__media--left">
            <img
              src={asset("RISER Ambulance Storage.jpg")}
              alt="The Riser stored vertically in an ambulance backboard compartment next to a yellow backboard"
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
              alt="The Riser shown side by side in deployed and compact profile views"
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

export function OrgCaseSection() {
  return (
    <section className="home-org-case section section--alt">
      <div className="container">
        <header className="home-org-case__intro">
          <h2 className="home-org-case__title">
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
                of musculoskeletal industrial injuries ... by implementing the use
                of equipment that can reduce physical demands.
              </p>
            </blockquote>
            <figcaption className="home-org-case__endorsecite">
              Source: U.S. Fire Administration
            </figcaption>
          </figure>
        </div>

        <div className="home-org-case__stats-wrap">
          <div className="home-org-case__stat-grid" role="list">
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
  );
}
