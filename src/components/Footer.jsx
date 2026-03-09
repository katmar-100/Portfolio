import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          © {currentYear} Katherine Atmar
        </div>
        <div className={styles.links}>
          <a
            href="mailto:katherine.atmar@gmail.com"
            className={styles.link}
            aria-label="Email"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="currentColor" />
              <path d="M5 8l7 5 7-5" stroke="#141919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="5" y="7" width="14" height="10" rx="1.5" stroke="#141919" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/katherine-atmar/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="currentColor" />
              <path d="M15.5 9.5a4 4 0 014 4V18h-3v-4.5a1.5 1.5 0 00-3 0V18h-3v-4.5a4 4 0 014-4z" fill="#141919" />
              <rect x="5.5" y="10" width="2.5" height="8" rx="0.5" fill="#141919" />
              <circle cx="6.75" cy="7.25" r="1.5" fill="#141919" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
