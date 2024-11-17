let respuestas = [
  "Heisenberg",
  "Fring",
  "Los Pollos Hermanos",
  "Pinkman",
  "Azul",
  "Salamanca",
  "Metilamina",
  "Walter",
  "Medicacion",
  "McGill",
];

let botones = document.querySelectorAll(".desmarcar");
botones.forEach((element) => {
  element.addEventListener("click", prevenir);
});

let BotonEnviar = document.getElementById("enviar");
let formularios = document.querySelectorAll(".formularios");

function prevenir(e) {
  e.preventDefault();
  let formularioPadre = this.parentNode;
  formularioPadre.reset();
}

let enviar = document
  .getElementById("enviar")
  .addEventListener("click", checarcorrectos);

function checarcorrectos() {
  let total_preguntas = [
    "Pregunta 1",
    "Pregunta 2",
    "Pregunta 3",
    "Pregunta 4",
    "Pregunta 5",
    "Pregunta 6",
    "Pregunta 7",
    "Pregunta 8",
    "Pregunta 9",
    "Pregunta 10",
  ];
  let ya_chequeados = [];
  let chequeados = document.querySelectorAll("input[type=radio]:checked");
  chequeados.forEach((element) => {
    if (respuestas.indexOf(element.value) > -1) {
      // let span = document.createElement("span")
      // span.setAttribute("id", "bien")
      // span.textContent = " ✅"
      // element.parentNode.insertBefore(span, element.nextSibling.nextSibling.nextSibling)
    } else {
      // let span = document.createElement("span")
      // span.setAttribute("id", "mal")
      // span.textContent = " ❌"
      // element.parentNode.insertBefore(span, element.nextSibling.nextSibling.nextSibling)
    }
    ya_chequeados.push(element.name);
  });
  for (let i = 0; i < ya_chequeados.length; i++) {
    if (total_preguntas.indexOf(ya_chequeados[i]) != -1) {
      total_preguntas.splice(total_preguntas.indexOf(ya_chequeados[i]), 1);
    }
  }

  if (chequeados.length < total_preguntas.length) {
    total_preguntas.forEach((element) => {
      let nombre = document.getElementsByName(element);
      let span = document.createElement("span");
      span.setAttribute("id", "vacio");
      span.textContent = "Tiene que rellenar este campo";
      nombre[0].parentElement.prepend(span);
    });
    chequeados.forEach((element) => {
      let span = element.parentNode.querySelector("span[id=vacio]")
      if (span != null) {
        element.parentNode.querySelector("span[id=vacio]").textContent = "";
      }
    });
  }else{
    chequeados.forEach((element) => {
      if (respuestas.indexOf(element.value) > -1) {
        let span = document.createElement("span")
        span.setAttribute("id", "bien")
        span.textContent = " ✅"
        element.parentNode.insertBefore(span, element.nextSibling.nextSibling.nextSibling)
      } else {
        let span = document.createElement("span")
        span.setAttribute("id", "mal")
        span.textContent = " ❌"
        element.parentNode.insertBefore(span, element.nextSibling.nextSibling.nextSibling)
      }
    });
  }
}
