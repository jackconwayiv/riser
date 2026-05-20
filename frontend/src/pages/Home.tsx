import { Link } from "react-router-dom";
import JsonLd from "../components/JsonLd.tsx";
import { ProductName } from "../components/ProductName.tsx";
import { PRODUCT_NAME } from "../content/brand.ts";
import { productJsonLd } from "../content/structuredData.ts";
import {
  AwardsSection,
  MechanicalAdvantageVideoSection,
  OrgCaseSection,
  SpecsSection,
  StepsSection,
  ValueSection,
} from "../components/RiserSections.tsx";
import { HomeTikTokBlock } from "../components/TiktokSection.tsx";

const asset = (path: string) => import.meta.env.BASE_URL + path;

export default function Home() {
  return (
    <>
      <JsonLd data={productJsonLd()} />
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
        <div className="hero__inner">
          <p className="hero__lead">
          <strong className="hero__emphasis">The RISER</strong> is a new type of patient lifting device created by a{" "}
            <strong className="hero__emphasis">firefighter</strong> specifically
            for <strong className="hero__emphasis">EMS</strong> use
          </p>
          <h1 id="hero-heading" className="hero__title">
            <img
              className="hero__logo"
              src={asset("riser-logo.jpg")}
              alt={PRODUCT_NAME}
              width={1242}
              height={620}
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

      <AwardsSection />

      <section className="home-position section">
        <div className="container home-position__inner">
          <p className="home-position__text">
            Not a stair chair.
            <br /><br />
            <ProductName /> is a <strong className="home-emphasis">new</strong> type
            of patient lifting device.
          </p>
        </div>
      </section>

      <ValueSection />
      <StepsSection />

      <HomeTikTokBlock />

      <SpecsSection />
      <MechanicalAdvantageVideoSection />
      <OrgCaseSection />

      <section className="about-cta">
        <div className="container about-cta__inner">
          <p className="about-cta__lead">
            The cost of{" "}
            <img
              className="about-cta__logo-inline"
              src={asset("RISER-logo-transparent.png")}
              alt={PRODUCT_NAME}
              width={200}
              height={56}
              loading="lazy"
              decoding="async"
            />{" "}
            will be recouped with the prevention of a single injury of just one
            employee and will continue to save the organization money exponentially
            over its lifespan.
          </p>
          <p className="about-cta__sub">
            Learn more about how <ProductName /> can benefit your operations.
          </p>
          <div className="about-cta__actions">
            <Link className="btn btn--primary" to="/about">
              About <ProductName />
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
