function initDarkMode() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    const body = document.body;
    
    function getSystemPreference() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    // Check for saved theme preference or use system preference as default
    const currentTheme = localStorage.getItem('theme') || getSystemPreference();
    body.setAttribute('data-theme', currentTheme);
    
    // Listen for system preference changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener(function(e) {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                body.setAttribute('data-theme', newTheme);
                updateLogo();
            }
        });
    }
    
    // Dark mode toggle button event listener
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateLogo();
        });
    }
}

// Load dark mode when DOM is ready
document.addEventListener('DOMContentLoaded', initDarkMode);
