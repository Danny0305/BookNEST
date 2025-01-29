import styles from "../styles/Hero.module.css"; // Importing styles from the module

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}></div>
    </div>
  );
}

export default Hero;
