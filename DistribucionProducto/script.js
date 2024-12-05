document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault();

    let fecha = document.getElementById("fecha");
    let cocinero = document.getElementById("cocinero").value;
    let destinatario = document.getElementById("destinatario").value;
    let gramos = parseInt(document.getElementById("gramos").value);
    let composicion = document.getElementById("composicion").value;
    let cuenta = document.getElementById("cuenta");

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
        return fecha
    }
    fecha = isValidDateFormat(fecha)

    if (fecha !== "Invalid Date") {
        document.getElementById("sfecha").textContent = "ta bien :)"
        fecha_chk = 1
    } else {
        document.getElementById("sfecha").textContent = "ta mal :("
    }
    
    //regex cocinero_chk
    let text_coci = new RegExp('([A-Z]{2})(' + '\\' + 'W{1})(' + '\\' + 'd{4})');
    let resultado_coci = text_coci.test(cocinero)
    if (resultado_coci) {
        document.getElementById("scocinero").textContent = "Campo validado"
    } else {
        document.getElementById("scocinero").textContent = "Campo NO validado"
    }

    //regex destinatario_chk
    let text_desti = new RegExp('([A-Z]{2,3})(_)([a-z]{12})(:)(' + '\\' + 'd{4})');
    let resultado_desti = text_desti.test(destinatario)
    if (resultado_desti) {
        document.getElementById("sdestinatario").textContent = "Campo validado"
    } else {
        document.getElementById("sdestinatario").textContent = "Campo NO validado"
    }
    //regex gramos_chk
    if (gramos < 100 || gramos > 5000) {
        document.getElementById("sgramos").textContent = "Los gramos van de 100 a 5000"
    } else {
        document.getElementById("sgramos").textContent = "gramos validados"
    }
    //regex composicion_chk

    //Composición: estará formado por una cantidad en gramos seguida de dos conjuntos de una o    
    // dos letras seguidas o no de un número. (ej. 200gC3OH7)
    let text_comp = '(\\' + 'd{3,4})(g)([a-zA-Z]{1,2})(' + '\\' + 'd)([a-zA-Z]{1,2})(' + '\\' + 'd)';
    let resultado_comp = composicion.match(text_comp)
    console.log()
    console.log(resultado_comp)
    //regex cuenta_chk


})