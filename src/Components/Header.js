import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <Dogs />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </div>
  );
};

export default Header;
