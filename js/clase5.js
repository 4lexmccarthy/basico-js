/* Clase 5: Funciones y Hoisting en JS
   Fecha: Jan 8, 2023
*/

/* Ejemplos de funciones */

function multiplicar(a,b){
 let producto = a*b;
 return `el resultado de multiplicar ${a} por ${b} es: ${producto}`;
}

function dimeLaFecha(){
 const fecha = new Date().toLocaleDateString("es-MX");
 console.log(`Hola humano, hoy es: ${fecha}`);
}

function bolitaMagica(question){
let length = question.length;
let fortune = Math.floor(Math.random() * length);
let numberOfFortunes = 6;
fortune = fortune % numberOfFortunes;
  
if (fortune === 0)
{
console.log("Definitivamente.");
}
else if (fortune === 1)
{
console.log("Probablemente no.");
}
else if (fortune === 2)
{
console.warn("No te puedo asegurar eso.");
}
else if (fortune === 3)
{
console.log("Hagale! Es tu dia de suerte!");
}
else if (fortune === 4)
{
console.log("Ni de chiste.");
}
else
{
console.warn("Puede ser.");
}
}
// Basado en fortune.js by Stephen J. Wolf > https://coding.stephenjwolf.com/cfk2/macode/fortuneteller/fortune.html

/* Data para la interfaz */
let claseData = {
 nombre: "Clase 5",
 tema: "Funciones y Hoisting",
 filename: "clase5.js"
};


// Cada elemento de este array es un parrafo. Incluye de 1 a 3 parrafos para dar contexto.
let claseComments =[
 `Una <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions" target="_blank" rel=”noopener noreferrer” class="link">función</a> es un bloque de código comúnmente utilizado para resolver problemas específicos y repetitivos.`,
 `Pueden declararse de <span class="italic">forma declarativa</span> utilizando la palabra reservada <code class="code-note">function</code> y de <span class="italic">forma expresiva o anónima</span> almacenando la función en una variable.`,
 `La forma elegida determina si la función puede utilizarse antes de ser declarada (<a href="https://www.freecodecamp.org/espanol/news/que-es-hoisting-alzar-en-javascript/" target="_blank" rel=”noopener noreferrer” class="link">hoisting</a>).`
];


/* Instrucciones en consola */
console.warn(`Bienvenido a la ${claseData.nombre} del Curso Básico de JavaScript.`);
console.log(`Generalemnte, las funciones usan argumentos de entrada para generar una salida. Ejecuta "multiplicar()" y pasale 2 numeros para ver su producto.`);
console.log(`Al igual que "dimeLaFecha()", algunas funciones no necesitan argumentos para hacer su magia.`);
console.log(`Hablando de magia, preguntale a la "bolitaMagica()" lo que sea!`);