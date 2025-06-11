import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = 'home';

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            window.scrollY >= offsetTop - offsetHeight * 0.3 &&
            window.scrollY < offsetTop + offsetHeight - offsetHeight * 0.3
          ) {
            currentSection = item.id;
          }
        }
      }

      // Ensure last section is detected
      if (
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 10
      ) {
        currentSection = navItems[navItems.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll);
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel px-6 py-3 shadow-md backdrop-blur-md bg-black/30 rounded-b-2xl' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold gradient-text"
        >
          Karri Aditya Lakshmi Narayan
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`relative transition-colors duration-300 px-4 py-2 font-medium ${
                activeSection === item.id
                  ? 'text-neon-cyan'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              {/* Underline animation */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-neon-cyan"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-white text-2xl"
          >
            {menuOpen ? '✕' : '☰'}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col space-y-4 py-6 md:hidden z-40 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMenuOpen(false);
              }}
              className={`text-white text-lg text-left ${
                activeSection === item.id ? 'text-neon-cyan font-semibold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
