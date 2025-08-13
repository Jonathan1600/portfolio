"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            Jonathan Calderon
          </div>
          
          <div className="navbar-links">
            <a
              href="https://www.linkedin.com/in/jonathan-calderon-silberman/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link"
            >
              <FaLinkedin className="navbar-link-icon" />
              <span className="navbar-link-text">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/Jonathan1600"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link"
            >
              <FaGithub className="navbar-link-icon" />
              <span className="navbar-link-text">GitHub</span>
            </a>
            
            <a
              href="mailto:jonathancalderonsilberman@gmail.com"
              className="navbar-link"
            >
              <FaEnvelope className="navbar-link-icon" />
              <span className="navbar-link-text">Email</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
