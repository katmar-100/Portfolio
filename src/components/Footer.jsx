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
          >
            Email
          </a>
          <span className={styles.separator}>·</span>
          <a
            href="https://www.linkedin.com/in/katherine-atmar/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
