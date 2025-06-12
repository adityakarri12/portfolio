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
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Box */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-[300px] h-[360px] bg-black rounded-3xl border border-cyan-400 p-4 transition duration-300 animate-glow"
        >
          <img
            src="/myimage.jpg" // Replace with your actual image path
            alt="Aditya Karri"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Right Content */}
        <div className="flex-1">
          {/* Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-cyan-400 w-fit">
              About Me
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mt-4">
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {/* CGPA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 h-[180px] w-full rounded-xl border border-cyan-400 bg-glass glow-box"
            >
              <FaUniversity className="text-3xl mx-auto mb-3 text-cyan-300" />
              <h3 className="text-xl font-semibold">Current CGPA</h3>
              <p className="text-lg text-gray-300">8.6</p>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 h-[180px] w-full rounded-xl border border-violet-400 bg-glass glow-box"
            >
              <FaProjectDiagram className="text-3xl mx-auto mb-3 text-violet-300" />
              <h3 className="text-xl font-semibold">Projects Done</h3>
              <p className="text-lg text-gray-300">2+</p>
            </motion.div>

            {/* Internships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 h-[180px] w-full rounded-xl border border-pink-400 bg-glass glow-box"
            >
              <FaBriefcase className="text-3xl mx-auto mb-3 text-pink-300" />
              <h3 className="text-xl font-semibold">Internships</h3>
              <p className="text-lg text-gray-300">4+ Completed</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
