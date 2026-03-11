import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ProjectCard from '../components/ProjectCard';
import { useTheme } from '../contexts/ThemeContext';
import { projects } from '../data/projects';
import styles from './Home.module.css';

// Brand logo — swaps to light variant in light mode
const BrandLogo = ({ name, logo, lightLogo, theme }) => {
  const [imgError, setImgError] = useState(false);
  const src = theme === 'light' && lightLogo ? lightLogo : logo;

  if (!logo || imgError) return null;

  return (
    <img
      src={src}
      alt={`${name} logo`}
      className={styles.brandImg}
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
};

// Brand carousel with CSS animation for smooth scrolling
const BrandCarousel = ({ brands, theme }) => {
  const doubled = [...brands, ...brands];

  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselTrack}>
        {doubled.map((brand, idx) => (
          <div key={idx} className={styles.carouselItem}>
            <BrandLogo name={brand.name} logo={brand.logo} lightLogo={brand.lightLogo} theme={theme} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const { theme } = useTheme();
  // Custom order: L'Oreal, Lamborghini, Revlon, Marmot Labs, Lululemon, TEDx, fresh, EA Global
  const featuredOrder = [1, 4, 34, 6, 5, 3, 2, 9];
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
  // Light mode variants in /public/images/logos/light mode/ with -light suffix
  const brands = [
    { name: "L'Oreal", logo: "/images/logos/loreal.png", lightLogo: "/images/logos/light mode/loreal-light.png" },
    { name: "Electronic Arts", logo: "/images/logos/electronic-arts.png", lightLogo: "/images/logos/light mode/electronic-arts-light.png" },
    { name: "Lululemon", logo: "/images/logos/lululemon.png", lightLogo: "/images/logos/light mode/lululemon-light.png" },
    { name: "Lamborghini", logo: "/images/logos/lamborghini.png", lightLogo: "/images/logos/light mode/lamborghini-light.png" },
    { name: "Nike", logo: "/images/logos/nike.png", lightLogo: "/images/logos/light mode/nike-light.png" },
    { name: "Revlon", logo: "/images/logos/revlon.png", lightLogo: "/images/logos/light mode/revlon-light.png" },
    { name: "Smithsonian", logo: "/images/logos/smithsonian.png", lightLogo: "/images/logos/light mode/smithsonian-light.png" },
    { name: "P&G", logo: "/images/logos/pg.png", lightLogo: "/images/logos/light mode/pg-light.png" },
    { name: "Target", logo: "/images/logos/target.png", lightLogo: "/images/logos/light mode/target-light.png" },
    { name: "Ford", logo: "/images/logos/ford.png", lightLogo: "/images/logos/light mode/ford-light.png" },
    { name: "ESPN", logo: "/images/logos/espn.png", lightLogo: "/images/logos/light mode/espn-light.png" },
    { name: "Dove", logo: "/images/logos/dove.png", lightLogo: "/images/logos/light mode/dove-light.png" },
    { name: "Pfizer", logo: "/images/logos/pfizer.png", lightLogo: "/images/logos/light mode/pfizer-light.png" },
    { name: "Hitachi", logo: "/images/logos/hitache.png", lightLogo: "/images/logos/light mode/hitachi-light.png" },
    { name: "Deloitte", logo: "/images/logos/deloitte.png", lightLogo: "/images/logos/light mode/deloitte-light.png" },
    { name: "Nestle", logo: "/images/logos/nestle.png", lightLogo: "/images/logos/light mode/nestle-light.png" },
    { name: "GEICO", logo: "/images/logos/geico.png", lightLogo: "/images/logos/light mode/geico-light.png" },
    { name: "General Mills", logo: "/images/logos/general-mills.png", lightLogo: "/images/logos/light mode/general-mills-light.png" },
    { name: "Mazda", logo: "/images/logos/mazda.png", lightLogo: "/images/logos/light mode/mazda-light.png" },
    { name: "Harvard Medical", logo: "/images/logos/harvard-medical.png", lightLogo: "/images/logos/light mode/harvard-medical-light.png" },
    { name: "Allstate", logo: "/images/logos/allstate.png", lightLogo: "/images/logos/light mode/allstate-light.png" },
    { name: "TRESemme", logo: "/images/logos/tresemme.png", lightLogo: "/images/logos/light mode/tresseme-light.png" },
    { name: "Chick-fil-A", logo: "/images/logos/chick-fil-a.png", lightLogo: "/images/logos/light mode/chick-fil-a-light.png" },
    { name: "ANA", logo: "/images/logos/ana.png", lightLogo: "/images/logos/light mode/ana-light.png" },
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

          {/* Hero headline — value proposition at editorial scale */}
          <motion.h1
            className={styles.heroHeadline}
            initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Over a decade of building brands, systems, and stories that make organizations impossible to ignore.
          </motion.h1>

          {/* Supporting detail */}
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Creative leadership across a wide range of industries, including: healthcare, technology, entertainment, logistics, and global consumer brands.
          </motion.p>

          <motion.div
            className={styles.heroButtonWrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link to="/case-studies" className={styles.heroButton}>
              See My Work →
            </Link>
          </motion.div>

        </div>

      </section>

      {/* SELECTED WORK SECTION */}
      <section id="selected-work" className={styles.work}>
        <FadeIn>
          <h2 className={styles.workHeading}>
            Selected Work
          </h2>
          <p className={styles.workCallout}>
            Full Case Studies & Deliverables Available on Request
          </p>
          <p className={styles.workSubtext}>
            Here's a glimpse of the work and the thinking behind it...
          </p>
          <div className={styles.workAccentLine}></div>
        </FadeIn>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className={styles.viewAll}>
            <Link to="/case-studies" className={styles.viewAllLink}>
              See more work
              <span className={styles.viewAllArrow}>→</span>
            </Link>
          </div>
        </FadeIn>

      </section>

      {/* TRUSTED BY */}
      <div className={styles.brands}>
        <h3 className={styles.brandsLabel}>Trusted by</h3>
        <BrandCarousel brands={brands} theme={theme} />
      </div>

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
