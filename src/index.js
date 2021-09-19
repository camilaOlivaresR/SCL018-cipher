import cipher from './cipher.js';

console.log(cipher);

/*
const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const input  = document.getElementById('input-texto-plano');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');
*/
const abc = [
    'A','B','C','D','E','F',
    'G','H','I','J','K','L',
    'M','N','O','P','Q','R',
    'S','T','U','V','W','X',
    'Y','Z' 
];
/* declaro funcion condicional para cifar un caracter del texto */
function encrypt(char, shift) {
    let include =        
    abc.includes(    /*metodo array include para corroborar que las letras sean parte del alfabeto */
      char.toUpperCase()); /* metodo para convertir caracteres a mayusculas */
       
    if (include){      
     let position =         
     abc.indexOf(char.toUpperCase());   /* la funcion obtiene posicion de cada letra utilizando la funcion indexof*/
     
        
    let newPosition =    /* obtenemos la nueva posicion de la letra en el alfabeto*/
      (position+shift) %   26; /* dividimos por el modulo 26 cualquier numero superior hara que comienze desde la letra A */
        
        
        return abc[newPosition]; /* devuelve la nueva letra segun el alfabeto */
    }else  return char; /* si el caracter no esta en el alfabeto lo devuelve */
    }
  
function encryptText() { 

const form = document.forms[0]; /* elemento de dom para leer formulario de la pagina*/

let titulo =
 document.getElementById("tituloId");  /* */
   
 titulo.innerHTML = "Mensaje Encriptado";/* */

let shift= Number(form.shift.value); /*  */
   
let sourceText =   /* texto original*/
  form.sourceText.value;       /* */
   
form.sourceText.value 
  = [... sourceText ].map(char =>
    encrypt(char, shift)).join('');/* */
}

  
function decryptText() {
const form = document.forms[0];  

let titulo = document.getElementById("tituloId");       

tutulo.innerHTML = "Mensaje Desencriptado";
     
let shift =  
  Number(form.shift.value);  
  let sourceText = form.sourceText.value;    
   
shift = 
   (alfabeto.length - shift) %   26; 
   
  
form.sourceText.value 
    = [... sourceText ].map(char => 
      encrypt(char,    
      shift)).join('');
}

