// components/TrustIndicators/TrustIndicators.js

import React from 'react';
import styles from './TrustIndicators.module.css';

const TrustIndicators = () => {
  return (
    <section className={styles.trustSection}>
      <h2 className={styles.heading}>Trusted by Leading Companies</h2>
      <div className={styles.logoContainer}>
        <img src="/images/company1.png" alt="Company 1" className={styles.logo} />
        <img src="/images/company2.png" alt="Company 2" className={styles.logo} />
        <img src="/images/company3.png" alt="Company 3" className={styles.logo} />
        <img src="/images/company4.png" alt="Company 4" className={styles.logo} />
      </div>
    </section>
  );
};

export default TrustIndicators;
