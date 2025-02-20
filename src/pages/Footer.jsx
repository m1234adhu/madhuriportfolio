import React from "react";
import "./Footer.css";
import githubLogo from "../assets/icons/github-mark-white.png";
import linkedInLogo from "../assets/icons/LI-In-Bug.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div classname="copyright">
            <p>© 2024 - Kumari Madhuri</p>
            </div>
            <div classname="social-links">
            <p><a href="https://github.com/KmMadhuri" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="GitHub" height="5%" width="5%"/></a>
            <a href="https://www.linkedin.com/in/kumari-madhuri-741a93141" target="_blank" rel="noopener noreferrer">
  <img src={linkedInLogo} alt="LinkedIn" height="5%" width="5%" /></a>
</p>
            </div>
        </footer>
    )
}

export default Footer;