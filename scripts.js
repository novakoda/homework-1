function updateHeaderWithDate() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const day = days[today.getDay()];
    const date = today.toLocaleDateString(); // Format: MM/DD/YYYY

    // Update the p element with the current day and date
    document.getElementById('header-date').innerText = `${day}, ${date}`;
}

// Call the function once the page is loaded
window.onload = updateHeaderWithDate;
