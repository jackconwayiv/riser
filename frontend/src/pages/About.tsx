import { Link } from "react-router-dom";
import JsonLd from "../components/JsonLd.tsx";
import { breadcrumbJsonLd } from "../content/structuredData.ts";
import { AwardsSection, OrgCaseSection } from "../components/RiserSections.tsx";

const asset = (path: string) => import.meta.env.BASE_URL + path;

export default function About() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "The Riser", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <div className="page-hero">
        <div className="container">
          <nav className="page-crumb" aria-label="Breadcrumb">
            <Link className="page-crumb__home" to="/">
              The Riser
            </Link>
            <span className="page-crumb__sep" aria-hidden>
              &gt;
            </span>
            <span className="page-crumb__current">About</span>
          </nav>
          <h1 className="page-hero__title">About EMS Innovations</h1>
          <p className="page-hero__lead">
            The Riser was created by a firefighter to make patient lifting safer,
            smoother, and more sustainable for EMS and fire crews.
          </p>
        </div>
      </div>
      <div className="page-body about-page-body">
        <section className="about-story section">
          <div className="container about-story__inner">
            <div className="about-story__content">
              <article className="about-story__block">
                <h2>Our story</h2>
                <p>
                  EMS Innovations built The Riser around one practical objective:
                  reduce lifting injuries by improving leverage and control during
                  patient movement from ground level.
                </p>
                <p>
                  The design fits real-world EMS constraints, including tight spaces
                  where traditional equipment can be difficult to deploy quickly.
                </p>
              </article>
              <article className="about-story__block">
                <h2>Mission</h2>
                <p>
                  Help responders lift smarter with tools that respect physiology,
                  field workflows, and long-term responder health.
                </p>
              </article>
            </div>
            <figure className="about-story__portrait">
              <Link
                to="/contact"
                className="about-story__portrait-link image-link"
                aria-label="Contact Rick Beedle"
              >
                <img
                  src={asset("rick-beedle-the-riser.png")}
                  alt="Rick Beedle, firefighter and inventor of The Riser, standing with the device at EMS World Expo"
                  width={611}
                  height={861}
                  loading="lazy"
                  decoding="async"
                  className="about-story__portrait-img"
                />
              </Link>
              <figcaption className="about-story__portrait-caption">
                <span className="about-story__portrait-name">Rick Beedle</span>
                <span className="about-story__portrait-role">
                  Firefighter &amp; Inventor
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
        <AwardsSection />
        <OrgCaseSection />
        <section className="about-cta">
          <div className="container about-cta__inner">
            <p className="about-cta__sub">
              See how The Riser fits your operation, then connect with our team to
              plan the right next step.
            </p>
            <div className="about-cta__actions">
              <Link className="btn btn--primary" to="/product">
                Product Details
              </Link>
              <Link className="btn btn--ghost" to="/contact">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
