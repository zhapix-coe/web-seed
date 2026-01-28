// Ways of transforming an array to another array or else
console.log('******************************************************************************************');
let stationaryItems = ["NoteBook", "Pen", "Stapler", "Marker"];

// Filter the stationary items not containing Pen
let filteredStationaryItems = stationaryItems.filter((item) => item !== "Pen");
console.log("FilteredStationary items without Pen-->", filteredStationaryItems);
console.log('******************************************************************************************');