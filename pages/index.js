// pages/index.js

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

export default function Home() {
  const projects = [
    {
      name: 'Next.js Portfolio',
      stack: 'Next.js, React.js, Tailwind CSS, Vercel',
      deployment: 'Vercel',
      specs: 'Responsive, Dynamic, Dark Mode',
      category: 'Frontend',
      link: '#',
    },
    {
      name: 'AI-Powered Chatbot',
      stack: 'Python, TensorFlow, Flask, PostgreSQL',
      deployment: 'AWS EC2',
      specs: 'Natural Language Processing, Speech Recognition',
      category: 'Backend',
      link: '#',
    },
    {
      name: 'E-commerce App',
      stack: 'React.js, Redux, Node.js, MongoDB',
      deployment: 'Netlify',
      specs: 'Product Management, User Authentication',
      category: 'Full-Stack',
      link: '#',
    },
    // Add 7 more projects similarly...
  ];

  return (
    <div className="container">
      <Head>
        <title>Zehra Demir - Software Engineer</title>
      </Head>

      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="project-list">
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
