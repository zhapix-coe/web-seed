// To split a string to an array
let techStack = 'Javascript,HTML,CSS,NodeJS,ReactJS,ExpressJS,MongoDB';
let techStackList = techStack.split(',');
let typeVal = Array.isArray(techStackList) ? 'Array' : 'Not an Array';
console.log('Type of techStackList is-->', typeVal);
for (let index = 0; index < techStackList.length; index++) {
    console.log(`techStackList[${index}]= ${techStackList[index]} `);
}

