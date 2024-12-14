// components/ProjectCard.js
import styles from '../styles/ProjectCard.module.css';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3>{project.name}</h3>
      <p><strong>Stack:</strong> {project.stack}</p>
      <p><strong>Deployment:</strong> {project.deployment}</p>
      <p>{project.specs}</p>
      <Link href={`/projects/${project.id}`}>
        <a>View Details</a>
      </Link>
    </div>
  );
};

export default ProjectCard;
