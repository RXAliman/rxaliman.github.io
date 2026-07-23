import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

import { FEATURED_PROJECTS, OTHER_PROJECTS } from './projectsData';
import Footer from '../../components/Footer/Footer';

// Icons
import { HiOutlineExternalLink, HiArrowLeft } from "react-icons/hi";
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

export default function ProjectsPage() {

  return (
    <>
      <title>Projects - Rovic Aliman</title>
      <div className={styles.projectsPage}>
        {/* Theme Toggle Button */}
        <ThemeToggle />

        <div className={styles.content}>
          {/* Back Button */}
          <Link to="/" className={styles.textButton}>
            <HiArrowLeft /> back to portfolio
          </Link>

          {/* Featured Projects */}
          <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.projectEntries}>
              {FEATURED_PROJECTS.map((project, index) => (
                <div key={project.name} className={`${styles.projectRow} ${index % 2 !== 0 ? styles.projectRowReverse : ''}`}>
                  <div className={styles.projectImageCard}>
                    {project.image ? (
                      <>
                        <img src={project.image} alt={project.name} className={styles.projectImage} draggable="false" />
                        <div className={styles.projectImageOverlay}>
                          {project.url.startsWith('/') ? (
                            <Link to={project.url} className={styles.projectViewLink}>
                              view project <HiOutlineExternalLink />
                            </Link>
                          ) : (
                            <a
                              href={project.url}
                              className={styles.projectViewLink}
                            >
                              view project <HiOutlineExternalLink />
                            </a>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className={styles.projectPlaceholder} />
                    )}
                  </div>

                  <div className={styles.projectInfo}>
                    <h3 className={styles.projectName}>
                      {project.url.startsWith('/') ? (
                        <Link to={project.url} className={styles.projectNameLink}>
                          <span>{project.name}</span>
                          <HiOutlineExternalLink className={styles.projectTitleIcon} />
                        </Link>
                      ) : (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectNameLink}>
                          <span>{project.name}</span>
                          <HiOutlineExternalLink className={styles.projectTitleIcon} />
                        </a>
                      )}
                    </h3>
                    <div className={styles.projectTags}>
                      {project.tags.map(tag => (
                        <span key={tag} className={styles.projectTag}>{tag}</span>
                      ))}
                    </div>
                    <p className={styles.projectDesc}>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other Projects */}
          <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Other Projects</h2>
            <div className={styles.compactGrid}>
              {OTHER_PROJECTS.map((project) => (
                <a key={project.name} href={project.url} className={styles.compactCard} target={project.url.startsWith('/') ? undefined : '_blank'} rel="noopener noreferrer">
                  <div className={styles.compactHeader}>
                    <h3 className={styles.compactTitle}>{project.name}</h3>
                    <HiOutlineExternalLink className={styles.compactIcon} />
                  </div>
                  <p className={styles.compactDesc}>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.compactTag}>{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* ===== Footer ===== */}
          <Footer />
        </div>
      </div>
    </>
  );
}
