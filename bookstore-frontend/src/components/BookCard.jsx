import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div style={styles.card}>
      <h3>{book.title}</h3>
      <p>Price: ₹{book.price}</p>

      <Link to={`/books/${book.id}`} style={styles.link}>
        View Details
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#111",
    color: "#fff",
  },
  link: {
    color: "#00d8ff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default BookCard;