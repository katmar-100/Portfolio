import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  <svg width="32" height="26" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.quoteIcon}>
    <path d="M4 14c0-3.5 2-6 5-8l.8 1.2C7.8 9 7 10.5 6.8 12.5H10c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-3.5zm10 0c0-3.5 2-6 5-8l.8 1.2c-2 1.8-2.8 3.3-3 5.3H20c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-3.5z" fill="currentColor" />
  </svg>
);

const allTestimonials = [
  // Slide 1: Medium + Medium
  {
    quote: "Katherine was great! She took my outline and ideas and created a beautiful pitch presentation that far exceeded my expectations. Highly recommend to anyone who is looking for someone talented and very communicative.",
    author: "Contract Client",
    company: "St. Louis, MO",
  },
  // Slide 3: Short + Short
  {
    quote: "Katherine is my first choice for enhancing and refining presentations. She consistently delivers excellent work!",
    author: "Contract Client",
    company: "United States",
  },
  {
    quote: "Katherine is a great designer, hard working, high quality work - delivered on time. I will definitely use her again.",
    author: "Contract Client",
    company: "London, U.K.",
  },
  // Slide 3: Long + Long
  {
    quote: "Kat was extremely well-equipped to help us with the overhaul and reformatting of our presentations in coordination with a corporate re-branding effort. Her designs were creative and clean, incorporating imagery and new ways to present valuable information in a clear, simple and insightful manner.",
    author: "David Bradway",
    company: "Watchpoint",
  },
  // Slide 5: Medium + Medium
  {
    quote: "Katherine was wonderful to work with. Very responsive, and took constructive criticism in stride to arrive at a better deliverable in the end. Our new PPT deck is a big improvement and should hopefully result in new sales for our team.",
    author: "Ben Wieder",
    company: "Level 6 Incentives",
  },
  {
    quote: "Katherine was a great partner in helping us to produce multiple design pieces for various clients. She was always insightful and responsive to our requests while ALWAYS making our deadlines. We look forward to working with her in the future.",
    author: "Dean",
    company: "Mission Disrupt",
  },
  // Slide 5: Short + Short
  {
    quote: "Was astonished by the efficiency of Katherine once again! Can't stop her creative and visionary mindset!",
    author: "Contract Client",
    company: "United States",
  },
  // Slide 7: Long + Long
  {
    quote: "Katherine is a top-tier talent, consistently delivering work of impeccable quality. With a keen eye for detail and a masterful touch, she elevated my presentation deck, taking it to an extraordinary level of sophistication and impact. Her approach is both collaborative and effortless, making the process a true pleasure.",
    author: "Contract Client",
    company: "Atlanta, GA",
  },
  {
    quote: "With a short timeline, Katherine created a fantastic PowerPoint Presentation for us. She listened to our needs carefully and produced a fresh, clean, and modern presentation. We were incredibly pleased with the final result and will definitely hire Katherine again for future graphic design projects.",
    author: "Allison",
    company: "Richmond, VI",
  },
  // Slide 8: Medium + Medium
  {
    quote: "Katherine quickly created key pages for our presentation. Her attention to detail and timeliness were extremely helpful. I would highly recommend Katherine to anyone looking for a professional presentation.",
    author: "Carter Golgart",
    company: "Odyssey Capital",
  },
  {
    quote: "Katherine did an AMAZING job - she was prompt, professional, and gave us an excellent deliverable ahead of a very tight deadline. Communication was super smooth and clear. Crushed it.",
    author: "Randall Stainton",
    company: "President, Finn",
  },
  // Slide 9: Short + Short
  {
    quote: "Amazing work. Much appreciate your creativity and ease of working through everything.",
    author: "Jennifer Haisten",
    company: "Times 10",
  },
  {
    quote: "Great to work with, very talented, and a true professional.",
    author: "Contract Client",
    company: "Dallas, TX",
  },
  // Slide 10: Long + Long
  {
    quote: "Whoaa! I just can't express how happy I was to find Katherine, she has been SO professional, so fast and definitely understood the requirements without questions nor back & forth. Katherine is now part of MY FAVORITE and I will be working with her for upcoming projects... I would recommend her for any Creative Projects you have, her design skills are the best!",
    author: "Contract Client",
    company: "Miami, FL",
  },
  {
    quote: "Katherine once again proved her exceptional skills in enhancing my film pitch deck. This being our second collaboration, she consistently delivers top-notch quality, surpassing expectations with her attention to detail and creative insights. Her ability to elevate my vision has been invaluable.",
    author: "Devon Ryan",
    company: "CEO, Flying Aces Films",
  },
  // Slide 11: Long + Long
  {
    quote: "I had the pleasure of working with Katherine and I am thoroughly impressed with her work. She delivered an outstanding result on very short notice and was readily available whenever I needed her. The quality of her work was exceptional, and the revisions needed were minimal. Katherine's professionalism and dedication are truly commendable. I highly recommend her to anyone in need of top-notch creative services, and I am confident that I will be collaborating with her on future projects as well.",
    author: "Tiffany",
    company: "Seattle, WA",
  },
  {
    quote: "Katherine is an exceptional creative designer. Her responsiveness throughout our engagement was amazing. She provided thorough and high-quality work and went above and beyond, even with our tight deadline. Katherine was willing to hop on calls, provide regular updates, and maintain open communication throughout the project. I wholeheartedly recommend Katherine to anyone seeking a talented and reliable designer who prioritizes their clients' needs.",
    author: "Miguel",
    company: "Los Angeles, CA",
  },
  // Slide 12: Long + Long
  {
    quote: "Katherine is very creative, thoughtful, and detailed oriented. She does a great job of understanding the purpose and intent for the deliverables and focuses on supporting that, rather than pushing a personal agenda. She is extremely easy to work with and was very accommodating of our schedule. She is a true professional. We will continue to work with Katherine.",
    author: "Patrick & Lisa",
    company: "Yale University",
  },
  {
    quote: "Katherine was fantastic. She was very professional and our pitch deck was revamped into an immaculate, modern look over the course of 3 weeks. We appreciated how efficient she worked and her strong communication skills. She always got back to us within <1 hour and responded quickly to our feedback. We couldn't recommend her more highly and will use her again for future projects!",
    author: "Nicole & Max",
    company: "United States",
  },
  // Slide 13: Medium + Medium
  {
    quote: "We had a very short deadline to turn a pitch outline into a visually appealing pitch deck. Katherine not only helped us meet the deadline but also created an incredible deck.",
    author: "Dustin",
    company: "Dallas, TX",
  },
  {
    quote: "I had the pleasure of working with Katherine to enhance my client's sales presentation, and she did an extraordinary job! She's incredibly easy to work with, and her turnaround time is impressively fast. Katherine went above and beyond my expectations, delivering fantastic results. I deeply appreciate her dedication and the exceptional work she produced.",
    author: "Yumna",
    company: "United States",
  },
  // Slide 14: Medium + Medium
  {
    quote: "Katherine was beyond professional, responsive, and an absolute pleasure to work with! Would 1000% recommend to anyone. We definitely want to work with her again! Thank you Katherine!",
    author: "Courtney & Grace",
    company: "Accrue",
  },
  // Slide 12: Medium + Short
  {
    quote: "Katherine is awesome to work with! I contacted her for assistance with a project I needed completed within hours of my request. She came to the rescue and provided exceptional collaboration! Communicated timely and effectively, provides appropriate recommendations, shows courtesy in her approach to collaboration, and delivers a quality product.",
    author: "Contract Client",
    company: "Australia",
  },
  {
    quote: "Katherine did some great work for us. She did it fast and did it really well. She was very responsive and receptive to our changes and ideas. Great experience!!",
    author: "Contract Client",
    company: "Norfolk, VI",
  },
  // Slide 16: Short + Short
  {
    quote: "Katherine is exceptional. She effortlessly elevates and translates business language into compelling storytelling for presentations. Highly recommended!",
    author: "Devon",
    company: "Flying Aces Films",
  },
  // Slide 17: Short + Short
  {
    quote: "Katherine is incredible. You will not regret working with her. She's able to deliver a high quality product, work collaboratively, and does things efficiently. We're really glad we worked together on our pitch deck project.",
    author: "Jorian",
    company: "London, U.K.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [wrapHeight, setWrapHeight] = useState(260);
  const [measured, setMeasured] = useState(false);
  const measureRef = useRef(null);
  const gridRef = useRef(null);

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

  // Measure ALL pages on mount to find the max height
  useEffect(() => {
    if (!measureRef.current) return;
    const pages = measureRef.current.querySelectorAll('[data-measure-page]');
    let maxH = 0;
    pages.forEach(page => {
      const h = page.getBoundingClientRect().height;
      if (h > maxH) maxH = h;
    });
    if (maxH > 0) {
      setWrapHeight(maxH);
      setMeasured(true);
    }
  }, []);

  const currentItems = allTestimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  // Build all pages for measurement
  const allPages = Array.from({ length: totalPages }, (_, i) =>
    allTestimonials.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );

  return (
    <section
      className={styles.testimonials}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hidden container to measure all pages */}
      {!measured && (
        <div
          ref={measureRef}
          aria-hidden="true"
          style={{ position: 'absolute', visibility: 'hidden', width: '100%', maxWidth: 900, left: '50%', transform: 'translateX(-50%)' }}
        >
          {allPages.map((pageItems, pageIdx) => (
            <div key={pageIdx} data-measure-page className={styles.grid} style={{ position: 'relative' }}>
              {pageItems.map((testimonial, idx) => (
                <div key={idx} className={styles.quoteContainer}>
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
            </div>
          ))}
        </div>
      )}

      <div className={styles.carouselContainer}>
        {/* Navigation — above testimonials */}
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

        <div className={styles.gridWrap} style={{ height: wrapHeight }}>
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              ref={gridRef}
              key={currentIndex}
              custom={direction}
              className={styles.grid}
              variants={{
                enter: (d) => ({ opacity: 0, x: d * 80 }),
                center: { opacity: 1, x: 0 },
                exit: (d) => ({ opacity: 0, x: d * -80 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
