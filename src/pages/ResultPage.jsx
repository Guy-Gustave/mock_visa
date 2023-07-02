import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  let location = useLocation();
  location = decodeURI(location.pathname);
  const countryVisa = location.split('/');
  const visaType = countryVisa[countryVisa.length - 1];
  const countryName = countryVisa[countryVisa.length - 2];

  return (
    <div>
      <h1>Results</h1>
      <h3>Country: {countryName}</h3>
      <h5>Visa Type: {visaType}</h5>
    </div>
  );
};

export default ResultPage;
