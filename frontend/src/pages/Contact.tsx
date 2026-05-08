import { useEffect, useRef, useState, type FormEvent } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

type Status = "idle" | "sending" | "ok" | "error";
type Errors = Partial<Record<"name" | "email" | "message" | "form", string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hasLetterRegex = /[\p{L}]/u;
const urlRegex = /https?:\/\//gi;

function validateForm(name: string, email: string, message: string): Errors {
  const errors: Errors = {};

  if (name.length < 2 || name.length > 100) {
    errors.name = "Name must be between 2 and 100 characters.";
  } else if (!hasLetterRegex.test(name) || name.includes("<") || name.includes(">")) {
    errors.name = "Please enter a valid name.";
  }

  if (email.length > 254 || !emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const urlMatches = message.match(urlRegex);
  if (message.length < 10 || message.length > 5000) {
    errors.message = "Message must be between 10 and 5000 characters.";
  } else if ((urlMatches?.length ?? 0) > 3) {
    errors.message = "Too many links in message.";
  }

  return errors;
}

export default function Contact() {
  const mountedAtRef = useRef<number>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const nextErrors = validateForm(trimmedName, trimmedEmail, trimmedMessage);
    const deltaMs = Date.now() - mountedAtRef.current;
    if (deltaMs < 2000) {
      nextErrors.form = "Please wait a moment before submitting.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          website,
          mountedAt: mountedAtRef.current,
        }),
      });

      if (response.status === 202) {
        setName("");
        setEmail("");
        setMessage("");
        setWebsite("");
        setErrors({});
        setStatus("ok");
        mountedAtRef.current = Date.now();
        return;
      }

      if (response.status === 400) {
        const payload = (await response.json()) as { errors?: Errors };
        setErrors(payload.errors ?? { form: "Please review your entries and try again." });
        setStatus("error");
        return;
      }

      if (response.status === 429) {
        setErrors({ form: "Too many requests. Please try again later." });
        setStatus("error");
        return;
      }

      setErrors({ form: "Unable to send right now. Please email rbeedle@ems-innovations.com." });
      setStatus("error");
    } catch {
      setErrors({ form: "Unable to send right now. Please email rbeedle@ems-innovations.com." });
      setStatus("error");
    }
  }

  const isSubmitting = status === "sending";
  const liveErrors = validateForm(name.trim(), email.trim(), message.trim());
  const hasLiveErrors = Object.keys(liveErrors).length > 0;

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
              <p className="contact-card__name" style={{ marginTop: 0 }}>
                Rick Beedle
              </p>
              <p className="contact-card__role">Firefighter &amp; Inventor</p>

              <p className="contact-card__meta contact-card__phone-line">
                <a href="tel:+14807103954">
                  <FaPhone
                    aria-hidden
                    className="contact-card__phone-icon"
                  />
                  480-710-3954
                </a>
              </p>

              <p className="contact-card__meta contact-card__email-line">
                <a href="mailto:rbeedle@ems-innovations.com">
                  <FaEnvelope
                    aria-hidden
                    className="contact-card__email-icon"
                  />
                  rbeedle@ems-innovations.com
                </a>
              </p>

              <p className="contact-card__hours">Firefighter Hours</p>
              <p className="contact-card__location">
                Based in Phoenix, AZ MST
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    required
                  />
                  {errors.name ? <p className="form-error">{errors.name}</p> : null}
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={254}
                    required
                  />
                  {errors.email ? <p className="form-error">{errors.email}</p> : null}
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={5000}
                    required
                  />
                  {errors.message ? <p className="form-error">{errors.message}</p> : null}
                </div>
                <input
                  className="form-honeypot"
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  aria-hidden="true"
                />
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={isSubmitting || hasLiveErrors}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
                {status === "ok" ? (
                  <p className="form-success">Thanks - your message is on the way.</p>
                ) : null}
                {errors.form ? <p className="form-error">{errors.form}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
