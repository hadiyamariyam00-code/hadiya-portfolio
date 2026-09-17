import React from 'react';
import '../style.css';
import photo1 from '../assets/images/photo1.png'; // update path to your actual photo

function About() {
  return (
    <div id="about" className="about">
      <h1 className="about-title">About <span className="head-color">Me</span></h1>
      <p className="about-subtitle"></p>

      <div className="about-card">
        <div className="about-text">
          <p className="about-para">
          
            I’m a <span className="head-color">Frontend Developer</span> skilled in <span className="head-color"> React.js, HTML, and CSS, </span> 
            with experience building<span className="head-color"> responsive, component-based </span>web applications through academic and self-driven projects. 
            <br/>
            I interned as a <span className="head-color">Frontend Developer</span> at Bitflies Evolve, Kozhikode, building reusable UI components within a 
            real production codebase, and also as a <span className="head-color"> Python Developer </span> at Regional Technologies, gaining hands-on experience with Python and Django.
              For my final-year project, I worked in a team of four to build <span className="head-color"> SmartLab </span>, a full-stack lab management system.
              My teammate and I built the web app (Python, Django, MySQL, JS) while two others built a Flutter companion app.
            <br/>
            I completed my <span className="head-color"> BCA </span> at <span className="head-color">SAFI Institute of Advanced Study,</span> Kozhikode, in April 2026,
            and I'm now looking for opportunities where I can keep growing, contribute to a team, and build meaningful web experiences.
        </p>
        </div>

        <div className="about-photo-wrap">
          <img src={photo1} alt="Hadiya Mariyam" className="about-photo" />
        </div>
      </div>
    </div>
  );
}

export default About;