import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import countries from '../services/emojiFlagCountries.json';
import visaTypes from '../services/VisaTypes.json';
import VisaSelectComponent from './SearchSectionComponents/VisaSelectComponent';
import CountrySelectComponent from './SearchSectionComponents/CountrySelectComponent';
import styles from '../styles/SearchContainer.module.css';

const SearchContainer = () => {
  const [currentCountry, setCurrentCountry] = useState(
    countries.flagCountries[0].name
  );
  const [currentVisa, setCurrentVisa] = useState(visaTypes[0]);

  return (
    <div className={styles.searchContainerDiv}>
      <h1 className={styles.searchContainerHeading}>Find Your Freedom</h1>
      <div className={styles.searchWrapperDiv}>
        <div className={styles.visaSelectDiv}>
          <VisaSelectComponent setCurrentVisa={setCurrentVisa} />
        </div>
        <div className={styles.searchCountryDiv}>
          <CountrySelectComponent setCurrentCountry={setCurrentCountry} />
        </div>
        <small className={styles.confirmationSmall}>
          {currentCountry
            ? `You want to travel to ${currentCountry}`
            : 'Country you want to travel to'}
        </small>
        <Link to={`/${currentCountry}/${currentVisa}`}>
          <button type="button" className={styles.searchContainerButton}>
            SEARCH
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchContainer;
