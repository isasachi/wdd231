document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});
