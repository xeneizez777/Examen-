const burger = document.querySelector(".burger")

function vizualizarLista(){
    const lista = document.querySelector(".lista")
    const listaLI = document.querySelectorAll(".lista__li")

    lista.classList.toggle("lista--activada")
    burger.classList.toggle("toggle")

    listaLI.forEach((li, index) => (li.style.transition = `all ${2*index+2}s`))
}

burger.addEventListener("click",vizualizarLista)



const color = document.querySelector(".fondo__principal")

function cambiarColor(){
    color.style.backgroundColor="white"
}

color.addEventListener("click",cambiarColor)


const boton = document.querySelector(".boton__personal")


function borderRadius(){
    boton.style.borderRadius="50px"
}

boton.addEventListener("click",borderRadius)