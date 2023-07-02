import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  let location = useLocation();
  location = decodeURI(location.pathname);
  const countryVisa = location.split('/');
  const visaType = countryVisa[countryVisa.length - 1];
  const countryName = countryVisa[countryVisa.length - 2];

  return (
    <div style={{ padding: '0 30px' }}>
      <h1>Results</h1>
      <h3 style={{ margin: '20px 0' }}>Country: {countryName}</h3>
      <h3>Visa Type: {visaType}</h3>
    </div>
  );
};

export default ResultPage;
