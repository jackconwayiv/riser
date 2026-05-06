import type { FormEvent } from "react";

export default function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Contact</h1>
          <p className="page-hero__lead">
            Reach the team behind The Riser for sales, support, or partnerships.
          </p>
        </div>
      </div>
      <div className="page-body">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <h2>Direct</h2>
              <p>
                <strong>Email</strong>
              </p>
              <p>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </p>
              <p style={{ marginTop: "1rem" }}>
                <strong>Hours</strong>
              </p>
              <p>Monday–Friday, 9am–5pm (your timezone)</p>
              <p style={{ marginTop: "1rem", fontSize: "0.92rem" }}>
                Replace the placeholder email and hours with your real contact
                details.
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
                <button type="submit" className="btn btn--primary">
                  Send message
                </button>
                <p
                  style={{
                    marginTop: "14px",
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                  }}
                >
                  This form is front-end only for now—wire it to your API or form
                  provider when you are ready.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
