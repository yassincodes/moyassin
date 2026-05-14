import { useState, useEffect, useRef } from "react";

const story = [
  "At 16, I built the largest English-learning platform in the Arab world, reaching more than 80,000 learners.",
  "I graduated high school as a math student and enrolled in Teachers' College, but I barely attended classes. I chose to teach myself how to code instead.",
  "I hacked Scrimba for a year of free access and learned how to code from engineers at Amazon, Netflix, JP Morgan, and Uber. Since then, I've built more than 100 projects for myself and many different clients.",
  "On World Teachers' Day 2023, I entered a classroom for the first time. That day, I also started my lifelong project, Assistant. The school became my laboratory. Teaching, coding, building, experimenting, all at once.",
  "Now I'm obsessed with giving life to new species of beings",
];

const projects = [
  {
    name: "English Teaching Platform",
    year: 2016,
    desc: "The largest English-learning platform for Arabic speakers back in the time, serving more than 80k students.",
    color: "#e8f4e8",
    symbol: "EN→AR",
    link: "#"
  },
  {
    name: "EduMap",
    year: 2020,
    desc: "Uber for teachers. A platform connecting students with tutors on-demand, co-built with a JPMorgan engineer. We had the idea, the tech, and the drive — but the stars didn't align. One of those beautiful ones that almost made it.",
    color: "#eef0f7",
    symbol: "📍",
    link: "#"
  },
  {
    name: "rateyouruni",
    year: 2021,
    desc: "A university review platform for Tunisian universities, gained 20k visitors, with 1 thousand students who share their experiences and help each other make informed decisions.",
    color: "#f4e8e8",
    symbol: "🎓",
    link: "https://rateyouruni.com"
  },
  {
    name: "Elon vs Putin",
    year: 2022,
    desc: "Built during the viral moment when Elon Musk challenged Vladimir Putin. A real-time voting platform that reached over 100k visits and collected more than 10k votes.",
    color: "#dfe8f4",
    symbol: "VS",
    link: "#"
  },
  {
    name: "Social Media From the Past",
    year: 2023,
    desc: "My graduation project, a time machine showing what social media would look like in different timelines. I had to clone Twitter, Facebook, and Messenger for the early version.",
    color: "#f0e8e0",
    symbol: "1789",
    link: "#"
  },
  {
    name: "Drawing Students as Grown-Ups",
    year: 2024,
    desc: "Generative AI portraits of students as their future selves. At least half a million kids got exposed to generative AI for the first time through this project, making it mostly the first use case for AI in education. Featured on Al Jazeera & Al Arabiya.",
    color: "#e8e8f4",
    symbol: "2047",
    link: "#"
  },
  {
    name: "YeTweets",
    year: 2025,
    desc: "The night Ye deleted all his tweets, I scraped them and put them on a 1-hour VibeCoded website. Reached half a million visitors so far and used and loved by a lot of influencers including @sneako, @its.blanko, @AetherionArtOG and featured on ye remixes viewed by hundreds of thousands.",
    color: "#111",
    symbol: "YE",
    light: false,
    link: "#"
  },
  {
    name: "KeyboardMate",
    year: 2025,
    desc: "An intelligent keyboard companion that lives inside my keyboard. Project still open for early access, but used by me every day.",
    color: "#e4eff4",
    symbol: "⌘",
    link: "#"
  },
  {
    name: "AgeLogs",
    year: 2025,
    desc: "See what famous people were doing at any given age. Tracks celebrities' achievements.",
    color: "#f4edf4",
    symbol: "≈",
    link: "#"
  },
  {
    name: "QuranScroll",
    year: 2026,
    desc: "An infinite-scroll type of reader for the Quran, used and loved by over 5k users and featured on builtformuslims.com.",
    color: "#f4f0e0",
    symbol: "﷽",
    link: "https://everydayquran.com"
  },
  {
    name: "openmail.world",
    year: 2026,
    desc: "Explore public emails of famous CEOs and see how the history of tech and AI was made. Used by more than 10k users.",
    color: "#f0f0e8",
    symbol: "@",
    link: "https://openmail.world"
  },
  {
    name: "VibeCodingDJ",
    year: 2026,
    desc: "The first AI mixer for building and testing ideas. Comes with a tracklist of more than 1k startup ideas. Used and loved by thousands.",
    color: "#1c1c1c",
    symbol: "♫",
    light: false,
    link: "https://vibecodingdj.com"
  },
  {
    name: "DigitalBeings",
    year: 2026,
    desc: "Giving life to new species of digital beings. My life's work.",
    color: "#00FF87",
    symbol: "✦",
    link: "https://digitalbeings.llc"
  }
];

const socialLinks = [
  {
    label: "X",
    handle: "@moyassin",
    href: "https://x.com/moyassin",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@moyassin",
    href: "https://tiktok.com/@moyassin",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "moyassin",
    href: "https://facebook.com/moyassin",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const groupedProjects = projects
  .slice()
  .sort((a, b) => a.year - b.year)
  .reduce((acc, p) => {
    if (!acc[p.year]) acc[p.year] = [];
    acc[p.year].push(p);
    return acc;
  }, {});

const years = Object.keys(groupedProjects).sort((a, b) => Number(a) - Number(b));

function useReveal(rootRef, ready) {
  useEffect(() => {
    if (!ready) return;
    const root = rootRef.current;
    if (!root) return;
    const nodes = root.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("mu-visible");
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [ready, rootRef]);
}

export default function Portfolio() {
  const [ready, setReady] = useState(false);
  const mainRef = useRef(null);
  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);
  useReveal(mainRef, ready);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --spot: #00ff87;
          --spot-dim: rgba(0, 255, 135, 0.12);
          --void: #0a0a09;
          --wall: #111110;
          --mat: #161614;
          --frame: #2c2c28;
          --ink: #f4f2ec;
          --muted: #8c8983;
          --faint: #3a3935;
          --pad: clamp(20px, 5vw, 72px);
          --max: 1180px;
          --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
        }

        body {
          margin: 0;
          background: var(--void);
          color: var(--ink);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .mu-page {
          font-family: "DM Sans", system-ui, sans-serif;
          min-height: 100vh;
          opacity: 0;
          transition: opacity 0.7s var(--ease-out);
        }
        .mu-page.mu-ready { opacity: 1; }

        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.85s var(--ease-out),
            transform 0.85s var(--ease-out);
        }
        [data-reveal].mu-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mu-grain {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 50;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .mu-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 40;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px var(--pad);
          background: linear-gradient(to bottom, rgba(10,10,9,0.94), rgba(10,10,9,0.65) 70%, transparent);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s, background 0.3s;
        }
        .mu-nav-brand {
          font-family: "Instrument Serif", Georgia, serif;
          font-size: 1.15rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: var(--ink);
          text-decoration: none;
        }
        .mu-nav-brand em {
          font-style: italic;
          color: var(--spot);
        }
        .mu-nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .mu-nav a.mu-nav-link {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid var(--faint);
          background: rgba(22,22,20,0.5);
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .mu-nav a.mu-nav-link:hover {
          color: var(--ink);
          border-color: var(--spot);
          background: var(--spot-dim);
        }

        .mu-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 120px var(--pad) 48px;
          overflow: hidden;
        }
        .mu-hero-glow {
          position: absolute;
          top: -20%;
          right: -15%;
          width: 70vw;
          height: 70vw;
          max-width: 900px;
          max-height: 900px;
          background: radial-gradient(circle at 40% 40%, var(--spot-dim), transparent 55%);
          pointer-events: none;
        }
        .mu-hero-line {
          position: absolute;
          top: 0;
          left: var(--pad);
          width: 1px;
          height: min(45vh, 320px);
          background: linear-gradient(to bottom, var(--spot), transparent);
          opacity: 0.5;
        }
        .mu-hero-badge {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 28px;
        }
        .mu-hero h1 {
          font-family: "Instrument Serif", Georgia, serif;
          font-size: clamp(3.2rem, 11vw, 7.5rem);
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: -0.02em;
          max-width: 12ch;
          margin-bottom: 20px;
        }
        .mu-hero h1 span {
          font-style: italic;
          color: var(--spot);
        }
        .mu-hero-tag {
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          font-weight: 500;
          color: var(--muted);
          max-width: 36ch;
          line-height: 1.55;
          margin-bottom: 48px;
        }
        .mu-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 32px 48px;
          padding-top: 8px;
          border-top: 1px solid var(--faint);
          max-width: var(--max);
        }
        .mu-hero-meta dt {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 6px;
        }
        .mu-hero-meta dd {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
        }
        .mu-scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .mu-scroll-bar {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--spot), transparent);
          transform-origin: top center;
          animation: mu-scroll-pulse 2.4s ease-in-out infinite;
        }
        @keyframes mu-scroll-pulse {
          0%, 100% { opacity: 0.35; transform: scaleY(0.55); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        .mu-main {
          position: relative;
          background: var(--wall);
          border-top: 1px solid var(--faint);
        }
        .mu-inner {
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 var(--pad) 100px;
        }

        .mu-room {
          padding: 72px 0 0;
        }
        .mu-room-head {
          display: flex;
          align-items: baseline;
          gap: 20px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .mu-room-num {
          font-family: "Instrument Serif", Georgia, serif;
          font-size: clamp(3rem, 8vw, 4.5rem);
          line-height: 1;
          color: var(--faint);
          min-width: 0.8em;
        }
        .mu-room-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--spot);
        }
        .mu-room h2 {
          font-family: "Instrument Serif", Georgia, serif;
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--ink);
          width: 100%;
        }

        .mu-prose {
          max-width: 52ch;
        }
        .mu-prose p {
          font-size: clamp(15px, 1.7vw, 17px);
          line-height: 1.85;
          color: #b9b6ae;
          margin-bottom: 1.25em;
        }
        .mu-prose p:last-child { margin-bottom: 0; }

        .mu-vitrines {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 8px;
        }
        .mu-vitrine {
          background: var(--mat);
          border: 1px solid var(--frame);
          padding: 28px 24px;
          position: relative;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s var(--ease-out);
        }
        .mu-vitrine::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--spot), transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .mu-vitrine:hover {
          border-color: #454540;
          box-shadow: 0 24px 48px rgba(0,0,0,0.35);
          transform: translateY(-3px);
        }
        .mu-vitrine:hover::before { opacity: 1; }
        .mu-vitrine-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
        }
        .mu-vitrine p {
          font-size: 14px;
          line-height: 1.65;
          color: #c9c6bf;
          font-weight: 500;
        }

        .mu-wing {
          margin-top: 56px;
        }
        .mu-year-row {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 24px 32px;
          align-items: start;
          margin-bottom: 8px;
        }
        .mu-year {
          font-family: "Instrument Serif", Georgia, serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          color: var(--faint);
          line-height: 1;
          position: sticky;
          top: 88px;
          padding-top: 8px;
        }
        .mu-exhibit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .mu-exhibit {
          display: flex;
          flex-direction: column;
          background: var(--mat);
          border: 1px solid var(--frame);
          text-decoration: none;
          color: inherit;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.3s var(--ease-out), transform 0.3s var(--ease-out);
        }
        .mu-exhibit:not(.mu-exhibit--static) { cursor: pointer; }
        .mu-exhibit:not(.mu-exhibit--static):hover {
          border-color: rgba(0, 255, 135, 0.35);
          box-shadow: 0 20px 56px rgba(0,0,0,0.45);
          transform: translateY(-4px);
        }
        .mu-exhibit--static { cursor: default; opacity: 0.92; }

        .mu-exhibit-frame {
          aspect-ratio: 16 / 10;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .mu-exhibit-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
          pointer-events: none;
        }
        .mu-exhibit-symbol {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          user-select: none;
          opacity: 0.35;
        }
        .mu-exhibit-placard {
          padding: 22px 22px 26px;
          border-top: 1px solid var(--frame);
          background: linear-gradient(180deg, rgba(0,0,0,0.15), transparent);
        }
        .mu-exhibit-placard h3 {
          font-family: "Instrument Serif", Georgia, serif;
          font-size: clamp(1.25rem, 2.4vw, 1.65rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
          color: var(--ink);
        }
        .mu-exhibit-placard p {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
        }
        .mu-exhibit-cta {
          margin-top: 14px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--spot);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.25s, transform 0.25s;
        }
        .mu-exhibit:not(.mu-exhibit--static):hover .mu-exhibit-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .mu-footer {
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid var(--faint);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }
        .mu-footer-copy {
          font-family: "Instrument Serif", Georgia, serif;
          font-size: 1.25rem;
          color: var(--muted);
        }
        .mu-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .mu-soc {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid var(--frame);
          background: rgba(22,22,20,0.6);
          font-size: 12px;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .mu-soc:hover {
          border-color: var(--spot);
          background: var(--spot-dim);
        }
        .mu-soc span { font-weight: 500; color: var(--muted); font-size: 11px; }
        .mu-soc:hover span { color: var(--ink); }

        @media (max-width: 900px) {
          .mu-vitrines { grid-template-columns: 1fr; }
          .mu-year-row { grid-template-columns: 1fr; }
          .mu-year { position: relative; top: auto; padding-top: 0; }
          .mu-exhibit-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .mu-scroll { display: none; }
          .mu-hero-meta { flex-direction: column; gap: 20px; }
        }
      `}</style>

      <div className={`mu-page${ready ? " mu-ready" : ""}`}>
        <div className="mu-grain" aria-hidden />

        <nav className="mu-nav">
          <a className="mu-nav-brand" href="/">
            Mohammed <em>Yassin</em>
          </a>
          <div className="mu-nav-links">
            <a className="mu-nav-link" href="/pitch">
              The long read
            </a>
          </div>
        </nav>

        <header className="mu-hero">
          <div className="mu-hero-glow" aria-hidden />
          <div className="mu-hero-line" aria-hidden />
          <p className="mu-hero-badge">Private collection · since 2016</p>
          <h1>
            Museum of<br /><span>work</span>
          </h1>
          <p className="mu-hero-tag">
            Builder, teacher, artist. Pieces below are experiments, products, and obsessions — hung in order of year, like a walk through the archive.
          </p>
          <dl className="mu-hero-meta">
            <div>
              <dt>On view</dt>
              <dd>{projects.length} projects · {years.length} years</dd>
            </div>
            <div>
              <dt>Current focus</dt>
              <dd>DigitalBeings · openmail.world</dd>
            </div>
          </dl>
          <div className="mu-scroll" aria-hidden>
            <span>Enter</span>
            <div className="mu-scroll-bar" />
          </div>
        </header>

        <main className="mu-main" ref={mainRef}>
          <div className="mu-inner">
            <section className="mu-room">
              <div className="mu-room-head">
                <span className="mu-room-num">01</span>
                <div>
                  <p className="mu-room-title">Prologue</p>
                  <h2>How the archive reads</h2>
                </div>
              </div>
              <div className="mu-prose">
                {story.map((p, i) => (
                  <p key={i} data-reveal style={{ transitionDelay: `${80 + i * 70}ms` }}>
                    {p}
                  </p>
                ))}
              </div>
            </section>

            <section className="mu-room">
              <div className="mu-room-head">
                <span className="mu-room-num">02</span>
                <div>
                  <p className="mu-room-title">Vitrine</p>
                  <h2>Small truths on the wall</h2>
                </div>
              </div>
              <div className="mu-vitrines">
                <div className="mu-vitrine" data-reveal style={{ transitionDelay: "0ms" }}>
                  <p className="mu-vitrine-label">Artifact A</p>
                  <p>my typing speed is 1.5 words per second on average ✨</p>
                </div>
                <div className="mu-vitrine" data-reveal style={{ transitionDelay: "80ms" }}>
                  <p className="mu-vitrine-label">Artifact B</p>
                  <p>Suggested the calendar idea for Jmail — it went live and reached millions. 🗓️</p>
                </div>
                <div className="mu-vitrine" data-reveal style={{ transitionDelay: "160ms" }}>
                  <p className="mu-vitrine-label">Artifact C</p>
                  <p>Built the first Situation Monitor — dashboards that connect APIs and track news, now millions use the concept. ⚡</p>
                </div>
              </div>
            </section>

            <section className="mu-room">
              <div className="mu-room-head">
                <span className="mu-room-num">03</span>
                <div>
                  <p className="mu-room-title">Permanent collection</p>
                  <h2>Favorite work</h2>
                </div>
              </div>

              <div className="mu-wing">
                {years.map((yr, yi) => (
                  <div className="mu-year-row" key={yr}>
                    <div className="mu-year" data-reveal style={{ transitionDelay: `${yi * 40}ms` }}>
                      {yr}
                    </div>
                    <div className="mu-exhibit-grid">
                      {groupedProjects[yr].map((p, i) => {
                        const isLight = p.light !== false;
                        const isLink = p.link && p.link !== "#";
                        const symbolColor = isLight ? "#111" : "rgba(255,255,255,0.85)";
                        const delay = `${yi * 60 + i * 50}ms`;
                        const placard = (
                          <div className="mu-exhibit-placard">
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                            {isLink ? (
                              <div className="mu-exhibit-cta">View piece →</div>
                            ) : null}
                          </div>
                        );
                        const frame = (
                          <div className="mu-exhibit-frame" style={{ background: p.color }}>
                            <span className="mu-exhibit-symbol" style={{ color: symbolColor }}>
                              {p.symbol}
                            </span>
                          </div>
                        );
                        const cls = `mu-exhibit${isLink ? "" : " mu-exhibit--static"}`;
                        const reveal = { "data-reveal": true, style: { transitionDelay: delay } };
                        return isLink ? (
                          <a
                            key={p.name}
                            className={cls}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...reveal}
                          >
                            {frame}
                            {placard}
                          </a>
                        ) : (
                          <div key={p.name} className={cls} {...reveal}>
                            {frame}
                            {placard}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <footer className="mu-footer">
              <p className="mu-footer-copy">Mohammed Yassin</p>
              <div className="mu-socials">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} className="mu-soc" target="_blank" rel="noopener noreferrer">
                    {s.icon}
                    <span>{s.handle}</span>
                  </a>
                ))}
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
