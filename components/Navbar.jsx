"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">🌍 World Explorer</Link>
        <div className="navbar-right">
          <ul className={`navbar-links ${open ? "open" : ""}`}>
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/countries" onClick={() => setOpen(false)}>Countries</Link></li>
            <li><Link href="/search" onClick={() => setOpen(false)}>Search</Link></li>
            <li><Link href="/favorites" onClick={() => setOpen(false)}>Favorites</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
          </ul>
          <button className="navbar-toggle" onClick={() => setOpen(v => !v)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}