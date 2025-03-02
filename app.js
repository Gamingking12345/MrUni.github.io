function showYourSecrets(){
    alert("No New Content");
}

window.addEventListener("hashchange", function() {
    if (window.location.hash === "#aboutpg") {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
});
