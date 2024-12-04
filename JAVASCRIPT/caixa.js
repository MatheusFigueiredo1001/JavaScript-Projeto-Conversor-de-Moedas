/*
const products = [
    { item: "Mouse", price: "20", quantity: "100" },
    { item: "Teclado", price: "20", quantity: "100" },
    { item: "Monitor", price: "35", quantity: "100" },
    { item: "Headphone", price: "50", quantity: "100" },
    { item: "Joystick", price: "60", quantity: "100" },
    { item: "Mousepad", price: "5", quantity: "100" },
    { item: "Cadeira", price: "300", quantity: "100" },
    { item: "Base", price: "10", quantity: "100" },
    { item: "Mesa", price: "250", quantity: "100" },
]
*/

const cart = [20, 35, 50, 60, 5, 300, 10, 250]
let finalPrice = 0
let finalDiscount = 0

//300 * 10 = 3000 / 100 = 30

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach((value) => {
    finalPrice += value
    if (value >= 40) {
        const discount = calculateDiscount(value, 10)
        finalDiscount += value - discount

    } else {
        finalDiscount += value
    }
});

valueDiscount = finalPrice - finalDiscount

console.log(`O valor total da compra foi de R$${finalPrice.toFixed(2)}, 
            porém com desconto fica R$${finalDiscount.toFixed(2)}, 
            no total teve o desconto de R$${valueDiscount.toFixed(2)}`)