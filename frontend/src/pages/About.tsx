import { Link } from "react-router-dom";
import JsonLd from "../components/JsonLd.tsx";
import { ProductName, textWithProductName } from "../components/ProductName.tsx";
import { breadcrumbJsonLd } from "../content/structuredData.ts";
import {
  ABOUT_HERO_LEAD,
  CONFERENCES_ATTENDED,
  RICK_BEEDLE_BIO,
  RICK_BEEDLE_BOOK,
  WHY_EMS_INNOVATIONS,
  WHY_INVENT_RISER,
} from "../content/aboutContent.ts";
import { AwardsSection } from "../components/RiserSections.tsx";

const asset = (path: string) =>
  import.meta.env.BASE_URL +
  path.split("/").map((segment) => encodeURIComponent(segment)).join("/");

export default function About() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "The RISER", path: "/" },
          { name: "About", path: "/about" },
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
            <span className="page-crumb__current">About</span>
          </nav>
          <h1 className="page-hero__title">About EMS Innovations</h1>
          <p className="page-hero__lead">{textWithProductName(ABOUT_HERO_LEAD)}</p>
        </div>
      </div>
      <div className="page-body about-page-body">
        <section className="about-story section">
          <div className="container about-story__inner">
            <div className="about-story__content">
              <article className="about-story__block">
                <h2>
                  Why invent <ProductName />?
                </h2>
                <p>{textWithProductName(WHY_INVENT_RISER)}</p>
              </article>
              <article className="about-story__block">
                <h2>Why EMS Innovations?</h2>
                <p>{textWithProductName(WHY_EMS_INNOVATIONS)}</p>
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
                  alt="Rick Beedle, firefighter and inventor of The RISER, standing with the device at EMS World Expo"
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

        <section className="about-founder section section--navy">
          <div className="container">
            <h2 className="about-founder__title">Rick Beedle</h2>
            <p className="about-founder__bio">
              {textWithProductName(RICK_BEEDLE_BIO)}
            </p>
            <p className="about-founder__book">{RICK_BEEDLE_BOOK}</p>
          </div>
        </section>

        <section className="about-conferences section">
          <div className="container">
            <h2 className="about-conferences__title">
              <ProductName /> was Seen At...
            </h2>
            <ul className="about-conferences__rows" role="list">
              {CONFERENCES_ATTENDED.map((entry) => {
                const isFdic = entry.id === "fdic-2025";
                return (
                  <li key={entry.id} role="listitem">
                    <a
                      className="about-conferences__row linked-card"
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${entry.name} — opens conference site in a new tab`}
                    >
                      <div
                        className={
                          "about-conferences__logo-wrap" +
                          (isFdic ? " about-conferences__logo-wrap--fdic" : "")
                        }
                      >
                        <img
                          className={
                            "about-conferences__logo" +
                            (isFdic ? " about-conferences__logo--fdic" : "")
                          }
                          src={asset(entry.logoSrc)}
                          alt=""
                          width={120}
                          height={60}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="about-conferences__details">
                        <p className="about-conferences__name">{entry.name}</p>
                        <p className="about-conferences__dates">{entry.dates}</p>
                        <p className="about-conferences__location">
                          {entry.location}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <AwardsSection />

        <section className="about-cta">
          <div className="container about-cta__inner">
            <p className="about-cta__sub">
              See how <ProductName /> fits your crew, then connect with our team
              to plan the right next step.
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
