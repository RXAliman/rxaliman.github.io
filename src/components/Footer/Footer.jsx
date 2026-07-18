import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/images/logo.svg';

const getTimeAgo = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const units = [
    { name: 'year', article: 'a', seconds: 31536000 },
    { name: 'month', article: 'a', seconds: 2592000 },
    { name: 'day', article: 'a', seconds: 86400 },
    { name: 'hour', article: 'an', seconds: 3600 },
    { name: 'minute', article: 'a', seconds: 60 },
  ];

  for (const unit of units) {
    const count = Math.floor(seconds / unit.seconds);
    if (count >= 1) {
      return count === 1
        ? `${unit.article} ${unit.name} ago`
        : `${count} ${unit.name}s ago`;
    }
  }

  return "just now";
};

const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState('recently');
  const [commitUrl, setCommitUrl] = useState('https://github.com/RXAliman/rxaliman.github.io/commits/gh-pages');

  useEffect(() => {
    let isMounted = true;

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
          if (isMounted && data && data.length > 0) {
            const commitDate = data[0].commit.committer?.date || data[0].commit.author?.date;
            setLastUpdated(getTimeAgo(commitDate));
            setCommitUrl(`https://github.com/RXAliman/rxaliman.github.io/commits/${branch}`);
          }
        } else {
          if (isMounted) setLastUpdated('recently');
        }
      } catch (err) {
        if (isMounted) setLastUpdated('recently');
      }
    };

    fetchCommit();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
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
  );
};

export default Footer;
