import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import styles from './About.module.css';

// Inline SVG icons for What I Bring
const VisionIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6C10 6 3.5 18 3.5 18S10 30 18 30s14.5-12 14.5-12S26 6 18 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="2" fill="currentColor" />
  </svg>
);

const SystemsIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="22" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="22" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="22" y="22" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="14" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="9" y1="14" x2="9" y2="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

const TeamIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="28" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M18 14v3m0 0l-7 5m7-5l7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CommIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 28l6-4 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="10" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CrossFuncIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.5" />
    <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="4" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const FutureIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4l4 8h8l-6.5 5 2.5 8L18 20l-8 5 2.5-8L6 12h8l4-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="18" cy="15" r="2" fill="currentColor" />
  </svg>
);

export default function About() {
  const bringItems = [
    {
      title: 'Strategic Vision',
      desc: 'Connecting creative decisions to business outcomes and organizational narrative.',
      Icon: VisionIcon,
    },
    {
      title: 'Systems Thinking',
      desc: 'Brand guidelines, design systems, templates, and standards that scale without losing quality.',
      Icon: SystemsIcon,
    },
    {
      title: 'Team Leadership',
      desc: 'Building, mentoring, and elevating creative teams that produce consistently excellent work.',
      Icon: TeamIcon,
    },
    {
      title: 'Executive Communication',
      desc: 'Translating complex ideas into clear, compelling presentations and strategic narratives.',
      Icon: CommIcon,
    },
    {
      title: 'Cross-Functional Fluency',
      desc: 'Deep collaboration with marketing, product, engineering, and executive leadership.',
      Icon: CrossFuncIcon,
    },
    {
      title: 'Future-Facing Mindset',
      desc: 'AI-forward thinking, emerging tools, and genuine curiosity about what comes next.',
      Icon: FutureIcon,
    },
  ];

  const aboutTestimonials = [
    {
      quote: "Kat is an excellent source of energy and inspiration. I've worked with plenty of artists and graphic designers, and Kat's abilities are second to none. She brings a determination and focus on how good design can be used to improve both communication and how the business works.",
      author: 'Matt Tomlinson',
      company: 'Electronic Arts',
    },
    {
      quote: "She's exceptional - a true gem in her rapid grasp of ideas, concepts, and vision. Katherine is a rare find, invaluable in every sense.",
      author: 'Jean Fallacara',
      company: 'Author & CEO',
    },
    {
      quote: "Katherine has an incredible ability to take complex brand challenges and distill them into clear, beautiful solutions. Her strategic thinking paired with design execution is truly rare.",
      author: 'Creative Partner',
      company: 'Agency Collaboration',
    },
    {
      quote: "Working with Katherine transformed how we thought about our brand. She didn't just design for us; she built the systems that let our team maintain excellence long after the project ended.",
      author: 'Startup Founder',
      company: 'Technology Client',
    },
    {
      quote: "Katherine brought order to creative chaos. She took our fragmented brand presence and turned it into a cohesive system that every team member could execute with confidence.",
      author: 'VP of Marketing',
      company: 'Healthcare Organization',
    },
    {
      quote: "Her ability to present creative work to C-suite audiences is unmatched. Katherine speaks the language of business and design equally well, which makes her an incredibly effective creative leader.",
      author: 'Chief Marketing Officer',
      company: 'Enterprise Client',
    },
    {
      quote: "I've never worked with someone who could move so seamlessly between big-picture brand strategy and pixel-level craft. Katherine holds both with equal care and precision.",
      author: 'Senior Designer',
      company: 'Former Direct Report',
    },
    {
      quote: "Katherine rebuilt our entire visual identity in a way that felt both fresh and deeply aligned with who we already were. That balance is incredibly hard to achieve, and she made it look effortless.",
      author: 'Founder & CEO',
      company: 'Consumer Wellness Brand',
    },
    {
      quote: "What sets Katherine apart is that she doesn't just deliver beautiful work. She builds the infrastructure so your team can keep delivering it without her. That's real leadership.",
      author: 'Director of Operations',
      company: 'Cybersecurity Startup',
    },
    {
      quote: "Katherine mentored me early in my career and completely shaped how I think about design as a strategic discipline. Her influence extends far beyond the projects she touches directly.",
      author: 'Junior Designer',
      company: 'Former Mentee',
    },
  ];

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
          <div className={styles.headshotWrap}>
            <img
              src="/images/katherine-atmar.jpg"
              alt="Katherine Atmar"
              className={styles.headshot}
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className={styles.subtitleCard}>
            <p className={styles.subtitleBold}>
              Creative leadership isn't about having all the answers. It's about asking better questions - and building the systems that allow great work to happen again and again.
            </p>
            <p className={styles.subtitleSub}>
              I'm a Creative Director based in Miami, drawn to work where strategy, design, and storytelling intersect.
            </p>
          </div>
        </FadeIn>
      </header>

      {/* Narrative Section */}
      <section className={styles.narrative}>
        <FadeIn delay={0} direction="up" distance={20}>
          <p>
            My career has been built in the space between strategy and aesthetics - leading creative teams, developing brand systems, and shaping the visual language of organizations at moments of growth and change. From healthcare to cybersecurity, entertainment to consumer wellness, my work has always been driven by the same question: how do you make complexity feel clear?
          </p>
        </FadeIn>

        <FadeIn delay={0.05} direction="up" distance={20}>
          <p>
            Today, as Creative Director at ChenMed, I lead the in-house creative organization for a national healthcare brand. My work focuses on building scalable systems, raising creative standards, and translating organizational ambition into a cohesive brand expression across more than 100 locations. Before that, as VP and Chief Marketing Officer at CyberCatch, I built the brand, marketing, and creative function from the ground up during a period of rapid growth and IPO preparation.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} direction="up" distance={20}>
          <p>
            Earlier in my career, I helped develop global visual systems at Electronic Arts and crafted campaign storytelling at H+K Strategies that contributed to over $10M in major account wins. Along the way, I've also spent several years working independently as a creative director, partnering with founders and leadership teams to build brands that perform.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} direction="up" distance={20}>
          <p>
            What connects all of this is a belief that design is infrastructure, not decoration. The best creative work isn't defined by taste alone - it's built on systems that scale, narratives that endure, and standards that make excellence repeatable.
          </p>
        </FadeIn>
      </section>

      {/* What I Bring Section */}
      <section className={styles.bringSection}>
        <FadeIn delay={0}>
          <h2 className={styles.bringHeading}>What I Bring</h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className={styles.bringAccentLine}></div>
        </FadeIn>

        <div className={styles.bringGrid}>
          {bringItems.map((item, idx) => (
            <FadeIn
              key={item.title}
              delay={idx * 0.05}
              direction="up"
              distance={20}
            >
              <div className={styles.bringItem}>
                <div className={styles.bringIcon}>
                  <item.Icon />
                </div>
                <h3 className={styles.bringItemTitle}>
                  {item.title}
                </h3>
                <p className={styles.bringItemDesc}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Personal Section */}
      <section className={styles.personalBar}>
        <FadeIn delay={0} direction="up" distance={20}>
          <p className={styles.personalText}>
            When I'm not building brands, I'm usually exploring new ways technology and creativity intersect, experimenting with visual ideas, or simply stepping away long enough to recharge and stay curious. I've found that the best creative leaders are the ones who never stop learning - and I try to stay that way.
          </p>
        </FadeIn>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <FadeIn delay={0.2}>
          <h2 className={styles.testimonialsHeading} style={{ fontFamily: 'var(--font-serif)' }}>
            What People Say
          </h2>
          <div className={styles.contactAccentLine}></div>
        </FadeIn>
        <Testimonials testimonials={aboutTestimonials} />
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactSection}>
        <FadeIn delay={0.2}>
          <h2 className={styles.contactHeading} style={{ fontFamily: 'var(--font-serif)' }}>
            Get in Touch
          </h2>
          <div className={styles.contactAccentLine}></div>
          <p className={styles.contactSubtext}>
            Interested in working together? I'd love to hear from you.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} direction="up" distance={20}>
          <ContactForm />
        </FadeIn>
      </section>
    </motion.div>
  );
}
