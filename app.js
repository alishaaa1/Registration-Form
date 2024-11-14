document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    console.log("Form submitted");

    // Clear previous error messages
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Gather form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById('terms').checked;

    let isValid = true;
    let messages = [];

    // Validate name (required, at least 3 characters)
    if (name.length < 3) {
        isValid = false;
        messages.push("Full Name must be at least 3 characters long.");
    }

    // Validate email format
    if (!validateEmail(email)) {
        isValid = false;
        messages.push("Please enter a valid email address.");
    }

    // Validate password (required, at least 6 characters)
    if (password.length < 6) {
        isValid = false;
        messages.push("Password must be at least 6 characters long.");
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
        messages.push("Phone number must be in the format 123-456-7890.");
    }

    // Validate country selection
    if (country === "") {
        isValid = false;
        messages.push("Please select a country.");
    }

    // Validate gender selection
    if (!gender) {
        isValid = false;
        messages.push("Please select your gender.");
    }

    // Validate terms and conditions checkbox
    if (!terms) {
        isValid = false;
        messages.push("You must agree to the terms and conditions.");
    }

    // Display error messages or success message
    if (!isValid) {
        messages.forEach(msg => {
            const messageElement = document.createElement('p');
            messageElement.textContent = msg;
            errorMessages.appendChild(messageElement);
        });
    } else {
        errorMessages.innerHTML = '';
        alert("Registration successful!");
        // Here you can proceed with form submission, e.g., send data to the server
    }
});

// Helper function to validate email using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
