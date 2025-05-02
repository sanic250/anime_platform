import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/navbar.module.css";
import useAuthStore from "../services/useAtuhStore.js";
import { useState } from "react";

const Navbar = () => {
  const { isLoggedIn, user, logout, clearPersistedData } = useAuthStore();
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    clearPersistedData();
    navigate("/");
  };

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

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
        <Link to="/help" className={styles.navLink}>
          Help
        </Link>
        <Link to="/contact" className={styles.navLink}>
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
        {!isLoggedIn ? (
          <>
            <button className={`${styles.buttons} ${styles.button1}`}>
              <Link className={styles.btnLinks} to="/register">
                Register
              </Link>
            </button>
            <button className={`${styles.buttons} ${styles.button2}`}>
              <Link className={styles.btnLinks} to="/login">
                Login
              </Link>
            </button>
          </>
        ) : (
          <>
            <div className={styles.profilImgCnt}>
              <img
                onClick={handleMenu}
                className={styles.profilImg}
                src={user?.avatar || "/roshi.jpg"}
                alt="Profile"
              />
              {toggleMenu ? (
                <div className={styles.toggleMenu}>
                  <ul>
                    <li>
                      <a className={styles.menuLinks} href="/account">
                        Account
                      </a>
                    </li>
                    <li>
                      <a className={styles.menuLinks} href="/dashboard">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a className={styles.menuLinks} href="/options">
                        Options
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              className={`${styles.buttons} ${styles.button2}`}
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
