import React from 'react';

import SearchContainer from './SearchContainer';
import MetricsComponent from './MetricsComponent';
import AsSeenContainer from './AsSeenComponents/AsSeenContainer';
import styles from '../styles/HeroSection.module.css';
import searchContainerStyles from '../styles/SearchContainer.module.css';

const HeroSection = () => {
  return (
    <section
      className={`${styles.heroSectionWrapper} ${searchContainerStyles.displayFlexAndColumn}`}
    >
      <SearchContainer />
      <MetricsComponent />
      <AsSeenContainer />
    </section>
  );
};

export default HeroSection;
