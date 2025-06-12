import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

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
      className="relative py-20 px-6 group bg-transparent overflow-hidden"
    >
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

        {/* Horizontal Timeline */}
        <div className="relative flex flex-col md:flex-row items-start justify-center gap-10 md:gap-8 max-w-6xl mx-auto overflow-x-auto">
          {/* Horizontal line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-purple-500 to-electric-blue rounded-full md:top-1/2 md:translate-y-[-50%] z-0"
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 min-w-[280px] max-w-xs"
            >
              {/* Dot and Icon */}
              <div className="flex items-center justify-center w-10 h-10 mx-auto bg-black border-4 border-white/20 rounded-full shadow-lg mb-4">
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
