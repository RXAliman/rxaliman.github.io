import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import profilePic from '../../assets/images/cG9naQ==.webp';
import nimbusLogo from '../../assets/images/nimbus-solutions.webp';
import olopscCbmseLogo from '../../assets/images/olopsc-cbmse.webp';
import olopscLogo from '../../assets/images/olopsc.webp';
import tanglawLogo from '../../assets/images/tanglaw.webp';
import jpcsOcsLogo from '../../assets/images/jpcs-ocs.webp';
import ocsLogo from '../../assets/images/ocs.webp';
import { FEATURED_PROJECTS } from '../Projects/projectsData';
import Footer from '../../components/Footer/Footer';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaLink } from "react-icons/fa";
import { HiOutlineExternalLink, HiChevronRight, HiChevronUp, HiCheck } from "react-icons/hi";
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

// ——— Constants ———

const SOCIAL_LINKS = [
  { icon: FaGithub, url: "https://github.com/RXAliman", label: "GitHub" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/rxaliman", label: "LinkedIn" },
  { icon: FaFacebookF, url: "https://www.facebook.com/rovicxavier", label: "Facebook" },
  { icon: FaLink, url: "/links", label: "View other links" },
];

const SUBTITLE_PHRASES = [
  "Former Student Leader",
  "Available for Work",
  "Aspiring Software Engineer",
];

const SKILLS = [
  { name: 'HTML5', categories: ['Main', 'Web'] },
  { name: 'CSS3', categories: ['Main', 'Web'] },
  { name: 'JavaScript (ES6+)', categories: ['Main', 'Web'] },
  { name: 'React', categories: ['Main', 'Web'] },
  { name: 'TailwindCSS', categories: ['Main', 'Web'] },
  { name: 'Node.js', categories: ['Main', 'Web'] },
  { name: 'C# ASP.NET Core', categories: ['Main', 'Web'] },

  { name: 'Bootstrap', categories: ['Web'] },
  { name: 'Django', categories: ['Web'] },
  { name: 'EJS', categories: ['Web'] },
  { name: 'Express.js', categories: ['Web'] },

  { name: 'SQL', categories: ['Database'] },
  { name: 'SQLite', categories: ['Database'] },

  { name: 'Dart', categories: ['Mobile', 'General'] },
  { name: 'Flutter', categories: ['Mobile'] },

  { name: 'C/C++', categories: ['General'] },
  { name: 'Python', categories: ['General'] },
  { name: 'Java', categories: ['General'] },

  { name: 'VS Code', categories: ['Tools'] },
  { name: 'VS Community', categories: ['Tools'] },
  { name: 'Antigravity IDE', categories: ['Tools'] },
  { name: 'Gemini', categories: ['Tools'] },
  { name: 'Claude', categories: ['Tools'] },
  { name: 'Git', categories: ['Tools'] },
  { name: 'GitHub', categories: ['Tools'] },
  { name: 'GitLab CI/CD', categories: ['Tools'] },
  { name: 'Trello', categories: ['Tools'] },
  { name: 'Figma', categories: ['Tools'] },
  { name: 'DBeaver', categories: ['Tools'] },
  { name: 'Adobe Photoshop', categories: ['Tools'] },
  { name: 'Adobe Illustrator', categories: ['Tools'] },

  { name: 'Flet', categories: ['Others'] },
  { name: 'Dialogflow', categories: ['Others'] },
  { name: 'Streamlit', categories: ['Others'] },
  { name: 'Gemini API', categories: ['Others'] },
  { name: 'Firebase', categories: ['Others'] },
  { name: 'Render', categories: ['Others'] },
  { name: 'UptimeRobot', categories: ['Others'] },
];

const CATEGORIES = ['All', 'Main', 'Web', 'Database', 'Mobile', 'General', 'Tools', 'Others'];



// ——— Page Component ———
export default function HomePage() {

  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  // Subtitle cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentPhrase(prev => (prev + 1) % SUBTITLE_PHRASES.length);
        setIsExiting(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.categories.includes(activeCategory));



  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <title>Portfolio - Rovic Aliman</title>
      <div className={styles.homePage}>
        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Social Icons */}
        <nav className={styles.socialIcons} aria-label="Social media links">
          {SOCIAL_LINKS.map((social) => {
            const isInternal = social.url.startsWith('/');
            return isInternal ? (
              <Link
                key={social.label}
                to={social.url}
                className={styles.socialIcon}
                aria-label={social.label}
                title={social.label}
              >
                <social.icon />
              </Link>
            ) : (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={social.label}
                title={social.label}
              >
                <social.icon />
              </a>
            );
          })}
        </nav>

        <div className={styles.content}>
          {/* ===== Hero Section ===== */}
          <section className={styles.sectionContainer}>
            <div className={styles.hero}>
              <div className={styles.heroText}>
                <h1 className={styles.heroNameLine}>
                  <span className={styles.heroName}>Rovic Xavier Aliman</span>
                  <span className={styles.heroDot}>•</span>
                  <span className={styles.heroTitle}>Full-Stack Developer</span>
                </h1>

                <div className={styles.badge}>
                  <span
                    className={`${styles.subtitle} ${isExiting ? styles.subtitleExit : styles.subtitleEnter}`}
                  >
                    {SUBTITLE_PHRASES[currentPhrase]}
                  </span>
                </div>

                <p className={styles.bio}>
                  Problem-driven and visionary full-stack developer who leverages AI tools to collaborate effectively, combining compassionate leadership with strong technical foundations to deliver intuitive web and mobile applications.
                </p>
              </div>

              <div className={styles.heroPhotoWrapper}>
                <img
                  src={profilePic}
                  alt="Rovic Aliman"
                  className={styles.heroPhoto}
                  draggable="false"
                  loading="eager"
                  fetchPriority="high"
                  width="190"
                  height="190"
                />
                <div className={styles.photoOverlay}>
                  <span className={styles.photoFilename}>rovic aliman.jpg</span>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Skills Section ===== */}
          <section className={styles.sectionContainer}>
            <div>
              <h2 className={styles.sectionTitle}>Skills</h2>
              <div className={styles.skillsContainer}>
                <div className={styles.skillTabs}>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      className={`${styles.skillTab} ${activeCategory === cat ? styles.skillTabActive : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}{cat === 'All' ? ` (${SKILLS.length})` : ''}
                    </button>
                  ))}
                </div>
                <div className={styles.skillPills}>
                  {filteredSkills.map(skill => (
                    <span key={skill.name} className={styles.skillPill}>{skill.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ===== Featured Projects ===== */}
          <section className={styles.sectionContainer}>
            <div className={styles.projectsSection}>
              <h2 className={styles.sectionTitle}>Featured Projects</h2>
              <div className={styles.projectEntries}>
                {FEATURED_PROJECTS.map((project, index) => (
                  <div
                    key={index}
                    className={`${styles.projectRow} ${index % 2 !== 0 ? styles.projectRowReverse : ''}`}
                  >
                    <div className={styles.projectImageCard}>
                      {project.image ? (
                        <img src={project.image} alt={project.name} className={styles.projectImage} draggable="false" loading="lazy" />
                      ) : (
                        <div className={styles.projectPlaceholder} />
                      )}
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
                <Link to="/projects" className={styles.viewMoreProjects}>view other projects <HiOutlineExternalLink /></Link>
              </div>
            </div>
          </section>

          {/* ===== Experience ===== */}
          <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.entriesList}>
              {/* Full-Stack Software Developer Intern */}
              <div className={styles.entryCard}>
                <img src={nimbusLogo} alt="Nimbus Solutions" className={styles.entryLogo} draggable="false" loading="lazy" width="40" height="40" />
                <div className={styles.entryContent}>
                  <div className={styles.entryHeader}>
                    <div className={styles.entryHeaderText}>
                      <h3 className={styles.entryTitle}>Full-Stack Software Developer Intern</h3>
                      <p className={styles.entrySubtitle}>
                        Nimbus Solutions - Marikina City, Philippines
                      </p>
                    </div>
                    <span className={styles.entryDate}>Jun - Aug 2025</span>
                  </div>
                  <div className={`${styles.accordionContent} ${expandedItems['exp-1'] ? styles.accordionContentOpen : ''}`}>
                    <div className={styles.accordionInner}>
                      <div className={styles.detailsContainer}>
                        <div className={styles.detailsGroup}>
                          <h4 className={styles.detailsGroupTitle}>Responsibilities</h4>
                          <ul className={styles.detailsList}>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Developed and maintained the company portfolio website and a web-based client/employee portal using HTML, CSS, JavaScript, Bootstrap, and C# ASP.NET Core</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Implemented a secure MVC architecture with role-based access control (RBAC) across 4–5 permission levels for the company portal</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Collaborated in an Agile/Scrum environment, participating in sprint planning and team coordination</span></li>
                          </ul>
                        </div>
                        <div className={styles.detailsGroup}>
                          <h4 className={styles.detailsGroupTitle}>Accomplishments</h4>
                          <ul className={styles.detailsList}>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Optimized portfolio website architecture and performance, improving page load speed by approximately 25%</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Replaced a fully manual, spreadsheet/email-based workflow with a centralized portal, streamlining client and employee access management</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.showDetails} onClick={() => toggleExpand('exp-1')}>
                    {expandedItems['exp-1'] ? <HiChevronUp className={styles.chevronIcon} /> : <HiChevronRight className={styles.chevronIcon} />} {expandedItems['exp-1'] ? 'Hide details' : 'Show details'}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Academics ===== */}
          <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Academics</h2>
            <div className={styles.entriesList}>
              {/* Valedictorian */}
              <div className={styles.entryCard}>
                <img src={olopscCbmseLogo} alt="OLOPSC CBMSE" className={styles.entryLogo} draggable="false" loading="lazy" width="40" height="40" />
                <div className={styles.entryContent}>
                  <div className={styles.entryHeader}>
                    <div className={styles.entryHeaderText}>
                      <h3 className={styles.entryTitle}>Valedictorian (Summa Cum Laude)</h3>
                      <p className={styles.entrySubtitle}>
                        OLOPSC College of Business, Management, Science, and Education - Marikina City, Philippines
                      </p>
                    </div>
                    <span className={styles.entryDate}>Class of 2026</span>
                  </div>

                </div>
              </div>

              {/* Scholarship */}
              <div className={styles.entryCard}>
                <img src={olopscLogo} alt="OLOPSC" className={styles.entryLogo} draggable="false" loading="lazy" width="40" height="40" />
                <div className={styles.entryContent}>
                  <div className={styles.entryHeader}>
                    <div className={styles.entryHeaderText}>
                      <h3 className={styles.entryTitle}>
                        OLOPSC President Scholarship Program Awardee
                      </h3>
                      <p className={styles.entrySubtitle}>
                        <span className={styles.placeholderText}>Our Lady of Perpetual Succor College - Marikina City, Philippines</span>
                      </p>
                    </div>
                    <span className={styles.entryDate}>2022 - 2026</span>
                  </div>

                </div>
              </div>

              {/* President - Student Council */}
              <div className={styles.entryCard}>
                <img src={tanglawLogo} alt="Tanglaw" className={styles.entryLogo} draggable="false" loading="lazy" width="40" height="40" />
                <div className={styles.entryContent}>
                  <div className={styles.entryHeader}>
                    <div className={styles.entryHeaderText}>
                      <h3 className={styles.entryTitle}>President</h3>
                      <p className={styles.entrySubtitle}>
                        OLOPS College Student Council (Tanglaw)
                      </p>
                    </div>
                    <span className={styles.entryDate}>2024 - 2025</span>
                  </div>
                  <div className={`${styles.accordionContent} ${expandedItems['acad-3'] ? styles.accordionContentOpen : ''}`}>
                    <div className={styles.accordionInner}>
                      <div className={styles.detailsContainer}>
                        <div className={styles.detailsGroup}>
                          <h4 className={styles.detailsGroupTitle}>Responsibilities</h4>
                          <ul className={styles.detailsList}>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Represented the college student populace of Our Lady of Perpetual Succor College</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Oversaw all student council-led activities and projects</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Presided all internal meetings to discuss updates and concerns affecting college students</span></li>
                          </ul>
                        </div>
                        <div className={styles.detailsGroup}>
                          <h4 className={styles.detailsGroupTitle}>Accomplishments</h4>
                          <ul className={styles.detailsList}>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Organized multiple events such as the the general assemblies, leadership training, and the 47th founding anniversary celebrations</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Led the rebranding of the Student Council</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Proposed some adjustments with the Student Council such as setting Saturday classes as "Civilian Day", letting students wear appropriate civilian attire instead of daily uniforms within the college campus</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.showDetails} onClick={() => toggleExpand('acad-3')}>
                    {expandedItems['acad-3'] ? <HiChevronUp className={styles.chevronIcon} /> : <HiChevronRight className={styles.chevronIcon} />} {expandedItems['acad-3'] ? 'Hide details' : 'Show details'}
                  </button>
                </div>
              </div>

              {/* President - JPCS */}
              <div className={styles.entryCard}>
                <img src={jpcsOcsLogo} alt="JPCS OCS" className={styles.entryLogo} draggable="false" loading="lazy" width="40" height="40" />
                <div className={styles.entryContent}>
                  <div className={styles.entryHeader}>
                    <div className={styles.entryHeaderText}>
                      <h3 className={styles.entryTitle}>President</h3>
                      <p className={styles.entrySubtitle}>
                        Junior Philippine Computer Society - OLOPSC Computer Society Chapter
                      </p>
                    </div>
                    <span className={styles.entryDate}>2023 - 2024</span>
                  </div>
                  <div className={`${styles.accordionContent} ${expandedItems['acad-4'] ? styles.accordionContentOpen : ''}`}>
                    <div className={styles.accordionInner}>
                      <div className={styles.detailsContainer}>
                        <div className={styles.detailsGroup}>
                          <h4 className={styles.detailsGroupTitle}>Responsibilities</h4>
                          <ul className={styles.detailsList}>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Represented and oversaw the student organization under the BS Computer Science & Associate in Computer Technology program</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Communicated with the College Student Council regarding student concerns and engagements</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Led the proposal and implementation of student activities and projects inside and outside the organization</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Presided all internal meetings to discuss updates and concerns of the organization</span></li>
                          </ul>
                        </div>
                        <div className={styles.detailsGroup}>
                          <h4 className={styles.detailsGroupTitle}>Accomplishments</h4>
                          <ul className={styles.detailsList}>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Organized multiple events such as breakout sessions every student assemblies and e-sport events</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Led the rebranding of OLOPSC Computer Society</span></li>
                            <li className={styles.detailsListItem}><HiCheck className={styles.detailsCheck} /> <span>Streamlined some workflows and processes within the organization</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.showDetails} onClick={() => toggleExpand('acad-4')}>
                    {expandedItems['acad-4'] ? <HiChevronUp className={styles.chevronIcon} /> : <HiChevronRight className={styles.chevronIcon} />} {expandedItems['acad-4'] ? 'Hide details' : 'Show details'}
                  </button>
                </div>
              </div>

              {/* Vice President - JPCS */}
              <div className={styles.entryCard}>
                <img src={ocsLogo} alt="OCS" className={styles.entryLogo} draggable="false" loading="lazy" width="40" height="40" />
                <div className={styles.entryContent}>
                  <div className={styles.entryHeader}>
                    <div className={styles.entryHeaderText}>
                      <h3 className={styles.entryTitle}>Vice President for External Affairs</h3>
                      <p className={styles.entrySubtitle}>
                        Junior Philippine Computer Society - OLOPSC Computer Society Chapter
                      </p>
                    </div>
                    <span className={styles.entryDate}>2022 - 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Footer ===== */}
          <Footer />
        </div>
      </div>
    </>
  );
};