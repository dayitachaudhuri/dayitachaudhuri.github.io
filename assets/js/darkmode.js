function initDarkMode() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    function getSystemPreference() {
        return window.matchMedia &&
               window.matchMedia('(prefers-color-scheme: dark)').matches
               ? 'dark'
               : 'light';
    }

    function updateTheme(theme, persist = false) {
        body.setAttribute('data-theme', theme);
        updateLogo();

        if (persist) {
            localStorage.setItem('theme', theme);
        }

        updateThemeIcon(theme);
    }

    function updateThemeIcon(theme) {
        const icon = document.getElementById('themeIcon');
        if (!icon) return;

        icon.classList.remove('bulb-on', 'bulb-off', 'flicker');
        void icon.offsetWidth;

        if (theme === 'light') {
            icon.classList.add('bulb-on', 'flicker');
            icon.textContent = '💡';
        } else {
            icon.classList.add('bulb-off');
            icon.textContent = '💡';
        }
    }

    // Initial theme
    const savedTheme = localStorage.getItem('theme');
    const currentTheme = savedTheme || getSystemPreference();
    updateTheme(currentTheme);

    // Listen for system preference changes (only if user hasn’t chosen)
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                updateTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Toggle on click
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            const newTheme =
                body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            updateTheme(newTheme, true);

            if (newTheme === 'dark') {
                console.log('Dark mode enabled. Fewer photons, more focus.');
            }
        });
    }
}

// Load dark mode when DOM is ready
document.addEventListener('DOMContentLoaded', initDarkMode);
