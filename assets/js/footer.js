function loadFooter() {
    const footerHTML = `
        <footer class="page-footer">
            <div class="container">
                <div class="row align-items-center py-4">
                    <div class="col-md-6 col-12 text-center text-md-left mb-3 mb-md-0">
                        <p class="mb-1">
                            Copyright 
                            <script>document.write(new Date().getFullYear())</script> 
                            &copy; <a href="index.html" class="footer-link">Dayita Chaudhuri</a>
                        </p>
                        <p class="mb-0">
                            <i class="ti-code mr-1"></i>
                            View the source code 
                            <a href="https://github.com/dayitachaudhuri/portfolio" target="_blank" class="footer-link">
                                <i class="ti-github mr-1"></i>here
                            </a>
                        </p>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="footer-socials text-center text-md-right">
                            <p class="mb-2">Connect with me</p>
                            <div class="socials">
                                <a class="social-item" href="https://www.linkedin.com/in/dayita-chaudhuri" target="_blank" title="LinkedIn">
                                    <i class="ti-linkedin"></i>
                                </a>
                                <a class="social-item" href="https://github.com/dayitachaudhuri" target="_blank" title="GitHub">
                                    <i class="ti-github"></i>
                                </a>
                                <a class="social-item" href="https://twitter.com/doyitach" target="_blank" title="Twitter">
                                    <i class="ti-twitter"></i>
                                </a>
                                <a class="social-item" href="mailto:dayitac@iisc.ac.in" target="_blank" title="Email">
                                    <i class="ti-google"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <hr class="footer-divider">
                        <div class="text-center">
                            <p class="mb-0">
                                Made with <i class="ti-heart text-danger"></i> using HTML, CSS & JavaScript
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    document.getElementById('footer-container').innerHTML = footerHTML;
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
