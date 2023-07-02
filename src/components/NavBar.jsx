import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navBarContainerDiv}>
      <Link to="/">
        <h1>Company Logo</h1>
      </Link>
      <div className={styles.navBarLinks}>
        <span className={styles.shareSpan}>
          <i className="fa-sharp fa-solid fa-share-nodes"></i>
        </span>
        <span className={styles.menuSpan}>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
