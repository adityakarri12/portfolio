import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Image from 'next/image';

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
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0fffc1]/20 via-[#22223b]/30 to-[#7e0fff]/30">
      <motion.button
        onClick={handleThemeToggle}
        className="fixed top-20 right-8 z-50 p-3 rounded-full border-2 border-white bg-black bg-glow transition-all duration-300"
        whileHover={{ scale: 1.15 }}
        aria-label="Change Theme"
      >
        {theme === 'light' ? <FaMoon size={22} className="text-cyan-400" /> : <FaSun size={22} className="text-yellow-400" />}
      </motion.button>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
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
            className="mx-auto w-44 h-44 md:w-56 md:h-56 relative rounded-full ring-4 ring-cyan-400 animate-glow-shadow"
          >
            <div className="absolute inset-0 rounded-full bg-animated-glow blur-2xl opacity-80 z-0" />
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover relative z-10"
            />
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-violet-600 bg-clip-text text-transparent animate-gradient-x"
            >
              Karri Aditya Lakshmi Narayan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-300 mt-2"
            >
              Software Developer | B.Tech in AI & ML | Full-Stack | Python | React | Cloud
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold rounded-xl bg-glow hover:bg-animated-fill shadow-inner text-white"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold rounded-xl bg-glow hover:bg-animated-fill shadow-inner text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 left-10 float-box"
        animate={{
          y: mousePosition.y * 30,
          x: mousePosition.x * 20,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        {'// Welcome to my portfolio'}
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-10 float-box"
        animate={{
          y: -mousePosition.y * 20,
          x: -mousePosition.x * 25,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        {'console.log("Hello, World!");'}
      </motion.div>
    </section>
  );
};

export default HeroSection;
