import React from 'react';

function About() {
  return (
    <div id="about" className="about">

      <div className="about-left">
        <h1 className="about-head">
          About <span className="head-color">Me</span>
        </h1>
      </div>
      <div className='about-sub'>
        <div className='about-right'>
          <p className="about-para">
            Hi there! I'm Hadiya, a <span className="head-color"> final-year BCA student</span> aiming to become a <span className="head-color"> Full-Stack developer.</span>
             I'm genuinely interested in creating user-friendly and engaging websites using React, HTML, CSS, and JavaScript.
            <br /><br />
            I enjoy exploring how ideas can be transformed into simple, functional websites that are useful. 
            To grow my skills, I actively look for <span className="head-color"> opportunities</span> through internships and workshops, 
            where I can learn from talented teams and <span className="head-color"> contribute to real-world projects.</span>
            <br /><br />
            <span className="head-color">My goal </span> is to keep improving step by step and eventually become a confident full-stack developer.
            I'm open to learning, collaborating, and sharing ideas!So, Go ahead
             and <span className="head-color">Checkout my portfolio!</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;