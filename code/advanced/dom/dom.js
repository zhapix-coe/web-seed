// Get the form element by its ID
const form = document.getElementById('internForm');

// Get the tbody element inside the table with ID "internTable"
const tableBody = document.querySelector('#internTable tbody');

// Add an event listener to the form when it is submitted
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from refreshing the page

  // Get the values entered in the form fields
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  // Create a new table row element
  const row = document.createElement('tr');

  // Set the inner HTML of the row with table cells and buttons
  row.innerHTML = `
    <td>${name}</td>   <!-- Display name -->
    <td>${phone}</td>  <!-- Display phone number -->
    <td>${email}</td>  <!-- Display email -->
    <td>               <!-- Buttons for edit and delete actions -->
      <button onclick="editRow(this)">Edit</button>
      <button onclick="deleteRow(this)">Delete</button>
    </td>
  `;

  // Add the new row to the end of the table body
  tableBody.appendChild(row);

  // Reset the form input fields to be empty
  form.reset();
});

// Function to edit a row when "Edit" button is clicked
function editRow(button) {
  // Find the row containing the clicked button
  const row = button.closest('tr');

  // Get all the cells in the row
  const cells = row.querySelectorAll('td');

  // Fill form fields with the current row's data for editing
  document.getElementById('name').value = cells[0].textContent;
  document.getElementById('phone').value = cells[1].textContent;
  document.getElementById('email').value = cells[2].textContent;

  // Remove the row from the table so it can be replaced after editing
  row.remove();
}

// Function to delete a row when "Delete" button is clicked
function deleteRow(button) {
  // Find and remove the entire row that contains the clicked button
  button.closest('tr').remove();
}
