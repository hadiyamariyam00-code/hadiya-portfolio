import { useState } from "react";

import Navbar from "./sections/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import SmartLabCaseStudy from "./sections/SmartLabCaseStudy";
import "./assets/css/style.css";

function App() {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  if (showCaseStudy) {
    return <SmartLabCaseStudy onBack={() => setShowCaseStudy(false)} />;
  }

  return (
    <div className="main-container">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects">
        <Projects onOpenCaseStudy={() => setShowCaseStudy(true)} />
      </section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;