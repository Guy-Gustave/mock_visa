import React from 'react';

import styles from '../styles/MetricsComponent.module.css';

const MetricsComponent = () => {
  return (
    <div className={styles.metricsContainerDiv}>
      <div className={styles.metricWrapperDiv}>
        <div className={styles.numberDiv}>
          <span>&#x2713;</span>
          <h4>6M+</h4>
        </div>
        <h4 classname={styles.metricTitle}>users annually</h4>
      </div>

      <div className={styles.metricWrapperDiv}>
        <div className={styles.numberDiv}>
          <span>&#x2713;</span>
          <h4>100K+</h4>
        </div>
        <h4 classname={styles.metricTitle}>visa requirements</h4>
      </div>

      <div className={styles.metricWrapperDiv}>
        <div className={styles.numberDiv}>
          <span>&#x2713;</span>
          <h4>239+</h4>
        </div>
        <h4 classname={styles.metricTitle}>countries covered</h4>
      </div>

      <div className={styles.metricWrapperDiv}>
        <div className={styles.numberDiv}>
          <span>&#x2713;</span>
          <h4>4+</h4>
        </div>
        <h4 classname={styles.metricTitle}>active years</h4>
      </div>
    </div>
  );
};

export default MetricsComponent;
