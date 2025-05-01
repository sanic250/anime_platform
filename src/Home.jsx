import React from "react";
import Navbar from "./components/Navbar.jsx";
import styles from "./home.module.css";
import LatestBox from "./components/LatestBox.jsx";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.latest}>
          <LatestBox />
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};

export default Home;