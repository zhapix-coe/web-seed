
// Object Literal

let formData = {
    userName: 'Santhosh Kumar',
    email: 'santhosh.k@gmail.com',
    isActive: true,
    city: 'Pune',
    country: 'India'
}
delete formData.isActive;
console.log('After Deleting isActive-->', formData);
