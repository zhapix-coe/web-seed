// Standard Function
let itemName = "NoteBook";
let itemCount = 10;
const unitPrice = 25;
function calculateTotal(itemCount, unitPrice) {
  let totalPrice = itemCount * unitPrice;
  return totalPrice;
}
let finalPrice = calculateTotal(itemCount, unitPrice);
console.log('The total amount to buy Notebook is -->', finalPrice);

// pen details
let item1Name = "Pen";
let item1Count = 21;
const unit1Price = 15;
let finalPenPrice = calculateTotal(item1Count, unit1Price);
console.log('The total amount to buy Pen is -->', finalPenPrice);

