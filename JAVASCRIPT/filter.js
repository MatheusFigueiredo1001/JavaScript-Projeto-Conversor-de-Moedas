/*
    FILTER
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array apenas com os elementos filtrados
    - Aceita 3 parâmetros:
        - Item do array;
        - Index;
        - Array completo;

        return true -> Item atual passa para o novo array;
        return false -> Item atual não passa para o novo array;
*/

const list = [254, 326, 51, 2, 13, 1265, 22, 355, 171, 536, 78, 99, 101, 196, 201]

    const newList = list.filter(number => {
        if (number > 150 || number % 2 === 0) {
            return true
        } else {
            return false
        }
    })

console.log(newList)

const companies = [
    {name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", fundation: 1930},
    {name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", fundation: 1975},
    {name: "Intel", marketValue: 117, CEO: "Brian Krzanich", fundation: 1968},
    {name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", fundation: 2004},
    {name: "Spotify", marketValue: 30, CEO: "Daniel Ek", fundation: 2008},
    {name: "Apple", marketValue: 845, CEO: "Tim Cook", fundation: 1976},
]

const newCompanies = companies.filter (company => {
    if (company.marketValue < 200 && company.fundation > 1990) {
        return true
    } else {
        return false
    }
})

console.log (newCompanies)