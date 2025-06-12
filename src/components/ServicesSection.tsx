import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "AI & ML Solutions",
    icon: "🤖",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    details: "Built 5+ intelligent systems using supervised, unsupervised and NLP techniques."
  },
  {
    title: "Data Science & Visualization",
    icon: "📊",
    tech: ["Pandas", "NumPy", "PowerBI", "Matplotlib"],
    details: "Cleaned and visualized datasets to uncover insights and patterns."
  },
  {
    title: "Generative AI Projects",
    icon: "🧠",
    tech: ["OpenAI", "LangChain", "HuggingFace"],
    details: "Created GPT-based chatbots, content generation tools, and AI prompts."
  },
  {
    title: "Database Design & Optimization",
    icon: "🗄️",
    tech: ["MySQL", "MongoDB", "PostgreSQL"],
    details: "Designed scalable databases and optimized queries for performance."
  },
  {
    title: "DevOps & CI/CD",
    icon: "⚙️",
    tech: ["Docker", "GitHub Actions", "Kubernetes"],
    details: "Automated deployments and managed scalable infrastructure."
  },
];

const ServicesSection = () => {
  const [flipped, setFlipped] = useState<string | null>(null);

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
        {services.map((svc) => {
          const isFlipped = flipped === svc.title;
          return (
            <motion.div
              key={svc.title}
              className="relative group w-full h-80 cursor-pointer"
              onMouseEnter={() => setFlipped(svc.title)}
              onMouseLeave={() => setFlipped(null)}
              style={{ perspective: '1000px' }} // 👈 perspective on the container
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }} // 👈 3D transform
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full p-6 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md shadow-lg flex flex-col justify-center items-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="mb-4 text-5xl">{svc.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {svc.details.split('.')[0]}.
                  </p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full p-6 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md shadow-lg flex flex-col justify-center items-center transform rotate-y-180"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {svc.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-cyan-600/20 text-cyan-300 border border-cyan-400 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
