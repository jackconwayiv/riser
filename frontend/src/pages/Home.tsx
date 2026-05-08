import { Link } from "react-router-dom";
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

      <AwardsSection />

      <section className="home-position section">
        <div className="container home-position__inner">
          <p className="home-position__text">
            A new type of patient lifting device created by a{" "}
            <strong className="home-emphasis">firefighter</strong> specifically
            for <strong className="home-emphasis">EMS</strong> use.
          </p>
        </div>
      </section>

      <ValueSection />
      <StepsSection />

      <HomeTikTokBlock />

      <SpecsSection />
      <MechanicalAdvantageVideoSection />
      <OrgCaseSection />

      <section className="about-cta about-cta--gold">
        <div className="container about-cta__inner">
          <p className="about-cta__lead">
            The cost of{" "}
            <img
              className="about-cta__logo-inline"
              src={asset("riser-logo.jpg")}
              alt="The Riser"
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
            Learn more about how The Riser can benefit your operations.
          </p>
          <Link className="btn btn--primary" to="/about">
            About the Riser
          </Link>
          <Link className="btn btn--secondary" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
