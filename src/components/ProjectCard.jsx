import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const categorySlug = (cat) => cat.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

const ProjectCard = ({ project, index = 0 }) => {
  const { title, category, summary, capabilities, image, thumbnail } = project;
  const displayImage = thumbnail || image;

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
        <div className={styles.category}>{category}</div>
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
          to={`/case-studies?category=${categorySlug(category)}`}
          className={styles.seeAllLink}
        >
          SEE MORE {category.toUpperCase()} →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
