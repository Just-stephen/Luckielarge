import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  useEffect(() => {
    document.title = 'About Mr. Oghinan Lucky | Luckielarge';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'About Mr. Oghinan Lucky — entrepreneur, executive leader, and philanthropist driving business growth and community empowerment.'
      );
    }
  }, []);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mr. Oghinan Lucky',
    alternateName: 'Mr Lucky Large',
    jobTitle: 'Managing Director and Chief Executive Officer, Luckielarge Investment Ltd',
    description:
      'Mr. Oghinan Lucky is a visionary entrepreneur, executive leader, and philanthropist dedicated to driving business growth and community empowerment.',
    image: 'https://luckielarge.com/images/black%20and%20white.jpg',
    birthDate: '1976-08-13',
    birthPlace: 'Uromi, Edo State, Nigeria',
    knowsAbout: [
      'Automobile services',
      'Real estate',
      'Business leadership',
      'Philanthropy',
      'Founder mentorship',
    ],
  };

  return (
    <div className="about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
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
          <div className="about-image-wrap">
            <img
              src="/images/black%20and%20white.jpg"
              alt="Mr Oghinan Lucky"
              className="about-portrait"
            />
          </div>

          <div className="about-copy">
            <p className="eyebrow eyebrow-dark">About Mr. Oghinan Lucky</p>
            <h1>Mr. Oghinan Lucky</h1>

            <p>
              Mr. Oghinan Lucky is a visionary entrepreneur, executive leader, and philanthropist dedicated
              to driving business growth and community empowerment.
            </p>

            <h3>Professional Leadership &amp; Business Ventures</h3>
            <p>
              As the Managing Director and Chief Executive Officer of <strong>Luckielarge Investment Ltd</strong>,
              Mr. Oghinan leads strategic operations across the automobile service and real estate sectors.
              Under his direction, the firm delivers high-value automotive solutions and real estate
              developments built on trust, innovation, and service excellence.
            </p>

            <h3>Background &amp; Education</h3>
            <p>
              Born on August 13, 1976, in Uromi, Edo State (Esan North-East Local Government Area), Mr.
              Oghinan’s journey was built on strong educational foundations.
            </p>
            <ul>
              <li><strong>Primary Education:</strong> Efandion Primary School, Uromi</li>
              <li><strong>Secondary Education:</strong> Efandion Secondary School, Uromi</li>
              <li><strong>Higher Education:</strong> Ambrose Alli University — Bachelor of Science (B.Sc.) in Business Administration</li>
            </ul>
            <p>
              His academic training in business administration laid the framework for his structured,
              results-driven approach to corporate management and investments.
            </p>

            <h3>Philanthropy &amp; Community Vision</h3>
            <p>
              Guided by the values instilled by his parents, Mr. Oghinan is deeply committed to social
              impact and grassroots development. As the <strong>Chairman of the Obhiaba Foundation</strong>, he
              leads philanthropic initiatives focused on giving back to his community, creating opportunities,
              and empowering future generations.
            </p>

            <div className="about-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Mr. Oghinan
              </Link>
            </div>
          </div>
        </section>

        {/* <section className="about-values">
          <article className="value-card">
            <h3>Vision</h3>
            <p>To build a better future by helping founders scale ventures with purpose and resilience.</p>
          </article>
          <article className="value-card">
            <h3>Mission</h3>
            <p>To provide practical support, strategic guidance, and access to the right networks.</p>
          </article>
          <article className="value-card">
            <h3>Impact</h3>
            <p>To drive inclusive economic growth through founder-led innovation across Africa.</p>
          </article>
        </section> */}
      </main>
    </div>
  );
}

export default AboutPage;
