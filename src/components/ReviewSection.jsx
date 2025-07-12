import React, { useState, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { motion as Motion, useInView, AnimatePresence } from "framer-motion";
const allReviews = [
  {
    id: 1,
    name: "Pratik Makwana ",
    role: "Sunlight Machine Tools",
    message: "Chaitanya did a great job building our website. He understood our business needs and created a clean and professional site to showcase all our jewellery tools and machines. The work was delivered on time, and he was very supportive throughout the process. Highly recommended for anyone looking to take their business online.",
    avatar: "../src/assets/client.png",
    rating: 5,
    accentColor: "bg-purple-500",
    type: "client",
    date: "2023-10-15"
  },
  {
    id: 2,
    name: "Pratham Langaliya",
    role: "Innovative Programmer",
    message: "I highly recommend Chaitanya Siddhapura for his consistent contributions, clean code,AI/ML specialist, and excellent understanding of web development.His work on this repository has been instrumental in achieving project goals efficiently and with high quality",
    avatar: "../src/assets/prathm.jpeg",
    rating: 5,
    accentColor: "bg-emerald-500",
    type: "collaborator",
    date: "2023-09-22"
  },
    {
    id: 3,
    name: "Het Siddhapura",
    role: "Software Development Engineer",
    message: "Chaitanya is a highly dedicated and creative individual I've had the pleasure of working with on both personal and professional web development projects. His consistency, attention to detail, and calm approach under pressure make him stand out. He is technically strong, intellectually curious, and professionally mature—an asset to any team.",
    avatar: "../src/assets/Het.jpeg",
    rating: 5,
    accentColor: "bg-rose-500",
    type: "collaborator",
    date: "2024-07-25"
  },
  {
    id: 4,
    name: "Arman Sama",
    role: "GDG On Campus UI/UX, Design & PR Lead",
    message: "I’ve worked with Chaitanya on multiple hackathons, and he’s been a key part of our success. He handled the backend with strong SaaS skills and also kept improving his React knowledge. Chaitanya is smart, focused, and always eager to learn. I highly recommend him.",
    avatar: "../src/assets/Arman.jpeg",
    rating: 5,
    accentColor: "bg-rose-500",
    type: "collaborator",
    date: "2024-07-25"
  },
  {
    id: 5,
    name: "Parth Patel",
    role: "Software Engineer",
    message: "Chaitanya is a skilled and hardworking software developer who has experience with both frontend and backend technologies. He has worked with Paython , MERN stack , and also has knowledge with real time use.",
    avatar: "../src/assets/parth.jpeg",
    rating: 5,
    accentColor: "bg-emerald-500",
    type: "collaborator",
    date: "2024-07-25"
  },
  {
    id: 6,
    name: "Bhautik",
    role: "Sahaj Provision Store",
    message: "We are very happy with the website Chaitanya made for our kirana shop. It’s simple, easy to use, and helps our customers see what we offer. He explained everything clearly and made the whole process smooth. Very honest and helpful developer.",
    avatar: "../src/assets/client.png",
    rating: 4,
    accentColor: "bg-blue-500",
    type: "client",
    date: "2023-08-17"
  },

  {
    id: 7,
    name: "Dhruv Kotadiya",
    role: "Software Engineer",
    message: "I study programming with Chaitanya, and he’s passionate about coding. He understands concepts quickly, writes clean code, and is great at problem-solving. He’s always focused and helps others when needed. I highly recommend him for any programming-related projects.",
    avatar: "../src/assets/dhruv.jpeg",
    rating: 4,
    accentColor: "bg-indigo-500",
    type: "collaborator",
    date: "2025-05-28"
  },
  {
    id: 8,
    name: "Rishi Jagad",
    role: "UI/UX designer",
    message: "I highly recommend Chaitanya Siddhapura for their strong technical skills and team spirit. We've collaborated on OCR and hackathon projects, where their React.js work and problem-solving stood out. A reliable and skilled full-stack developer.",
    avatar: "../src/assets/rishi.jpeg",
    rating: 5,
    accentColor: "bg-indigo-500",
    type: "collaborator",
    date: "2025-05-28"
  },

];

const ReviewSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const reviewsPerPage = 3;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const filteredReviews = filter === "all" ? allReviews : allReviews.filter(r => r.type === filter);
  const indexOfLast = currentPage * reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfLast - reviewsPerPage, indexOfLast);
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  const handleFilter = (type) => {
    setFilter(type);
    setCurrentPage(1);
    setIsFilterOpen(false);
  };

  return (
    <section id="reviews" className="relative py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm py-1 px-3 bg-white/10 text-purple-300 rounded-full mb-4">Testimonials</span>
          <h2 className="text-5xl font-bold mb-4">Voices of <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">Appreciation</span></h2>
          <p className="text-gray-400">Trusted by founders, executives, and collaborators at innovative companies</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10">
              <Filter className="w-4 h-4" /><span>{filter === "all" ? "All Testimonials" : filter === "client" ? "Client Reviews" : "Collaborator Feedback"}</span>
            </button>
            {isFilterOpen && (
              <Motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-12 bg-gray-800 border border-white/10 rounded overflow-hidden shadow-xl z-20">
                {["all", "client", "collaborator"].map(type => (
                  <button key={type} onClick={() => handleFilter(type)} className={`block w-full px-4 py-2 text-left hover:bg-white/10 ${filter === type ? "bg-white/10" : ""}`}>
                    {type === "all" ? "All Testimonials" : type === "client" ? "Client Reviews" : "Collaborator Feedback"}
                  </button>
                ))}
              </Motion.div>
            )}
          </div>
          <div className="text-sm text-gray-400">Showing {indexOfLast - reviewsPerPage + 1}-{Math.min(indexOfLast, filteredReviews.length)} of {filteredReviews.length}</div>
        </div>

        <Motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <AnimatePresence mode="wait"> */}
            {currentReviews.map(review => (
              <Motion.div key={review.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0 } }} initial="hidden" animate="visible" exit="exit" whileHover={{ y: -6 }} className="p-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur shadow-xl">
                <div className={`absolute top-0 left-0 h-1 w-full rounded-t-xl ${review.accentColor}`}></div>
                <Quote className="w-6 h-6 text-white/10 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-4">
                  <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border border-white/20" />
                  <div>
                    <h4 className="font-semibold text-lg text-white">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.role}</p>
                    <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{review.message}"</p>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />)}
                    {[...Array(5 - review.rating)].map((_, i) => <Star key={i + review.rating} className="w-4 h-4 text-gray-600 mr-1" />)}
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">{review.type === "client" ? "Client" : "Collaborator"}</span>
                </div>
              </Motion.div>
            ))}
          {/* </AnimatePresence> */}
        </Motion.div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-full hover:bg-white/10 disabled:text-gray-600">
              <ChevronLeft className="w-5 h-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === i + 1 ? "bg-purple-500 text-white" : "text-gray-400 hover:bg-white/10"}`}>{i + 1}</button>
            ))}
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded-full hover:bg-white/10 disabled:text-gray-600">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;