import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img4 from '../../assets/webMosiacImages/childMarriage.jpeg';
import img2 from '../../assets/webMosiacImages/delih.jpeg';
import img6 from '../../assets/webMosiacImages/filmCamera.jpeg';
import img3 from '../../assets/webMosiacImages/job.png';
import img1 from '../../assets/webMosiacImages/sports.jpeg';
import img5 from '../../assets/webMosiacImages/startup.jpg';
import Card from '../Card/Card';
import Navabar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Home.module.css';

const images = [img1, img2, img3, img4, img5, img6];
function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get('https://webmosaic.petrichor.events/posts')
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.homeWrapperContainer}>
      <div className={styles.homeMainContainer}>
        <Navabar />
        <div className={styles.feedContainer}>
          <div>My Feed</div>
        </div>
        <div className={styles.cardWrapperContainer}>
          {data.posts?.map((item, index) => {
            return (
              <Card
                image={images[index]}
                name={item.name}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.sidebarWrapperContainer}>
        <Sidebar images={images} data={data.posts} />
      </div>
    </div>
  );
}

export default Home;
