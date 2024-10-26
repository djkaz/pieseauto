const URL = "https://670fe587a85f4164ef2c6100.mockapi.io/alimente";

export async function getAllProducts() {
    const response = await fetch(URL);
    const products = await response.json();
    return products;
}

export async function addNewProduct(product){
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    const NewProduct = await response.json();
    return NewProduct;
}

export async function updateProduct(product, id) {
  const response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const editedProduct = await response.json();

  return editedProduct;
}

export async function deleteProduct(id) {
  await fetch(`${URL}/${id}`, { method: "DELETE" });
}