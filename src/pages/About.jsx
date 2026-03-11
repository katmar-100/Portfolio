import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import { useTheme } from '../contexts/ThemeContext';
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

export default function About() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const nameOpacity = useTransform(scrollY, [0, 120], [1, 0]);
  const nameY = useTransform(scrollY, [0, 120], [0, -60]);
  const nameScale = useTransform(scrollY, [0, 120], [1, 0.7]);
  const headshotY = useTransform(scrollY, [0, 150], [0, 70]);
  const headshotScale = useTransform(scrollY, [0, 150], [1, 1.25]);

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
  const bringItems = [
    {
      title: 'Strategic Vision',
      desc: 'Connecting creative decisions to business outcomes, brand clarity, and the long-term narrative of an organization.',
      Icon: VisionIcon,
    },
    {
      title: 'Systems Thinking',
      desc: 'Designing brand systems, guidelines, and standards that allow creative work to scale without losing quality.',
      Icon: SystemsIcon,
    },
    {
      title: 'Team Leadership',
      desc: 'Building and mentoring creative teams where strong standards, curiosity, and collaboration produce consistently exceptional work.',
      Icon: TeamIcon,
    },
    {
      title: 'Executive Communication',
      desc: 'Translating complex ideas into clear, compelling narratives for leadership, partners, and stakeholders.',
      Icon: CommIcon,
    },
    {
      title: 'Cross-Functional Fluency',
      desc: 'Working seamlessly across marketing, product, engineering, and executive teams to move ideas from concept to execution.',
      Icon: CrossFuncIcon,
    },
    {
      title: 'Future-Facing Mindset',
      desc: 'Staying curious about emerging tools, AI-driven creativity, and the evolving role of design in shaping what comes next.',
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
          <motion.div className={styles.headshotWrap} style={{ y: headshotY, scale: headshotScale }}>
            <img
              src="/images/katherine-atmar.jpg"
              alt="Katherine Atmar"
              className={styles.headshot}
            />
          </motion.div>
        </FadeIn>
        <FadeIn delay={0.03}>
          <motion.div
            className={styles.nameWrap}
            style={{ opacity: nameOpacity, y: nameY, scale: nameScale }}
          >
            <div className={styles.heroName}>Katherine Atmar</div>
            <div className={styles.heroRole}>Creative Director & Brand Leader</div>
          </motion.div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className={styles.headerTextWrap}>
            <p className={styles.subtitleBold}>
              Creative leadership isn't about having all the answers. It's about asking better questions - and building the systems that allow great work to happen again and again.
            </p>
            <p className={styles.subtitleSub}>
              I'm a Creative Director based in Miami, drawn to the space where strategy, design, and storytelling intersect.
            </p>
          </div>
        </FadeIn>
      </header>

      {/* TRUSTED BY BRANDS - Logo carousel */}
      <section className={styles.brands}>
        <h3 className={styles.brandsLabel}>Trusted by</h3>
        <BrandCarousel brands={brands} theme={theme} />
      </section>

      {/* Narrative Section */}
      <section className={styles.narrative}>
        <FadeIn delay={0} direction="up" distance={20}>
          <div className={styles.pullQuote}>
            <span>My career has taken shape at the intersection of strategy and&nbsp;aesthetics.</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05} direction="up" distance={20}>
          <p>
            Leading creative teams, building brand systems, and shaping the visual language of organizations at moments of growth and change has become my bread and butter.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} direction="up" distance={20}>
          <p>
            The industries have varied across a wide range, but the underlying challenge has stayed the same...
          </p>
        </FadeIn>

        <FadeIn delay={0.15} direction="up" distance={20}>
          <div className={styles.pullQuote}>
            <span>Translating complexity into clarity through brand, systems, and&nbsp;storytelling.</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up" distance={20}>
          <p>
            That challenge continues to shape how I lead today. As Creative Director at ChenMed, I lead the in-house creative organization for a national healthcare brand. My work focuses on building scalable creative systems, raising quality standards, and translating organizational ambition into a cohesive brand expression across more than 100 locations.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} direction="up" distance={20}>
          <p>
            Before that, I was the VP and Chief Marketing Officer at a cybersecurity startup. I built the company's brand, marketing, and creative function from the ground up - and played a major role from inception, to a period of rapid growth, to IPO preparation in a highly competitive market.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} direction="up" distance={20}>
          <p>
            Earlier in my career, I helped develop global visual systems at Electronic Arts. I also lived the agency life as an Art Director, crafting campaign storytelling at H+K Strategies (that contributed to more than $10M in major account wins!)
          </p>
        </FadeIn>

        <FadeIn delay={0.35} direction="up" distance={20}>
          <p>
            Along the way, I spent several years working independently as a creative director, partnering directly with founders and leadership teams to build brands that perform.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up" distance={20}>
          <div className={styles.pullQuote}>
            <span>What connects all of this is a core belief: design is infrastructure, not&nbsp;decoration.</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.45} direction="up" distance={20}>
          <p>
            The best creative work isn't defined by taste alone. It's built on systems that scale, narratives that endure, and standards that make excellence repeatable. That philosophy shapes how I approach creative leadership every day.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} direction="up" distance={20}>
          <div className={styles.seeWorkWrap}>
            <Link to="/work" className={styles.seeWorkButton}>
              See My Work
              <span className={styles.seeWorkArrow}>→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* What I Bring Section */}
      <section className={styles.bringSection}>
        <FadeIn delay={0}>
          <h2 className={styles.bringHeading}>My Unique Talents</h2>
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

        <FadeIn delay={0.3} direction="up" distance={20}>
          <div className={styles.seeWorkWrap}>
            <Link to="/resume" className={styles.seeWorkButton}>
              See My Resume
              <span className={styles.seeWorkArrow}>→</span>
            </Link>
          </div>
        </FadeIn>
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

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <Testimonials testimonials={aboutTestimonials} />
      </section>
    </motion.div>
  );
}
