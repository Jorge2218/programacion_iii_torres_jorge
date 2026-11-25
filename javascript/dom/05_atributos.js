const personaje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verdimension = document.getElementById("verdimension");
const dimension = document.getElementById("dimension");

cambiar.addEventListener("click", function(){
  if (personaje.getAttribute("title") == "Rick"){
    personaje.setAttribute("src", "morty.jpeg");
    personaje.setAttribute("title", "Morty");
    personaje.dataset.dimension = "C-131";
  } else {
    personaje.setAttribute("src", "rick.jpeg");
    personaje.setAttribute("title", "Rick");
    personaje.dataset.dimension = "C-137";
  }
});

verdimension.addEventListener("click", function(){
  dimension.textContent = personaje.dataset.dimension;
});


const portal = document.getElementById("portal");
const activarPortal = document.getElementById("activarPortal");


if (personaje.getAttribute("title") == "Rick") {
    personaje.setAttribute("src", "morty.jpeg");
    personaje.setAttribute("title", "Morty");
    personaje.dataset.dimension = "C-131";
} else {
    personaje.setAttribute("src", "rick.jpeg");
    personaje.setAttribute("title", "Rick");
    personaje.dataset.dimension = "C-137";
}