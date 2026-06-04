import React from "react";

function Projects() {
    return(
    <div className="project">
        <h1 className="project-head">
          My  <span className="head-color">  Projects</span>
        </h1>

        <div class="project">
            <div className="project-sub">
                <h3>Personal Portfolio Website</h3>
                <p>
                    A personal portfolio website developed using React, JavaScript, HTML, and CSS in VS Code. 
                    The project showcases clean design principles,and a fully responsive layout. 
                    Built with React components for modularity and reusability.
                </p>
            </div>
        </div>

         <div class="project">
            <div className="project-sub">
                <h3>TestApp</h3>
                <p>
                    A React + Redux project built during my internship, featuring a complete authentication
                    system with login, OTP verification, and password reset functionality. 
                    This project helped me strengthen my understanding of state management, component structure, 
                    and secure user flows.
                </p>
            </div>
        </div>

        <div class="project">
            <div className="project-sub">
                <h3>SmartLab</h3>
                <p>
                    An educational software for institutions, built with Python, MySQL, HTML, CSS, and 
                    Flutter. It includes both a web app and a website, showcasing full-stack development
                    and cross-platform functionality.


                </p>
            </div>
        </div>

        
        <div class="project">
            <div className="project-sub">
                <h3>Mini E-Commerce Website</h3>
                <p>
                    Built a simple e-commerce platform using HTML, CSS, and SQL, featuring user login, 
                    product catalog, and a basic checkout flow. This project gave me hands-on practice
                    with web design and database integration while applying core development concepts.

                </p>
            </div>
        </div>
        
    </div>
    );
    
}

export default Projects;