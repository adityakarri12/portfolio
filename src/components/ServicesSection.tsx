import { motion } from 'framer-motion';
import { FaLaptopCode, FaBrain, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'I build responsive, dynamic, and fast websites using React, Next.js, and backend APIs.',
    icon: <FaLaptopCode className="text-cyan-400 text-4xl mb-4" />
  },
  {
    title: 'Machine Learning',
    description: 'Developed intelligent systems using Python, scikit-learn, and real-world data for predictions.',
    icon: <FaBrain className="text-purple-400 text-4xl mb-4" />
  },
  {
    title: 'Mobile Apps',
    description: 'Built Android apps with user-friendly interfaces using Java and Firebase.',
    icon: <FaMobileAlt className="text-pink-400 text-4xl mb-4" />
  },
  {
    title: 'UI/UX Design',
    description: 'Crafted smooth user experiences using Figma, animations, and modern design principles.',
    icon: <FaPaintBrush className="text-yellow-400 text-4xl mb-4" />
  }
];

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-transparent text-white backdrop-blur-sm"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            My Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            I specialize in building intelligent, user-centric digital experiences across platforms.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border-2 border-transparent hover:border-cyan-400 shadow-md hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-500 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
