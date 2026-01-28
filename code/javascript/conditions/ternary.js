let buyerName = 'Kumar';
let itemName = 'Pen';  //Pen, Pencil
let message = buyerName + ' did not purchased anything';
/*
if(itemName==='NoteBook'){
    message = buyerName+' has purchased '+itemName;
}
else {
    message= buyerName+' has purchased other than Notebook'
}
*/
message = (itemName === 'NoteBook') ? message = buyerName + ' has purchased ' + itemName : message = buyerName + ' has purchased other than Notebook';
console.log(message);
