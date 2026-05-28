const statusTranslations = {
  ru: {
    successTitle: "Payment success | Maison Liliya",
    successEyebrow: "payment success",
    successHeading: "Оплата прошла",
    successText: "Спасибо за заказ. Мы подготовим сумку к отправке и свяжемся с вами, чтобы подтвердить детали доставки.",
    cancelTitle: "Payment cancelled | Maison Liliya",
    cancelEyebrow: "payment cancelled",
    cancelHeading: "Оплата не завершена",
    cancelText: "Заказ не был оплачен. Вы можете вернуться в коллекцию, изменить корзину или попробовать оплатить еще раз.",
    back: "Вернуться в магазин",
  },
  da: {
    successTitle: "Betaling gennemført | Maison Liliya",
    successEyebrow: "payment success",
    successHeading: "Betalingen er gennemført",
    successText: "Tak for din ordre. Vi gør tasken klar til afsendelse og kontakter dig for at bekræfte leveringsdetaljerne.",
    cancelTitle: "Betaling annulleret | Maison Liliya",
    cancelEyebrow: "payment cancelled",
    cancelHeading: "Betalingen blev ikke gennemført",
    cancelText: "Ordren er ikke betalt. Du kan gå tilbage til kollektionen, ændre kurven eller prøve igen.",
    back: "Tilbage til butikken",
  },
  en: {
    successTitle: "Payment success | Maison Liliya",
    successEyebrow: "payment success",
    successHeading: "Payment completed",
    successText: "Thank you for your order. We will prepare the bag for shipping and contact you to confirm delivery details.",
    cancelTitle: "Payment cancelled | Maison Liliya",
    cancelEyebrow: "payment cancelled",
    cancelHeading: "Payment was not completed",
    cancelText: "The order was not paid. You can return to the collection, adjust the cart or try again.",
    back: "Back to shop",
  },
};

const statusLanguage = localStorage.getItem("shopLanguage") || "ru";
const statusType = document.body.dataset.status || "success";
const copy = statusTranslations[statusLanguage] || statusTranslations.ru;

document.documentElement.lang = statusLanguage;
document.title = copy[`${statusType}Title`];
document.querySelectorAll("[data-status-i18n]").forEach((element) => {
  const key = element.dataset.statusI18n;
  const value = key === "eyebrow" || key === "heading" || key === "text" ? copy[`${statusType}${key[0].toUpperCase()}${key.slice(1)}`] : copy[key];
  element.textContent = value;
});
