import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Download,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "e812fcf7-179b-42cb-b8f2-6ed80d8e0362"; 

const ContactSection = () => {
  const [cursor, setCursor] = useState({ x: -500, y: -500 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const StatusMessage = ({ type }) => {
    if (type === "success") {
      return (
        <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
          <CheckCircle className="w-5 h-5" />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      );
    }
    if (type === "error") {
      return (
        <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          <AlertCircle className="w-5 h-5" />
          <span>Please fill in all fields correctly or try again later.</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-[#0f172a] via-[#0a0a0a] to-black text-white"
    >
      {/* 🎯 Scoped Glow Cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(400px at ${cursor.x}px ${cursor.y}px, rgba(100, 61, 255, 0.1), transparent 80%)`,
          transition: "background 0.05s ease",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6974DC] to-[#6C4FA4]">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a bold idea or project? Let's build something remarkable
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Send me a message</h3>
              <p className="text-gray-400">I'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur border border-white/10 shadow-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur border border-white/10 shadow-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Project inquiry"
                className="w-full px-4 py-3 bg-black/30 backdrop-blur border border-white/10 shadow-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-black/30 backdrop-blur border border-white/10 shadow-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              />
              <input type="hidden" name="botcheck" style={{ display: "none" }} />

              <StatusMessage type={submitStatus} />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-105 active:scale-95"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
              <p className="text-gray-400">Prefer a direct approach? Reach me at:</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  Icon: Mail,
                  title: "Email",
                  value: "chaitanyasiddhapura06@gmail.com",
                  href: "mailto:chaitanyasiddhapura06@gmail.com",
                },
                {
                  Icon: Phone,
                  title: "Phone",
                  value: "+91 (972) 442-0417",
                  href: "tel:+919724420417",
                },
                {
                  Icon: MapPin,
                  title: "Location",
                  value: "Gujarat, India",
                  href: null,
                },
              ].map(({ Icon, title, value, href }, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all"
                >
                  <Icon className="text-blue-400 w-6 h-6" />
                  <div>
                    <p className="text-sm text-gray-400">{title}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/chaitanyasiddhapura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-300 border border-white/5 flex items-center gap-2 hover:-translate-y-1"
                >
                  <Github className="w-6 h-6" />
                  <span className="font-light">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/chaitanya-siddhapura-998645252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-300 border border-white/5 flex items-center gap-2 hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-light">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6E45E2] to-[#88D3CE] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-[#0F0F1A] to-[#1A1A2E] backdrop-blur-sm p-8 border border-white/5 group-hover:border-transparent transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#6E45E2]/10 rounded-lg text-[#6E45E2]">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Download Resume
                    </h4>
                    <p className="text-gray-400/80 font-light mb-6">
                      Review my professional experience, skills, and
                      achievements in detail.
                    </p>
                    <a
                      href="../src/assets/SDE_Chaitanya-Siddhapura.pdf"
                      download
                      className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#6E45E2] to-[#7D5BDE] rounded-lg text-white hover:shadow-lg transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;