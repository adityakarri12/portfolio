import { motion } from 'framer-motion';
import { FaLink, FaGithub } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "Designed and launched a scalable movie recommendation system leveraging advanced filtering algorithms, increasing recommendation precision by 30% and maintaining 95% uptime reliability.",
      tech: ["Python", "Pandas", "Tkinter", "Machine Learning"],
      src: "", // Add your image src if needed
      alt: "Movie Recommendation System demo",
      link: "https://movie-recommendation-2-a56i.onrender.com/",
      github: "https://github.com/adityakarri12/movie-recommendation"
    },
    {
      title: "Disease Prediction and Medication System",
      description:
        "Engineered an AI-powered disease detection platform with a Python backend, enhancing diagnostic accuracy by 35% and providing personalized medication insights for over 50+ diseases.",
      tech: ["Python", "RandomForest", "Tkinter", "Machine Learning"],
      src: "", // Add your image src if needed
      alt: "Disease Prediction and Medication System demo",
      link: "https://disease-prdeiction-and-drug.onrender.com/",
      github: "https://github.com/adityakarri12/Disease-Prdeiction-and-Drug-recommendations-System"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group p-6 rounded-xl border border-transparent bg-gradient-to-br from-black via-gray-900 to-black hover:shadow-[0_0_25px_6px_rgba(0,255,255,0.5)] transition-all duration-500 relative hover:border-gradient-to-r from-cyan-400 via-purple-500 to-blue-400"
            >
              <div className="aspect-video rounded-lg mb-4 overflow-hidden shadow-md border border-cyan-500">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-cyan-600/20 text-cyan-300 border border-cyan-400 rounded-full text-sm hover:bg-cyan-400/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors"
                >
                  <FaLink /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-violet-300 hover:text-violet-100 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 💬 Message box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center border border-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 bg-glass-white backdrop-blur-md p-6 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.3)]"
        >
          <h4 className="text-2xl font-semibold text-white mb-2">💡 Have a Project Idea?</h4>
          <p className="text-gray-300 text-md">
            I'm always open to exciting collaborations! If you have any cool project ideas or want to work together, feel free to reach out via the contact form below.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
