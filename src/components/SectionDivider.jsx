import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionDivider.module.css';

const SectionDivider = ({ variant = 'default', flipped = false }) => {
  return (
    <motion.div
      className={`${styles.divider} ${styles[variant]} ${flipped ? styles.flipped : ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-hidden="true"
    >
      <div className={styles.line} />
      <div className={styles.diamond} />
      <div className={styles.line} />
    </motion.div>
  );
};

export default SectionDivider;
