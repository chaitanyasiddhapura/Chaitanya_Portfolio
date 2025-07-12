import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ReviewSection from "./components/ReviewSection";
import CursorGlow from './components/CursorGlow';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/WorkExperience.jsx';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="bg-[#0b0c10] text-white scroll-smooth">
      <CursorGlow />
      <Navbar />
      <section id="home" className="scroll-snap-start"><Home /></section>
      <section id="about" className="scroll-snap-start"><About /></section>
      <section id="experience" className="scroll-snap-start"><Experience /></section>
      <section id="projects" className="scroll-snap-start"><Projects /></section>
      <ReviewSection />
      <section id="contact" className="scroll-snap-start"><Contact /></section>
      
      <Footer />
    </div>
  );
};

export default App;
