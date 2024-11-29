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


    let fecha_chk = 0;
    let cocinero_chk = 0;
    let destinatario_chk = 0;
    let gramos_chk = 0;
    let composicion_chk = 0;
    let cuenta_chk = 0;

    function isValidDateFormat(dateString) {
        const regex = /^(\d{2})-(\d{2})-(\d{5})$/;
        return regex.test(dateString);
    }
    //regex fecha_chk
    if (!isNaN(fecha.getTime())) {
        
    } else {
        
    }
    //regex cocinero_chk

    //regex destinatario_chk

    //regex gramos_chk

    //regex composicion_chk

    //regex cuenta_chk


})