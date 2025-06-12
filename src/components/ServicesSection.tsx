import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaChartLine, FaMagic, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const services = [
  {
    title: "AI & ML Solutions",
    description: "Building intelligent systems using Machine Learning, Deep Learning, and NLP for smarter automation.",
    icon: <FaRobot className="text-4xl text-cyan-400 group-hover:animate-pulse" />,
  },
  {
    title: "Full Stack Web Development",
    description: "End-to-end web development with React, Node.js, and modern design principles.",
    icon: <FaCode className="text-4xl text-blue-400 group-hover:animate-pulse" />,
  },
  {
    title: "Data Science & Visualization",
    description: "Data analysis and insights using Python, Pandas, and data visualization tools.",
    icon: <FaChartLine className="text-4xl text-purple-400 group-hover:animate-pulse" />,
  },
  {
    title: "Generative AI Projects",
    description: "Innovative GenAI solutions using prompt engineering and transformers like GPT, DALL·E, and LLMs.",
    icon: <FaMagic className="text-4xl text-pink-400 group-hover:animate-pulse" />,
  },
  {
    title: "Mobile App Development",
    description: "Building lightweight Android apps with modern UI/UX and cloud integration.",
    icon: <FaMobileAlt className="text-4xl text-orange-400 group-hover:animate-pulse" />,
  },
  {
    title: "Database Design & Optimization",
    description: "Optimized schema design, indexing, and queries for scalable data-driven applications.",
    icon: <FaDatabase className="text-4xl text-green-400 group-hover:animate-pulse" />,
  },
];

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-6 text-white bg-transparent backdrop-blur-sm"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">What I Offer</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A blend of modern technologies and innovation to build powerful digital experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_30px_6px_rgba(0,255,255,0.3)]"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">{service.title}</h3>
              <p className="text-gray-300 text-center text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
