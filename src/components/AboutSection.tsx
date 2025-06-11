import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaProjectDiagram, FaDownload } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-space-gradient text-white"
    >
      <div className="container mx-auto max-w-4xl text-center">
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            I’m <span className="text-cyan-400 font-semibold">Karri Aditya Lakshmi Narayan</span>, a Computer Science Engineering student at Pragati Engineering College, specializing in Artificial Intelligence. I'm passionate about Machine Learning, Deep Learning, and Generative AI, with a strong focus on building meaningful projects and exploring new technologies through internships, hackathons, and real-world applications.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <FaGraduationCap className="text-3xl text-cyan-400 mb-2" />
            <div className="text-xl font-bold text-white">8.6</div>
            <div className="text-gray-400">Current CGPA</div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <FaBriefcase className="text-3xl text-pink-400 mb-2" />
            <div className="text-xl font-bold text-white">4+</div>
            <div className="text-gray-400">Internships Completed</div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <FaProjectDiagram className="text-3xl text-violet-400 mb-2" />
            <div className="text-xl font-bold text-white">2</div>
            <div className="text-gray-400">Projects Done</div>
          </motion.div>
        </div>

        {/* Resume Download Button */}
        <motion.div
          className="mt-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/Karri_Aditya_Resume.pdf" // Replace with your actual file path
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            <FaDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
