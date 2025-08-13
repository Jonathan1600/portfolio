"use client";

import { useState, useEffect } from "react";

type Theme = "original" | "dark" | "light" | "sunset" | "ocean" | "forest" | "midnight";

const themes: { id: Theme; name: string; primary: string }[] = [
  { id: "original", name: "Purple (Original)", primary: "#2e026d" },
  { id: "dark", name: "Dark Purple", primary: "#1a0b2e" },
  { id: "light", name: "Light", primary: "#f8fafc" },
  { id: "sunset", name: "Sunset", primary: "#dc2626" },
  { id: "ocean", name: "Ocean", primary: "#0ea5e9" },
  { id: "forest", name: "Forest", primary: "#16a34a" },
  { id: "midnight", name: "Midnight", primary: "#0f0f23" },
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("original");

  const changeTheme = (theme: Theme) => {
    document.body.classList.remove("theme-original", "theme-dark", "theme-light", "theme-sunset", "theme-ocean", "theme-forest", "theme-midnight");

    if (theme !== "original") {
      document.body.classList.add(`theme-${theme}`);
    }
    
    setCurrentTheme(theme);
    
    // Storing theme to local storage
    localStorage.setItem("preferred-theme", theme);
  };

  useEffect(() => {
    // Load theme from local storage
    const savedTheme = localStorage.getItem("preferred-theme") as Theme;
    if (savedTheme && savedTheme !== "original") {
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
