/*  Sintaxis de condicional
if (condition) {
  * Codigo a ejecutar si la condicion es verdadera
} else {
  ! Codigo a ejecutar si la condicion es falsa
} */

let usuario = false;

/* if ((usuario = true)) {
  console.log("Bienvenido");
} else {
  console.log("Debes estar registrado");
} */

let contraseña = "1234";
let contraseñaIngresada = prompt("Ingrese su contraseña");

if (contraseña == contraseñaIngresada) {
  console.log("Bienvenido");
} else {
  console.log("Contraseña incorrecta");
}
