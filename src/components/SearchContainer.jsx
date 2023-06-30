import React from 'react';

import styles from '../styles/SearchContainer.module.css';

const SearchContainer = () => {
  return (
    <div className={styles.searchContainerDiv}>
      <h1 className={styles.searchContainerHeading}>Find Your Freedom</h1>
      <div className={styles.searchWrapperDiv}>
        <div className={styles.visaSelectDiv}></div>
        <div className={styles.searchCountryDiv}></div>
        <small>Country you want to travel to</small>
        <button type="button">SEARCH</button>
      </div>
    </div>
  );
};

export default SearchContainer;
