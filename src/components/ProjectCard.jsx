import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const categorySlug = (cat) => cat.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

const ProjectCard = ({ project, index = 0 }) => {
  const { title, category, summary, capabilities, image, thumbnail, role, year } = project;
  const displayImage = thumbnail || image;

  return (
    <div
      className={styles.card}
    >
      {displayImage && (
        <div className={styles.imageWrap}>
          <img src={displayImage} alt={title} className={styles.image} loading="lazy" style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined} />
        </div>
      )}
      <div className={styles.accentLine} />
      <div className={styles.content}>
        <Link
          to={`/contact?subject=Request+for+Deliverables&message=${encodeURIComponent(`Hi, I'd like to request full access to your ${title} project.`)}`}
          className={styles.requestButton}
        >
          <span className={styles.requestIcon}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M1 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Request Deliverables
        </Link>

        <h3 className={styles.title}>
          {title}
        </h3>
        {role && (
          <p className={styles.metadata}>
            MY ROLE: {role} <span className={styles.yearLabel}>{year}</span>
          </p>
        )}
        <p className={styles.summary}>{summary}</p>

        {capabilities && capabilities.length > 0 && (
          <div className={styles.tagsContainer}>
            {capabilities.slice(0, 6).map((cap, i) => (
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
          <span className={styles.seeText}>SEE </span>MORE {category.toUpperCase()}&nbsp;→
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
