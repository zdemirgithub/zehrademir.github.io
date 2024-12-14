// Adding advanced interactivity with hover effects and animations

document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');
    const ctaButton = document.querySelector('.cta-button');

    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = "scale(1.05)";
            project.style.transition = "transform 0.3s ease";
        });

        project.addEventListener('mouseleave', () => {
            project.style.transform = "scale(1)";
        });
    });

    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.backgroundColor = '#00ffff';
        ctaButton.style.transition = 'background-color 0.3s ease';
    });

    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.backgroundColor = '#ff007f';
    });
});
