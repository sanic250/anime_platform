import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src="/animelogo.png" alt="Anime Logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/anime" className={styles.navLink}>
          Anime
        </Link>
        <Link to="/manga" className={styles.navLink}>
          Manga
        </Link>
        <Link to="/about" className={styles.navLink}>
          About
        </Link>
        <Link to="/about" className={styles.navLink}>
          Help
        </Link>
        <Link to="/about" className={styles.navLink}>
          Contact
        </Link>
      </div>
      <div className={styles.search}>
        <input
          type="search"
          className={styles.inputSearch}
          placeholder="Search Anime..."
        />
        <button className={styles.buttons}>Search</button>
      </div>
      <div className={styles.register}>
        <button className={`${styles.buttons} ${styles.button1}`}>
          <Link className={styles.btnLinks} to="/Register">
            Register
          </Link>
        </button>
        <button className={`${styles.buttons} ${styles.button2}`}>
          <Link className={styles.btnLinks} to="/Login">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
