import React from "react";
import styles from "./styles/latestsbox.module.css";
const LatestBox = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="/animelatest.webp" />
      <div className={styles.ratingCnt}>
        <span className={styles.rating}>
          <i class="fa-regular fa-star"></i> 9.2
        </span>
        <span className={styles.age}>+13</span>
      </div>
      <p className={styles.title}>
        Lycoris Recoil: Friends<br></br> are Thieves of Time.
      </p>
    </div>
  );
};

export default LatestBox;
