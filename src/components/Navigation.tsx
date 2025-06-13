import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [carPosition, setCarPosition] = useState(0);
  const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const activeBtn = navRefs.current[activeSection];
    if (activeBtn) {
      const rect = activeBtn.getBoundingClientRect();
      const containerRect = activeBtn.parentElement?.getBoundingClientRect();
      if (containerRect) {
        const newPosition = rect.left - containerRect.left + rect.width / 2 - 10;
        setCarPosition(newPosition);
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
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
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text"
          >
            Karri Aditya Lakshmi Narayan
          </motion.div>

          {/* Navigation Items + Car + Road */}
          <div className="hidden md:flex flex-col space-y-1 relative w-full justify-center">
            <div className="flex space-x-8 justify-center relative">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  ref={(el) => (navRefs.current[item.id] = el)}
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

              {/* 🚗 Car Animation */}
              <motion.div
                className="absolute -bottom-6 text-2xl z-10"
                animate={{ x: carPosition }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                🚗
              </motion.div>
            </div>

            {/* 🛣 Road background under nav */}
            <div className="relative mt-2 w-full h-[30px] bg-gray-800 rounded-full overflow-hidden">
              <div className="absolute top-1/2 left-0 w-full h-1 transform -translate-y-1/2 bg-[repeating-linear-gradient(to_right,_white_0,_white_10px,_transparent_10px,_transparent_20px)]" />
            </div>
          </div>

          {/* Mobile Menu Icon */}
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
