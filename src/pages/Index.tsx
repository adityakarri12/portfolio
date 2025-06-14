import Scene3D from '@/components/Scene3D';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-space-gradient overflow-x-hidden">
      <Scene3D />
      <Navigation />

      <div className="relative z-10">
        <section id="home" className="pt-24">
          <HeroSection />
        </section>

        <section id="about" className="pt-24">
          <AboutSection />
        </section>

        <section id="education" className="pt-24">
          <EducationSection />
        </section>

        <section id="skills" className="pt-24">
          <SkillsSection />
        </section>

        <section id="services" className="pt-24">
          <ServicesSection />
        </section>

        <section id="projects" className="pt-24">
          <ProjectsSection />
        </section>

        <section id="contact" className="pt-24">
          <ContactSection />
        </section>

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

      {/* Back to top button */}
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
