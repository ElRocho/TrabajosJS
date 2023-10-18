const peliculas = [
  { nombre: "Rapido y Furioso", genero: "Acción", clasificacion: 14 },
  { nombre: "El Conjuro", genero: "Terror", clasificacion: 18 },
  { nombre: "Nemo", genero: "Animada", clasificacion: 6 },
  { nombre: "El Padrino", genero: "Drama", clasificacion: 18 },
  { nombre: "Titanic", genero: "Romance", clasificacion: 14 },
];
const usuarios = [{ nombre: "Juan", edad: 17 }];
console.log(peliculas[2].clasificacion);

function recomendar(peliculas, usuarios) {
  let peliculasRecomendadas = [];
  peliculas.forEach((pelicula) => {
    if (pelicula.clasificacion <= usuarios[0].edad) {
      peliculasRecomendadas.push(pelicula);
    }
  });
  console.log(peliculasRecomendadas);
}
recomendar(peliculas, usuarios);
