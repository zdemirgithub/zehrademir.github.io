import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h2>Welcome to My Portfolio</h2>
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
};

export default Home;

