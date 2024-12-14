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
        {
            name: "Project 3 - Autopilot System",
            stack: "C++, ROS, GPS, Navigation",
            description: "An autopilot system for autonomous cars.",
            url: "project3.html"
        },
        {
            name: "Project 4 - OpenCPN Maritime System",
            stack: "OpenCPN, GIS, Navigation",
            description: "A maritime navigation system using OpenCPN.",
            url: "project4.html"
        },
        {
            name: "Project 5 - Social Media Dashboard",
            stack: "React.js, Redux, Firebase",
            description: "A dashboard for tracking social media metrics.",
            url: "project5.html"
        },
        {
            name: "Project 6 - Blockchain dApp",
            stack: "Solidity, Ethereum, Web3.js",
            description: "A decentralized application using blockchain technology.",
            url: "project6.html"
        },
        {
            name: "Project 7 - E-commerce Website",
            stack: "Vue.js, Node.js, MongoDB",
            description: "An e-commerce platform with a shopping cart feature.",
            url: "project7.html"
        },
        {
            name: "Project 8 - Mobile Game",
            stack: "Unity, C#, Firebase",
            description: "A mobile game with real-time multiplayer capabilities.",
            url: "project8.html"
        },
        {
            name: "Project 9 - Real-Time Chat App",
            stack: "React, Node.js, Socket.io",
            description: "A real-time chat app with WebSocket integration.",
            url: "project9.html"
        },
        {
            name: "Project 10 - Weather Forecast App",
            stack: "React, API, CSS",
            description: "A weather forecasting app using a third-party API.",
            url: "project10.html"
        },
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
