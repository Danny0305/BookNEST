import React from "react";
import "../styles/Homepage.css";
import Search from "../components/Search";
import BookCard from "../components/BookCard";

function Homepage() {
  const title = "Percy Jackson and the Lightning Thief (Book 1)";
  const author = "Rick Riordan";
  const image =
    "http://books.google.com/books/content?id=ku9TsH3M1-YC&printsec=frontcover&img=1&zoom=1&source=gbs_api";

  const price = 12.99;
  return (
    <div>
      {/* <h1>Welcome to BookNest!</h1>
      <p>Your favorite bookstore.</p>
      <p>Browse our collection of books or start searching!</p> */}
      <Search />

      <BookCard title={title} author={author} image={image} price={price} />
    </div>
  );
}

export default Homepage;
