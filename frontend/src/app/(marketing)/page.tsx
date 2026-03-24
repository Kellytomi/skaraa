import Link from "next/link";
import {
  Music,
  Upload,
  Play,
  Heart,
  Share2,
  Check,
  Info,
  MessageCircle,
  Sparkles,
} from "lucide-react";

function SkaraaLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className ?? ""}`}>
      <div className="flex items-center gap-[1.5px]">
        {[14, 20, 8, 20, 14, 8].map((h, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-[#ff6d24]"
            style={{ height: h }}
          />
        ))}
      </div>
      <span className="font-display text-[18px] font-light tracking-[-0.5px] text-[#171717]">
        Skaraa
      </span>
    </div>
  );
}

function WaveformBars({
  count = 48,
  played = 30,
  className,
}: {
  count?: number;
  played?: number;
  className?: string;
}) {
  const heights = Array.from({ length: count }, () =>
    [2, 8, 13, 16, 19, 22][Math.floor(Math.random() * 6)]
  );
  return (
    <div className={`flex items-center gap-[1.5px] ${className ?? ""}`}>
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[1.5px] rounded-full"
          style={{
            height: h,
            backgroundColor: i < played ? "#ff6d24" : "#d1d1d1",
          }}
        />
      ))}
    </div>
  );
}

function FloatingWidget({
  rotation,
  className,
  icon,
}: {
  rotation: number;
  className?: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`absolute ${className ?? ""}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="flex items-center gap-3 rounded-xl bg-[#f7f7f7] px-2.5 py-1.5 shadow-sm">
        <div className="flex size-5 items-center justify-center text-[#171717]">
          {icon}
        </div>
        <WaveformBars count={48} played={30} />
        <div className="flex items-center gap-2 text-[#171717]/60">
          <Heart size={14} />
          <Share2 size={14} />
        </div>
      </div>
    </div>
  );
}

function OrangeDecorativeElement({
  className,
  flip,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${className ?? ""}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <div className="relative h-[500px] w-[400px]" style={{ transform: "rotate(50deg)" }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute overflow-hidden rounded-3xl"
            style={{
              left: `${i * 60}px`,
              top: 0,
              bottom: 0,
              width: "100px",
              background:
                "linear-gradient(to right, rgba(255,109,36,0.15), rgba(255,109,36,0.4), #ff6d24)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-[300px]"
              style={{
                background:
                  "linear-gradient(to bottom, white, rgba(255,255,255,0.05))",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "inset 12px 0 32px -4px rgba(255,255,255,0.16)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionIcons() {
  return (
    <div className="flex items-center gap-2">
      {[
        { icon: <Music size={14} />, rot: 2.2 },
        { icon: <Sparkles size={14} />, rot: -7.78 },
        { icon: <Play size={14} />, rot: 15.07 },
        { icon: <Upload size={14} />, rot: 4.85 },
      ].map((item, i) => (
        <div
          key={i}
          className="flex size-5 items-center justify-center text-[#171717]/40"
          style={{ transform: `rotate(${item.rot}deg)` }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* ═══════ NAVBAR ═══════ */}
      <nav className="relative z-50 flex items-center justify-between px-10 py-5">
        <SkaraaLogo />
        <div className="flex items-center gap-1.5">
          <Link
            href="#features"
            className="px-2.5 py-2.5 text-xs tracking-[0.24px] text-[#171717] transition-opacity hover:opacity-70"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="px-2.5 py-2.5 text-xs tracking-[0.24px] text-[#171717] transition-opacity hover:opacity-70"
          >
            Pricing
          </Link>
          <button className="flex size-9 items-center justify-center rounded-full bg-[#f7f7f7] text-[#171717] transition-colors hover:bg-[#ebebeb]">
            <MessageCircle size={16} />
          </button>
          <Link
            href="/signup"
            className="rounded-full bg-[#f7f7f7] px-3.5 py-2.5 text-xs tracking-[0.24px] text-[#171717] transition-colors hover:bg-[#ebebeb]"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="relative flex flex-col items-center pb-24 pt-4">
        {/* Orange decorative background — left and right */}
        <div className="pointer-events-none absolute inset-x-0 top-[-100px] flex justify-between overflow-hidden">
          <OrangeDecorativeElement className="left-[-160px] top-[40px]" />
          <OrangeDecorativeElement className="right-[-160px] top-[40px]" flip />
        </div>

        {/* Floating audio widgets */}
        <div className="relative z-10 mb-8 h-[160px] w-[560px]">
          <FloatingWidget
            rotation={-7.78}
            className="left-[20px] top-[30px]"
            icon={<Music size={16} />}
          />
          <FloatingWidget
            rotation={15.07}
            className="left-[-30px] top-[80px]"
            icon={<Play size={16} />}
          />
          <FloatingWidget
            rotation={2.2}
            className="right-[0px] top-[10px]"
            icon={<Music size={16} />}
          />
          <FloatingWidget
            rotation={4.85}
            className="right-[-20px] top-[70px]"
            icon={<Upload size={16} />}
          />
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center gap-3.5 text-center">
          <h1
            className="max-w-[512px] font-display text-4xl leading-none tracking-[-1.44px] text-[#171717]"
            style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1", fontWeight: 322 }}
          >
            Split your audio how you want it.
          </h1>
          <p className="max-w-[420px] text-xs leading-4 tracking-[0.24px] text-[#5c5c5c]">
            Separate your music tracks by isolating vocals, instruments, beats,
            basslines, and more – all with unrivaled precision. Take control of
            every element in your audio tracks and experience audio processing
            redefined today!
          </p>
        </div>

        {/* CTA buttons */}
        <div className="relative z-10 mt-6 flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-full bg-[#f7f7f7] py-2.5 pl-4 pr-5 text-xs tracking-[0.24px] text-[#171717] transition-colors hover:bg-[#ebebeb]">
            <Music size={16} className="text-[#171717]/60" />
            Try demo
          </button>
          <Link
            href="/split"
            className="flex items-center gap-1.5 rounded-full bg-[#171717] py-2.5 pl-4 pr-5 text-xs tracking-[0.24px] text-white transition-opacity hover:opacity-90"
          >
            <Upload size={16} />
            Upload song
          </Link>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section id="features" className="relative z-10 mx-auto max-w-[760px] px-6 py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionIcons />
          <h2
            className="max-w-[512px] font-display text-2xl leading-none tracking-[-0.96px] text-[#171717]"
            style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1", fontWeight: 322 }}
          >
            Everything you need, in one tool.
          </h2>
          <p className="max-w-[396px] text-xs leading-4 tracking-[0.24px] text-[#5c5c5c]">
            Upload any song and take full control of split, pitch-shift, and
            tempo-edit without touching a DAW.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3">
          {[
            {
              title: "Stem splitting",
              desc: "Isolate any element in your track Pull out vocals, drums, bass, or instruments as clean, separate audio files — ready to loop, remix, or sample.",
            },
            {
              title: "Change keys",
              desc: "Shift pitch without changing the feel Transpose your track up or down by semitones. Perfect for matching keys when mixing or covering a song.",
            },
            {
              title: "Adjust BPM",
              desc: "Speed it up or slow it down Change the tempo of any track without warping the audio quality. Stay in pocket whether you're at 70 or 140.",
            },
            {
              title: "Export stems",
              desc: "Take your files anywhere Download each isolated track as a high-quality audio file. Use them in your DAW, sampler, or wherever your workflow lives.",
            },
          ].map((feature) => (
            <div key={feature.title} className="flex flex-col gap-4">
              <div className="h-[152px] rounded-xl bg-[#f7f7f7]" />
              <div className="flex flex-col gap-2">
                <h3
                  className="font-display text-lg leading-none tracking-[-0.72px] text-[#171717]"
                  style={{
                    fontVariationSettings: "'SOFT' 100, 'WONK' 1",
                    fontWeight: 322,
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs leading-4 tracking-[0.24px] text-[#5c5c5c]">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ BUILT FOR CREATORS ═══════ */}
      <section className="relative z-10 mx-auto max-w-[760px] px-6 py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionIcons />
          <h2
            className="max-w-[512px] font-display text-2xl leading-none tracking-[-0.96px] text-[#171717]"
            style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1", fontWeight: 322 }}
          >
            Built for creators.
          </h2>
          <p className="max-w-[280px] text-xs leading-4 tracking-[0.24px] text-[#5c5c5c]">
            You don&apos;t need a studio setup. Just a song and something to do
            with it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3">
          {[
            {
              title: "Music producers.",
              desc: "Sample anything, instantly.",
            },
            { title: "Cover artists.", desc: "Sing it in your key." },
            {
              title: "Content creators.",
              desc: "Clean audio, no studio.",
            },
          ].map((persona) => (
            <div key={persona.title} className="flex flex-col gap-4">
              <div className="h-[152px] rounded-xl bg-[#f7f7f7]" />
              <div className="flex flex-col gap-2">
                <h3
                  className="font-display text-lg leading-none tracking-[-0.72px] text-[#171717]"
                  style={{
                    fontVariationSettings: "'SOFT' 100, 'WONK' 1",
                    fontWeight: 322,
                  }}
                >
                  {persona.title}
                </h3>
                <p className="text-xs leading-4 tracking-[0.24px] text-[#5c5c5c]">
                  {persona.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/split"
            className="flex items-center gap-1.5 rounded-full bg-[#171717] py-2.5 pl-4 pr-5 text-xs tracking-[0.24px] text-white transition-opacity hover:opacity-90"
          >
            <Upload size={16} />
            Upload song
          </Link>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section id="pricing" className="relative z-10 mx-auto max-w-[760px] px-6 py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionIcons />
          <h2
            className="max-w-[512px] font-display text-2xl leading-none tracking-[-0.96px] text-[#171717]"
            style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1", fontWeight: 322 }}
          >
            Simple pricing, no surprises.
          </h2>
          <p className="max-w-[280px] text-xs leading-4 tracking-[0.24px] text-[#5c5c5c]">
            Start free, upgrade when you need more.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3">
          {/* Free tier */}
          <div className="flex flex-col gap-4">
            <div className="relative h-[152px] overflow-hidden rounded-xl bg-[#f7f7f7]">
              <OrangeDecorativeElement className="left-[-100px] top-[-200px] scale-50 opacity-80" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between px-1">
                <span
                  className="font-display text-xl leading-none tracking-[-0.8px] text-[#171717]"
                  style={{
                    fontVariationSettings: "'SOFT' 100, 'WONK' 1",
                    fontWeight: 322,
                  }}
                >
                  Free
                </span>
                <span
                  className="font-display text-lg leading-none tracking-[-0.72px] text-[#171717]"
                  style={{
                    fontVariationSettings: "'SOFT' 100, 'WONK' 1",
                    fontWeight: 322,
                  }}
                >
                  $0/month
                </span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  "10 minutes of processing per month",
                  "Stem splitting",
                  "Key change",
                  "BPM adjustment",
                  "Standard quality export",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-sm leading-5 tracking-[0.28px] text-[#5c5c5c]"
                  >
                    <Check size={18} className="shrink-0 text-[#ff6d24]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="self-start rounded-full bg-[#f7f7f7] px-4 py-2.5 text-xs tracking-[0.24px] text-[#171717] transition-colors hover:bg-[#ebebeb]">
                Get started free
              </button>
            </div>
          </div>

          {/* Pro tier */}
          <div className="flex flex-col gap-4">
            <div className="relative h-[152px] overflow-hidden rounded-xl bg-[#f7f7f7]">
              <OrangeDecorativeElement className="right-[-100px] top-[-200px] scale-50 opacity-80" flip />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between px-1">
                <span
                  className="font-display text-xl leading-none tracking-[-0.8px] text-[#171717]"
                  style={{
                    fontVariationSettings: "'SOFT' 100, 'WONK' 1",
                    fontWeight: 322,
                  }}
                >
                  Pro
                </span>
                <span
                  className="font-display text-lg leading-none tracking-[-0.72px] text-[#171717]"
                  style={{
                    fontVariationSettings: "'SOFT' 100, 'WONK' 1",
                    fontWeight: 322,
                  }}
                >
                  $10/month
                </span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Unlimited processing",
                  "Everything in Free",
                  "High quality export",
                  "Priority processing",
                  "Download all stems at once",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-sm leading-5 tracking-[0.28px] text-[#5c5c5c]"
                  >
                    <Check size={18} className="shrink-0 text-[#ff6d24]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="flex w-fit items-center gap-1.5 rounded-full bg-[#171717] py-2.5 pl-4 pr-5 text-xs tracking-[0.24px] text-white transition-opacity hover:opacity-90"
              >
                <Sparkles size={16} />
                Go Pro
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing footer note */}
        <div className="mt-10 flex items-center gap-1.5 rounded-[10px] bg-[#f7f7f7] px-2.5 py-2">
          <Info size={16} className="shrink-0 text-[#171717]/60" />
          <p className="text-xs tracking-[0.24px] text-[#171717]">
            Processing costs $0.017/min on Pro — included in your $10/month, no
            meter running.
          </p>
        </div>
      </section>

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="relative overflow-hidden bg-[#f7f7f7] px-6 py-20">
        {/* Decorative backgrounds */}
        <OrangeDecorativeElement className="left-[-200px] top-[-50px] opacity-60" />
        <OrangeDecorativeElement className="right-[-200px] top-[-50px] opacity-60" flip />

        <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
          <SectionIcons />
          <h2
            className="font-display text-2xl leading-none tracking-[-0.96px] text-[#171717]"
            style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1", fontWeight: 322 }}
          >
            Ready when you are.
          </h2>
          <p className="text-sm leading-5 tracking-[0.28px] text-[#5c5c5c]">
            10 free minutes, no card required. Just drop a song and go.
          </p>
          <Link
            href="/split"
            className="mt-2 flex items-center gap-1.5 rounded-full bg-[#171717] py-2.5 pl-4 pr-5 text-xs tracking-[0.24px] text-white transition-opacity hover:opacity-90"
          >
            <Upload size={16} />
            Upload song
          </Link>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="relative z-10 mx-auto flex max-w-[760px] flex-col gap-10 px-6 py-12">
        <div className="flex items-center justify-between">
          <SkaraaLogo />
          <div className="flex flex-col items-end gap-2 text-right">
            <h3
              className="max-w-[512px] font-display text-2xl leading-none tracking-[-0.96px] text-[#171717]"
              style={{
                fontVariationSettings: "'SOFT' 100, 'WONK' 1",
                fontWeight: 322,
              }}
            >
              Split your audio how you want it.
            </h3>
            <p className="text-xs leading-4 tracking-[0.24px] text-[#5c5c5c]">
              Take control of every element today!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[#f7f7f7] pt-6">
          <p className="text-xs tracking-[0.24px] text-[#5c5c5c]">
            Copyright &copy; 2026 Skaraa All Rights Reserved
          </p>
          <div className="flex items-center gap-2.5 text-xs tracking-[0.24px] text-[#5c5c5c]">
            <span>Created by</span>
            <span className="flex items-center gap-0.5">
              <span className="size-4 rounded-full bg-[#d1d1d1]" />
              Tsavsar
            </span>
            <span>&amp;</span>
            <span className="flex items-center gap-0.5">
              <span className="size-4 rounded-full bg-[#d1d1d1]" />
              Tsavsar
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
