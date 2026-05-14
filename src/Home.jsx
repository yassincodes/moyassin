import { useEffect, useRef, useState } from "react";

const projects = [
  // dark opens strong
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
  // light, warm — breath after dark
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
  // dark again — tension
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
  // soft yellow — release
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
  // violet — moody
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
  // green — calm
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
  // dark — punchy
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
  // pink — soft contrast
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
  // cyan — crisp
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
  // gold — warmth
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
  // blue — cool
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
  // green — quiet
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
  // green — close cousin, intentional pairing
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
  // darkest — the end
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

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = el.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

function ArtworkYear({ year }) {
  return (
    <span style={{
      fontFamily: "'EB Garamond', Georgia, serif",
      fontSize: "11px",
      letterSpacing: "0.2em",
      color: "#9ca3af",
      display: "block",
      marginBottom: "6px",
      fontStyle: "italic",
    }}>
      {year}
    </span>
  );
}

function Artwork({ p, index }) {
  const [hovered, setHovered] = useState(false);
  const hasLink = !!p.link;
  const isLight = p.wax.startsWith("#0") || p.wax.startsWith("#1") || p.wax === "#0f172a" || p.wax === "#022c22";
  const delay = `${index * 55}ms`;

  const canvas = (
    <div style={{
      background: p.wax,
      position: "relative",
      aspectRatio: "4/5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.6s cubic-bezier(0.22,1,0.36,1)",
      transform: hovered ? "scale(1.012)" : "scale(1)",
      boxShadow: hovered
        ? `0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.3)`
        : `0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.2)`,
    }}>
      {/* Spotlight vignette */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: isLight
          ? "radial-gradient(ellipse 70% 65% at 50% 38%, rgba(255,255,255,0) 0%, rgba(0,0,0,0.18) 100%)"
          : "radial-gradient(ellipse 70% 65% at 50% 38%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.38) 100%)",
        pointerEvents: "none",
        zIndex: 1,
      }} />
      {/* Inner frame line */}
      <div style={{
        position: "absolute",
        inset: "16px",
        border: `1px solid ${isLight ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)"}`,
        pointerEvents: "none",
        zIndex: 2,
      }} />
      {/* Symbol */}
      <span style={{
        fontFamily: p.symbol.length > 2 ? "'EB Garamond', Georgia, serif" : "system-ui, sans-serif",
        fontSize: p.symbol === "﷽" ? "clamp(1.8rem, 6vw, 3.2rem)" : "clamp(3rem, 9vw, 6.5rem)",
        fontWeight: "700",
        color: p.ink,
        opacity: hovered ? 0.82 : 0.62,
        letterSpacing: "-0.02em",
        lineHeight: 1,
        userSelect: "none",
        position: "relative",
        zIndex: 3,
        transition: "opacity 0.4s",
        textAlign: "center",
        padding: "0 1rem",
      }}>
        {p.symbol}
      </span>
      {/* Year badge bottom-right */}
      <span style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        fontFamily: "'EB Garamond', Georgia, serif",
        fontSize: "11px",
        letterSpacing: "0.18em",
        color: p.ink,
        opacity: 0.5,
        zIndex: 3,
      }}>
        {p.year}
      </span>
    </div>
  );

  const plaque = (
    <div style={{
      marginTop: "18px",
      paddingLeft: "2px",
    }}>
      <p style={{
        fontFamily: "'EB Garamond', Georgia, serif",
        fontSize: "clamp(1rem, 1.8vw, 1.22rem)",
        fontWeight: "400",
        fontStyle: "italic",
        color: "#111827",
        margin: "0 0 4px",
        lineHeight: 1.25,
      }}>
        {p.name}
      </p>
      <p style={{
        fontFamily: "'Source Sans 3', system-ui, sans-serif",
        fontSize: "11px",
        fontWeight: "500",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#6b7280",
        margin: "0 0 8px",
      }}>
        {p.medium}
      </p>
      <p style={{
        fontFamily: "'Source Sans 3', system-ui, sans-serif",
        fontSize: "13px",
        color: "#4b5563",
        lineHeight: "1.58",
        margin: "0 0 6px",
        maxWidth: "28ch",
      }}>
        {p.desc}
      </p>
      {p.dims && (
        <p style={{
          fontFamily: "'Source Sans 3', system-ui, sans-serif",
          fontSize: "11px",
          color: p.accent,
          letterSpacing: "0.05em",
          margin: 0,
          fontWeight: "600",
        }}>
          {p.dims}
        </p>
      )}
      {hasLink && (
        <p style={{
          fontFamily: "'Source Sans 3', system-ui, sans-serif",
          fontSize: "10px",
          fontWeight: "800",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#9ca3af",
          marginTop: "10px",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.3s, transform 0.3s",
        }}>
          View work →
        </p>
      )}
    </div>
  );

  const shared = {
    "data-reveal": true,
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      cursor: hasLink ? "pointer" : "default",
      transitionDelay: delay,
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  return hasLink ? (
    <a href={p.link} target="_blank" rel="noopener noreferrer" {...shared}>
      {canvas}
      {plaque}
    </a>
  ) : (
    <div {...shared}>
      {canvas}
      {plaque}
    </div>
  );
}

export default function Gallery() {
  const [loaded, setLoaded] = useState(false);
  const mainRef = useRef(null);
  useReveal(mainRef);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Source+Sans+3:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #fafaf8;
          color: #111827;
          -webkit-font-smoothing: antialiased;
        }

        .gallery-root {
          min-height: 100vh;
          opacity: 0;
          transition: opacity 1.1s cubic-bezier(0.22,1,0.36,1);
        }
        .gallery-root.ready { opacity: 1; }

        [data-reveal] {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 0.9s cubic-bezier(0.22,1,0.36,1),
            transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        [data-reveal].visible {
          opacity: 1;
          transform: translateY(0);
        }

        .gallery-grid {
          padding: clamp(48px, 8vh, 96px) clamp(24px, 6vw, 80px) 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
          gap: clamp(40px, 5vw, 64px) clamp(28px, 4vw, 48px);
          max-width: 1440px;
          margin: 0 auto;
        }

        .gallery-divider {
          margin: clamp(50px, 8vh, 90px) clamp(24px, 6vw, 80px) clamp(24px, 4vh, 40px);
          border: none;
          border-top: 1px solid #e5e7eb;
          position: relative;
        }
        .gallery-divider::after {
          content: attr(data-label);
          position: absolute;
          top: -9px;
          left: 0;
          background: #fafaf8;
          padding-right: 16px;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d1d5db;
        }

        .gallery-footer {
          margin-top: clamp(100px, 16vh, 180px);
          padding: 0 clamp(24px, 6vw, 80px) clamp(56px, 10vh, 96px);
        }

        .gallery-footer-sig {
          padding-top: clamp(32px, 5vh, 52px);
        }

        .sig-line {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: clamp(2.8rem, 9vw, 7.5rem);
          font-style: italic;
          font-weight: 400;
          color: #111827;
          line-height: 0.92;
          letter-spacing: -0.02em;
          margin-bottom: clamp(28px, 5vh, 52px);
        }

        .sig-line span {
          font-style: normal;
          font-size: 0.55em;
          color: #d1d5db;
          letter-spacing: 0.01em;
          vertical-align: middle;
          margin: 0 0.2em;
        }

        .sig-platforms {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .sig-platform {
          display: flex;
          align-items: baseline;
          gap: 0;
          border-top: 1px solid #f3f4f6;
          padding: 11px 0;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .sig-platform:last-child { border-bottom: 1px solid #f3f4f6; }
        .sig-platform:hover { opacity: 0.5; }

        .sig-platform-name {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9ca3af;
          width: 90px;
          flex-shrink: 0;
        }

        .sig-platform-handle {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 14px;
          font-style: italic;
          color: #c4c4bc;
          letter-spacing: 0.02em;
        }

        @media (max-width: 500px) {
          .gallery-grid { padding-top: clamp(32px, 6vh, 64px); }
        }
      `}</style>

      <div className={`gallery-root${loaded ? " ready" : ""}`} ref={mainRef}>

        <section className="gallery-grid" aria-label="Gallery of works">
          {projects.map((p, i) => (
            <article key={p.name}>
              <ArtworkYear year={p.year} />
              <Artwork p={p} index={i} />
            </article>
          ))}
        </section>

        <footer className="gallery-footer" data-reveal>
          <div className="gallery-footer-sig">
            <p className="sig-line">
              Selected works<span>,</span>Mohammed Yassin
            </p>
            <nav className="sig-platforms" aria-label="Social links">
              {[
                { label: "X", href: "https://x.com/moyassin" },
                { label: "TikTok", href: "https://tiktok.com/@moyassin" },
                { label: "Facebook", href: "https://facebook.com/moyassin" },
                { label: "Medium", href: "https://medium.com/@moyassin" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="sig-platform" target="_blank" rel="noopener noreferrer">
                  <span className="sig-platform-name">{s.label}</span>
                  <span className="sig-platform-handle">@moyassin</span>
                </a>
              ))}
            </nav>
          </div>
        </footer>

      </div>
    </>
  );
}