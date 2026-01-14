let buyerName = 'Kumar';
let itemName='scale';  //Pen, Pencil

let message=buyerName+ ' did not purchased anything';

if(itemName==='NoteBook'){
    message = buyerName+' has purchased Notebook';
}
else if(itemName=='Pen') {
    message= buyerName+' has purchased Pen'
}
else if(itemName=='Pencil'){
    message= buyerName+' has purchased Pencil'
}
else {
   message= buyerName+ ' has purchased something else';
}

console.log(message);
