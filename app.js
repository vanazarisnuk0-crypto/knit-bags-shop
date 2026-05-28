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
    mainNavLabel: "Основная навигация",
    mobileNavLabel: "Мобильная навигация",
    languageLabel: "Язык",
    benefitsLabel: "Преимущества магазина",
    highlightsLabel: "Особенности ателье",
    deliveryCareLabel: "Доставка и уход",
    footerLabel: "Нижняя часть сайта",
    wishLink: "Написать пожелание",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    menuTitle: "Меню",
    menuCustom: "Индивидуальный заказ",
    menuDelivery: "Доставка и уход",
    cartOpen: "Открыть корзину",
    cartClose: "Закрыть корзину",
    sideVerse: "Все у вас да будет с любовью.",
    verseRef: "1 Кор. 16:14",
    sideLuxury: "made for soft luxury",
    sideNote: "Индивидуальная деталь делает вещь личной.",
    heroImageAlt: "Реалистичные вязаные сумки ручной работы на каменных подставках.",
    heroEyebrow: "handcrafted knit atelier",
    heroTitle: "Вязаные сумки с тихой роскошью",
    heroText: "Фактурные сумки ручной вязки для повседневных и вечерних образов. Каждая модель собирается аккуратно, в небольшом ателье и без лишней суеты.",
    heroPointOne: "Четкая форма и мягкая пряжа",
    heroPointTwo: "Готовые модели или ваш оттенок",
    heroPointThree: "Спокойная оплата картой или Apple Pay",
    heroPrimary: "Смотреть коллекцию",
    heroSecondary: "Оставить пожелание",
    wishEyebrow: "client wishes",
    wishTitle: "Пожелание к сумке",
    wishText: "Цвет, размер, дата, подарок или короткая записка. На опубликованном сайте заявка сохраняется через форму.",
    yourNameLabel: "Ваше имя",
    emailLabel: "Email для ответа",
    wishMessageLabel: "Пожелание",
    wishPlaceholder: "Хочу сумку в молочном цвете, с короткой ручкой...",
    wishSubmit: "Отправить пожелание",
    wishCopied: "Пожелание готово. Отправьте его через email или сохраните через форму на опубликованном сайте.",
    botFieldLabel: "Не заполняйте",
    metricDays: "дней на создание",
    metricHandmade: "ручная работа и контроль",
    metricGift: "подарочная упаковка",
    deliveryTitle: "Доставка",
    deliveryText: "Отправка по Дании и Европе после подтверждения.",
    careTitle: "Уход",
    careText: "Краткая памятка по хранению и бережной чистке внутри.",
    giftTitle: "Подарок",
    giftText: "Можно добавить открытку с личным текстом.",
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
    paymentText: "Заказ оформляется через защищенную платежную страницу. После оплаты мы подтвердим детали и подготовим сумку к отправке.",
    payCard: "Оплатить картой",
    customEyebrow: "bespoke order",
    customTitle: "Сумка в вашем оттенке",
    customText: "Выберите форму, пряжу, ручку и фурнитуру. Мы уточним детали и сроки перед началом работы.",
    nameLabel: "Имя",
    colorLabel: "Желаемый цвет",
    modelLabel: "Модель",
    notesLabel: "Комментарий",
    namePlaceholder: "Анна",
    colorPlaceholder: "milk, sage, black...",
    notesPlaceholder: "Размер, ручка, дата...",
    modelCrossbody: "Crossbody",
    modelBaguette: "Mini baguette",
    modelEvening: "Вечерняя сумка",
    modelShopper: "Shopper",
    customSubmit: "Сформировать заявку",
    cartTitle: "Корзина",
    totalLabel: "Итого",
    cardShort: "Карта",
    copyOrder: "Скопировать заказ",
    addToCart: "В корзину",
    productImageAlt: "вязаная сумка ручной работы",
    footerHelpTitle: "Помочь с заказом?",
    footerContact: "Связаться",
    footerCustom: "Индивидуальный заказ",
    footerDelivery: "Доставка и уход",
    footerPayment: "Оплата",
    footerAtelierTitle: "Ателье",
    footerCollection: "Коллекция",
    footerWish: "Пожелания",
    footerStory: "Maison Liliya",
    footerLocationTitle: "Студия и отправка",
    footerLocation: "Дания / Европа",
    footerUpdatesTitle: "Обновления Maison Liliya",
    footerUpdatesText: "Напишите нам, если хотите первыми увидеть новые оттенки, мини-дропы и готовые модели.",
    footerMade: "Вязаные сумки ручной работы, Дания",
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
      "sage-crossbody": ["На каждый день", "signature", "Sage crossbody с плотной формой, мягкой ручкой и спокойным бутиковым оттенком."],
      "cream-baguette": ["Вечерняя", "limited edit", "Cream baguette для платья, пальто или лаконичного базового образа."],
      "berry-mini": ["Мини", "compact", "Berry mini для телефона, ключей и помады без лишнего объема."],
      "cocoa-shopper": ["На каждый день", "atelier", "Cocoa shopper с фактурной вязкой, уплотненными ручками и теплым тоном."],
      "black-pearl": ["Вечерняя", "after dark", "Black Pearl: глубокий черный цвет, аккуратная фурнитура и чистая форма."],
      "milk-cloud": ["Мини", "soft tone", "Milk Cloud в молочном оттенке для лета, подарка или нежного вечернего образа."],
      "rose-loop": ["Вечерняя", "new season", "Rose Loop с короткой ручкой и мягким розовым тоном."],
      "sand-tote": ["На каждый день", "roomy", "Sand Tote для города, работы и легких покупок."],
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
    mainNavLabel: "Hovednavigation",
    mobileNavLabel: "Mobilnavigation",
    languageLabel: "Sprog",
    benefitsLabel: "Butikkens fordele",
    highlightsLabel: "Atelierets kendetegn",
    deliveryCareLabel: "Levering og pleje",
    footerLabel: "Sidefod",
    wishLink: "Skriv et ønske",
    menuOpen: "Åbn menu",
    menuClose: "Luk menu",
    menuTitle: "Menu",
    menuCustom: "Specialbestilling",
    menuDelivery: "Levering og pleje",
    cartOpen: "Åbn kurv",
    cartClose: "Luk kurv",
    sideVerse: "Lad alt hos jer ske i kærlighed.",
    verseRef: "1 Kor. 16:14",
    sideLuxury: "made for soft luxury",
    sideNote: "En personlig detalje gør tasken til din.",
    heroImageAlt: "Realistiske håndlavede hæklede tasker på stenpodier.",
    heroEyebrow: "handcrafted knit atelier",
    heroTitle: "Hæklede tasker med stille luksus",
    heroText: "Teksturrige håndlavede tasker til hverdag og aften. Hver model samles roligt og omhyggeligt i et lille atelier.",
    heroPointOne: "Stram silhuet, blødt garn",
    heroPointTwo: "Færdige styles eller din nuance",
    heroPointThree: "Tryg betaling med kort eller Apple Pay",
    heroPrimary: "Se kollektionen",
    heroSecondary: "Skriv et ønske",
    wishEyebrow: "client wishes",
    wishTitle: "Ønske til tasken",
    wishText: "Farve, størrelse, dato, gave eller en kort besked. På den publicerede side gemmes ønsket via formularen.",
    yourNameLabel: "Dit navn",
    emailLabel: "Email til svar",
    wishMessageLabel: "Ønske",
    wishPlaceholder: "Jeg vil gerne have en taske i milk med kort hank...",
    wishSubmit: "Send ønske",
    wishCopied: "Ønsket er klar. Send det via email eller gem det via formularen på den publicerede side.",
    botFieldLabel: "Udfyld ikke",
    metricDays: "dage til at lave",
    metricHandmade: "håndarbejde og kontrol",
    metricGift: "gaveindpakning",
    deliveryTitle: "Levering",
    deliveryText: "Sendes i Danmark og Europa efter bekræftelse.",
    careTitle: "Pleje",
    careText: "En kort plejevejledning følger med tasken.",
    giftTitle: "Gave",
    giftText: "Tilføj et kort med personlig tekst.",
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
    paymentText: "Ordren går gennem en sikker betalingsside. Efter betaling bekræfter vi detaljerne og gør tasken klar til afsendelse.",
    payCard: "Betal med kort",
    customEyebrow: "bespoke order",
    customTitle: "En taske i din farve",
    customText: "Vælg form, garn, hank og hardware. Vi afklarer detaljer og tid, før arbejdet starter.",
    nameLabel: "Navn",
    colorLabel: "Ønsket farve",
    modelLabel: "Model",
    notesLabel: "Kommentar",
    namePlaceholder: "Anna",
    colorPlaceholder: "milk, sage, black...",
    notesPlaceholder: "Størrelse, hank, dato...",
    modelCrossbody: "Crossbody",
    modelBaguette: "Mini baguette",
    modelEvening: "Aftentaske",
    modelShopper: "Shopper",
    customSubmit: "Lav forespørgsel",
    cartTitle: "Kurv",
    totalLabel: "I alt",
    cardShort: "Kort",
    copyOrder: "Kopier ordre",
    addToCart: "I kurv",
    productImageAlt: "håndlavet hæklet taske",
    footerHelpTitle: "Brug for hjælp?",
    footerContact: "Kontakt",
    footerCustom: "Specialbestilling",
    footerDelivery: "Levering og pleje",
    footerPayment: "Betaling",
    footerAtelierTitle: "Atelier",
    footerCollection: "Kollektion",
    footerWish: "Ønsker",
    footerStory: "Maison Liliya",
    footerLocationTitle: "Studio og afsendelse",
    footerLocation: "Danmark / Europa",
    footerUpdatesTitle: "Maison Liliya updates",
    footerUpdatesText: "Skriv til os, hvis du vil se nye farver, mini-drops og færdige modeller først.",
    footerMade: "Håndlavede hæklede tasker, Danmark",
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
      "sage-crossbody": ["Hverdag", "signature", "Sage crossbody med fast form, blød hank og rolig boutique-farve."],
      "cream-baguette": ["Aften", "limited edit", "Cream baguette til kjole, frakke eller et rent basislook."],
      "berry-mini": ["Mini", "compact", "Berry mini til telefon, nøgler og læbestift uden ekstra fylde."],
      "cocoa-shopper": ["Hverdag", "atelier", "Cocoa shopper med tydelig struktur, faste hanke og varm tone."],
      "black-pearl": ["Aften", "after dark", "Black Pearl med dyb sort farve, fin hardware og ren form."],
      "milk-cloud": ["Mini", "soft tone", "Milk Cloud i mælket nuance til sommer, gave eller aftenlook."],
      "rose-loop": ["Aften", "new season", "Rose Loop med kort hank og blød rosa tone."],
      "sand-tote": ["Hverdag", "roomy", "Sand Tote til byen, arbejdet og let shopping."],
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
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    languageLabel: "Language",
    benefitsLabel: "Shop benefits",
    highlightsLabel: "Atelier highlights",
    deliveryCareLabel: "Delivery and care",
    footerLabel: "Site footer",
    wishLink: "Write a wish",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuTitle: "Menu",
    menuCustom: "Custom order",
    menuDelivery: "Delivery and care",
    cartOpen: "Open cart",
    cartClose: "Close cart",
    sideVerse: "Let all that you do be done in love.",
    verseRef: "1 Cor. 16:14",
    sideLuxury: "made for soft luxury",
    sideNote: "A personal detail makes the piece feel yours.",
    heroImageAlt: "Realistic handmade crochet bags styled on stone plinths.",
    heroEyebrow: "handcrafted knit atelier",
    heroTitle: "Crochet bags with quiet luxury",
    heroText: "Textured handmade bags for everyday and evening wear. Each piece is finished slowly and carefully in a small atelier.",
    heroPointOne: "Clean shape and soft yarn",
    heroPointTwo: "Ready styles or your own shade",
    heroPointThree: "Secure card or Apple Pay checkout",
    heroPrimary: "Shop collection",
    heroSecondary: "Write a wish",
    wishEyebrow: "client wishes",
    wishTitle: "A wish for your bag",
    wishText: "Color, size, date, gift or a short note. On the live site the request is saved through the form.",
    yourNameLabel: "Your name",
    emailLabel: "Reply email",
    wishMessageLabel: "Wish",
    wishPlaceholder: "I would like a milk-colored bag with a short handle...",
    wishSubmit: "Send wish",
    wishCopied: "The wish is ready. Send it by email or save it through the form on the live site.",
    botFieldLabel: "Do not fill",
    metricDays: "days to make",
    metricHandmade: "handmade and checked",
    metricGift: "gift packaging",
    deliveryTitle: "Delivery",
    deliveryText: "Shipping across Denmark and Europe after confirmation.",
    careTitle: "Care",
    careText: "A short care note is included with each bag.",
    giftTitle: "Gift",
    giftText: "Add a card with a personal note.",
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
    paymentText: "Your order goes through secure checkout. After payment we confirm the details and prepare the bag for shipping.",
    payCard: "Pay by card",
    customEyebrow: "bespoke order",
    customTitle: "A bag in your shade",
    customText: "Choose the shape, yarn, handle and hardware. We confirm details and timing before work begins.",
    nameLabel: "Name",
    colorLabel: "Desired color",
    modelLabel: "Model",
    notesLabel: "Comment",
    namePlaceholder: "Anna",
    colorPlaceholder: "milk, sage, black...",
    notesPlaceholder: "Size, strap, date...",
    modelCrossbody: "Crossbody",
    modelBaguette: "Mini baguette",
    modelEvening: "Evening bag",
    modelShopper: "Shopper",
    customSubmit: "Create request",
    cartTitle: "Cart",
    totalLabel: "Total",
    cardShort: "Card",
    copyOrder: "Copy order",
    addToCart: "Add to cart",
    productImageAlt: "handmade crochet bag",
    footerHelpTitle: "May we help?",
    footerContact: "Contact",
    footerCustom: "Custom order",
    footerDelivery: "Delivery and care",
    footerPayment: "Payment",
    footerAtelierTitle: "The atelier",
    footerCollection: "Collection",
    footerWish: "Wishes",
    footerStory: "Maison Liliya",
    footerLocationTitle: "Studio and shipping",
    footerLocation: "Denmark / Europe",
    footerUpdatesTitle: "Maison Liliya updates",
    footerUpdatesText: "Write to us if you want first access to new shades, mini drops and ready styles.",
    footerMade: "Handmade crochet bags, Denmark",
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
      "sage-crossbody": ["Everyday", "signature", "Sage crossbody with a structured shape, soft strap and calm boutique tone."],
      "cream-baguette": ["Evening", "limited edit", "Cream baguette for a dress, coat or clean everyday look."],
      "berry-mini": ["Mini", "compact", "Berry mini for phone, keys and lipstick without extra volume."],
      "cocoa-shopper": ["Everyday", "atelier", "Cocoa shopper with tactile texture, firm handles and a warm tone."],
      "black-pearl": ["Evening", "after dark", "Black Pearl with deep color, neat hardware and a clean shape."],
      "milk-cloud": ["Mini", "soft tone", "Milk Cloud in a milky shade for summer, gifting or evening looks."],
      "rose-loop": ["Evening", "new season", "Rose Loop with a short handle and soft rose tone."],
      "sand-tote": ["Everyday", "roomy", "Sand Tote for the city, work and light shopping."],
    },
  },
};

function getBrowserLanguage() {
  const preferred = (navigator.language || navigator.userLanguage || "ru").slice(0, 2).toLowerCase();
  if (preferred === "da") return "da";
  if (preferred === "en") return "en";
  if (preferred === "ru" || preferred === "uk") return "ru";
  return "ru";
}

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("shopLanguage");

const state = {
  cart: [],
  category: "all",
  price: "all",
  language: translations[requestedLanguage] ? requestedLanguage : translations[savedLanguage] ? savedLanguage : getBrowserLanguage(),
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
const languageSelects = document.querySelectorAll("[data-language-select]");
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
  document.documentElement.dataset.language = state.language;
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
  languageSelects.forEach((select) => {
    select.value = state.language;
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
    image.alt = `${product.name} ${t("productImageAlt")}`;
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

function setupRevealMotion() {
  const elements = document.querySelectorAll(".hero-copy, .wish-panel, .metrics, .trust-strip, .catalog-section, .payment-band, .custom-section, .product-card");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  elements.forEach((element) => element.classList.add("reveal-on-scroll"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  elements.forEach((element) => observer.observe(element));
}

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderProducts();
});

priceFilter.addEventListener("change", (event) => {
  state.price = event.target.value;
  renderProducts();
});

languageSelects.forEach((select) => select.addEventListener("change", () => setLanguage(select.value)));
document.querySelector(".cart-open").addEventListener("click", openCart);
document.querySelectorAll("[data-close-cart]").forEach((button) => button.addEventListener("click", closeCart));
menuOpenButton.addEventListener("click", openMenu);
document.querySelectorAll("[data-close-menu], .menu-links a").forEach((element) => element.addEventListener("click", closeMenu));
document.querySelector("[data-menu-cart]").addEventListener("click", () => {
  closeMenu();
  openCart();
});
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
setupRevealMotion();

