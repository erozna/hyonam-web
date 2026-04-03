"use client";

export default function Hero() {
  return (
    <section className="hero-bg flex h-screen items-center">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="mb-6 text-6xl font-bold md:text-7xl">
          클래식 기타 편곡,
          <br />
          AI가 1분 만에 해드립니다
        </h1>
        <p className="mb-10 text-2xl text-zinc-400">
          연주자이자 교수인 당신을 위한 스마트 AI 도우미
        </p>
        <button
          type="button"
          onClick={() => alert("AI 편곡 데모 시작! (실제 연동 예정)")}
          className="rounded-full bg-amber-500 px-10 py-4 text-xl font-semibold text-black transition hover:bg-amber-600"
        >
          지금 바로 편곡 시작하기
        </button>
      </div>
    </section>
  );
}
