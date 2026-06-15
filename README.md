# Responsive Landing Page

A modern, high-performance, and fully responsive single-page portfolio landing website. This project showcases dynamic UI layouts, smooth transition states, and full cross-device adaptation using vanilla HTML5, CSS3, and JavaScript.

---

## 🚀 Features

* Fully Responsive Layout: Designed from the ground up to scale perfectly across modern smartphones, tablets, laptops, and wide monitors using fluid Media Queries.
* Glassmorphism Sticky Navbar: The navigation bar stays fixed at the top. On scrolling down, JavaScript hooks a styling class that adds a blur backdrop-filter, a solid dark/light hex fill, and a premium accent border.
* Live Theme Switcher (Dark/Light Mode): A toggle feature controlled by JavaScript that dynamically swaps global CSS color variables for a seamless dark-to-light visual inversion.
* Interactive Navigation Logic: Navigation menu markers automatically handle active styling focus states when section triggers are activated. Includes an auto-collapsing burger menu design for smaller viewports.
* Project Grid Display: A showcase layout grid highlighting ongoing development tracks with smooth hover-up lift micro-interactions.

---

## 🛠️ Tech Stack Used

* HTML5: Standard semantic structure utilizing modern containers like sections, nav elements, forms, and custom button nodes.
* CSS3 (Advanced Architecture): Global Root Variable architecture for fluid theme changing, Flexbox & Grid for alignment, transition curves, and media query breakpoints.
* JavaScript (ES6 Core): Dynamic DOM class injection, page scroll offset event telemetry calculation, and theme switching toggles.

---

## 📝 Core Implementation

1. Theme Swap: The application listens for clicks on the theme switcher. It toggles between `.dark-theme` and `.light-theme` states on the main body node, shifting variable values globally.
2. Scroll Event Tracking: Computes viewport window scroll offsets against document ceilings. If the window offset crosses the 50px line threshold, it injects the modern scrolled CSS properties.
3. Scroll Progress: Computes active viewport position heights relative to overall content scroll limits to map out accurate layout percentage indicators.
