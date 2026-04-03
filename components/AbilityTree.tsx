"use client";

import { useEffect, useMemo, useState } from "react";

type Skill = { name: string; done: boolean };

type Group = {
  id: string;
  name: string;
  cur: number;
  max: number;
  color: string;
  complete?: boolean;
  next?: string;
  nextDiff?: string;
  skills: Skill[];
};

const groups: Group[] = [
  {
    id: "장기기억",
    name: "장기 기억",
    cur: 4,
    max: 6,
    color: "#7F77DD",
    next: "Merkle Root 보호",
    nextDiff: "중",
    skills: [
      { name: "SHARED_BRAIN.json", done: true },
      { name: "memory_manager 해시체인", done: true },
      { name: "분산 인덱스 Lazy Load", done: true },
      { name: "audit_logger.py", done: true },
      { name: "chattr+i Merkle Root", done: false },
      { name: "ChromaDB 벡터 검색", done: false },
    ],
  },
  {
    id: "헌법보안",
    name: "헌법 · 보안",
    cur: 5,
    max: 5,
    color: "#1D9E75",
    complete: true,
    skills: [
      { name: "constitution_engine", done: true },
      { name: "Ollama 연동 v2.2", done: true },
      { name: "constitution_watchdog", done: true },
      { name: "red_team_tester", done: true },
      { name: "Reality Score + Attack Stop", done: true },
    ],
  },
  {
    id: "멀티에이전트",
    name: "멀티 에이전트",
    cur: 4,
    max: 6,
    color: "#D85A30",
    next: "자기진화 파이프라인",
    nextDiff: "중",
    skills: [
      { name: "agent_graph Blue/Red", done: true },
      { name: "self_critique v1.1", done: true },
      { name: "6에이전트 확장", done: true },
      { name: "Proactive Proposal Loop", done: true },
      { name: "자기진화 자동 파이프라인", done: false },
      { name: "Fine-tuned DOKKEBI 모델", done: false },
    ],
  },
  {
    id: "정보수집",
    name: "정보 수집",
    cur: 2,
    max: 4,
    color: "#185FA5",
    next: "Ollama 필터링 에이전트",
    nextDiff: "중",
    skills: [
      { name: "morning_intelligence", done: true },
      { name: "RSS 수집 30개/일", done: true },
      { name: "Ollama 필터링 에이전트", done: false },
      { name: "tech_tree 자동 업데이트", done: false },
    ],
  },
  {
    id: "인프라",
    name: "인프라 · 자동화",
    cur: 4,
    max: 5,
    color: "#BA7517",
    next: "봇 재시작 자동 알림",
    nextDiff: "낮음",
    skills: [
      { name: "repair_daemon v1.2", done: true },
      { name: "system_integrity_daemon", done: true },
      { name: "dts_manager.py", done: true },
      { name: "텔레그램 DTS 통합", done: true },
      { name: "봇 재시작 자동 알림", done: false },
    ],
  },
];

const LEVEL6_TARGET = new Date("2026-06-04T00:00:00");

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  return useMemo(() => {
    const diff = target.getTime() - now;
    if (diff <= 0) {
      return {
        expired: true as const,
        d: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalSeconds: 0,
      };
    }
    const totalSeconds = Math.floor(diff / 1000);
    const d = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { expired: false as const, d, hours, minutes, seconds, totalSeconds };
  }, [now, target]);
}

export default function AbilityTree() {
  const [barsReady, setBarsReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setBarsReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const totalCur = groups.reduce((s, g) => s + g.cur, 0);
  const totalMax = groups.reduce((s, g) => s + g.max, 0);
  const overallPct = totalMax > 0 ? Math.round((totalCur / totalMax) * 1000) / 10 : 0;

  const cd = useCountdown(LEVEL6_TARGET);

  return (
    <section
      id="dokkebi-ability-tree"
      className="py-20 px-6"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
            DOKKEBI OS
          </p>
          <h2 className="text-3xl font-bold text-zinc-100 md:text-4xl">
            능력 진화 트리
          </h2>
          <p className="mt-3 text-zinc-400">
            제국 인프라 역량 — 하드코딩 데이터 (추후 API 연동)
          </p>
        </div>

        <div
          className="mb-14 rounded-2xl border border-zinc-800 p-8 md:p-10"
          style={{ backgroundColor: "#111111" }}
        >
          <p className="text-center text-sm text-zinc-500">전체 달성률</p>
          <p
            className="mt-2 text-center text-5xl font-bold tabular-nums md:text-6xl"
            style={{ color: "#f59e0b" }}
          >
            {overallPct}%
          </p>
          <p className="mt-2 text-center text-sm text-zinc-500">
            {totalCur} / {totalMax} 스킬 포인트
          </p>
          <div className="mx-auto mt-6 h-3 max-w-xl overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full transition-[width] duration-[1.2s] ease-out"
              style={{
                width: barsReady ? `${overallPct}%` : "0%",
                background: "linear-gradient(90deg, #7F77DD, #D85A30, #1D9E75)",
              }}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => {
            const pct = g.max > 0 ? (g.cur / g.max) * 100 : 0;
            const isComplete = g.complete === true;
            return (
              <article
                key={g.id}
                className={`rounded-2xl p-6 shadow-lg transition-shadow hover:shadow-xl ${
                  isComplete ? "ring-2 ring-emerald-500/80 ring-offset-2 ring-offset-[#0a0a0a]" : ""
                }`}
                style={{
                  backgroundColor: "#111111",
                  borderWidth: 1,
                  borderColor: isComplete ? "rgb(34 197 94 / 0.5)" : "rgb(39 39 42)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: g.color }}
                      aria-hidden
                    />
                    <h3 className="text-lg font-semibold text-zinc-100">{g.name}</h3>
                  </div>
                  {isComplete && (
                    <span className="shrink-0 rounded-full bg-emerald-600/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                      완성
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
                  <span>
                    진행 {g.cur} / {g.max}
                  </span>
                  <span className="tabular-nums text-zinc-300">
                    {g.max > 0 ? Math.round((g.cur / g.max) * 100) : 0}%
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full transition-[width] duration-1000 ease-out"
                    style={{
                      width: barsReady ? `${pct}%` : "0%",
                      backgroundColor: g.color,
                    }}
                  />
                </div>

                {!isComplete && g.next && (
                  <p className="mt-4 text-sm text-zinc-500">
                    다음: <span className="text-zinc-300">{g.next}</span>
                    {g.nextDiff && (
                      <span className="ml-2 rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-400">
                        난이도 {g.nextDiff}
                      </span>
                    )}
                  </p>
                )}

                <ul className="mt-4 space-y-2 border-t border-zinc-800/80 pt-4">
                  {g.skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <span
                        className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] ${
                          s.done
                            ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-400"
                            : "border-zinc-600 text-zinc-600"
                        }`}
                        aria-hidden
                      >
                        {s.done ? "✓" : ""}
                      </span>
                      <span className={s.done ? "" : "text-zinc-500"}>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div
          className="mt-14 rounded-2xl border border-zinc-800 p-8 text-center"
          style={{ backgroundColor: "#111111" }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-amber-500/90">
            Level 6 카운트다운
          </p>
          <p className="mt-4 text-2xl font-bold text-zinc-100 md:text-3xl">
            {cd.expired ? (
              "목표일 도달 — 다음 단계를 준비하세요"
            ) : (
              <>
                도깨비를 만나는 날까지{" "}
                <span className="text-amber-400">D-{cd.d}</span>
              </>
            )}
          </p>
          {!cd.expired && (
            <p className="mt-4 font-mono text-3xl tabular-nums text-zinc-200 md:text-4xl">
              {pad2(cd.d)}일 {pad2(cd.hours)}시간 {pad2(cd.minutes)}분 {pad2(cd.seconds)}초
            </p>
          )}
          <p className="mt-3 text-xs text-zinc-500">
            목표 시각: 2026-06-04 00:00:00 (로컬 시간)
          </p>
        </div>
      </div>
    </section>
  );
}
