document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or use system preference as default
  const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
    (localStorage.getItem('darkMode') === null && 
     window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  // Set initial state
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
  
  // Update toggle button state
  updateToggleButton(isDarkMode);
  
  // Toggle button event listener
  document.getElementById('darkModeToggle').addEventListener('click', function() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateToggleButton(isDark);
  });
});

function updateToggleButton(isDarkMode) {
  const toggleIcon = document.getElementById('darkModeIcon');
  if (isDarkMode) {
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
  } else {
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
  }
}