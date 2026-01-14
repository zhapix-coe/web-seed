// Object Literal

let formData = {
  userName: "Santhosh Kumar",
  email: "santhosh.k@gmail.com",
  isActive: true,
  city: "Pune",
  country: "India",
};

console.log("Form Data--->", formData);

// Using new Object
let form1Data = new Object();
form1Data.userName = "Rajesh Kumar";
form1Data.email = "rajesh.k@gmail.com";
form1Data.isActive = true;
form1Data.city = "Chennai";
form1Data.country = "India";

console.log("Form1 Data--->", form1Data);

// Nested Object
let form2Data = {
  userName: "Santhosh Kumar",
  email: "santhosh.k@gmail.com",
  isActive: true,
  address: {
    city: "Pune",
    country: "India",
  },
};

//Object with functions
let form3Data = {
  userName: "Santhosh Kumar",
  email: "santhosh.k@gmail.com",
  isActive: true,
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

console.log("User Status -->", form3Data.getUserStatus());
