const WHATSAPP = "59176868881";

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
      <button class="product-image" type="button" data-image="${product.image}" data-name="${product.name}" aria-label="Ver imagen grande de ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
          onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
        <span hidden>Foto de producto<br><small>se agregará aquí</small></span>
      </button>
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

  grid.querySelectorAll(".product-image").forEach(button => {
    button.addEventListener("click", () => openImageModal(button.dataset.image, button.dataset.name));
  });
}

function createImageModal() {
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="image-modal-backdrop" data-close-modal></div>
    <div class="image-modal-content" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
      <button class="image-modal-close" type="button" aria-label="Cerrar imagen" data-close-modal>×</button>
      <img id="modalImage" src="" alt="">
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener("click", event => {
    if (event.target.closest("[data-close-modal]")) closeImageModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) closeImageModal();
  });
}

function openImageModal(image, name) {
  const modal = document.querySelector(".image-modal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = image;
  modalImage.alt = name;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeImageModal() {
  const modal = document.querySelector(".image-modal");
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

createImageModal();
searchInput.addEventListener("input", renderProducts);
renderCategories();
renderProducts();