document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});

const colors = ['#f4a261', '#2a9d8f', '#e9c46a', '#e76f51', '#264653'];
const colorButton = document.getElementById('color-flip-button');

colorButton.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

function updateClock() {
    const clockDisplay = document.getElementById('clock-display');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the time immediately

let counter = 0;
const counterDisplay = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');

incrementButton.addEventListener('click', function() {
    counter++;
    counterDisplay.textContent = counter;
});

decrementButton.addEventListener('click', function() {
    counter--;
    counterDisplay.textContent = counter;
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        navLinks.classList.remove('active'); // Close the menu after clicking
    });
});

// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
