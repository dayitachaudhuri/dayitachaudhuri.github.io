function loadNavbar() {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
            <div class="container">
                <a class="navbar-brand" href="index.html"><img src="assets/imgs/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto align-items-center">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#home" data-page="home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#about" data-page="about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#education" data-page="education">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#experience" data-page="experience">Experience</a>
                        </li>              
                        <li class="nav-item">
                            <a class="nav-link" href="projects.html" data-page="projects">
                                Projects <i class="ti-arrow-top-right ml-1"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="ds200.html" data-page="ds200">
                                DS200-Assignment <i class="ti-arrow-top-right ml-1"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>          
        </nav>
    `;
    
    document.getElementById('navbar-container').innerHTML = navbarHTML;
    
    // Update logo based on current theme
    updateLogo();
    
    // Set active navigation item
    setActiveNavItem();
    
    // Add scroll spy for single page sections
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        initScrollSpy();
    }
}

function setActiveNavItem() {
    const currentPage = window.location.pathname;
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Check for exact page matches
        if (currentPage.endsWith('projects.html') && link.getAttribute('data-page') === 'projects') {
            link.classList.add('active');
        } else if (currentPage.endsWith('ds200.html') && link.getAttribute('data-page') === 'ds200') {
            link.classList.add('active');
        } else if ((currentPage.endsWith('index.html') || currentPage === '/') && currentHash) {
            // For index page with hash
            const hashSection = currentHash.substring(1);
            if (link.getAttribute('data-page') === hashSection) {
                link.classList.add('active');
            }
        } else if ((currentPage.endsWith('index.html') || currentPage === '/') && !currentHash && link.getAttribute('data-page') === 'home') {
            // Default to home if on index page without hash
            link.classList.add('active');
        }
    });
}

function initScrollSpy() {
    // Scroll spy functionality for single page navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    
    function updateActiveSection() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;
            
            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === current) {
                link.classList.add('active');
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveSection);
    
    // Update on hash change
    window.addEventListener('hashchange', () => {
        setTimeout(setActiveNavItem, 100);
    });
    
    // Initial update
    updateActiveSection();
}

function updateLogo() {
    const logo = document.querySelector('.navbar-brand img');
    if (logo && document.body.getAttribute('data-theme') === 'dark') {
        logo.src = 'assets/imgs/logo-dark.png';
    } else if (logo) {
        logo.src = 'assets/imgs/logo.png';
    }
}

// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    
    // Listen for hash changes on page load
    if (window.location.hash) {
        setTimeout(setActiveNavItem, 100);
    }
});
