let purchaseOrderList = [10, 30, 5, 2, 50];
console.log(
  "******************************************************************************************",
);

// Sorting in ascending order
let ascSortFunction = (a, b) => (a === b ? 0 : a > b ? 1 : -1);
let ascSortedValues = purchaseOrderList.sort(ascSortFunction);
console.log("Ascending purchaseOrderList--->", ascSortedValues);
console.log(
  "******************************************************************************************",
);

// Descending Sorting in ascending order
let dscSortFunction = (a, b) => (a === b ? 0 : a < b ? 1 : -1);
let dscSortedValues = purchaseOrderList.sort(dscSortFunction);
console.log("Descending purchaseOrderList--->", dscSortedValues);
console.log(
  "******************************************************************************************",
);
