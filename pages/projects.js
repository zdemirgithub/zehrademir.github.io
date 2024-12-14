import Link from 'next/link'

const projects = [
  {
    name: "Next.js Full-stack Web App",
    stack: "Next.js, React.js, Node.js, PostgreSQL",
    link: "/projects/project1",
  },
  // Add more project objects here
]

export default function Projects() {
  return (
    <div className="bg-pastel-100 min-h-screen">
      <header className="text-center py-12 bg-pastel-200">
        <h1 className="text-4xl font-bold text-neon-green">My Projects</h1>
      </header>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link href={project.link} key={project.name}>
              <a className="card">
                <div className="bg-pastel-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="mt-2 text-pastel-600">Tech Stack: {project.stack}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
