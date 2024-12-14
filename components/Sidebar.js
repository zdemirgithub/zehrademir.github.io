import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-cyberpunk-blue p-6 text-white">
      <h2 className="text-3xl font-bold mb-8">Zehra Demir</h2>
      <ul className="space-y-6">
        <li>
          <Link href="#about">
            <a className="text-lg hover:text-cyberpunk-green">About</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a className="text-lg hover:text-cyberpunk-green">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className="text-lg hover:text-cyberpunk-green">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
