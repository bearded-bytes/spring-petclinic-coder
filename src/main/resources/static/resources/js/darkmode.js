/**
 * Dark mode toggle functionality for Spring PetClinic
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use the system preference
    const getCurrentTheme = () => {
        const savedTheme = localStorage.getItem('petclinic-theme');
        if (savedTheme) return savedTheme;
        
        // If no saved preference, use system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    
    // Apply theme to document
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('petclinic-theme', theme);
        
        // Update toggle state
        const toggleButton = document.getElementById('theme-toggle');
        const themeIcon = theme === 'dark' ? 'fa-sun-o' : 'fa-moon-o';
        const themeText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        const modeIndicator = theme === 'dark' ? 'Dark' : 'Light';
        const indicatorClass = theme === 'dark' ? 'bg-dark' : 'bg-success';
        
        if (toggleButton) {
            // Update the icon and text
            const iconElement = toggleButton.querySelector('i');
            if (iconElement) {
                iconElement.className = `fa ${themeIcon}`;
            }
            
            const labelElement = document.getElementById('theme-label');
            if (labelElement) {
                labelElement.textContent = themeText;
            }
            
            // Update the mode indicator badge
            const indicatorElement = document.getElementById('current-mode-indicator');
            if (indicatorElement) {
                indicatorElement.textContent = modeIndicator;
                indicatorElement.className = `position-absolute top-0 start-100 translate-middle badge rounded-pill ${indicatorClass}`;
            }
            
            toggleButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
        }
    };
    
    // Toggle theme
    const toggleTheme = () => {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    };
    
    // Initialize
    applyTheme(getCurrentTheme());
    
    // Add event listener to toggle button
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
    }
});