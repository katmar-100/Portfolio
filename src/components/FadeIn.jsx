import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  distance = 40,
}) => {
  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return { x: -distance, y: 0 };
      case 'right':
        return { x: distance, y: 0 };
      case 'up':
      default:
        return { x: 0, y: distance };
    }
  };

  const initialTransform = getInitialTransform();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...initialTransform,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '50px' }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
        delay: Math.min(delay, 0.3),
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
