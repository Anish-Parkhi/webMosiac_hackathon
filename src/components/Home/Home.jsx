import React from 'react';
import Navabar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homeWrapperContainer}>
      <div className={styles.homeMainContainer}>
        <Navabar />
        <div>Hello</div>
        {/* rest code of home  */}
      </div>
      <div className={styles.sidebarWrapperContainer}>
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
