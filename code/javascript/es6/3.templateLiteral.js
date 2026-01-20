// Template literal is used to concatenate strings and other data types in modern way


let stationaryItemName = 'NoteBook';
const itemPrice = 20;
const itemQuantity = 10;


// Legacy approach
let message1 = 'The '+stationaryItemName+ ' item was purchased with a quantity of '+ itemQuantity + ' at a unit price of Rs.'+itemPrice;
console.log('Message 1 --->',message1);

// Using template literal
let message2 = `The ${stationaryItemName} item was purchased with a quantity of ${itemQuantity} at a unit price of Rs.${itemPrice}`;
console.log('Message 2 --->',message1);
