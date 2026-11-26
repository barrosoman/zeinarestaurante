/* ==========================================================================
   Zeina Restaurante — Interatividade do Cardápio, Pedido e Reservas
   ========================================================================== */

const RESTAURANT_CONFIG = {
  name: "Zeina Restaurante (Zeina Culinária Árabe)",
  address: "Rua Antônio de Godoy, 2936 - Centro, São José do Rio Preto - SP",
  city: "São José do Rio Preto - SP",
  whatsappNumber: "5517996516343",
};

const MENU_ITEMS = [
  // Mezze & Pastas
  {
    id: "homus",
    category: "mezze",
    name: "Homus Tradicional",
    arabic: "حمص بالطحينة",
    price: 34.0,
    vegetarian: true,
    chefPick: true,
    description:
      "Pasta aveludada de grão-de-bico com tahine artesanal, limão, azeite extra virgem e grãos inteiros. Acompanha pão sírio quentinho.",
    tags: ["Vegetariano", "Clássico Sírio"],
  },
  {
    id: "babaganuche",
    category: "mezze",
    name: "Babaganuche na Brasa",
    arabic: "بابا غنوج",
    price: 36.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Berinjela assada diretamente no carvão até ganhar aroma defumado, batida com tahine, alho suave, limão e sementes de romã.",
    tags: ["Vegetariano", "Defumado"],
  },
  {
    id: "muhammara",
    category: "mezze",
    name: "Muhammara de Aleppo",
    arabic: "محمرة حلبية",
    price: 39.0,
    vegetarian: true,
    chefPick: true,
    description:
      "Receita típica do norte da Síria à base de pimentão vermelho assado, nozes tostadas, melado de romã e toque de pimenta síria.",
    tags: ["Vegetariano", "Receita de Aleppo"],
  },
  {
    id: "coalhada-seca",
    category: "mezze",
    name: "Coalhada Seca (Labneh)",
    arabic: "لبنة",
    price: 34.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Iogurte artesanal dessorado por horas até ficar cremoso, servido com azeite sírio, hortelã seca e za'atar.",
    tags: ["Vegetariano"],
  },
  {
    id: "tabule",
    category: "mezze",
    name: "Tabule Sírio Fresco",
    arabic: "تبولة",
    price: 32.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Salsinha picada na ponta da faca, tomate firme, cebolinha, hortelã fresca, trigo fino hidratado no limão e azeite.",
    tags: ["Vegetariano", "Leve"],
  },
  {
    id: "fatouche",
    category: "mezze",
    name: "Salada Fatouche",
    arabic: "فتوش",
    price: 34.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Folhas frescas, pepino, tomate, rabanete e pão sírio crocante temperados com sumagre sírio, azeite e melado de romã.",
    tags: ["Vegetariano", "Refrescante"],
  },
  {
    id: "falafel",
    category: "mezze",
    name: "Porção de Falafel (6 unid.)",
    arabic: "فلافل",
    price: 35.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Bolinhos crocantes de grão-de-bico e ervas frescas com coentro e cominho, servidos com molho tarator de tahine.",
    tags: ["Vegetariano", "Crocante"],
  },

  // Esfihas & Kibes
  {
    id: "esfiha-carne",
    category: "esfihas",
    name: "Esfiha Aberta Síria de Carne",
    arabic: "صفيحة شامية",
    price: 12.0,
    vegetarian: false,
    chefPick: true,
    description:
      "Massa fina e macia assada na hora com carne moída temperada com tomate, cebola, sete especiarias e melado de romã.",
    tags: ["Feita na Hora"],
  },
  {
    id: "esfiha-queijo-zaatar",
    category: "esfihas",
    name: "Esfiha de Queijo com Za'atar",
    arabic: "مناقيش جبنة وزعتر",
    price: 12.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Combinação aromática de queijo derretido com za'atar sírio (tomilho selvagem, gergelim tostado e sumagre) no azeite.",
    tags: ["Vegetariano"],
  },
  {
    id: "kibe-frito",
    category: "esfihas",
    name: "Kibe Frito Recheado (2 unid.)",
    arabic: "كبة مقلية",
    price: 26.0,
    vegetarian: false,
    chefPick: true,
    description:
      "Casquinha crocante de trigo e carne, recheada com carne bovina refogada com cebola, especiarias e nozes.",
    tags: ["Clássico Sírio"],
  },
  {
    id: "kibe-cru",
    category: "esfihas",
    name: "Kibe Cru (Kibbeh Nayyeh)",
    arabic: "كبة نية",
    price: 48.0,
    vegetarian: false,
    chefPick: true,
    description:
      "Carne bovina magra moída na hora com trigo fino, hortelã fresca, cebola e azeite extra virgem. Acompanha pão e cebola.",
    tags: ["Especialidade da Casa"],
  },
  {
    id: "kibe-assado",
    category: "esfihas",
    name: "Kibe Assado na Travessa",
    arabic: "كبة بالصينية",
    price: 44.0,
    vegetarian: false,
    chefPick: false,
    description:
      "Camadas douradas no forno com recheio suculento de carne, pinoli ou nozes e pimenta síria, acompanhado de coalhada fresca.",
    tags: ["Forno"],
  },

  // Grelhados & Pratos Principais
  {
    id: "kafta-brasa",
    category: "pratos",
    name: "Kafta Síria na Brasa",
    arabic: "كفتة مشوية",
    price: 58.0,
    vegetarian: false,
    chefPick: true,
    description:
      "Dois espetos grelhados no carvão com salsinha e especiarias, servidos com arroz com aletria (marroquino), homus e salada.",
    tags: ["Na Brasa"],
  },
  {
    id: "shish-taouk",
    category: "pratos",
    name: "Shish Taouk",
    arabic: "شيش طاووق",
    price: 56.0,
    vegetarian: false,
    chefPick: false,
    description:
      "Cubos de peito de frango marinados no iogurte, alho, limão e páprica, grelhados na brasa com pasta de alho (toum) e arroz sírio.",
    tags: ["Na Brasa"],
  },
  {
    id: "charuto-uva",
    category: "pratos",
    name: "Charuto de Folha de Uva (Yabrak)",
    arabic: "يبرق / ورق عنب",
    price: 52.0,
    vegetarian: false,
    chefPick: true,
    description:
      "Folhas de uva tenras enroladas à mão com arroz, carne e especiarias, cozidas lentamente no limão. Disponível também em versão vegetariana.",
    tags: ["Receita de Família"],
  },
  {
    id: "shawarma-prato",
    category: "pratos",
    name: "Prato de Shawarma Artesanal",
    arabic: "شاورما عربي",
    price: 54.0,
    vegetarian: false,
    chefPick: false,
    description:
      "Lâminas suculentas de carne ou frango marinadas em especiarias sírias, servidas com pão tostado, picles árabes, tahine e batatas.",
    tags: ["Favorito"],
  },
  {
    id: "mjaddara",
    category: "pratos",
    name: "Mjaddara (Arroz com Lentilhas)",
    arabic: "مجدرة",
    price: 42.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Prato reconfortante de arroz com lentilhas cozidas no cominho e azeite, coroado com cebolas douradas e crocantes.",
    tags: ["Vegetariano", "Vegano"],
  },

  // Combos
  {
    id: "combo-mezze-casal",
    category: "combos",
    name: "Mesa Zeina para 2 Pessoas",
    arabic: "سفرة زينة لشخصين",
    price: 128.0,
    vegetarian: false,
    chefPick: true,
    description:
      "Degustação completa: homus, babaganuche, coalhada seca, tabule, 2 kibes fritos, 2 esfihas abertas, 2 espetos de kafta e pães sírios.",
    tags: ["Para 2 Pessoas", "Melhor Custo-Benefício"],
  },
  {
    id: "combo-familia",
    category: "combos",
    name: "Banquete Sírio para 4 Pessoas",
    arabic: "وليمة عائلية",
    price: 238.0,
    vegetarian: false,
    chefPick: false,
    description:
      "Trio de pastas, tabule, kibe assado, 4 esfihas, espetos mistos de kafta e shish taouk na brasa, arroz com aletria e pães.",
    tags: ["Para 4 Pessoas", "Família"],
  },

  // Doces & Bebidas
  {
    id: "knefe",
    category: "doces",
    name: "Knefe Quentinho de Pistache",
    arabic: "كنافة نابلسية",
    price: 32.0,
    vegetarian: true,
    chefPick: true,
    description:
      "Sobremesa síria servida morna com massa cabelo-de-anjo dourada, recheio de queijo suave, calda de flor de laranjeira e pistache.",
    tags: ["Vegetariano", "Sobremesa Quente"],
  },
  {
    id: "baklava",
    category: "doces",
    name: "Porção de Baklava Artesanal",
    arabic: "بقلاوة بالفستق",
    price: 28.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Camadas ultrafinas de massa folhada crocante recheadas com pistache e nozes, regadas com calda delicada de rosas.",
    tags: ["Vegetariano"],
  },
  {
    id: "cafe-arabe",
    category: "doces",
    name: "Café Árabe com Cardamomo",
    arabic: "قهوة عربية بالهيل",
    price: 12.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Preparado na hora no ibrik tradicional com café torrado fino e sementes de cardamomo perfumadas.",
    tags: ["Bebida Tradicional"],
  },
  {
    id: "limonada-hortela",
    category: "doces",
    name: "Limonada Síria com Hortelã",
    arabic: "ليموناضة بالنعناع",
    price: 14.0,
    vegetarian: true,
    chefPick: false,
    description:
      "Refrescante bebida gelada de limão fresco batido com folhas de hortelã e um toque sutil de água de flor de laranjeira.",
    tags: ["Refrescante"],
  },
];

// State
const state = {
  category: "todos",
  search: "",
  vegOnly: false,
  cart: new Map(), // id -> quantity
};

// Elements
const menuGrid = document.getElementById("menu-grid");
const menuEmpty = document.getElementById("menu-empty");
const menuTabs = document.getElementById("menu-tabs");
const menuSearch = document.getElementById("menu-search");
const vegCheckbox = document.getElementById("veg-only-checkbox");

const cartCountEl = document.getElementById("cart-count");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartBackdrop = document.getElementById("cart-backdrop");
const orderDrawer = document.getElementById("order-drawer");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalEl = document.getElementById("cart-total");
const sendOrderBtn = document.getElementById("send-whatsapp-order");
const clearCartBtn = document.getElementById("clear-cart-btn");

const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const eventQuoteBtn = document.getElementById("event-quote-btn");
const reservationForm = document.getElementById("reservation-form");
const reservationFeedback = document.getElementById("reservation-feedback");

// Helpers
function formatBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function getFilteredMenu() {
  const term = state.search.trim().toLowerCase();
  return MENU_ITEMS.filter((item) => {
    const matchesCategory = state.category === "todos" || item.category === state.category;
    const matchesVeg = !state.vegOnly || item.vegetarian;
    const matchesSearch =
      !term ||
      item.name.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.tags.some((t) => t.toLowerCase().includes(term));

    return matchesCategory && matchesVeg && matchesSearch;
  });
}

function renderMenu() {
  const items = getFilteredMenu();
  menuGrid.innerHTML = "";

  if (items.length === 0) {
    menuEmpty.hidden = false;
    return;
  }

  menuEmpty.hidden = true;
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const qtyInCart = state.cart.get(item.id) || 0;
    const card = document.createElement("article");
    card.className = "menu-item-card";

    const tagsHtml = item.tags
      .map((tag) => {
        const cls =
          tag === "Vegetariano" || tag === "Vegano"
            ? "tag-chip veg"
            : item.chefPick
              ? "tag-chip chef"
              : "tag-chip";
        return `<span class="${cls}">${tag}</span>`;
      })
      .join("");

    card.innerHTML = `
      <div>
        <div class="menu-item-top">
          <div>
            <h3 class="menu-item-title">${item.name}</h3>
            <span class="menu-item-arabic" lang="ar" dir="rtl">${item.arabic}</span>
          </div>
          <span class="menu-item-price">${formatBRL(item.price)}</span>
        </div>
        <p class="menu-item-desc">${item.description}</p>
      </div>
      <div class="menu-item-footer">
        <div class="menu-tags">${tagsHtml}</div>
        <button
          type="button"
          class="add-item-btn ${qtyInCart > 0 ? "in-cart" : ""}"
          data-add-id="${item.id}"
        >
          ${qtyInCart > 0 ? `Adicionado (${qtyInCart})` : "+ Adicionar"}
        </button>
      </div>
    `;

    fragment.appendChild(card);
  });

  menuGrid.appendChild(fragment);
}

function updateCartUI() {
  let totalItems = 0;
  let totalPrice = 0;

  state.cart.forEach((qty, id) => {
    const item = MENU_ITEMS.find((entry) => entry.id === id);
    if (!item) return;
    totalItems += qty;
    totalPrice += item.price * qty;
  });

  cartCountEl.textContent = String(totalItems);
  cartTotalEl.textContent = formatBRL(totalPrice);
  sendOrderBtn.disabled = totalItems === 0;

  if (totalItems === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <p>Sua lista está vazia.</p>
        <p>Explore o cardápio e adicione seus pratos árabes favoritos para enviar o pedido pelo WhatsApp.</p>
      </div>
    `;
    return;
  }

  const rowsHtml = [];
  state.cart.forEach((qty, id) => {
    const item = MENU_ITEMS.find((entry) => entry.id === id);
    if (!item) return;
    rowsHtml.push(`
      <div class="cart-item-row">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span>${formatBRL(item.price)} cada</span>
        </div>
        <div class="qty-controls">
          <button type="button" class="qty-btn" data-qty-action="dec" data-id="${item.id}" aria-label="Diminuir quantidade de ${item.name}">−</button>
          <span>${qty}</span>
          <button type="button" class="qty-btn" data-qty-action="inc" data-id="${item.id}" aria-label="Aumentar quantidade de ${item.name}">+</button>
        </div>
      </div>
    `);
  });

  cartItemsContainer.innerHTML = rowsHtml.join("");
}

function openDrawer() {
  cartBackdrop.hidden = false;
  orderDrawer.classList.add("open");
  orderDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  orderDrawer.classList.remove("open");
  orderDrawer.setAttribute("aria-hidden", "true");
  cartBackdrop.hidden = true;
}

function changeCartItem(id, delta) {
  const current = state.cart.get(id) || 0;
  const next = current + delta;
  if (next <= 0) {
    state.cart.delete(id);
  } else {
    state.cart.set(id, next);
  }
  renderMenu();
  updateCartUI();
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Event Listeners — Menu
menuTabs.addEventListener("click", (event) => {
  const btn = event.target.closest(".tab-btn");
  if (!btn) return;

  menuTabs.querySelectorAll(".tab-btn").forEach((el) => {
    el.classList.remove("active");
    el.setAttribute("aria-selected", "false");
  });

  btn.classList.add("active");
  btn.setAttribute("aria-selected", "true");
  state.category = btn.dataset.category;
  renderMenu();
});

menuSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderMenu();
});

vegCheckbox.addEventListener("change", (event) => {
  state.vegOnly = event.target.checked;
  renderMenu();
});

menuGrid.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-add-id]");
  if (!btn) return;
  changeCartItem(btn.dataset.addId, 1);
});

// Event Listeners — Order Drawer
openCartBtn.addEventListener("click", openDrawer);
closeCartBtn.addEventListener("click", closeDrawer);
cartBackdrop.addEventListener("click", closeDrawer);

cartItemsContainer.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-qty-action]");
  if (!btn) return;
  const delta = btn.dataset.qtyAction === "inc" ? 1 : -1;
  changeCartItem(btn.dataset.id, delta);
});

clearCartBtn.addEventListener("click", () => {
  state.cart.clear();
  renderMenu();
  updateCartUI();
});

sendOrderBtn.addEventListener("click", () => {
  if (state.cart.size === 0) return;

  const selectedMode =
    document.querySelector('input[name="order-mode"]:checked')?.value || "Retirada no balcão";

  const lines = [
    `Olá, ${RESTAURANT_CONFIG.name}! Gostaria de fazer um pedido:`,
    "",
  ];

  let total = 0;
  state.cart.forEach((qty, id) => {
    const item = MENU_ITEMS.find((entry) => entry.id === id);
    if (!item) return;
    const subtotal = item.price * qty;
    total += subtotal;
    lines.push(`• ${qty}x ${item.name} (${formatBRL(subtotal)})`);
  });

  lines.push("");
  lines.push(`Modalidade: ${selectedMode}`);
  lines.push(`Subtotal estimado: ${formatBRL(total)}`);
  lines.push("Cidade: São José do Rio Preto");

  window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
});

// Mobile Navigation
mobileMenuBtn.addEventListener("click", () => {
  const isOpen = mobileMenuBtn.getAttribute("aria-expanded") === "true";
  mobileMenuBtn.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.hidden = isOpen;
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  }
});

// Events CTA jumps to reservation form pre-filled
eventQuoteBtn.addEventListener("click", () => {
  const notesField = document.getElementById("res-notes");
  notesField.value =
    "Gostaria de solicitar orçamento para encomenda / mesa síria de evento em São José do Rio Preto.";
  document.getElementById("reservar").scrollIntoView({ behavior: "smooth" });
  notesField.focus();
});

// Reservation Form
reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("res-name").value.trim();
  const phone = document.getElementById("res-phone").value.trim();
  const date = document.getElementById("res-date").value;
  const time = document.getElementById("res-time").value;
  const guests = document.getElementById("res-guests").value;
  const notes = document.getElementById("res-notes").value.trim();

  if (!name || !phone || !date || !time || !guests) {
    reservationFeedback.hidden = false;
    reservationFeedback.className = "form-feedback error";
    reservationFeedback.textContent =
      "Por favor, preencha nome, telefone, data, horário e número de pessoas.";
    return;
  }

  const formattedDate = date.split("-").reverse().join("/");
  const whatsappText = [
    `Olá, ${RESTAURANT_CONFIG.name}! Gostaria de solicitar uma reserva:`,
    `• Nome: ${name}`,
    `• Telefone: ${phone}`,
    `• Data: ${formattedDate}`,
    `• Horário: ${time}`,
    `• Pessoas: ${guests}`,
    notes ? `• Observações: ${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const url = buildWhatsAppUrl(whatsappText);

  reservationFeedback.hidden = false;
  reservationFeedback.className = "form-feedback success";
  reservationFeedback.textContent = "";

  const textPrefix = document.createTextNode("Solicitação preparada para ");
  const strongInfo = document.createElement("strong");
  strongInfo.textContent = `${formattedDate} às ${time}`;
  const textMiddle = document.createTextNode(` (${guests} pessoa(s)). `);
  const fallbackLink = document.createElement("a");
  fallbackLink.href = url;
  fallbackLink.target = "_blank";
  fallbackLink.rel = "noopener noreferrer";
  fallbackLink.style.textDecoration = "underline";
  fallbackLink.style.fontWeight = "700";
  fallbackLink.textContent = "Clique aqui se o WhatsApp não abrir automaticamente";

  reservationFeedback.append(
    textPrefix,
    strongInfo,
    textMiddle,
    fallbackLink,
    document.createTextNode(".")
  );

  window.open(url, "_blank", "noopener,noreferrer");
});

// Keyboard Escape closes drawer
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && orderDrawer.classList.contains("open")) {
    closeDrawer();
  }
});

// Initialization
document.getElementById("current-year").textContent = String(new Date().getFullYear());
const dateInput = document.getElementById("res-date");
if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;
}

renderMenu();
updateCartUI();
