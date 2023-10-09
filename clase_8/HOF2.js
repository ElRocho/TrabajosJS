// PUSH

// let frutas = ["Manzanas", "Peras", "Uvas"]

//frutas.push("Naranjas");

let tareas = ["Desafio", "Entregas", "Practica"];

tareas.push("Nueva Tarea");

//console.log(frutas);
console.log(tareas);

const producto = {
  marca: "Samsung",
  precio: 2000,
};

const carrito = [];

//#            POP (Elimina el iltimo articulo del array)

// let frutas = ["Manzanas", "Peras", "Uvas"];
//frutas.pop();

//console.log(frutas);

//! === Estrictamente igual
//!  == Igual

let id = 1;
let id2 = "1";

if (id === id2) {
  console.log("son iguales");
} else {
  console.log("No son iguales");
}

//#               SHIFT (Elimina el primer elemento del array)

// frutas.shift();

// console.log(frutas);

//#              MAP (Crea un nuevo array aplicando una funcion a cada elemento)

let frutas = ["Manzanas", "Peras", "Uvas", "Melon", "Sandia"];

let nuevo = frutas.map((fruta) => {
  console.log(fruta);
});

const productos = [
  { id: 1, nombre: "Producto A", precio: 1000, cat: "A" },
  { id: 2, nombre: "Producto B", precio: 1500, cat: "A" },
  { id: 3, nombre: "Producto C", precio: 2000, cat: "B" },
];
//#              FIND - FILTER

//#             FIND (Solo devuelve el primer elemento que encuentre)

//#             FILTER (Devuelve todos los elementos que coincidan con la busqueda)

let resultado = productos.find((p) => p.id === 1);

console.log(resultado.nombre);
