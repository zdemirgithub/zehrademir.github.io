// Cyberpunk-style effects and interactivity

document.addEventListener("DOMContentLoaded", function() {
    // Glowing animation toggle for text elements
    const glowingElements = document.querySelectorAll('.project h3, header h1');

    glowingElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.animation = "glowing 1.5s ease-in-out infinite";
        });

        element.addEventListener('mouseout', () => {
            element.style.animation = "none";
        });
    });
});
