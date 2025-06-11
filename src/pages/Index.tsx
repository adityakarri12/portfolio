import Scene3D from '@/components/Scene3D';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-space-gradient overflow-x-hidden">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section with ID */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative py-20 px-6"
        >
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                About Me
              </h2>
              <div className="glass-panel p-8 md:p-12">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Computer Science student specializing in Data Science, with a strong foundation
                  in artificial intelligence, machine learning, and full-stack web development. My journey in tech
                  has been driven by curiosity and a desire to solve real-world problems through innovative solutions.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  Through hands-on internships at Infosys Springboard and Google Cloud, I've developed scalable
                  applications that have achieved 95% uptime reliability and enhanced user engagement by 25%.
                  I'm proficient in Python, React, and various AI/ML frameworks, always eager to learn and adapt
                  to new technologies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-cyan mb-2">8.68</div>
                    <div className="text-gray-400">Current CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-violet mb-2">3+</div>
                    <div className="text-gray-400">Internships Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-electric-blue mb-2">10+</div>
                    <div className="text-gray-400">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section with ID */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative py-12 px-6 border-t border-glass-border"
        >
          <div className="container mx-auto text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Karri Aditya Lakshmi Narayan. Designed & Developed with ❤️
            </p>
            <p className="text-sm text-gray-500">
              Built with React, Three.js, Framer Motion, and Tailwind CSS
            </p>
          </div>
        </motion.footer>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 glass-panel p-3 rounded-full text-neon-cyan hover:text-white transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Index;
