import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import styles from './Projects.module.css';

// Images
import iskolinicPic from '../../assets/images/iskolinic.webp';
import oatsPic from '../../assets/images/oats.webp';
import scrunchPic from '../../assets/images/scrunch.webp';
import logo from '../../assets/images/logo.svg';

// Icons
import { HiOutlineExternalLink, HiOutlineSun, HiOutlineMoon, HiArrowLeft } from "react-icons/hi";

const FEATURED_PROJECTS = [
  {
    name: 'ISKOLINIC - Decentralized School-based Health Records System',
    tags: ['Flutter', 'Dart', 'SQL'],
    description: 'A desktop and mobile application built for Our Lady of Perpetual Succor College (OLOPSC) School Health Services Unit that digitizes and centralizes student health record management. It features an offline-first architecture powered by Conflict-free Replicated Data Types (CRDTs), ensuring seamless data synchronization and zero data loss across network transitions. Recognized as Best Thesis in Computing Studies.',
    url: '/projects/iskolinic',
    image: iskolinicPic,
  },
  {
    name: 'OATS - School Alumni Tracking System',
    tags: ['Flutter', 'Dart', 'Firebase', 'Gemini API'],
    description: 'A web-based Alumni Tracking System developed for OLOPSC, where I led the project as System Analyst—gathering requirements, designing the admin interface and wireframes, and overseeing a development team through Agile Scrum sprints to ensure that the system was delivered in close alignment with the school administrators\' specifications and feedback.',
    url: '/projects/oats',
    image: oatsPic,
  },
  {
    name: 'Scrunch - Instagram-inspired Social Media Website',
    tags: ['EJS', 'Node.js', 'Firebase'],
    description: 'A full-featured, Instagram-inspired social media platform designed and deployed by a three-person team, where I served as both Project Lead and Backend Developer. The platform supports core social features including user authentication, profile management, photo uploads, feeds, likes, comments, and follows.',
    url: '/projects/scrunch',
    image: scrunchPic,
  },
];

const OTHER_PROJECTS = [
  {
    name: 'Portfolio Website',
    tags: ['React', 'Tailwind', 'Vite', 'Antigravity IDE'],
    description: 'My personal website and portfolio hosted on GitHub Pages.',
    url: 'https://github.com/RXAliman/rxaliman.github.io',
  },
  {
    name: 'Studyante',
    tags: ['Dart', 'Flutter', 'Hive'],
    description: 'An all-in-one app for student\'s daily chores. A work-in-progress application to be launched soon.',
    url: 'https://github.com/RXAliman/studyante',
  },
  {
    name: 'Kurie',
    tags: ['Dart', 'Flutter', 'Firebase', 'Hive'],
    description: 'An electricity submetering application designed to streamline electricity usage tracking and billing.',
    url: 'https://github.com/RXAliman/kurie-app',
  },
  {
    name: 'Cat ID Generator',
    tags: ['React', 'Vite', 'Cataas API'],
    description: 'Generates a customized or random cat identification (ID) card in seconds.',
    url: 'https://rxaliman.github.io/cat-id-generator',
  },
  {
    name: 'Real Rice Purity Test',
    tags: ['Dart', 'Flutter', 'Firebase'],
    description: 'A web application hosted on Firebase Hosting. It is a satirical version of ricepuritytest.com',
    url: 'https://the-real-rice-purity-test.web.app/',
  },
  {
    name: 'SENA Homeowner\'s Information Extractor and Local Database System (SHIELDS)',
    tags: ['Python', 'Django', 'Web'],
    description: 'A records management system for a neighborhood association.',
    url: 'https://github.com/RXAliman/django-shields',
  },
  {
    name: 'Tic-Tac-Toe Game GUI',
    tags: ['C/C++', 'SFML'],
    description: 'A C++ Tic-tac-toe game made with Simple and Fast Multimedia Library (SFML) and Code::Blocks.',
    url: 'https://github.com/RXAliman/sfml-cpp-tic-tac-toe',
  },
  {
    name: 'Logic Prompt',
    tags: ['C/C++'],
    description: 'a C++ Program that evaluates any logical symbolic statements.',
    url: 'https://github.com/RXAliman/logic-prompt',
  },
];

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
  return "just now";
};

export default function ProjectsPage() {
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);
  const [lastUpdated, setLastUpdated] = useState('recently');
  const [commitUrl, setCommitUrl] = useState('https://github.com/RXAliman/rxaliman.github.io/commits/gh-pages');

  useEffect(() => {
    const fetchCommit = async () => {
      try {
        let res = await fetch('https://api.github.com/repos/RXAliman/rxaliman.github.io/commits?sha=gh-pages&per_page=1');
        let branch = 'gh-pages';

        if (!res.ok) {
          res = await fetch('https://api.github.com/repos/RXAliman/rxaliman.github.io/commits?sha=main&per_page=1');
          branch = 'main';
        }

        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setLastUpdated(getTimeAgo(data[0].commit.author.date));
            setCommitUrl(`https://github.com/RXAliman/rxaliman.github.io/commits/${branch}`);
          }
        } else {
          setLastUpdated('recently');
        }
      } catch (err) {
        setLastUpdated('recently');
      }
    };
    fetchCommit();
  }, []);

  return (
    <>
      <title>Projects - Rovic Aliman</title>
      <div className={styles.projectsPage}>
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
                    <h3 className={styles.projectName}>{project.name}</h3>
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
}
