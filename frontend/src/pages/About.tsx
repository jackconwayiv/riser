import { Link } from "react-router-dom";
import { AwardsSection, OrgCaseSection } from "../components/RiserSections.tsx";

export default function About() {
  return (
    <>
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
