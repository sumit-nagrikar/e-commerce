document.addEventListener("DOMContentLoaded", function () {
    const productListContainer = document.getElementById("product-list");
  
    // Fetch product data using Fetch API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
      // Append fetched data to the prod
            data.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-details">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <p class="product-price">$${product.price}</p>
                        <button>Add to cart</button>
                    </div>
                `;
                productListContainer.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error("Error fetching product data:", error);
        });
});
