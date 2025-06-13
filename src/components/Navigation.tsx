import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const navBarRef = useRef<HTMLDivElement>(null);
  const [carLeft, setCarLeft] = useState(0);

  // Scroll detection for background style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to track visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Update car position
  useEffect(() => {
    const activeBtn = buttonRefs.current[activeSection];
    const navBar = navBarRef.current;

    if (activeBtn && navBar) {
      const navRect = navBar.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offsetLeft = btnRect.left - navRect.left + btnRect.width / 2 - 12; // center of button - half car
      setCarLeft(offsetLeft);
    }
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel m-4 rounded-full' : 'bg-transparent'
      }`}
    >
      <div ref={navBarRef} className="container mx-auto px-6 py-4 relative">
        {/* 🚗 Car Emoji */}
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: carLeft }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="absolute -top-4 text-2xl"
          style={{ position: 'absolute' }}
        >
          🚗
        </motion.div>

        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text"
          >
            Karri Aditya Lakshmi Narayan
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                ref={(el) => (buttonRefs.current[item.id] = el)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-neon-cyan glow-text'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan"
                    style={{ borderRadius: '2px' }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
