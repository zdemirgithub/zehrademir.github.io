import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
