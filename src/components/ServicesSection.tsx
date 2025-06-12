import { motion } from 'framer-motion';

const services = [
  {
    title: "AI & ML Solutions",
    icon: "🤖",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    details: "I can develop intelligent models for classification, prediction, and automation using AI/ML.",
  },
  {
    title: "Data Science & Visualization",
    icon: "📊",
    tech: ["Pandas", "NumPy", "PowerBI", "Matplotlib"],
    details: "I can analyze datasets and build interactive dashboards to unlock data-driven decisions.",
  },
  {
    title: "Generative AI Projects",
    icon: "🧠",
    tech: ["OpenAI", "LangChain", "HuggingFace"],
    details: "I can build chatbots, content generators, and prompt-based AI tools with GenAI models.",
  },
  {
    title: "Database Design & Optimization",
    icon: "🗄️",
    tech: ["MySQL", "MongoDB", "PostgreSQL"],
    details: "I can design robust databases and optimize queries for speed and scalability.",
  },
  {
    title: "DevOps & CI/CD",
    icon: "⚙️",
    tech: ["Docker", "GitHub Actions", "Kubernetes"],
    details: "I can automate deployments and manage infrastructure with efficient CI/CD pipelines.",
  },
  {
    title: "Web App Development",
    icon: "🌐",
    tech: ["React", "Node.js", "Tailwind CSS", "Express"],
    details: "I can build modern, responsive, and scalable full-stack web applications.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 px-6 bg-transparent text-white">
      <div className="relative z-10 container mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl font-bold gradient-text mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          What I Offer
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Combining modern tech and creativity to build next-gen digital experiences.
        </motion.p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((svc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-xl p-6 bg-transparent backdrop-blur-md 
                       border border-cyan-400 
                       shadow-[0_0_25px_rgba(34,211,238,0.5)] 
                       transition-all duration-300 hover:scale-105"
          >
            <div className="relative z-10">
              <div className="text-5xl mb-4">{svc.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{svc.details}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-cyan-600/20 text-cyan-300 border border-cyan-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
