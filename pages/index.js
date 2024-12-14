// pages/projects/index.js
import Header from '../../components/Header';
import Header from '../../components/Chart';
import Sidebar from '../../components/Sidebar';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Projects() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
