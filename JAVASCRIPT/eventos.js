/*
Eventos
*/

/*const input = document.querySelector("#main-input")

function clique(){
    console.log("Sucesso")
}

function digitar(){
    console.log(input.value)
}*/

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

/*select.addEventListener("change", function (){
    console.log("Valor trocado")
})*/

function valorTrocado(itachi){
    console.log(itachi)
}

select.addEventListener("change", valorTrocado)

input.addEventListener("keypress", valorTrocado)

