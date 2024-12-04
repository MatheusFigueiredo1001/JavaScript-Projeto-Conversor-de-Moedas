/*
Tipos de dados

1 String -> textos.
2 Numbers -> números
3 Boolean -> Boleano (Binário)
4 Objects -> Objetos -> junta todas as informações do usuário em um lugar apenas, sempre use {}
5 Null (Voceê define o valor como nulo) & Undefined (Erro, quando não tem valor)

Estrutura de dados
1. Array (matriz, vetor) -> Armazena dados em um lugar só, sempre use [] e separe com ,;
*/

const texto1 = "Textos com 'aspas' duplas"
const texto2 = 'Textos com "aspas" simples'
const texto3 = `Textos com crase` // Template literals / template string

console.log (texto1)
console.log (texto2)
console.log (texto3)

const myAge = 23
const myString = `Minha idade é ${myAge} anos!`

console.log (myString)

const matheus = {
    name: "Monkey D Theuz",
    age: 23,
    address: {
        street: "laugh tale",
        number: 3,
        bairro: "One Piece",
        city: "São Paulo",
        uf: "SP",
        country: "Brasil"
    }
}

console.log (matheus.address)