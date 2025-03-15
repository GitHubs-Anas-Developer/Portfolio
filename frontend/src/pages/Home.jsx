import React from "react";
import Hero from "../components/sections/Hero";
import AboutSection from "./../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSections from "../components/sections/ContactSections";

function Home() {
  return (
    <div className="bg-gradient-to-r from-[#055081] to-[#0177b6]">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection/>
      <ContactSections />
    </div>
  );
}

export default Home;
