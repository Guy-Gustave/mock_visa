import React from 'react';
import SearchContainer from '../components/SearchContainer';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.homeSection}>
      <SearchContainer />
    </section>
  );
};

export default Home;
