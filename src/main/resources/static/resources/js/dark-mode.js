/**
 * Dark mode toggle functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  const DARK_MODE_KEY = 'petclinic-dark-mode';
  const htmlElement = document.querySelector('html');
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  // Function to update toggle button text based on current theme
  const updateToggleText = (isDarkMode) => {
    const toggleIcon = darkModeToggle.querySelector('i');
    const toggleText = darkModeToggle.querySelector('span');
    
    if (isDarkMode) {
      toggleIcon.className = 'fa fa-sun-o';
      toggleText.textContent = 'Light Mode';
    } else {
      toggleIcon.className = 'fa fa-moon-o';
      toggleText.textContent = 'Dark Mode';
    }
  };

  // Function to apply theme
  const applyTheme = (isDarkMode) => {
    if (isDarkMode) {
      htmlElement.setAttribute('data-bs-theme', 'dark');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'light');
    }
    updateToggleText(isDarkMode);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const currentMode = htmlElement.getAttribute('data-bs-theme');
    const isDarkMode = currentMode !== 'dark';
    
    localStorage.setItem(DARK_MODE_KEY, isDarkMode);
    applyTheme(isDarkMode);
  };

  // Initialize theme based on saved preference or system preference
  const initTheme = () => {
    const savedTheme = localStorage.getItem(DARK_MODE_KEY);
    
    if (savedTheme !== null) {
      applyTheme(savedTheme === 'true');
    } else {
      // Use system preference as default if available
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark);
      localStorage.setItem(DARK_MODE_KEY, prefersDark);
    }
  };

  // Set up event listeners
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
    initTheme();
  }
});