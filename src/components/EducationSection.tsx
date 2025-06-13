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
      className="relative py-20 px-8 group bg-transparent overflow-x-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10" // reduced from mb-20 to mb-10
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎓 <span className="text-neon-cyan">My Education</span> 📚
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A timeline of my academic journey shaped by curiosity, consistency, and achievement.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative flex flex-col md:flex-row items-start justify-center gap-10 md:gap-8 max-w-7xl mx-auto overflow-x-auto pt-4 pb-4">
          {/* Timeline Line connect*
