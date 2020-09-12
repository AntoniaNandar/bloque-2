/*var kilometros = prompt ('Cuantos kilómetros desea recorrer');
var distanciaTotalConUnTanque = 45*15; 
var cantidadDeReavastecimientos = Math.trunc(kilometros/distanciaTotalConUnTanque) -1;

if (kilometros <= distanciaTotalConUnTanque) {
    alert('Puedes recorrer la distancia sin reabastecerte');
} else {
    alert('No puedes recorrer todo el trayecto, debes reabastecerte');
}

alert('necesitaras restablecer' + cantidadDeReavastecimientos + 'veces');*/





/*var modelo = prompt('Que modelo de motor vas a utilizar ?')
var km_de_recorrido = prompt('Cuántos kilómetros vas a recorrer ?');

if (modelo === '1.6') {
    consumo = 15;
} else if (modelo === '1.8') {
    consumo = 12;
} else if (modelo === '2.0') {
    consumo = 10;
} else {
    alert('Debes ingresar un tipo de motor válido')
}

var tanque = 50 * consumo;
var resultado = Math.ceil(km_de_recorrido / tanque);

var s = "";
if (resultado > 1) {
    s = "s";
}
alert('Necesitas almenos' + ' ' + resultado + ' ' + 'tanque' + s + ' ' + 'para realizar tu recorrido :)');*/






/*var dial = prompt ('Ingresa tu dial para comprobar que exista en la radio')
var impar = dial % 2;

if (dial >= 89.9 < 107.9 && impar > 0) {
    alert('Tu Dial si existe ! :)')
} else {
    alert ('No existe ese dial, intenta con otro :(')
}*/

const usuario1 = ('Cecilia');
const usuario2 = ('Daniel');
const usuario3 = ('Chris');

var cuenta_enviar = prompt ('Ingresa el número de cuenta a la que quires tranferir');
var dinero = prompt ('Ingresa la cantidad de dinero que quires transferir');
var dinero_entero = parseInt (dinero)

if (cuenta_enviar === usuario1 || cuenta_enviar === usuario2 || cuenta_enviar === usuario3 && dinero_entero >= 3 ) {
    alert('Transferencia exitosa');
} else if (cuenta_enviar !== usuario1 || cuenta_enviar !== usuario2 || cuenta_enviar !== usuario3) {
    alert('La transferencia no se pudo realizar, verifica que el usario exista');
} else if (dinero_entero < 3) {
    alert ('La transferencia no se pudo realizar, verifica que tengas fondos suficientes');
} else {
    alert ('La transferencia no se pudo realizar :c');
}