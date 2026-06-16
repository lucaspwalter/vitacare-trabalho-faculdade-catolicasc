const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const form = document.querySelector(".appointment-form");
const message = document.querySelector(".form-message");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = "Preencha os campos obrigatórios.";
    message.classList.add("error");
    form.reportValidity();
    return;
  }

  form.reset();
  message.textContent = "Solicitação enviada com sucesso.";
  message.classList.remove("error");
});
