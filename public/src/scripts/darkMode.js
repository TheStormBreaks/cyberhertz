// Dark mode functionality
function setupDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('darkModeToggle');

  if (!darkModeToggle) {
    console.error('Dark mode toggle button not found');
    return;
  }

  // Check for saved user preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    updateToggleIcon(true);
  }

  // Toggle dark mode
  darkModeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateToggleIcon(isDarkMode);
  });

  // Update the toggle icon based on current mode
  function updateToggleIcon(isDarkMode) {
    if (isDarkMode) {
      darkModeToggle.innerHTML = '☀️'; // Sun for light mode option
    } else {
      darkModeToggle.innerHTML = '🌙'; // Moon for dark mode option
    }
  }
}



// Initialize dark mode when the DOM is loaded
document.addEventListener('DOMContentLoaded', setupDarkMode);
