
let enrollmentDetails = 'Santhosh has enrolled in an Internship Program';

// To replace the name in a string using replace()
let newName = 'John';
let changedEnrollment = enrollmentDetails.replace('Santhosh', newName);
console.log('Changed Enrollment Detail -->', changedEnrollment);
console.log('***************************************************************************');

// To replace all the occurances of a text a string
let enrollmentDescription = 'Rajan has enrolled for Internship Program. Both Rajan and Siva have enrolled on same time. However Rajan has completed inernship at right time';
let changedDescription = enrollmentDescription.replaceAll('Rajan', 'Prashanth');
console.log('After Replace All -->', changedDescription);
console.log('***************************************************************************');
