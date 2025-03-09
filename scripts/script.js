document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Manage active navigation link highlighting
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove "active" class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add "active" class to the clicked link
            this.classList.add("active");
        });
    });

    // Filtering system for certificates
    const filterButtons = document.querySelectorAll(".filters button");
    const certs = document.querySelectorAll(".cert");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            certs.forEach(cert => {
                if (filter === "all" || cert.classList.contains(filter)) {
                    cert.style.display = "block";
                } else {
                    cert.style.display = "none";
                }
            });
        });
    });

    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last update time
    document.getElementById("last-update").textContent = new Date().toLocaleString();
});
