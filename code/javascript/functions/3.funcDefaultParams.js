// Function with Default Parameter Values
let itemName = "NoteBook";
let itemCount;
const unitPrice = 25;
const calculateTotal = function (itemCount = 10, unitPrice = 30) {
  let totalPrice = itemCount * unitPrice;
  return totalPrice;
}
// let finalPrice1 = calculateTotal(itemCount,unitPrice);
// console.log('Final Price with param values -->',finalPrice1);
// let finalPrice2 = calculateTotal(itemCount);
// console.log('Final Price with item Count only -->',finalPrice2);
let finalPrice3 = calculateTotal(itemCount);
console.log('Final Price with itemCount=undefined -->', finalPrice3);



