// Declare a global variable that can be used anywhere in the file
let userName = "Abdul";

//  Define a function named greetUser
function greetUser() {

  //  Inside the function: declare a variable (function scope)
  let greeting = "Hello";

  //  Start error handling using try block
  try {
    //  Print a welcome message using global and function variables
    console.log(greeting + ", " + userName); // Output: Hello, John

    //  Try to use a variable that is not defined — this will cause an error
    console.log(nonExistingVariable); // This line throws ReferenceError

  // If any error happens in try block, catch it here
  } catch (error) {
    // Print a friendly error message
    console.log(" Oops! Something went wrong.");

    //  Print the actual error message for debugging
    console.log("Error message:", error.message);
  }

  //  Block scope example using if block
  if (true) {
    // Variable 'mood' is declared with let, so it lives only inside this block
    let mood = "happy";
    console.log("User is", mood); // Output: User is happy
  }

  //  Trying to access 'mood' here would cause an error (uncomment to test)
  // console.log(mood); // ReferenceError: mood is not defined
}

// Call the function to run the code above
greetUser(); // Runs the greetUser function

//remove duplicates from the countryList array without using Set,
//  by using a loop and checking for existence before adding
let countryList = ['France', 'India', 'Japan', 'India'];
let uniqueCountries = [];

for (let i = 0; i < countryList.length; i++) {
  if (!uniqueCountries.includes(countryList[i])) {
    uniqueCountries.push(countryList[i]);
  }
}

console.log(uniqueCountries); // Output: ['France', 'India', 'Japan']

// Sample interns data
const interns = [
  { name: "Aarthi Gopal", phoneNo: "123-456-7890" },
  { name: "Rahul Mehra", phoneNo: "987-654-3210" }
];

const fullName = "Aarthi Gopal";
//output: Phone Numbers: [ '123-456-7890', '987-654-3210' ]

// Function: Get all phone numbers from interns
function getPhoneNumbers(internsList) {
  return internsList.map(i => i.phoneNo); // Extract phone numbers
}
//output: Intern Names: [ 'Aarthi Gopal', 'Rahul Mehra' ]

// Function: Get all intern names
function getInternNames(internsList) {  
  return internsList.map(i => i.name); // Extract names
}

// Function: Return all intern objects as-is
function getAllInterns(internsList) {
  return internsList; // No transformation
}

// Function: Display all results in the console
function displayResults() {
  const phoneNumbers = getPhoneNumbers(interns);  // Get phone numbers
  const names = getInternNames(interns);          // Get names
  const allDetails = getAllInterns(interns);      // Get full objects

  console.log(" Phone Numbers:", phoneNumbers);   // Show phone numbers
  console.log(" Intern Names:", names);           // Show names
  console.table(allDetails);                      // Show full table in console
}

// Execute the display function
displayResults();
/*output:┌─────────┬─────────────────┬───────────────┐
│ (index) │      name       │    phoneNo    │
├─────────┼─────────────────┼───────────────┤
│    0    │ 'Aarthi Gopal'  │ '123-456-7890'│
│    1    │ 'Rahul Mehra'   │ '987-654-3210'│
└─────────┴─────────────────┴───────────────┘*/

// 2 SPLIT — Get first name from full name
function getFirstName(fullName) {
  const parts = fullName.split(" ");  // Split full name → ["Aarthi", "Gopal"]
  return parts[0];                    // Return first part only
}
const firstName = getFirstName(fullName);
console.log("2 First Name (Split):", firstName);
//output:First Name (Split): Aarthi

// 3 SUBSTR — Extract specific word from sentence
function extractModule(courseTitle) {
  return courseTitle.substr(11, 7);   // Extract "Testing" from index 11
}
const moduleName = extractModule("Automation Testing Internship");
console.log("3 Extracted Module (Substr):", moduleName);
//output:Extracted Module (Substr): Testing

// 4 REPLACE — Replace a word in a sentence
function replaceWord(sentence, target, replacement) {
  return sentence.replace(target, replacement);   // Replace word
}
const replacedText = replaceWord("Intern is working on project", "Intern", "Trainee");
console.log("4 Replaced Text:", replacedText);
//output:Replaced Text: Trainee is working on project

// 5 TRIM — Remove spaces from a string
function trimString(rawString) {
  return rawString.trim();        // Remove leading & trailing spaces
}
const cleanedString = trimString("   Aarthi Gopal   ");
console.log("5 Trimmed String:", `"${cleanedString}"`);
//output:Trimmed String: "Aarthi Gopal"

//  Initialize the team with two members
let team = ["Meena", "Raj"]; // Original team

//  push – Add Aryan to the end of the team
team.push("Aryan"); // Adds 'Aryan' at the end of the array
console.log("After Aryan joins (push):", team); 
// Output: [ 'Meena', 'Raj', 'Aryan' ]

//  pop – Remove the last team member (Aryan takes leave)
team.pop(); // Removes last element: 'Aryan'
console.log("Aryan leaves temporarily (pop):", team); 
// Output: [ 'Meena', 'Raj' ]

//  shift – Remove the first member (leader Meena leaves)
team.shift(); // Removes first element: 'Meena'
console.log("Leader leaves (shift):", team); 
// Output: [ 'Raj' ]

// unshift – Add new leader at the beginning
team.unshift("Aisha"); // Adds 'Aisha' at beginning
console.log("New leader joins (unshift):", team); 
// Output: [ 'Aisha', 'Raj' ]

//  push again – Aryan comes back
team.push("Aryan"); // Adds 'Aryan' again
console.log("Aryan returns (push again):", team); 
// Output: [ 'Aisha', 'Raj', 'Aryan' ]

// slice – Get a portion of the array (junior members)
let juniorMembers = team.slice(1, 3); // Slices from index 1 to 2 (not 3)
console.log("Junior members (slice):", juniorMembers); 
// Output: [ 'Raj', 'Aryan' ]

// splice – Replace 'Raj' with Intern1 and Intern2
team.splice(1, 1, "Intern1", "Intern2"); // Remove 1 item at index 1 ('Raj'), insert 2 items
console.log("Splice: Replacing and adding interns:", team); 
// Output: [ 'Aisha', 'Intern1', 'Intern2', 'Aryan' ]

// concat – Combine with backend team
let backendTeam = ["Sam", "Riya"]; // Another team
let allTeam = team.concat(backendTeam); // Merge both teams
console.log("Combined teams (concat):", allTeam); 
// Output: [ 'Aisha', 'Intern1', 'Intern2', 'Aryan', 'Sam', 'Riya' ]

//  indexOf – Find position of Aryan in the full team
let aryanIndex = allTeam.indexOf("Aryan"); // Finds index of 'Aryan'
console.log("Aryan's position (indexOf):", aryanIndex); 
// Output: 3

//  forEach – Greet each team member
console.log("Greetings (forEach):");
allTeam.forEach(member => {
  console.log("Hello, " + member + "!");
});
// Output:
// Hello, Aisha!
// Hello, Intern1!
// Hello, Intern2!
// Hello, Aryan!
// Hello, Sam!
// Hello, Riya!

//  map – Create email IDs from names
let emails = allTeam.map(member => member.toLowerCase() + "@techverse.com"); 
// Converts names to lowercase and adds email domain
console.log("Emails (map):", emails); 
// Output:
// [
//   'aisha@techverse.com',
//   'intern1@techverse.com',
//   'intern2@techverse.com',
//   'aryan@techverse.com',
//   'sam@techverse.com',
//   'riya@techverse.com'
// ]

//  filter – Get only interns from the team
let internList = allTeam.filter(member => member.includes("Intern")); 
// Filters members who have "Intern" in their name
console.log("Interns only (filter):", internList); 
// Output: [ 'Intern1', 'Intern2' ]

//  find – Get the first intern in the list
let firstIntern = allTeam.find(member => member.includes("Intern")); 
// Returns first match for condition
console.log("First intern found (find):", firstIntern); 
// Output: Intern1

//  findIndex – Find position of first intern
let firstInternIndex = allTeam.findIndex(member => member.includes("Intern")); 
// Returns index of first match
console.log("Index of first intern (findIndex):", firstInternIndex); 
// Output: 1

//  every – Check if all elements are valid strings
let areAllStrings = allTeam.every(member => typeof member === "string"); 
// Checks if every element is a string
console.log("Are all members strings? (every):", areAllStrings); 
// Output: true

//js function with below two arrays as parameter values
function mergeAndSortUnique(arr1, arr2) {
  // Step 1: Combine the arrays
  var combined = arr1.concat(arr2);

  // Step 2: Create an empty array to store unique values
  var unique = [];

  // Step 3: Loop through combined array and add only unique values
  for (var i = 0; i < combined.length; i++) {
    if (unique.indexOf(combined[i]) === -1) {
      unique.push(combined[i]);
    }
  }

  // Step 4: Sort the unique array in ascending order
  for (var i = 0; i < unique.length - 1; i++) {
    for (var j = i + 1; j < unique.length; j++) {
      if (unique[i] > unique[j]) {
        var temp = unique[i];
        unique[i] = unique[j];
        unique[j] = temp;
      }
    }
  }

  return unique;
}

// Example usage:
var arr1 = [2, 3, 5];
var arr2 = [2, 4, 1, 5, 6, 4];
var result = mergeAndSortUnique(arr1, arr2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]
