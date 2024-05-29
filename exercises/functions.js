// a
function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 3);
console.log(resultado); 

// b
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error. Ambos deben ser números.");
        return NaN;
    }
    return a + b;
}

resultado = suma(5, '3');
console.log(resultado); 

// c
function validateInteger(num) {
    return Number.isInteger(num);
}

console.log(validateInteger(5)); // Debería mostrar true
console.log(validateInteger(5.5)); // Debería mostrar false

// d
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error. Ambos deben ser números.");
        return NaN;
    }

    if (!validateInteger(a)) {
        alert("El primer parámetro no es un entero. Será redondeado.");
        a = Math.round(a);
    }

    if (!validateInteger(b)) {
        alert("El segundo parámetro no es un entero. Será redondeado.");
        b = Math.round(b);
    }

    return a + b;
}

resultado = suma(5.3, 3.8);
console.log(resultado); 

// e
function validateNumberAndRound(num) {
    if (typeof num !== 'number') {
        alert("Uno de los parámetros tiene error. Debe ser un número.");
        return NaN;
    }

    if (!validateInteger(num)) {
        alert("El parámetro no es un entero. Será redondeado.");
        return Math.round(num);
    }

    return num;
}

function suma(a, b) {
    a = validateNumberAndRound(a);
    b = validateNumberAndRound(b);

    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }

    return a + b;
}

resultado = suma(5.3, 3.8);
console.log(resultado); 
