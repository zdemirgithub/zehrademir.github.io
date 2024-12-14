import React from 'react';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Quick Links</h2>
      <ul>
        <li><Link href="/projects">All Projects</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
