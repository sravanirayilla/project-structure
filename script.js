// JavaScript for handling the dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    // Get all the dropdown menu items
    const dropdowns = document.querySelectorAll("nav ul li.dropdown");

    // Loop through each dropdown item and add hover event
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function() {
            const dropdownMenu = dropdown.querySelector(".dropdown-menu");
            if (dropdownMenu) {
                dropdownMenu.style.display = "block"; // Show the dropdown
            }
        });

        dropdown.addEventListener("mouseout", function() {
            const dropdownMenu = dropdown.querySelector(".dropdown-menu");
            if (dropdownMenu) {
                dropdownMenu.style.display = "none"; // Hide the dropdown
            }
        });
    });

    // Optional: Smooth scrolling for anchor links (e.g., from the menu)
    const links = document.querySelectorAll("nav ul li a, .service-item a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,  // Adjust to prevent overlap with fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });

    // Add active class to the clicked menu item (for better user experience)
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath || link.getAttribute("href") === "/" + currentPath.split("/").pop()) {
            link.classList.add("active");
        }
    });
});

// To show dropdown on mobile (optional)
const toggleButton = document.querySelector('.nav-toggle');
if (toggleButton) {
    toggleButton.addEventListener('click', function() {
        const navMenu = document.querySelector('nav ul');
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
    });
}
