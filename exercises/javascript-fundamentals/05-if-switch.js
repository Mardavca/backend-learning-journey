console.log("Ejemplo 1");

let daysLate = 75;

if (daysLate === 75) {
  if (daysLate > 60) {
    console.log("High Risk");
  }
}
// Output: High Risk, BASICO, declarando variables.

console.log("Ejemplo 2: encadenar condiciones con else if");

let daysLate2 = 21;

if (daysLate2 > 60) {
  console.log("High Risk");
} else if (daysLate2 > 30) {
  console.log("Medium Risk");
} else {
  console.log("Low Risk");
}
// segun valor declarado, se ejecuta la condicion que cumpla, en este caso "Low Risk"

console.log("Ejemplo 3: Switch (else if) para multiples condiciones");

// se usa cuando tienes una variable que puede tomar muchos valores distintos y quieres ejecutar un bloque de código diferente para cada valor. En este caso, se usa switch en lugar de if-else if-else.

let riskLevel = "Medium";

switch (riskLevel) {
  case "High":
    console.log("High Risk");
    break;
  case "Medium":
    console.log("Medium Risk");
    break;
  case "Low":
    console.log("Low Risk");
    break;
  default:
    console.log("Unknown Risk Level");
}
// Ejercicios de break, continue y default, para controlar el flujo de ejecución y manejar casos no contemplados.

function checkAge(age) {
  if (age < 18) {
    return "Minor";
  } else if (age >= 18 && age < 65) {
    return "Adult";
  } else {
    return "Senior";
  }
}

console.log(checkAge(15)); // Output: Minor
console.log(checkAge(30)); // Output: Adult
console.log(checkAge(70)); // Output: Senior
// return se usa para optimizar lineas de codigo y evitar repetir console.log, ya que se puede llamar a la funcion y mostrar el resultado directamente.
// ademas la funcion devuelve un valor que puede ser usado en otras partes del codigo, lo que permite una mayor modularidad y reutilizacion del codigo.
// con console.log, solo se imprime el resultado en la consola, pero no se puede usar el valor devuelto en otras partes del codigo.

function classifyGrade(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(classifyGrade(95)); // Output: A
console.log(classifyGrade(85)); // Output: B
console.log(classifyGrade(75)); // Output: C
console.log(classifyGrade(65)); // Output: D
console.log(classifyGrade(50)); // Output: F
// los valores se declaran de arriba hacia abajo, ya que si se declara de abajo hacia arriba, el codigo no funcionaria correctamente, ya que se evaluaria la condicion de menor a mayor
// y se ejecutaria la primera condicion que cumpla, en este caso "F" para todos los valores menores a 60.

function classifyRiskLevel(daysLate) {
  if (daysLate > 90) {
    return "Critical Risk";
  } else if (daysLate > 60) {
    return "High Risk";
  } else if (daysLate > 30) {
    return "Medium Risk";
  } else if (daysLate >= 1) {
    return "Low Risk";
  } else {
    return "No Risk";
  }
}

console.log(classifyRiskLevel(0)); // Output: No Risk
console.log(classifyRiskLevel(15)); // Output: Medium Risk
console.log(classifyRiskLevel(45)); // Output: Medium Risk
console.log(classifyRiskLevel(75)); // Output: High Risk
console.log(classifyRiskLevel(100)); // Output: Critical Risk
// se puede usar la funcion para clasificar el nivel de riesgo segun los dias de retraso, y se puede reutilizar en otras partes del codigo, lo que permite una mayor modularidad y
// reutilizacion del codigo.
