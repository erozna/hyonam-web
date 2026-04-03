import AbilityTree from "@/components/AbilityTree";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-amber-400">AI Guitar Muse</div>
          <nav className="flex gap-8">
            <a href="#" className="hover:text-amber-400">
              Home
            </a>
            <a href="#" className="hover:text-amber-400">
              AI 편곡 도구
            </a>
            <a href="#dokkebi-ability-tree" className="hover:text-amber-400">
              DOKKEBI OS
            </a>
            <a href="#" className="hover:text-amber-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <Hero />

      <AbilityTree />

      <section className="bg-zinc-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            AI가 해주는 기타 편곡 6단계
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-zinc-800 p-8">
              1. 연주 녹음 업로드 → 자동 TAB 생성
            </div>
            <div className="rounded-2xl bg-zinc-800 p-8">
              2. 멜로디만 주면 fingerstyle 편곡 완성
            </div>
            <div className="rounded-2xl bg-zinc-800 p-8">
              3. MusicXML / PDF 즉시 출력
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 text-center text-zinc-500">
        <p>© 2026 hyonam.com | Powered by DOKKEBI OS & Grok</p>
        <p className="mt-2">클래식 기타를 위한 AI 연구 & 교육 플랫폼</p>
      </footer>
    </>
  );
}
