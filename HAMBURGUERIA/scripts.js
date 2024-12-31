const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterVegan = document.querySelector('.filter-vegan')

function formatCurrent(value) { //Formatar para moeda
    return value.toLocaleString('pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        });
}

function showAll(productsArray) {
    let myLi = '' //Resetar a contagem antes de alterar algum dado

    productsArray.forEach(products => {
        myLi +=
            `
        <li>
                <img src=${products.src}>
                <p> ${products.name} </p>
                <p class="item-price"> ${formatCurrent(products.price)} </p>
            </li>
        `

        list.innerHTML = myLi
    });

}

function mapAll() {
    const newPrice = menuOptions.map(discount => ({
        ...discount,
        price: discount.price * 0.9,
    }))

    showAll(newPrice)
}

function sumAll() {
    const totalPrice = menuOptions.reduce((acc, current) => acc + current.price, 0)
    list.innerHTML =
        `
        <li>
            <p> O valor total da compra é de ${formatCurrent(totalPrice)} </p>
        </li>
        `
}

function filterVegan() {
    const itemVegan = menuOptions.filter((item) => item.vegan)//Por padrão o valor já vem como true
    showAll(filterVegan)
    showAll(itemVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions)) //menuOptions é chamado nesta função para poder retornar dados ao clicar no botão, necessário uma arrow function pois caso deixe apenas com parenteses, o site mostra as informações direto na tela, sem precisar clicar no botão
buttonMapAll.addEventListener('click', mapAll)
buttonSumAll.addEventListener('click', sumAll)
buttonFilterVegan.addEventListener('click', filterVegan)

