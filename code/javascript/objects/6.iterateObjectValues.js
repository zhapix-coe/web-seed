// Object Literal
let formData = {
    userName: 'Santhosh Kumar',
    email: 'santhosh.k@gmail.com',
    isActive: true,
    city: 'Pune',
    country: 'India'
}
// Looing through Objects for...in
for (let key in formData) {
    console.log(`${key}-->${formData[key]}`);
}
