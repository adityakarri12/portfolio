import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

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
        className="fixed top-20 right-8 z-50 p-3 rounded-full bg-[#18181b] dark:bg-[#2e1065] border-2 border-neon-cyan"
        whileHover={{ scale: 1.15 }}
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
            whileHover={{ scale: 1.1 }}
            className="mx-auto w-40 h-40 md:w-52 md:h-52 border-4 border-neon-cyan shadow-xl rounded-full overflow-hidden relative group"
          >
            <img
              src="/profile.jpg" // ✅ Put your profile image in `public` and name it `profile.jpg`
              alt="Profile"
              className="w-full h-full object-cover group-hover:opacity-90 transition"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-indigo-500 opacity-30 blur-xl animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x"
          >
            Karri Aditya Lakshmi Narayan
          </motion.h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              'AI & ML Enthusiast',
              2000,
              'Full Stack Developer',
              2000,
              'Python + React.js Expert',
              2000,
              'Cloud & Automation Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl text-gray-300 dark:text-gray-400 font-mono"
          />

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I build intelligent software products using AI and full-stack technologies. Skilled in Python, React, and cloud-native tools — always curious and ready to create.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-4">
            {[
              {
                icon: <FaLinkedin />,
                href: 'https://linkedin.com/in/aditya-karri-7128a61b1',
              },
              {
                icon: <FaGithub />,
                href: 'https://github.com/karriaditya1219',
              },
              {
                icon: <SiLeetcode />,
                href: 'https://leetcode.com/u/karri_aditya/',
              },
              {
                icon: <SiHackerrank />,
                href: 'https://www.hackerrank.com/profile/adityakarri2004',
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-neon-cyan transition"
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
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
          </div>
        </motion.div>
      </div>

      {/* Floating Code Boxes */}
      {[
        { text: '// Welcome to my portfolio', top: 'top-20 left-10' },
        { text: 'console.log("Hello, World!");', top: 'bottom-40 right-10' },
      ].map((box, index) => (
        <motion.div
          key={index}
          className={`absolute ${box.top} glass-panel p-4 text-sm font-mono text-white rounded-lg border border-white bg-white/5 backdrop-blur-md`}
          animate={{
            y: index === 0 ? mousePosition.y * 28 : -mousePosition.y * 22,
            x: index === 0 ? mousePosition.x * 24 : -mousePosition.x * 18,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          {box.text}
        </motion.div>
      ))}
    </section>
  );
};

export default HeroSection;
