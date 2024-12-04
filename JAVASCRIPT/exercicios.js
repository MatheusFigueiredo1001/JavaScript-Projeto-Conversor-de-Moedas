/*
    Carrinho de compras online
*/

const cart = [33, 46, 154, 90, 76, 11, 17, 180, 254]
let = finalPrice = 0

function priceDiscount(price, discount){
    const result = (price * discount) / 100
    return result
}

cart.forEach((value) => {
    if (value >= 50) {
        const discount = priceDiscount(value, 15)
        finalValue += value - discount
    } else {
        finalValue += discount
    }
});