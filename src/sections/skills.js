import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="skill-head">Skills</h1>

      <div className="skill-container">
        {/* React */}
        <div className="skill-sub">
          <div className="skill-icon-head">
            <i className="bx bxl-react"></i>
            <h2>React</h2>
          </div>
        </div>

        {/* HTML */}
        <div className="skill-sub">
          <div className="skill-icon-head">
            <i className="bx bxl-html5"></i>
            <h2>HTML</h2>
          </div>
        </div>

        {/* CSS */}
        <div className="skill-sub">
          <div className="skill-icon-head">
            <i className="bx bxl-css3"></i>
            <h2>CSS</h2>
          </div>
        </div>

        {/* JavaScript */}
        <div className="skill-sub">
          <div className="skill-icon-head">
            <i className="bx bxl-javascript"></i>
            <h2>JavaScript</h2>
          </div>
        </div>

        {/* NodeJS */}
        <div className="skill-sub">
          <div className="skill-icon-head">
            <i className="bx bxl-nodejs"></i>
            <h2>NodeJS</h2>
          </div>
        </div>

        {/* Python */}
        <div className="skill-sub">
          <div className="skill-icon-head">
            <i className="bx bxl-python"></i>
            <h2>Python</h2>
          </div>
        </div>

        {/* MySQL */}
        <div className="skill-sub">
          <div className="skill-icon-head">
            <i className="bx bxl-mysql"></i>
            <h2>MySQL</h2>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;