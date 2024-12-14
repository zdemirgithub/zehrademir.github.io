import Link from 'next/link';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3>{project.name}</h3>
      <p>{project.stack}</p>
      <p>{project.description}</p>
      <Link href={`/projects/${project.id}`}>
        <a>View Details</a>
      </Link>
    </div>
  );
};

export default ProjectCard;
