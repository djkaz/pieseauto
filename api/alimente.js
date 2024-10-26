const URL = "https://670fe587a85f4164ef2c6100.mockapi.io/alimente";

export async function getAllProducts() {
    const response = await fetch(URL);
    const products = await response.json();
    return products;
}
