const BASE_URL = "http://localhost:8080/api/books";

export async function getBooks() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function getBookById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}