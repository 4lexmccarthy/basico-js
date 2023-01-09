/* Clase 3: Variables y tipos de datos en JS 
   Fecha: Jan 3, 2023
*/

/* Datos primitivos */
let numerito = 69; //number: numeros enteros o decimales.
let texto = "hola, soy un texto"; // string: usado para cadenas de texto.
let sinDefinir = undefined; // undefined: usado para indicar que el valor de una variable no ha sido definido aun (no es necesario ponerlo en la variable).
let soyFalso = false // boolean: tipo de dato logico binario. Puede ser true o false.


/* Datos tipo objeto */
let cajita = ["elemento 0", "elemento 1", 2, false ] // array: coleccion de valores de cualquier tipo de dato almacenados bajo un mismo nombre de variable.
let usuario = {
 name: "Alex McCarthy",
 age: 20,
 username: "4lexmccarthy",
 objeto: "Conjunto de variables con su respectivo valor."
};


/* Variables (to display on the consosole) */
let variables = ["numerito", "texto", "sinDefinir", "soyFalso", "cajita", "usuario"]


/* Data para la interfaz */
let claseData = {
 nombre: "Clase 3-4",
 tema: "Variables y tipos de Datos en JavaScript",
 filename: "clase3.js"
};

// Cada elemento de este array es un parrafo. Incluye de 1 a 3 parrafos para dar contexto.
let claseComments =[
 `Las <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables" target="_blank" rel=”noopener noreferrer” class="link">variables</a> son contenedores usados para guardar distintas clases de valores.`,
 `Los <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos" target="_blank" rel=”noopener noreferrer” class="link">datos primitivos</a> son los tipos de datos más básicos en JS y contienen solo un valor. Por su parte, los  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#objetos" target="_blank" rel=”noopener noreferrer” class="link">datos tipo objeto</a> pueden verse como una colección de variables y valores (propiedades).`
];


/* Instrucciones en consola */
console.warn(`Bienvenido a la ${claseData.nombre} del Curso Básico de JavaScript.`);
console.log(`Explora el contenido las siguientes variables y ejecuta el comando "typeof" para averiguar su tipo de dato:`);
console.table(variables);