import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
  '/images/gallery/IMG-20260825-WA0022.jpg',
  '/images/gallery/IMG-20260825-WA0025.jpg',
  '/images/gallery/IMG-20260825-WA0026.jpg',
  '/images/gallery/IMG-20260825-WA0027.jpg',
];

function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery | Luckielarge Impact & Events';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Photo gallery showing Luckielarge and Obhiaba Foundation community events and impact.');
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

          <Link to="/" className="home-link">Back to Home</Link>
        </div>
      </header>

      <main className="about-main">
        <section className="about-hero">
          <div className="about-copy">
            <p className="eyebrow eyebrow-dark">Gallery</p>
            <h1>Events, Outreach &amp; Impact</h1>
            <p>Browse photos from recent community engagements, events, and projects supported by Luckielarge and the Obhiaba Foundation.</p>
          </div>

          <div className="impact-gallery" role="list">
            {galleryImages.map((src, i) => (
              <div key={src} className="impact-item" role="listitem">
                <img src={src} alt={`Gallery image ${i + 1}`} className="impact-image" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default GalleryPage;
