// To Demonstrate the variable declaration using let and const 
// let is block scoped variable
let stationaryItemName = 'NoteBook';
const itemPrice = 20;
console.log('******************************************************');
console.log('Item1 Name = ', stationaryItemName);
console.log('Item1 Price = ', itemPrice);
console.log('******************************************************');
stationaryItemName = 'Pen';
console.log('Item2 Name = ', stationaryItemName);
itemPrice = 10;
console.log('Item1 Price = ', itemPrice);
console.log('******************************************************');

