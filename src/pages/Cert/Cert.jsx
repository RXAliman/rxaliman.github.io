import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cert.module.css';
import { CERT_DATA } from './certData';
import Footer from '../../components/Footer/Footer';
import Lightbox from '../../components/Lightbox/Lightbox';

// Icons
import { HiArrowLeft } from "react-icons/hi";
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

// ——— CertSection Helper Component (Local) ———
const CertSection = ({ title, certs, onSelectImage }) => {
  if (!certs || certs.length === 0) return null;

  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.certGrid}>
        {certs.map((cert) => (
          <div
            key={cert.id}
            className={styles.certCard}
            onClick={() => onSelectImage(cert.image)}
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
              <p className={styles.certIssuer}>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

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

          {/* Certification Sections */}
          <CertSection title="Academics" certs={academicCerts} onSelectImage={setLightboxSrc} />
          <CertSection title="Work" certs={workCerts} onSelectImage={setLightboxSrc} />
          <CertSection title="Technology & Innovation" certs={techCerts} onSelectImage={setLightboxSrc} />

          {/* ===== Footer ===== */}
          <Footer />
        </div>
      </div>

      <Lightbox src={lightboxSrc} alt="Enlarged certification" onClose={closeLightbox} />
    </>
  );
}
