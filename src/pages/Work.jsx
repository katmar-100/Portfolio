import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import Testimonials from '../components/Testimonials';
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
        <stop stopColor="#3A5F8F" /><stop offset="0.5" stopColor="#5B8AB8" /><stop offset="1" stopColor="#6EB4E0" />
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
        <stop stopColor="#3A5F8F" /><stop offset="0.5" stopColor="#5B8AB8" /><stop offset="1" stopColor="#6EB4E0" />
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
        <stop stopColor="#3A5F8F" /><stop offset="0.5" stopColor="#5B8AB8" /><stop offset="1" stopColor="#6EB4E0" />
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

  // Custom display order
  // Ordered for visual diversity + testimonials (★) spaced every 5 positions
  const customOrder = [
    9,   // ★ TEDx — angled slides (dark/neon)
    18,  // Lex Gillette — full photo
    6,   // fresh — angled slides (pink)
    11,  // EA Internal Comms — book mockup
    1,   // L'Oreal — gallery wall
    5,   // ★ Marmot Labs — poster/flyer
    34,  // Revlon — angled slides (red)
    16,  // Stratolaunch — book mockup
    4,   // Lamborghini — angled slides (blue/hexagon)
    14,  // EA Hackathon — logo/text mockup
    27,  // ★ Modern Focus — angled slides (tech)
    17,  // EA Employee Experience — folded brochure
    8,   // Smithsonian — angled slides (orange)
    12,  // EA Style Guide — book mockup
    13,  // DeoLeo — angled slides (green)
    31,  // ★ CyberCatch — book/report
    15,  // Wendi — angled slides (purple)
    20,  // EA Wellness — poster/flyer
    19,  // Bison Capital Group — angled slides (olive)
    3,   // Lululemon — full photo
    2,   // ★ EA Global Brand System — single booklet
    21,  // Bountisphere — angled slides (teal)
    22,  // EA Game Launches — digital/screen
    25,  // Innovative Design Group — angled slides (red/black)
  ];

  const kittydoodlezId = 28;
  const orderedProjects = customOrder
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean)
    .concat(projects.filter(p => !customOrder.includes(p.id) && p.id !== kittydoodlezId))
    .concat(projects.filter(p => p.id === kittydoodlezId));

  const filteredProjects = activeCategory === 'All'
    ? orderedProjects
    : orderedProjects.filter(p => p.category === activeCategory);

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header Section */}
      <header className={styles.header}>
        <FadeIn delay={0}>
          <h1>Project Case Studies</h1>
          <p className={styles.subtitleAccent}>Full Case Studies & Deliverables Available on Request</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className={styles.subtitle}>
            A curated selection spanning brand systems, campaigns, strategic communications, and executive presentations.
          </p>
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
          <div
            key={`case-${project.id}`}
            className={styles.caseStudy}
          >
            {/* Hero image or category icon */}
            {project.image ? (
              <div className={styles.studyImageWrap}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.studyImage}
                />
              </div>
            ) : (
              <div className={`${styles.studyInner} ${styles.studyIconRow}`}>
                {categoryIcons[project.category] && (
                  <span className={styles.studyIcon}>{categoryIcons[project.category]}</span>
                )}
              </div>
            )}

            <div className={styles.studyInner}>
              <div>
                <div className={styles.studyHeader}>
                  <span className={styles.studyCategory}>{project.category}</span>
                  <div className={styles.titleRow}>
                    <h2 className={styles.studyTitle}>{project.title}</h2>
                    <Link
                      to={`/contact?subject=Request+for+Deliverables&message=${encodeURIComponent(`Hi, I'd like to request full access to your ${project.title} project.`)}`}
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
                  </div>
                  <p className={styles.metadata}>
                    MY ROLE: {project.role} <span className={styles.yearLabel}>{project.year}</span>
                  </p>
                </div>

                <p className={styles.studySummary}>{project.summary}</p>
              </div>

              <div>
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

                {project.testimonial && (
                  <div className={styles.inlineTestimonial}>
                    <p className={styles.testimonialLabel}>
                      Client Testimonial
                      <span className={styles.stars}>★★★★★</span>
                    </p>
                    <blockquote className={styles.testimonialQuote}>
                      "{project.testimonial.quote}"
                    </blockquote>
                    <p className={styles.testimonialAttribution}>
                      — {project.testimonial.author}, {project.testimonial.company}
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Explore All Work Button (filtered views only) */}
      {activeCategory !== 'All' && (
        <div className={styles.exploreAllWrap}>
          <button
            className={styles.exploreAllButton}
            onClick={() => { setActiveCategory('All'); setTimeout(() => window.scrollTo(0, 0), 0); }}
          >
            BACK TO ALL WORK
            <span className={styles.exploreAllArrow}>→</span>
          </button>
        </div>
      )}

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <Testimonials />
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
