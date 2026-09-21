import React from "react";

function Navbar() {
  return (
    <header className="navbar">
        <a href="#home" className="logo">Hadiya.</a>
      <nav className="nav-links">
        <a href="#about">About </a>
        <a href="#skills">Skills</a>
        <a href="#projects"> Projects</a>
        <a href="#contact">Contact</a>
        {/* <a href="/resume.pdf" download>Resume⬇</a> */}
      </nav>
    </header>
  );
}

export default Navbar;

        
