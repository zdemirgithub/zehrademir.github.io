import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.siteTitle}>Zehra Demir</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.icons}>
          <a href="https://github.com/zdemirgithub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/zehra-demir-74b307308" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
