const convertButton = document.querySelector('.convert-button') //Buscando a classe do botão
const selectCurrency = document.querySelector('.select-currency') //Seleciona qual moeda vai ser convertida

function convertValues() {
    const inputValue = document.querySelector('.input-value').value // Pega o valor do input
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') //Valor em real
    const currencyValue = document.querySelector('.currency-value') //Outras moedas

    const dolarToday = 6.07
    const euroToday = 6.35
    const libraToday = 7.68
    const ieneToday = 0.040

    if (selectCurrency.value == 'dolar') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue / dolarToday) //Select em dolar
    }

    if (selectCurrency.value == 'euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue / euroToday) //Select em euro
    }

    if (selectCurrency.value == 'libra') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue / libraToday) //Select em libra
    }

    if (selectCurrency.value == 'iene') {
        currencyValue.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(inputValue / ieneToday) //Select em iene
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue) //Coloca o valor digitado no input na parte web, ficando visualmente mais bonito

    console.log(convertedValue)
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

    if (selectCurrency.value == 'libra') {
        currencyChange.innerHTML = 'Libra esterlina'
        currencyImg.src = './assets/libra.png'
    }

    if (selectCurrency.value == 'iene') {
        currencyChange.innerHTML = 'Iene'
        currencyImg.src = './assets/iene.png'
    }

}

convertButton.addEventListener('click', convertValues) // Faz o botão funcionar
selectCurrency.addEventListener('change', changeCurrency) // Muda a moeda selecionada para converter