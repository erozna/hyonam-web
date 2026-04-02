"use client";
export default function Footer() {
  return (
    <footer className="py-10 relative" style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs"
              style={{ background: "linear-gradient(135deg, #00d4ff, #0066cc)", color: "#060a10", boxShadow: "0 0 12px rgba(0,212,255,0.3)" }}>
              孝
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-orbitron font-black text-sm tracking-widest text-white">HYONAM</span>
              <span className="font-mono text-[8px] tracking-[0.3em]" style={{ color: "var(--accent-c)", opacity: 0.6 }}>INTERNATIONAL</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { label: "소개", href: "#about" },
              { label: "서비스", href: "#services" },
              { label: "문의", href: "#contact" },
            ].map((link) => (
              <a key={link.href} href={link.href}
                className="font-mono text-xs tracking-wider transition-colors duration-200"
                style={{ color: "var(--text-3)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-2)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-mono text-[10px] text-center" style={{ color: "var(--text-3)" }}>
            © 2025 Hyonam International · Powered by{" "}
            <span style={{ color: "rgba(0,212,255,0.5)" }}>DOKKEBI OS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
