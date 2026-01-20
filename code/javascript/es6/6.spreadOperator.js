

// Stationery items in different categories
const writingItems = ["Pen", "Pencil"];
const paperItems = ["Notebook", "Drawing Book"];

const allStationeryItems = [];

for (let i = 0; i < writingItems.length; i++) {
  allStationeryItems.push(writingItems[i]);
}

for (let i = 0; i < paperItems.length; i++) {
  allStationeryItems.push(paperItems[i]);
}

console.log('All stationary Items - Old approach-->', allStationeryItems);



// Combine all stationery items into one array
const allItems = [
  ...writingItems,
  ...paperItems,
];

console.log('All stationary items using Spread operator-->',allItems);


