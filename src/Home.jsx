import { useRef } from "react";
import SiteNav from "./SiteNav.jsx";
import {
  useIntroSequence,
  usePageLive,
  useReveal,
  useScrollParallax,
} from "./useSiteMotion.js";

const projects = [
  {
    name: "YeTweets",
    year: "2025",
    medium: "Web Archive",
    dims: "1M+ visitors",
    symbol: "YE",
    wax: "#1e1b4b",
    ink: "#e0e7ff",
    accent: "#818cf8",
    desc: "The night Ye deleted all his tweets, I scraped them and launched a site in one hour. A million visitors. Featured in remixes watched by hundreds of thousands.",
    link: null,
  },
  {
    name: "Drawing Students as Grown-Ups",
    year: "2024",
    medium: "Generative AI Installation",
    dims: "1M+ children reached · Al Jazeera · Al Arabiya",
    symbol: "2047",
    wax: "#fce7f3",
    ink: "#831843",
    accent: "#f472b6",
    desc: "AI portraits of students as their future selves. Over a million children were introduced to generative AI for the first time through this project.",
    link: null,
  },
  {
    name: "VibeCodingDJ",
    year: "2026",
    medium: "AI Mixer",
    dims: "1k+ ideas · Thousands of users",
    symbol: "♫",
    wax: "#0f172a",
    ink: "#e2e8f0",
    accent: "#38bdf8",
    desc: "The first AI mixer for building and testing startup ideas. Comes with a tracklist of over 1,000 concepts.",
    link: "https://vibecodingdj.com",
  },
  {
    name: "Social Media from the Past",
    year: "2023",
    medium: "Interactive Time Machine",
    dims: "Graduation project",
    symbol: "1789",
    wax: "#fef9c3",
    ink: "#713f12",
    accent: "#ca8a04",
    desc: "A time machine showing what social media would look like in different historical eras. Required cloning Twitter, Facebook, and Messenger from scratch.",
    link: null,
  },
  {
    name: "Elon vs Putin",
    year: "2022",
    medium: "Real-time Voting Platform",
    dims: "100k visits · 10k votes",
    symbol: "VS",
    wax: "#ede9fe",
    ink: "#3b0764",
    accent: "#7c3aed",
    desc: "Built during the viral moment when Elon Musk challenged Vladimir Putin to a fight. A real-time voting platform that reached over 100k visits.",
    link: null,
  },
  {
    name: "English Teaching Platform",
    year: "2016",
    medium: "Web Platform",
    dims: "80,000 learners",
    symbol: "EN→AR",
    wax: "#d1fae5",
    ink: "#064e3b",
    accent: "#10b981",
    desc: "The largest English-learning platform for Arabic speakers at the time, reaching more than 80,000 students across the Arab world.",
    link: null,
  },
  {
    name: "Situation Monitor",
    year: "2025",
    medium: "Dashboard",
    dims: "A year before it was mainstream",
    symbol: "⚡",
    wax: "#1c1917",
    ink: "#e7e5e4",
    accent: "#f59e0b",
    desc: "The first real-time situation monitoring dashboard. Built the core concept a full year before similar tools gained widespread popularity.",
    link: "https://situationmonitor.vercel.app",
  },
  {
    name: "rateyouruni",
    year: "2021",
    medium: "Review Platform",
    dims: "20k visitors · 1k students",
    symbol: "🎓",
    wax: "#fce7f3",
    ink: "#831843",
    accent: "#ec4899",
    desc: "A university review platform for Tunisian universities. Students share their experiences and help each other make informed decisions.",
    link: "https://rateyouruni.com",
  },
  {
    name: "KeyboardMate",
    year: "2025",
    medium: "Desktop Companion",
    dims: "Personal use · Early access open",
    symbol: "⌘",
    wax: "#ecfeff",
    ink: "#164e63",
    accent: "#06b6d4",
    desc: "An intelligent keyboard companion that lives inside the keyboard. Used by me every single day.",
    link: null,
  },
  {
    name: "QuranScroll",
    year: "2026",
    medium: "Reading Experience",
    dims: "5k+ daily readers · builtformuslims.com",
    symbol: "﷽",
    wax: "#fefce8",
    ink: "#713f12",
    accent: "#eab308",
    desc: "An infinite-scroll reader for the Quran. Used and loved by over 5,000 readers, featured across the Muslim web.",
    link: "https://everydayquran.com",
  },
  {
    name: "EduMap",
    year: "2020",
    medium: "Mobile Application",
    dims: "Co-built with JPMorgan engineer",
    symbol: "📍",
    wax: "#dbeafe",
    ink: "#1e3a5f",
    accent: "#3b82f6",
    desc: "Uber for teachers. A platform connecting students with on-demand tutors. Co-built with a JPMorgan engineer. One of those beautiful ones that almost made it.",
    link: null,
  },
  {
    name: "AgeLogs",
    year: "2025",
    medium: "Reference Tool",
    dims: "Celebrity achievement tracker",
    symbol: "≈",
    wax: "#f0fdf4",
    ink: "#14532d",
    accent: "#22c55e",
    desc: "See what famous people were doing at any given age. A reference tool for ambition.",
    link: null,
  },
  {
    name: "openmail.world",
    year: "2026",
    medium: "Email Archive",
    dims: "10k+ users",
    symbol: "@",
    wax: "#f0faf5",
    ink: "#134e3a",
    accent: "#10b981",
    desc: "Explore the public emails of famous CEOs and witness how the history of tech and AI was actually made.",
    link: "https://openmail.world",
  },
  {
    name: "DigitalBeings",
    year: "2026",
    medium: "Ongoing Work",
    dims: "Tunis · An agency of a new kind",
    symbol: "✦",
    wax: "#022c22",
    ink: "#d1fae5",
    accent: "#34d399",
    desc: "Giving life to new species of digital beings. My life's work.",
    link: "https://digitalbeings.llc",
  },
];

function isDarkWax(wax) {
  return ["#0f172a", "#1c1917", "#1e1b4b", "#022c22"].includes(wax);
}

function Artwork({ p, index }) {
  const hasLink = !!p.link;
  const dark = isDarkWax(p.wax);
  const side = index % 2 === 0 ? "art-left" : "art-right";
  const delay = `${Math.min(index * 70, 700)}ms`;

  const glyphStyle = {
    fontFamily: p.symbol.length > 2 ? "'EB Garamond', Georgia, serif" : "system-ui, sans-serif",
    fontSize: p.symbol === "﷽" ? "clamp(1.8rem, 6vw, 3.2rem)" : "clamp(3rem, 9vw, 6.5rem)",
    color: p.ink,
    letterSpacing: "-0.02em",
  };

  const content = (
    <div className="art-reveal" data-reveal={side} style={{ transitionDelay: delay }}>
      <span className="art-piece-label">{p.year}</span>
      <div className="art-canvas-wrap" data-parallax>
        <div className="art-canvas" style={{ background: p.wax }}>
          <div
            className="art-canvas__vignette"
            style={{
              background: dark
                ? "radial-gradient(ellipse 70% 65% at 50% 38%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.38) 100%)"
                : "radial-gradient(ellipse 70% 65% at 50% 38%, rgba(255,255,255,0) 0%, rgba(0,0,0,0.16) 100%)",
            }}
          />
          <div className="art-canvas__frame" />
          <span className="art-canvas__glyph" style={glyphStyle}>
            {p.symbol}
          </span>
          <span className="art-year" style={{ color: p.ink }}>
            {p.year}
          </span>
        </div>
      </div>
      <div className="art-plaque">
        <p className="art-plaque__title">{p.name}</p>
        <p className="art-plaque__medium">{p.medium}</p>
        <p className="art-plaque__desc">{p.desc}</p>
        {p.dims && (
          <p className="art-plaque__dims" style={{ color: p.accent }}>
            {p.dims}
          </p>
        )}
        {hasLink && <p className="art-plaque__cta">View work →</p>}
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <a href={p.link} target="_blank" rel="noopener noreferrer" className="art-piece">
        {content}
      </a>
    );
  }

  return <div className="art-piece">{content}</div>;
}

export default function Gallery() {
  const mainRef = useRef(null);
  const live = usePageLive();
  const { introDone, navIn } = useIntroSequence(2400);

  useReveal(mainRef, live && introDone);
  useScrollParallax(live && introDone);

  const pageClass = ["site-page", live && "is-live", navIn && "nav-in"].filter(Boolean).join(" ");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Source+Sans+3:wght@400;500;600&display=swap');

        .gallery-main {
          padding-top: calc(var(--site-pad-y) + 44px);
          padding-bottom: var(--site-pad-y);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
          gap: clamp(32px, 4vw, 52px) clamp(20px, 3vw, 36px);
        }

        .gallery-footer {
          margin-top: clamp(48px, 8vh, 72px);
          padding-top: clamp(24px, 4vh, 40px);
          border-top: 1px solid var(--site-line);
        }

        .sig-line[data-reveal] {
          --reveal-y: 40px;
          --reveal-scale: 0.98;
        }

        a.art-piece { text-decoration: none; color: inherit; display: block; }
      `}</style>

      <div className={`site-intro${introDone ? " is-done" : ""}`} aria-hidden>
        <div className="site-intro-line" />
        <p className="site-intro-text">selected works</p>
      </div>

      <div className={pageClass} ref={mainRef}>
        <SiteNav active="gallery" />

        <main className="site-shell gallery-main">
          <section className="gallery-grid" aria-label="Gallery of works">
            {projects.map((p, i) => (
              <Artwork key={p.name} p={p} index={i} />
            ))}
          </section>

          <footer className="gallery-footer">
            <p className="sig-line" data-reveal="soft" style={{ transitionDelay: "80ms" }}>
              Selected works<span>,</span>Mohammed Yassin
            </p>
            <nav className="sig-platforms" aria-label="Links" data-reveal="soft" style={{ transitionDelay: "160ms" }}>
              <a href="/about" className="sig-platform">
                <span className="sig-platform-name">About</span>
                <span className="sig-platform-handle">moyass.in/about</span>
              </a>
              {[
                { label: "X", href: "https://x.com/moyassin" },
                { label: "TikTok", href: "https://tiktok.com/@moyassin" },
                { label: "Facebook", href: "https://facebook.com/moyassin" },
                { label: "Medium", href: "https://medium.com/@moyassin" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="sig-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sig-platform-name">{s.label}</span>
                  <span className="sig-platform-handle">@moyassin</span>
                </a>
              ))}
            </nav>
          </footer>
        </main>
      </div>
    </>
  );
}
