// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var listaf = [];
  for (var item in objeto){
    var listap = [item, objeto[item]];
    listaf.push(listap);
  };
  return listaf;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var letras = {};
  for (var i = 0; i < string.length; i++){
    if (i === 0){
      letras[string[i]] = 1;
    } else {
        var conf = false;
        for (var letra in letras){
          if (letra === string[i]){
            letras[letra]++;
            conf = true;
          }
        }
        if (!(conf)){
          letras[string[i]] = 1;
        }
    }
  }
  return letras;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var deposit = '';
  var mayus = '';
  var minus = '';
  for (var i in s){
    if(s[i] === s[i].toUpperCase()){
      mayus += s[i];
    } else {
        minus += s[i];
    }
  }
  deposit = mayus + minus;
  return deposit;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase_f = '';
  var pal_pas = '';
  var lista_com = [];
  for (var i in str) {
    if (str[i] === ' ') {
      lista_com.push(pal_pas);
      pal_pas = '';
    } else {
        pal_pas = str[i] + pal_pas;
    }
  }
  lista_com.push(pal_pas);
  
  var ultimo = lista_com.length - 1;
  for (var i = 0; i < lista_com.length; i++){
    for (var j in lista_com[i]) {
      frase_f += lista_com[i][j];      
    }
    if (!(i === ultimo)) {
      frase_f += ' ';
    }
  }
  return frase_f;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var frente = [];
  var reverso = [];
  numero = String(numero);
  for (var i in numero) {
    frente.push(numero[i]);
    reverso.unshift(numero[i]);
  }
  for (var i = 0; i < numero.length; i++) {
    if (!(frente[i] === reverso[i])) {
      return 'No es capicua';
    }
  }
  return 'Es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replace(/a/g, '');
  cadena = cadena.replace(/b/g, '');
  cadena = cadena.replace(/c/g, '');
  return cadena;  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var ordenado = [];
  while (arr.length > 0) {
    var tamaño = 20;
    if (arr.length === 1) {
      ordenado.push(String(arr.splice(0, 1)));
    } else {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].length < tamaño) {
            //console.log(tamaño, 'antes');
            tamaño = arr[i].length;
            //console.log(tamaño, 'despues');
            var pos = i;
          }
        }
        ordenado.push(String(arr.splice(pos, 1)));
    }
  }
  return ordenado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var array = [];
  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]) {
        array.push(arreglo1[i]);
      }
    }
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

