"use client";

import { useState, useEffect, useRef } from "react";
import { FaPalette, FaChevronDown } from "react-icons/fa";

type Theme = "original" | "dark" | "light" | "sunset" | "ocean" | "forest" | "midnight";

const themes: { id: Theme; name: string; primary: string }[] = [
  { id: "original", name: "Purple", primary: "#2e026d" },
  { id: "dark", name: "Dark Purple", primary: "#1a0b2e" },
  { id: "light", name: "Light", primary: "#f8fafc" },
  { id: "sunset", name: "Sunset", primary: "#dc2626" },
  { id: "ocean", name: "Ocean", primary: "#0ea5e9" },
  { id: "forest", name: "Forest", primary: "#16a34a" },
  { id: "midnight", name: "Midnight", primary: "#0f0f23" },
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("original");
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const changeTheme = (theme: Theme) => {
    document.body.classList.remove("theme-original", "theme-dark", "theme-light", "theme-sunset", "theme-ocean", "theme-forest", "theme-midnight");
    
    if (theme !== "original") {
      document.body.classList.add(`theme-${theme}`);
    }
    
    setCurrentTheme(theme);
    setIsOpen(false);
    localStorage.setItem("preferred-theme", theme);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === headerRef.current || headerRef.current?.contains(e.target as Node)) {
      setIsDragging(true);
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      const maxX = window.innerWidth - (containerRef.current.offsetWidth || 200);
      const maxY = window.innerHeight - (containerRef.current.offsetHeight || 300);
      
      const newX = Math.min(e.clientX - dragOffset.x, maxX);
      const newY = Math.min(e.clientY - dragOffset.y, maxY);
      
      setPosition({
        x: newX > 0 ? newX : 0,
        y: newY > 0 ? newY : 0,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("preferred-theme") as Theme;
    if (savedTheme && savedTheme !== "original") {
      changeTheme(savedTheme);
    }
  }, []);

  return (
    <div 
      className="theme-switcher"
      ref={containerRef}
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        zIndex: 40,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="theme-switcher-container">
        <div className="theme-switcher-header" ref={headerRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="theme-switcher-toggle"
          >
            <FaPalette className="theme-switcher-icon" />
            <span className="theme-switcher-current">
              {themes.find(t => t.id === currentTheme)?.name}
            </span>
            <FaChevronDown className={`theme-switcher-chevron ${isOpen ? 'rotate' : ''}`} />
          </button>
        </div>
        
        {isOpen && (
          <div className="theme-switcher-dropdown">
            <div className="theme-buttons">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => changeTheme(theme.id)}
                  className={`theme-button ${currentTheme === theme.id ? "theme-button-active" : ""}`}
                  style={{ "--theme-color": theme.primary } as React.CSSProperties}
                  title={theme.name}
                >
                  <div className="theme-button-color" style={{ backgroundColor: theme.primary }}></div>
                  <span className="theme-button-text">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
