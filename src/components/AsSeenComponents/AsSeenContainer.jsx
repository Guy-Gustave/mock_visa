import React from 'react';

import AsSeenLogo from './AsSeenLogo';
import * as logoImages from '../../assets/asSeenImages';
import logoData from './asSeen';
import styles from '../../styles/AsSeenContainer.module.css';

const AsSeenContainer = () => {
  return (
    <div className={styles.asSeenCotainerDiv}>
      <p className={styles.asSeenTitle}>as seen in</p>
      <div className={styles.asSeenLogoContainer}>
        {logoData.map((singleData) => {
          return (
            <div className={styles.asSeenLogoWrapper}>
              <AsSeenLogo
                imgSrc={singleData.source}
                pageLink={singleData.pageLink}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AsSeenContainer;
