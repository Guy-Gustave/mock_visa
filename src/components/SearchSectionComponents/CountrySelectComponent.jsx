import React, { useState } from 'react';

import countries from '../../services/emojiFlagCountries.json';
import styles from '../../styles/CountrySelectComponent.module.css';

const CountrySelectComponent = () => {
  const countriesList = [...countries.flagCountries];
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className={styles.countrySelectContainerDiv}>
      <div
        className={`${styles.selectedCountriesDiv} ${
          inputFocused ? styles.selectedCountriesDivFocus : ''
        }`}
        tabIndex={-1}
        onFocus={(e) => {
          if (!inputFocused) setInputFocused(true);
          e.target.placeholder = '';
          console.log('I am the same guy called every time', e.target);
        }}
        onBlur={(e) => {
          setInputFocused(false);
          console.log('I was hit for a split second');
          e.target.placeholder = 'Choose your passport country';
        }}
      >
        <input
          type="text"
          className={styles.selectedCountryInput}
          placeholder="Choose your passport country"
          autoComplete="false"
        />
        <div
          className={`${styles.countriesListDiv} ${
            inputFocused ? styles.countriesListDivShow : ''
          }`}
        >
          <ul className={styles.countriesList}>
            {countriesList.map((country) => {
              return (
                <li key={country.name} className={styles.countryListItem}>
                  <span>{country.flag}</span>
                  <p>{country.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountrySelectComponent;
