const age = 26;
const yearsProgramming = 6;

console.log(age + yearsProgramming);
console.log(age - yearsProgramming);
console.log(age * yearsProgramming);
console.log(age / yearsProgramming);
console.log(age % yearsProgramming);
// operadores de arriba realizan operaciones matemáticas entre números, mientras que el operador de módulo (%) devuelve el resto de la división entre dos números.
const payment1 = "100000";
const payment2 = "50000";
// En este caso, el operador de suma (+) concatenará las dos cadenas de texto en lugar de realizar una suma numérica, lo que resultará en "10000050000". Para obtener la suma numérica correcta, es necesario convertir las cadenas a números utilizando la función Number() o parseInt() antes de realizar la operación.
console.log(payment1 + payment2);
console.log(Number(payment1) + Number(payment2));
// El operador de incremento (++) aumenta el valor de una variable en 1, mientras que el operador de decremento (--) disminuye el valor de una variable en 1. Estos operadores se pueden usar tanto en su forma prefija como en su forma postfija, lo que afecta el orden de evaluación en expresiones más complejas.
// ademas de eso, al momento de + o - con un string, el operador intentará convertir el string a un número antes de realizar la operación. Si el string no se puede convertir a un número válido, el resultado será NaN (Not a Number).

const number = 25;

console.log(number % 2);
console.log(38 % 5);

console.log(100 % 10);
console.log(101 % 10);
console.log(102 % 10);
console.log(103 % 10);
