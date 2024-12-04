/*
    REDUCE
    - Reduz um array para apenas um item
    - Retorna um valor (pode ser um novo array, objeto, string, number, etc)
    - Aceita 4 parâmetros:
        - Acumulador;
        - Valor atual;
        - Index;
        - Array completo;
*/

//const list = [1,2,3,4,5,6,7]

//const sum = list.reduce((accumulator, currentValue) => {
    //console.log(accumulator + "acc")
    //console.log(currentValue + "CV")
    //return accumulator + currentValue
//}, 0)

//console.log(sum)

const companies = [
    {name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", fundation: 1930},
    {name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", fundation: 1975},
    {name: "Intel", marketValue: 117, CEO: "Brian Krzanich", fundation: 1968},
    {name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", fundation: 2004},
    {name: "Spotify", marketValue: 30, CEO: "Daniel Ek", fundation: 2008},
    {name: "Apple", marketValue: 845, CEO: "Tim Cook", fundation: 1976},
]

const marketValue = companies.reduce ((acc, value) => {
    return acc + value.marketValue
}, 0)

console.log(marketValue)

const cart = [
    {productName: "Ameixa", priceKg: 3, quantidadeKg: 0.8},
    {productName: "Morango", priceKg: 9, quantidadeKg: 1.5},
    {productName: "Uvinha", priceKg: 10.50, quantidadeKg: 3},
    {productName: "Maça verde", priceKg: 8.75, quantidadeKg: 3},
    {productName: "Caqui", priceKg: 6, quantidadeKg: 2.2},
    {productName: "Goiabinha", priceKg: 7.50, quantidadeKg: 2.5},
]

const total = cart.reduce ((acc, fruta) => {
    const priceProduct = fruta.priceKg * fruta.quantidadeKg;
    return acc + priceProduct;
}, 0)

console.log(`O valor total da compra foi de R$${total.toFixed(2)}`)