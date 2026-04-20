import { useState, useEffect } from "react";

const story = [
  "At 16, I built the largest English-learning platform in the Arab world, reaching more than 80,000 learners.",
  "I graduated high school as a math student and enrolled in Teachers' College, but I barely attended classes. I chose to teach myself how to code instead.",
  "I hacked Scrimba for a year of free access and learned how to code from engineers at Amazon, Netflix, JP Morgan, and Uber. Since then, I've built more than 100 projects for myself and many different clients.",
  "On World Teachers' Day 2023, I entered a classroom for the first time. That day, I also started my lifelong project, Assistant. The school became my laboratory. Teaching, coding, building, experimenting, all at once.",
  "Now I'm obsessed with giving life to new species of beings",
];

const projects = [
  { name: "English Teaching Platform", desc: "The largest English-learning platform for Arabic speakers back in the time, serving more than 80k students.", color: "#e8f4e8", symbol: "EN→AR", link: "#" },
  { name: "rateyouruni", desc: "A university review platform for Tunisian universities, gained 20k visitors, with 1 thousand students who share their experiences and help each other make informed decisions.", color: "#f4e8e8", symbol: "🎓", link: "https://rateyouruni.com" },
  { name: "Social Media From the Past", desc: "My graduation project, a time machine showing what social media would look like in different timelines. I had to clone Twitter, Facebook, and Messenger for the early version.", color: "#f0e8e0", symbol: "1789", link: "#" },
  { name: "Drawing Students as Grown-Ups", desc: "Generative AI portraits of students as their future selves. At least half a million kids got exposed to generative AI for the first time through this project, making it mostly the first use case for AI in education. Featured on Al Jazeera & Al Arabiya.", color: "#e8e8f4", symbol: "2047", link: "#" },
  { name: "EverydayQuran", desc: "An infinite-scroll type of reader for the Quran, used and loved by over 5k users.", color: "#f4f0e0", symbol: "﷽", link: "https://everydayquran.com" },
  { name: "YeTweets", desc: "The night Ye deleted all his tweets, I scraped them and put them on a 1-hour VibeCoded website. Reached half a million visitors so far and used and loved by a lot of influencers including @sneako, @its.blanko, @AetherionArtOG and featured on ye remixes viewed by hundreds of thousands.", color: "#111", symbol: "YE", light: false, link: "#" },
  { name: "KeyboardMate", desc: "An intelligent keyboard companion that lives inside my keyboard. Project still open for early access, but used by me every day.", color: "#e4eff4", symbol: "⌘", link: "#" },
  { name: "FamousInbox", desc: "Explore public emails of famous CEOs and see how the history of tech and AI was made. Used by more than 10k users.", color: "#f0f0e8", symbol: "@", link: "https://famousinbox.com" },
  { name: "AgeLogs", desc: "See what famous people were doing at any given age. Tracks celebrities' achievements.", color: "#f4edf4", symbol: "≈", link: "#" },
  { name: "Sudoku Solver", desc: "My favorite non-VibeCoding project, built to learn more about algorithms and data structures back in the time. AI-powered solver for any Sudoku puzzle, showing its reasoning step by step.", color: "#f4f4e8", symbol: "9×9", link: "#" },
  { name: "TikTokMirror", desc: "The first tool that lets you truly explore your TikTok history, go back month by month, rediscover your favorite videos, and relive the moments you forgot you even saved, already used by 1,000 users in its first week.", color: "#f4e8f0", symbol: "∞", link: "https://tiktokmirror.vercel.app" },
  { name: "VibeCodingDJ", desc: "The first AI mixer for building and testing ideas. Comes with a tracklist of more than 1k startup ideas. Used and loved by thousands.", color: "#1c1c1c", symbol: "♫", light: false, link: "https://vibecodingdj.com" },
  { name: "DigitalBeings", desc: "Giving life to new species of digital beings. My life's work.", color: "#00FF87", symbol: "✦", link: "https://digitalbeings.llc" },
];

const socialLinks = [
  { label: "OpenShelf", handle: "@moyassin", href: "https://openshelf.link", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.445l-7.416 3.968 1.48-8.279L0 9.306l8.332-1.151z"/></svg> },
  { label: "X", handle: "@moyassin", href: "https://x.com/moyassin", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "TikTok", handle: "@moyassin", href: "https://tiktok.com/@moyassin", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg> },
  { label: "Facebook", handle: "moyassin", href: "https://facebook.com/moyassin", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
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
          font-size: clamp(42px, 7vw, 88px);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 0.92;
          color: var(--ink);
          position: relative;
          z-index: 1;
        }

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
          max-width: 680px;
        }
        .story p {
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 400;
          line-height: 1.85;
          color: #555;
          margin-bottom: 16px;
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
          white-space: nowrap;
        }
        .sec-line {
          flex: 1;
          height: 1px;
          background: var(--faint);
        }

        /* ── FUN FACT ── */
        .fact-wrap {
          padding-bottom: 52px;
          padding-top: 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .fact-card {
          background: #00FF87;
          border-radius: 14px;
          padding: 22px 24px;
        }
        .fact-card:nth-child(1) { transform: rotate(-1.5deg); }
        .fact-card:nth-child(2) { transform: rotate(1deg); }
        .fact-card:nth-child(3) { transform: rotate(-0.8deg); }
        .fact-text {
          font-size: clamp(14px, 1.6vw, 17px);
          font-weight: 500;
          color: var(--ink);
          line-height: 1.65;
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
          gap: 18px;
          padding: 16px;
          border-radius: 16px;
          cursor: default;
          transition: background 0.15s;
          text-decoration: none;
        }
        .proj[href]:not([href="#"]) {
          cursor: pointer;
        }
        .proj:hover { background: #eeeee9; }
        .proj-thumb {
          width: 130px;
          height: 100px;
          border-radius: 12px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .proj-symbol {
          font-size: 22px;
          font-weight: 800;
          user-select: none;
          opacity: 0.25;
          letter-spacing: -0.02em;
        }
        .proj-name {
          font-size: clamp(20px, 2.8vw, 34px);
          font-weight: 700;
          color: var(--ink);
          line-height: 1.15;
          margin-bottom: 7px;
          letter-spacing: -0.02em;
        }
        .proj-desc {
          font-size: clamp(13px, 1.4vw, 15px);
          font-weight: 400;
          color: #aaa;
          line-height: 1.65;
        }

        /* ── FOOTER ── */
        .footer {
          border-top: 1px solid var(--faint);
          padding: 28px 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .footer-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.01em;
        }
        .socials { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
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

        @media (max-width: 860px) {
          :root { --pad: 32px; }
          .grid { grid-template-columns: 1fr 1fr; gap: 4px; }
          .proj-thumb { width: 100px; height: 78px; }
          .fact-wrap { grid-template-columns: 1fr 1fr; }
          .fact-card:nth-child(3) { grid-column: span 2; transform: rotate(0.5deg); }
        }

        @media (max-width: 600px) {
          :root { --pad: 20px; }
          .header { padding: 44px var(--pad) 52px; }
          .grid { grid-template-columns: 1fr; gap: 4px; }
          .proj { gap: 14px; padding: 12px; }
          .proj-thumb { width: 80px; height: 64px; border-radius: 10px; }
          .proj-name { font-size: 20px; }
          .proj-desc { font-size: 13px; }
          .story { padding: 36px 0 36px; }
          .fact-card { padding: 18px 20px; }
          .fact-wrap { padding-top: 28px; padding-bottom: 36px; grid-template-columns: 1fr; }
          .fact-card:nth-child(3) { grid-column: span 1; }
          .fact-card:nth-child(1),
          .fact-card:nth-child(2),
          .fact-card:nth-child(3) { transform: none; }
          .footer { flex-direction: column; align-items: flex-start; gap: 16px; }
          .sec { padding: 28px 0 18px; }
        }

        @media (max-width: 380px) {
          :root { --pad: 16px; }
          .proj-thumb { display: none; }
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
                  Building DigitalBeings.llc
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

          {/* FUN FACTS */}
          <div className="sec">
            <span className="sec-title">Fun Facts</span>
          </div>
          <div className="fact-wrap">
            <div className="fact-card">
              <div className="fact-text">my typing speed is 1.5 words per second on average ✨</div>
            </div>
            <div className="fact-card">
              <div className="fact-text">Suggested the calendar idea for Jmail — it went live and reached millions. 🗓️</div>
            </div>
            <div className="fact-card">
              <div className="fact-text">Built the first Situation Monitor — dashboards that connect APIs and track news, now millions use the concept. ⚡</div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="sec">
            <span className="sec-title">Favorite Work</span>
          </div>
          <div className="grid">
            {projects.map((p, i) => (
              <a
                className="proj"
                key={i}
                href={p.link}
                target={p.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <div className="proj-thumb" style={{ background: p.color }}>
                  <span className="proj-symbol" style={{ color: p.light === false ? "#fff" : "#111" }}>{p.symbol}</span>
                </div>
                <div>
                  <div className="proj-name">{p.name}</div>
                  <div className="proj-desc">{p.desc}</div>
                </div>
              </a>
            ))}
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