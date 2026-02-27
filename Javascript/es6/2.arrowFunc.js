// To demonstrate Arrow function
let stationaryItemName = 'NoteBook';
const itemPrice = 20;
const itemQuantity = 10;
console.log('******************************************************');

// Using Standard function
function calculatePrice(unitPrice, quantity) {
    let totalValue = unitPrice * quantity;
    return totalValue;
}
let finalPrice1 = calculatePrice(itemPrice, itemQuantity);
console.log('Final Price 1 using standard function-->', finalPrice1);
console.log('******************************************************');

// Using Arrow function
const calculatePrice1 = (unitPrice, quantity) => {
    let totalValue = unitPrice * quantity;
    return totalValue;
}
let finalPrice2 = calculatePrice1(itemPrice, itemQuantity);
console.log('Final Price 2 using Arrow function-->', finalPrice1);
console.log('******************************************************');