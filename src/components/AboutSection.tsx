import { motion } from 'framer-motion';
import { FaUniversity, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-6 bg-black text-white"
    >
      <div className="container mx-auto max-w-4xl">
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
          <p className="text-lg text-gray-300">
            I’m <span className="text-cyan-400 font-semibold">Karri Aditya Lakshmi Narayan</span>, a Computer Science Engineering student specializing in Artificial Intelligence at Pragati Engineering College, Andhra Pradesh. I am deeply passionate about machine learning, deep learning, and generative AI. With hands-on experience through multiple internships and projects, I thrive on building impactful solutions and participating in hackathons and tech events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl border border-cyan-400 bg-gradient-to-br from-black via-gray-900 to-black shadow-md hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.5)] transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUniversity className="text-2xl text-cyan-300" />
              <h3 className="text-xl font-bold">Academics</h3>
            </div>
            <p className="text-gray-300">
              <strong>Degree:</strong> B.Tech in CSE - Artificial Intelligence<br />
              <strong>College:</strong> Pragati Engineering College<br />
              <strong>CGPA:</strong> 8.68 (Current)<br />
              <strong>Intermediate:</strong> 95.7% (Narayana Junior College)<br />
              <strong>Secondary:</strong> 99% (Narayana E.M School)
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl border border-violet-400 bg-gradient-to-br from-black via-gray-900 to-black shadow-md hover:shadow-[0_0_25px_5px_rgba(165,105,255,0.5)] transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaProjectDiagram className="text-2xl text-violet-300" />
              <h3 className="text-xl font-bold">Key Projects</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300">
              <li><strong>Movie Recommendation System:</strong> Boosted precision by 30%, handled 10,000+ movie attributes.</li>
              <li><strong>Disease Prediction & Medication:</strong> Diagnosed 50+ diseases with 35% higher accuracy using AI.</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl border border-pink-400 bg-gradient-to-br from-black via-gray-900 to-black shadow-md hover:shadow-[0_0_25px_5px_rgba(255,105,180,0.5)] transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBriefcase className="text-2xl text-pink-300" />
              <h3 className="text-xl font-bold">Internships</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300">
              <li><strong>Google Cloud Gen AI:</strong> 5+ generative AI solutions deployed.</li>
              <li><strong>EduSkills Web Dev:</strong> Improved UI/UX & query time by 20%.</li>
              <li><strong>Android Dev:</strong> Enhanced app performance by 20% using Kotlin & Java.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
