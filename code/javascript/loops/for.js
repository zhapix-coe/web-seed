let itemNames = ['Pen','Pencil','NoteBook'];

// for(initialization, condition, increment/decrement)


for (let index = 0; index < itemNames.length; index++) {
    
    const item = itemNames[index];
    if(index==1) continue;
    console.log('processing the item....',item);        
}

console.log('Total Items==',itemNames.length);

