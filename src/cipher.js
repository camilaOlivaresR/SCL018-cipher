// declaro una funcion para cifrar un caracter
// toma dos parametros el offset y una letra
function cipherChar(offset, character) {
    //declaro constante para minusculas segun posiicon en tabla ascii
    const universalCase = character >= 65 && character <= 122;
    //declaro variable para mayusculas segun posisicion en la tabla ascii
    //const characterUpperCase = character >= 65 && character <= 90;

    //si se cumple cualquiera de las condiciones entras al if
    //if(characterLowerCase || characterUpperCase ) {

    //le asigno el valor 26 a la variable modulo, por la cantidad de caracteres del alfabeto esp
    let abc = 26;
    // declaro la variable ascii y le asigno valor 65 
    let AasciiTab = 65;

    //si se cumple la condicion que sea letra minuscula
    // if(characterLowerCase) {
    // le asigno 97 a la variable ascii
    //AasciiTab = 97;
}

//declaro variable charModulo
// que en este caso el charModulo toma el valor de la formula
let charResiduo = ((character - AasciiTab) + offset) % abc;
//si el valor es menor que 0
if (charResiduo < 0) {
    //charmodulo tomara el sgte valor
    charResiduo = charResiduo + abc;
}
//entonces nos retorna un string especifico al valor que tome
// string.fromcharcodeat es un metodo que retorna un string
//((charModulo resultado de la formula+ascii))
return String.fromCharCode((charResiduo + AasciiTab));
}
else {
    //si el valor no cumple las condicioes nos retorna el mismo caracter
    return String.fromCharCode(character);
}
}

//declaro la funcion cipherString
//PARA CIFARAR TODA LA CADENA DE TEXTO
//recibe como parametros el offset y string
function cipherString(offset, string) {
    //exepciones o errores
    if (typeof offset !== "number") {
        throw new TypeError("error en valor de offset");
    }

    if (typeof string !== "string") {
        throw new TypeError("error en valor de string");
    }

    // se guarda el resultado del cifrado
    //inicializar una variable vacia de string
    //que almacenara el resultado, se guardara un resultado
    let result = "";

    // se inicia un ciclo de iteracion que recorre todas las letras o string
    for (let i = 0; i < string.length; i++) {
        //declaro la variable caracter o letra 
        //esta almacena la posicion numerica entera de cada letra del string
        const character = string.charCodeAt(i);
        // ahora cipherResult ira almacenando cada letra del string cifrada
        result += cipherChar(offset, character);
    }
    //nos retorna el contenido total de la variable cipherResult
    return result;
}

//declaro la constante cipher
const cipher = {
    //el metodo encode declara una funcion que toma 2 parametros
    // offset y string
    encode: function(offset, string) {
        //
        return cipherString(offset, string);
    },

    decode: function(offset, string) {
        return cipherString(-offset, string);
    }
};

export default cipher;