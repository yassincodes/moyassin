import { useState, useEffect } from "react";

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
    name: "Sudoku Solver",
    year: 2020,
    desc: "My favorite non-VibeCoding project, built to go deep on algorithms and data structures. Feed it any Sudoku puzzle and watch it solve it step by step, showing every move.",
    color: "#f4f4e8",
    symbol: "9×9",
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
    name: "EverydayQuran",
    year: 2026,
    desc: "An infinite-scroll type of reader for the Quran, used and loved by over 5k users.",
    color: "#f4f0e0",
    symbol: "﷽",
    link: "https://everydayquran.com"
  },
  {
    name: "TikTokMirror",
    year: 2026,
    desc: "The first tool that lets you truly explore your TikTok history, go back month by month, rediscover your favorite videos, and relive the moments you forgot you even saved, already used by 1,000 users in its first week.",
    color: "#f4e8f0",
    symbol: "∞",
    link: "https://tiktokmirror.vercel.app"
  },
  {
    name: "FamousInbox",
    year: 2026,
    desc: "Explore public emails of famous CEOs and see how the history of tech and AI was made. Used by more than 10k users.",
    color: "#f0f0e8",
    symbol: "@",
    link: "https://famousinbox.com"
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

// Group and sort projects by year ascending
const groupedProjects = projects
  .slice()
  .sort((a, b) => a.year - b.year)
  .reduce((acc, p) => {
    if (!acc[p.year]) acc[p.year] = [];
    acc[p.year].push(p);
    return acc;
  }, {});

const tapeItems = ["Building DigitalBeings.llc"];

export default function Portfolio() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 80); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f5f5f2; margin: 0; -webkit-font-smoothing: antialiased; }

        :root {
          --green: #00FF87;
          --ink: #111;
          --muted: #888;
          --faint: #e4e4df;
          --bg: #f5f5f2;
          --pad: 60px;
        }

        .page {
          font-family: 'Bricolage Grotesque', sans-serif;
          opacity: 0;
          transition: opacity 0.5s ease;
          max-width: 1100px;
          margin: 0 auto;
        }
        .page.ready { opacity: 1; }

        /* HEADER */
        .header {
          background: var(--green);
          padding: 72px var(--pad) 0;
          position: relative;
          overflow: hidden;
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
        }
        .header-name {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.9;
          color: var(--ink);
        }
        .header-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          padding-bottom: 6px;
        }
        .header-role {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.45);
        }
        .header-location {
          font-size: 13px;
          font-weight: 500;
          color: rgba(0,0,0,0.35);
          letter-spacing: 0.04em;
        }

        /* TAPE */
        .tape {
          margin-top: 48px;
          background: var(--ink);
          padding: 10px 0;
          overflow: hidden;
          position: relative;
          left: -60px;
          width: calc(100% + 120px);
          transform: rotate(-1.2deg);
        }
        .tape-track {
          display: flex;
          width: max-content;
          animation: slide 14s linear infinite;
        }
        .tape-item {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          white-space: nowrap;
          padding-right: 36px;
        }
        @keyframes slide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* BODY */
        .body { padding: 0 var(--pad); }

        /* DIVIDER */
        .divider {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 48px 0 28px;
        }
        .divider-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .divider-line { flex: 1; height: 1px; background: var(--faint); }

        /* STORY */
        .story {
          padding: 56px 0 52px;
          border-bottom: 1px solid var(--faint);
          max-width: 700px;
        }
        .story p {
          font-size: clamp(15px, 1.9vw, 18px);
          font-weight: 400;
          line-height: 1.9;
          color: #555;
          margin-bottom: 18px;
        }
        .story p:last-child { margin-bottom: 0; }

        /* FACTS */
        .facts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          padding-bottom: 56px;
        }
        .fact-card {
          background: var(--green);
          border-radius: 16px;
          padding: 24px 26px;
        }
        .fact-card:nth-child(1) { transform: rotate(-1.4deg); }
        .fact-card:nth-child(2) { transform: rotate(0.8deg); }
        .fact-card:nth-child(3) { transform: rotate(-0.6deg); }
        .fact-text {
          font-size: clamp(14px, 1.6vw, 16px);
          font-weight: 500;
          color: var(--ink);
          line-height: 1.7;
        }

        /* YEAR GROUPS */
        .year-group { margin-bottom: 8px; }
        .year-label {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 18px 10px;
        }
        .year-num {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #ddd;
          line-height: 1;
          min-width: 80px;
        }
        .year-line { flex: 1; height: 1px; background: var(--faint); }
        .year-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }

        /* PROJECTS */
        .proj {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 20px 18px;
          border-radius: 16px;
          cursor: default;
          transition: background 0.15s;
          text-decoration: none;
          color: inherit;
        }
        .proj.linkable { cursor: pointer; }
        .proj:hover { background: #ebebE6; }
        .proj-thumb {
          width: 110px;
          height: 88px;
          border-radius: 12px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .proj-symbol {
          font-size: 20px;
          font-weight: 800;
          user-select: none;
          opacity: 0.22;
          letter-spacing: -0.02em;
        }
        .proj-name {
          font-size: clamp(18px, 2.4vw, 26px);
          font-weight: 700;
          color: var(--ink);
          line-height: 1.1;
          margin-bottom: 7px;
          letter-spacing: -0.025em;
        }
        .proj-desc {
          font-size: clamp(12.5px, 1.3vw, 14px);
          font-weight: 400;
          color: #bbb;
          line-height: 1.7;
        }

        /* PROJECTS WRAP */
        .projects-wrap { padding-bottom: 60px; }

        /* FOOTER */
        .footer {
          border-top: 1px solid var(--faint);
          padding: 32px 0 56px;
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
        .socials { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .soc {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
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
        .soc:hover { background: var(--green); border-color: var(--green); }
        .soc-handle { font-weight: 400; color: #aaa; font-size: 11.5px; }
        .soc:hover .soc-handle { color: #555; }

        @media (max-width: 860px) {
          :root { --pad: 36px; }
          .year-grid { grid-template-columns: 1fr 1fr; gap: 3px; }
          .proj-thumb { width: 88px; height: 72px; }
          .facts { grid-template-columns: 1fr 1fr; }
          .fact-card:nth-child(3) { grid-column: span 2; transform: rotate(0.4deg); }
        }
        @media (max-width: 620px) {
          :root { --pad: 22px; }
          .header { padding: 44px var(--pad) 0; }
          .header-meta { display: none; }
          .year-grid { grid-template-columns: 1fr; gap: 3px; }
          .proj { gap: 14px; padding: 14px 12px; }
          .proj-thumb { width: 76px; height: 62px; border-radius: 10px; }
          .facts { grid-template-columns: 1fr; padding-bottom: 40px; }
          .fact-card:nth-child(1),
          .fact-card:nth-child(2),
          .fact-card:nth-child(3) { transform: none; grid-column: span 1; }
          .story { padding: 40px 0 40px; }
          .footer { flex-direction: column; align-items: flex-start; gap: 14px; }
          .divider { padding: 36px 0 22px; }
          .tape { left: -22px; width: calc(100% + 44px); }
          .year-num { font-size: 28px; min-width: 60px; }
        }
        @media (max-width: 380px) {
          :root { --pad: 16px; }
          .proj-thumb { display: none; }
          .tape { left: -16px; width: calc(100% + 32px); }
        }
      `}</style>

      <div className={`page${ready ? " ready" : ""}`}>

        {/* HEADER */}
        <header className="header">
          <div className="header-inner">
            <div className="header-name">Mohammed<br />Yassin</div>
            
          </div>
          <div className="tape">
            <div className="tape-track">
              {[...tapeItems, ...tapeItems, ...tapeItems, ...tapeItems, ...tapeItems, ...tapeItems].map((t, i) => (
                <span key={i} className="tape-item" style={{ color: i % 2 === 0 ? "#00FF87" : "#fff" }}>{t}</span>
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
          <div className="divider" style={{ paddingTop: "44px" }}>
            <span className="divider-label">Fun Facts</span>
          </div>
          <div className="facts">
            <div className="fact-card"><div className="fact-text">my typing speed is 1.5 words per second on average ✨</div></div>
            <div className="fact-card"><div className="fact-text">Suggested the calendar idea for Jmail — it went live and reached millions. 🗓️</div></div>
            <div className="fact-card"><div className="fact-text">Built the first Situation Monitor — dashboards that connect APIs and track news, now millions use the concept. ⚡</div></div>
          </div>

          {/* PROJECTS */}
          <div className="divider">
            <span className="divider-label">Favorite Work</span>
            <div className="divider-line" />
          </div>

          <div className="projects-wrap">
            {Object.keys(groupedProjects).map((yr) => (
              <div className="year-group" key={yr}>
                <div className="year-label">
                  <span className="year-num">{yr}</span>
                  <div className="year-line" />
                </div>
                <div className="year-grid">
                  {groupedProjects[yr].map((p, i) => {
                    const isLight = p.light !== false;
                    const isLink = p.link && p.link !== "#";
                    const symbolColor = isLight ? "#111" : "#fff";
                    const inner = (
                      <>
                        <div className="proj-thumb" style={{ background: p.color }}>
                          <span className="proj-symbol" style={{ color: symbolColor }}>{p.symbol}</span>
                        </div>
                        <div>
                          <div className="proj-name">{p.name}</div>
                          <div className="proj-desc">{p.desc}</div>
                        </div>
                      </>
                    );
                    return isLink ? (
                      <a key={i} className="proj linkable" href={p.link} target="_blank" rel="noopener noreferrer">{inner}</a>
                    ) : (
                      <div key={i} className="proj">{inner}</div>
                    );
                  })}
                </div>
              </div>
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