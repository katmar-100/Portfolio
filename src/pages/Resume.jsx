import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import styles from './Resume.module.css';

const Resume = () => {
  const experiences = [
    {
      id: 1,
      title: 'Creative Director',
      company: 'ChenMed',
      dates: '2023 - Present',
      bullets: [
        'Lead the in-house creative organization for a national healthcare brand serving 100+ locations across the United States.',
        'Built scalable brand systems, design standards, and creative workflows that elevated quality and consistency at scale.',
        'Direct cross-functional collaboration with marketing, communications, and executive leadership.',
        'Introduced AI-assisted workflows and operational improvements that increased team capacity and output quality.'
      ]
    },
    {
      id: 2,
      title: 'VP, Chief Marketing Officer',
      company: 'CyberCatch',
      dates: '2021 - 2023',
      bullets: [
        'Built the brand, marketing, and creative function from zero through high-growth and IPO-readiness stages.',
        'Developed go-to-market strategy, investor materials, and executive communications for institutional credibility.',
        'Led all visual identity, messaging, and campaign development as the sole creative and marketing leader.',
        'Managed agency relationships, media strategy, and cross-functional alignment with product and sales.'
      ]
    },
    {
      id: 3,
      title: 'Creative Director & Visual Designer',
      company: 'Self-Employed',
      dates: '2016 - 2021',
      bullets: [
        'Provided end-to-end creative direction and brand strategy for startups, consumer brands, and B2B technology companies.',
        'Developed brand identities, visual systems, campaign concepts, and digital experiences across wellness, real estate, and lifestyle.',
        'Partnered directly with founders and executive teams as a strategic creative advisor.'
      ]
    },
    {
      id: 4,
      title: 'Branding & Design Specialist',
      company: 'Electronic Arts',
      dates: '2014 - 2016',
      bullets: [
        'Developed global visual communication standards and internal brand infrastructure.',
        'Created design systems and templates enabling consistent brand expression across autonomous global studios.',
        'Collaborated with marketing, communications, and studio leadership on high-visibility campaigns.'
      ]
    },
    {
      id: 5,
      title: 'Art Director',
      company: 'Hill+Knowlton Strategies',
      dates: '2012 - 2014',
      bullets: [
        'Led visual direction for campaign concepts, client presentations, and new business pitch materials.',
        'Developed motion-supported storytelling and integrated campaign visuals contributing to major account wins.',
        'Managed design execution across print, digital, social, and experiential channels for Fortune 500 clients.'
      ]
    }
  ];

  const [hoveredCap, setHoveredCap] = useState(null);

  const capabilities = [
    { name: 'Creative Direction', blurb: 'Leading end-to-end creative vision across campaigns, brand launches, and organizational storytelling.' },
    { name: 'Brand Systems & Guidelines', blurb: 'Building scalable design systems, brand standards, and templates that maintain quality across teams and touchpoints.' },
    { name: 'Visual Identity', blurb: 'Crafting distinctive brand identities that communicate clearly and resonate with target audiences.' },
    { name: 'Campaign Development', blurb: 'Concepting and executing integrated campaigns across digital, print, social, and experiential channels.' },
    { name: 'Executive Presentations', blurb: 'Translating complex strategy into compelling visual narratives for C-suite, investor, and board audiences.' },
    { name: 'Team Leadership & Mentorship', blurb: 'Building, managing, and elevating creative teams while fostering a culture of excellence and growth.' },
    { name: 'Design Operations', blurb: 'Streamlining creative workflows, tooling, and processes to maximize team output and consistency.' },
    { name: 'Cross-Functional Strategy', blurb: 'Bridging creative, marketing, product, and engineering teams to align on shared goals and outcomes.' },
    { name: 'Narrative Development', blurb: 'Shaping brand stories and strategic messaging that connect with audiences and drive business results.' },
    { name: 'Digital & Print Design', blurb: 'Delivering polished creative across web, mobile, social, packaging, and traditional print formats.' },
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
      <div className={styles.header}>
        <h1 className={styles.title}>Resume</h1>
        <div className={styles.subtitleCard}>
          <p className={styles.subtitle}>
            A career built at the intersection of creative leadership, brand strategy, and design systems.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className={styles.experienceWrap}>
        <FadeIn delay={0.1} direction="up" distance={20}>
          <section className={styles.experience}>
            <h2 className={styles.sectionHeading}>Experience</h2>

            {experiences.map((role, index) => (
              <div key={role.id} className={styles.roleContainer}>
                <div className={styles.roleHeader}>
                  <div className={styles.roleTitle}>{role.title}</div>
                  <div className={styles.roleCompany}>{role.company}</div>
                  <div className={styles.roleDates}>{role.dates}</div>
                </div>
                <ul className={styles.bullets}>
                  {role.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </FadeIn>
      </div>

      {/* Capabilities Section */}
      <FadeIn delay={0.2} direction="up" distance={20}>
        <section
          className={styles.capabilitiesSection}
          onMouseLeave={() => setHoveredCap(null)}
        >
          <h2 className={styles.sectionHeading}>Core Capabilities</h2>
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
      </FadeIn>

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

      {/* CTA Section */}
      <FadeIn delay={0.4} direction="up" distance={20}>
        <section className={styles.cta}>
          <p className={styles.ctaText}>
            Let's discuss how I can contribute to your organization.
          </p>
          <Link to="/contact" className={styles.ctaLink}>
            Get in Touch
          </Link>
        </section>
      </FadeIn>
    </motion.div>
  );
};

export default Resume;
