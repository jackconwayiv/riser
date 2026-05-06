import { NavLink, Outlet } from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  "nav-link" + (isActive ? " nav-link--active" : "");

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <NavLink className="site-logo" to="/" end>
          The Riser
        </NavLink>
        <nav className="site-nav" aria-label="Primary">
          <NavLink className={navClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={navClass} to="/product">
            Product
          </NavLink>
          <NavLink className={navClass} to="/about">
            About
          </NavLink>
          <NavLink className={navClass} to="/contact">
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
