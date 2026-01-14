
// Object Literal

let formData = {
    userName:'Santhosh Kumar',
    email:'santhosh.k@gmail.com',
    isActive: true,    
    city: 'Pune',
    country: 'India'
}

console.log(' User Name in Form Data--->',formData.userName);
console.log('Email Id in Form Data ---->',formData['email']);


// Looing through Objects for...in

for(let key in formData){
    console.log(`${key}-->${formData[key]}`);
    
}

console.log('Object.keys-->',Object.keys(formData));
console.log('Object.values-->',Object.values(formData));
console.log('Object.entries-->',Object.entries(formData));;
