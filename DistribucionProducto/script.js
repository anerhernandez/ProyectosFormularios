document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault();

    let fecha = document.getElementById("fecha");
    let cocinero = document.getElementById("cocinero").value;
    let destinatario = document.getElementById("destinatario");
    let gramos = document.getElementById("gramos");
    let composicion = document.getElementById("composicion");
    let cuenta = document.getElementById("cuenta");

    console.log(cocinero.value)
    console.log(destinatario.value)
    console.log(gramos.value)
    console.log(composicion.value)
    console.log(cuenta.value)


    let fecha_chk = 0;
    let cocinero_chk = 0;
    let destinatario_chk = 0;
    let gramos_chk = 0;
    let composicion_chk = 0;
    let cuenta_chk = 0;

    //validate fecha
    function isValidDateFormat(fecha) {
        fecha = new Date(fecha.value)
        fecha = (fecha).toLocaleDateString('en-GB')
        console.log(fecha)
        return fecha
    }
    fecha = isValidDateFormat(fecha)

    if (fecha !== "Invalid Date") {
        console.log("ta bien")
        fecha_chk = 1
    } else {
       console.log("ta mal :(") 
    }
    
    //regex cocinero_chk
    let text = new RegExp('([A-Z]{2})(' + '\\' + 'W{1})(' + '\\' + 'd{4})');
    let resultado = text.test(cocinero)
    console.log(resultado)



    //regex destinatario_chk

    //regex gramos_chk

    //regex composicion_chk

    //regex cuenta_chk


})