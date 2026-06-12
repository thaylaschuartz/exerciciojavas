const container = document.querySelector("#container");

const titulo = container.firstElementChild;

console.log(titulo.textContent);

const paragrafo = titulo.nextElementSibling;
console.log(paragrafo.textContent);

const tagSpan = document.querySelector('.tag');
console.log(tagSpan.parentElement.textContent);