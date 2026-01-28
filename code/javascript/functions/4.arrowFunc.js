// Arrow Function

let itemName = "NoteBook";
let itemCount = 10;
const unitPrice = 25;
const calculateTotal = (itemCount, unitPrice) => {
  let totalPrice = itemCount * unitPrice;
  return totalPrice;
}
let finalPrice = calculateTotal(itemCount, unitPrice);
console.log('The total amount to buy Notebook is -->', finalPrice);

// Single Line
const calculateTotal1 = (itemCount, unitPrice) => (itemCount * unitPrice);
let finalPrice1 = calculateTotal1(itemCount, unitPrice);
console.log('The total amount to buy Notebook Updated -->', finalPrice1);
