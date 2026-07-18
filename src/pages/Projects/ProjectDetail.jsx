import { useContext } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ThemeContext } from '../../App';
import { PROJECTS_DATA } from './projectsData';
import styles from './ProjectDetail.module.css';
import Footer from '../../components/Footer/Footer';

import {
  HiOutlineExternalLink,
  HiOutlineSun,
  HiOutlineMoon,
  HiArrowLeft,
  HiCheck
} from "react-icons/hi";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS_DATA[id];
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);

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
        <button
          className={styles.themeToggleBtn}
          aria-label="Toggle theme"
          onClick={() => setIsLightMode(!isLightMode)}
        >
          {isLightMode ? <HiOutlineMoon /> : <HiOutlineSun />}
        </button>

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
    </>
  );
};

export default ProjectDetail;
