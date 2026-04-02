"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "년 업력", desc: "1990년대부터 이어온 신뢰", color: "var(--accent-c)" },
  { value: 15, suffix: "+", label: "수출입 국가", desc: "아시아·중동·유럽 네트워크", color: "var(--accent-g)" },
  { value: 500, suffix: "+", label: "거래 파트너", desc: "검증된 글로벌 바이어·셀러", color: "var(--accent-p)" },
  { value: 99, suffix: "%", label: "납기 준수율", desc: "AI 물류 최적화의 결과", color: "var(--accent-o)" },
];

const terminalLines = [
  { text: "✓ LME 알루미늄 시세 수신 — $2,347/t", color: "#39ff6e" },
  { text: "→ 전주 대비 +1.8% 상승 감지", color: "var(--accent-c)" },
  { text: "→ 바이어 DB 매칭 중... (23개 후보)", color: "var(--text-2)" },
  { text: "✓ 베트남 바이어 3개사 알림 발송", color: "var(--accent-p)" },
  { text: "⚡ 긴급 조달 요청 — SUS304 스테인리스", color: "var(--accent-y)" },
  { text: "✓ 대응 파트너 2개사 연결 완료 (38분)", color: "#39ff6e" },
];

function Counter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 2000 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-orbitron font-black" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color, textShadow: `0 0 25px ${color}80` }}>
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent, rgba(0,212,255,0.025) 50%, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="section-label mb-3">[ SYSTEM :: TRACK_RECORD ]</div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
            숫자로 증명하는 <span className="gradient-text">효남의 실력</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="hud-card rounded-2xl p-8 text-center group hover:-translate-y-1 transition-all duration-300">
              <Counter value={s.value} suffix={s.suffix} color={s.color} />
              <div className="font-orbitron font-bold text-sm text-white mt-3 mb-1 tracking-wider">{s.label}</div>
              <div className="font-mono text-xs" style={{ color: "var(--text-3)" }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* DOKKEBI OS Showcase */}
        <div className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(192,132,252,0.05) 100%)", border: "1px solid rgba(0,212,255,0.15)" }}>
          <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)", filter: "blur(50px)" }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase"
                  style={{ background: "rgba(0,212,255,0.12)", color: "var(--accent-c)", border: "1px solid rgba(0,212,255,0.3)" }}>
                  DOKKEBI OS
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs" style={{ color: "var(--accent-g)" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-g)" }} />
                  LIVE
                </span>
              </div>
              <h3 className="font-orbitron font-black text-2xl md:text-3xl text-white mb-5" style={{ lineHeight: 1.3 }}>
                AI가 잠들지 않는 동안<br />
                <span className="gradient-text">기회는 놓치지 않습니다</span>
              </h3>
              <p className="leading-8" style={{ color: "var(--text-2)" }}>
                DOKKEBI OS는 효남의 자체 AI 운영 시스템입니다. 글로벌 시세 모니터링, 바이어 인텔리전스,
                자동 리포트 생성까지 — 24시간 365일 우리 대신 일합니다.
              </p>

              {/* Mini capability bars */}
              <div className="mt-6 space-y-3">
                {[
                  { label: "시세 모니터링", value: 98, color: "var(--accent-c)" },
                  { label: "바이어 매칭", value: 87, color: "var(--accent-g)" },
                  { label: "리포트 자동화", value: 93, color: "var(--accent-p)" },
                ].map((cap) => (
                  <div key={cap.label} className="flex items-center gap-4">
                    <span className="font-mono text-xs w-28 flex-shrink-0" style={{ color: "var(--text-3)" }}>{cap.label}</span>
                    <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full" style={{ width: `${cap.value}%`, background: cap.color, boxShadow: `0 0 6px ${cap.color}80` }} />
                    </div>
                    <span className="font-mono text-xs font-bold w-8 text-right" style={{ color: cap.color }}>{cap.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal mockup */}
            <div className="hud-card rounded-xl overflow-hidden">
              <div className="px-4 py-3 flex items-center gap-2"
                style={{ borderBottom: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,0,0,0.4)" }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
                <span className="font-mono text-xs ml-2" style={{ color: "var(--text-3)" }}>
                  dokkebi-os@nas:~$ live_feed
                </span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2.5" style={{ minHeight: "200px", background: "rgba(6,10,16,0.6)" }}>
                {terminalLines.map((line, i) => (
                  <div key={i} style={{ color: line.color }}>{line.text}</div>
                ))}
                <div className="flex items-center gap-2 mt-4 pt-3" style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}>
                  <span className="animate-pulse" style={{ color: "var(--accent-c)" }}>█</span>
                  <span style={{ color: "var(--text-3)" }}>다음 스캔: 14분 후</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
