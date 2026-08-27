import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ImpactPage from './ImpactPage';
import GalleryPage from './GalleryPage';

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'Luckielarge | Business Investor for African Founders';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Luckielarge is a business investor.'
      );
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const hero = document.querySelector('.hero');
      if (!hero) return;

      const currentImage = hero.style.backgroundImage.includes('image2') ? 'image2' : 'image1';
      const nextImage = currentImage === 'image1' ? 'image2' : 'image1';

      hero.style.backgroundImage = `linear-gradient(180deg, rgba(55, 35, 155, 0.72), rgba(99, 56, 247, 0.78)), url('/images/${nextImage}.jpg')`;
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Luckielarge',
    url: 'https://luckielarge.com',
    description: 'Luckielarge supports African founders with capital, mentorship, and market access.',
    founder: {
      '@type': 'Person',
      name: 'Mr Lucky Large',
      jobTitle: 'Founder and Entrepreneur',
    },
  };

  return (
    <div className="landing">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <header className="hero">
        <div className="nav">
          <div className="brand-row">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand">Luckielarge</span>
          </div>

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/about" className="nav-link-button" onClick={closeMenu}>About</Link>
            <Link to="/impact" onClick={closeMenu}>Impact</Link>
            <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
            <Link to="/contact" className="nav-cta" onClick={closeMenu}>Contact</Link>
          </nav>
        </div>

        <div className="hero-content">
          <p className="eyebrow">Mr Lucky Large · Founder · Entrepreneur</p>
          <h1>Visionary Entrepreneur, Executive Leader, and Philanthropist.</h1>
          {/* <p className="hero-copy">
            Mr Lucky Large is a founder-led entrepreneur helping ambitious African businesses scale through
            funding, practical mentorship, and access to real market opportunities.
          </p> */}
          {/* <div className="hero-actions">
            <a className="btn btn-primary" href="#programs">Explore Programs</a>
            <Link to="/contact" className="btn btn-secondary">Apply Now</Link>
          </div> */}
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="section-header">
            <span>About Luckielarge</span>
            <h2>Luckielarge Investment Ltd.</h2>
          </div>
          <div className="value-grid">
            <article className="value-card">
              <h3>Luckie Large Real Estate</h3>
              <p>
                Luckie Large Real Estate transforms places into possibilities. We match people to properties with
                insight, integrity, and a deep understanding of local markets. From cozy starter homes to premium
                investments and commercial spaces that grow businesses, we curate listings that fit real lives and real
                ambitions. Our advisors listen first, then advise — navigating negotiations, financing, and legal details
                so you don’t have to. Whether you’re buying, selling, or investing, Luckie Large Real Estate opens doors
                to better futures — one property, one person, one neighborhood at a time.
              </p>
            </article>
            <article className="value-card">
              <h3>Luckie Large Motors</h3>
              <p>
                Luckie Large Motors is a trusted car sales firm that makes finding the right vehicle simple and secure.
                We source reliable, inspected cars, offer transparent pricing and flexible financing, and guide every
                buyer with honest advice and attentive aftercare. Whether you need an economical commuter, a family SUV,
                or a commercial fleet, our team matches you to great value and keeps you moving with dependable service.
              </p>
            </article>
            
          </div>
        </section>

        

        

        

        {/* <section id="contact" className="section cta">
          <div className="cta-card">
            <h2>Join the next generation of African businesses?</h2>
            <p>Apply today or contact our team to learn how we can support your growth journey.</p>
            <div className="hero-actions ">
              <Link to="/contact" className="btn btn-primary">Start Your Application</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </section> */}
      </main>

      <footer className="footer">
        <p>Luckielarge © 2026 · Luckielarge Investment Ltd</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
