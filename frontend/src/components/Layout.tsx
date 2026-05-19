import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import PageHead from "./PageHead.tsx";
import JsonLd from "./JsonLd.tsx";
import { getSeoForPath } from "../content/seo.ts";
import { organizationJsonLd } from "../content/structuredData.ts";
import {
  EMS_WORLD_AWARD_URL,
  FIREHOUSE_AWARD_URL,
} from "../content/riserContent.ts";

const navClass = ({ isActive }: { isActive: boolean }) =>
  "nav-link" + (isActive ? " nav-link--active" : "");

const NAV_MQ = "(max-width: 900px)";
const asset = (path: string) => import.meta.env.BASE_URL + path;

export default function Layout() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const seo = getSeoForPath(location.pathname);
  const [navOpen, setNavOpen] = useState(false);
  const [narrowNav, setNarrowNav] = useState(
    () => typeof window !== "undefined" && window.matchMedia(NAV_MQ).matches,
  );
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mq = window.matchMedia(NAV_MQ);
    const onChange = () => {
      const next = mq.matches;
      setNarrowNav(next);
      if (!next) setNavOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    // Close mobile menu on in-app navigation (including browser back/forward).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync UI to URL
    setNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!navOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setNavOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);
  const toggleNav = () => setNavOpen((o) => !o);

  return (
    <>
      <PageHead {...seo} />
      <JsonLd data={organizationJsonLd()} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-topbar">
        <div className="site-topbar__inner">
          <a href="mailto:rick@the-riser.org" className="site-topbar__item">
            <FaEnvelope aria-hidden className="site-topbar__icon" />
            rick@the-riser.org
          </a>
          <span aria-hidden>•</span>
          <a href="tel:+14807103954" className="site-topbar__item">
            <FaPhone aria-hidden className="site-topbar__icon" />
            480-710-3954
          </a>
        </div>
      </div>
      {narrowNav && navOpen ? (
        <div
          className="site-nav-backdrop"
          aria-hidden
          onClick={closeNav}
        />
      ) : null}
      <header className="site-header">
        <NavLink className="site-logo" to="/" end>
          <img
            src={asset("riser-logo.jpg")}
            alt="The Riser"
            width={220}
            height={62}
            className="site-logo__img"
          />
        </NavLink>
        <button
          ref={toggleRef}
          type="button"
          className={
            "site-nav-toggle" + (navOpen ? " site-nav-toggle--open" : "")
          }
          aria-expanded={navOpen}
          aria-controls="primary-nav"
          id="primary-nav-toggle"
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={toggleNav}
        >
          <span className="site-nav-toggle__bar" aria-hidden />
          <span className="site-nav-toggle__bar" aria-hidden />
          <span className="site-nav-toggle__bar" aria-hidden />
        </button>
        <nav
          id="primary-nav"
          className={"site-nav" + (navOpen ? " site-nav--open" : "")}
          aria-label="Primary"
          aria-hidden={narrowNav && !navOpen ? true : undefined}
        >
          <NavLink className={navClass} to="/" end onClick={closeNav}>
            Home
          </NavLink>
          <NavLink className={navClass} to="/product" onClick={closeNav}>
            Product
          </NavLink>
          <NavLink className={navClass} to="/about" onClick={closeNav}>
            About
          </NavLink>
          <NavLink className={navClass} to="/contact" onClick={closeNav}>
            Contact
          </NavLink>
        </nav>
      </header>
      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__col site-footer__col--brand">
            <NavLink to="/" className="site-footer__logo-link image-link">
              <img
                src={asset("riser-logo.jpg")}
                alt="The Riser"
                width={220}
                height={62}
                className="site-footer__logo"
              />
            </NavLink>
            <p className="site-footer__tagline">
              Lift Smarter. Not Harder.
            </p>
          </div>
          <div className="site-footer__col">
            <nav className="footer-nav" aria-label="Footer">
              <NavLink to="/product">Product</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div className="site-footer__awards" aria-label="Recognition awards">
              <a
                href={EMS_WORLD_AWARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__award-link image-link"
              >
                <img
                  src={asset("inno-winner.jpg")}
                  alt="2025 EMS World Innovation Awards winner badge"
                  width={140}
                  height={70}
                  className="site-footer__award-img"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a
                href={FIREHOUSE_AWARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__award-link image-link"
              >
                <img
                  src={asset("firehouse-2025.png")}
                  alt="Firehouse Innovation Awards 2025 winner"
                  width={140}
                  height={70}
                  className="site-footer__award-img"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
          <div className="site-footer__col site-footer__col--contact">
            <p className="site-footer__contact-name">Rick Beedle</p>
            <p className="site-footer__contact-role">Firefighter &amp; Inventor</p>
            <p className="site-footer__contact-line">
              <a href="mailto:rick@the-riser.org">
                <FaEnvelope aria-hidden className="site-footer__contact-icon" />
                rick@the-riser.org
              </a>
            </p>
            <p className="site-footer__contact-line">
              <a href="tel:+14807103954">
                <FaPhone aria-hidden className="site-footer__contact-icon" />
                480-710-3954
              </a>
            </p>
            <NavLink
              to="/about"
              className="site-footer__ems-logo-link image-link"
            >
              <img
                src={asset("ems-innovations.jpg")}
                alt="EMS Innovations"
                width={120}
                height={120}
                className="site-footer__ems-logo"
                loading="lazy"
                decoding="async"
              />
            </NavLink>
          </div>
          <p className="site-footer__copy">
            © {year}{" "}
            <NavLink to="/about" className="site-footer__copy-link">
              EMS Innovations, LLC
            </NavLink>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
