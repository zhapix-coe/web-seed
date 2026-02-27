// To demonstrate destructuring of an array and object
console.log('******************************************************');
// To destructuring an array
let stationaryItems = ['NoteBook', 'Pen', 'Stapler', 'Marker'];

// Index Based access
let noteBookItem = stationaryItems[0];
let penItem = stationaryItems[1];
console.log('NoteBookItem-->', noteBookItem);
console.log('PenItem--->', penItem);
console.log('******************************************************');

let [notebook, pen, stap] = stationaryItems;
console.log('NoteBookItem based on destructuring-->', notebook);
console.log('PenItem based on destructuring--->', pen);
console.log('Stapler item is --->', stap);
console.log('******************************************************');

