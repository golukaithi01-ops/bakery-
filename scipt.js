
"use strict";

// Sweet Bakery Shop WhatsApp number
const WHATSAPP_NUMBER = "919334762559";

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    });
  });
}

// WhatsApp buttons with pre-written messages
document.querySelectorAll(".js-whatsapp").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const message =
      button.dataset.message ||
      "Hello Sweet Bakery Shop! Please share your available cakes and prices.";

    openWhatsApp(message);
  });
});

// Individual cake order buttons
document.querySelectorAll(".order-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product;

    const message =
      `Hello Sweet Bakery Shop! I am interested in ${productName}. ` +
      "Please share the available options, price and ordering details.";

    openWhatsApp(message);
  });
});

// Automatically show the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
