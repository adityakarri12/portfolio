import { motion } from 'framer-motion';

const skillLevels = {
  Expert: 100,
  Advanced: 90,
  Proficient: 75,
  Familiar: 50,
  Basic: 30,
};

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Proficient" },
      { name: "C", level: "Familiar" },
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "Streamlit", level: "Proficient" },
      { name: "HTML/CSS", level: "Basic" },
    ]
  },
  {
    category: "AI / Machine Learning",
    items: [
      { name: "Machine Learning", level: "Proficient" },
      { name: "Deep Learning", level: "Advanced" },
      { name: "Generative AI", level: "Familiar" },
      { name: "Data Science with Python", level: "Proficient" },
    ]
  },
  {
    category: "Database Management",
    items: [
      { name: "MySQL", level: "Proficient" },
    ]
  },
  {
    category: "Operating Systems",
    items: [
      { name: "Windows", level: "Expert" },
      { name: "Linux", level: "Basic" },
    ]
  },
  {
    category: "Project / Soft Skills",
    items: [
      { name: "Team Collaboration", level: "Expert" },
      { name: "Analytical Reasoning", level: "Strong" },
      { name: "Strategic Insight", level: "Advanced" },
    ]
  }
];

const SkillsSection = () => {
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
              className="p-6 rounded-xl border border-cyan-400 bg-black/30 backdrop-blur-md hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-neon-cyan mb-4">
                {skillCategory.category}
              </h3>
              <div className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400 transition-transform duration-300 group"
                  >
                    <span className="text-gray-300 font-medium group-hover:text-white transition-all">
                      {skill.name}
                    </span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skillLevels[skill.level] || 60}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:shadow-[0_0_10px_cyan] transition-all"
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
