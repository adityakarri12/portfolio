import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 px-6 group hover:brightness-110 hover:saturate-150 transition duration-700"
    >
      {/* Floating Paper Graphics */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/5 rounded rotate-12 animate-floatSlow blur-sm" />
        <div className="absolute bottom-10 right-16 w-20 h-14 bg-white/5 rounded rotate-45 animate-floatSlow blur-md" />
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/5 rounded rotate-6 animate-floatSlow blur-sm" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
            ✨ <span className="text-neon-cyan">Get In Touch</span> ✨
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-xl border-4 border-transparent hover:border-gradient-to-r from-neon-cyan to-neon-violet transition duration-500 relative">
              <h3 className="text-2xl font-bold text-white mb-6">
                🌐 <span className="text-neon-violet">Let's Connect</span> 🌐
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group/icon">
                  <div className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center shadow-lg shadow-neon-cyan/50 group-hover/icon:shadow-neon-cyan/80 transition duration-300">
                    <svg className="w-6 h-6 text-neon-cyan animate-pulse group-hover/icon:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300">📧 Email</p>
                    <p className="text-white font-semibold">adityakarri2004@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group/icon">
                  <div className="w-12 h-12 bg-neon-violet/20 rounded-full flex items-center justify-center shadow-lg shadow-neon-violet/50 group-hover/icon:shadow-neon-violet/80 transition duration-300">
                    <svg className="w-6 h-6 text-neon-violet animate-pulse group-hover/icon:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300">📍 Location</p>
                    <p className="text-white font-semibold">Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group/icon">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center shadow-lg shadow-electric-blue/50 group-hover/icon:shadow-electric-blue/80 transition duration-300">
                    <svg className="w-6 h-6 text-electric-blue animate-pulse group-hover/icon:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300">🔗 LinkedIn</p>
                    <p className="text-white font-semibold">
                      <a
                        href="https://linkedin.com/in/aditya-karri-7128a61b1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-neon-cyan transition-colors"
                      >
                        linkedin.com/in/aditya-karri-7128a61b1
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-xl space-y-6 hover:shadow-2xl hover:scale-[1.02] transition duration-500 border-4 border-transparent hover:border-gradient-to-r from-neon-violet to-neon-cyan">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
