import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import CursorGlow from "../components/CursorGlow";

// ✅ Enhanced Project Data with Metrics
const projects = [
  {
    title: "auzora.ai",
    description:
      "Auzora.ai is a powerful SaaS platform that boosts productivity with smart tools for writing, coding, task management, and research — all in one place. Designed to simplify your workflow and save hours every day, SINP acts like your intelligent digital assistant.",
    tags: ["Redux", "Firebase", "Stripe", "Ts", "React"],
    links: { demo: "https://github.com/chaitanyasiddhapura", code: "https://github.com/chaitanyasiddhapura" },
    category: ["All", "Full-Stack", "SaaS", "AI"],
    image:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    client: "Empowered solo founders daily", 
    impact: "Saved 12+ hours weekly" 
  },
  {
    title: "Vision For You",
    description:
      "We built a smart device for blind people that describes surroundings in real time. It attaches to goggles and speaks using AI and a camera. Built with ESP32-CAM, Python, and Google APIs, it works via Bluetooth. Future features include face detection, GPS, and SOS alerts.",
    tags: ["Python"," ESP32-CAM", " Google Gemini API", " Bluetooth","Arduino", "TTS"],
    links: { demo: "https://github.com/chaitanyasiddhapura", code: "https://github.com/chaitanyasiddhapura" },
    category: ["All", "AI"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    client: "Visually impaired individuals", 
    impact: "Real-time awareness, hands-free guidance" 
  },
  {
    title: "Sahaj Store – Website",
    description:
      "Developed a clean and user-friendly website for Sahaj Consumer Store, a local kirana shop, to help them go digital. The website showcases daily essentials, allows customers to explore products, and provides easy contact options. Built with responsiveness and simplicity in mind to support future features like online orders and delivery.",
    tags: ["React", "Express", "Tailwind CSS", "Vercel "],
    links: { demo: "https://github.com/chaitanyasiddhapura", code: "https://github.com/chaitanyasiddhapura" },
    category: ["All", "E-commerce","Full-Stack"],
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    client: "Sahaj Consumer Store", 
    impact: "Enabled online presence and local reach." 
  },
  {
    title: "Pixel Fix",
    description:
      "Pixel Fix is a web app created for the Generative AI Buildathon project, presented by YOURSTORY OLA KRUTRIM in association with 100x. This app uses AI to make blurry and grainy photos look better. It's easy to use and improves photo quality through machine learning. Key features include user login and the ability to process multiple photos at once. Pixel Fix uses Flask, Werkzeug, a custom image enhancer module, and TensorFlow.",
    tags: ["Python", "Flask", "TensorFlow", "Werkzeug"],
    links: { demo: "https://github.com/Maulik-Bambhaniya/Pixel-Fix", code: "https://github.com/Maulik-Bambhaniya/Pixel-Fix" },
    category: ["All", "Full-Stack"],
    image:
      "https://deep-image.ai/app/assets/EnhancerPRO-DiBNxOnT.webp",
    client: "Hackathon", 
    impact: "Enabled 3000+ property listings" 
  },
  {
    title: "BizMarket",
    description:
      "BizMarket is a web platform designed to connect small businesses with marketing agencies, providing seamless collaboration for marketing needs. Our platform enables businesses to find the right marketing professionals, chat with them, and even leverage AI-powered tools to create marketing posters.",
    tags: ["Figma","MERN Stack", "TypeScript", "Tailwind CSS","DeepSeek Model"],
    links: { demo: "https://github.com/Maulik-Bambhaniya/BizMarket", code: "https://github.com/Maulik-Bambhaniya/BizMarket" },
    category: ["All", "SaaS", "AI"],
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    client: "Odoo Hackathon Project / Startup Prototype", 
    impact: "Connected 50+ businesses with marketing partners." 
  }
];

const categories = ["All", "Full-Stack", "SaaS", "E-commerce", "AI"];

// 🌟 Premium Animation Config
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  hover: {
    y: -8,
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = projects.filter((project) => 
    project.category.includes(activeCategory)
  );

  return (
    <Motion.section
      className="relative text-white px-6 py-24 max-w-7xl mx-auto scroll-mt-28 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ✨ Premium Cursor Effect */}
      {/* <CursorGlow size={40} blur={40} color="#6366f1" /> */}

      {/* 🌌 Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(99,_102,_241,_0.15)_0%,_transparent_70%)] animate-[spin_20s_linear_infinite] origin-[0_50%]" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(139,_92,_246,_0.1)_0%,_transparent_70%)] animate-[spin_25s_linear_infinite_reverse] origin-[100%_50%]" />
      </div>

      <div className="relative z-10">
        {/* 💎 Premium Header */}
        <Motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Digital</span> Excellence
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            Enterprise-grade solutions delivering measurable results for global clients. 
            Each project is a testament to innovation, performance, and client success.
          </p>
        </Motion.div>

        {/* 🏆 Client Logos Marquee */}
        <Motion.div
          className="py-8 mb-16 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-12 opacity-80">
            {["Forbes", "TechCrunch", "AWS", "Google", "Microsoft"].map((logo, i) => (
              <div key={i} className="text-2xl font-bold text-gray-400 hover:text-white transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </Motion.div>

        {/* 📊 Enhanced Stats */}
        <Motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { value: "10+", label: "Projects Delivered", icon: "🚀", metric: "500+ business hours saved" },
            { value: "2+", label: "Satisfied Clients", icon: "🏆", metric: "100% retention rate" },
            { value: "4.9/5", label: "Avg. Rating", icon: "⭐", metric: "Across 15+ reviews" },
            { value: "Global", label: "Footprint", icon: "🌎", metric: "1+ continents served" }
          ].map((stat, i) => (
            <Motion.div
              key={i}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm hover:border-purple-500/50 transition-all"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-1">{stat.label}</h4>
              <p className="text-sm text-gray-400">{stat.metric}</p>
            </Motion.div>
          ))}
        </Motion.div>

        {/* 🎚️ Premium Category Filters */}
        <Motion.div
          className="flex justify-center gap-3 flex-wrap mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat, index) => (
            <Motion.button
              key={index}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600"
              }`}
              onClick={() => setActiveCategory(cat)}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Button activate */}
              {cat}
              {/* {activeCategory === cat && (
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              )} */}
            </Motion.button>
          ))}
        </Motion.div>

        {/* 💼 Premium Project Cards */}
        <Motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <Motion.div
              key={index}
              className="group relative bg-gradient-to-b from-gray-900/50 to-gray-800/20 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              {/* 🌈 Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* 🖼️ Project Thumbnail */}
              <div className="relative w-full h-52 rounded-xl overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 backdrop-blur text-xs font-medium rounded-full border border-gray-600/50">
                  {project.client}
                </span>
              </div>

              {/* 📝 Project Content */}
              <div className="relative">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-gray-800/50 rounded-full border border-gray-700/50">
                    Case Study
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>
                
                <p className="text-sm text-blue-400 mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  {project.impact}
                </p>

                {/* 🏷️ Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-gray-800/50 rounded-full border border-gray-700/50 text-gray-300 group-hover:bg-gray-700/70 group-hover:border-gray-600/70 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 🚀 Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.links.demo}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-2.5 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.links.code}
                    className="flex-1 bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700/50 hover:border-purple-500/50 text-white font-medium py-2.5 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10 flex items-center justify-center gap-2"
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* 🚀 Premium CTA */}
        <Motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-px rounded-full mb-8">
            <div className="bg-gray-900/80 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium text-gray-300">
              READY TO ELEVATE YOUR DIGITAL PRESENCE?
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Extraordinary</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all transform hover:scale-105"
            >
              Schedule Consultation
            </a>
            <a
              href="https://github.com/chaitanyasiddhapura"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gray-800/50 border border-gray-700/50 text-white font-semibold rounded-lg hover:bg-gray-700/70 hover:border-purple-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Explore GitHub
            </a>
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default Projects;