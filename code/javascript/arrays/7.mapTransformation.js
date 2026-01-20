// Ways of transforming an array to another array or else
console.log('******************************************************************************************');

let stationaryItems = ["NoteBook", "Pen", "Stapler", "Marker"];

// Transform to another array in collection format
let updatedStationaryItems = stationaryItems.map((item) => `${item} Box`);
console.log("Updated Stationary Item List -->", updatedStationaryItems);
console.log('******************************************************************************************');
