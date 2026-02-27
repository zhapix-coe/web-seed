// To find index of a character/string in a string
let enrollmentDetails = 'Santhosh has enrolled in an Internship Program';

// To find the position of First and Last character in a String
let indexOfFirstLetter = enrollmentDetails.indexOf('S');
let indexOfLastCharacter = enrollmentDetails.indexOf('m');
console.log('***************************************************************************');
console.log(`First Index of the String---> ${indexOfFirstLetter}`);
console.log(`Last Index of the string ----> ${indexOfLastCharacter}`);
console.log('***************************************************************************');

let lastOccuranceOfLetter = enrollmentDetails.lastIndexOf('a');
console.log(`Last Occurance of Letter 'a'--> ${lastOccuranceOfLetter}`);
console.log('***************************************************************************');