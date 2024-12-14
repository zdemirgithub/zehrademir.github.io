// Add functionality to dynamically load more projects or data
document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            name: "Project 1 - Next.js App",
            stack: "Next.js, React, Node.js",
            description: "A scalable web app built with Next.js for performance.",
            url: "project1.html"
        },
        {
            name: "Project 2 - AI App",
            stack: "Python, TensorFlow, Django",
            description: "AI-powered app for predicting user behavior.",
            url: "project2.html"
        },
        // Add more projects here
    ];

    const projectContainer = document.querySelector('.project-cards');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>Stack: ${project.stack}</p>
            <a href="${project.url}">Learn More</a>
        `;
        projectContainer.appendChild(card);
    });
});
