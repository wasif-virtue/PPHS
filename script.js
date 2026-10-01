const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      mainNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
      menuButton.textContent = "☰";
    }
  });
}

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(
      `School enquiry: ${formData.get("subject")}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nPhone: ${formData.get("phone") || "Not provided"}\n\n${formData.get("message")}`,
    );
    const status = contactForm.querySelector(".form-status");
    if (status)
      status.textContent = "Opening your email app with the message details…";
    window.location.href = `mailto:info@paragonphs.edu.pk?subject=${subject}&body=${body}`;
  });
}
