/**
 * Dark Mode toggle functionality for PetClinic
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get dark mode toggle element
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check if user previously selected dark mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Set initial state
    if (isDarkMode) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
            updateDarkModeIcon(true);
        }
    }
    
    // Add toggle event listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            const isDark = this.checked;
            
            // Update theme
            document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
            
            // Save preference to localStorage
            localStorage.setItem('darkMode', isDark);
            
            // Update icon
            updateDarkModeIcon(isDark);
        });
    }
    
    // Function to update the dark mode icon
    function updateDarkModeIcon(isDark) {
        const iconElement = document.getElementById('darkModeIcon');
        if (iconElement) {
            iconElement.className = isDark ? 'fa fa-moon-o' : 'fa fa-sun-o';
            iconElement.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
        }
    }
});