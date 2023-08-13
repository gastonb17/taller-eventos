let miBloque = document.getElementById("miDiv");

miBloque.addEventListener("click", saludar);

function saludar(){
    alert("Hola! Soy el div");
}
// al hacer clik en mi boton actua la función que me elimina el evento del div por lo que no me salta su alert.
let noDiv = document.getElementById("btn");

function cancelDiv(){
    miBloque.removeEventListener("click", saludar);
}

noDiv.addEventListener("click", cancelDiv);

// creo un evento en el div que me restaura el alert anteriormente eliminado.
function returnDiv(){
    miBloque.addEventListener("click", saludar); 
}

miBloque.addEventListener("click", returnDiv);