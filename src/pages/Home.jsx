import React from "react";
import HeroSection from "../components/HeroSection";
import SearchContainer from "../components/SearchContainer";

import styles from "../styles/Home.module.css";
import TopVisas from "../components/TopVisas";

const Home = () => {
  return (
    <>
      <section className={styles.homeSection}>
        <HeroSection />
        <TopVisas />
      </section>
      <section></section>
    </>
  );
};

export default Home;
