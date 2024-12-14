import Link from 'next/link';

const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-4 text-white shadow-lg">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
      {/* Logo or Brand Name */}
      <div className="text-2xl font-bold text-white">
        <Link href="/">
          <a className="hover:text-yellow-300">Zehra Demir</a>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-6">
        <Link href="#about">
          <a className="text-lg hover:text-yellow-300">About</a>
        </Link>
        <Link href="#chart">
          <a className="text-lg hover:text-yellow-300">Chart</a>
        </Link>
        <Link href="#contact">
          <a className="text-lg hover:text-yellow-300">Contact</a>
        </Link>
      </nav>

      {/* Mobile Menu Icon (for small screens) */}
      <div className="lg:hidden">
        <button className="text-2xl text-white focus:outline-none">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
