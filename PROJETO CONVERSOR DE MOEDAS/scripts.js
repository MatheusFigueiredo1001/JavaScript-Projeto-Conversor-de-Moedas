const button = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const input = document.querySelector("input").value
    const valueConverted = document.getElementById("real") //Valor em real
    const currencyConverted = document.getElementById("dolar") //Outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.65
    const euroToday = 6.15
    const libraToday = 7.36
    const ieneToday = 0.038
    const realToday = 1.00

    const data = fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then (responde => response.json()) // Obtem dados vindo de API (Servidor)

    
    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(input / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(input / libraToday)
    }

    if (currencySelect.value == "iene") {
        currencyConverted.innerHTML = new Intl.NumberFormat("ja-JP",{
            style: "currency",
            currency: "JPY"
        }).format(input / ieneToday)
    }

    if (currencySelect.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(input / realToday)
    }

    valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)


    console.log(convertedValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency")
    const currencyImage = document.querySelector(".dolar-img")

    if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar"
    currencyImage.src = "./assets/Dolar.png"
}

if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/Euro.png"
}

if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/UK.png"
}

if (currencySelect.value == "iene") {
    currencyName.innerHTML = "Iene"
    currencyImage.src = "./assets/japao.png"
}

if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real"
    currencyImage.src = "./assets/Real.png"
}

convertValues()

}

button.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
