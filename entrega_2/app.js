const peliculas = [
  { nombre: "Rapido y Furioso", genero: "Acción", clasificacion: 14 },
  { nombre: "El Conjuro", genero: "Terror", clasificacion: 18 },
  { nombre: "Nemo", genero: "Animada", clasificacion: 6 },
  { nombre: "El Padrino", genero: "Drama", clasificacion: 18 },
  { nombre: "Titanic", genero: "Romance", clasificacion: 14 },
];

const usuario = {
  name: "",
  age: null,
};

let nombre = prompt("Ingresa tu nombre");
let edad = parseInt(prompt("Ingresa tu edad"));
while (nombre === "" || isNaN(edad)) {
  if (nombre === "") {
    alert("No ingresaste tu nombre");
    nombre = prompt("Ingresa tu nombre");
  }
  if (isNaN(edad)) {
    alert("No ingresaste tu edad");
    edad = parseInt(prompt("Ingresa tu edad"));
  }
}

usuario.name = nombre;
usuario.age = edad;

console.log(usuario);
class MovieManager {
  constructor(peliculas) {
    this.peliculas = peliculas;
  }
  recomendar(peliculas, usuario) {
    let peliculasRecomendadas = [];
    peliculas.forEach((pelicula) => {
      if (pelicula.clasificacion <= usuario.age) {
        peliculasRecomendadas.push(pelicula);
      }
    });
    console.log(peliculasRecomendadas);
  }
}

const movieManager = new MovieManager(peliculas);

movieManager.recomendar(peliculas, usuario);
