// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // GitHub Login
    const githubBtn = document.querySelector('.btn-github');
    githubBtn.addEventListener('click', () => {
        // Implement GitHub OAuth login
        console.log('GitHub login clicked');
    });

    // Navigation smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
