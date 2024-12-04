/*
    MAP => Mapear o array
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros:
        - Item do array; (Primeiro parâmetro é obrigatório, demais são opcionais)
        - Index (posição do array);
        - Array completo;
*/

const number = [1, 3, 5, 7, 9]

const double = number.map ((item, index, arrayOriginal) => item * 2) //{
    // console.log(item + ' -> item')
    // console.log(index + ' -> index')
    // console.log(arrayOriginal + ' -> arrayOriginal')
    // const newItem = item * 2
    // return newItem // Só vai aparecer no novo array o que estiver dentro do return
//})

console.log(double)

const list = [
    {name: "Theus", vip: true},
    {name: "Gui", vip: true},
    {name: "Juh", vip: true},
    {name: "Toin", vip: false},
    {name: "Val", vip: false},
    {name: "Vini", vip: true},
    {name: "Bia", vip: false},
]

const newList = list.map (user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? "black" : "red"
    }

    return newUser
}) 

console.log(newList)

const students = [
    {name: "Theuz", testGrade: 10},
    {name: "Gui", testGrade: 7},
    {name: "Juh", testGrade: 9},
    {name: "Toin", testGrade: 2},
    {name: "Val", testGrade: 4},
    {name: "Vini", testGrade: 1},
    {name: "Bia", testGrade: 8}
]

const newGrade = students.map (grade => {
    const finalGrade = {
        name: grade.name,
        gradeOfStudents: grade.testGrade >= 5 ? "Aprovado" : "Reprovado"
    }

    return finalGrade
})

console.log(newGrade)



