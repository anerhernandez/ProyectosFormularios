document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault();

    let fecha = document.getElementById("fecha");
    let cocinero = document.getElementById("cocinero");
    let destinatario = document.getElementById("destinatario");
    let gramos = document.getElementById("gramos");
    let composicion = document.getElementById("composicion");
    let cuenta = document.getElementById("cuenta");

    console.log(fecha.value)
    console.log(cocinero.value)
    console.log(destinatario.value)
    console.log(gramos.value)
    console.log(composicion.value)
    console.log(cuenta.value)



})