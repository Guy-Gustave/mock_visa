import React from 'react';

import SearchContainer from './SearchContainer';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSectionWrapper}>
      <SearchContainer />
    </section>
  );
};

export default HeroSection;
