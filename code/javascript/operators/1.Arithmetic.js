// Arithmetic Operators - Addition (+), Subtraction (-), Multiplication (*), Division (/)

let notebookCount = 5;
let penCount = 20;
let pencilCount = 30;
let discountPercent = 10;
let discountPrice = 0;

console.log('---------------------------------------------------------');

// Addition
let totalCount = notebookCount + penCount + pencilCount;
console.log("Total Count = ", totalCount);
console.log('---------------------------------------------------------');

// Multiplication
let totalPrice = totalCount * 15;
console.log("Total Price = ", totalPrice);
console.log('---------------------------------------------------------');

// Division
discountPrice = (totalPrice * discountPercent) / 100;
console.log("Dicounted price-->",discountPrice);
console.log('---------------------------------------------------------');

// Subtraction
let finalPrice = totalPrice - discountPrice;
console.log("Price after discount-->", finalPrice);
console.log('---------------------------------------------------------');
