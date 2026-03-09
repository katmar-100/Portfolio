import React from 'react';
import styles from './GrainOverlay.module.css';

const GrainOverlay = () => (
  <div className={styles.grain} aria-hidden="true">
    <svg className={styles.grainSvg}>
      <filter id="grain-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-filter)" opacity="0.04" />
    </svg>
  </div>
);

export default GrainOverlay;
