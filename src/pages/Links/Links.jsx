import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaCopy, FaCheck } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import styles from './Links.module.css';

const EMAIL = 'rovicxavier150@gmail.com';

const LinksPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback for older browsers */
      const textarea = document.createElement('textarea');
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Connect with Me</h1>

        <div className={styles.linksWrapper}>
          {/* Copy Email */}
          <button
            onClick={handleCopy}
            className={`${styles.linkBtn} ${styles.copyBtn} ${copied ? styles.copied : ''}`}
            style={{ '--i': 2 }}
          >
            {copied ? <FaCheck className={styles.linkIcon} /> : <FaCopy className={styles.linkIcon} />}
            <span className={styles.linkText}>{copied ? 'Copied!' : 'Copy Email Address'}</span>
          </button>

          {/* Gmail */}
          <a
            href={`mailto:${EMAIL}`}
            className={`${styles.linkBtn} ${styles.gmail}`}
            style={{ '--i': 1 }}
          >
            <SiGmail className={styles.linkIcon} />
            <span className={styles.linkText}>Gmail</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rovic-xavier-aliman-2887ba312/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkBtn} ${styles.linkedin}`}
            style={{ '--i': 3 }}
          >
            <FaLinkedin className={styles.linkIcon} />
            <span className={styles.linkText}>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://www.github.com/rxaliman/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkBtn} ${styles.github}`}
            style={{ '--i': 4 }}
          >
            <FaGithub className={styles.linkIcon} />
            <span className={styles.linkText}>GitHub</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/rovicxavier"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkBtn} ${styles.facebook}`}
            style={{ '--i': 5 }}
          >
            <FaFacebook className={styles.linkIcon} />
            <span className={styles.linkText}>Facebook</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rxaliman/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkBtn} ${styles.instagram}`}
            style={{ '--i': 6 }}
          >
            <FaInstagram className={styles.linkIcon} />
            <span className={styles.linkText}>Instagram</span>
          </a>
        </div>

        <Link to="/" className={styles.backBtn}>
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default LinksPage;
