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

    const skills = document.querySelectorAll('.bounce-in');
    skills.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        if (skillPosition < screenPosition) {
            skill.style.opacity = 1;
            skill.style.transform = 'translateY(0)';
        }
    });
});

// Typing effect for header
const typedText = document.querySelector('header p');
const words = ["Software Engineer", "Backend Developer", "AI Enthusiast", "Data Analyst"];
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
            setTimeout(type, 2000);  // Wait before deleting
        }
    } else {
        if (charIndex > 0) {
            typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, 50);
        } else {
            typing = true;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);  // Wait before starting the next word
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);  // Initial delay before typing starts
});
