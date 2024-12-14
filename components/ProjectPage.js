import { useRouter } from 'next/router';
import { projects } from '../data/projects';

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p><strong>Tech Stack:</strong> {project.stack}</p>
      <p><strong>Framework:</strong> {project.framework}</p>
      <p><strong>Deployment:</strong> {project.deployment}</p>
      <p><strong>Specs:</strong> {project.specs}</p>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
