import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

const Home = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const stars = [
    [65, 90, 1, 0.7, "2.8s"],
    [70, 45, 1, 0.8, "1.8s"],
    [75, 15, 1.5, 0.6, "0.8s"],
    [80, 75, 1, 0.9, "2.3s"],
    [85, 35, 1, 0.7, "1.3s"],
    [50, 95, 1, 0.8, "0.4s"],
    [12, 25, 1, 0.85, "1.9s"],
    [22, 65, 1, 0.75, "0.9s"],
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0b0c10] text-white overflow-hidden">
      {/* Grid Reveal Background */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-200 ease-out"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 39px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 39px)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage: `radial-gradient(circle 120px at ${position.x}px ${position.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)`,
          maskImage: `radial-gradient(circle 120px at ${position.x}px ${position.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          opacity: 0.6,
          zIndex: 1,
          filter: "blur(0.3px)",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        {stars.map(([top, left, size, opacity, delay], i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white blur-sm animate-float"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size * 4}px`,
              height: `${size * 4}px`,
              opacity,
              animationDelay: delay,
            }}
          />
        ))}
      </div>

      {/* Background Image Mask */}
      <div
        className="absolute inset-0 bg-[url('./assets/background.svg')] bg-cover bg-center transition-all duration-200 ease-out pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle 120px at ${position.x}px ${position.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)`,
          maskImage: `radial-gradient(circle 120px at ${position.x}px ${position.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          opacity: 0.8,
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1]" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[60%] right-[15%] w-20 h-20 md:w-24 md:h-24 bg-purple-500/15 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-16 h-16 md:w-20 md:h-20 bg-indigo-500/12 rounded-full blur-lg animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Hero Content */}
      <Motion.div
        className="relative z-10 max-w-3xl lg:max-w-4xl mx-auto text-center pt-28 md:pt-36 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Motion.p
          variants={fadeInUp}
          custom={1}
          className="inline-block mb-4 px-4 py-1 rounded-full bg-[#10142C]/80 backdrop-blur-sm text-xs md:text-sm font-medium text-white/80 border border-white/10"
        >
          ✨ Available for new projects
        </Motion.p>

        <Motion.h1
          variants={fadeInUp}
          custom={2}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
        >
          Hi, I'm a <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 text-transparent bg-clip-text animate-pulse">
            Software Engineer
          </span>
        </Motion.h1>

        <Motion.p
          variants={fadeInUp}
          custom={3}
          className="mt-4 text-base md:text-lg text-gray-400 font-medium"
        >
          Crafting smart code & powerful Interfaces.
        </Motion.p>

        <Motion.p
          variants={fadeInUp}
          custom={4}
          className="mt-2 text-sm text-white/70 max-w-lg md:max-w-xl mx-auto"
        >
          I build exceptional digital experiences for startups and enterprises. From MVP to scale, I create applications that users love and businesses depend on.
        </Motion.p>

        <Motion.div
          variants={fadeInUp}
          custom={5}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-white font-medium transform hover:scale-105"
          >
            View My Work →
          </a>
          <a
            href="/SDE_Chaitanya-Siddhapura.pdf"
            className="px-6 py-2 rounded-full bg-[#14141f]/80 backdrop-blur-sm border border-white/10 hover:border-purple-500 transition-all duration-300 text-white font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            target="_blank"
            rel="noopener noreferrer"
          >
            &lt;/&gt; Download CV
          </a>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Home;
