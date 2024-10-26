export function mapProductToCard(product) {
  return `
        <div class="card">
            <div class="info">
                <div class="img">
                    <img src=${product.imageURL} alt="">
                </div>
                <div class="name">
                    <h4>${product.name}</h4>
                </div>
                <div class="price">${product.price} lei</div>
            </div>
            <button class="add-to-cart">Adauga in cos</button>
        </div>
    `;
}