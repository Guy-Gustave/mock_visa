import React from 'react';

import styles from '../../styles/AsSeenLogo.module.css';

const AsSeenLogo = ({ imgSrc, pageLink }) => {
  return (
    <a href={pageLink} target="_blank">
      <div className={styles.asSeenLogoDiv}>
        <img src={imgSrc} alt="logo" className={styles.asSeenImg} />
      </div>
    </a>
  );
};

export default AsSeenLogo;
