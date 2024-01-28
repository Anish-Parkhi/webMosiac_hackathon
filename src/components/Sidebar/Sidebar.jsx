import React from 'react';
import f35 from '../../assets/webMosiacImages/delih.jpeg';
import styles from './Sidebar.module.css';

const data = [1, 2, 3, 4, 5, 6];

function Sidebar() {
  return (
    <div className={styles.sidebarMainContainer}>
      <div className={styles.searchBarMainContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Article Name, tag, category"
        />
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.middleContainerTopBar}>
          <div>Recommended</div>
          <div style={{ fontSize: '0.8rem' }}>View All</div>
        </div>
        <div className={styles.middleContainerCardContaienr}>
          <div className={styles.middleContainerCardContaienrText}>
            F-35 the biggest aviation project ever
          </div>
        </div>
      </div>
      {data.map((item) => {
        return (
          <div>
            <div className={styles.sideBarListContainer}>
              <div className={styles.sidebarListContainerInfo}>
                <div className={styles.sidebarListContainerInfoTopContainer}>
                  <div style={{ color: '#0080ff', fontSize: '0.9rem' }}>
                    Hello
                  </div>
                  <div style={{ fontSize: '0.7rem' }}>4 Hours ago</div>
                </div>
                <div className={styles.sidebarListContainerInfoText}>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci
                </div>
              </div>
              <div className={styles.sideBarListContaierImage}>
                <img className={styles.sideBarListImage} src={f35} />
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
