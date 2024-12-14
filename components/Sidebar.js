// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
