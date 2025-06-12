
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "Designed and launched a scalable movie recommendation system leveraging advanced filtering algorithms.",
      tech: ["Python", "Pandas", "Tkinter", "Machine Learning"],
      src: "https://via.placeholder.com/500x300", // Replace with real screenshot
      alt: "Movie Recommendation System demo",
      link: "https://movie-recommendation-2-a56i.onrender.com/",
      github: "https://github.com/adityakarri12/movie-recommendation",
      tags: ["AI/ML", "Python"],
      isTop: true,
      views: "1.2k",
    },
    {
      title: "Disease Prediction and Medication System",
      description:
        "AI-powered disease detection platform with enhanced diagnostic accuracy and personalized medications.",
      tech: ["Python", "RandomForest", "Tkinter", "Machine Learning"],
      src: "https://via.placeholder.com/500x300", // Replace with real screenshot
      alt: "Disease Prediction and Medication System demo",
      link: "https://disease-prdeiction-and-drug.onrender.com/",
      github:
        "https://github.com/adityakarri12/Disease-Prdeiction-and-Drug-recommendations-System",
      tags: ["AI/ML", "Python"],
      isTop: false,
      views: "860",
    },
  ];

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-6 text-white"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my recent work that blends AI/ML and full-stack engineering.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1 rounded-full border text-sm ${
                filter === tag
                  ? "bg-cyan-500 text-white"
                  : "text-cyan-300 border-cyan-500"
              } hover:bg-cyan-600 transition`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group relative p-6 rounded-xl border border-transparent backdrop-blur-xl bg-white/5 transition-all duration-500 hover:shadow-[0_0_30px_6px_rgba(0,255,255,0.3)] hover:border-cyan-400"
            >
              {project.isTop && (
                <div className="absolute top-2 left-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-2 py-1 text-xs font-semibold rounded-r">
                  🚀 Top Project
                </div>
              )}
              <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-cyan-500">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full border border-cyan-400 text-cyan-300 bg-cyan-600/10 animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.4)] hover:shadow-[0_0_15px_rgba(0,255,255,0.7)] transition-shadow duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-sm mt-2">
                <span>👁️ {project.views} views</span>
                <button className="hover:text-red-400 transition-colors duration-300">
                  ❤️ Favorite
                </button>
              </div>

              <div className="flex space-x-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition"
                >
                  <FaLink /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-violet-300 hover:text-violet-100 transition"
                >
                  <FaGithub /> GitHub
                </a>
                <button
                  onClick={() => setModalProject(project)}
                  className="ml-auto text-white hover:text-cyan-400 text-sm"
                >
                  🔍 Preview
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Preview */}
        {modalProject && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6">
            <div className="relative bg-white text-black rounded-xl max-w-2xl w-full p-6">
              <button
                className="absolute top-2 right-4 text-xl"
                onClick={() => setModalProject(null)}
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold mb-4">{modalProject.title}</h3>
              <img
                src={modalProject.src}
                alt={modalProject.alt}
                className="rounded-md mb-4 w-full h-auto"
              />
              <p className="text-sm mb-2">{modalProject.description}</p>
              <div className="flex gap-4 text-sm mt-2">
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Live
                </a>
                <a
                  href={modalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
