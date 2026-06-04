import React from "react";

function Contact() {
    return (
        <div className="home">
            <h1 className="contact-head">
                Get in touch <br/><span className="head-color">With Me</span> 
            </h1>
            
            <div className="contact">
                <div className="contact-form">
                    <form className="contact-input">
                        <label htmlFor="name"> Name</label><br/>
                        <input type="text" id="name" placeholder="Enter your name" className="contact-input" /><br/>

                        <label htmlFor="email">Email </label><br/>
                        <input type="email" id="email" placeholder="Enter your email" className="contact-input" /><br/>

                        <label htmlFor="subject">Subject</label><br/>
                        <input type="text" id="subject" placeholder="Message subject" className="contact-input" /><br/>

                        <label htmlFor="message">Message</label><br/>
                        <textarea id="message" placeholder="Write your message here..." className="contact-input"></textarea><br/>

                        <button id="send"> Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;