var h1 = document.createElement("h1");
h1.textContent = "My presentation";
h1.style.color = "red"; 
//
var div = document.querySelector("div");
div.parentNode.insertBefore(h1, div);
//
var parrafo = document.createElement("p");
parrafo.textContent = "My best friend is Mickey";
div.appendChild(parrafo);
//
var ultimaP = div.lastElementChild;
ultimaP.style.fontWeight = "bold"; 
ultimaP.style.backgroundColor = "red"; 