import React from "react";
import "./Resume.css";

const Resume = () => {
    const frontendProficiencies = ['HTML5', 'CSS3', 'JavaScript ES6+', 'React','Bootstrap'];
    const backendProficiences = ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'NoSQL'];

    return (
        <section id="resume">
            <h2>Resume</h2>
            <div>
            <p><a href="/MKresume.pdf" download>Download PDF Resume</a></p>
            </div>
            <div>
                <h3>Proficiencies</h3>
                <ul>
                    {frontendProficiencies.map((proficiency, index) => (
                        <li key={index}>{proficiency}</li>
                    ))}
                </ul>
                <h3>Backend Proficiencies</h3>
                <ul>
                    {backendProficiences.map((proficiency, index) => (
                        <li key={index}>{proficiency}</li>
                    ))}
                </ul>
            </div>
            
        </section>
    );
}

export default Resume;