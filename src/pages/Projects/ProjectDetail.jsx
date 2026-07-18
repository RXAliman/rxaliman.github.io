import { useState, useEffect, useContext } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ThemeContext } from '../../App';
import { PROJECTS_DATA } from './projectsData';
import styles from './ProjectDetail.module.css';
import logo from '../../assets/images/logo.svg';

import {
  HiOutlineExternalLink,
  HiOutlineSun,
  HiOutlineMoon,
  HiArrowLeft,
  HiCheck
} from "react-icons/hi";

const getTimeAgo = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;
  if (interval >= 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval >= 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval >= 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval >= 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval >= 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS_DATA[id];
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);

  const [lastUpdated, setLastUpdated] = useState('Recently');
  const [commitUrl, setCommitUrl] = useState('https://github.com/RXAliman/rxaliman.github.io/commits/gh-pages');

  useEffect(() => {
    let isMounted = true;
    const repoOwner = 'RXAliman';
    const repoName = 'rxaliman.github.io';

    const fetchBranchCommit = (branch) => {
      return fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits?sha=${branch}&per_page=1`)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        });
    };

    fetchBranchCommit('gh-pages')
      .then(data => {
        if (!isMounted) return;
        if (Array.isArray(data) && data.length > 0) {
          const commitDate = data[0].commit.committer.date;
          setLastUpdated(getTimeAgo(commitDate));
          setCommitUrl(`https://github.com/${repoOwner}/${repoName}/commits/gh-pages`);
        }
      })
      .catch(() => {
        fetchBranchCommit('main')
          .then(data => {
            if (!isMounted) return;
            if (Array.isArray(data) && data.length > 0) {
              const commitDate = data[0].commit.committer.date;
              setLastUpdated(getTimeAgo(commitDate));
              setCommitUrl(`https://github.com/${repoOwner}/${repoName}/commits/main`);
            }
          })
          .catch(err => {
            console.error('Error fetching commit date:', err);
          });
      });

    return () => {
      isMounted = false;
    };
  }, []);

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
          <footer className={styles.footer}>
            <span>Rovic Aliman © 2026</span>
            <img src={logo} className={styles.footerLogo} draggable="false" alt="Logo" />
            <span>
              Last updated{' '}
              <a
                href={commitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                {lastUpdated}
              </a>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
