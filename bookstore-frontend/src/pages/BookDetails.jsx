import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function BookDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div style={{ padding: "24px" }}>
      <h1>{book.title}</h1>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <p>{book.description}</p>

      <button onClick={() => addToCart(book)}>
        Add to Cart
      </button>
    </div>
  );
}

export default BookDetails;