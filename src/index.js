import cipher from './cipher.js';

//declaro la variable boton codificar con id codebutton que es un elemento del Dom//
const botonCodificar= document.getElementById("botonCodificar"); 
const botonDecodificar = document.getElementById("botonDecodificar");
// declaro la variable texto sin codificar con id textOriginal que es un elemento del Dom//
const textOriginal = document.getElementById("textOriginal");
const textCifrado = document.getElementById("textCifrado");
//declaro variable shiftText que va buscar el id shift//
const shiftNum = document.getElementById("shift");



//aplico el metodo aEL al boton codificar , recibe 2 parametros
//el primer parametro es un evento click del usuario
//luego se gatilla el el segundo parametro la funcion clickCode
botonCodificar.addEventListener("click", clickCode);
botonDecodificar.addEventListener("click", clickDecode);



//declaro funcion clickCode
function clickCode() {
    //declaro constante offset toma el valor del shiftText y lo convierte en numero entero
    // parseInt es una funcion que parsea o analiza un string y retorna un entero
    const offset = parseInt(shiftNum.value);
    // declaro constante que almacena el valor del texto original
    const inputEntrada = textOriginal.value;
    //el valor de texto cifrado recibe el metodo encode aplicado a cipher
    textCifrado.value = cipher.encode(offset, inputEntrada);
}   

function clickDecode() {
    const offset = parseInt(shiftNum.value);
    const inputSalida = textOriginal.value;
   textCifrado.value = cipher.decode(offset, inputSalida);
}


