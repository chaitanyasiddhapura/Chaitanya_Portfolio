import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section with Animated Columns */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-y-12 md:gap-y-0">
          <Motion.div
            className="md:w-2/5 pr-8 space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h3 className="text-2xl font-bold text-blue-400">Chaitanya Siddhapura</h3>
            <p className="text-gray-400 leading-relaxed">
              Crafting exceptional digital experiences with modern technologies. 
              Helping startups and enterprises build products that users love.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com/chaitanyasiddhapura" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-300 group" aria-label="GitHub" target='_blank'>
                <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/chaitanya-siddhapura-998645252/" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-300 group" aria-label="LinkedIn" target='_blank'>
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="mailto:chaitanyasiddhapura06@gmail.com" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-300 group" aria-label="Email">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </Motion.div>

          {/* Quick Links */}
          <Motion.div
            className="md:w-1/5 px-4 space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </Motion.div>

          {/* Services */}
          <Motion.div
            className="md:w-1/5 pl-4 space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h4 className="text-xl font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Full-Stack Solutions</span></li>
              <li><span className="text-gray-400">SaaS Development</span></li>
              <li><span className="text-gray-400">Business Automation With AI</span></li>
              <li><span className="text-gray-400">Customized Chatbot</span></li>
              <li><span className="text-gray-400">UI/UX Design</span></li>
              <li><span className="text-gray-400">Technical Consulting</span></li>
            </ul>
          </Motion.div>
        </div>

        {/* Bottom Section */}
        <Motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center text-center space-y-2 py-2">
              <div className="flex flex-wrap justify-center items-center space-x-2 text-gray-400 text-sm">
                <span>© 2025 Software Engineer. Made with</span>
                <span className="text-white font-semibold">Chaitanya & auzora.ai</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in Gujarat, India</span>
              </div>
          </div>
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer;
