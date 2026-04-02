"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 65%)", width: 500, height: 500, top: "10%", left: "-5%", filter: "blur(80px)" }} />
      <div className="absolute pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,132,252,0.08) 0%, transparent 65%)", width: 400, height: 400, bottom: "10%", right: "0%", filter: "blur(80px)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">

        {/* System badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full"
          style={{ background: "rgba(13,21,32,0.8)", border: "1px solid rgba(0,212,255,0.2)", backdropFilter: "blur(12px)" }}>
          <span className="pulse-dot" />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent-c)" }}>
            DOKKEBI OS — SYSTEM ONLINE
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-orbitron font-black leading-none mb-6 tracking-tight">
          <span className="block text-white" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}>
            효남 인터내셔널
          </span>
          <span className="block mt-3" style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            letterSpacing: "0.25em",
            background: "linear-gradient(135deg, var(--accent-c), var(--accent-p))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            HYONAM INTERNATIONAL
          </span>
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-3 leading-relaxed" style={{ color: "var(--text-2)" }}>
          30년 금속·소재 통상 노하우 + AI 자동화 시스템
        </p>
        <p className="font-mono text-sm max-w-xl mx-auto mb-12" style={{ color: "var(--text-3)" }}>
          <span style={{ color: "var(--accent-c)" }}>DOKKEBI OS</span> — 24시간 글로벌 시장을 분석하고 기회를 포착합니다
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#contact"
            className="font-orbitron font-bold text-sm px-8 py-4 rounded-xl tracking-widest transition-all duration-300 hover:-translate-y-1 uppercase"
            style={{ background: "linear-gradient(135deg, #00d4ff, #0066cc)", color: "#060a10", boxShadow: "0 0 30px rgba(0,212,255,0.35)" }}>
            비즈니스 문의
          </a>
          <a href="#about"
            className="font-mono text-sm px-8 py-4 rounded-xl tracking-wider transition-all duration-300 hover:-translate-y-1"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--text-1)" }}>
            [ 회사 소개 → ]
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-5 max-w-lg mx-auto">
          {[
            { value: "30+", label: "년 업력", color: "var(--accent-c)" },
            { value: "15+", label: "국가 네트워크", color: "var(--accent-g)" },
            { value: "24/7", label: "AI 운영", color: "var(--accent-p)" },
          ].map((s) => (
            <div key={s.label} className="hud-card rounded-xl p-5 text-center">
              <div className="font-orbitron font-black text-2xl mb-1" style={{ color: s.color, textShadow: `0 0 15px ${s.color}80` }}>
                {s.value}
              </div>
              <div className="font-mono text-xs tracking-wider" style={{ color: "var(--text-3)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 float-anim">
        <span className="font-mono text-[10px] tracking-[0.3em]" style={{ color: "var(--text-3)" }}>SCROLL</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--accent-c), transparent)" }} />
      </div>
    </section>
  );
}
