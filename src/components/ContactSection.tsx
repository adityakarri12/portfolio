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
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-violet/10 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-neon-cyan glow-text mb-6">
            Get In Touch
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
            className="space-y-8 backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/10 shadow-glow"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <ContactInfo icon="@" title="Email" detail="adityakarri2004@gmail.com" />
              <ContactInfo icon="📍" title="Location" detail="Andhra Pradesh, India" />
              <ContactInfo
                icon="🔗"
                title="LinkedIn"
                detail="linkedin.com/in/aditya-karri-7128a61b1"
                href="https://linkedin.com/in/aditya-karri-7128a61b1"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/10 shadow-glow"
            >
              <InputField
                id="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              <InputField
                id="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                type="email"
              />
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-semibold rounded-lg shadow-xl hover:opacity-90 transition-opacity"
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

const InputField = ({ id, label, value, onChange, placeholder, type = 'text' }) => (
  <div>
    <label htmlFor={id} className="block text-white mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 bg-black/20 border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
      placeholder={placeholder}
    />
  </div>
);

const ContactInfo = ({ icon, title, detail, href }) => (
  <div className="flex items-start space-x-4">
    <div className="text-3xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-400">{title}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-neon-cyan">
          {detail}
        </a>
      ) : (
        <p className="text-white">{detail}</p>
      )}
    </div>
  </div>
);

export default ContactSection;
