// src/pages/BookDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/books/${id}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    }

    fetchBookDetails();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.coverImage} alt={book.title} />
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>${book.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default BookDetails;
