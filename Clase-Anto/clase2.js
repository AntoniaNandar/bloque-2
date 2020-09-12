var numero = 92,
    texto = "Hola",
    booleano = true;
console.log(typeof(numero))

//Parsear (convertir) texto a numero

var numero3 = '123';
console.log('Tipo de numero3'+typeof(nunmero3));
var numero3_convertido = parseInt (numero3);
console.log('Tipo de numero3 convertido' + numero3_convertido);

//Confirmacion
var confirmacion = confirm ('Aceptas las condiciones de uso ?');
console.log ('Tipo de confirmacion')

//Condicional 
if (confirmacion === true) {
    console.log ('Has acptado las condiciones');
} else {
    console.log ('No aceptaste');
}

//Operaadores de comparacion (<, <, <=; >=, !=, ==, ===, !==)
var edad = 15;
if (edad >= 18) {
    console.log ('Bievenido')
} else {
    console.log ('Lo sentimos, no puedes entrar')
}

//Operadpres logicos: &&, ||, !