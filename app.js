const products = [
  {
    id: "sage-crossbody",
    name: "Sage Crossbody",
    category: "everyday",
    categoryLabel: "\u041d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c",
    badge: "handmade",
    price: 72,
    color: "#71836d",
    handle: "#f8eee5",
    description: "\u041a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u0430\u044f \u043a\u0440\u043e\u0441\u0441\u0431\u043e\u0434\u0438 \u0438\u0437 \u043f\u043b\u043e\u0442\u043d\u043e\u0439 \u043f\u0440\u044f\u0436\u0438 \u0441 \u043c\u044f\u0433\u043a\u0438\u043c \u0437\u0435\u043b\u0435\u043d\u044b\u043c \u043e\u0442\u0442\u0435\u043d\u043a\u043e\u043c.",
  },
  {
    id: "cream-baguette",
    name: "Cream Baguette",
    category: "evening",
    categoryLabel: "\u0412\u0435\u0447\u0435\u0440\u043d\u044f\u044f",
    badge: "limited",
    price: 86,
    color: "#d8c1a5",
    handle: "#8e6e50",
    description: "\u041d\u0435\u0436\u043d\u0430\u044f \u0431\u0430\u0433\u0435\u0442-\u0441\u0443\u043c\u043e\u0447\u043a\u0430 \u0434\u043b\u044f \u043f\u043b\u0430\u0442\u044c\u044f, \u043f\u0430\u043b\u044c\u0442\u043e \u0438\u043b\u0438 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0440\u0430\u0437\u0430.",
  },
  {
    id: "berry-mini",
    name: "Berry Mini",
    category: "mini",
    categoryLabel: "\u041c\u0438\u043d\u0438",
    badge: "mini",
    price: 54,
    color: "#9d4f63",
    handle: "#f7e6e0",
    description: "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u044f\u0440\u043a\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043b\u044f \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u043a\u043b\u044e\u0447\u0435\u0439 \u0438 \u043f\u043e\u043c\u0430\u0434\u044b.",
  },
  {
    id: "cocoa-shopper",
    name: "Cocoa Shopper",
    category: "everyday",
    categoryLabel: "\u041d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c",
    badge: "large",
    price: 94,
    color: "#8b6352",
    handle: "#efe0d1",
    description: "\u0411\u043e\u043b\u0435\u0435 \u0432\u043c\u0435\u0441\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043a\u0430 \u0441 \u0444\u0430\u043a\u0442\u0443\u0440\u043d\u043e\u0439 \u0432\u044f\u0437\u043a\u043e\u0439 \u0438 \u0443\u0441\u0438\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0440\u0443\u0447\u043a\u0430\u043c\u0438.",
  },
  {
    id: "black-pearl",
    name: "Black Pearl",
    category: "evening",
    categoryLabel: "\u0412\u0435\u0447\u0435\u0440\u043d\u044f\u044f",
    badge: "evening",
    price: 79,
    color: "#303034",
    handle: "#b99564",
    description: "\u0427\u0435\u0440\u043d\u0430\u044f \u0441\u0443\u043c\u043e\u0447\u043a\u0430 \u0441 \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u043e\u0439 \u0444\u0443\u0440\u043d\u0438\u0442\u0443\u0440\u043e\u0439 \u0434\u043b\u044f \u0432\u0435\u0447\u0435\u0440\u043d\u0435\u0433\u043e \u0432\u044b\u0445\u043e\u0434\u0430.",
  },
  {
    id: "milk-cloud",
    name: "Milk Cloud",
    category: "mini",
    categoryLabel: "\u041c\u0438\u043d\u0438",
    badge: "soft",
    price: 58,
    color: "#efe2d5",
    handle: "#b59062",
    description: "\u0421\u0432\u0435\u0442\u043b\u0430\u044f \u043c\u0438\u043d\u0438-\u0441\u0443\u043c\u043e\u0447\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043b\u0435\u0433\u043a\u043e \u0441\u043e\u0447\u0435\u0442\u0430\u0435\u0442\u0441\u044f \u0441 \u043b\u0435\u0442\u043d\u0438\u043c\u0438 \u043e\u0431\u0440\u0430\u0437\u0430\u043c\u0438.",
  },
];

const state = { cart: [], category: "all", price: "all" };

const productGrid = document.querySelector("#productGrid");
const productTemplate = document.querySelector("#productTemplate");
const categoryFilter = document.querySelector("#categoryFilter");
const priceFilter = document.querySelector("#priceFilter");
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const checkoutButton = document.querySelector("#checkoutButton");
const customForm = document.querySelector("#customForm");
const formResult = document.querySelector("#formResult");
const paymentNote = document.querySelector("#paymentNote");

function bagImage(color, handle) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420">
      <defs>
        <pattern id="knit" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <path d="M0 12h24" stroke="#fff" stroke-opacity=".28" stroke-width="6"/>
          <path d="M0 21h24" stroke="#2b211d" stroke-opacity=".10" stroke-width="3"/>
        </pattern>
      </defs>
      <ellipse cx="210" cy="360" rx="112" ry="22" fill="#2b211d" opacity=".14"/>
      <path d="M143 140c5-72 126-72 134 0" fill="none" stroke="${handle}" stroke-width="22" stroke-linecap="round"/>
      <path d="M96 128h228l-24 188c-6 42-42 74-85 74h-10c-43 0-79-32-85-74z" fill="${color}"/>
      <path d="M96 128h228l-24 188c-6 42-42 74-85 74h-10c-43 0-79-32-85-74z" fill="url(#knit)"/>
      <path d="M96 128h228l-24 188c-6 42-42 74-85 74h-10c-43 0-79-32-85-74z" fill="none" stroke="#fff" stroke-opacity=".52" stroke-width="10"/>
      <circle cx="210" cy="158" r="10" fill="#bd8b4f" opacity=".75"/>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function formatPrice(value) {
  return `${value} EUR`;
}

function productMatchesPrice(product) {
  if (state.price === "under60") return product.price < 60;
  if (state.price === "60to80") return product.price >= 60 && product.price <= 80;
  if (state.price === "over80") return product.price > 80;
  return true;
}

function getVisibleProducts() {
  return products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    return matchesCategory && productMatchesPrice(product);
  });
}

function renderProducts() {
  productGrid.innerHTML = "";
  const visibleProducts = getVisibleProducts();

  if (!visibleProducts.length) {
    productGrid.innerHTML = '<p class="empty-cart">\u041d\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043f\u043e\u0434 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u044b.</p>';
    return;
  }

  visibleProducts.forEach((product) => {
    const card = productTemplate.content.firstElementChild.cloneNode(true);
    const image = card.querySelector("img");
    image.src = bagImage(product.color, product.handle);
    image.alt = product.name;
    card.querySelector(".badge").textContent = product.badge;
    card.querySelector(".product-category").textContent = product.categoryLabel;
    card.querySelector("h3").textContent = product.name;
    card.querySelector(".product-description").textContent = product.description;
    card.querySelector(".price").textContent = formatPrice(product.price);
    card.querySelector("button").addEventListener("click", () => addToCart(product.id));
    productGrid.append(card);
  });
}

function addToCart(productId) {
  const item = state.cart.find((cartItem) => cartItem.id === productId);
  if (item) item.quantity += 1;
  else state.cart.push({ id: productId, quantity: 1 });
  renderCart();
  openCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  renderCart();
}

function getCartProduct(cartItem) {
  return products.find((product) => product.id === cartItem.id);
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = getCartProduct(item);
    return sum + product.price * item.quantity;
  }, 0);
}

function renderCart() {
  cartItems.innerHTML = "";
  const itemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = getCartTotal();

  cartCount.textContent = itemCount;
  cartTotal.textContent = formatPrice(total);
  checkoutButton.disabled = state.cart.length === 0;
  document.querySelectorAll(".checkout-options button").forEach((button) => {
    button.disabled = state.cart.length === 0;
  });

  if (!state.cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0443\u043c\u043e\u0447\u043a\u0443 \u0438\u0437 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430.</p>';
    paymentNote.textContent = "";
    return;
  }

  state.cart.forEach((item) => {
    const product = getCartProduct(item);
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <h3>${product.name}</h3>
        <p>${item.quantity} x ${formatPrice(product.price)}</p>
      </div>
      <button class="remove-button" type="button">\u0423\u0431\u0440\u0430\u0442\u044c</button>
    `;
    row.querySelector("button").addEventListener("click", () => removeFromCart(item.id));
    cartItems.append(row);
  });
}

function openCart() {
  cartPanel.classList.add("is-open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartPanel.classList.remove("is-open");
  cartPanel.setAttribute("aria-hidden", "true");
}

function buildOrderText() {
  const lines = state.cart.map((item) => {
    const product = getCartProduct(item);
    return `${product.name} - ${item.quantity} pcs`;
  });
  return `Hello! I want to order:\n${lines.join("\n")}\nTotal: ${formatPrice(getCartTotal())}`;
}

function showPaymentPlaceholder(type) {
  const method = type === "apple" ? "Apple Pay" : "\u043e\u043f\u043b\u0430\u0442\u044b \u043a\u0430\u0440\u0442\u043e\u0439";
  paymentNote.textContent = `${method}: \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u044e Stripe Checkout...`;
  startStripeCheckout(type);
}

async function startStripeCheckout(type) {
  try {
    const response = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentType: type,
        items: state.cart.map((item) => ({ id: item.id, quantity: item.quantity })),
      }),
    });

    if (!response.ok) {
      throw new Error("Checkout request failed");
    }

    const data = await response.json();
    if (!data.url) {
      throw new Error("No checkout URL returned");
    }

    window.location.href = data.url;
  } catch {
    paymentNote.textContent = "\u041e\u043f\u043b\u0430\u0442\u0430 \u0435\u0449\u0435 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u0430. \u0412 Netlify \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c STRIPE_SECRET_KEY \u0438 \u0437\u0430\u0434\u0435\u043f\u043b\u043e\u0438\u0442\u044c \u0441\u0430\u0439\u0442 \u0447\u0435\u0440\u0435\u0437 Netlify/Git.";
  }
}

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderProducts();
});

priceFilter.addEventListener("change", (event) => {
  state.price = event.target.value;
  renderProducts();
});

document.querySelector(".cart-open").addEventListener("click", openCart);
document.querySelectorAll("[data-close-cart]").forEach((button) => button.addEventListener("click", closeCart));
document.querySelectorAll("[data-payment]").forEach((button) => {
  button.addEventListener("click", () => showPaymentPlaceholder(button.dataset.payment));
});

checkoutButton.addEventListener("click", async () => {
  const text = buildOrderText();
  try {
    await navigator.clipboard.writeText(text);
    paymentNote.textContent = "\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u043a\u0430\u0437\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d.";
  } catch {
    window.location.href = `mailto:hello@example.com?subject=Bag order&body=${encodeURIComponent(text)}`;
  }
});

customForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(customForm);
  const request = `Hello! I want a custom knitted bag.\nName: ${data.get("name")}\nColor: ${data.get("color")}\nModel: ${data.get("model")}\nNotes: ${data.get("notes") || "none"}`;

  try {
    await navigator.clipboard.writeText(request);
    formResult.textContent = "\u0417\u0430\u044f\u0432\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430. \u041c\u043e\u0436\u043d\u043e \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0435\u0435 \u0432 Instagram, WhatsApp \u0438\u043b\u0438 email.";
  } catch {
    formResult.textContent = request;
  }
});

renderProducts();
renderCart();
