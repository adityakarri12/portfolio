
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "Java", "C++"]
    },
    {
      category: "Frontend Development",
      items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "Django", "Flask", "RESTful APIs"]
    },
    {
      category: "AI/ML & Data Science",
      items: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Google Cloud", "Docker", "Git", "CI/CD"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    }
  ];

  return (
    <motion.section
      id="skills"
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-neon-cyan mb-4">
                {skillCategory.category}
              </h3>
              <div className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${80 + Math.random() * 20}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
