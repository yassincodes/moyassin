import { useState, useEffect } from "react";

const story = [
  "At 16, I built the largest English-learning platform in the Arab world, reaching more than 80,000 learners.",
  "I graduated high school as a math student and enrolled in Teachers' College, but I barely attended classes. I chose to teach myself how to code instead.",
  "I hacked Scrimba for a year of free access and learned how to code from engineers at Amazon, Netflix, JP Morgan, and Uber. Since then, I've built more than 100 projects for myself and many different clients.",
  "On World Teachers' Day 2023, I entered a classroom for the first time. That day, I also started my lifelong project, Assistant. The school became my laboratory. Teaching, coding, building, experimenting, all at once.",
  "Now I'm obsessed with giving life to new species of beings",
];

const projects = [
  { name: "English Teaching Platform", desc: "The largest English-learning platform for Arabic speakers — built when I was 16.", color: "#e8f4e8", symbol: "EN→AR" },
  { name: "Social Media From the Past", desc: "The feeds of history's iconic figures, as if social media had always existed.", color: "#f0e8e0", symbol: "1789" },
  { name: "Drawing Students as Grown-Ups", desc: "Generative AI portraits of students as their future selves. Featured on Al Jazeera & Al Arabiya.", color: "#e8e8f4", symbol: "2047" },
  { name: "EverydayQuran", desc: "A personalized Quran learning platform that adapts to each learner's pace.", color: "#f4f0e0", symbol: "﷽" },
  { name: "YeTweets", desc: "Preserved Kanye's deleted tweets. 200,000 users in under 24 hours.", color: "#111", symbol: "YE", light: false },
  { name: "KeyboardMate", desc: "An intelligent keyboard companion that learns your writing style.", color: "#e4eff4", symbol: "⌘" },
  { name: "ComeRate.me", desc: "A social platform for honest peer feedback and authentic ratings.", color: "#f4e8e8", symbol: "★" },
  { name: "OpenShelf", desc: "A platform to keep tracking your shelves.", color: "#e8f4f4", symbol: "📚" },
  { name: "FamousInbox.com", desc: "Explore public emails of influential figures. Read messages that shaped history.", color: "#f0f0e8", symbol: "@" },
  { name: "Situation Monitor", desc: "Real-time tracking of digital signals and trends. I pioneered the concept.", color: "#1a1a2e", symbol: "◉", light: false },
  { name: "AgeLogs", desc: "See what famous people were doing at your exact age right now.", color: "#f4edf4", symbol: "≈" },
  { name: "HowToWinFriends", desc: "A practical guide for building genuine relationships with AI.", color: "#eef4f0", symbol: "↔" },
  { name: "Sudoku Solver", desc: "AI-powered solver for any Sudoku puzzle, showing its reasoning step by step.", color: "#f4f4e8", symbol: "9×9" },
  { name: "data Wrapped", desc: "Turn your TikTok data into a personalized year-in-review video.", color: "#f4e8f0", symbol: "∞" },
  { name: "VibeCodingDJ", desc: "An AI DJ for websites — mix any URLs into remixable webpages.", color: "#1c1c1c", symbol: "♫", light: false },
  { name: "DigitalBeings", desc: "Giving life to new species of digital beings. My life's work.", color: "#00FF87", symbol: "✦" },
];

const socialLinks = [
  {
    label: "X",
    handle: "@moyassin",
    href: "https://x.com/moyassin",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: "TikTok",
    handle: "@moyassin",
    href: "https://tiktok.com/@moyassin",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>,
  },
  {
    label: "Facebook",
    handle: "moyassin",
    href: "https://facebook.com/moyassin",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
];

export default function Portfolio() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 80); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f7f7f5; margin: 0; -webkit-font-smoothing: antialiased; }

        :root {
          --yellow: #00FF87;
          --ink: #111;
          --muted: #888;
          --faint: #e8e8e4;
          --bg: #f7f7f5;
          --pad: 56px;
        }

        .page {
          font-family: 'Bricolage Grotesque', sans-serif;
          opacity: 0;
          transition: opacity 0.6s ease;
          max-width: 1100px;
          margin: 0 auto;
        }
        .page.ready { opacity: 1; }

        /* ── HEADER ── */
        .header {
          background: #00FF87;
          padding: 64px var(--pad) 56px;
          position: relative;
          overflow: hidden;
          
        }
        .header-name {
          font-size: clamp(54px, 7vw, 88px);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 0.92;
          color: var(--ink);
          position: relative;
          z-index: 1;
        }

        /* banner tape */
        .tape {
          position: absolute;
          bottom: -2px;
          left: -40px;
          right: -40px;
          transform: rotate(-2deg);
          background: var(--ink);
          padding: 9px 0;
          overflow: hidden;
          z-index: 2;
        }
        .tape-track {
          display: flex;
          width: max-content;
          animation: slide 10s linear infinite;
        }
        .tape-item {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          white-space: nowrap;
          padding-right: 32px;
        }
        @keyframes slide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── BODY ── */
        .body { padding: 0 var(--pad); }

        /* ── STORY ── */
        .story {
          padding: 52px 0 48px;
          border-bottom: 1px solid var(--faint);
          max-width: 620px;
        }
        .story p {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.85;
          color: #555;
          margin-bottom: 14px;
        }
        .story p:last-child { margin-bottom: 0; }

        /* ── SECTION LABEL ── */
        .sec {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 40px 0 24px;
        }
        .sec-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink);
        }
        .sec-line {
          flex: 1;
          height: 1px;
          background: var(--faint);
        }
        .sec-count {
          font-size: 11px;
          font-weight: 500;
          color: #bbb;
          letter-spacing: 0.06em;
        }

        /* ── PROJECT GRID ── */
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          padding-bottom: 52px;
        }
        .proj {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          border-radius: 14px;
          cursor: default;
          transition: background 0.15s;
        }
        .proj:hover { background: #eeeee9; }
        .proj-thumb {
          width: 108px;
          height: 78px;
          border-radius: 10px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .proj-symbol {
          font-size: 18px;
          font-weight: 800;
          user-select: none;
          opacity: 0.25;
          letter-spacing: -0.02em;
        }
        .proj-name {
          font-size: 14.5px;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.25;
          margin-bottom: 5px;
          letter-spacing: -0.01em;
        }
        .proj-desc {
          font-size: 12.5px;
          font-weight: 400;
          color: #aaa;
          line-height: 1.55;
        }

        /* ── FUN FACT ── */
        .fact-wrap {
          padding-bottom: 52px;
          border-top: 1px solid var(--faint);
          padding-top: 40px;
        }
        .fact-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #00FF87;
          border-radius: 14px;
          padding: 20px 22px;
          max-width: 480px;
        }
        .fact-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--ink);
          flex-shrink: 0;
          margin-top: 7px;
        }
        .fact-inner {}
        .fact-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 6px;
        }
        .fact-text {
          font-size: 14.5px;
          font-weight: 500;
          color: var(--ink);
          line-height: 1.6;
        }

        /* ── FOOTER ── */
        .footer {
          border-top: 1px solid var(--faint);
          padding: 28px 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .footer-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.01em;
        }
        .socials { display: flex; align-items: center; gap: 4px; }
        .soc {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid var(--faint);
          background: #fff;
          font-size: 12px;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          transition: background 0.15s, border-color 0.15s;
          letter-spacing: -0.01em;
        }
        .soc:hover { background: #00FF87; border-color: #00FF87; }
        .soc-handle { font-weight: 400; color: #aaa; font-size: 11.5px; }
        .soc:hover .soc-handle { color: #555; }

        @media (max-width: 640px) {
          :root { --pad: 20px; }
          .grid { grid-template-columns: 1fr; }
          .footer { flex-direction: column; align-items: flex-start; }
          .socials { flex-wrap: wrap; }
        }
      `}</style>

      <div className={`page${ready ? " ready" : ""}`}>

        {/* HEADER */}
        <header className="header">
          <div className="header-name">Mohammed<br />Yassin</div>
          <div className="tape">
            <div className="tape-track">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="tape-item" style={{ color: i % 2 === 0 ? "#00FF87" : "#fff" }}>
                  Building DigitalBeings.inc
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="body">

          {/* STORY */}
          <section className="story">
            {story.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          {/* PROJECTS */}
          <div className="sec">
            <span className="sec-title">Favorite Work</span>
          </div>
          <div className="grid">
            {projects.map((p, i) => (
              <div className="proj" key={i}>
                <div className="proj-thumb" style={{ background: p.color }}>
                  <span className="proj-symbol" style={{ color: p.light === false ? "#fff" : "#111" }}>{p.symbol}</span>
                </div>
                <div>
                  <div className="proj-name">{p.name}</div>
                  <div className="proj-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FUN FACT */}
          <div className="fact-wrap">
            <div className="fact-card">
              <div className="fact-dot" />
              <div className="fact-inner">
                <div className="fact-label">Fun fact</div>
                <div className="fact-text">Suggested the calendar idea for Jmail — it got implemented. 🗓️</div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="footer">
            <span className="footer-name">Mohammed Yassin</span>
            <div className="socials">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="soc" target="_blank" rel="noopener noreferrer">
                  {s.icon}
                  <span className="soc-handle">{s.handle}</span>
                </a>
              ))}
            </div>
          </footer>

        </div>
      </div>
    </>
  );
}