//Object with functions
let formData = {
  userName: "Santhosh Kumar",
  email: "santhosh.k@gmail.com",
  isActive: false,
  address: {
    city: "Pune",
    country: "India",
  },
  getUserStatus: function () {
    return this.isActive
      ? `${this.userName} is Active`
      : `${this.userName} is not Active`;
  },
};
console.log("User Status -->", formData.getUserStatus());
