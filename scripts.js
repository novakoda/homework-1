function updateHeaderWithDate() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const day = days[today.getDay()];
    const date = today.toLocaleDateString(); // Format: MM/DD/YYYY

    // Update the p element with the current day and date
    document.getElementById('header-date').innerText = `${day}, ${date}`;
}

// Function to validate the email format
function validateForm() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

// Call the function once the page is loaded
window.onload = updateHeaderWithDate;
