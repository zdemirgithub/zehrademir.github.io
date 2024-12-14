import React from 'react';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import './style.css';

const App = () => {
    const projects = [
        {
            title: 'AI-powered Chatbot',
            description: 'A chatbot that uses NLP and AI for customer service.',
            stack: 'Python, TensorFlow, Flask',
            link: 'https://github.com/zdemirgithub/chatbot'
        },
        {
            title: 'Real-time Stock Tracker',
            description: 'A real-time stock price tracker using WebSocket.',
            stack: 'React, Node.js, WebSocket',
            link: 'https://github.com/zdemirgithub/stock-tracker'
        },
        {
            title: 'Full-stack Portfolio',
            description: 'A full-stack portfolio built with Next.js and Tailwind CSS.',
            stack: 'Next.js, Tailwind CSS, Vercel',
            link: 'https://github.com/zdemirgithub/portfolio'
        },
        {
            title: 'Social Media App',
            description: 'A social media platform with real-time interactions.',
            stack: 'React, Firebase, Node.js',
            link: 'https://github.com/zdemirgithub/social-media-app'
        },
        {
            title: 'E-commerce Website',
            description: 'A full-featured e-commerce platform with payment gateway.',
            stack: 'Vue.js, Node.js, MongoDB',
            link: 'https://github.com/zdemirgithub/ecommerce'
        },
        {
            title: 'Weather App',
            description: 'Weather application with a real-time API integration.',
            stack: 'React, OpenWeather API',
            link: 'https://github.com/zdemirgithub/weather-app'
        },
        {
            title: 'Personal Finance Tracker',
            description: 'Track personal finances with income and expense management.',
            stack: 'React, Redux, Firebase',
            link: 'https://github.com/zdemirgithub/finance-tracker'
        },
        {
            title: 'Task Management App',
            description: 'A task management app with kanban boards and collaboration.',
            stack: 'React, Node.js, MongoDB',
            link: 'https://github.com/zdemirgithub/task-manager'
        },
        {
            title: 'Recipe App',
            description: 'A recipe search app with user-generated content.',
            stack: 'React, API integration, Firebase',
            link: 'https://github.com/zdemirgithub/recipe-app'
        },
        {
            title: 'Fitness Tracker',
            description: 'Track your workouts and fitness goals.',
            stack: 'React Native, Expo, Firebase',
            link: 'https://github.com/zdemirgithub/fitness-tracker'
        }
    ];

    return (
        <div className="App">
            <Sidebar />
            <div className="main-content">
                <section id="home">
                    <h1>Welcome to My Portfolio</h1>
                    <p>I am Zehra Demir, a passionate software engineer.</p>
                </section>

                <section id="about">
                    <h2>About Me</h2>
                    <p>I specialize in full-stack web development, mobile apps, cloud infrastructure, and AI technologies.</p>
                </section>

                <section id="projects">
                    <h2>Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                stack={project.stack}
                                link={project.link}
                            />
                        ))}
                    </div>
                </section>

                <section id="contact">
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="https://github.com/zdemirgithub">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/zehra-demir-74b307308">LinkedIn</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default App;
