const res = Math.ceil(Math.random() * 20);

console.log(res);
alert("Bienvenido al juego de adivinar el número secreto.");
let intentos = 3;
while (intentos > 0) {
  intentos = intentos - 1;
  const userChoice = Number(prompt("Introduce un número del 1 al 20"));
  if (userChoice == res) {
    alert("Bien ahi!");
    break;
  }
  if (userChoice < res) {
    alert("Tu numero es menor al numero secreto");
  }
  if (userChoice > res) {
    alert("Tu numero es mayor al numero secreto");
  }
}
if (intentos == 0) {
  alert(`Perdiste! El numero era ${res}`);
}
