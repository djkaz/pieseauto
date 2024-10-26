import { getAllProducts } from "./api/alimente.js";
import { mapProductToCard } from "./utils/layout.js";

document.addEventListener("DOMContentLoaded", displayProducts);
        async function displayProducts() {
        const products = await getAllProducts();
        // console.log(products);
        
        document.querySelector(".products").innerHTML = products.map(mapProductToCard).join("");
};
