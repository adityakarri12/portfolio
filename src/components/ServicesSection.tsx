import { motion } from 'framer-motion';

const services = [
  {
    title: "AI & ML Solutions",
    icon: "🤖",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    details: "Built 5+ intelligent systems using supervised, unsupervised and NLP techniques.",
  },
  {
    title: "Data Science & Visualization",
    icon: "📊",
    tech: ["Pandas", "NumPy", "PowerBI", "Matplotlib"],
    details: "Cleaned and visualized datasets to uncover insights and patterns.",
  },
  {
    title: "Generative AI Projects",
    icon: "🧠",
    tech: ["OpenAI", "LangChain", "HuggingFace"],
    details: "Created GPT-based chatbots, content generation tools, and AI prompts.",
  },
  {
    title: "Database Design & Optimization",
    icon: "🗄️",
    tech: ["MySQL", "MongoDB", "PostgreSQL"],
    details: "Designed scalable databases and optimized queries for performance.",
  },
  {
    title: "DevOps & CI/CD",
    icon: "⚙️",
    tech: ["Docker", "GitHub Actions", "Kubernetes"],
    details: "Automated deployments and managed scalable infrastructure.",
  },
  {
    title: "Web App Development",
    icon: "🌐",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    details: "Built modern web apps with responsive UI and real-time capabilities.",
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
            className="rounded-xl p-6 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border-2 border-transparent
                       bg-clip-padding backdrop-blur-md shadow-xl 
                       hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300 group relative"
          >
            <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 blur-sm opacity-30 group-hover:opacity-60 transition duration-300 z-0" />
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
