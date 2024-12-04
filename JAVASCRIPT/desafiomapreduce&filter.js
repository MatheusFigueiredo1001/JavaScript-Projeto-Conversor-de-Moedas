// Adicionar 10% de valor de mercado a todas as companhias;
// Filtrar companhias fundadas abaixo de 1990;
// Somar o valor de mercado das restantes;

const companies = [
    { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", fundation: 1930 },
    { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", fundation: 1975 },
    { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", fundation: 1968 },
    { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", fundation: 2004 },
    { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", fundation: 2008 },
    { name: "Apple", marketValue: 845, CEO: "Tim Cook", fundation: 1976 },
]

const marketValueOldCompanies = companies.map(company => {
    company.marketValue = company.marketValue + (company.marketValue / 10)
    return company
}).filter(company => company.fundation < 1990).reduce((acc, company) => acc + company.marketValue, 0)

console.log(marketValueOldCompanies)

const sub10Percent = company => {
    company.marketValue = company.marketValue - (company.marketValue / 10)
    return company
}

const filterCompanies = company => company.fundation > 1980

const sumMarketValue = (acc, company) => acc + company.marketValue

const marketValueNewCompanies = companies
.map(sub10Percent)
.filter(filterCompanies)
.reduce(sumMarketValue, 0)

console.log(marketValueNewCompanies)

