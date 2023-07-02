import React, { useState, useRef } from 'react';

import countries from '../../services/emojiFlagCountries.json';
import styles from '../../styles/CountrySelectComponent.module.css';

const CountrySelectComponent = ({ setCurrentCountry }) => {
  // component starter variables
  const countriesList = [...countries.flagCountries];

  // component states
  const [currentCountriesList, setCurrentCountriesList] = useState([
    ...countriesList,
  ]);
  const [inputFocused, setInputFocused] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  // component refs
  const inputRef = useRef();
  const countriesRef = useRef();

  const handleSelectListItem = (e) => {
    inputRef.current.value = e.target.children[1].outerText;
    setSelectedCountry(e.target.children[1].outerText);
    setCurrentCountry(e.target.children[1].outerText);
    countriesRef.current.blur();
  };

  const handleDynamicSearch = (e) => {
    const currentText = e.target.value;
    const newList = countriesList.filter((country) =>
      country.name.toLowerCase().includes(currentText.toLowerCase())
    );
    setCurrentCountriesList([...newList]);
  };

  return (
    <div className={styles.countrySelectContainerDiv}>
      <div
        className={`${styles.selectedCountriesDiv} ${
          inputFocused ? styles.selectedCountriesDivFocus : ''
        }`}
        ref={countriesRef}
        tabIndex={-1}
        onFocus={(e) => {
          setInputFocused(true);
          e.target.placeholder = '';
        }}
        onBlur={(e) => {
          setInputFocused(false);
          e.target.placeholder = 'Choose your passport country';
        }}
      >
        <input
          type="text"
          className={styles.selectedCountryInput}
          placeholder="Choose your passport country"
          autoComplete="off"
          name="Country"
          defaultValue={selectedCountry}
          onChange={handleDynamicSearch}
          ref={inputRef}
        />
        <div
          className={`${styles.countriesListDiv} ${
            inputFocused ? styles.countriesListDivShow : ''
          }`}
        >
          <ul className={styles.countriesList}>
            {currentCountriesList.map((country) => {
              return (
                <li
                  key={country.name}
                  className={`${styles.countryListItem} ${
                    selectedCountry == country.name ? styles.itemSelected : ''
                  }`}
                  onClick={handleSelectListItem}
                  name={country.name}
                >
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
