/**
 * Dark mode functionality for PetClinic
 */
document.addEventListener('DOMContentLoaded', function() {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const toggleIcon = document.getElementById('toggleIcon');
  const toggleText = document.getElementById('toggleText');
  
  // Check for saved theme preference or respect OS preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply the right theme based on saved preference or OS preference
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
  
  // Toggle theme when clicking the theme toggle
  themeToggle.addEventListener('click', function() {
    if (root.classList.contains('dark-mode')) {
      enableLightMode();
    } else {
      enableDarkMode();
    }
  });
  
  // Functions to handle enabling/disabling dark mode
  function enableDarkMode() {
    root.classList.add('dark-mode');
    themeToggle.classList.add('dark');
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
    toggleText.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'dark');
  }
  
  function enableLightMode() {
    root.classList.remove('dark-mode');
    themeToggle.classList.remove('dark');
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
    toggleText.textContent = 'Light Mode';
    localStorage.setItem('theme', 'light');
  }
});