/**
 * Theme toggle functionality for PetClinic
 * Toggles between light and dark mode
 */
document.addEventListener('DOMContentLoaded', () => {
  // Get theme toggle button 
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('span');
  
  // Function to toggle theme
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update theme attribute
    html.setAttribute('data-bs-theme', newTheme);
    
    // Update icon
    updateThemeIcon(newTheme);
    
    // Save preference to localStorage
    localStorage.setItem('petclinic-theme', newTheme);
  }
  
  // Function to update the icon based on current theme
  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      // Show sun icon in dark mode
      themeIcon.classList.remove('fa-moon-o');
      themeIcon.classList.add('fa-sun-o');
    } else {
      // Show moon icon in light mode
      themeIcon.classList.remove('fa-sun-o');
      themeIcon.classList.add('fa-moon-o');
    }
  }
  
  // Initialize theme from localStorage or default to light
  function initializeTheme() {
    const savedTheme = localStorage.getItem('petclinic-theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }
  
  // Add event listener to toggle button
  themeToggle.addEventListener('click', toggleTheme);
  
  // Initialize theme on page load
  initializeTheme();
});