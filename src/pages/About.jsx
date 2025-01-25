import React from "react";
import "./About.css";
import paulImage from "../assets/images/PJK.jpg"

const About = () => {
    return (
        <section id="about">
        <div>
            <h2>About Madhuri</h2>
        </div>
        <div className="about-image"> 
            <img src={paulImage} alt="Kumari Madhuri"/>
        </div>
        <div className="about-text">
            <h1>Home</h1>
            <p>Welcome to Kumari Madhuri's portfolio page! Please take a look at the various projects on this page, and feel free to contact Paul directly at <a href="mailto:paul.koehler@gmail.com">mkdone98@gmail.com</a>.</p>
            <p>
            Kumari Madhuri is a full stack developer with a passion for learning new technologies. My portfolio on this page shows past projects I have worked on, and you can also follow my <a href="https://github.com/KmMadhuri/" target="_blank" rel="noopener noreferrer">GitHub account</a>.
            </p>
            
        </div>
        </section>
    );
}

export default About;