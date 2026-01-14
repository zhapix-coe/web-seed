let itemNames = ['Pen','Pencil','NoteBook'];

// for(initialization, condition, increment/decrement)


// for (let index = 0; index < itemNames.length; index++) {
    
//     const item = itemNames[index];
//     console.log('processing the item....',item);        
// }

let index=0;
let item ='';
while (index < itemNames.length) {
    item = itemNames[index];    
    console.log('processing the item....',item);        
    index++;    
}

console.log('Total Items==',itemNames.length);

