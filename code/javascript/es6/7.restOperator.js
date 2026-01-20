//penCount=10, noteBookCount=25,staplerCount=31

function calculate(penCount, ...rest) {
  console.log("Pen Count is --->", penCount);

  let othersCount = 0;
  rest.forEach((curCount) => {
    othersCount = othersCount + curCount;
  });

  // let othersCount = rest.reduce((acc,curCnt)=>acc+=curCnt,0);

  console.log('Others Count is --->',othersCount);
  
}

calculate(10,25,31,10,20,40);
