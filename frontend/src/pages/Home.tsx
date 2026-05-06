import { Link } from "react-router-dom";

const heroBg = import.meta.env.BASE_URL + "hero.svg";

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 20, 39, 0.88) 0%, rgba(141, 8, 1, 0.72) 100%), url(${heroBg})`,
        }}
        aria-labelledby="hero-heading"
      >
        <div className="hero__inner">
          <span className="hero__eyebrow">Introducing</span>
          <h1 id="hero-heading" className="hero__title">
            The Riser
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

      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Built for real work</h2>
          <p className="section__lead">
            The Riser is designed for people who lift, move, and build every
            day—whether you are on a job site, in the garage, or keeping up at
            home. Clear ergonomics, durable materials, and a focus on control
            help you finish strong without unnecessary strain.
          </p>
          <div className="grid-3">
            <article className="card">
              <h3 className="card__title">Stable &amp; confident</h3>
              <p className="card__text">
                A balanced stance and thoughtful grip geometry support safer,
                more predictable lifts so you can focus on the task—not fighting
                the tool.
              </p>
              <Link className="card__link" to="/product">
                View specs →
              </Link>
            </article>
            <article className="card">
              <h3 className="card__title">Made to last</h3>
              <p className="card__text">
                Materials and finishes chosen for daily wear mean fewer
                surprises and a product you can rely on season after season.
              </p>
              <Link className="card__link" to="/product">
                Product details →
              </Link>
            </article>
            <article className="card">
              <h3 className="card__title">People behind the product</h3>
              <p className="card__text">
                We are a small team obsessed with practical design—learn why we
                built The Riser and what we stand for.
              </p>
              <Link className="card__link" to="/about">
                Our story →
              </Link>
            </article>
          </div>
          <div className="cta-strip">
            <p className="cta-strip__text">
              Questions about ordering, partnerships, or support? We would love
              to hear from you.
            </p>
            <Link className="btn btn--secondary" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
