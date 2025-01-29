import styles from "../styles/NavBar.module.css";
import { ShoppingCart } from "lucide-react";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <a href="#browse">Browse Books</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div className={styles.cart}>
        <ShoppingCart size={24} />
        <span className={styles.count}>2</span>
      </div>
    </nav>
  );
}

export default NavBar;
