let stationaryItems = ['NoteBook', 'Pen', 'Stapler', 'Marker'];
console.log('************************************************************');

// To check for the presence of Pen using includes()
let isPenPresent = stationaryItems.includes('Pen');
console.log('Is Pen Present in the Stationary List-->', isPenPresent);
console.log('************************************************************');

// To check the presence of Marker using indexOf()
let isMarkerPresent = stationaryItems.indexOf('Marker') > -1;
console.log('Is Marker present in the Stationary List --->', isMarkerPresent);
console.log('************************************************************');