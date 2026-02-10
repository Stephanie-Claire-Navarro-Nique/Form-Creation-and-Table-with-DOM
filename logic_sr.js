let form = document.getElementById("userForm");
let error = document.getElementById("error");
let tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function (event) {
    event.preventDefault();

let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let age = document.getElementById("age").value;
let gender = document.getElementById("gender").value;

// Validation
if (fname === "" || lname === "" || age === "" || gender === "") {
    error.innerHTML = "All fields are required!";
    return;
}

if (age <= 0) {
    error.innerHTML = "Age must be greater than 0!";
    return;
}

// Clear error
error.innerHTML = "";

// Add to table
tableBody.innerHTML += `
    <tr>
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${age}</td>
        <td>${gender}</td>
    </tr>
`;

// Reset form
form.reset();
    });