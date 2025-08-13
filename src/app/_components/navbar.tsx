"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            Jonathan Calderon
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/jonathan-calderon-silberman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
            >
              <FaLinkedin className="text-xl group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/Jonathan1600"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
            >
              <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            
            <a
              href="mailto:jonathancalderonsilberman@gmail.com"
              className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
            >
              <FaEnvelope className="text-xl group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
