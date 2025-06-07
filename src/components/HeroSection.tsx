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

  const glowColors = ['#3b82f6', '#6366f1', '#0ea5e9', '#60a5fa', '#2563eb'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0fffc1]/20 via-[#22223b]/30 to-[#7e0fff]/30">
      {/* Theme Toggle */}
      <motion.button
        onClick={handleThemeToggle}
        className="fixed top-20 right-8 z-50 p-3 rounded-full bg-[#18181b] dark:bg-[#2e1065] border-2 border-neon-cyan flex items-center justify-center"
        style={{
          boxShadow: `0 0 12px 2px #0fffc1, 0 0 24px 6px #7e0fff66`,
        }}
        whileHover={{
          scale: 1.15,
          boxShadow: `0 0 24px 6px #0fffc1, 0 0 48px 12px #7e0fffaa inset`,
        }}
        aria-label="Change Theme"
      >
        {theme === 'light' ? (
          <FaMoon size={22} className="text-neon-cyan animate-pulse" />
        ) : (
          <FaSun size={22} className="text-yellow-300 animate-pulse" />
        )}
      </motion.button>

      {/* Particle Background */}
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

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: `0 0 40px 10px #3b82f6, 0 0 40px 10px #6366f1 inset`,
            }}
            className="mx-auto w-36 h-36 md:w-48 md:h-48 relative rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-md ring-4 ring-blue-400 transition-all duration-500"
          >
            <div className="relative z-10 w-full h-full overflow-hidden rounded-full">
              <img
                src="https://drive.google.com/file/d/12FpDW9fa5_CHLBErA_gC0HgAsBKNx2Gn/view?usp=sharing"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 via-indigo-400 to-blue-600 blur-xl opacity-40 animate-pulse" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x"
          >
            Karri Aditya Lakshmi Narayan
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I build intelligent software products using AI and full-stack technologies. Skilled in Python, React, and cloud-native tools — always curious and ready to create.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {['View My Work', 'Get In Touch'].map((text, index) => (
              <motion.button
                key={index}
                whileHover={{
                  scale: 1.1,
                  background: `linear-gradient(to right, ${glowColors[index]}, ${glowColors[(index + 2) % glowColors.length]})`,
                  boxShadow: `0 0 14px ${glowColors[index]}, inset 0 0 20px ${glowColors[(index + 2) % glowColors.length]}`,
                  color: '#000',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-lg font-semibold border-2 rounded-xl text-white border-white bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 transition-all duration-300"
                onClick={() => {
                  const id = index === 0 ? 'projects' : 'contact';
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {text}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Code Boxes */}
      {[
        { text: '// Welcome to my portfolio', top: 'top-20 left-10' },
        { text: 'console.log("Hello, World!");', top: 'bottom-40 right-10' },
      ].map((box, index) => (
        <motion.div
          key={index}
          className={`absolute ${box.top} glass-panel p-4 text-sm font-mono text-white rounded-lg border border-white bg-white/5 backdrop-blur-md transition-all`}
          animate={{
            y: index === 0 ? mousePosition.y * 28 : -mousePosition.y * 22,
            x: index === 0 ? mousePosition.x * 24 : -mousePosition.x * 18,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 0 25px ${glowColors[index]}, inset 0 0 35px ${glowColors[(index + 1) % glowColors.length]}`,
            background: `linear-gradient(to right, ${glowColors[index]}, ${glowColors[(index + 1) % glowColors.length]})`,
            color: '#000',
          }}
        >
          {box.text}
        </motion.div>
      ))}
    </section>
  );
};

export default HeroSection;
