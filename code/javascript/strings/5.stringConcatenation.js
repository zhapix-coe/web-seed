// To understand about string concatenation
let internName = 'Santhosh';
let programName = 'Internship';

//Using + Operator: 
console.log('***************************************************************************');
console.log('Using + Operator');
let concatenation1 = '' + internName + ' has enrolled in an ' + programName + ' Program';
console.log(concatenation1);
console.log('***************************************************************************');

//Using Template Literal
console.log('***************************************************************************');
console.log('Using Template Literal');
let concatenation2 = `${internName} has enrolled in an ${programName} Program`;
console.log(concatenation2);
console.log('***************************************************************************');

