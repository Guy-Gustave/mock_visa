import React from 'react';
import HeroSection from '../components/HeroSection';
import SearchContainer from '../components/SearchContainer';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.homeSection}>
      <HeroSection />
    </section>
  );
};

export default Home;
