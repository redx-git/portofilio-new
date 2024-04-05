    // Get the navbar element
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    
    // Add the sticky class when the user scrolls to the specified position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
    
    // Execute myFunction when the user scrolls
    window.onscroll = function() {
        myFunction();
    };
    