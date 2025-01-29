import React from "react";
import styles from "../styles/BookCard.module.css";

function BookCard({ title, author, image, price }) {
  return (
    <div className={styles.book}>
      <div className={styles.cover}>
        <img src={image} alt={`${title} cover`} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>
          {title}
          <br />
          <span className={styles.author}>{author}</span>
        </p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default BookCard;
