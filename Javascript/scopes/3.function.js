let itemName = "NoteBook";
let itemCategory = "Plain";
let itemCount = 10;
const unitPrice = 20;
let totalPrice;

// Function to calcualate price
function calculatePrice(count, price) {
  let calculatedPrice = count * price;
  // console.log("Block Variable (var) - netPrice - Inside Function", netPrice);
  console.log("********************************************************");
  // console.log("Block Variable (let) - discountValue - Inside Function", discountValue);
  console.log("********************************************************");

  // Block inside a function
  if (itemCategory == "Plain") {
    let discountValue = 10;
    var netPrice = calculatedPrice - discountValue;
  }
  return netPrice;
}

// Block to check for NoteBook
if (itemName == "NoteBook") {
  let bindingCost = 10;
  totalPrice = calculatePrice(itemCount, unitPrice) + bindingCost;
}
console.log("Function Variable - calculatedPrice - Outside Function", calculatedPrice);
console.log("********************************************************");
