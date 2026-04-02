"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(6,10,16,0.6)",
    border: "1px solid rgba(0,212,255,0.15)",
    borderRadius: "10px",
    color: "var(--text-1)",
    padding: "13px 16px",
    width: "100%",
    outline: "none",
    fontSize: "13px",
    fontFamily: "'JetBrains Mono', monospace",
    transition: "all 0.3s",
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(0,212,255,0.04) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-label mb-3">[ SYSTEM :: CONTACT ]</div>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
            효남과 <span className="gradient-text">함께 시작하세요</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-2)" }}>
            바이어·셀러 문의, 협업 제안, 긴급 조달까지<br />
            어떤 문의도 24시간 내에 답변드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-5">
            {[
              { icon: "📧", label: "이메일", value: "ceozna@hyonam.com", color: "var(--accent-c)" },
              { icon: "🌐", label: "웹사이트", value: "www.hyonam.com", color: "var(--accent-p)" },
              { icon: "📍", label: "소재지", value: "대한민국", color: "var(--accent-g)" },
            ].map((item) => (
              <div key={item.label} className="hud-card rounded-2xl p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--text-3)" }}>{item.label}</div>
                  <div className="font-mono text-sm font-semibold text-white">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Response badge */}
            <div className="rounded-2xl p-6"
              style={{ background: "rgba(57,255,110,0.05)", border: "1px solid rgba(57,255,110,0.2)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-g)" }} />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent-g)" }}>
                  평균 응답 시간
                </span>
              </div>
              <div className="font-orbitron font-black text-3xl text-white mb-1">4시간 이내</div>
              <div className="font-mono text-xs" style={{ color: "var(--text-3)" }}>
                DOKKEBI OS가 1차 분류 후 담당자 배정
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="hud-card rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-5">✅</div>
                <h3 className="font-orbitron font-bold text-lg text-white mb-2 tracking-widest">문의 접수 완료</h3>
                <p className="font-mono text-sm" style={{ color: "var(--text-3)" }}>4시간 내 답변 드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "이름", key: "name", placeholder: "홍길동", type: "text", required: true },
                    { label: "회사명", key: "company", placeholder: "(주)효남", type: "text", required: false },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="font-mono text-[10px] tracking-widest uppercase mb-2 block" style={{ color: "var(--text-3)" }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                        style={inputStyle}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.15)")}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase mb-2 block" style={{ color: "var(--text-3)" }}>이메일</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                    style={inputStyle}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.15)")}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest uppercase mb-2 block" style={{ color: "var(--text-3)" }}>문의 내용</label>
                  <textarea
                    placeholder="문의하실 내용을 입력해 주세요..."
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: "none" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.15)")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-orbitron font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #0066cc)", color: "#060a10", boxShadow: "0 0 25px rgba(0,212,255,0.3)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(0,212,255,0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 25px rgba(0,212,255,0.3)")}
                >
                  문의 보내기 →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
