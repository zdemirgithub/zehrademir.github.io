import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const ProjectsPage = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <h2>Projects</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

