// Dark mode toggle functionality for Spring PetClinic

document.addEventListener('DOMContentLoaded', function() {
  // Check for saved dark mode preference
  const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
  
  // Apply dark mode if it was previously enabled
  if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-toggle').checked = true;
  }
  
  // Set up event listener for dark mode toggle
  document.getElementById('dark-mode-toggle').addEventListener('change', function(event) {
    if (event.target.checked) {
      // Enable dark mode
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      // Disable dark mode
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});