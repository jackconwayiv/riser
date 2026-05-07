import type { FormEvent } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

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
            <span className="page-crumb__current">Contact</span>
          </nav>
          <h1 className="page-hero__title">Contact Us</h1>
          <p className="page-hero__lead">
            Reach the team behind The Riser for sales, support, or partnerships.
          </p>
        </div>
      </div>
      <div className="page-body">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <p style={{ marginTop: 0 }}>
                <strong>Contact</strong>
              </p>
              <p>Rick Beedle</p>
              <p>Firefighter &amp; Inventor</p>
              <p>
                <a href="mailto:rbeedle@ems-innovations.com">
                  rbeedle@ems-innovations.com
                </a>
              </p>
              <p style={{ marginTop: "1rem" }}>
                <strong>Phone</strong>
              </p>
              <p>
                <a href="tel:+14807103954">480-710-3954</a>
              </p>
              <p style={{ marginTop: "1rem" }}>
                <strong>Website</strong>
              </p>
              <p>
                <a
                  href="https://www.ems-innovations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ems-innovations.com
                </a>
              </p>
            </div>
            <div className="contact-card">
              <h2>Send a message</h2>
              <form onSubmit={onSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" required />
                </div>
                <button type="submit" className="btn btn--primary" disabled>
                  Send message
                </button>
                <p
                  style={{
                    marginTop: "14px",
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Coming soon.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
