let stationaryItem = {
    name: 'NoteBook',
    quantity: 10
}
console.log('******************************************************');

// Standard approach
let itemName = stationaryItem.name;
let itemQuantity = stationaryItem.quantity;
console.log(`ItemName=${itemName} and ItemQuantity=${itemQuantity}`);
console.log('******************************************************');

let { name, quantity } = stationaryItem;
console.log(`ItemName=${name} and ItemQuantity=${quantity}`);
console.log('******************************************************');