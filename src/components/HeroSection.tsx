import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

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
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const glowColors = ['#00F0FF', '#FF61F6', '#8AFF00', '#FFCF00', '#00FFC3'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-gradient">
      {/* Theme Toggle */}
      <motion.button
        onClick={handleThemeToggle}
        className="fixed top-20 right-8 z-50 p-3 rounded-full bg-[#18181b] dark:bg-[#2e1065] border-2 border-neon-cyan"
        whileHover={{ scale: 1.15 }}
        aria-label="Change Theme"
      >
        {theme === 'light'
          ? <FaMoon size={22} className="text-neon-cyan animate-pulse" />
          : <FaSun size={22} className="text-yellow-300 animate-pulse" />}
      </motion.button>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <Tilt
            glareEnable
            glareMaxOpacity={0.4}
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="mx-auto w-36 h-36 md:w-48 md:h-48"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-cyan-400 shadow-xl">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-indigo-400 to-blue-600 blur-xl opacity-40 animate-pulse" />
            </div>
          </Tilt>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent"
          >
            Karri Aditya Lakshmi Narayan
          </motion.h1>

          <TypeAnimation
            sequence={[
              'AI Enthusiast 🤖', 1500,
              'Full Stack Developer 🌐', 1500,
              'Problem Solver ⚙️', 1500,
              'Cloud Native Explorer ☁️', 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-xl text-cyan-200"
          />

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I build intelligent software products using AI and full‑stack tech. Skilled in Python, React, and cloud‑native tools — always curious and ready to create.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {['View My Work', 'Get In Touch'].map((text, idx) => (
              <motion.button
                key={idx}
                whileHover={{
                  scale: 1.1,
                  background: `linear-gradient(to right, ${glowColors[idx]}, ${glowColors[(idx + 2) % glowColors.length]})`,
                  boxShadow: `0 0 14px ${glowColors[idx]}, inset 0 0 20px ${glowColors[(idx + 2) % glowColors.length]}`,
                  color: '#000',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-lg font-semibold border-2 rounded-xl text-white border-white bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400"
                onClick={() => {
                  document.getElementById(idx === 0 ? 'projects' : 'contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {text}
              </motion.button>
            ))}
          </motion.div>

          <div className="flex justify-center gap-6 mt-6 text-white text-xl">
            <a href="https://linkedin.com/in/aditya-karri-7128a61b1" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-300 transition hover:scale-125">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/adityakarri2004" target="_blank" rel="noopener noreferrer"
               className="hover:text-purple-300 transition hover:scale-125">
              <FaGithub size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* 🌐 Floating Code Boxes */}
      {[
        { text: '// Welcome to my portfolio', pos: 'top-20 left-10' },
        { text: 'console.log("Hello, World!");', pos: 'bottom-40 right-10' }
      ].map((box, i) => (
        <motion.div
          key={i}
          className={`absolute ${box.pos} glass-panel p-4 text-sm font-mono text-white rounded-lg border border-white bg-white/5 backdrop-blur-md`}
          animate={{
            x: mousePosition.x * (i === 0 ? 24 : -18),
            y: mousePosition.y * (i === 0 ? 28 : -22)
          }}
          transition={{ type: 'spring', stiffness: 50 }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 0 25px ${glowColors[i]}, inset 0 0 35px ${glowColors[(i + 1) % glowColors.length]}`,
            background: `linear-gradient(to right, ${glowColors[i]}, ${glowColors[(i + 1) % glowColors.length]})`,
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
