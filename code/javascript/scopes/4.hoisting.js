// Call global variable before declaration

console.log("globalvar::", globalVar);


// Call block Variable before declaration
console.log("blockVar=", blockVar);

if (true) {
  var blockVar = 10;
}

// Call global variable after declaration
console.log("globalvar::", globalVar);

var globalVar;

