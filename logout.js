function logout() {
    // Step 1: Clear local storage/session storage
    localStorage.removeItem("authToken"); // Assuming auth token is stored in localStorage
    sessionStorage.clear(); // Clears all session storage items if you're using it

    // Step 2: Optional - Notify backend to invalidate session (if required)
    fetch('/logout', {
        method: 'POST',
        credentials: 'include', // Include cookies if necessary
    })
    .then(response => {
        if (response.ok) {
            console.log("Logout successful on the server.");
        }
    })
    .catch(error => console.error("Error logging out on the server:", error));
  


    // Step 3: Redirect to login page or home page
    window.location.href = "/IWT_ODISHA/login.html"; // Redirect user to the login page
    alert("You have been logged out. Please log in again for access.");
}

// Add this to your logout button in HTML
document.getElementById("logoutButton").addEventListener("click", logout);