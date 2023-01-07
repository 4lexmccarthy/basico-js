/* LAST MODIFIED: 1/6/2022*/

// variables
let claseNombre = document.getElementById("claseNombre"),
    claseTema = document.getElementById("claseTema"),
    claseFilename = document.getElementById("claseFilename"),
    commentContainer = document.getElementById("commentContainer");

     
// funciones 
function updateUI(){
 document.title = claseData.nombre;
 claseNombre.innerText = claseData.nombre;
 claseTema.innerText = claseData.tema;
 claseFilename.innerText = claseData.filename;

 for (let i = 0; i < claseComments.length; i++) {
  let comment = claseComments[i],
      paragraph = document.createElement('p');
      lineBreak = document.createElement('br');

  paragraph.innerHTML = comment;
  commentContainer.appendChild(paragraph);
  paragraph.classList.add("p");
  commentContainer.appendChild(lineBreak);
 }

 commentContainer.removeChild(commentContainer.lastChild);
}
