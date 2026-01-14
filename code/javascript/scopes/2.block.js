let itemName = "NoteBook";
let itemCategory = "Plain";
let itemCount = 10;
const unitPrice = 20;
let totalPrice;

// Function to calcualate price
function calculatePrice(count, price) {
  let calculatedPrice = count * price;
  return calculatedPrice;
}

// Block to check for NoteBook
if (itemName == "NoteBook") {  
  let bindingCost=10;
  console.log('Block Variable - bindingCost - Inside block',bindingCost);
  console.log('********************************************************');
  totalPrice = calculatePrice(itemCount, unitPrice)+bindingCost;
}

console.log('Block Variable - bindingCost - Outside Block',bindingCost);
console.log('********************************************************');
