// Global Scope
let itemName = "NoteBook";
let itemCategory = "Plain";
let itemCount = 10;
let totalPrice;
const unitPrice = 20;

// Function to calcualate price
function calculatePrice(count, price) {
  let calculatedPrice = count * price;
  console.log("Global Variable - itemCount - Inside function ...", itemCount);
  console.log('********************************************************');
  return calculatedPrice;
}

// Block to check for NoteBook
if (itemName == "NoteBook") {  
  console.log("Global Variable - itemCount - Inside block..", itemCount);
  console.log('********************************************************');
  totalPrice = calculatePrice(itemCount, unitPrice);
}

console.log("Global Variable - totalPrice", totalPrice);
console.log('********************************************************');