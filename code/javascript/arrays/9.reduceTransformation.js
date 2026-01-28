// Ways of transforming an array to another array or else
console.log('******************************************************************************************');
let stationaryItems = ["NoteBook", "Pen", "Stapler", "Marker"];

// Change the array to a string
let stationaryMessage = stationaryItems.reduce(function (acc, item, index) {
  let delimiterVal =
    index == 0 ? "" : index == stationaryItems.length - 1 ? " and " : ",";
  acc = acc + delimiterVal + item;
  return acc;
}, "The items are ");
console.log("Stationary Item Message-->", stationaryMessage);
console.log('******************************************************************************************');