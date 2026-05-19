import { Link } from "react-router-dom";
import { SpecsSection, StepsSection, ValueSection } from "../components/RiserSections.tsx";

export default function Product() {
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
            <span className="page-crumb__current">Product</span>
          </nav>
          <h1 className="page-hero__title">What is The Riser?</h1>
          <p className="page-hero__lead">
            Detailed product information, usage flow, and full feature specs for
            The Riser.
          </p>
        </div>
      </div>
      <div className="page-body about-page-body">
        <ValueSection />
        <StepsSection />
        <SpecsSection />
        <section className="about-cta">
          <div className="container about-cta__inner">
            <p className="about-cta__sub">
              Learn the story and mission behind The Riser, then reach out to
              discuss the right fit for your team.
            </p>
            <div className="about-cta__actions">
              <Link className="btn btn--primary" to="/about">
                Who We Are
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
