"use client";

const services = [
  {
    icon: "🔩",
    id: "SVC-01",
    title: "금속·소재 수출입",
    desc: "철강, 알루미늄, 동합금, 특수합금 전 품목. 원산지 인증부터 통관, 현지 납품까지 원스톱 처리.",
    tags: ["철강", "비철금속", "특수합금"],
    color: "var(--accent-c)",
    capability: 95,
  },
  {
    icon: "📊",
    id: "SVC-02",
    title: "AI 시장 분석",
    desc: "DOKKEBI OS의 24시간 글로벌 시세 모니터링. LME·SHFE·CME 연동 실시간 가격 알림 및 리포트.",
    tags: ["실시간 시세", "AI 분석", "리포트"],
    color: "var(--accent-p)",
    capability: 88,
  },
  {
    icon: "🤝",
    id: "SVC-03",
    title: "바이어·셀러 매칭",
    desc: "15개국 이상 검증된 파트너 네트워크. AI가 최적 거래처를 자동 매칭하고 계약 초안까지 제안합니다.",
    tags: ["글로벌 네트워크", "자동 매칭"],
    color: "var(--accent-g)",
    capability: 92,
  },
  {
    icon: "📦",
    id: "SVC-04",
    title: "물류·공급망 관리",
    desc: "해상·항공 복합 운송 최적화. 실시간 화물 추적과 선적 서류 자동화로 리드타임을 최소화합니다.",
    tags: ["물류 최적화", "서류 자동화"],
    color: "var(--accent-y)",
    capability: 85,
  },
  {
    icon: "⚡",
    id: "SVC-05",
    title: "긴급 조달 서비스",
    desc: "생산 라인 긴급 중단 시 48시간 내 대체 소재 조달. 위기 상황에서 빛나는 효남의 응급 네트워크.",
    tags: ["48시간 조달", "긴급 대응"],
    color: "var(--accent-o)",
    capability: 78,
  },
  {
    icon: "🏭",
    id: "SVC-06",
    title: "제조업 디지털화",
    desc: "전통 제조기업의 디지털 전환 컨설팅. ERP 연동부터 AI 품질 검사까지 스마트팩토리 구축 지원.",
    tags: ["스마트팩토리", "디지털 전환"],
    color: "#4fc3f7",
    capability: 72,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(192,132,252,0.04) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-label mb-3">[ SYSTEM :: SERVICES ]</div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
            우리가 할 수 있는 것들
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-2)" }}>
            통상의 모든 단계를 커버합니다. 사람의 경험과 AI의 속도로.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="relative rounded-2xl p-7 group hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              style={{ background: "rgba(13,21,32,0.85)", border: `1px solid ${s.color}20`, backdropFilter: "blur(20px)" }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-5">
                <div className="text-2xl w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}>
                  {s.icon}
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded"
                  style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}20` }}>
                  {s.id}
                </span>
              </div>

              <h3 className="font-orbitron font-bold text-base text-white mb-3" style={{ letterSpacing: "0.03em" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-7 mb-5" style={{ color: "var(--text-3)" }}>{s.desc}</p>

              {/* Capability bar */}
              <div className="mb-5">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--text-3)" }}>CAPABILITY</span>
                  <span className="font-mono text-xs font-bold" style={{ color: s.color }}>{s.capability}%</span>
                </div>
                <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${s.capability}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}80)`, boxShadow: `0 0 8px ${s.color}60` }} />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded-full"
                    style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}20` }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover bottom glow line */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
