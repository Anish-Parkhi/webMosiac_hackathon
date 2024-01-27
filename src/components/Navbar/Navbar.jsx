import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbarMainContainer}>
      <ul className={styles.navbarListContainer}>
        <li className={styles.navbarLogo}>Blog Spot</li>
        <li>Home</li>
        <li>Top Blogs</li>
        <li>Favourite</li>
        <li>Category</li>
        <li className={styles.accountLogoContainer}>A</li>
      </ul>
    </nav>
  );
}

export default Navbar;
