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
import Footer from '../Footer/Footer';
import loadMore from '../../assets/more.png'

const images = [img4, img6, img5, img2, img1, img3];
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
    <div>
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
          <div className={styles.loadMoreContainer}>
            <img className={styles.loadMoreImage} src={loadMore} />
            <div className={styles.loadMoreText}>Load More</div>
          </div>
        </div>
        <div className={styles.sidebarWrapperContainer}>
          <Sidebar images={images} data={data.posts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
