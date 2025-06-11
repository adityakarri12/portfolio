import Scene3D from '@/components/Scene3D';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection'; // ✅ Added
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
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection /> {/* ✅ Reusable component added here */}
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
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
