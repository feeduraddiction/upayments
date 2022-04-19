export async function getProducts() {
  const res = await fetch(
    "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
  );
  const data = await res.json();
  return data;
}

export async function getProduct(id: string) {
  const res = await fetch(
    `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
  );
  const data = await res.json();
  return data;
}

export async function getCategories() {
  const res = await fetch(
    "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/"
  );
  const data = await res.json();
  return data;
}
