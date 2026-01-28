// Logical Operator
let isApplePresent = true;
let isBananaPresent = true;

// Logical 'and' operator
let isBothPresent = isApplePresent && isBananaPresent;
// console.log('Is both Apple and Banana present? --->',isBothPresent);
console.log('---------------------------------------------------------');

// Logical 'Or' Operator
let isAnyonePresent = isApplePresent || isBananaPresent;
// console.log('Is anyone present? -->',isAnyonePresent);
console.log('---------------------------------------------------------');

// Example program
if (isBothPresent)
    console.log('You have purchased both Apple and Banana');
else if (isAnyonePresent)
    console.log('You have purchased at least one item !');
else
    console.log('You did not purcase anything');
console.log('---------------------------------------------------------');






