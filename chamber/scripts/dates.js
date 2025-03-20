document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last update time
    document.getElementById("last-update").textContent = new Date().toLocaleString();
});
