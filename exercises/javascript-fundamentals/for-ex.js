// ejercicio 1: usando un bucle for, imprime los números del 1 al 10 en la consola y luego del 10 al 1 en orden descendente.
console.log("Ejercicio 1: Bucle for ascendente y descendente");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// BASICO, declarando variables y usando un bucle for para iterar sobre un rango de valores en orden ascendente y descendente.

// ejercicio 2: imprime solo numeros pares y luego solo los impares del 1 al 10 en la consola usando %.
console.log("Ejercicio 2: Imprimir solo numeros pares e impares");

console.log("Numeros pares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Numeros impares:");

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// Output: Numeros pares: 2, 4, 6, 8, 10, Numeros impares: 1, 3, 5, 7, 9
// BASICO, declarando variables y usando un bucle for para iterar sobre un rango de valores y usando el operador % para determinar si un número es par o impar.

console.log(
  "Ejercicio 3: Imprimir los numeros del 1 al 10, del 10 al 1, y luego solo los numeros pares e impares del 1 al 10 usando while loop",
);

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

console.log("Numeros pares:");
i = 1;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

console.log("Numeros impares:");
i = 1;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
// Output: Numeros del 1 al 10, del 10 al 1, Numeros pares: 2, 4, 6, 8, 10, Numeros impares: 1, 3, 5, 7, 9
// BASICO, declarando variables y usando un bucle while para iterar sobre un rango de valores y usando el operador % para determinar si un número es par o impar.
