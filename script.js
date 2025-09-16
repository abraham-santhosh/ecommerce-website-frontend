document.addEventListener('DOMContentLoaded', () => {
    // Function to render products dynamically
    function renderProducts(products) {
        const container = document.querySelector(".products-container");
        container.innerHTML = ""; // clear old content

        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card bg-white rounded-xl shadow-md overflow-hidden";
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover" />
                <div class="p-6">
                    <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                    <span class="text-xl font-bold text-blue-600">₹${parseFloat(product.price).toFixed(2)}</span>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Fetch products from backend
    function fetchProducts() {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                console.log("Products from backend:", data); // ✅ check in DevTools
                renderProducts(data); // pass the fetched products
            })
            .catch(err => console.error("Error fetching products:", err));
    }

    // 🔹 Fetch immediately when page loads
    fetchProducts();

    // 🔹 Re-fetch every 5 seconds to check for changes in MySQL
    setInterval(fetchProducts, 5000);
});
