import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { projects } from '../data/projects';
import styles from './Work.module.css';

// Section icons
const BrandIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="28" height="28" rx="6" stroke="url(#brandGrad)" strokeWidth="1.5" />
    <circle cx="18" cy="14" r="4" stroke="url(#brandGrad)" strokeWidth="1.5" />
    <path d="M10 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="url(#brandGrad)" strokeWidth="1.5" strokeLinecap="round" />
    <defs>
      <linearGradient id="brandGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3A5F5F" /><stop offset="0.5" stopColor="#5B8A8A" /><stop offset="1" stopColor="#6EC6C6" />
      </linearGradient>
    </defs>
  </svg>
);

const CampaignIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10l10-4 10 4v12l-10 4-10-4V10z" stroke="url(#campGrad)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M18 6v24" stroke="url(#campGrad)" strokeWidth="1.5" />
    <path d="M8 10l10 4 10-4" stroke="url(#campGrad)" strokeWidth="1.5" />
    <defs>
      <linearGradient id="campGrad" x1="8" y1="6" x2="28" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3A5F5F" /><stop offset="0.5" stopColor="#5B8A8A" /><stop offset="1" stopColor="#6EC6C6" />
      </linearGradient>
    </defs>
  </svg>
);

const PresentationIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="28" height="20" rx="3" stroke="url(#presGrad)" strokeWidth="1.5" />
    <line x1="18" y1="26" x2="18" y2="32" stroke="url(#presGrad)" strokeWidth="1.5" />
    <line x1="12" y1="32" x2="24" y2="32" stroke="url(#presGrad)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 13l4 4 8-8" stroke="url(#presGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="presGrad" x1="4" y1="6" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3A5F5F" /><stop offset="0.5" stopColor="#5B8A8A" /><stop offset="1" stopColor="#6EC6C6" />
      </linearGradient>
    </defs>
  </svg>
);

const categoryIcons = {
  'Brand & Identity Systems': <BrandIcon />,
  'Campaign & Storytelling': <CampaignIcon />,
  'Executive Presentations': <PresentationIcon />,
};

export default function Work() {
  const categories = ['All', 'Brand & Identity Systems', 'Campaign & Storytelling', 'Executive Presentations'];
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    if (categoryFromUrl) {
      const match = categories.find(c => c.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === categoryFromUrl);
      if (match) setActiveCategory(match);
    }
  }, [categoryFromUrl]);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header Section */}
      <header className={styles.header}>
        <FadeIn delay={0}>
          <h1>Project Case Studies</h1>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className={styles.subtitleCard}>
            <p className={styles.subtitle}>
              A curated selection spanning brand systems, campaigns, strategic communications, and executive presentations. Full case studies and deliverables available upon request.
            </p>
          </div>
        </FadeIn>
      </header>

      {/* Category Filter Section */}
      <div className={styles.filterContainer}>
        <FadeIn delay={0.1}>
          <div className={styles.filter}>
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={`${styles.filterButton} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
                style={{
                  transitionDelay: `${idx * 0.05}s`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesContainer}>
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={`case-${project.id}`}
            className={styles.caseStudy}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {/* Hero image or category icon */}
            {project.image ? (
              <motion.img
                src={project.image}
                alt={project.title}
                className={styles.studyImage}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              />
            ) : (
              <div className={styles.studyIconRow}>
                {categoryIcons[project.category] && (
                  <span className={styles.studyIcon}>{categoryIcons[project.category]}</span>
                )}
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
                delay: 0.15,
              }}
            >
              <div className={styles.studyHeader}>
                <span className={styles.studyCategory}>{project.category}</span>
                <h2 className={styles.studyTitle}>{project.title}</h2>
                <p className={styles.metadata}>
                  {project.client} · {project.role}
                </p>
              </div>

              <p className={styles.studySummary}>{project.summary}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
                delay: 0.3,
              }}
            >
              <div className={styles.studyContent}>
                <div className={styles.studyBlock}>
                  <p className={styles.label}>Challenge</p>
                  <p className={styles.studyText}>{project.challenge}</p>
                </div>

                <div className={styles.studyBlock}>
                  <p className={styles.label}>Approach</p>
                  <p className={styles.studyText}>{project.approach}</p>
                </div>

                <div className={styles.studyBlock}>
                  <p className={styles.label}>Outcome</p>
                  <p className={styles.studyText}>{project.outcome}</p>
                </div>
              </div>

              {project.capabilities && (
                <div className={styles.tags}>
                  {project.capabilities.map(cap => (
                    <span key={cap} className={styles.tag}>{cap}</span>
                  ))}
                </div>
              )}

              <Link
                to={`/contact?subject=Request+for+Deliverables&message=${encodeURIComponent(`Hi, I'd like to request full access to your ${project.title} project.`)}`}
                className={styles.requestButton}
              >
                REQUEST DELIVERABLES
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <div className={styles.cta}>
        <FadeIn delay={0.8}>
          <p>Interested in seeing full deliverables or discussing a project?</p>
          <Link to="/contact" className={styles.ctaLink}>
            Let's talk →
          </Link>
        </FadeIn>
      </div>
    </motion.div>
  );
}
