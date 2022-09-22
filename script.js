var boton_left = document.querySelector(".btn-left");
var boton_right = document.querySelector(".btn-right");
var munieco = document.querySelector(".munieco");
var h3_munieco = document.querySelector(".h3_munieco")
var p_munieco = document.querySelector(".p_munieco");
var resultado = document.querySelector(".mensaje");
var boton_copiar = document.querySelector(".btn-copiar");


boton_left.onclick = encriptar;
boton_right.onclick = desencriptar;
boton_copiar.onclick = copiar;


function encriptar(){
    Ocultar();
    // resultado.textContent = recuperar_resultado();
    resultado.textContent = encriptar_texto(recuperar_resultado())
}

function desencriptar(){
    Ocultar();
    resultado.textContent = desencriptar_texto(recuperar_resultado());
}

function recuperar_resultado(){
    var texto = document.querySelector(".texto")
    return texto.value;
}

function Ocultar(){
    munieco.classList.add("ocultar");
    h3_munieco.classList.add("ocultar");
    p_munieco.classList.add("ocultar");
}

function encriptar_texto(mensaje){
    var texto = mensaje;
    var texto_final = "";

    for (var i=0; i < texto.length; i++){
        if (texto[i] == "a"){
            texto_final += "ai";
        }

        else if (texto[i] == "e"){
            texto_final += "enter";
        }

        else if (texto[i] == "i"){
            texto_final += "imes";
        }

        if (texto[i] == "o"){
            texto_final += "ober";
        }

        if (texto[i] == "u"){
            texto_final += "ufat";
        }

        else{
            texto_final += texto[i];
        }

    }
    return texto_final;
}

function desencriptar_texto(mensaje){
    texto = mensaje;
    texto_final = ""

    for(var i=0; i< texto.length; i++){
        if (texto[i] == "a"){
            texto_final += "a"
            i += 1
        }
        else if (texto[i] == "e"){
            texto_final += "e"
            i += 4;
        }
        else if (texto[i] == "i"){
            texto_final += "i"
            i += 3
        }
        else if (texto[i] == "o"){
            texto_final += "o"
            i += 3
        }
        else if (texto[i] == "u"){
            texto_final += "u"
            i += 3
        }

        else{
            texto_final += texto[i]
        }
    }
    return texto_final;
}

function copiar(){

    navigator.clipboard.writeText(resultado.innerHTML);
    alert("Se copio el mensaje")
}
