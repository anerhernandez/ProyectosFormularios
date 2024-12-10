document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault();

    let fecha = document.getElementById("fecha");
    let cocinero = document.getElementById("cocinero").value;
    let destinatario = document.getElementById("destinatario").value;
    let gramos = parseInt(document.getElementById("gramos").value);
    let composicion = document.getElementById("composicion").value;
    let cuenta = document.getElementById("cuenta").value;

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
        document.getElementById("sfecha").textContent = "Campo validado"
        document.getElementById("sfecha").style.color = "green"
        fecha_chk = 1
    } else {
        document.getElementById("sfecha").textContent = "Campo NO validado"
        document.getElementById("sfecha").style.color = "red"
    }
    
    //regex cocinero_chk
    let text_coci = new RegExp('([A-Z]{2})(' + '\\' + 'W{1})(' + '\\' + 'd{4})');
    let resultado_coci = text_coci.test(cocinero)
    if (cocinero == "") {
        document.getElementById("scocinero").textContent = "El campo está vacío"
        document.getElementById("scocinero").style.color = "red"
    } else if (resultado_coci) {
        document.getElementById("scocinero").textContent = "Campo validado"
        document.getElementById("scocinero").style.color = "green"
        cocinero_chk = 1
    } else {
        document.getElementById("scocinero").textContent = "Campo NO validado"
        document.getElementById("scocinero").style.color = "red"
    }

    //regex destinatario_chk
    let text_desti = new RegExp('([A-Z]{2,3})(_)([a-z]{12})(:)(' + '\\' + 'd{4})');
    let resultado_desti = text_desti.test(destinatario)
    if (destinatario == "") {
        document.getElementById("sdestinatario").textContent = "El campo está vacío"
        document.getElementById("sdestinatario").style.color = "red"
    } else if (resultado_desti) {
        document.getElementById("sdestinatario").textContent = "Campo validado"
        document.getElementById("sdestinatario").style.color = "green"
        destinatario_chk = 1
    } else {
        document.getElementById("sdestinatario").textContent = "Campo NO validado"
        document.getElementById("sdestinatario").style.color = "red"
    }
    //regex gramos_chk
    if (isNaN(gramos)) {
        document.getElementById("sgramos").textContent = "El campo está vacío"
        document.getElementById("sgramos").style.color = "red"
    } else if (gramos < 100 || gramos > 5000) {
        document.getElementById("sgramos").textContent = "Los gramos van de 100 a 5000"
        document.getElementById("sgramos").style.color = "red"
    } else {
        document.getElementById("sgramos").textContent = "gramos validados"
        document.getElementById("sgramos").style.color = "green"
        gramos_chk = 1
    }
    //regex composicion_chk

    //Composición: estará formado por una cantidad en gramos seguida de dos conjuntos de una o    
    // dos letras seguidas o no de un número. (ej. 200gC3OH7)
    let text_comp = '(\\' + 'd{3,4})(g)([a-zA-Z]{1,2})(' + '\\' + 'd)([a-zA-Z]{1,2})(' + '\\' + 'd)';
    let resultado_comp = composicion.match(text_comp)
    if (resultado_comp !== null) {
        document.getElementById("scomposicion").textContent = "Composición validada"
        document.getElementById("scomposicion").style.color = "green"
        composicion_chk = 1
    } else {
        document.getElementById("scomposicion").textContent = "La composición es errónea"
        document.getElementById("scomposicion").style.color = "red"
    }
    //regex cuenta_chk
    let text_cuenta = '([' + '^\\d^' + '\\W^ñll]{2})(' + '\\' + 'd{2})' + '(_)' + '(\\' + 'd{6})' + '(\\' + 'd{6})' + '(_)' + '(' + '\\' + 'd)' + '(' + '\\' + 'd)';
    let resultado_cuenta = cuenta.match(text_cuenta)
    if (resultado_cuenta !== null) {
        document.getElementById("scuenta").textContent = "Patrón de cuenta"
        document.getElementById("scuenta").style.color = "green"
        composicion_chk = 1
    } else {
        document.getElementById("scuenta").textContent = "Patrón de cuenta erróneo"
        document.getElementById("scuenta").style.color = "red"
    }
    // ([a-zA-Z]{2})(\d{2})(_)(\d{12})(_)(\d)(\d);

})