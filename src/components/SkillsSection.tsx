import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "🐍 Python", level: "Expert" },
        { name: "☕ Java", level: "Proficient" },
        { name: "🔧 C", level: "Familiar" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "🌐 Streamlit", level: "Proficient" },
        { name: "🎨 HTML/CSS", level: "Basic" }
      ]
    },
    {
      category: "AI / Machine Learning",
      items: [
        { name: "🤖 Machine Learning", level: "Proficient" },
        { name: "🧠 Deep Learning", level: "Advanced" },
        { name: "✨ Generative AI", level: "Familiar" },
        { name: "📊 Data Science with Python", level: "Proficient" }
      ]
    },
    {
      category: "Database Management",
      items: [
        { name: "🗃️ MySQL", level: "Proficient" }
      ]
    },
    {
      category: "Operating Systems",
      items: [
        { name: "🪟 Windows", level: "Expert" },
        { name: "🐧 Linux", level: "Basic" }
      ]
    },
    {
      category: "Project / Soft Skills",
      items: [
        { name: "🤝 Team Collaboration", level: "Expert" },
        { name: "📐 Analytical Reasoning", level: "Advanced" },
        { name: "🧭 Strategic Insight", level: "Advanced" }
      ]
    }
  ];

  const getSkillMeterWidth = (level) => {
    switch (level) {
      case "Expert": return "100%";
      case "Advanced": return "85%";
      case "Proficient": return "70%";
      case "Familiar": return "50%";
      case "Basic": return "30%";
      default: return "0%";
    }
  };

  return (
    <motion.section
      id="skills"
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
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 drop-shadow-md">
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
              className="p-6 rounded-xl border border-cyan-400 shadow-[0_0_15px_#00ffff66] hover:shadow-[0_0_30px_#00ffffaa] transition duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center">
                {skillCategory.category}
              </h3>
              <div className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="p-2 bg-white/5 rounded-lg hover:ring-2 hover:ring-cyan-400 hover:shadow-lg group transition"
                  >
                    <motion.div
                      whileHover={{ color: '#00ffff', textShadow: '0 0 10px #00ffff' }}
                      className="text-gray-200 font-medium transition duration-300 mb-1"
                    >
                      {skill.name}
                    </motion.div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: getSkillMeterWidth(skill.level) }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
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
