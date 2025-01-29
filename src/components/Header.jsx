// src/components/Header.js
import React, { useState } from "react";
import Search from "../components/Search";
import styles from "../styles/Header.module.css";
import NavBar from "./NavBar";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BookNest</div>
      {/* Search Bar - Toggles on Mobile */}
      <div
        className={`${styles.searchContainer} ${searchOpen ? styles.show : ""}`}
      >
        <Search />
      </div>
      <button
        className={styles.searchToggle}
        onClick={() => setSearchOpen(!searchOpen)}
      >
        <FiSearch />
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Bar */}
      <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
        <NavBar />
      </nav>
    </header>
  );
}

export default Header;
