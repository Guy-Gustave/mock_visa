import React from 'react';

import coutries from '../../services/emojiFlagCountries.json';
import visaTypes from '../../services/VisaTypes.json';
import styles from '../../styles/VisaSelectComponent.module.css';

const VisaSelectComponent = () => {
  return (
    <div className={styles.visaSelectContainerDiv}>
      <div className={styles.selectTypesDiv} tabIndex={-1}>
        <p className={styles.selectedTypePar}>Uganda</p>
        <div className={styles.visaTypesListDiv}>
          <ul className={styles.visaTypesList}>
            {visaTypes.map((type) => {
              return (
                <li key={type} className={styles.visaListItem}>
                  {type}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisaSelectComponent;
