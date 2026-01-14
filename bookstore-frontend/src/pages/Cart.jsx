import { useState } from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paidAmount, setPaidAmount] = useState(null); 

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = async () => {
    setError(false);
    setSuccess(false);

    if (cartItems.length === 0) {
      setError(true);
      return;
    }

    const payload = {
      bookIds: cartItems.map((item) => item.id),
      totalPrice: total,
    };

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Order failed");

      setPaidAmount(total);
      clearCart();
      setSuccess(true);

    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <hr />

      <h2>
        Total: ₹{paidAmount !== null ? paidAmount : total}
      </h2>

      <h3>User Details</h3>

      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <textarea placeholder="Address" />

      <button
        onClick={handlePlaceOrder}
        disabled={loading || cartItems.length === 0}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>

      {success && (
        <p style={{ color: "green", marginTop: "12px" }}>
          ✅ Order placed successfully
        </p>
      )}

      {error && (
        <p style={{ color: "red", marginTop: "12px" }}>
          ❌ Order failed
        </p>
      )}
    </div>
  );
}

export default Cart;