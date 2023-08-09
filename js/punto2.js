var lista = document.querySelector(".mi-lista");
var itemPrepararAlmuerzo = lista.querySelector("li:last-child");
lista.removeChild(itemPrepararAlmuerzo);

var h1 = document.querySelector("h2");
h1.classList.add("estilos-h1");


var lista = document.querySelector(".mi-lista");
var nuevoItem = document.createElement("li");
nuevoItem.textContent = "Recoger a los niños";
lista.insertBefore(nuevoItem, lista.children[3]);


var itemsCumplidos = document.querySelectorAll(".cumplido");
itemsCumplidos.forEach(item => item.classList.add("cumplido"));


var itemsFallidos = lista.querySelectorAll("li:not(.cumplido)");
itemsFallidos.forEach(item => item.classList.add("fallido"));


function toggleEstado(event) {
    var elemento = event.target;
    elemento.classList.toggle("cumplido");
    elemento.classList.toggle("fallido");
}

var items = lista.querySelectorAll("li");
items.forEach(item => item.addEventListener("click", toggleEstado));
