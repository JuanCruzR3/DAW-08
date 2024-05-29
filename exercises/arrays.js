//A)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('El mes 5 es: ', meses[4]);
console.log('el mes 11 es: ', meses[10]);

//B) 
var mesesOrd = meses.slice(); 
mesesOrd.sort();
console.log('Los meses ordenados alfabéticamente: ', mesesOrd);

//C)
meses.unshift('Inicio');
meses.push('Fin');
console.log('Agregar elementos al principio y al final:', meses);

//D)
meses.shift();
meses.pop();
console.log('Quitar elementos del principio y del final:', meses);

//E) 
meses.reverse();
console.log('Invertir array:', meses);

//F) 
var mesesUni = meses.join(' - '); 
console.log('Array unido por guiones:', mesesUni);

//G)
meses.reverse();
var meses5a11 = meses.slice(5, 11);
console.log('Copia de Mayo a Noviembre:', meses5a11); 