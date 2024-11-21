var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase(); // Corrected the variable name

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent;
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});

var sidenav = document.querySelector(".side-navbar");

// Function to show the side navbar
function showNavbar() {
    sidenav.style.left = "0";  // Slide in the side navbar
}

// Function to close the side navbar
function closeNavbar() {
    sidenav.style.left = "-250px";  // Slide the side navbar back out (adjust width as needed)
}
