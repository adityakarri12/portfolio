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
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Image Box */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-72 h-96 rounded-3xl border-4 p-2 border-cyan-400 hover:border-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 bg-black/30 backdrop-blur-md shadow-[0_0_25px_4px_rgba(0,191,255,0.5)] hover:shadow-[0_0_35px_6px_rgba(255,255,255,0.3)] transition-all duration-500"
        >
          <img
            src="/your-image.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Content & Cards */}
        <div className="flex-1">
          {/* Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl">
              I’m <span className="text-cyan-400 font-semibold">Karri Aditya Lakshmi Narayan</span>,
              a Computer Science Engineering student specializing in Artificial Intelligence at Pragati Engineering College, Andhra Pradesh. I am deeply passionate about machine learning, deep learning, and generative AI. With hands-on experience through multiple internships and projects, I thrive on building impactful solutions and participating in hackathons and tech events.
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
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="min-h-[180px] min-w-[220px] p-8 rounded-xl border-2 bg-black/30 border-cyan-400 hover:border-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 shadow-[0_0_25px_4px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_6px_rgba(255,255,255,0.3)] backdrop-blur-md transition-all duration-500"
            >
              <FaUniversity className="text-3xl mx-auto mb-3 text-cyan-300" />
              <h3 className="text-xl font-semibold">Current CGPA</h3>
              <p className="text-lg text-gray-300">8.6</p>
            </motion.div>

            {/* Projects */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="min-h-[180px] min-w-[220px] p-8 rounded-xl border-2 bg-black/30 border-violet-400 hover:border-gradient-to-br from-pink-400 via-violet-500 to-blue-400 shadow-[0_0_25px_4px_rgba(216,191,216,0.3)] hover:shadow-[0_0_35px_6px_rgba(255,255,255,0.3)] backdrop-blur-md transition-all duration-500"
            >
              <FaProjectDiagram className="text-3xl mx-auto mb-3 text-violet-300" />
              <h3 className="text-xl font-semibold">Projects Done</h3>
              <p className="text-lg text-gray-300">2+</p>
            </motion.div>

            {/* Internships */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="min-h-[180px] min-w-[220px] p-8 rounded-xl border-2 bg-black/30 border-pink-400 hover:border-gradient-to-br from-pink-300 via-red-400 to-yellow-300 shadow-[0_0_25px_4px_rgba(255,182,193,0.3)] hover:shadow-[0_0_35px_6px_rgba(255,255,255,0.3)] backdrop-blur-md transition-all duration-500"
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
