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
    let text_coci = ('([A-Z]{2})(' + '\\' + 'W{1})(' + '\\' + 'd{4})$');
    let resultado_coci = cocinero.match(text_coci)
    if (cocinero == "") {
        document.getElementById("scocinero").textContent = "El campo está vacío"
        document.getElementById("scocinero").style.color = "red"
    } else if (resultado_coci != null) {
        document.getElementById("scocinero").textContent = "Campo validado"
        document.getElementById("scocinero").style.color = "green"
        cocinero_chk = 1
    } else {
        document.getElementById("scocinero").textContent = "Campo NO validado"
        document.getElementById("scocinero").style.color = "red"
    }

    //regex destinatario_chk
    let text_desti = ('([A-Z]{2,3})(_)([a-z]{12})(:)(' + '\\' + 'd{4})$');
    let resultado_desti = destinatario.match(text_desti)
    if (destinatario == "") {
        document.getElementById("sdestinatario").textContent = "El campo está vacío"
        document.getElementById("sdestinatario").style.color = "red"
    } else if (resultado_desti != null) {
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
    let text_comp = '(\\' + 'd{3,4})(g)([a-zA-Z]{1,2})(' + '\\' + 'd)([a-zA-Z]{1,2})(' + '\\' + 'd)$';
    let resultado_comp = composicion.match(text_comp)
    if (resultado_comp !== null) {
        if (resultado_comp[1] != gramos) {
            document.getElementById("scomposicion").textContent = "Los gramos en la composición deben ser iguales que los gramos escritos arriba"
            document.getElementById("scomposicion").style.color = "red"
        } else {
            document.getElementById("scomposicion").textContent = "Composición validada"
            document.getElementById("scomposicion").style.color = "green"
            composicion_chk = 1
        }
    } else {
        document.getElementById("scomposicion").textContent = "La composición es errónea"
        document.getElementById("scomposicion").style.color = "red"
    }
    //regex cuenta_chk
    let text_cuenta = '([' + '^\\d^' + '\\W^ñ]{1})' +'([' + '^\\d^' + '\\W^ñ]{1})('+  '\\' + 'd{2})' + '(-)' + '(\\' + 'd{6})' + '(\\' + 'd{6})' + '(-)' + '(' + '\\' + 'd{2})' + '(' + '\\' + 'd{2}$)';
    let letras_valores = {
        a : 1,b : 2,c : 3,d : 4,e : 5,f : 6, g : 7, h : 8, i : 9,j : 10,k : 11, l : 12,m : 13,
        n : 14,o : 15,p : 16,q : 17,r : 18,s : 19,t : 20,u : 21,v : 22,w : 23,x : 24,y : 25,z : 26,
    };
    //Comprobación sobre si el patrón está bien escrito
    let resultado_cuenta = cuenta.match(text_cuenta)
    if (resultado_cuenta !== null) {
        let letra1 = (resultado_cuenta[1]).toLowerCase();
        let letra2 = (resultado_cuenta[2]).toLowerCase();
        let sumaletras = 0
        //Se recorre el objeto de letras y guarda en una variable la suma de sus letras acorde con su valor en el objeto
        Object.entries(letras_valores).forEach(([key, value]) => {
            if (key == letra1 || key == letra2) {
                sumaletras += value
            }
          });
        //Convertir la suma de letras de string a número (para añadirle un 0 delante si es necesario)
        sumaletras = sumaletras.toString()
        sumaletras = sumaletras.length == 1 ? "0" + sumaletras: sumaletras
        //Convertir la serie de 12 números de string a numero para poder operar
        if (sumaletras == resultado_cuenta[3]) {
            let primeros_6 = resultado_cuenta[5].split("")
            let sumaprimeros6 = 0
            let ultimos_6 = resultado_cuenta[6].split("")
            let sumaultimos6 = 0
            primeros_6.forEach(element => {
                sumaprimeros6 += parseInt(element)
            });
            ultimos_6.forEach(element => {
                sumaultimos6 += parseInt(element)
            });
            //Cambiar la suma de los 6 primeros y ultimos numeros a string y añadirles 0 si son menores que 10
            sumaprimeros6 = (parseInt((sumaprimeros6 / 6)).toString())
            sumaultimos6 = (parseInt((sumaultimos6 / 6)).toString())
            sumaprimeros6 = sumaprimeros6.length == 1 ? "0" + sumaprimeros6: ""
            sumaultimos6 = sumaultimos6.length == 1 ? "0" + sumaultimos6: ""

            if ((sumaprimeros6 == resultado_cuenta[8]) && (sumaultimos6 == resultado_cuenta[9])) {
                cuenta_chk = 1
                document.getElementById("scuenta").textContent = "Patrón de cuenta válido y valores correctos"
                document.getElementById("scuenta").style.color = "green"
            } else {
                document.getElementById("scuenta").textContent = "Patrón de cuenta válido pero valores incorrectos"
                document.getElementById("scuenta").style.color = "orange"
            }
        }
    } else {
        document.getElementById("scuenta").textContent = "Patrón de cuenta erróneo, La suma de letras es incorrecta"
        document.getElementById("scuenta").style.color = "red"
    }
    if (fecha_chk && cocinero_chk && destinatario_chk && gramos_chk && composicion_chk && cuenta_chk) {
        document.getElementById("allchecked").textContent = "Todos los campos han sido comprobados"
        document.getElementById("allchecked").style.color = "green"
        document.getElementById("ncuenta").textContent = "Número de cuenta al que ingresar el dinero: " + cuenta.split('-').join('')
    }else{
        document.getElementById("allchecked").textContent = "Hay campos incorrectos"
        document.getElementById("allchecked").style.color = "red"
        document.getElementById("ncuenta").textContent = ""
    } 
})