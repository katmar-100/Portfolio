import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Testimonials.module.css';

// Star icon component
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0l1.76 4.58L13.65 5l-3.53 3.12.98 4.88L7 10.5 2.9 13l.98-4.88L.35 5l4.89-.42L7 0z" />
  </svg>
);

const Stars = () => (
  <div className={styles.stars}>
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.quoteIcon}>
    <path d="M4 14c0-3.5 2-6 5-8l.8 1.2C7.8 9 7 10.5 6.8 12.5H10c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-3.5zm10 0c0-3.5 2-6 5-8l.8 1.2c-2 1.8-2.8 3.3-3 5.3H20c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-3.5z" fill="currentColor" />
  </svg>
);

const allTestimonials = [
  {
    quote: "Kat is an excellent source of energy and inspiration. I've worked with plenty of artists and graphic designers, and Kat's abilities are second to none. She brings a determination and focus on how good design can be used to improve both communication and how the business works. We need more Kats in this world!",
    author: "Matt Tomlinson",
    company: "Electronic Arts",
  },
  {
    quote: "She's exceptional\u2014a true gem in her rapid grasp of ideas, concepts, and vision. Katherine is a rare find, invaluable in every sense. I'm looking forward to collaborating with her on many more ventures.",
    author: "Jean Fallacara",
    company: "Author & CEO",
  },
  {
    quote: "Katherine is my first choice for enhancing and refining presentations. She consistently delivers excellent work!",
    author: "Upwork Client",
    company: "",
  },
  {
    quote: "Katherine is a great designer, hard working, high quality work - delivered on time. I will definitely use her again.",
    author: "Upwork Client",
    company: "London, U.K.",
  },
  {
    quote: "Katherine is outstanding! Brilliant talent, superb work products delivered consistently! Will hire again and again on other projects!",
    author: "Sai Huda",
    company: "Author & CEO",
  },
  {
    quote: "Kat was extremely well-equipped to help us with the overhaul and reformatting of our presentations in coordination with a corporate re-branding effort. Her designs were creative and clean, incorporating imagery and new ways to present valuable information in a clear, simple and insightful manner.",
    author: "David Bradway",
    company: "Watchpoint",
  },
  {
    quote: "Was astonished by the efficiency of Katherine once again! Can't stop her creative and visionary mindset!",
    author: "Upwork Client",
    company: "",
  },
  {
    quote: "It was absolutely amazing to work with Katherine. She delivered very high-quality designs for my presentation. Katherine is really communicative and built on my feedback. All her milestones were delivered on time and at very high standard. I would like to work with Katherine again.",
    author: "Claudia",
    company: "Marmont Labs",
  },
  {
    quote: "Katherine was great! She took my outline and ideas and created a beautiful pitch presentation that far exceeded my expectations. Highly recommend to anyone who is looking for someone talented and very communicative.",
    author: "Upwork Client",
    company: "St. Louis, MO",
  },
  {
    quote: "Katherine was wonderful to work with. Very responsive, and took constructive criticism in stride to arrive at a better deliverable in the end. Our new PPT deck is a big improvement and should hopefully result in new sales for our team.",
    author: "Ben Wieder",
    company: "Level 6 Incentives",
  },
  {
    quote: "Katherine quickly created key pages for our presentation. Her attention to detail and timeliness were extremely helpful. I would highly recommend Katherine to anyone looking for a professional presentation.",
    author: "Carter Golgart",
    company: "Odyssey Capital",
  },
  {
    quote: "Whoaa! I just can't express how happy I was to find Katherine, she has been SO professional, so fast and definitely understood the requirements without questions nor back & forth. Katherine is now part of MY FAVORITE and I will be working with her for upcoming projects... I would recommend her for any Creative Projects you have, her design skills are the best!",
    author: "Upwork Client",
    company: "Miami, FL",
  },
  {
    quote: "Amazing work. Much appreciate your creativity and ease of working through everything.",
    author: "Jennifer Haisten",
    company: "Times 10",
  },
  {
    quote: "Katherine is a top-tier talent, consistently delivering work of impeccable quality. With a keen eye for detail and a masterful touch, she elevated my presentation deck, taking it to an extraordinary level of sophistication and impact. Her approach is both collaborative and effortless, making the process a true pleasure.",
    author: "Upwork Client",
    company: "Atlanta, GA",
  },
  {
    quote: "Great to work with, very talented, and a true professional.",
    author: "Upwork Client",
    company: "Dallas, TX",
  },
  {
    quote: "With a short timeline, Katherine created a fantastic PowerPoint Presentation for us. She listened to our needs carefully and produced a fresh, clean, and modern presentation. We were incredibly pleased with the final result and will definitely hire Katherine again for future graphic design projects.",
    author: "Allison",
    company: "Richmond, VI",
  },
  {
    quote: "Katherine did an AMAZING job - she was prompt, professional, and gave us an excellent deliverable ahead of a very tight deadline. Communication was super smooth and clear. Crushed it.",
    author: "Randall Stainton",
    company: "President, Finn",
  },
  {
    quote: "Katherine was a great partner in helping us to produce multiple design pieces for various clients. She was always insightful and responsive to our requests while ALWAYS making our deadlines. We look forward to working with her in the future.",
    author: "Dean",
    company: "Mission Disrupt",
  },
  {
    quote: "Katherine was a pleasure to work with. We tasked her with modifying our pitch deck and she exceeded expectations. She was prompt and also receptive of feedback. After laying out our expectation, Katherine worked with us on edits and ideas that we had along the way. I am looking forward to doing more projects with her in the future!",
    author: "Myles",
    company: "Picture It",
  },
  {
    quote: "Katherine once again proved her exceptional skills in enhancing my film pitch deck. This being our second collaboration, she consistently delivers top-notch quality, surpassing expectations with her attention to detail and creative insights. Her ability to elevate my vision has been invaluable.",
    author: "Devon Ryan",
    company: "CEO, Flying Aces Films",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Show 2 testimonials at a time
  const itemsPerPage = 2;
  const totalPages = Math.ceil(allTestimonials.length / itemsPerPage);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, 6000);
    return () => clearInterval(timer);
  }, [goToNext, isPaused]);

  const currentItems = allTestimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section
      className={styles.testimonials}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.carouselContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.grid}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {currentItems.map((testimonial, index) => (
              <div key={index} className={styles.quoteContainer}>
                <Stars />
                <QuoteIcon />
                <p className={styles.quoteText}>{testimonial.quote}</p>
                <div className={styles.attribution}>
                  <div className={styles.name}>{testimonial.author}</div>
                  {testimonial.company && (
                    <div className={styles.company}>{testimonial.company}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className={styles.carouselNav}>
          <button
            className={styles.navButton}
            onClick={goToPrev}
            aria-label="Previous testimonials"
          >
            &#8592;
          </button>

          <div className={styles.dots}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.navButton}
            onClick={goToNext}
            aria-label="Next testimonials"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
