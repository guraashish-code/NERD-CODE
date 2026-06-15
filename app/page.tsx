import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-zinc-50 dark:bg-black">
      <h1 className="text-4xl font-bold mb-12 text-center dark:text-white">Nerd Code Library</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="border border-zinc-200 p-6 rounded-xl shadow-sm bg-white hover:shadow-lg transition-shadow dark:bg-zinc-900 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">{project.title}</h2>
            <p className="text-zinc-600 mb-6 dark:text-zinc-400">{project.description}</p>
            
            <a 
              href={`https://vercel.com/new/clone?repository-url=${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-black text-white py-2 rounded-lg hover:bg-zinc-800 transition dark:bg-white dark:text-black"
            >
              Deploy to Vercel
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}