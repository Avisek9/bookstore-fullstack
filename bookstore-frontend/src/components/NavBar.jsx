import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function NavBar() {
  const { cartItems } = useCart();

  return (
    <nav style={{ padding: "12px", background: "#000", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "16px", color: "#fff" }}>
        Home
      </Link>
      <Link to="/cart" style={{ color: "#fff" }}>
        Cart ({cartItems.length})
      </Link>
    </nav>
  );
}

export default NavBar;