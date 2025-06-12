import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink, FaGithub, FaTimes } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "Designed and launched a scalable movie recommendation system leveraging advanced filtering algorithms.",
      tech: ["Python", "Pandas", "Tkinter", "Machine Learning"],
      src: "https://via.placeholder.com/600x300?text=Movie+App+Preview",
      alt: "Movie Recommendation System demo",
      link: "https://movie-recommendation-2-a56i.onrender.com/",
      github: "https://github.com/adityakarri12/movie-recommendation"
    },
    {
      title: "Disease Prediction and Medication System",
      description:
        "Engineered an AI-powered disease detection platform providing personalized medication insights.",
      tech: ["Python", "RandomForest", "Tkinter", "Machine Learning"],
      src: "https://via.placeholder.com/600x300?text=Disease+App+Preview",
      alt: "Disease Prediction and Medication System demo",
      link: "https://disease-prdeiction-and-drug.onrender.com/",
      github: "https://github.com/adityakarri12/Disease-Prdeiction-and-Drug-recommendations-System"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-6 bg-transparent text-white backdrop-blur-sm"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and AI/ML.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-md transition-all duration-500 border-2 border-transparent hover:border-[3px] hover:border-cyan-400 shadow-md hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]"
            >
              {/* Project Image */}
              <div
                className="aspect-video rounded-lg mb-4 overflow-hidden border border-cyan-500 hover:brightness-110 transition duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-cyan-600/10 text-cyan-300 border border-cyan-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100"
                >
                  <FaLink /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-violet-300 hover:text-violet-100"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center p-6 border-2 border-transparent hover:border-cyan-400 bg-white/5 backdrop-blur-md rounded-xl shadow-md hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-500"
        >
          <h4 className="text-2xl font-semibold text-white mb-2">💡 Have a Project Idea?</h4>
          <p className="text-gray-300 text-md mb-4">
            I'm always open to collaborations! If you have a cool idea or want to build something together, feel free to message me.
          </p>
          <a
            href="#contact"
            className="inline-block px-5 py-2 bg-cyan-500/20 text-cyan-300 border border-cyan-400 rounded-full hover:bg-cyan-600/30 hover:text-white transition-all duration-300"
          >
            💬 Message Me
          </a>
        </motion.div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative bg-white/10 p-6 rounded-xl shadow-xl max-w-3xl w-full text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-red-400"
              >
                <FaTimes size={20} />
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <img
                src={selectedProject.src}
                alt={selectedProject.alt}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-200 mb-4">{selectedProject.description}</p>
              <div className="flex gap-3 flex-wrap mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-600/10 text-cyan-300 border border-cyan-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  className="text-cyan-300 hover:text-cyan-100 flex gap-2"
                >
                  <FaLink /> Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="text-violet-300 hover:text-violet-100 flex gap-2"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectsSection;
