const API_URL = "https://fakestoreapi.com/products";

let products = [];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

// --------------------
// 1. Show skeletons
// --------------------
function showSkeleton() {
    loadingEl.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        const div = document.createElement("div");
        div.classList.add("skeleton");
        loadingEl.appendChild(div);
    }
}

// --------------------
// 2. Fetch products
// --------------------
async function fetchProducts() {
    loadingEl.innerHTML = "";  // Limpia skeleton antes de crearlo
    productList.innerHTML = "";
    errorEl.textContent = "";

    showSkeleton(); // LO MOSTRAMOS ANTES DEL FETCH

    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("API Error");

        const data = await res.json();
        products = data;

        renderProducts(products);

    } catch (err) {
        errorEl.textContent = "Error al cargar los productos 😭";
    } finally {
        loadingEl.innerHTML = ""; // Se limpia SOLO al final
    }
}

// --------------------
// 3. Render products
// --------------------
function renderProducts(list) {
    productList.innerHTML = "";

    list.forEach(p => {
        productList.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.title}" />
        <h3>${p.title}</h3>
        <p>$${p.price}</p>
      </div>
    `;
    });
}

// --------------------
// 4. Real-time search
// --------------------
searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(term)
    );
    renderProducts(filtered);
});

// Init
fetchProducts();
