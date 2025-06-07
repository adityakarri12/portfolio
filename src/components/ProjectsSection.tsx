import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "Designed and launched a scalable movie recommendation system leveraging advanced filtering algorithms, increasing recommendation precision by 30%.",
      tech: ["Python", "Pandas", "Tkinter", "ML"],
      image: "/placeholder.svg",
      link: "https://movie-recommendation-2-a56i.onrender.com/",
      github: "https://github.com/adityakarri12/movie-recommendation"
    },
    {
      title: "Disease Prediction and Medication System",
      description:
        "Engineered an AI-powered disease detection platform with a Python backend, enhancing diagnostic accuracy by 35% and providing medication insights for over 50+ diseases.",
      tech: ["Python", "RandomForest", "Tkinter", "ML"],
      image: "/placeholder.svg",
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
      className="relative py-20 px-6"
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
              whileHover={{ scale: 1.05 }}
              className="glass-panel p-6 rounded-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-neon-cyan to-neon-violet rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">Project Demo</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-violet hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
