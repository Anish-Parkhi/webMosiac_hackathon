import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import styles from './Blog.module.css';
import img4 from '../../assets/webMosiacImages/childMarriage.jpeg';
import img6 from '../../assets/webMosiacImages/filmCamera.jpeg';
import img5 from '../../assets/webMosiacImages/startup.jpg'
import img2 from '../../assets/webMosiacImages/delih.jpeg'
import img1 from '../../assets/webMosiacImages/sports.jpeg'
import img3 from '../../assets/webMosiacImages/job.png'

function Blog() {
  const { id } = useParams();
  const images = [img1, img2, img3, img4, img5, img6];
  const [data, setData] = useState([]);
  const [readMore, setReadMore] = useState([]);
  useEffect(() => {
    axios
      .get(`https://webmosaic.petrichor.events/post`, {
        params: {
          id: id,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get('https://webmosaic.petrichor.events/posts')
    .then(res => {
      setReadMore(res.data.posts)
    })
    .catch(err => {
      console.log(err);
    })
  })

  return(
    <>
    <Navbar />
    <div className={styles.blogContainer} >
      <div className={styles.blogContainerTopContainer}>
        <div className={styles.blogContainerHeader}>
          {data.name}
        </div>
      </div>
      <div className={styles.blogContainerText}>{data.body}</div>
      <div className={styles.blogLikeCounter}>
        <div>Likes: {data.likes} | Dislike: {data.dislikes}</div>
        <div>By Anish Parkhi</div>
      </div>
      <div className={styles.readMoreSectionContainer}>
        <div>Read More</div>
        <div className={styles.readMoreWrapper}>
          {
           readMore.map((item,index) => {
              return(
                <Card image={images[index]} name={item.name} id={item.id} key={item.id} />
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog;
