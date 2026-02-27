// Function Assignment  
let itemName = "NoteBook";
let itemCount = 10;
const unitPrice = 25;
const calculateTotal = function (itemCount, unitPrice) {
  let totalPrice = itemCount * unitPrice;
  return totalPrice;
}
let finalPrice = calculateTotal(itemCount, unitPrice);
console.log('The total amount to buy Notebook is -->', finalPrice);

