import { Link } from "react-router-dom";
import JsonLd from "../components/JsonLd.tsx";
import { ProductName } from "../components/ProductName.tsx";
import { breadcrumbJsonLd } from "../content/structuredData.ts";
import {
  OshaMythbustersSection,
  OrgCaseSection,
  RiserInjuryRoiSection,
} from "../components/RiserSections.tsx";

export default function DataDriven() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "The RISER", path: "/" },
          { name: "Data-Driven", path: "/data-driven" },
        ])}
      />
      <div className="page-hero">
        <div className="container">
          <nav className="page-crumb" aria-label="Breadcrumb">
            <Link className="page-crumb__home" to="/">
              <ProductName />
            </Link>
            <span className="page-crumb__sep" aria-hidden>
              &gt;
            </span>
            <span className="page-crumb__current">Data-Driven</span>
          </nav>
          <h1 className="page-hero__title">Data-Driven</h1>
          <p className="page-hero__lead">
            Evidence and published sources on lifting injuries and ergonomics support an investment in The RISER for savings and safety.
          </p>
        </div>
      </div>
      <div className="page-body about-page-body">
        <OshaMythbustersSection />
        <RiserInjuryRoiSection />
        <OrgCaseSection />
        <section className="about-cta">
          <div className="container about-cta__inner">
            <p className="about-cta__sub">
              Explore product specs and reach out to discuss fit for your
              department or agency.
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
