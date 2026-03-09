import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const categorySlug = (cat) => cat.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

const categoryShortLabel = {
  'Brand & Identity Systems': 'Brand & Identity',
  'Campaign & Storytelling': 'Campaigns',
  'Executive Presentations': 'Presentations',
};

const ProjectCard = ({ project, index = 0 }) => {
  const { title, category, summary, capabilities, image, thumbnail } = project;
  const displayImage = thumbnail || image;
  const displayIndex = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      className={styles.card}
      whileHover={{
        y: -8,
        transition: { duration: 0.35, ease: [0.25, 0.4, 0.25, 1] },
      }}
    >
      {displayImage && (
        <div className={styles.imageWrap}>
          <img src={displayImage} alt={title} className={styles.image} loading="lazy" />
        </div>
      )}
      <div className={styles.accentLine} />
      <div className={styles.content}>
        <div className={styles.cardHeader}>
          <div className={styles.category}>{category}</div>
          <span className={styles.cardIndex}>{displayIndex}</span>
        </div>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.summary}>{summary}</p>

        {capabilities && capabilities.length > 0 && (
          <div className={styles.tagsContainer}>
            {capabilities.map((cap, i) => (
              <span key={i} className={styles.tag}>
                {cap}
              </span>
            ))}
          </div>
        )}

        <Link
          to={`/work?category=${categorySlug(category)}`}
          className={styles.seeAllLink}
        >
          See all {categoryShortLabel[category] || category} →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
