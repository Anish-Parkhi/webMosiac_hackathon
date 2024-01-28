import React from 'react';
import styles from './Sidebar.module.css';
import { useNavigate } from 'react-router-dom';


function Sidebar({data, images}) {
  const navigate = useNavigate();
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
      {data?.map((item,index) => {
        const firstWords = item.name.slice(0,14);
        return (
          <div>
            <div onClick={() => {
              navigate(`/blog/${item.id}`)
            }} className={styles.sideBarListContainer}>
              <div className={styles.sidebarListContainerInfo}>
                <div className={styles.sidebarListContainerInfoTopContainer}>
                  <div style={{ color: '#0080ff', fontSize: '0.7rem' }}>
                    {firstWords}..
                  </div>
                  <div style={{ fontSize: '0.6rem' }}>4 Hours ago</div>
                </div>
                <div className={styles.sidebarListContainerInfoText}>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci
                </div>
              </div>
              <div className={styles.sideBarListContaierImage}>
                <img className={styles.sideBarListImage} src={images[index]} />
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
