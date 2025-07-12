import React from "react";
import { FaCode, FaServer, FaUsers, FaBook } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const experienceData = [
    {
    company: "Ai & Machine Learning Intern",
    role: "Kodacy",
    duration: "7 months",
    skills: "Python, AI, Machine Learning, NLP",
    outcomes: [
      "Participated in an internship program focused on AI fundamentals, machine learning, and natural language processing.",
      "Completed technical assignments and built projects like a chatbot and AI game-playing models.",
      "Gained hands-on experience with Python, regression, neural networks, and algorithms like XGBoost under expert guidance",
    ],
    logo: "K",
  },
    {
    company: "Ayelite Technologies",
    role: "Software Development Intern",
    duration: "1.5 month",
    skills: "Js, TypeScript, Ionic Framework, Google Maps API",
    outcomes: [
      "Participated in an internship focused on hybrid mobile app development using the Ionic framework and TypeScript.",
      "Worked on a project integrating Google Maps into a mobile application.",
      "Improved skills in cross-platform app development and real-world API integration.",
    ],
    logo: "A",
  },
  {
    company: "CreArt Solution",
    role: "Software Development Intern",
    duration: "1.5 Month",
    skills: "MERN Stack",
    outcomes: [
      "Worked on MERN stack projects during a 1.5 month internship",
      "Completed tasks and participated in training sessions",
      "Gained practical exposure to full-stack web development under professional mentorship",
    ],
    logo: "C",
  },
  {
    company: "TatvaSoft",
    role: "Software Development Intern",
    duration: "1 Month",
    skills: ".NET, Angular, C#, PostgreSQL",
    outcomes: [
      "Worked on tasks related to .NET and Angular technologies",
      "Demonstrated sincere effort and a strong willingness to learn",
      "Gained hands-on experience in web development during a short-term internship",
    ],
    logo: "T",
  },
 {
    company: "Auzora.ai",
    role: "Founder & SaaS Builder",
    duration: "2025 – Present",
    skills: "React, Stripe, AI APIs",
    outcomes: [
      "Smart AI Tools for writing, coding, tasks, and research — all in one place.",
      "Boosts productivity by acting as your personal digital assistant.",
      "Automates business workflows with powerful AI agents for creators, developers, and entrepreneurs."
    ],
    logo: "A",
  },
  {
    company: "Freelance Projects",
    role: "Full Stack Developer",
    duration: "2024 – Present",
    skills: "MERN Stack, Tailwind, Firebase",
    outcomes: [
      "Delivered 2+ custom SaaS dashboards",
      "Built branding sites for coaches & businesses",
      "Helped 2+ clients grow online presence",
    ],
    logo: "H",
  },
  {
    company: "Open for New Projects",
    role: "Freelance & Remote",
    duration: "Available Now ✅",
    skills: "MERN Stack, AI & ML, Cloud ",
    outcomes: [
      "Happy to join exciting product teams",
      "Can build MVPs from idea to launch",
      "Let’s collaborate — 2+ happy clients so far!",
    ],
    logo: "H",
  },
];

const WorkExperience = () => {

  return (
    <Motion.section
      className="relative text-white px-6 py-16 max-w-7xl mx-auto scroll-mt-28"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, amount: 0.05 }}
      // viewport={{ once: false, amount: 0.05 }}

    >
      {/* <CursorGlow /> */}

      {/* Background Blobs */}
      <div className="absolute -top-20 -left-10 w-[400px] h-[400px] bg-gradient-to-r from-purple-500 via-blue-500 to-transparent opacity-30 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-gradient-to-br from-blue-500 via-purple-600 to-transparent opacity-25 rounded-full blur-2xl z-0 animate-[float_6s_ease-in-out_infinite]" />

      <div className="relative z-10">
        {/* Heading */}
        <Motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-400 text-lg">
            I'm a passionate software engineer who transforms ideas into
            exceptional digital experiences. With a focus on clean code, modern
            design, and cutting-edge technology.
          </p>
          <p className="text-purple-400 font-semibold mt-2 text-sm">
            ✨ Currently open for freelance & SaaS collaborations
          </p>
        </Motion.div>

        {/* Stats */}
        <Motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "🏢",
              title: "4+ Companies",
              desc: "Worked at MNCs & startups",
            },
            {
              icon: "🧠",
              title: "Full-Stack Skills",
              desc: "MERN, AI & ML & more",
            },
            {
              icon: "⏳",
              title: "11+ month Experience",
              desc: "Real-world software delivery",
            },
            {
              icon: "🤝",
              title: "Team & Solo Projects",
              desc: "Adaptable to any work environment",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#1c1c24] rounded-xl p-6 border border-gray-700 text-center hover:shadow-lg transition"
            >
              <div className="text-3xl text-blue-400 mb-2">{stat.icon}</div>
              <h4 className="text-xl font-bold">{stat.title}</h4>
              <p className="text-gray-400 text-sm">{stat.desc}</p>
            </div>
          ))}
        </Motion.div>

        {/* Experience Cards */}
        <Motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceData.map((exp, index) => (
            <Motion.div
              key={index}
              className="bg-[#1c1c24] rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold flex items-center justify-center text-sm">
                    {exp.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className="text-sm text-gray-400">{exp.role}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300">{exp.duration}</span>
              </div>

              <p className="text-sm text-gray-300 mb-3">
                <span className="text-gray-400">Technologies: </span>
                <span className="font-medium">{exp.skills}</span>
              </p>

              <ul className="space-y-2 mb-4">
                {exp.outcomes.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                onClick={() => {
                  if (exp.company === "Freelance Projects" || exp.company === "Open for New Projects") {
                    window.open("https://github.com/chaitanyasiddhapura", "_blank");
                  }
                }}
                className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded-lg font-medium text-white transition flex items-center justify-center gap-2 text-sm"
              >
                {exp.company === "Freelance Projects"
                  ? "View Projects"
                  : exp.company === "Open for New Projects"
                  ? "My Approach"
                  : "👆 Role Details"}
              </button>

              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-2 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 text-sm"
              >
                {exp.company === "Open for New Projects" ? "Contact Me" : "Work Together"}
              </button>
            </div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Career Starter */}
        <Motion.div
          className="bg-[#1c1c24] rounded-xl p-8 mt-20 text-center shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-3">
            Ready to Start My Career Journey
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm a passionate fresher with strong foundational skills and
            eagerness to learn. Looking for opportunities to grow and contribute
            to innovative projects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm text-gray-300">
            <div className="flex flex-col items-center">
              <FaCode className="text-xl mb-1 text-purple-400" />
              Frontend
              <br />
              React, TypeScript
            </div>
            <div className="flex flex-col items-center">
              <FaServer className="text-xl mb-1 text-purple-400" />
              Backend
              <br />
              Node.js, APIs
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-xl mb-1 text-purple-400" />
              Collaboration
              <br />
              Git, Teamwork
            </div>
            <div className="flex flex-col items-center">
              <FaBook className="text-xl mb-1 text-purple-400" />
              Learning
              <br />
              Always Growing
            </div>
          </div>
          <button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-6 rounded-lg font-semibold text-white hover:scale-105 transition"
          >
            Let's Connect
          </button>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default WorkExperience;