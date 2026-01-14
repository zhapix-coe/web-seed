// Check the presence of a text in a string

let enrollmentDetails='Santhosh has enrolled in an Internship Program';

// Use includes()
let isEnrolled = enrollmentDetails.includes('enrolled');
console.log(`Is Enrolled? ----> ${isEnrolled}`);

// Use indexOf(), if false then returns -1
let isInternship = (enrollmentDetails.indexOf('Internship')>-1);
console.log(`Is Internship? ----> ${isInternship}`);
