import React, { useState } from 'react';

import styles from '../../styles/CountrySelectComponent.module.css';

const CountrySelectComponent = () => {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className={styles.countrySelectContainerDiv}>
      <div
        className={`${styles.selectedCountriesDiv} ${
          inputFocused ? styles.selectedCountriesDivFocus : ''
        }`}
        tabIndex={-1}
      >
        <input
          type="text"
          className={styles.selectedCountryInput}
          placeholder="Choose your passport country"
          autoComplete="false"
          onFocus={(e) => {
            setInputFocused(true);
            e.target.placeholder = '';
          }}
          onBlur={(e) => {
            setInputFocused(false);
            e.target.placeholder = 'Choose your passport country';
          }}
        />
        <div className={styles.countriesListDiv}></div>
      </div>
    </div>
  );
};

export default CountrySelectComponent;
