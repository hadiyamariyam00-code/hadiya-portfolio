import React from "react";

function Home() {
  return (
    <div className="home">
      <span className="hero-eyebrow">Hi, I'm</span>
      <h1 className="head-one">
        <span className="head-color">Hadiya Mariyam</span>
      </h1>
      <h2 className="head-two">
        <span className="head-color">FRONT-END DEVELOPER (FRESHER) </span>
      </h2>
      <p className="home-para">
        Focused on building responsive, accessible, and user-friendly web experiences with modern web technologies
      </p>

      <div className="social-media">
        <a href="mailto:hadiyaamariyam@gmail.com">
          <div className="icon-container">
            <i className="bx bxl-gmail"></i>
          </div>
        </a>
        <a href="https://github.com/hadiyamariyam00-code">
          <div className="icon-container">
            <i className="bx bxl-github"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/hadiya-mariyam">
          <div className="icon-container">
            <i className="bx bxl-linkedin-square"></i>
          </div>
        </a>
      </div>

      <div className="hero-buttons">
        <a href="#about">
          <button className="about-btn">About Me⬇</button>
        </a>

        
      </div>
    </div>
  );
}

export default Home;