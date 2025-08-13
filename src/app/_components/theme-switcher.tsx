"use client";

import { useState, useEffect } from "react";

type Theme = "current" | "dark" | "blue" | "gray" | "green";

const themes: { id: Theme; name: string; primary: string }[] = [
  { id: "current", name: "Purple", primary: "#2e026d" },
  { id: "dark", name: "Dark Purple", primary: "#1a0b2e" },
  { id: "blue", name: "Dark Blue", primary: "#0f172a" },
  { id: "gray", name: "Dark Gray", primary: "#1f2937" },
  { id: "green", name: "Dark Green", primary: "#064e3b" },
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("current");

  const changeTheme = (theme: Theme) => {
    // Remove all theme classes
    document.body.classList.remove("theme-current", "theme-dark", "theme-blue", "theme-gray", "theme-green");
    
    // Add new theme class
    if (theme !== "current") {
      document.body.classList.add(`theme-${theme}`);
    }
    
    setCurrentTheme(theme);
    
    // Store theme preference in localStorage
    localStorage.setItem("preferred-theme", theme);
  };

  useEffect(() => {
    // Load saved theme preference on component mount
    const savedTheme = localStorage.getItem("preferred-theme") as Theme;
    if (savedTheme && savedTheme !== "current") {
      changeTheme(savedTheme);
    }
  }, []);

  return (
    <div className="theme-switcher">
      <div className="theme-switcher-container">
        <h3 className="theme-switcher-title">Choose Theme</h3>
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
    </div>
  );
}
