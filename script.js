var sidenav = document.querySelector(".side-navbar");

// Function to show the side navbar
function showNavbar() {
    sidenav.style.left = "0";  // Slide in the side navbar
}

// Function to close the side navbar
function closeNavbar() {
    sidenav.style.left = "-250px";  // Slide the side navbar back out (adjust width as needed)
}
