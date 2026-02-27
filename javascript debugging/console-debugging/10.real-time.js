// Fetch users from JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        console.log("Users Data:");
        
        // Display selected fields in table format
        console.table(
            users.map(user => ({
                ID: user.id,
                Name: user.name,
                Email: user.email,
                City: user.address.city,
                Company: user.company.name
            }))
        );
    })
    .catch(error => {
        console.error("Error fetching users:", error);
    });