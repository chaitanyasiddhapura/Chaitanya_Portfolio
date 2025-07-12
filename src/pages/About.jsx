import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import "./About.css"; 

const techStack = [
  "React.js", "TypeScript", "Next.js", "Node.js", "PostgreSQL",
  "MongoDB", "Tailwind CSS", "Framer Motion", "AWS", "Docker",
  "GraphQL", "REST APIs", "Python", "SaaS Automation"
];

const features = [
  {
    title: "Backend Development",
    description: "Efficient server-side architecture and API design for optimal performance and data handling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
  },
  {
    title: "Frontend Development",
    description: "Dynamic and responsive user interfaces designed for an exceptional user experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="m18 16 4-4-4-4"/>
        <path d="m6 8-4 4 4 4"/>
        <path d="m14.5 4-5 16"/>
      </svg>
    ),
  },
  {
    title: "AI/ML Development",
    description: "Advanced machine learning model development and deployment for data-driven insights and automation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
      </svg>
    ),
  },
  {
    title: "Startup Ready",
    description: "Launched 2+ MVPs from concept to market using rapid iteration and user-driven development.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M8 2v4"/>
        <path d="M16 2v4"/>
        <rect width="18" height="18" x="3" y="4" rx="2"/>
        <path d="M3 10h18"/>
      </svg>
    ),
  },
];

const education = [
  {
    degree: "Diploma in Computer Engineering",
    institution: "Gujarat Technological University (GTU)",
    duration: "2020 – 2023",
  },
  {
    degree: "B.Tech in Information Communication Technology ",
    institution: "Government Engineering College (GEC) Bhavnagar",
    duration: "2022 – 2026",
  },
];

const About = () => {
  const aboutRef = useRef(null);
  const [localCursor, setLocalCursor] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const updateLocalCursor = (e) => {
      const bounds = aboutRef.current?.getBoundingClientRect();
      if (!bounds) return;

      setLocalCursor({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    };

    const aboutElement = aboutRef.current;
    if (aboutElement) {
      aboutElement.addEventListener("mousemove", updateLocalCursor);
      aboutElement.addEventListener("mouseleave", () =>
        setLocalCursor({ x: -500, y: -500 })
      );
    }

    return () => {
      if (aboutElement) {
        aboutElement.removeEventListener("mousemove", updateLocalCursor);
        aboutElement.removeEventListener("mouseleave", () =>
          setLocalCursor({ x: -500, y: -500 })
        );
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="relative overflow-hidden text-white min-h-screen py-16 px-6 bg-[#0a0e1a]"
    >
      {/* Glow effect inside About section only */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(400px at ${localCursor.x}px ${localCursor.y}px, rgba(138, 82, 234, 0.12), transparent 80%)`,
          transition: "background 0.1s ease",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to right, #6974DC, #6C4FA4)" }}
            >
              Me
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Passionate about creating digital solutions that make a difference. I combine
            technical expertise with business understanding to deliver exceptional results.
          </p>
        </Motion.div>

        {/* Journey and Tech Stack */}
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-6">
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-5">The Journey So Far</h2>
              <p className="text-gray-400 leading-relaxed mt-3">
                Started coding in college and quickly got hooked on solving real-world problems with technology. I’ve been learning and building ever since — focusing on clean, efficient, and impactful solutions.
              </p>
              <p className="text-gray-400 leading-relaxed mt-3">
                Lately, I’ve been exploring automation and building SaaS tools to simplify tasks, boost productivity, and create smarter systems that save time.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Motion.span
                    key={index}
                    className="px-4 py-2 bg-[#081122] glass-card text-sm text-white hover:bg-white/10 transition-colors cursor-default shadow-md hover:shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </Motion.span>
                ))}
              </div>
            </Motion.div>
          </div>

          {/* Features */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Motion.div
                key={index}
                className="glass-card p-6 rounded-xl bg-[#0A1223] hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6">Education</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {education.map((edu, index) => (
              <Motion.div
                key={index}
                className="glass-card p-5 rounded-xl w-full md:w-1/2 bg-[#080D1A] hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500 text-sm mt-1">{edu.duration}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
