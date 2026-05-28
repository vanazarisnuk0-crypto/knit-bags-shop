const SHOP_EMAIL = "liliiashulga32@gmail.com";

const products = [
  { id: "sage-crossbody", name: "Sage Crossbody", category: "everyday", price: 72, image: "assets/generated/sage-crossbody-real.webp" },
  { id: "cream-baguette", name: "Cream Baguette", category: "evening", price: 86, image: "assets/generated/cream-baguette-real.webp" },
  { id: "berry-mini", name: "Berry Mini", category: "mini", price: 54, image: "assets/generated/berry-mini-real.webp" },
  { id: "cocoa-shopper", name: "Cocoa Shopper", category: "everyday", price: 94, image: "assets/generated/cocoa-shopper-real.webp" },
  { id: "black-pearl", name: "Black Pearl", category: "evening", price: 79, image: "assets/generated/black-pearl-real.webp" },
  { id: "milk-cloud", name: "Milk Cloud", category: "mini", price: 58, image: "assets/generated/milk-cloud-real.webp" },
  { id: "rose-loop", name: "Rose Loop", category: "evening", price: 82, image: "assets/generated/rose-loop-real.webp" },
  { id: "sand-tote", name: "Sand Tote", category: "everyday", price: 98, image: "assets/generated/sand-tote-real.webp" },
];

const translations = {
  ru: {
    siteTitle: "Maison Liliya | Авторские вязаные сумки",
    brandTagline: "люксовые сумки ручной вязки",
    navCatalog: "Коллекция",
    navWish: "Пожелания",
    navCustom: "На заказ",
    navService: "Сервис",
    navPayment: "Оплата",
    wishLink: "Написать пожелание",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    menuTitle: "Меню",
    menuCustom: "Индивидуальный заказ",
    menuDelivery: "Доставка и уход",
    cartOpen: "Открыть корзину",
    cartClose: "Закрыть корзину",
    sideVerse: "Все у вас да будет с любовью.",
    sideNote: "Индивидуальная деталь делает вещь личной.",
    heroImageAlt: "Реалистичные вязаные сумки ручной работы на каменных подставках.",
    heroEyebrow: "handcrafted knit atelier",
    heroTitle: "Вязаные сумки с бутиковым характером",
    heroText: "Небольшая студия фактурных сумок для повседневных и вечерних образов. Каждая модель вяжется вручную, аккуратно собирается и отправляется в подарочной упаковке.",
    heroPointOne: "Плотная форма, мягкая пряжа и выразительная вязка",
    heroPointTwo: "Готовые модели или персональный оттенок под ваш гардероб",
    heroPointThree: "Безопасная онлайн-оплата картой или Apple Pay",
    heroPrimary: "Смотреть коллекцию",
    heroSecondary: "Оставить пожелание",
    wishEyebrow: "client wishes",
    wishTitle: "Напишите пожелание к сумке",
    wishText: "Цвет, размер, подарок, дата или короткая записка для Лілии. На опубликованном сайте заявка сохраняется в Netlify Forms, а при локальном просмотре откроется email.",
    yourNameLabel: "Ваше имя",
    emailLabel: "Email для ответа",
    wishMessageLabel: "Пожелание",
    wishPlaceholder: "Хочу сумку в молочном цвете, с короткой ручкой...",
    wishSubmit: "Отправить пожелание",
    wishCopied: "Пожелание готово. Отправьте его через email или сохраните через форму на опубликованном сайте.",
    metricDays: "дней на создание сумки",
    metricHandmade: "ручная работа и финальная проверка",
    metricGift: "подарочная упаковка для каждого заказа",
    deliveryTitle: "Доставка",
    deliveryText: "Отправка по Дании и Европе после подтверждения заказа.",
    careTitle: "Уход",
    careText: "Рекомендации по хранению и бережной чистке идут вместе с сумкой.",
    giftTitle: "Подарок",
    giftText: "Можно добавить открытку с коротким персональным текстом.",
    catalogEyebrow: "collection",
    catalogTitle: "Готовые модели",
    styleLabel: "Стиль",
    priceLabel: "Цена",
    filterAll: "Все",
    filterEveryday: "На каждый день",
    filterEvening: "Вечерние",
    filterMini: "Мини",
    priceAll: "Любая",
    priceUnder60: "до 60 EUR",
    price60to80: "60-80 EUR",
    priceOver80: "от 80 EUR",
    paymentEyebrow: "secure checkout",
    paymentTitle: "Оплата картой или Apple Pay",
    paymentText: "Заказ оформляется через защищенную платежную страницу. После оплаты вы получите подтверждение, а мы уточним детали отправки и бережно подготовим сумку к доставке.",
    payCard: "Оплатить картой",
    customEyebrow: "bespoke order",
    customTitle: "Сумка в вашем оттенке",
    customText: "Выберите форму, оттенок пряжи, длину ручки и фурнитуру. Мы соберем заявку, согласуем детали и подскажем сроки перед началом работы.",
    nameLabel: "Имя",
    colorLabel: "Желаемый цвет",
    modelLabel: "Модель",
    notesLabel: "Комментарий",
    namePlaceholder: "Анна",
    colorPlaceholder: "milk, sage, black...",
    notesPlaceholder: "Размер, ручка, дата...",
    customSubmit: "Сформировать заявку",
    cartTitle: "Корзина",
    totalLabel: "Итого",
    cardShort: "Карта",
    copyOrder: "Скопировать заказ",
    addToCart: "В корзину",
    remove: "Удалить",
    emptyProducts: "Под эти фильтры пока нет моделей. Попробуйте другой стиль или цену.",
    emptyCart: "Корзина пуста. Добавьте модель из коллекции.",
    detailHandmade: "Ручная вязка",
    detailGift: "Подарочная упаковка",
    copiedOrder: "Текст заказа скопирован. Его можно отправить в Instagram, WhatsApp или email.",
    checkoutLoadingCard: "Оплата картой: готовим защищенную страницу оплаты...",
    checkoutLoadingApple: "Apple Pay: готовим защищенную страницу оплаты...",
    checkoutUnavailable: "Онлайн-оплата пока не активна. Скопируйте заказ, и мы уточним детали вручную.",
    customCopied: "Заявка скопирована. Отправьте ее в Instagram, WhatsApp или email, и мы согласуем детали.",
    orderIntro: "Здравствуйте! Хочу заказать:",
    totalPrefix: "Итого",
    customIntro: "Здравствуйте! Хочу заказать вязаную сумку по своим параметрам.",
    customName: "Имя",
    customEmail: "Email",
    customColor: "Цвет",
    customModel: "Модель",
    customNotes: "Комментарий",
    customNotesEmpty: "нет",
    products: {
      "sage-crossbody": ["На каждый день", "signature", "Спокойная crossbody в оттенке sage: держит форму, мягко лежит на плече и выглядит собранно."],
      "cream-baguette": ["Вечерняя", "limited edit", "Элегантная baguette-сумка для платья, пальто или лаконичного базового образа."],
      "berry-mini": ["Мини", "compact", "Маленький акцент в berry-оттенке: для телефона, ключей и помады без лишнего объема."],
      "cocoa-shopper": ["На каждый день", "atelier", "Вместительная сумка с фактурной вязкой, уплотненными ручками и теплым cocoa-тоном."],
      "black-pearl": ["Вечерняя", "after dark", "Глубокий черный цвет, аккуратная фурнитура и минимальная форма для вечера."],
      "milk-cloud": ["Мини", "soft tone", "Светлая mini-сумка с молочным подтоном для летних, свадебных и подарочных образов."],
      "rose-loop": ["Вечерняя", "new season", "Мягкий розовый тон, короткая ручка и форма, которая добавляет образу нежность."],
      "sand-tote": ["На каждый день", "roomy", "Текстурная tote-сумка для работы, города и легких покупок, когда нужно чуть больше места."],
    },
  },
  da: {
    siteTitle: "Maison Liliya | Håndlavede hæklede tasker",
    brandTagline: "håndlavede hæklede tasker",
    navCatalog: "Kollektion",
    navWish: "Ønsker",
    navCustom: "Specialbestilling",
    navService: "Service",
    navPayment: "Betaling",
    wishLink: "Skriv et ønske",
    menuOpen: "Åbn menu",
    menuClose: "Luk menu",
    menuTitle: "Menu",
    menuCustom: "Specialbestilling",
    menuDelivery: "Levering og pleje",
    cartOpen: "Åbn kurv",
    cartClose: "Luk kurv",
    sideVerse: "Lad alt hos jer ske i kærlighed.",
    sideNote: "En personlig detalje gør tasken til din.",
    heroImageAlt: "Realistiske håndlavede hæklede tasker på stenpodier.",
    heroEyebrow: "handcrafted knit atelier",
    heroTitle: "Hæklede tasker med boutique-fornemmelse",
    heroText: "Et lille atelier med teksturrige tasker til hverdag og aften. Hver model hækles i hånden, samles omhyggeligt og sendes i gaveindpakning.",
    heroPointOne: "Fast form, blødt garn og tydelig håndlavet struktur",
    heroPointTwo: "Færdige modeller eller en personlig farve til din garderobe",
    heroPointThree: "Sikker online betaling med kort eller Apple Pay",
    heroPrimary: "Se kollektionen",
    heroSecondary: "Skriv et ønske",
    wishEyebrow: "client wishes",
    wishTitle: "Skriv et ønske til tasken",
    wishText: "Farve, størrelse, gave, dato eller en kort besked til Liliya. På den publicerede side gemmes beskeden i Netlify Forms; lokalt åbnes email.",
    yourNameLabel: "Dit navn",
    emailLabel: "Email til svar",
    wishMessageLabel: "Ønske",
    wishPlaceholder: "Jeg vil gerne have en taske i milk med kort hank...",
    wishSubmit: "Send ønske",
    wishCopied: "Ønsket er klar. Send det via email eller gem det via formularen på den publicerede side.",
    metricDays: "dage til at lave en taske",
    metricHandmade: "håndarbejde og sidste kvalitetskontrol",
    metricGift: "gaveindpakning til hver ordre",
    deliveryTitle: "Levering",
    deliveryText: "Sendes i Danmark og Europa, når ordren er bekræftet.",
    careTitle: "Pleje",
    careText: "Råd om opbevaring og skånsom rens følger med tasken.",
    giftTitle: "Gave",
    giftText: "Du kan tilføje et kort med en kort personlig tekst.",
    catalogEyebrow: "collection",
    catalogTitle: "Klar til bestilling",
    styleLabel: "Stil",
    priceLabel: "Pris",
    filterAll: "Alle",
    filterEveryday: "Hverdag",
    filterEvening: "Aften",
    filterMini: "Mini",
    priceAll: "Alle",
    priceUnder60: "under 60 EUR",
    price60to80: "60-80 EUR",
    priceOver80: "over 80 EUR",
    paymentEyebrow: "secure checkout",
    paymentTitle: "Betal med kort eller Apple Pay",
    paymentText: "Ordren går gennem en sikker betalingsside. Efter betaling får du en bekræftelse, og vi afklarer leveringsdetaljer og pakker tasken nænsomt.",
    payCard: "Betal med kort",
    customEyebrow: "bespoke order",
    customTitle: "En taske i din farve",
    customText: "Vælg form, garnfarve, hanklængde og hardware. Vi samler ønskerne, afklarer detaljerne og sender leveringstid, før arbejdet starter.",
    nameLabel: "Navn",
    colorLabel: "Ønsket farve",
    modelLabel: "Model",
    notesLabel: "Kommentar",
    namePlaceholder: "Anna",
    colorPlaceholder: "milk, sage, black...",
    notesPlaceholder: "Størrelse, hank, dato...",
    customSubmit: "Lav forespørgsel",
    cartTitle: "Kurv",
    totalLabel: "I alt",
    cardShort: "Kort",
    copyOrder: "Kopier ordre",
    addToCart: "I kurv",
    remove: "Fjern",
    emptyProducts: "Der er ingen modeller med de filtre endnu. Prøv en anden stil eller pris.",
    emptyCart: "Kurven er tom. Tilføj en model fra kollektionen.",
    detailHandmade: "Håndhæklet",
    detailGift: "Gaveindpakning",
    copiedOrder: "Ordreteksten er kopieret. Den kan sendes via Instagram, WhatsApp eller email.",
    checkoutLoadingCard: "Kortbetaling: vi forbereder en sikker betalingsside...",
    checkoutLoadingApple: "Apple Pay: vi forbereder en sikker betalingsside...",
    checkoutUnavailable: "Online betaling er ikke aktiv endnu. Kopier ordren, så afklarer vi detaljerne manuelt.",
    customCopied: "Forespørgslen er kopieret. Send den via Instagram, WhatsApp eller email, så aftaler vi detaljerne.",
    orderIntro: "Hej! Jeg vil gerne bestille:",
    totalPrefix: "I alt",
    customIntro: "Hej! Jeg vil gerne bestille en hæklet taske efter mine ønsker.",
    customName: "Navn",
    customEmail: "Email",
    customColor: "Farve",
    customModel: "Model",
    customNotes: "Kommentar",
    customNotesEmpty: "ingen",
    products: {
      "sage-crossbody": ["Hverdag", "signature", "Rolig crossbody i sage, der holder formen, ligger blødt på skulderen og føles gennemført."],
      "cream-baguette": ["Aften", "limited edit", "Elegant baguette-taske til kjole, frakke eller et rent hverdagslook."],
      "berry-mini": ["Mini", "compact", "En lille berry-farvet accent til telefon, nøgler og læbestift uden ekstra fylde."],
      "cocoa-shopper": ["Hverdag", "atelier", "Rummelig taske med tydelig struktur, forstærkede hanke og varm cocoa-tone."],
      "black-pearl": ["Aften", "after dark", "Dyb sort farve, diskret hardware og en minimal form til aftenen."],
      "milk-cloud": ["Mini", "soft tone", "Lys mini-taske med mælket undertone til sommer, bryllup og gaver."],
      "rose-loop": ["Aften", "new season", "Blød rosa tone, kort hank og en form, der giver looket lethed."],
      "sand-tote": ["Hverdag", "roomy", "Teksturrig tote til arbejde, byliv og let shopping, når der skal være lidt mere plads."],
    },
  },
  en: {
    siteTitle: "Maison Liliya | Handmade Crochet Bags",
    brandTagline: "handmade crochet bags",
    navCatalog: "Collection",
    navWish: "Wishes",
    navCustom: "Custom",
    navService: "Service",
    navPayment: "Payment",
    wishLink: "Write a wish",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuTitle: "Menu",
    menuCustom: "Custom order",
    menuDelivery: "Delivery and care",
    cartOpen: "Open cart",
    cartClose: "Close cart",
    sideVerse: "Let all that you do be done in love.",
    sideNote: "A personal detail makes the piece feel yours.",
    heroImageAlt: "Realistic handmade crochet bags styled on stone plinths.",
    heroEyebrow: "handcrafted knit atelier",
    heroTitle: "Crochet bags with a boutique mood",
    heroText: "A small atelier for textured everyday and evening bags. Each piece is handmade, finished carefully, and shipped in gift-ready packaging.",
    heroPointOne: "Structured shape, soft yarn and expressive crochet texture",
    heroPointTwo: "Ready models or a personal shade for your wardrobe",
    heroPointThree: "Secure online payment by card or Apple Pay",
    heroPrimary: "Shop collection",
    heroSecondary: "Write a wish",
    wishEyebrow: "client wishes",
    wishTitle: "Write a wish for your bag",
    wishText: "Color, size, gift, date or a short note for Liliya. On the live site it is saved in Netlify Forms; locally it opens email.",
    yourNameLabel: "Your name",
    emailLabel: "Reply email",
    wishMessageLabel: "Wish",
    wishPlaceholder: "I would like a milk-colored bag with a short handle...",
    wishSubmit: "Send wish",
    wishCopied: "The wish is ready. Send it by email or save it through the form on the live site.",
    metricDays: "days to make a bag",
    metricHandmade: "handmade work and final quality check",
    metricGift: "gift packaging for every order",
    deliveryTitle: "Delivery",
    deliveryText: "Shipping across Denmark and Europe after order confirmation.",
    careTitle: "Care",
    careText: "Storage and gentle cleaning guidance is included with each bag.",
    giftTitle: "Gift",
    giftText: "You can add a card with a short personal note.",
    catalogEyebrow: "collection",
    catalogTitle: "Ready styles",
    styleLabel: "Style",
    priceLabel: "Price",
    filterAll: "All",
    filterEveryday: "Everyday",
    filterEvening: "Evening",
    filterMini: "Mini",
    priceAll: "Any",
    priceUnder60: "under 60 EUR",
    price60to80: "60-80 EUR",
    priceOver80: "over 80 EUR",
    paymentEyebrow: "secure checkout",
    paymentTitle: "Pay by card or Apple Pay",
    paymentText: "Your order is handled through a secure checkout page. After payment you receive confirmation, then we confirm delivery details and prepare the bag with care.",
    payCard: "Pay by card",
    customEyebrow: "bespoke order",
    customTitle: "A bag in your shade",
    customText: "Choose the shape, yarn shade, handle length and hardware. We collect the request, confirm details and share timing before work begins.",
    nameLabel: "Name",
    colorLabel: "Desired color",
    modelLabel: "Model",
    notesLabel: "Comment",
    namePlaceholder: "Anna",
    colorPlaceholder: "milk, sage, black...",
    notesPlaceholder: "Size, strap, date...",
    customSubmit: "Create request",
    cartTitle: "Cart",
    totalLabel: "Total",
    cardShort: "Card",
    copyOrder: "Copy order",
    addToCart: "Add to cart",
    remove: "Remove",
    emptyProducts: "No models match these filters yet. Try another style or price.",
    emptyCart: "Your cart is empty. Add a model from the collection.",
    detailHandmade: "Hand crochet",
    detailGift: "Gift packaging",
    copiedOrder: "Order text copied. You can send it through Instagram, WhatsApp or email.",
    checkoutLoadingCard: "Card payment: preparing a secure checkout page...",
    checkoutLoadingApple: "Apple Pay: preparing a secure checkout page...",
    checkoutUnavailable: "Online payment is not active yet. Copy the order and we will confirm the details manually.",
    customCopied: "Request copied. Send it through Instagram, WhatsApp or email and we will confirm the details.",
    orderIntro: "Hello! I would like to order:",
    totalPrefix: "Total",
    customIntro: "Hello! I want a custom handmade crochet bag.",
    customName: "Name",
    customEmail: "Email",
    customColor: "Color",
    customModel: "Model",
    customNotes: "Notes",
    customNotesEmpty: "none",
    products: {
      "sage-crossbody": ["Everyday", "signature", "A calm sage crossbody that keeps its shape, sits softly on the shoulder and looks refined."],
      "cream-baguette": ["Evening", "limited edit", "An elegant baguette bag for a dress, a coat or a clean minimal everyday look."],
      "berry-mini": ["Mini", "compact", "A small berry-toned accent for phone, keys and lipstick without extra volume."],
      "cocoa-shopper": ["Everyday", "atelier", "A roomy bag with tactile crochet, reinforced handles and a warm cocoa tone."],
      "black-pearl": ["Evening", "after dark", "Deep black color, neat hardware and a minimal silhouette for evening plans."],
      "milk-cloud": ["Mini", "soft tone", "A light mini bag with a milky undertone for summer, weddings and gifts."],
      "rose-loop": ["Evening", "new season", "Soft rose tone, short handle and a shape that adds tenderness to the look."],
      "sand-tote": ["Everyday", "roomy", "A textured tote for work, the city and light shopping when you need a little more room."],
    },
  },
};

const state = {
  cart: [],
  category: "all",
  price: "all",
  language: localStorage.getItem("shopLanguage") || "ru",
};

const productGrid = document.querySelector("#productGrid");
const productTemplate = document.querySelector("#productTemplate");
const categoryFilter = document.querySelector("#categoryFilter");
const priceFilter = document.querySelector("#priceFilter");
const cartPanel = document.querySelector("#cartPanel");
const menuPanel = document.querySelector("#menuPanel");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const checkoutButton = document.querySelector("#checkoutButton");
const customForm = document.querySelector("#customForm");
const wishForm = document.querySelector("#wishForm");
const formResult = document.querySelector("#formResult");
const wishResult = document.querySelector("#wishResult");
const paymentNote = document.querySelector("#paymentNote");
const languageButtons = document.querySelectorAll("[data-lang]");
const menuOpenButton = document.querySelector(".menu-open");

function t(key) {
  return translations[state.language][key] || translations.ru[key] || key;
}

function productCopy(product) {
  const [category, badge, description] = translations[state.language].products[product.id] || translations.ru.products[product.id];
  return { category, badge, description };
}

function formatPrice(value) {
  return `${value} EUR`;
}

function applyStaticTranslations() {
  document.documentElement.lang = state.language;
  document.title = t("siteTitle");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function productMatchesPrice(product) {
  if (state.price === "under60") return product.price < 60;
  if (state.price === "60to80") return product.price >= 60 && product.price <= 80;
  if (state.price === "over80") return product.price > 80;
  return true;
}

function renderProducts() {
  productGrid.innerHTML = "";
  const visibleProducts = products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    return matchesCategory && productMatchesPrice(product);
  });

  if (!visibleProducts.length) {
    productGrid.innerHTML = `<p class="empty-cart">${t("emptyProducts")}</p>`;
    return;
  }

  visibleProducts.forEach((product) => {
    const copy = productCopy(product);
    const card = productTemplate.content.firstElementChild.cloneNode(true);
    const image = card.querySelector("img");
    image.src = product.image;
    image.alt = `${product.name} handmade crochet bag`;
    card.querySelector(".badge").textContent = copy.badge;
    card.querySelector(".product-category").textContent = copy.category;
    card.querySelector("h3").textContent = product.name;
    card.querySelector(".product-description").textContent = copy.description;
    card.querySelector(".product-details").innerHTML = `<span>${t("detailHandmade")}</span><span>${t("detailGift")}</span>`;
    card.querySelector(".price").textContent = formatPrice(product.price);
    card.querySelector("button").textContent = t("addToCart");
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
  cartCount.textContent = itemCount;
  cartTotal.textContent = formatPrice(getCartTotal());
  checkoutButton.disabled = state.cart.length === 0;
  document.querySelectorAll(".checkout-options button").forEach((button) => {
    button.disabled = state.cart.length === 0;
  });

  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="empty-cart">${t("emptyCart")}</p>`;
    paymentNote.textContent = "";
    return;
  }

  state.cart.forEach((item) => {
    const product = getCartProduct(item);
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `<div><h3>${product.name}</h3><p>${item.quantity} x ${formatPrice(product.price)}</p></div><button class="remove-button" type="button">${t("remove")}</button>`;
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

function openMenu() {
  menuPanel.classList.add("is-open");
  menuPanel.setAttribute("aria-hidden", "false");
  menuOpenButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  menuPanel.classList.remove("is-open");
  menuPanel.setAttribute("aria-hidden", "true");
  menuOpenButton.setAttribute("aria-expanded", "false");
}

function setLanguage(language) {
  if (!translations[language]) return;
  state.language = language;
  localStorage.setItem("shopLanguage", language);
  applyStaticTranslations();
  renderProducts();
  renderCart();
}

function buildOrderText() {
  const lines = state.cart.map((item) => {
    const product = getCartProduct(item);
    return `${product.name} - ${item.quantity} pcs`;
  });
  return `${t("orderIntro")}\n${lines.join("\n")}\n${t("totalPrefix")}: ${formatPrice(getCartTotal())}`;
}

function showPaymentPlaceholder(type) {
  paymentNote.textContent = type === "apple" ? t("checkoutLoadingApple") : t("checkoutLoadingCard");
  startStripeCheckout(type);
}

async function startStripeCheckout(type) {
  try {
    const response = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentType: type, items: state.cart.map((item) => ({ id: item.id, quantity: item.quantity })) }),
    });
    if (!response.ok) throw new Error("Checkout request failed");
    const data = await response.json();
    if (!data.url) throw new Error("No checkout URL returned");
    window.location.href = data.url;
  } catch {
    paymentNote.textContent = t("checkoutUnavailable");
  }
}

function submitAsEmail(subject, text) {
  window.location.href = `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderProducts();
});

priceFilter.addEventListener("change", (event) => {
  state.price = event.target.value;
  renderProducts();
});

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
document.querySelector(".cart-open").addEventListener("click", openCart);
document.querySelectorAll("[data-close-cart]").forEach((button) => button.addEventListener("click", closeCart));
menuOpenButton.addEventListener("click", openMenu);
document.querySelectorAll("[data-close-menu], .menu-links a").forEach((element) => element.addEventListener("click", closeMenu));
document.querySelectorAll("[data-payment]").forEach((button) => button.addEventListener("click", () => showPaymentPlaceholder(button.dataset.payment)));

checkoutButton.addEventListener("click", async () => {
  const text = buildOrderText();
  try {
    await navigator.clipboard.writeText(text);
    paymentNote.textContent = t("copiedOrder");
  } catch {
    submitAsEmail("Bag order", text);
  }
});

wishForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(wishForm);
  const request = `${t("wishTitle")}\n${t("customName")}: ${data.get("name")}\n${t("customEmail")}: ${data.get("email")}\n${t("wishMessageLabel")}: ${data.get("message")}`;
  try {
    await navigator.clipboard.writeText(request);
    wishResult.textContent = t("wishCopied");
  } catch {
    submitAsEmail("Maison Liliya wish", request);
  }
});

customForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(customForm);
  const request = `${t("customIntro")}\n${t("customName")}: ${data.get("name")}\n${t("customEmail")}: ${data.get("email")}\n${t("customColor")}: ${data.get("color")}\n${t("customModel")}: ${data.get("model")}\n${t("customNotes")}: ${data.get("notes") || t("customNotesEmpty")}`;
  try {
    await navigator.clipboard.writeText(request);
    formResult.textContent = t("customCopied");
  } catch {
    submitAsEmail("Maison Liliya custom order", request);
  }
});

applyStaticTranslations();
renderProducts();
renderCart();

