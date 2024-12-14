import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Globals.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <h2 style={{ color: '#00ffcc', textAlign: 'center', marginBottom: '30px' }}>Welcome to My Portfolio</h2>
          
          <section>
            <h3 style={{ color: '#ffcc00' }}>Featured Projects</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {projects.slice(0, 4).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section>
            <h3 style={{ color: '#ffcc00' }}>Recent Work</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {projects.slice(4).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

