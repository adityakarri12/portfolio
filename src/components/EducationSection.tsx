import { motion } from 'framer-motion';

const educationData = [
  {
    title: "🎓 B.Tech - Pragati Engineering College",
    details: "Computer Science with AI Specialization",
    extra: "CGPA: 8.68 (Current)",
    duration: "2022 – Present",
    location: "Surampalem, Andhra Pradesh"
  },
  {
    title: "🏫 Intermediate - Narayana Junior College",
    details: "MPC (Maths, Physics, Chemistry)",
    extra: "Percentage: 95.7% | EAMCET Rank: 10565 | JEE Mains Percentile: 97",
    duration: "2020 – 2022",
    location: "Kakinada, Andhra Pradesh"
  },
  {
    title: "📘 SSC - Narayana E.M School",
    details: "Secondary School Certificate (10th Class)",
    extra: "Percentage: 99%",
    duration: "2019 – 2020",
    location: "Andhra Pradesh"
  }
];

const EducationSection = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-6 group hover:brightness-110 hover:saturate-150 transition duration-700"
    >
      {/* Floating Graphics */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-white/20 to-neon-cyan/20 rounded rotate-12 animate-floatSlow blur-md" />
        <div className="absolute bottom-10 right-16 w-20 h-14 bg-gradient-to-tr from-white/20 to-neon-violet/20 rounded rotate-45 animate-floatSlow blur-lg" />
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-bl from-white/20 to-electric-blue/20 rounded rotate-6 animate-floatSlow blur-md" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
            🎓 <span className="text-neon-cyan">My Education</span> 📚
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A journey of knowledge across schools and colleges with dedication and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-xl border-4 border-transparent bg-white/15 hover:border-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 shadow-[0_0_25px_4px_rgba(0,191,255,0.7)] transition duration-700 relative glow-border-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-neon-cyan/10 rounded-xl blur-sm z-[-1]" />
              <h3 className="text-xl font-semibold text-white mb-2">{edu.title}</h3>
              <p className="text-gray-300 mb-1">{edu.details}</p>
              <p className="text-sm text-muted-foreground mb-1">{edu.extra}</p>
              <div className="text-sm text-gray-400 flex justify-between">
                <span>{edu.duration}</span>
                <span>{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
