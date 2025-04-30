// --- Menu Toggle Logic ---
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

// Add event listener to close menu when a mobile link is clicked
const mobileLinks = document.querySelectorAll('#mobileMenu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('mobileMenu');
        // Check if the menu is currently shown before trying to remove the class
        if (menu.classList.contains('show')) {
           menu.classList.remove('show');
        }
    });
});

// No more contact form AJAX needed
