import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const glowHoverStyle = {
    boxShadow: '0 0 20px #0fffc1, 0 0 30px #7e0fff, 0 0 40px #8B5CF6',
    backgroundImage: 'radial-gradient(circle at center, rgba(0,255,255,0.3), rgba(126,15,255,0.2), rgba(139,92,246,0.2))',
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0fffc1]/20 via-[#22223b]/30 to-[#7e0fff]/30">
      <motion.button
        onClick={handleThemeToggle}
        className="fixed top-20 right-8 z-50 p-3 rounded-full bg-[#18181b] dark:bg-[#2e1065] border-2 border-neon-cyan flex items-center justify-center transition-all duration-300"
        style={{ boxShadow: '0 0 16px 4px #0fffc1, 0 0 32px 8px #7e0fff88' }}
        whileHover={{ scale: 1.15, ...glowHoverStyle }}
        aria-label="Change Theme"
      >
        {theme === 'light' ? <FaMoon size={22} className="text-neon-cyan animate-pulse" /> : <FaSun size={22} className="text-yellow-300 animate-pulse" />}
      </motion.button>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
              opacity: 0.6 + Math.random() * 0.4,
            }}
            animate={{
              y: -10,
              x: Math.random() * window.innerWidth,
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mx-auto w-36 h-36 md:w-48 md:h-48 relative rounded-full"
            whileHover={glowHoverStyle}
          >
            <div className="relative w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan/70 to-neon-violet/70 shadow-lg">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan via-transparent to-neon-violet blur-2xl opacity-80 animate-pulse pointer-events-none z-0" />
              <img
                src="/profile.jpg"
                alt="Profile"
                className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, type: 'spring', stiffness: 60 }}
              className="text-4xl md:text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-neon-cyan via-blue-400 to-neon-violet bg-clip-text text-transparent animate-gradient-x">
                Karri Aditya Lakshmi Narayan
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-200"
            >
              Passionate Software Developer | AI-ML Enthusiast | Full Stack Creator
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Building intelligent digital solutions with a flair for design and technology. Let’s create something impactful together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={glowHoverStyle}
              whileTap={{ scale: 0.95 }}
              className="glass-panel px-8 py-3 text-lg font-semibold text-neon-cyan border-neon-cyan rounded-xl transition-all duration-300 shadow-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={glowHoverStyle}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold border-2 border-neon-violet text-neon-violet rounded-xl transition-all duration-300 shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 left-10 glass-panel p-4 text-sm font-mono text-neon-cyan hidden lg:block rounded-xl"
        animate={{ y: mousePosition.y * 28, x: mousePosition.x * 24 }}
        transition={{ type: 'spring', stiffness: 50 }}
        whileHover={glowHoverStyle}
      >
        {'// Welcome to my portfolio'}
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 glass-panel p-4 text-sm font-mono text-neon-violet hidden lg:block rounded-xl"
        animate={{ y: -mousePosition.y * 22, x: -mousePosition.x * 18 }}
        transition={{ type: 'spring', stiffness: 50 }}
        whileHover={glowHoverStyle}
      >
        {'console.log("Hello, World!");'}
      </motion.div>
    </section>
  );
};

export default HeroSection;
