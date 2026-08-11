import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cert.module.css';
import { CERT_DATA } from './certData';
import Footer from '../../components/Footer/Footer';
import Lightbox from '../../components/Lightbox/Lightbox';

// Icons
import { HiArrowLeft } from "react-icons/hi";
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

export default function CertPage() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  const academicCerts = CERT_DATA.filter(cert => cert.category === 'academics');
  const workCerts = CERT_DATA.filter(cert => cert.category === 'work');
  const techCerts = CERT_DATA.filter(cert => cert.category === 'technology');

  return (
    <>
      <title>Certifications - Rovic Aliman</title>
      <div className={styles.certPage}>
        {/* Theme Toggle Button */}
        <ThemeToggle />

        <div className={styles.content}>
          {/* Back Button */}
          <Link to="/" className={styles.textButton}>
            <HiArrowLeft /> back to portfolio
          </Link>

          {/* Academics */}
          {academicCerts.length > 0 && (
            <section className={styles.sectionContainer}>
              <h2 className={styles.sectionTitle}>Academics</h2>
              <div className={styles.certGrid}>
                {academicCerts.map((cert) => (
                  <div
                    key={cert.id}
                    className={styles.certCard}
                    onClick={() => setLightboxSrc(cert.image)}
                  >
                    <div className={styles.certImageCard}>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className={styles.certImage}
                        draggable="false"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.certInfo}>
                      <h3 className={styles.certTitle}>{cert.title}</h3>
                      <span className={styles.certCategory}>{cert.category}</span>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Work */}
          {workCerts.length > 0 && (
            <section className={styles.sectionContainer}>
              <h2 className={styles.sectionTitle}>Work</h2>
              <div className={styles.certGrid}>
                {workCerts.map((cert) => (
                  <div
                    key={cert.id}
                    className={styles.certCard}
                    onClick={() => setLightboxSrc(cert.image)}
                  >
                    <div className={styles.certImageCard}>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className={styles.certImage}
                        draggable="false"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.certInfo}>
                      <h3 className={styles.certTitle}>{cert.title}</h3>
                      <span className={styles.certCategory}>{cert.category}</span>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technology & Innovation */}
          {techCerts.length > 0 && (
            <section className={styles.sectionContainer}>
              <h2 className={styles.sectionTitle}>Technology & Innovation</h2>
              <div className={styles.certGrid}>
                {techCerts.map((cert) => (
                  <div
                    key={cert.id}
                    className={styles.certCard}
                    onClick={() => setLightboxSrc(cert.image)}
                  >
                    <div className={styles.certImageCard}>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className={styles.certImage}
                        draggable="false"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.certInfo}>
                      <h3 className={styles.certTitle}>{cert.title}</h3>
                      <span className={styles.certCategory}>{cert.category}</span>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ===== Footer ===== */}
          <Footer />
        </div>
      </div>

      <Lightbox src={lightboxSrc} alt="Enlarged certification" onClose={closeLightbox} />
    </>
  );
}
