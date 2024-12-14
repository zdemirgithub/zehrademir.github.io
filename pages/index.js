import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-pastel-100 min-h-screen">
      <header className="text-center py-12 bg-pastel-200">
        <h1 className="text-4xl font-bold text-neon-green">Zehra Demir</h1>
        <p className="mt-4 text-lg text-pastel-700">Full-stack Software Engineer | Passionate about building scalable, innovative systems</p>
      </header>

      <div className="container mx-auto px-4">
        <section className="mt-8">
          <h2 className="text-3xl font-bold text-pastel-700">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {/* Project Cards will be dynamically added here */}
            <Link href="/projects">
              <a className="card">
                <div className="bg-neon-green text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="mt-2">Next.js Full-stack Web App</p>
                </div>
              </a>
            </Link>
            {/* Repeat for other projects */}
          </div>
        </section>
      </div>
    </div>
  )
}
