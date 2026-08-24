import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Mr Lucky Large | Luckielarge';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Contact Mr Lucky Large and the Luckielarge team for entrepreneur support, founder mentorship, startup growth, and investment opportunities.'
      );
    }
  }, []);

  return (
    <div className="contact-page">
      <header className="about-header">
        <div className="nav about-nav">
          <Link to="/" className="brand-button">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand">Luckielarge</span>
          </Link>

          <div className="contact-nav-links">
            <Link to="/about" className="home-link alt-link">About</Link>
            <Link to="/" className="home-link">Back to Home</Link>
          </div>
        </div>
      </header>

      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-dark">Get in Touch</p>
            <h1>Connect with Mr Lucky Large</h1>
            <p>
              Whether you are a founder seeking funding, mentorship, or strategic support, the Luckielarge team
              is available to help you grow with purpose and confidence.
            </p>
          </div>

          <div className="contact-card">
            <h2>Contact Details</h2>
            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href="mailto:hello@luckielarge.com">hello@luckielarge.com</a>
              </li>
              <li>
                <span>Location</span>
                <strong>Africa / Remote</strong>
              </li>
              <li>
                <span>Focus</span>
                <strong>Founder support, mentorship, and growth</strong>
              </li>
            </ul>
          </div>
        </section>

        <section className="contact-grid">
          <article className="value-card">
            <h3>For Founders</h3>
            <p>Access support for growth strategy, funding, operations, and stronger market readiness.</p>
          </article>
          <article className="value-card">
            <h3>For Partners</h3>
            <p>Explore collaborative opportunities with an ecosystem built around founder acceleration.</p>
          </article>
          <article className="value-card">
            <h3>For Investors</h3>
            <p>Connect with a pipeline of scalable, impact-driven businesses with strong growth potential.</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
