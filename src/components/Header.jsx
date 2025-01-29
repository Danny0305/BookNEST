// src/components/Header.js
import React from "react";
import Search from "../components/Search";
import styles from "../styles/Header.module.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BookNest</div>
      <Search />
      <NavBar />
    </header>
  );
}

export default Header;
