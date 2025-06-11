import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react'; // Optional: replace with custom icons if needed

const educationData = [
  {
    icon: <GraduationCap className="text-neon-cyan w-6 h-6" />,
    title: "B.Tech - Pragati Engineering College",
    details: "Computer Science with AI Specialization",
    extra: "CGPA: 8.68 (Current)",
    duration: "2022 – Present",
    location: "Surampalem, Andhra Pradesh"
  },
  {
    icon: <School className="text-neon-violet w-6 h-6" />,
    title: "Intermediate - Narayana Junior College",
    details: "MPC (Maths, Physics, Chemistry)",
    extra: "95.7% | EAMCET Rank: 10565 | JEE Mains Percentile: 97",
    duration: "2020 – 2022",
    location: "Kakinada, Andhra Pradesh"
  },
  {
    icon: <BookOpen className="text-electric-blue w-6 h-6" />,
    title: "SSC - Narayana E.M School",
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
      className="relative py-20 px-6 group bg-gradient-to-b from-black to-space-900 overflow-hidden"
    >
      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-white/20 to-neon-cyan/20 rounded-full rotate-12 animate-floatSlow blur-md" />
        <div className="absolute bottom-10 right-16 w-20 h-14 bg-gradient-to-tr from-white/20 to-neon-violet/20 rounded-full rotate-45 animate-floatSlow blur-lg" />
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-bl from-white/20 to-electric-blue/20 rounded-full rotate-6 animate-floatSlow blur-md" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎓 <span className="text-neon-cyan">My Education</span> 📚
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A timeline of my academic journey shaped by curiosity, consistency, and achievement.
          </p>
        </motion.div>

        {/* Timeline with animated vertical line */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-purple-500 to-electric-blue rounded-full"
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-16 pb-16 group"
            >
              {/* Timeline Dot + Icon */}
              <div className="absolute left-3 top-2 w-6 h-6 flex items-center justify-center bg-black border-4 border-white/20 rounded-full shadow-lg">
                {edu.icon}
              </div>

              {/* Card */}
              <div className="glass-panel bg-white/10 hover:bg-white/15 transition duration-300 border-4 border-transparent hover:border-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 shadow-[0_0_25px_4px_rgba(0,191,255,0.7)] rounded-xl p-6 backdrop-blur-md group-hover:scale-[1.02] transform transition-transform glow-border-hover">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
                <p className="text-md text-gray-200 mb-1">{edu.details}</p>
                <p className="text-sm text-gray-400 mb-2">{edu.extra}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{edu.duration}</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
