import React from 'react';
import Card from '../Card/Card';
import Navabar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homeWrapperContainer}>
      <div className={styles.homeMainContainer}>
        <Navabar />
        <div className={styles.cardWrapperContainer}>
          <Card />
        </div>
      </div>
      <div className={styles.sidebarWrapperContainer}>
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
