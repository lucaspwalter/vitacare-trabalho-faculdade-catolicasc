const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");
const formulario = document.querySelector(".formulario-agendamento");
const mensagem = document.querySelector(".mensagem-formulario");

botaoMenu.addEventListener("click", () => {
  const estaAberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(estaAberto));
});

menu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  }
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formulario.checkValidity()) {
    mensagem.textContent = "Preencha os campos obrigatórios.";
    mensagem.classList.add("erro");
    formulario.reportValidity();
    return;
  }

  formulario.reset();
  mensagem.textContent = "Solicitação enviada com sucesso.";
  mensagem.classList.remove("erro");
});
