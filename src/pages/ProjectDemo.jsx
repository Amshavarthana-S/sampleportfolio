// src/pages/ProjectDemo.js
import { useParams, Link } from "react-router-dom";
import { projects } from "../mockData";

const ProjectDemo = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-16
                      bg-gradient-to-br from-gray-50 via-white to-cyan-50
                      dark:from-gray-950 dark:via-gray-900 dark:to-gray-900
                      animate-bgGradient">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-600">
            Project not found
          </h1>
          <Link to="/" className="inline-block mt-6 text-cyan-600 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-16
                    bg-gradient-to-br from-gray-50 via-white to-cyan-50
                    dark:from-gray-950 dark:via-gray-900 dark:to-gray-900
                    animate-bgGradient">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-600"
        >
          ← Back to Projects
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Project Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-sm rounded-xl shadow-lg object-cover"
          />

          {/* Project Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {project.longDescription}
            </p>

            {/* Technologies Used */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <ul className="flex flex-wrap gap-3">
                {project.tags.map((tech, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            {/* What I Learned */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Through this project, I gained hands-on experience in applying theoretical concepts, improving problem-solving skills, and following best practices in software development.
              </p>
            </section>

            {/* Buttons */}
            <div className="flex gap-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-700"
              >
                View GitHub
              </a>

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemo;
