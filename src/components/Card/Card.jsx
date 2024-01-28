import React from 'react';
import dislike from '../../assets/webMosiacImages/dislike.png';
import image from '../../assets/webMosiacImages/f35.jpeg';
import like from '../../assets/webMosiacImages/like.png';
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.cardContainerWrapper}>
      <img className={styles.imageContainer} src={image} />
      <div className={styles.bottomContianer}>
        <div className={styles.titleContainer}>
          Unveiling the Shadows of Child Marriage in India
        </div>
        <div>By Anish Parkhi</div>
        {/* <div className={styles.likeDislikeContainer}>
          <div className={styles.likeContainer}>
            <div>
              <img className={styles.likeImage} src={like} />
            </div>
            <div className={styles.likeCountContainer}>80,000</div>
          </div>
          <div className={styles.dislikeContainer}>
            <img className={styles.dislikeImage} src={dislike} />
            <div className={styles.dislikeCountContainer}>1,234</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
