let respuestas = ["Heisenberg" , "Fring", "Los Pollos Hermanos", "Pinkman", "Azul" , "Salamanca" , "Metilamina" , "Walter" , "Medicacion" , "McGill"]

let botones = document.querySelectorAll(".desmarcar")
botones.forEach(element => {
  element.addEventListener('click', prevenir)
});


let BotonEnviar = document.getElementById("enviar");
let formularios = document.querySelectorAll(".formularios")


function prevenir(e){
  e.preventDefault()
  let formularioPadre = this.parentNode;
  formularioPadre.reset();
}