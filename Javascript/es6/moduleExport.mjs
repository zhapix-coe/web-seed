// Named exports
export const writingItems = ["Pen", "Pencil", "Marker"];
export const paperItems = ["Notebook", "Drawing Book"];
function getAllStationeryItems() {
  return [...writingItems, ...paperItems];
}
export default getAllStationeryItems;