import { useState, useEffect, useRef } from 'react';
import styles from './BackToTop.module.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);

      const footer = document.querySelector('footer');
      if (!footer || !btnRef.current) return;

      // Target the border-top line inside the footer container
      const footerContainer = footer.querySelector('div');
      const target = footerContainer || footer;
      const targetRect = target.getBoundingClientRect();
      const btnHeight = btnRef.current.offsetHeight;
      const margin = 12;

      if (targetRect.top < window.innerHeight) {
        const overlap = window.innerHeight - targetRect.top + margin;
        setBottomOffset(overlap);
      } else {
        setBottomOffset(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const style = bottomOffset ? { bottom: `${bottomOffset}px` } : {};

  return (
    <button
      ref={btnRef}
      className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      style={style}
    >
      <span className={styles.arrow}>↑</span>
      <span className={styles.label}>GO TO TOP</span>
    </button>
  );
}
