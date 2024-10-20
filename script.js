// Smooth Scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-triggered animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            section.classList.add('appear');
        }
    });
});

// Typing effect for header
const typedText = document.querySelector('header p');
const words = [" Software Engineer", " Fullstack Developer", " Data Analyst ", " AI Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;


function type() {
    if (typing) {
        if (charIndex < words[wordIndex].length) {
            typedText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            typing = false;
            setTimeout(() => {
                // Clear the current word before starting to type the next one
                typedText.textContent = "\u00A0"; 
                charIndex = 0;
                wordIndex = (wordIndex + 1) % words.length; // Move to the next word
                typing = true; // Set typing back to true
                setTimeout(type, 500);  // Wait before starting the next word
            }, 2000); // Wait before deleting
        }
    } else {
        if (charIndex > 0) {
            typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, 50);
        } else {
            typing = true;
            setTimeout(type, 500);  // Wait before starting the next word
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);  // Initial delay before typing starts
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    const sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    toggle.addEventListener('change', function () {
        if (this.checked) {
            // Enable dark mode
            body.classList.add('dark-mode');
            header.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            navLinks.forEach(link => link.classList.add('dark-mode'));
            sections.forEach(section => {
                section.classList.add('dark-mode');
                // Change text color for readability
                section.querySelectorAll('h2, h3, p, li').forEach(el => {
                    el.style.color = '#fff'; // Set text color to white
                });
                // Change skill and project text styles in dark mode
                const skills = document.querySelectorAll('.skill');
                skills.forEach(skill => {
                    skill.style.backgroundColor = '#333'; // Dark background for skills
                    skill.style.color = '#fff'; // White text for skills
                });
            });
        } else {
            // Disable dark mode
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            navLinks.forEach(link => link.classList.remove('dark-mode'));
            sections.forEach(section => {
                section.classList.remove('dark-mode');
                // Reset text color
                section.querySelectorAll('h2, h3, p, li').forEach(el => {
                    el.style.color = ''; // Reset text color
                });
                // Reset skills and project styles
                const skills = document.querySelectorAll('.skill');
                skills.forEach(skill => {
                    skill.style.backgroundColor = ''; // Reset skill background
                    skill.style.color = ''; // Reset skill text color
                });
            });
        }
    });
});
