const link = document.querySelector('#link');
const foto = document.querySelector('#foto');
const campo = document.querySelector('#campo');

campo.setAttribute("disabled", "");

foto.setAttribute("src", "./monkeyssss.jpg");

link.setAttribute("href", "https://github.com");

link.textContent = "Meu GitHub";

console.log(foto.getAttribute("src"));