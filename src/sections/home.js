import React from "react";
import photo1 from '../assets/images/photo1.png';

function Home() {
    return (
        <div className="home">
      <div className="home-left">
        <h1 className="head-one">
          Hi, I'm  <br /> <span className="head-color">Hadiya Mariyam!</span>
        </h1>
        <h2 className="head-two">
          I'm focused on becoming a <span className="head-color">Software Developer.</span>
        </h2>
        <p className="home-para">
          My goal is to grow into a full-stack professional,
          mastering both frontend and backend technologies to build innovative, 
          user-friendly projects that deliver meaningful impact.
        </p>

        <div className="social-media">
          
          <a href="mailto:hadiyamariyam00@gmail.com">
            <div className="icon-container">
              <i className="bx bxl-gmail"></i></div>
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

        <a href="#contact">
          <button className="contact-btn">Contact</button>
        </a>
      </div>

      <div className="home-right">
        <img src={photo1} alt="Hadiya" />
      </div>
    </div>
  );
}

export default Home;