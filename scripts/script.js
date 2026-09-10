// Smooth-scrolls to the destinations section from the hero button.
function showMessage() {
    const target = document.getElementById('places');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// Marks the nav link matching the current page + hash as active.
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const current = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach((link) => {
        const linkPath = link.getAttribute('href').split('#')[0].replace('./', '');
        if (linkPath === current || (linkPath === '' && current === 'index.html')) {
            link.classList.add('current');
        }
    });
});