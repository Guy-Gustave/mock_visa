import React, { useRef, useState } from 'react';

import visaTypes from '../../services/VisaTypes.json';
import styles from '../../styles/VisaSelectComponent.module.css';

const VisaSelectComponent = ({ setCurrentVisa }) => {
  const visaTypesArray = [...visaTypes];
  const [selectedVisa, setSelectedVisa] = useState(visaTypesArray[0]);

  let selectDivRef = useRef();
  const handleSettingVisa = (e) => {
    console.log(e.target.outerText);
    setSelectedVisa(e.target.outerText);
    setCurrentVisa(e.target.outerText);
    selectDivRef.current.blur();
  };

  return (
    <div className={styles.visaSelectContainerDiv}>
      <div className={styles.selectTypesDiv} tabIndex={-1} ref={selectDivRef}>
        <span className={styles.tagSpan}>
          <i className="fa-solid fa-tag"></i>
        </span>
        <p className={styles.selectedTypePar}>{selectedVisa}</p>
        <span className={styles.angleSpan}>
          <i className="fa-solid fa-angle-down"></i>
        </span>
        <div className={styles.visaTypesListDiv}>
          <ul className={styles.visaTypesList}>
            {visaTypes.map((type) => {
              return (
                <li
                  key={type}
                  className={`${styles.visaListItem} ${
                    selectedVisa == type.toString() ? styles.itemSelected : ''
                  }`}
                  onClick={(e) => handleSettingVisa(e)}
                >
                  {type.toString()}
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
