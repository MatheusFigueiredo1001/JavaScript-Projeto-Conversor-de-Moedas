/*
    Estrutura de repetição - LOOP
        - FOR
        1) INICIALIZAÇÃO --> Criar uma variável e colocar um valor inicial para ela
        2) CONDIÇÃO --> Enquanto for true, o laço continuará iterando.
                        Ele irá verificar antes de cada iteração
        3)EXPRESSÃO FINAL --> O que irá ocorrer cada vez que o nosso laço

        for ([Inicialização];  [Condição]; [Expressão final]){
            Seu código aqui
        }

        for of --> Mais simples que o for, não precisa criar uma condição para funcionar, ele já determina sozinho
        for in --> Parecido com o for of, usado mais para objetos

        foreach (item{Todos os elementos do array[name, age, contact]}, index {Posição do array}, array)
*/

/*const characters = [
    "Joy Boy",
    "Imu-Sama",
    "Gol D. Roger",
    "Rocks D. Xebec",
    "Edward Newgate",
    "Figarland Garling",
    "Monkey D. Garp",
    "Shanks",
    "Nujsuro",
    "Kaidou",
    "Marshall D. Teach",
    "Monkey D. Dragon",
    "Oden",
    "Saint Jay Garcia Saturn",
    "Warcury",
    "Ju peter",
    "Sheperd",
    "Monkey D. Luffy",
    "Dracule Mihawk",
    "Charlotte Linlin",
]*/

//users.length --> Tamanho do array


/* for (let i = 0; i < users.length; i++){
    console.log(characters[i])

}
*/

/*for (const name of characters) {
    console.log(name)
}*/

/*for (const key in user) {
    console.log(key + ":" + user[key])
}*/

const users = [
    { name: "Matheus", age: "23", contact: "(11)913256019"},
    { name: "Vinicius", age: "16", contact: "(12)935621147"},
    { name: "Beatriz", age: "19", contact: "(13)985632147"},
    { name: "Paola", age: "19", contact: "(21)952234661"},
    { name: "Guilherme", age: "28", contact: "(31)925896563"},
    { name: "Antonio", age: "52", contact: "(71)925656535"},
    { name: "Val", age: "45", contact: "(71)926566341"},
]

users.forEach( function (item, index, array) {
    console.log(item)
    console.log(index)
    console.log(array)
});


