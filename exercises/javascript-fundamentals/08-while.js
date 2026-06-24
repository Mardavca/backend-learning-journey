// While loop: while (condición) { código que se repite } ejemplo: let count = 0; while (count < 5) { console.log(count); count++; } // Output: 0, 1, 2, 3, 4
console.log("Ejemplo 2: while loop");

let i = 0;

while (i <= 5) {
  console.log("Count: " + i);
  i++;
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4
// BASICO, declarando variables y usando un bucle while para iterar mientras se cumpla una condición.
// si olvidas poner i++ dentro del bucle, se creará un bucle infinito, ya que la condición siempre será verdadera y el bucle nunca terminará y congelara el programa.

console.log("Ejemplo 3: do-while loop");
// do-while loop: do { código que se repite } while (condición); ejemplo: let count2 = 0; do { console.log(count2); count2++; } while (count2 < 5); // Output: 0, 1, 2, 3, 4

var i = 0;

do {
  console.log(i);
  i++;
} while (i <= 5); // 1, 2, 3, 4, 5
