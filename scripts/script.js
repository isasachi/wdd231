import certificates from "./certificates.js";

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

    const certList = document.querySelector(".cert-list");
    const courseDetails = document.getElementById("course-details");
    const filterButtons = document.querySelectorAll(".filters button");

    // Function to create and insert certificates dynamically
    function renderCertificates() {
        certList.innerHTML = ""; // Clear existing content
        certificates.forEach(cert => {
            const certDiv = document.createElement("div");
            certDiv.classList.add("cert", cert.code.startsWith("CSE") ? "cse" : "wdd");
            certDiv.textContent = cert.code;
            certDiv.addEventListener("click", () => showDetails(cert));
            certList.appendChild(certDiv);
        });
    }

    // Function to display modal with course details
    function showDetails(cert) {
        courseDetails.innerHTML = `
            <div>
                <h2>${cert.name} (${cert.code})</h2>
                <button id="close-modal">X</button>
            </div>    
            <p><strong>Credits:</strong> ${cert.credits}</p>
            <p><strong>Certificate:</strong> ${cert.certificate}</p>
            <p>${cert.decription}</p>
        `;
        courseDetails.showModal();
        document.getElementById("close-modal").addEventListener("click", () => {
            courseDetails.close();
        });
    }

    // Filtering functionality
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            document.querySelectorAll(".cert").forEach(cert => {
                if (filter === "all" || cert.classList.contains(filter)) {
                    cert.style.display = "block";
                } else {
                    cert.style.display = "none";
                }
            });
        });
    });

    renderCertificates(); // Initial rendering of certificates



    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last update time
    document.getElementById("last-update").textContent = new Date().toLocaleString();
});
