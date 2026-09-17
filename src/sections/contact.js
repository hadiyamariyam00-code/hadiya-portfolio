import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
           
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
 
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error);
                    alert("Something went wrong. Please try again.");
                }
            )
            .finally(() => setIsSending(false));
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-wrapper">
                
                {/* Left Side: Typography & Info */}
                <div className="contact-info">
                    <h1 className="contact-title">Let's Connect!</h1>
                    <p className="contact-subtitle">
                        I'm currently looking for junior roles and internships. 
                        Drop a message, whether it's about an opportunity or just to say hi.
                    </p>

                    <div className="contact-details-list">
                        <a href="mailto:hadiyaamariyam@gmail.com" className="contact-detail-item">
                            <svg className="contact-icon" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>hadiyaamariyam@gmail.com</span>
                        </a>
                        
                        <div className="contact-detail-item">
                            <svg className="contact-icon" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>Kannur, Kerala</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Floating Form */}
                <form ref={form} className="contact-form" onSubmit={sendEmail}>
                    <div className="name-email-row">
                        <div className="field-group">
                            <label className="field-label">Name</label>
                            <input type="text" name="name" className="contact-input" placeholder="Enter your name" required />
                        </div>
                        <div className="field-group">
                            <label className="field-label">Email</label>
                            <input type="email" name="email" className="contact-input" placeholder="Enter your email" required />
                        </div>
                    </div>

                    <div className="field-group">
                        <label className="field-label">Subject</label>
                        <input type="text" name="subject" className="contact-input" placeholder="Message subject" required />
                    </div>

                    <div className="field-group">
                        <label className="field-label">Message</label>
                        <textarea name="message" id="message" className="contact-textarea" placeholder="Write your message here..." rows="5" required></textarea>
                    </div>

                    <button type="submit" id="send-btn" disabled={isSending}>
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
