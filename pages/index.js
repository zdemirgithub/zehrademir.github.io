import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Home() {
  useEffect(() => {
    gsap.from(".hero-text", { opacity: 0, y: -100, duration: 1, delay: 0.3 });
    gsap.from(".cta-button", { opacity: 0, x: -100, duration: 1, delay: 0.6 });
  }, []);

  return (
    <div>
      <header className="bg-cyberpunk-background text-center py-40 px-5">
        <h1 className="hero-text text-6xl font-bold">Zehra Demir</h1>
        <p className="hero-text text-xl mt-4">Full-Stack Software Engineer</p>
        <Link href="#projects">
          <a className="cta-button bg-cyberpunk-pink text-white py-3 px-6 rounded-full text-lg mt-8 inline-block">Explore My Work</a>
        </Link>
      </header>

      <section id="about" className="py-40 px-10 bg-cyberpunk-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-cyberpunk-green">About Me</h2>
          <p className="text-lg mt-6">
            I am Zehra Demir, a passionate full-stack developer with a background in AI, Cloud Computing, and Software Engineering. I specialize in building scalable and high-performance systems with modern technologies such as React, Next.js, Python, and more.
          </p>
        </div>
      </section>

      <section id="projects" className="py-40 px-10 bg-cyberpunk-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-cyberpunk-green">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="project-card bg-cyberpunk-blue p-6 rounded-lg">
              <h3 className="text-2xl text-white">Next.js Portfolio</h3>
              <p className="text-sm text-white mt-2">Stack: Next.js, React, Vercel</p>
              <p className="text-sm text-white mt-2">A sleek and modern portfolio showcasing my skills and projects.</p>
            </div>
            <div className="project-card bg-cyberpunk-pink p-6 rounded-lg">
              <h3 className="text-2xl text-white">AI Chatbot</h3>
              <p className="text-sm text-white mt-2">Stack: Python, TensorFlow, Flask</p>
              <p className="text-sm text-white mt-2">An AI-powered chatbot with advanced NLP capabilities.</p>
            </div>
            <div className="project-card bg-cyberpunk-green p-6 rounded-lg">
              <h3 className="text-2xl text-white">Stock Price Tracker</h3>
              <p className="text-sm text-white mt-2">Stack: React.js, WebSocket, Node.js</p>
              <p className="text-sm text-white mt-2">Real-time stock price tracking using WebSocket for live updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-40 px-10 bg-cyberpunk-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-cyberpunk-green">Contact</h2>
          <p className="text-lg mt-6">Feel free to reach out via GitHub or LinkedIn:</p>
          <div className="mt-6">
            <Link href="https://github.com/zdemirgithub">
              <a className="text-lg text-cyberpunk-pink">GitHub</a>
            </Link>
            <span className="text-xl mx-4">|</span>
            <Link href="https://www.linkedin.com/in/zehra-demir-74b307308">
              <a className="text-lg text-cyberpunk-pink">LinkedIn</a>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-cyberpunk-background py-6 text-center">
        <p className="text-sm text-cyberpunk-green">© 2024 Zehra Demir | Built with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  );
}
