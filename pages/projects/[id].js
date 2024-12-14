import { useRouter } from 'next/router';
import { projects } from '../../data/projects';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <h2>{project.name}</h2>
          <p><strong>Stack:</strong> {project.stack}</p>
          <p><strong>Deployment:</strong> {project.deployment}</p>
          <p><strong>Specs:</strong> {project.specs}</p>
          <p>{project.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
