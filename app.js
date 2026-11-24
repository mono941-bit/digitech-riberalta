const WHATSAPP = "59176868881";

let selectedCategory = "Todos";

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryBar = document.getElementById("categoryBar");
const emptyState = document.getElementById("emptyState");

const money = value => value === null ? "Consultar" : `Bs ${value}`;

function whatsappLink(product) {
  const price = product.price === null ? "precio por consultar" : `precio ${money(product.price)}`;
  const message = `Hola KIANSANGO, estoy interesado en ${product.name} (${price}). ¿Me pueden confirmar disponibilidad?`;
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
    <article class="product-card" data-product-id="${product.id}" tabindex="0" role="button" aria-label="Ver detalles de ${product.name}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
          onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
        <span hidden>Foto de producto<br><small>se agregará aquí</small></span>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">${money(product.price)}</div>
        <button class="details-button" type="button" data-details="${product.id}">Ver más</button>
        <a class="whatsapp-button" href="${whatsappLink(product)}" target="_blank" rel="noopener">
          Contactar
        </a>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".product-card").forEach(card => {
    const open = () => {
      const product = products.find(item => item.id === card.dataset.productId);
      if (product) openProductDetails(product);
    };
    card.addEventListener("click", event => {
      if (event.target.closest("a, button")) return;
      open();
    });
    const detailsButton = card.querySelector("[data-details]");
    detailsButton.addEventListener("click", event => {
      event.stopPropagation();
      open();
    });
    card.addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && !event.target.closest("a")) {
        event.preventDefault();
        open();
      }
    });
  });
}

function createProductModal() {
  const modal = document.createElement("div");
  modal.className = "product-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="product-modal-backdrop" data-close-product></div>
    <section class="product-sheet" role="dialog" aria-modal="true" aria-labelledby="detailName">
      <button class="product-sheet-close" type="button" aria-label="Cerrar detalles" data-close-product>×</button>
      <div class="product-sheet-image-wrap">
        <img id="detailImage" src="" alt="">
      </div>
      <div class="product-sheet-content">
        <span class="product-category" id="detailCategory"></span>
        <h2 id="detailName"></h2>
        <div class="product-sheet-price" id="detailPrice"></div>
        <h3>Descripción del producto</h3>
        <p id="detailDescription"></p>
        <a class="whatsapp-button product-sheet-cta" id="detailWhatsapp" href="#" target="_blank" rel="noopener">Consultar por WhatsApp</a>
      </div>
    </section>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", event => {
    if (event.target.closest("[data-close-product]")) closeProductDetails();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) closeProductDetails();
  });
}

function openProductDetails(product) {
  const modal = document.querySelector(".product-modal");
  document.getElementById("detailImage").src = product.image;
  document.getElementById("detailImage").alt = product.name;
  document.getElementById("detailCategory").textContent = product.category;
  document.getElementById("detailName").textContent = product.name;
  document.getElementById("detailPrice").textContent = money(product.price);
  document.getElementById("detailDescription").textContent = product.description;
  document.getElementById("detailWhatsapp").href = whatsappLink(product);
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeProductDetails() {
  document.querySelector(".product-modal").hidden = true;
  document.body.classList.remove("modal-open");
}

createProductModal();
searchInput.addEventListener("input", renderProducts);
renderCategories();
renderProducts();