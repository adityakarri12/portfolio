
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Web Application",
      description: "Developed a scalable web application using React and Python with machine learning integration",
      tech: ["React", "Python", "TensorFlow", "Node.js"],
      image: "/placeholder.svg"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Built an interactive dashboard for data visualization and analytics using modern web technologies",
      tech: ["React", "D3.js", "Express", "MongoDB"],
      image: "/placeholder.svg"
    },
    {
      title: "Cloud-Based Solution",
      description: "Created a cloud-native application with 95% uptime reliability and enhanced user engagement",
      tech: ["React", "AWS", "Docker", "PostgreSQL"],
      image: "/placeholder.svg"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
