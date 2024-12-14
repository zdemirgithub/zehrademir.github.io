import { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import styled from 'styled-components';

// Dynamic Project Card Component
const ProjectCard = ({ name, stack, frameworks, deployment, specs, link, github }) => (
  <Card>
    <h3>{name}</h3>
    <p><strong>Stack:</strong> {stack}</p>
    <p><strong>Frameworks:</strong> {frameworks}</p>
    <p><strong>Deployment:</strong> {deployment}</p>
    <p><strong>Specs:</strong> {specs}</p>
    <div className="links">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FaLink /> Live Demo
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub Repo
      </a>
    </div>
  </Card>
);

// Main Page with Sidebar and Project Filtering
export default function Home() {
  const [category, setCategory] = useState('all');

  // Projects Data
  const projects = [
    {
      name: 'Autopilot System',
      stack: 'Python, TensorFlow, OpenCV',
      frameworks: 'Flask, React.js',
      deployment: 'AWS EC2, Docker',
      specs: 'Real-time car control system',
      link: '#',
      github: '#',
      category: 'AI',
    },
    {
      name: 'Social Media Dashboard',
      stack: 'React.js, Node.js, PostgreSQL',
      frameworks: 'Next.js, Express.js',
      deployment: 'Vercel, AWS RDS',
      specs: 'User analytics dashboard',
      link: '#',
      github: '#',
      category: 'Web',
    },
    {
      name: 'E-commerce App',
      stack: 'React.js, Node.js, MongoDB',
      frameworks: 'Next.js, Redux',
      deployment: 'Heroku, MongoDB Atlas',
      specs: 'Complete e-commerce solution',
      link: '#',
      github: '#',
      category: 'Web',
    },
    {
      name: 'AI Chatbot',
      stack: 'Python, Flask, TensorFlow',
      frameworks: 'Flask, React.js',
      deployment: 'Google Cloud',
      specs: 'Customer support automation',
      link: '#',
      github: '#',
      category: 'AI',
    },
    {
      name: 'Blockchain Voting System',
      stack: 'Solidity, Ethereum, React.js',
      frameworks: 'Next.js, Web3.js',
      deployment: 'Ethereum Testnet',
      specs: 'Decentralized voting system',
      link: '#',
      github: '#',
      category: 'Blockchain',
    },
    {
      name: 'Weather App',
      stack: 'React.js, Node.js',
      frameworks: 'Next.js',
      deployment: 'Vercel, OpenWeather API',
      specs: 'Weather forecast application',
      link: '#',
      github: '#',
      category: 'Web',
    },
    {
      name: 'Portfolio Website',
      stack: 'Next.js, React.js',
      frameworks: 'Next.js, Tailwind CSS',
      deployment: 'Vercel',
      specs: 'Personal portfolio website',
      link: '#',
      github: '#',
      category: 'Web',
    },
    {
      name: 'AR Navigation App',
      stack: 'React Native, Mapbox',
      frameworks: 'React Native',
      deployment: 'iOS, Android',
      specs: 'Augmented Reality navigation',
      link: '#',
      github: '#',
      category: 'Mobile',
    },
    {
      name: 'Real-time Chat App',
      stack: 'React.js, Node.js, Socket.io',
      frameworks: 'Next.js, Express.js',
      deployment: 'Heroku, MongoDB',
      specs: 'Real-time chat system',
      link: '#',
      github: '#',
      category: 'Web',
    },
    {
      name: 'Task Manager App',
      stack: 'React.js, Node.js, PostgreSQL',
      frameworks: 'Next.js, Express.js',
      deployment: 'Vercel, PostgreSQL',
      specs: 'Task management application',
      link: '#',
      github: '#',
      category: 'Web',
    },
  ];

  // Filter Projects by Category
  const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);

  return (
    <Container>
      <Sidebar>
        <h2>Categories</h2>
        <ul>
          <li onClick={() => setCategory('all')}>All</li>
          <li onClick={() => setCategory('AI')}>AI</li>
          <li onClick={() => setCategory('Web')}>Web</li>
          <li onClick={() => setCategory('Blockchain')}>Blockchain</li>
          <li onClick={() => setCategory('Mobile')}>Mobile</li>
        </ul>
      </Sidebar>
      <Main>
        <h1>My Projects</h1>
        <ProjectsContainer>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectsContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1e1e1e;
  color: #fff;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #2d2d2d;
  padding: 20px;
  h2 {
    color: #ff6b81;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  li:hover {
    background-color: #ff6b81;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  h3 {
    color: #ff6b81;
  }
  p {
    color: #ccc;
  }
  .links {
    margin-top: 20px;
    a {
      color: #ff6b81;
      text-decoration: none;
      margin-right: 10px;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #fff;
    }
  }
`;

