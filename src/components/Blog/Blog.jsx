import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img4 from '../../assets/webMosiacImages/childMarriage.jpeg';
import img2 from '../../assets/webMosiacImages/delih.jpeg';
import img6 from '../../assets/webMosiacImages/filmCamera.jpeg';
import img3 from '../../assets/webMosiacImages/job.png';
import img1 from '../../assets/webMosiacImages/sports.jpeg';
import img5 from '../../assets/webMosiacImages/startup.jpg';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import styles from './Blog.module.css';

function Blog() {
  const { id } = useParams();
  const images = [img1, img2, img3, img4, img5, img6];
  const [data, setData] = useState([]);
  const [readMore, setReadMore] = useState([]);
  const [author, setAuthor] = useState(null);
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
    axios
      .get(`https://webmosaic.petrichor.events/author`, {
        params: {
          id: data?.author_id,
        },
      })
      .then((res) => {
        setAuthor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);


  useEffect(() => {
    axios
      .get('https://webmosaic.petrichor.events/posts')
      .then((res) => {
        setReadMore(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.blogContainer}>
        <div className={styles.blogContainerTopContainer}>
          <div className={styles.blogContainerHeader}>{data.name}</div>
        </div>
        <div className={styles.blogContainerText}>{data.body}</div>
        <div className={styles.blogLikeCounter}>
          <div>
            Likes: {data.likes} | Dislikes: {data.dislikes}
          </div>
          <div>By {author?.name}</div>
        </div>
        <div className={styles.readMoreSectionContainer}>
          <div>Read More</div>
          <div className={styles.readMoreWrapper}>
            {readMore.map((item, index) => {
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
      </div>
    </>
  );
}

export default Blog;
