const THEME_KEY = 'preferred-theme';

export const initTheme = () => {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const sunIcon = themeToggle.querySelector('.sun-icon');
  const moonIcon = themeToggle.querySelector('.moon-icon');

  // Get initial theme from localStorage or system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Update theme icons and HTML class
  const updateThemeAppearance = (isDark) => {
    if (isDark) {
      html.classList.add('dark');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      html.classList.remove('dark');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  };

  // Set theme and save preference
  const setTheme = (isDark) => {
    updateThemeAppearance(isDark);
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  };

  // Initialize theme
  const currentTheme = getInitialTheme();
  setTheme(currentTheme === 'dark');

  // Theme toggle event listener
  themeToggle.addEventListener('click', () => {
    const isDark = !html.classList.contains('dark');
    setTheme(isDark);
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      setTheme(e.matches);
    }
  });
};

export default initTheme;