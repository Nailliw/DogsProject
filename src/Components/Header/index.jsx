import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

const Header = () => {
  return (
    <Header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.home} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </Header>
  );
};

export default Header;
