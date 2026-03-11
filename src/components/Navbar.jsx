import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isAboutPage = location.pathname === '/' || location.pathname === '/about';
  const hideNav = isAboutPage && !scrolled;

  const navLinks = [
    { label: 'Work', path: '/work' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={`${styles.wordmarkWrap} ${scrolled ? styles.wordmarkScrolled : ''} ${hideNav ? styles.wordmarkHidden : ''}`}>
            <span className={styles.wordmark}>Katherine Atmar</span>
            <span className={styles.wordmarkRole}>Creative Director & Brand Leader</span>
          </Link>

          <div className={`${styles.desktopNav} ${hideNav ? styles.navHidden : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.navLink} ${
                  isActive(link.path) ? styles.active : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className={`${styles.hamburger} ${
              mobileMenuOpen ? styles.open : ''
            } ${hideNav ? styles.navHidden : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className={styles.mobileOverlay}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
