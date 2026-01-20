// Mofification of an existing array
let stationaryItems = ['NoteBook','Pen', 'Stapler','Marker'];
console.log('Initial Items are --->',stationaryItems);
console.log('*******************************************************************************************************');

// Remove first item in an array using Array.shift()
stationaryItems.shift();
console.log('Removed First Item=Notebook from StationaryItems-->',stationaryItems);
console.log('*******************************************************************************************************');

// Remove Last item from 
stationaryItems.pop();
console.log('Removed Last Item=Pencil from Stationary Items --->',stationaryItems);
console.log('*******************************************************************************************************');


// Remove all items
stationaryItems = [];
console.log('Size of Stationary items after removal -->',stationaryItems.length);
