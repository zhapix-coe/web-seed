let buyerName = "Kumar";
let itemName = "NoteBook"; //Pen, Pencil

let message = buyerName + " did not purchased anything";


switch (itemName) {
  case "NoteBook":
    message = buyerName + " has purchased Notebook";
    break;
  case "Pen":
    message = buyerName + " has purchased Pen";

    break;
  case "Pencil":
    message = buyerName + " has purchased Pencil";
    break;

  default:
    message = buyerName + " has purchased something else";
    break;
}

console.log(message);

