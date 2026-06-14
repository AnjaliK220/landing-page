// 1. Scroll Effect Navbar Ke Liye
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// 2. Mobile Menu Toggle (Burger Menu) Logic
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// 3. Active Link Change on Click
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", function() {
        // Purane active class ko hatayein
        document.querySelector(".nav-item.active").classList.remove("active");
        // Naye clicked item par active class lagayein
        this.classList.add("active");
        
        // Mobile par click hone ke baad menu automatic close ho jaye
        navLinks.classList.remove("active");
    });
});