import React from "react";
import HeroSection from "../components/HeroSection";
import SearchContainer from "../components/SearchContainer";

import styles from "../styles/Home.module.css";
import TopVisas from "../components/TopVisas";
import Paragraphs from "../components/Paragraphs";
import Advertise from "../components/Advertise";

const Home = () => {
  return (
    <>
      <section className={styles.homeSection}>
        <HeroSection />
        <TopVisas />
        <Paragraphs/>
        <Advertise/>
      </section>
      <section>
      </section>
    </>
  );
};

export default Home;
