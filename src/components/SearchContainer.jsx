import React, { useState } from 'react';

import VisaSelectComponent from './SearchSectionComponents/VisaSelectComponent';
import CountrySelectComponent from './SearchSectionComponents/CountrySelectComponent';
import styles from '../styles/SearchContainer.module.css';

const SearchContainer = () => {
  const [currentCountry, setCurrentCountry] = useState('');

  return (
    <div className={styles.searchContainerDiv}>
      <h1 className={styles.searchContainerHeading}>Find Your Freedom</h1>
      <div className={styles.searchWrapperDiv}>
        <div className={styles.visaSelectDiv}>
          <VisaSelectComponent />
        </div>
        <div className={styles.searchCountryDiv}>
          <CountrySelectComponent setCurrentCountry={setCurrentCountry} />
        </div>
        <small className={styles.confirmationSmall}>
          {currentCountry
            ? `You want to travel to ${currentCountry}`
            : 'Country you want to travel to'}
        </small>
        <button type="button" className={styles.searchContainerButton}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
