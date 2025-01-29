import { useEffect, useState } from "react";
import booksData from "../utils/books.json";
import styles from "../styles/Search.module.css";
import { FiSearch } from "react-icons/fi";

function Search({ searchOpen }) {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  useEffect(() => {
    // Filter books whenever the search query changes
    const results = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.isbn.includes(searchQuery)
    );

    setFilteredBooks(results);
  }, [searchQuery]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div
      className={`${styles.searchContainer} ${focused ? styles.focused : ""}`}
    >
      <FiSearch className={styles.searchIcon} />
      <input
        type="search"
        placeholder="Search by Title, Author, Keyword, or ISBN"
        className={styles.searchInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={searchQuery}
        onChange={handleInputChange}
      />
      {console.log(filteredBooks)}
    </div>
  );
}

export default Search;
