import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const impactImages = [
  '/images/impact/banner.jpeg',
  '/images/impact/WhatsApp Image 2026-01-23 at 06.28.38 (1).jpeg',
  '/images/impact/WhatsApp Image 2026-01-23 at 06.29.08 (1).jpeg',
  '/images/impact/WhatsApp Image 2026-01-23 at 06.30.05.jpeg',
  '/images/impact/IMG-20260825-WA0030.jpg',
  '/images/impact/IMG-20260825-WA0032.jpg',
  '/images/impact/IMG-20260825-WA0035.jpg',
  '/images/impact/IMG-20260825-WA0038.jpg',
  '/images/impact/IMG-20260825-WA0040.jpg',
  '/images/impact/IMG-20260825-WA0051.jpg',
];

function ImpactPage() {
  useEffect(() => {
    document.title = 'Impact | Obhiaba Foundation & Luckielarge';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Obhiaba Foundation and Luckielarge impact gallery and outcomes.');
    }
  }, []);

  return (
    <div className="about-page">
      <header className="about-header">
        <div className="nav about-nav">
          <Link to="/" className="brand-button">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand">Luckielarge</span>
          </Link>

          <Link to="/" className="home-link">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="about-main">
        <section className="about-hero">
          <div className="about-copy">
            <p className="eyebrow eyebrow-dark">Our Impact</p>
            <h1>Community projects and philanthropic work</h1>
            <p>
              The Obhiaba Foundation and Luckielarge support local community development projects focused on education,
              health, and small-business empowerment. Below are images from recent initiatives.
            </p>
          </div>

          <div className="impact-gallery" role="list">
            {impactImages.map((src, i) => (
              <div key={src} className="impact-item" role="listitem">
                <img
                  src={src}
                  alt={`Obhiaba Foundation impact ${i + 1}`}
                  className="impact-image"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="about-values">
          <article className="value-card">
            <h3>Community Projects</h3>
            <p>Local outreach, education support, and vocational training programs.</p>
          </article>
          <article className="value-card">
            <h3>Philanthropy</h3>
            <p>Funding and guidance for grassroots initiatives through the Obhiaba Foundation.</p>
          </article>
          <article className="value-card">
            <h3>Partnerships</h3>
            <p>Collaborations with local organizations to scale impact and ensure sustainability.</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default ImpactPage;
