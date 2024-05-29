//A) 
var string = 'esto va a ir en mayúsculas';
var stringUpper = string.toUpperCase();
console.log('Texto en mayúsculas:', stringUpper);

//B)
var string2 = 'Programando';
var prim5 = string2.substring(0, 5);
console.log('Mostrar los primeros 5 caracteres:', prim5);

//C)
var string3 = 'Programación web';
var ult3 = string3.substring(string3.length - 3);
console.log('Últimos 3 caracteres:', ults3);

//D)
var string4 = 'Sudamericana';
var string4Mayu = string4.substring(0, 1).toUpperCase() + string4.substring(1).toLowerCase();
console.log('Primera letra en mayúscula:', string4Mayu); 

//E)
var string5 = 'genera espacio';
var primerEspacio = string5.indexOf(' ');
console.log('Primer espacio en blanco:', primerEspacio);

//F)
var string6 = 'programación mayúscula';
var espacio = string6.indexOf(' ');
var primPalabra = string6.substring(0, espacio);
var segPalabra = string6.substring(espacio + 1);
var resultado = primPalabra.substring(0, 1).toUpperCase() + primPalabra.substring(1).toLowerCase() + ' ' +
                segPalabra.substring(0, 1).toUpperCase() + segPalabra.substring(1).toLowerCase();
console.log('Primera letra de ambas palabras en mayúscula:', resultado);