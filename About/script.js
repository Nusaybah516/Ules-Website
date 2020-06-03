let hamburger = document.getElementById('hamburger');
let hamburgerSection = document.getElementById('hamburger-section');

// Hamburger icon
hamburger.addEventListener('click', displayMenu);

function displayMenu() {
    if (hamburger.src.includes('hamburger')) {
        hamburger.src = './images/icon-close.svg';
        hamburgerSection.style.display = 'block';
    } else {
        hamburger.src = './images/icon-hamburger.svg';
        hamburgerSection.style.display = 'none';
    }
}