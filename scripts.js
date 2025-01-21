const convertButton = document.querySelector('.convert-button') //Buscando a classe do botão
const selectCurrency = document.querySelector('.select-currency') //Seleciona qual moeda vai ser convertida

async function convertValues() {
    const inputValue = parseFloat (document.querySelector('.input-value').value) // Pega o valor do input
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') //Valor em real
    const currencyValue = document.querySelector('.currency-value') //Outras moedas

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
    console.log(data)

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitToday = data.BTCBRL.high

    if (selectCurrency.value == 'dolar') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format((inputValue / dolarToday).toFixed(2)) //Select em dolar
    }

    if (selectCurrency.value == 'euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format((inputValue / euroToday).toFixed(2)) //Select em euro
    }

    if (selectCurrency.value == 'bitcoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format((inputValue / bitToday).toFixed(2)) //Select em bitcoin
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue) //Coloca o valor digitado no input na parte web, ficando visualmente mais bonito

    console.log(`Valor convertido: ${currencyValue.innerHTML}`)
}

function changeCurrency() {
    const currencyChange = document.querySelector('.currency-change')
    const currencyImg = document.querySelector('.currency-img')

    if (selectCurrency.value == 'dolar') {
        currencyChange.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/dolar.png'
    }

    if (selectCurrency.value == 'euro') {
        currencyChange.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }

    if (selectCurrency.value == 'bitcoin') {
        currencyChange.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }

}

convertButton.addEventListener('click', convertValues) // Faz o botão funcionar
selectCurrency.addEventListener('change', changeCurrency) // Muda a moeda selecionada para converter