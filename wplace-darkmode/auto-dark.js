// Auto Dark Theme for WPlace
(function() {
  function setDarkTheme() {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Sync with browser theme
  function syncWithBrowserTheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      setDarkTheme();
    } else {
      localStorage.setItem('theme', 'custom-winter');
      document.documentElement.setAttribute('data-theme', 'custom-winter');
    }
  }

  syncWithBrowserTheme();

  // Listen for browser theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncWithBrowserTheme);

  // Reload if theme changed
  if (document.documentElement.getAttribute('data-theme') !== localStorage.getItem('theme')) {
    location.reload();
  }
})();
