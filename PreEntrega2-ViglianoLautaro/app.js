document.addEventListener("DOMContentLoaded", function () {
  const usuario = {
    name: "",
    age: null,
  };

  const nombreInput = document.getElementById("nombreInput");
  const edadInput = document.getElementById("edadInput");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function () {
    const nombre = nombreInput.value;
    const edad = parseInt(edadInput.value);
    const output = document.getElementById("output");

    console.log(usuario);

    if (nombre === "" || isNaN(edad)) {
      alert("Por favor, completa todos los campos correctamente.");
    } else {
      usuario.name = nombre;
      usuario.age = edad;
      output.children = "Usuario: " + usuario.name;

      const peliculas = [
        { nombre: "Rapido y Furioso", genero: "Acción", clasificacion: 14 },
        { nombre: "El Conjuro", genero: "Terror", clasificacion: 18 },
        { nombre: "Nemo", genero: "Animada", clasificacion: 6 },
        { nombre: "El Padrino", genero: "Drama", clasificacion: 18 },
        { nombre: "Titanic", genero: "Romance", clasificacion: 14 },
      ];

      class MovieManager {
        constructor(peliculas) {
          this.peliculas = peliculas;
        }

        recomendar(usuario) {
          let peliculasRecomendadas = [];
          this.peliculas.forEach((pelicula) => {
            if (pelicula.clasificacion <= usuario.age) {
              peliculasRecomendadas.push(pelicula);
            }
          });
          peliculasRecomendadas.forEach((pelicula) => {
            displayMovie(pelicula);
          });
          console.log("Películas recomendadas:");
          console.log(peliculasRecomendadas);
        }
      }

      const movieManager = new MovieManager(peliculas);
      movieManager.recomendar(usuario);
    }
  });
});

function displayMovie(movie) {
  const contenedor = document.getElementById("Peliculas");
  const pelicula = document.createElement("li");
  pelicula.innerHTML = movie.nombre;
  contenedor.append(pelicula);
}
