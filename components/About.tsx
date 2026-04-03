"use client";

const layers = [
  { id: "L6", label: "자율 진화층", desc: "self_evolution_trigger.py", color: "#c084fc", status: "ACTIVE" },
  { id: "L5", label: "자가 비판층", desc: "self_critique.py (Blue/Red)", color: "#00d4ff", status: "ACTIVE" },
  { id: "L4", label: "실행 에이전트층", desc: "task_runner.py + A2A", color: "#39ff6e", status: "ACTIVE" },
  { id: "L3", label: "지식 관리층", desc: "SHARED_BRAIN + archive", color: "#ffd166", status: "ACTIVE" },
  { id: "L2", label: "통신층", desc: "Telegram Bot + webhook", color: "#ff6b35", status: "ACTIVE" },
  { id: "L1", label: "인프라층", desc: "NAS DS920+ / Docker", color: "#8db0cc", status: "ONLINE" },
];

const pillars = [
  { icon: "⚙️", title: "금속·소재 통상", desc: "철강, 비철금속, 특수합금 30년 네트워크. 국내외 직거래 공급망 보유.", color: "var(--accent-c)" },
  { icon: "🤖", title: "AI 자동화 시스템", desc: "DOKKEBI OS 기반 24시간 시장 모니터링. 가격 감지부터 바이어 매칭까지 AI 처리.", color: "var(--accent-p)" },
  { icon: "🌐", title: "글로벌 네트워크", desc: "아시아·중동·유럽 15개국 바이어·서플라이어 DB 실시간 관리.", color: "var(--accent-g)" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="section-label mb-3">[ SYSTEM :: ABOUT ]</div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
            전통과 혁신의 <span className="gradient-text">교차점</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-2)" }}>
            수십 년의 업력 위에 Level 6 자율 AI 시스템을 구축했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Company story */}
          <div className="space-y-6">
            <div className="hud-card rounded-2xl p-8">
              <h3 className="font-orbitron font-bold text-xl text-white mb-5" style={{ letterSpacing: "0.05em" }}>
                효남금속 → <span className="gradient-text">효남 인터내셔널</span>
              </h3>
              <p className="leading-8 mb-4" style={{ color: "var(--text-2)" }}>
                1990년대 국내 금속 유통으로 시작, 아시아 시장을 넘어 글로벌 통상 기업으로 진화했습니다.
              </p>
              <p className="leading-8" style={{ color: "var(--text-2)" }}>
                자체 개발 AI 시스템 <span style={{ color: "var(--accent-c)" }}>DOKKEBI OS</span>를 기반으로 전 세계 시장 데이터를 실시간 분석하고, 최적의 바이어-셀러 매칭을 자동화합니다.
              </p>
            </div>

            {/* CEO quote */}
            <div className="rounded-2xl p-8 relative"
              style={{ background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.12)" }}>
              <div className="font-orbitron text-6xl absolute -top-3 left-6 leading-none"
                style={{ color: "rgba(0,212,255,0.15)", lineHeight: 1 }}>"</div>
              <p className="leading-8 italic mb-5" style={{ color: "var(--text-2)" }}>
                기술은 수단입니다. 효남이라는 이름으로 세계 어디서든 신뢰받는 파트너가 되는 것이 목표입니다.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-black"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #0066cc)", color: "#060a10" }}>孝</div>
                <div>
                  <div className="font-orbitron text-xs font-bold text-white tracking-widest">대표이사</div>
                  <div className="font-mono text-xs" style={{ color: "var(--text-3)" }}>효남 인터내셔널</div>
                </div>
              </div>
            </div>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((p) => (
                <div key={p.title} className="glass rounded-xl p-5 flex gap-4 group hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-2xl w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${p.color}18`, border: `1px solid ${p.color}30` }}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-sm text-white mb-1" style={{ letterSpacing: "0.05em" }}>{p.title}</h4>
                    <p className="text-xs leading-6" style={{ color: "var(--text-3)" }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: DOKKEBI OS Architecture */}
          <div className="hud-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="section-label mb-1">ARCHITECTURE</div>
                <div className="font-orbitron font-black text-lg text-white">DOKKEBI OS</div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(57,255,110,0.1)", border: "1px solid rgba(57,255,110,0.25)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-g)" }} />
                <span className="font-mono text-xs" style={{ color: "var(--accent-g)" }}>ONLINE</span>
              </div>
            </div>

            <div className="space-y-3">
              {layers.map((layer, i) => (
                <div key={layer.id}
                  className="rounded-lg p-4 flex items-center gap-4 transition-all duration-300 hover:scale-[1.01]"
                  style={{ background: `${layer.color}08`, border: `1px solid ${layer.color}20` }}>
                  <div className="font-orbitron font-black text-xs w-8 flex-shrink-0"
                    style={{ color: layer.color }}>
                    {layer.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-white mb-0.5">{layer.label}</div>
                    <div className="font-mono text-[10px] truncate" style={{ color: "var(--text-3)" }}>{layer.desc}</div>
                  </div>
                  <div className="font-mono text-[9px] px-2 py-0.5 rounded flex-shrink-0"
                    style={{ background: `${layer.color}15`, color: layer.color, border: `1px solid ${layer.color}30` }}>
                    {layer.status}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-5 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(0,212,255,0.1)" }}>
              <span className="font-mono text-xs" style={{ color: "var(--text-3)" }}>NAS DS920+ / Docker</span>
              <span className="font-mono text-xs" style={{ color: "var(--accent-c)" }}>
                LEVEL 6 TARGET
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
