import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Connect with me:</p>
      <a href="https://github.com/zdemirgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/zehra-demir-74b307308" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:zehrademir.gm@gmail.com">Email</a>
    </footer>
  );
};

export default Footer;
