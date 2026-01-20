/*

1. User selects items 
2. User sets quanity
3. System calculate price for the items with quantity
*/

function placeOrder() {
  const orderList = [
    {
      itemName: "iPhone",
      itemQuantity: 2,
    },
    {
      itemName: "TV",
      itemQuantity: 3,
    },
  ];

  const finalPriceVal = calculatePrice(orderList);
  console.log("FinalPrice Val --->", finalPriceVal);
}

function calculatePrice(orderList) {
  let finalPrice = 0;
  const priceList = {
    iPhone: 50000,
    TV: 60000,
  };
  setTimeout(() => {
    finalPrice = orderList.reduce((acc, curItem) => {
      return (acc = acc + priceList[curItem.itemName] * curItem.itemQuantity);
    }, 0);
  }, 2000);

  /*
    50000 * 2 = 100000
    60000* 3 =  180000
    Total     = 280000
    */

  return finalPrice;
}

placeOrder();
