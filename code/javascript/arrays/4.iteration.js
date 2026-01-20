// Ways of iterating an array
let stationaryItems = ['NoteBook','Pen', 'Stapler','Marker'];
console.log('************************************************************');

// Using standard for loop
for(let index=0;index<stationaryItems.length;index++){
    console.log('Item Name:',stationaryItems[index]);    
}
console.log('************************************************************');


// Using Array function forEach()
stationaryItems.forEach(function(item){
    console.log('Current Item:',item);    
})

console.log('************************************************************');
