// Typing Animation for Subtitle
const animatedText = document.querySelector('.animated-text');
const words = ['Software Engineer', 'Fullstack Developer','Data Analyst', 'AI Enthusiast'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWords() {
    if (!animatedText) return; // Ensure the element exists before running

    const currentWord = words[wordIndex];

    // Typing or deleting characters
    if (isDeleting) {
        animatedText.textContent = currentWord.substring(0, charIndex--);
    } else {
        animatedText.textContent = currentWord.substring(0, charIndex++);
    }

    // Adjust timing for typing vs deleting
    let typingSpeed = isDeleting ? 100 : 150;

    // Pause after typing or deleting a word completely
    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => {
            isDeleting = true;
            typeWords();
        }, 1000); // Pause before deleting
        return; // Exit this function to avoid immediate recursion
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    }

    setTimeout(typeWords, typingSpeed);
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    animatedText.textContent = ''; // Ensure text starts empty
    typeWords();
});


// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    animatedText.textContent = ''; // Ensure text starts empty
    typeWords();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Sticky Navigation Bar Animation
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll-Triggered Section Animations
const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    threshold: 0.1,
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

// Floating Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Dynamic Footer Year
const footerYear = document.getElementById('footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Interactive Hover Effect for Skills
const skills = document.querySelectorAll('.skills-grid span');
skills.forEach((skill) => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = '#66ff99';
        skill.style.transform = 'scale(1.2)';
        skill.style.transition = 'all 0.3s ease';
    });

    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = '';
        skill.style.transform = 'scale(1)';
    });
});

// Dynamic Active Link Highlight
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2; // Adjust midpoint for active link detection
    sections.forEach((section) => {
        if (
            section.offsetTop <= scrollPos &&
            section.offsetTop + section.offsetHeight > scrollPos
        ) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Animated Project Cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
    const cardObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    card.classList.add('animate-card');
                }
            });
        },
        { threshold: 0.3 }
    );
    cardObserver.observe(card);
});
