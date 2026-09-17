const WHATSAPP = "59176868881";

// CATÁLOGO: esta es la zona que cambiaremos cuando agreguemos productos reales.
// No hace falta tocar el diseño para cambiar nombre, precio, categoría o descripción.
const products = [
  { name: "Secador de cabello", price: 230, category: "Accesorios", description: "Práctico y pensado para uso diario." },
  { name: "Esterilizador", price: 99, category: "Hogar", description: "Precio promocional. Consulta disponibilidad." },
  { name: "Linterna solar / eléctrica", price: 120, category: "Iluminación", description: "Opción práctica para casa, trabajo y emergencias." },
  { name: "Vasos", price: 90, category: "Hogar", description: "Consulta modelos y disponibilidad." },
  { name: "Sanci Foco", price: null, category: "Iluminación", description: "Consulta precio y disponibilidad por WhatsApp." },
  { name: "Sanci Mini 8K", price: null, category: "Tecnología", description: "Consulta precio y disponibilidad por WhatsApp." },
  { name: "Cámara Tomate", price: null, category: "Seguridad", description: "Consulta precio y disponibilidad por WhatsApp." },
  { name: "Cámara Bossney", price: null, category: "Seguridad", description: "Consulta precio y disponibilidad por WhatsApp." }
];

let selectedCategory = "Todos";

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryBar = document.getElementById("categoryBar");
const emptyState = document.getElementById("emptyState");

const money = value => value === null ? "Consultar" : `Bs ${value}`;

function whatsappLink(product) {
  const price = product.price === null ? "precio por consultar" : `precio ${money(product.price)}`;
  const message = `Hola Digi-Tech, estoy interesado en ${product.name} (${price}). ¿Me pueden confirmar disponibilidad?`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function renderCategories() {
  const categories = ["Todos", ...new Set(products.map(product => product.category))];
  categoryBar.innerHTML = categories.map(category => `
    <button class="category-button ${category === selectedCategory ? "active" : ""}" data-category="${category}">
      ${category}
    </button>
  `).join("");

  categoryBar.querySelectorAll(".category-button").forEach(button => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = products.filter(product => {
    const categoryMatch = selectedCategory === "Todos" || product.category === selectedCategory;
    const text = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return categoryMatch && text.includes(term);
  });

  emptyState.hidden = visible.length > 0;
  grid.innerHTML = visible.map(product => `
    <article class="product-card">
      <div class="product-image" role="img" aria-label="Foto pendiente de ${product.name}">
        <span>Foto de producto<br><small>se agregará aquí</small></span>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">${money(product.price)}</div>
        <a class="whatsapp-button" href="${whatsappLink(product)}" target="_blank" rel="noopener">
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  `).join("");
}

searchInput.addEventListener("input", renderProducts);
renderCategories();
renderProducts();
