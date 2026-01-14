import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { getBooks } from "../api/books";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "24px", color: "#fff" }}>
      <h1>Home Page</h1>

      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))
      )}
    </div>
  );
}

export default Home;