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
    document.body.classList.toggle('dark', theme === 'dark');
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
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0fffc1]/20 via-[#22223b]/30 to-[#7e0fff]/30">
      <style>{`
        @keyframes blueVioletGlow {
          0% {
            box-shadow: 0 0 12px 6px #3b82f6, 0 0 24px 12px #8b5cf6;
          }
          33% {
            box-shadow: 0 0 16px 8px #6366f1, 0 0 32px 16px #7c3aed;
          }
          66% {
            box-shadow: 0 0 20px 10px #4338ca, 0 0 40px 20px #6d28d9;
          }
          100% {
            box-shadow: 0 0 12px 6px #3b82f6, 0 0 24px 12px #8b5cf6;
          }
        }

        .glow-hover:hover,
        .glow-button-hover:hover,
        .glow-profile-hover:hover {
          animation: blueVioletGlow 3s linear infinite;
          box-shadow: inset 0 0 20px #7e0fff, inset 0 0 40px #0fffc1, 0 0 30px #6366f1, 0 0 50px #3b82f6;
          transform: scale(1.1);
        }
      `}</style>

      <motion.button
        onClick={handleThemeToggle}
        className="fixed top-20 right-8 z-50 p-3 rounded-full bg-[#18181b] dark:bg-[#2e1065] border-2 border-neon-cyan"
        style={{ boxShadow: `0 0 20px 6px #0fffc1, 0 0 40px 12px #7e0fff` }}
        whileHover={{
          scale: 1.2,
          boxShadow: `0 0 40px 12px #0fffc1, 0 0 80px 24px #7e0fff`,
        }}
        aria-label="Change Theme"
      >
        {theme === 'light'
          ? <FaMoon size={22} className="text-neon-cyan animate-pulse" />
          : <FaSun size={22} className="text-yellow-300 animate-pulse" />}
      </motion.button>

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
            className="mx-auto w-36 h-36 md:w-48 md:h-48 relative glow-profile-hover"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan via-purple-500 to-neon-violet blur-3xl opacity-80"></div>
            <div className="relative w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan/70 to-neon-violet/70 ring-4 ring-neon-cyan">
              <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                KALN
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-neon-cyan via-blue-400 to-neon-violet bg-clip-text text-transparent animate-gradient-x">
                Karri Aditya Lakshmi Narayan
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-200 dark:text-gray-300"
            >
              Aspiring Software Developer | B.Tech CSE (AI)
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about blending AI/ML with full-stack engineering to deliver innovative, real-world software solutions. Skilled in Python, React, and data-driven applications with a creative, growth-focused mindset.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="glow-button-hover glass-panel px-8 py-3 text-lg font-semibold text-neon-cyan border-neon-cyan"
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.button
              className="glow-button-hover px-8 py-3 text-lg font-semibold border-2 border-neon-violet text-neon-violet rounded-xl"
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 left-10 glass-panel p-4 text-sm font-mono text-neon-cyan hidden lg:block glow-hover rounded-lg"
        animate={{
          y: mousePosition.y * 28,
          x: mousePosition.x * 24,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        {'// Welcome to my portfolio'}
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 glass-panel p-4 text-sm font-mono text-neon-violet hidden lg:block glow-hover rounded-lg"
        animate={{
          y: -mousePosition.y * 22,
          x: -mousePosition.x * 18,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        {'console.log("Hello, World!");'}
      </motion.div>
    </section>
  );
};

export default HeroSection;
