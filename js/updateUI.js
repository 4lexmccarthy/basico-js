/* LAST MODIFIED: 1/4/2022*/

// variables
let claseNombre = document.getElementById("claseNombre"),
    claseTema = document.getElementById("claseTema"),
    claseComentario = document.getElementById("claseComentario"),
    claseFilename = document.getElementById("claseFilename");
     
// funciones 
function updateUI(){
 document.title = claseData.nombre;
 claseNombre.innerText = claseData.nombre;
 claseTema.innerText = claseData.tema;
 claseComentario.innerHTML = claseData.comentario;
 claseFilename.innerText = claseData.filename;
}
