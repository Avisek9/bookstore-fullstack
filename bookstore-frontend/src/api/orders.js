export async function placeOrder(cartItems, totalPrice) {
  const bookIds = cartItems.map(item => item.id);

  const response = await fetch("http://localhost:8080/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bookIds,
      totalPrice,
    }),
  });

  if (!response.ok) {
    throw new Error("Order failed");
  }

  return response.json();
}