// ejercicios con do...while, el codigo se ejecuta primero, la condicion se evalua despues, por lo que el bloque de codigo se ejecutara al menos una vez, incluso si la condicion es
// falsa desde el principio.
console.log("Caso 1: Imprimir del 1 al 10 usando do...while");
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

console.log("Caso 2: Imprimir del 10 al 1 usando do...while");
i = 10;

do {
  console.log(i);
  i--;
} while (i >= 1); // Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

console.log(
  "Caso 3: Imprimir solo numeros pares del 1 al 10 usando do...while",
);
i = 1;

do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 10); // Output: 2, 4, 6, 8, 10

console.log(
  "Caso 4: Imprimir solo numeros impares del 1 al 10 usando do...while",
);
i = 1;

do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 10); // Output: 1, 3, 5, 7, 9
