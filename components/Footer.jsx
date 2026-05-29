"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>World Explorer · Built by Hadia · 2026
          <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer"></a>
        </p>
        <button className="dark-toggle" onClick={toggleDark}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </footer>
  );
}