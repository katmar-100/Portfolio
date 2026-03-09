import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ProjectCard from '../components/ProjectCard';
import Testimonials from '../components/Testimonials';
import { projects } from '../data/projects';
import styles from './Home.module.css';

// Inline SVG icons for the pillars
const SystemsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <rect x="28" y="6" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <rect x="6" y="28" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <rect x="28" y="28" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="20" y1="13" x2="28" y2="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="13" y1="20" x2="13" y2="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="35" y1="20" x2="35" y2="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="20" y1="35" x2="28" y2="35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

const StrategyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    <line x1="24" y1="2" x2="24" y2="6" stroke="currentColor" strokeWidth="1.5" />
    <line x1="24" y1="42" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="24" x2="6" y2="24" stroke="currentColor" strokeWidth="1.5" />
    <line x1="42" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const LeadershipIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="10" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="38" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 17v4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 21l-10 7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 21l10 7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 32v4a4 4 0 004 4h20a4 4 0 004-4v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Brand logo from local file
const BrandLogo = ({ name, logo }) => {
  const [imgError, setImgError] = useState(false);

  if (!logo || imgError) return null;

  return (
    <img
      src={logo}
      alt={`${name} logo`}
      className={styles.brandImg}
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
};

// Brand carousel with CSS animation for smooth scrolling
const BrandCarousel = ({ brands }) => {
  const doubled = [...brands, ...brands];

  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselTrack}>
        {doubled.map((brand, idx) => (
          <div key={idx} className={styles.carouselItem}>
            <BrandLogo name={brand.name} logo={brand.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  // Custom order: L'Oreal, Lamborghini, Revlon, EA Global, Marmot Labs, TEDx, fresh, Lululemon
  const featuredOrder = [1, 4, 34, 2, 5, 9, 6, 3];
  const featuredProjects = featuredOrder
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean)
    .concat(projects.filter(p => p.featured && !featuredOrder.includes(p.id)));
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  // To add logos: place white/transparent PNG or SVG files in /public/images/logos/
  // then set logo: "/images/logos/brand-name.svg"
  const brands = [
    { name: "L'Oreal", logo: "/images/logos/loreal.png" },
    { name: "Electronic Arts", logo: "/images/logos/electronic-arts.png" },
    { name: "Lululemon", logo: "/images/logos/lululemon.png" },
    { name: "Lamborghini", logo: "/images/logos/lamborghini.png" },
    { name: "Nike", logo: "/images/logos/nike.png" },
    { name: "Revlon", logo: "/images/logos/revlon.png" },
    { name: "Smithsonian", logo: "/images/logos/smithsonian.png" },
    { name: "P&G", logo: "/images/logos/pg.png" },
    { name: "Target", logo: "/images/logos/target.png" },
    { name: "Ford", logo: "/images/logos/ford.png" },
    { name: "ESPN", logo: "/images/logos/espn.png" },
    { name: "Dove", logo: "/images/logos/dove.png" },
    { name: "Pfizer", logo: "/images/logos/pfizer.png" },
    { name: "Hitachi", logo: "/images/logos/hitache.png" },
    { name: "Deloitte", logo: "/images/logos/deloitte.png" },
    { name: "Nestle", logo: "/images/logos/nestle.png" },
    { name: "GEICO", logo: "/images/logos/geico.png" },
    { name: "General Mills", logo: "/images/logos/general-mills.png" },
    { name: "Mazda", logo: "/images/logos/mazda.png" },
    { name: "Harvard Medical", logo: "/images/logos/harvard-medical.png" },
    { name: "Allstate", logo: "/images/logos/allstate.png" },
    { name: "TRESemme", logo: "/images/logos/tresemme.png" },
    { name: "Chick-fil-A", logo: "/images/logos/chick-fil-a.png" },
    { name: "ANA", logo: "/images/logos/ana.png" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ============ HERO SECTION ============ */}
      <section className={styles.hero} onMouseMove={handleMouseMove} ref={heroRef}>

        {/* Animated mesh background — large soft gradient blobs */}
        <div className={styles.heroMesh} aria-hidden="true">
          <div
            className={styles.meshBlob1}
            style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)` }}
          />
          <div
            className={styles.meshBlob2}
            style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)` }}
          />
          <div
            className={styles.meshBlob3}
            style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * 12}px)` }}
          />
        </div>

        {/* Accent glow behind text */}
        <div className={styles.heroGlow} aria-hidden="true" />

        {/* Main hero content */}
        <div className={styles.heroContent}>

          {/* Role label */}
          <motion.p
            className={styles.heroLabel}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Creative Director & Brand Leader
          </motion.p>

          {/* Hero headline — value proposition at editorial scale */}
          <motion.h1
            className={styles.heroHeadline}
            initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            I build brands, systems, and stories that make organizations unmistakable.
          </motion.h1>

          {/* Supporting detail */}
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Creative leadership across healthcare, technology, entertainment, and global consumer brands.
          </motion.p>

          {/* Scroll prompt */}
          <motion.div
            className={styles.scrollPrompt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <span className={styles.scrollText}>SELECTED WORK BELOW</span>
            <span className={styles.scrollArrow}>&#8964;</span>
          </motion.div>
        </div>

      </section>

      {/* TRUSTED BY BRANDS - Black with logo carousel */}
      <section className={styles.brands}>
        <h3 className={styles.brandsLabel}>Trusted by</h3>
        <BrandCarousel brands={brands} />
      </section>

      {/* SELECTED WORK SECTION */}
      <section className={styles.work}>
        <FadeIn>
          <h2 className={styles.workHeading}>
            Selected Work
          </h2>
          <p className={styles.workSubtext}>
            Case studies available upon request. Here's a glimpse of the work and the thinking behind it.
          </p>
          <div className={styles.workAccentLine}></div>
        </FadeIn>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} index={index} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className={styles.viewAll}>
            <Link to="/work" className={styles.viewAllLink}>
              See more work
              <span className={styles.viewAllArrow}>→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className={styles.testimonials}>
        <Testimonials />
      </section>

      {/* HOW I WORK SECTION */}
      <section className={styles.pillars}>
        <FadeIn>
          <h2 className={styles.pillarsHeading}>
            How I Work
          </h2>
          <div className={styles.pillarsAccentLine}></div>
        </FadeIn>

        <div className={styles.pillarsGrid}>
          <FadeIn delay={0}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}><SystemsIcon /></div>
              <span className={styles.pillarTitle}>Systems Over Artifacts</span>
              <p className={styles.pillarDesc}>
                I design infrastructure, not just deliverables. Brand guidelines, templates, and standards that scale with the organization and hold up over time.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}><StrategyIcon /></div>
              <span className={styles.pillarTitle}>Strategy Through Craft</span>
              <p className={styles.pillarDesc}>
                Every visual decision is a strategic one. I bring clarity to complexity and make sure creative work is always tied to measurable business intent.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}><LeadershipIcon /></div>
              <span className={styles.pillarTitle}>Leadership & Culture</span>
              <p className={styles.pillarDesc}>
                I build teams, mentor talent, and create the conditions where great creative work becomes repeatable across the entire organization.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <FadeIn>
          <h2 className={styles.ctaHeading}>
            Let's build something that matters.
          </h2>
          <Link to="/contact" className={styles.ctaButton}>
            <span>Get in Touch</span>
          </Link>
        </FadeIn>
      </section>
    </motion.div>
  );
}
