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


let enviar = document.getElementById("enviar").addEventListener('click', checarcorrectos);

function checarcorrectos(){
  let total_preguntas = [ "Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4", "Pregunta 5",
     "Pregunta 6", "Pregunta 7", "Pregunta 8", "Pregunta 9", "Pregunta 10", 
    ]
  let ya_chequeados = []
  let chequeados = document.querySelectorAll("input[type=radio]:checked").forEach(element =>{
    if (respuestas.indexOf(element.value) > -1) {
      console.log(element.name)
      console.log("\"" + element.value + "\"")
      console.log("Respuesta Correcta")
      console.log("----------------------")
      let span = document.createElement("span")
      span.setAttribute("id", "bien")
      span.textContent = " ✅"
      element.parentNode.insertBefore(span, element.nextSibling.nextSibling.nextSibling)
      ya_chequeados.push(element.name)
    } else {
      console.log(element.name)
      console.log("\"" + element.value + "\"")
      console.log("Respuesta Incorrecta")
      console.log("----------------------")
      let span = document.createElement("span")
      span.setAttribute("id", "mal")
      span.textContent = " ❌"
      element.parentNode.insertBefore(span, element.nextSibling.nextSibling.nextSibling)
      ya_chequeados.push(element.name)
    }
  });
  console.log(ya_chequeados)
  for (let i = 0; i < ya_chequeados.length; i++) {
    if (total_preguntas.indexOf(ya_chequeados[i]) != -1) {
      total_preguntas.splice(total_preguntas.indexOf(ya_chequeados[i]), 1)
    }
  }
  console.log(total_preguntas)
  total_preguntas.forEach(element => {
    let nombre = document.getElementsByName(element)
    console.log(nombre)
    nombre[0].parentNode.setAttribute("class", "colores")
    console.log(nombre[0].parentNode)
  });
  
}