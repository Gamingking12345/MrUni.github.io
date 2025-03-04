// Function to detect if the user is using Opera GX
function isOperaGX() {
    const userAgent = navigator.userAgent;

    // Log the user agent to the console for debugging
    console.log("User-Agent: " + userAgent);

    // Check if both 'OPR' (Opera) and 'GX' (Opera GX) are present in the user-agent string
    return /OPR/.test(userAgent);
}

// Function to show a popup if the user is not using Opera GX
function showBrowserPopup() {
    if (!isOperaGX()) {
        alert("This website works best with Opera GX. Please switch to Opera GX for the best experience. \n\nYou may close this tab now.");
    }
}

// Run the browser check when the page loads
window.onload = showBrowserPopup;

// Existing function for the "Show New Content" button
function showYourSecrets(){
    alert("No New Content");
}
function no(){
    alert("No");
}

// Event listener to handle hash changes and apply no-scroll class when necessary
window.addEventListener("hashchange", function() {
    if (window.location.hash === "#aboutpg") {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
});
