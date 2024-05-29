//A)
var palabras = ["boca", "river", "independiente", "estudiantes", "racing"];

for (var i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

//B)
for (var i = 0; i < palabras.length; i++) {
    var palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    alert(palabraModificada);
}

//C)
var sentence = "";

for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}

alert(sentence);

//D)
var numbers = [];

for (var i = 0; i < 10; i++) {
    numbers.push(i);
}

console.log(numbers);