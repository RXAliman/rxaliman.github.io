import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS_DATA } from './projectsData';
import styles from './ProjectDetail.module.css';
import Footer from '../../components/Footer/Footer';

import {
  HiOutlineExternalLink,
  HiArrowLeft,
  HiCheck,
  HiX
} from "react-icons/hi";
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS_DATA[id];
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (lightboxSrc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxSrc]);

  // Close on Escape key
  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxSrc, closeLightbox]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const renderStatusBadge = () => {
    const statusClassMap = {
      deployed: styles.statusBadgeDeployed,
      ongoing: styles.statusBadgeOngoing,
      dormant: styles.statusBadgeDormant,
    };

    const badgeClass = `${styles.statusBadge} ${statusClassMap[project.statusType] || ''}`;

    if (project.statusUrl) {
      return (
        <a
          href={project.statusUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={badgeClass}
          title="Open project link in new tab"
        >
          {project.status} <HiOutlineExternalLink />
        </a>
      );
    }

    return <span className={badgeClass}>{project.status}</span>;
  };

  return (
    <>
      <title>{`${project.name} - Rovic Aliman`}</title>
      <div className={styles.projectDetailPage}>
        {/* Theme Toggle Button */}
        <ThemeToggle />

        <div className={styles.content}>
          {/* Back Button */}
          <Link to="/" className={styles.textButton}>
            <HiArrowLeft /> back to portfolio
          </Link>

          {/* Top Hero Image (Separated from content container) */}
          <div className={styles.topImageCard}>
            <img
              src={project.image}
              alt={project.name}
              className={styles.topImage}
              draggable="false"
            />
          </div>

          {/* Project Header and Content Article Container */}
          <section className={styles.sectionContainer}>
            <div className={styles.headerGroup}>
              <h1 className={styles.projectTitle}>{project.name}</h1>

              <div className={styles.metaRow}>
                {/* Tech Stacks */}
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status Badge */}
                {renderStatusBadge()}
              </div>
            </div>

            {/* Article Body */}
            <div className={styles.articleBody}>
              <div>
                <h2 className={styles.sectionHeading}>Overview</h2>
                <p className={styles.paragraph}>{project.overview}</p>
              </div>

              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <h2 className={styles.sectionHeading}>Key Features</h2>
                  <ul className={styles.featureList}>
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <HiCheck className={styles.featureBullet} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.techArchitecture && (
                <div>
                  <h2 className={styles.sectionHeading}>Technical Architecture</h2>
                  <p className={styles.paragraph}>{project.techArchitecture}</p>
                </div>
              )}

              {project.recognition && (
                <div>
                  <h2 className={styles.sectionHeading}>Recognition & Leadership</h2>
                  <p className={styles.paragraph}>{project.recognition}</p>
                </div>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h2 className={styles.sectionHeading}>Project Gallery</h2>
                  <div className={styles.galleryWrapper}>
                    {/* Desktop Split Columns (Left-Right Sequential) */}
                    <div className={styles.galleryGridDesktop}>
                      <div className={styles.galleryCol}>
                        {project.gallery.filter((_, idx) => idx % 2 === 0).map((imgSrc, idx) => (
                          <div key={`left-${idx}`} className={styles.galleryImageCard}>
                            <img src={imgSrc} alt={`${project.name} screenshot ${idx * 2 + 1}`} className={styles.galleryImage} loading="lazy" draggable="false" onClick={() => setLightboxSrc(imgSrc)} />
                          </div>
                        ))}
                      </div>
                      <div className={styles.galleryCol}>
                        {project.gallery.filter((_, idx) => idx % 2 !== 0).map((imgSrc, idx) => (
                          <div key={`right-${idx}`} className={styles.galleryImageCard}>
                            <img src={imgSrc} alt={`${project.name} screenshot ${idx * 2 + 2}`} className={styles.galleryImage} loading="lazy" draggable="false" onClick={() => setLightboxSrc(imgSrc)} />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Mobile Single Column (Original Sequence) */}
                    <div className={styles.galleryGridMobile}>
                      {project.gallery.map((imgSrc, idx) => (
                        <div key={`mob-${idx}`} className={styles.galleryImageCard}>
                          <img src={imgSrc} alt={`${project.name} screenshot ${idx + 1}`} className={styles.galleryImage} loading="lazy" draggable="false" onClick={() => setLightboxSrc(imgSrc)} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Nav Text Button */}
              <div className={styles.bottomNav}>
                <Link to="/projects" className={styles.textButton}>
                  view other projects <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxSrc && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={lightboxSrc} alt="Enlarged screenshot" className={styles.lightboxImage} draggable="false" />
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              <HiX /> Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
