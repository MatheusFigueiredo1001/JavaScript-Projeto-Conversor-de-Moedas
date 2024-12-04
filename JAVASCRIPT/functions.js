/*
    Functions / Funções
    Trecho de código que é executado quando chamado (Parece gente boa)
    Funções podem receber argumentos ou parâmetros, variável da função "()" funciona apenas dentro da função
    Função void (vazia), não retorna nada
    Função return, retorna um valor para quem chamou a função

 Function padrão --> function () {}
 Arrow function --> () => {}
    Não é necessário escrever 'function', o sinal de '=>' já cria ela, o que lembra uma flecha, por isso o nome
    Nos parâmetros quando se tem apenas um, pode escolher não colocar os parentêses

*/

function sayMyName(name) { //Void
    console.log(`My name is: ${name}`)
}

sayMyName("Monkey D Theuz")

const sayMyNameAgain = name => `Your name is: ${name}`

console.log (sayMyNameAgain ("Monkey D Luffy"))

const myNumber = 7

function sum(value1 = myNumber, value2 = 1) { 
    const result = value1 + value2
    return result
}

const sumAgain = (number1, number2) => number1 + number2

const myResult = sum(10, 7)
console.log("O resultado é " + myResult)
console.log(sumAgain(4, 9))