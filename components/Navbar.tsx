"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "소개", href: "#about" },
  { label: "서비스", href: "#services" },
  { label: "실적", href: "#stats" },
  { label: "문의", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(6,10,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
        padding: scrolled ? "10px 0" : "18px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #0066cc)",
              boxShadow: "0 0 15px rgba(0,212,255,0.4)",
              color: "#060a10",
            }}
          >
            孝
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-orbitron font-black text-base tracking-widest"
              style={{ color: "#e8f4fd", letterSpacing: "0.15em" }}
            >
              HYONAM
            </span>
            <span
              className="font-mono text-[9px] tracking-[0.3em] uppercase"
              style={{ color: "var(--accent-c)", opacity: 0.7 }}
            >
              INTERNATIONAL
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm tracking-wider transition-all duration-300 relative group"
              style={{ color: "var(--text-2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-c)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-300 w-0 group-hover:w-full"
                style={{ background: "var(--accent-c)" }}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.35)",
              color: "var(--accent-c)",
              boxShadow: "0 0 12px rgba(0,212,255,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.15)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,212,255,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(0,212,255,0.1)";
            }}
          >
            [ 문의하기 ]
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          style={{ color: "var(--text-2)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--accent-c)" }} />
            <span className={`block h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--text-2)" }} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--accent-c)" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden mx-4 mt-2 rounded-xl p-4 space-y-2"
          style={{
            background: "rgba(13,21,32,0.95)",
            border: "1px solid rgba(0,212,255,0.15)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-mono text-sm py-2.5 px-4 rounded-lg transition-all duration-200"
              style={{ color: "var(--text-2)" }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent-c)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
