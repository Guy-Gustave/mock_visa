import React from 'react';

import SearchContainer from './SearchContainer';
import MetricsComponent from './MetricsComponent';
import styles from '../styles/HeroSection.module.css';
import searchContainerStyles from '../styles/SearchContainer.module.css';

const HeroSection = () => {
  return (
    <section
      className={`${styles.heroSectionWrapper} ${searchContainerStyles.displayFlexAndColumn}`}
    >
      <SearchContainer />
      <MetricsComponent />
    </section>
  );
};

export default HeroSection;
