import { Route, Routes } from "react-router-dom";
import "./App.css";
import Foooter from "./components/layout/Foooter";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesSection from "./components/sections/ServicesSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSections from "./components/sections/ContactSections";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSections />} />
      </Routes>
      <Foooter />
    </>
  );
}

export default App;
