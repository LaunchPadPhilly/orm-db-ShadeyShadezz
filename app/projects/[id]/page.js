import Image from "next/image";
import ProjectForm from "../projects/components/ProjectForm";
import TechnologyInput from "../components/TechnologyInput";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Najah",
      image: "/Najah.png",
      description:
        "A platform designed to connect learners with personalized skill-building paths, powered by clean UI and thoughtful UX design.",
      link: "#",
    },
    {
      title: "MovieMasses",
      image: "/MovieMasses.png",
      description:
        "A movie discovery system that shows trending films, user reviews, and personalized watchlist functionality.",
      link: "#",
    },
  ];

  return (
    <main className="px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold text-brand-primary mb-10 text-center">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h2 classh2className="text-2xl font-semibold text-brand-dark mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <a
                href={project.link}
                className="inline-block px-5 py-2 rounded-lg bg-brand-primary text-white hover:bg-brand-secondary transition-all"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
