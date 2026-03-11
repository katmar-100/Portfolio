import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { useTheme } from '../contexts/ThemeContext';
import styles from './Resume.module.css';

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

const Resume = () => {
  const { theme } = useTheme();
  const experiences = [
    {
      id: 1,
      title: 'Creative Director',
      company: 'ChenMed',
      dates: '2024 - Present',
      logo: '/images/logos/chenmed.png',
      lightLogo: '/images/logos/light mode/chenmed-light.png',
      bullets: [
        'Lead the in-house creative organization for a national healthcare brand, setting creative vision and brand standards across digital, social, environmental, print, and experiential channels spanning 100+ locations.',
        'Rebuilt studio operations and creative workflows, introduced AI-assisted production tools, and established accountability frameworks that elevated both output quality and team performance.',
        'Partner with executive and cross-functional leadership to align creative strategy with business goals - building a high-performance culture where scalable systems, mentorship, and creative rigor drive consistently excellent work.'
      ]
    },
    {
      id: 2,
      title: 'VP, Chief Marketing Officer',
      company: 'CyberCatch',
      dates: '2021 - 2024',
      logo: '/images/logos/Cybercatch.png',
      lightLogo: '/images/logos/light mode/cybercatch-light.png',
      bullets: [
        'Owned brand, creative, and marketing strategy for a high-growth cybersecurity SaaS company, building the function from the ground up and helping drive the company through rapid scaling to IPO in Canada.',
        'Led multidisciplinary teams across creative, digital marketing, content, CRM, and demand generation - developing comprehensive visual identity systems, messaging frameworks, and go-to-market strategies that defined company positioning in a highly competitive enterprise market.',
        'Partnered with Product, Sales, and Executive leadership to translate complex cybersecurity concepts into clear brand storytelling that supported pipeline growth, product adoption, and competitive differentiation.'
      ]
    },
    {
      id: 3,
      title: 'Creative Director & Visual Designer',
      company: 'Self-Employed',
      dates: '2020 - 2021',
      logo: '/images/logos/self-employed.png',
      lightLogo: '/images/logos/light mode/self-employed-light.png',
      bullets: [
        'Led creative direction and brand identity for a diverse portfolio of consumer brands, tech startups, wellness companies, and B2B organizations - delivering everything from visual identity systems and campaign creative to UI/UX, motion, packaging, and product visualization.',
        'Built scalable brand architectures, style guides, and creative systems that clients could maintain and grow long after engagement.',
        'Partnered directly with founders, CMOs, and product teams to translate early-stage ambition into polished, market-ready brand experiences across digital, print, and motion.'
      ]
    },
    {
      id: 4,
      title: 'Branding & Design Specialist',
      company: 'Electronic Arts',
      dates: '2017 - 2020',
      logo: '/images/logos/ea.png',
      lightLogo: '/images/logos/light mode/ea-light.png',
      bullets: [
        'Led global visual identity systems for EA\'s internal brand and employee experience platforms, designing and managing the asset libraries, brand guidelines, iconography systems, and photography standards used by creative, HR, and executive teams across North America, Europe, and Asia.',
        'Developed presentation systems and visual governance frameworks that ensured consistent brand execution across hundreds of deliverables and cross-functional teams worldwide.',
        'Collaborated on employee engagement campaigns and culture-building initiatives while conducting brand training workshops to drive adoption of visual standards across global studios.'
      ]
    },
    {
      id: 5,
      title: 'Art Director',
      company: 'Hill+Knowlton Strategies',
      dates: '2014 - 2017',
      logo: '/images/logos/hK-strategies.png',
      lightLogo: '/images/logos/light mode/hk-strategies-light.png',
      bullets: [
        'Led creative direction for business development and client campaigns at a top global communications firm, with pitch-related design work contributing to more than $10M in new business wins including P&G, Vanguard, Hitachi, Pfizer, and ANA.',
        'Produced integrated brand campaigns, design systems, and motion-supported storytelling for high-profile clients including Target, Mazda, and Pfizer - owning concept development, photography direction, and digital content across nationally visible initiatives.',
        'Partnered with strategy teams and account leads to deliver insight-driven creative under tight deadlines, managing cross-functional workflows from pitch through execution.'
      ]
    }
  ];

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

  const [hoveredCap, setHoveredCap] = useState(null);

  const capabilities = [
    { name: 'Creative Direction', blurb: 'Leading end-to-end creative vision across campaigns, brand launches, and organizational storytelling.' },
    { name: 'Art Direction', blurb: 'Guiding the visual direction and aesthetic execution of campaigns, shoots, and design projects from concept through delivery.' },
    { name: 'Brand Systems & Guidelines', blurb: 'Building scalable design systems, brand standards, and templates that maintain quality across teams and touchpoints.' },
    { name: 'Visual Identity', blurb: 'Crafting distinctive brand identities that communicate clearly and resonate with target audiences.' },
    { name: 'Campaign Development', blurb: 'Concepting and executing integrated campaigns across digital, print, social, and experiential channels.' },
    { name: 'Executive Presentations', blurb: 'Translating complex strategy into compelling visual narratives for C-suite, investor, and board audiences.' },
    { name: 'Team Leadership & Mentorship', blurb: 'Building, managing, and elevating creative teams while fostering a culture of excellence and growth.' },
    { name: 'Design Operations', blurb: 'Streamlining creative workflows, tooling, and processes to maximize team output and consistency.' },
    { name: 'Cross-Functional Strategy', blurb: 'Bridging creative, marketing, product, and engineering teams to align on shared goals and outcomes.' },
    { name: 'Narrative Development', blurb: 'Shaping brand stories and strategic messaging that connect with audiences and drive business results.' },
    { name: 'Digital & Print Design', blurb: 'Delivering polished creative across web, mobile, social, packaging, and traditional print formats.' },
    { name: 'Editorial & Publication Design', blurb: 'Creating layouts for booklets, guides, press kits, and thought leadership publications with editorial quality and clear hierarchy.' },
    { name: 'Experiential & Event Design', blurb: 'Designing immersive brand experiences, trade show environments, and event identities that engage audiences in physical spaces.' },
    { name: 'Data Visualization', blurb: 'Translating complex data and information into clear, compelling visual formats for presentations, publications, and digital platforms.' },
    { name: 'Motion & Video Direction', blurb: 'Directing motion graphics, video content, and animation that bring brand stories to life.' },
    { name: 'AI & Innovation Thinking', blurb: 'Integrating AI-assisted workflows and emerging tools to expand creative capability and efficiency.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroHeadline}
            initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            I'm able to turn complexity into clear, scalable creative solutions.
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            These are the roles, teams, and organizations that shaped how I lead creative work today.
          </motion.p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        className={styles.capabilitiesSection}
        onMouseLeave={() => setHoveredCap(null)}
      >
          <h2 className={styles.sectionHeading}>Areas of Expertise</h2>
          <div className={styles.tagsContainer}>
            {capabilities.map((capability, index) => (
              <motion.span
                key={index}
                className={styles.tag}
                onMouseEnter={() => setHoveredCap(index)}
                animate={{
                  opacity: hoveredCap === null || hoveredCap === index ? 1 : 0.15,
                  scale: hoveredCap === index ? 1.15 : 1,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {capability.name}
              </motion.span>
            ))}
          </div>
          <div className={styles.capBlurbWrap}>
            <AnimatePresence mode="wait">
              {hoveredCap !== null && (
                <motion.p
                  key={hoveredCap}
                  className={styles.capBlurb}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {capabilities[hoveredCap].blurb}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
      </section>

      {/* Experience Section */}
      <div className={styles.experienceWrap}>
        <FadeIn delay={0.1} direction="up" distance={20}>
          <section className={styles.experience}>
            <h2 className={styles.sectionHeading}>Experience</h2>

            {experiences.map((role, index) => (
              <div key={role.id} className={styles.roleContainer}>
                <div className={styles.roleHeader}>
                  <div className={styles.roleInfo}>
                    <div className={styles.roleTitle}>{role.title}</div>
                    <div className={styles.roleCompany}>{role.company}</div>
                    <div className={styles.roleDates}>{role.dates}</div>
                  </div>
                  {role.logo && (
                    <img
                      src={theme === 'light' && role.lightLogo ? role.lightLogo : role.logo}
                      alt={`${role.company} logo`}
                      className={styles.roleLogo}
                    />
                  )}
                </div>
                <ul className={styles.bullets}>
                  {role.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <div className={styles.seeWorkWrap}>
            <Link to="/work" className={styles.seeWorkButton}>
              SEE MY WORK
              <span className={styles.seeWorkArrow}>→</span>
            </Link>
          </div>
        </FadeIn>

      </div>

      {/* Education Section */}
      <div className={styles.educationWrap}>
        <FadeIn delay={0.3} direction="up" distance={20}>
          <section className={styles.education}>
            <h2 className={styles.sectionHeading}>Education</h2>
            <div className={styles.educationEntry}>
              <div className={styles.educationDegree}>Master of Arts</div>
              <div className={styles.educationSchool}>The University of Texas at Austin</div>
              <div className={styles.educationDetail}>Creative Advertising & Public Relations</div>
              <div className={styles.educationMeta}>Graduated May 2016 · GPA 3.52</div>
            </div>
            <div className={styles.educationEntry}>
              <div className={styles.educationDegree}>Bachelor of Arts</div>
              <div className={styles.educationSchool}>The University of Mary Hardin-Baylor</div>
              <div className={styles.educationDetail}>Marketing & Public Relations</div>
              <div className={styles.educationMeta}>Graduated May 2014 · GPA 3.68</div>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* TRUSTED BY BRANDS - Logo carousel */}
      <section className={styles.brands}>
        <h3 className={styles.brandsLabel}>Agency & Contract Clients</h3>
        <BrandCarousel brands={brands} theme={theme} />
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <p className={styles.ctaText}>
          Let's discuss how I can contribute to your organization.
        </p>
        <Link to="/contact" className={styles.ctaLink}>
          Get in Touch
        </Link>
      </section>
    </motion.div>
  );
};

export default Resume;
