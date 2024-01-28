import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
function Card({ name, id, image}) {
  const navigate = useNavigate();
  return (
    <div className={styles.cardContainerWrapper}>
      <div className={styles.flipContainer}>
        <div className={styles.cardFront}>
          <img className={styles.imageContainer} src={image} />
          <div className={styles.bottomContianer}>
            <div className={styles.titleContainer}>
              {name}
            </div>
            <div>By Anish Parkhi</div>
          </div>
        </div>
        <div className={styles.cardBack}>
          <div onClick={() => {
            navigate(`/blog/${id}`);
          }} className={styles.viewMoreButton}>View full blog</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
