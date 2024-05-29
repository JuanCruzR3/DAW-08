//A 
let palabras = ["manzana", "banana", "cereza", "durazno", "naranja"];

for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

//B
for (let i = 0; i < palabras.length; i++) {
    let palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    alert(palabraModificada); 
}

//C
let sentence = "";

for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}

alert(sentence.trim());

//D
let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(i);
}

console.log(numeros);

