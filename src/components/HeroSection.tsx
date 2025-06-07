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

  // Profile graphics - simple SVG avatar with animated gradient glow
  const ProfileSVG = () => (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="avatarGlow" cx="70" cy="70" r="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0fffc1" stopOpacity="0.8"/>
          <stop offset="1" stopColor="#7e0fff" stopOpacity="0.4"/>
        </radialGradient>
        <linearGradient id="avatarGradient" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0fffc1"/>
          <stop offset="1" stopColor="#7e0fff"/>
        </linearGradient>
      </defs>
      <circle
        cx="70"
        cy="70"
        r="66"
        fill="url(#avatarGlow)"
        opacity="0.6"
      >
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* Head */}
      <ellipse cx="70" cy="56" rx="28" ry="28" fill="url(#avatarGradient)" />
      {/* Shoulders */}
      <ellipse cx="70" cy="100" rx="40" ry="22" fill="url(#avatarGradient)" opacity="0.8"/>
    </svg>
  );

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

  // Floating particle hover animation variants
  const particleHover = {
    scale: 1.5,
    boxShadow: `0 0 12px 3px #0fffc1, 0 0 24px 6px #7e0fff`,
    backgroundColor: '#7e0fff',
    transition: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeInOut"
    }
  };

  // New Description
  const description = `Driven software developer specializing in AI and full-stack technologies, 
    passionate about building scalable, user-centric solutions. Experienced with Python, React, and cloud platforms, 
    I thrive on transforming ideas into impactful digital experiences.`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0fffc1]/20 via-[#22223b]/30 to-[#7e0fff]/30">
      {/* Change Theme Button */}
      <motion.button
        onClick={handleThemeToggle}
        className="fixed top-20 right-8 z-50 p-3 rounded-full shadow-neon-cyan bg-[#18181b] dark:bg-[#2e1065] border-2 border-neon-cyan flex items-center justify-center transition-all duration-300 outline-none"
        style={{
          boxShadow: `0 0 16px 4px #0fffc1, 0 0 32px 8px #7e0fff88`,
        }}
        whileHover={{
          scale: 1.15,
          boxShadow: `0 0 32px 8px #0fffc1, 0 0 64px 16px #7e0fffcc`,
        }}
        aria-label="Change Theme"
      >
        {theme === 'light'
          ? <FaMoon size={22} className="text-neon-cyan animate-pulse" />
          : <FaSun size={22} className="text-yellow-300 animate-pulse" />}
      </motion.button>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full cursor-pointer"
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
            whileHover={particleHover}
          />
        ))}
      </div>

      {/* Additional background SVG shapes for subtle movement */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0.15 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <circle cx="80" cy="120" r="150" fill="url(#bgGradient)" />
        <circle cx="300" cy="400" r="250" fill="url(#bgGradient)" />
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0fffc1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7e0fff" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile graphics with animated glow */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mx-auto w-36 h-36 md:w-48 md:h-48 relative"
          >
            <div className="relative w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan/70 to-neon-violet/70 shadow-lg ring-4 ring-neon-cyan">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-neon-cyan via-transparent to-neon-violet blur-2xl opacity-80 animate-pulse pointer-events-none z-0" />
              <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                <ProfileSVG />
              </div>
            </div>
          </motion.div>

          {/* Name and title - single line */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 60 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap overflow-hidden"
            >
              <span className="bg-gradient-to-r from-neon-cyan via-blue-400 to-neon-violet bg-clip-text text-transparent animate-gradient-x">
                Karri Aditya Lakshmi Narayan
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "tween" }}
              className="text-xl md:text-2xl text-gray-200 dark:text-gray-300"
            >
              Aspiring Software Developer | B.Tech CSE (Artificial Intelligence)
            </motion.p>
          </div>

          {/* Polished Description */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons with glow hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 16px 4px #0fffc1cc",
                backgroundColor: "#0fffc1"
              }}
              whileTap={{ scale: 0.95 }}
              className="glass-panel px-8 py-3 text-lg font-semibold text-neon-cyan border-neon-cyan hover:bg-neon-cyan hover:text-space-dark transition-all duration-300 shadow-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 16px 4px #7e0fffcc",
                backgroundColor: "#7e0fff"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold border-2 border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-white transition-all duration-300 rounded-xl shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating code elements with slight parallax */}
      <motion.div
        className="absolute top-20 left-10 glass-panel p-4 text-sm font-mono text-neon-cyan hidden lg:block select-none"
        animate={{
          y: mousePosition.y * 28,
          x: mousePosition.x * 24,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        {'// Welcome to my portfolio'}
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 glass-panel p-4 text-sm font-mono text-neon-violet hidden lg:block select-none"
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
