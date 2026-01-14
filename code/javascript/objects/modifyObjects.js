
// Object Literal

let formData = {
    userName:'Santhosh Kumar',
    email:'santhosh.k@gmail.com',
    isActive: true,    
    city: 'Pune',
    country: 'India'
}

// console.log('Form Data--->',formData);

formData.userName = 'Santhosh';

console.log('Modified UserName-->',formData.userName);

formData['email']= 'santhosh@gmail.com';

console.log('Modified Email---->', formData.email);

delete formData.isActive;

console.log('Modified Object-->',formData);
