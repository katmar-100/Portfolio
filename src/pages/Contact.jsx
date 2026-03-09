import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import FadeIn from '../components/FadeIn';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Let's Talk</h1>
        <div className={styles.subtitleCard}>
          <p className={styles.subtitle}>
            Whether it's a leadership role, a strategic brand challenge, or simply a conversation worth having, I'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <FadeIn delay={0.05} direction="up" distance={20}>
        <div className={styles.grid}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className={styles.infoSection}>
            <h3 className={styles.infoHeading}>Direct Contact</h3>

            <a href="mailto:katherine.atmar@gmail.com" className={styles.emailLink}>
              katherine.atmar@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/katherine-atmar/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
            >
              LinkedIn Profile →
            </a>

            <p className={styles.infoParagraph}>
              Based in the United States. Also open to roles in Tokyo and London. Onsite, remote and hybrid welcome.
            </p>

            <p className={styles.infoParagraph}>
              I'll get back to you within two business days.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Availability Section */}
      <FadeIn delay={0.1} direction="up" distance={20}>
        <section className={styles.availability}>
          <p className={styles.availabilityText}>
            I'm always interested in learning about senior creative leadership opportunities: Creative Director, Design Director, ECD, VP Brand & Creative, and similar roles. Don't hesitate to reach out!
          </p>
        </section>
      </FadeIn>
    </motion.div>
  );
};

export default Contact;
