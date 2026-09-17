import React from "react";
import '../style.css';

function Skills() {
  const technicalSkills = [
    { icon: "bxl-javascript", name: "JavaScript" },
    { icon: "bxl-react", name: "React.js" },
    { icon: "bxl-html5", name: "HTML5" },
    { icon: "bxl-css3", name: "CSS" },
    { icon: "bxl-tailwind-css", name: "Tailwind CSS" },
    { icon: "bx-server", name: "REST API" },
    { icon: "bxl-python", name: "Python (Django)" },
  ];

  const toolsAndDatabase = [
    { icon: "bxl-git", name: "Git" },
    { icon: "bxl-github", name: "GitHub" },
    { icon: "bx bxs-cloud", name: "Vercel" },
    { icon: "bxl-visual-studio", name: "VS Code" },
    { icon: "bx bx-data", name: "MySQL" },
  ];

  return (
    <section id="skills" className="skills">
      <h1 className="skills-title">Skills & <span className="head-color">Tools</span></h1>
      <p className="skills-subtitle">Technologies I work with</p>

      <h2 className="skills-section-head">Technical Skills</h2>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={`bx ${skill.icon} skill-icon`}></i>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>

      <h2 className="skills-section-head">Tools & Database</h2>
      <div className="skills-grid">
        {toolsAndDatabase.map((tool, index) => (
          <div className="skill-card" key={index}>
            <i className={`bx ${tool.icon} skill-icon`}></i>
            <p className="skill-name">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;