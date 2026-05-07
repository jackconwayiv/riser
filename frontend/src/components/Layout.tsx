import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  "nav-link" + (isActive ? " nav-link--active" : "");

const NAV_MQ = "(max-width: 900px)";

export default function Layout() {
  const year = new Date().getFullYear();
  const location = useLocation();
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
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {narrowNav && navOpen ? (
        <div
          className="site-nav-backdrop"
          aria-hidden
          onClick={closeNav}
        />
      ) : null}
      <header className="site-header">
        <NavLink className="site-logo" to="/" end>
          The Riser
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
          <div>
            <p className="site-footer__brand">The Riser</p>
            <p className="site-footer__tagline">
              Lift Smarter. Not Harder.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <p className="site-footer__copy">
            © {year} The Riser. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
