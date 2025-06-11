import { motion } from 'framer-motion';
import { FaUniversity, FaBriefcase, FaProjectDiagram, FaDownload } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-6 text-white bg-transparent"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I’m <span className="text-cyan-400 font-semibold">Karri Aditya Lakshmi Narayan</span>, a Computer Science Engineering student specializing in Artificial Intelligence at Pragati Engineering College, Andhra Pradesh. I am deeply passionate about machine learning, deep learning, and generative AI. With hands-on experience through multiple internships and projects, I thrive on building impactful solutions and participating in hackathons and tech events.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            <FaDownload />
            Download Resume
          </a>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-4 rounded-lg border border-cyan-400 bg-transparent"
          >
            <FaUniversity className="text-3xl mx-auto mb-2 text-cyan-300" />
            <h3 className="text-xl font-semibold">Current CGPA</h3>
            <p className="text-lg text-gray-300">8.6</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-4 rounded-lg border border-violet-400 bg-transparent"
          >
            <FaProjectDiagram className="text-3xl mx-auto mb-2 text-violet-300" />
            <h3 className="text-xl font-semibold">Projects Done</h3>
            <p className="text-lg text-gray-300">2+</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-4 rounded-lg border border-pink-400 bg-transparent"
          >
            <FaBriefcase className="text-3xl mx-auto mb-2 text-pink-300" />
            <h3 className="text-xl font-semibold">Internships</h3>
            <p className="text-lg text-gray-300">4+ Completed</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
