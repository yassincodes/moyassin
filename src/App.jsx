import React from "react"

export default function App() {
const projects = [
  {
    title: "Teaching English Online",
    url: "https://facebook.com/moyassin",
    description:
      "Built the largest English-learning platform for Arabic speakers, reaching over 80,000 learners.",
    emoji: "📚",
  },
  {
    title: "Social Media From the Past",
    url: "",
    description:
      "A time machine for social profiles, exploring how people used to think, post, and present themselves.",
    emoji: "🕰️",
  },
  {
    title: "Sudoku Solver",
    url: "",
    description:
      "A logic-based Sudoku solver demonstrating algorithmic thinking and constraint satisfaction.",
    emoji: "🧩",
  },
  {
    title: "Hanoi Towers Solver",
    url: "",
    description:
      "A visual, recursive solution to the classic Towers of Hanoi problem.",
    emoji: "🏗️",
  },
  {
    title: "Drawing Students as Grown-Ups",
    url: "",
    description:
      "AI-generated future versions of students, blending imagination, identity, and technology.",
    emoji: "🎨",
  },
  {
    title: "najmschool.tn",
    url: "https://najmschool.tn",
    description:
      "An AI-first online school where teachers are autonomous agents.",
    emoji: "🏫",
  },
  {
    title: "assis.tn",
    url: "",
    description:
      "A persistent AI entity with memory, goals, and long-term evolution.",
    emoji: "🤖",
  },
  {
    title: "QuranScroll.com",
    url: "https://QuranScroll.com",
    description:
      "A calm Quran experience where verses are presented one by one for reading, reflection, and saving.",
    emoji: "📖",
  },
  {
    title: "yetweets.com",
    url: "https://yetweets.com",
    description:
      "The complete Kanye West tweet archive. Over 200,000 visitors in the first month, used by multiple influencers.",
    emoji: "🐦",
  },
  {
    title: "comerate.me",
    url: "https://comerate.me",
    description:
      "A Gen Z–focused anonymous rating platform with shareable links.",
    emoji: "🌟",
  },
  {
    title: "agelogs.com",
    url: "",
    description:
      "A public, age-based life archive comparing what people were doing at the same age across time and culture.",
    emoji: "📊",
  },
  {
    title: "facemash.to",
    url: "https://facemash.to",
    description:
      "A Facemash builder for anything you want. Over 100 pages generated so far.",
    emoji: "🎭",
  },
  {
    title: "famousinbox.com",
    url: "https://famousinbox.com",
    description:
      "Get a feed of emails from famous people and celebrities. Uses public email leaks.",
    emoji: "📧",
  },
  {
    title: "postyourwishes.com",
    url: "https://postyourwishes.com",
    description:
      "Post your wishes and let wealthy people anonymously gift you.",
    emoji: "💭",
  },
  {
    title: "keyboardmate.com",
    url: "https://keyboardmate.com",
    description:
      "An AI companion that lives inside your keyboard.",
    emoji: "⌨️",
  },
  {
    title: "How to Win Friends Book",
    url: "",
    description:
      "An interactive, AI-powered reinterpretation of 'How to Win Friends & Influence People'.",
    emoji: "📘",
  },
];






  return (
    <>
      {/* Global styles – paste this into your global CSS file (e.g., index.css or globals.css) */}
      <style jsx global>{`
        :root {
          --background: oklch(1 0 0);
          --foreground: oklch(0.145 0 0);
          --primary: oklch(0.85 0.2 110);
          --primary-foreground: oklch(0 0 0);
          --muted: oklch(0.95 0 0);
          --muted-foreground: oklch(0.4 0 0);
          --border: oklch(0.9 0 0);
        }

        .dark {
          --background: oklch(0.145 0 0);
          --foreground: oklch(0.985 0 0);
          --primary: oklch(0.985 0 0);
          --primary-foreground: oklch(0.205 0 0);
          --muted: oklch(0.269 0 0);
          --muted-foreground: oklch(0.708 0 0);
          --border: oklch(0.269 0 0);
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .app {
          min-height: 100vh;
          background: var(--background);
          color: var(--foreground);
        }

        .header {
          background: var(--primary);
          padding: 4rem 1.5rem;
          border-bottom: 4px solid var(--foreground);
        }

        @media (min-width: 768px) {
          .header {
            padding: 6rem 1.5rem;
          }
        }

        .header-container {
          max-width: 64rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: flex-start;
        }

        @media (min-width: 768px) {
          .header-container {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .name-title {
          font-size: 3.75rem;
          font-weight: 900;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: -0.05em;
        }

        @media (min-width: 768px) {
          .name-title {
            font-size: 5rem;
          }
        }

        .handle {
          margin-top: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          opacity: 0.9;
        }

        @media (min-width: 768px) {
          .handle {
            font-size: 1.875rem;
          }
        }

        .builder-box {
          background: var(--foreground);
          color: var(--primary);
          padding: 1rem;
          border-radius: 1rem;
          transform: rotate(3deg);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: none;
        }

        @media (min-width: 768px) {
          .builder-box {
            display: block;
          }
        }

        .builder-text {
          font-size: 1.25rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .main-container {
          max-width: 64rem;
          margin: 0 auto;
          padding: 3rem 1.5rem 5rem;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        @media (min-width: 768px) {
          .main-container {
            padding-top: 5rem;
          }
        }

        .story-section {
          display: grid;
          gap: 2rem;
          align-items: start;
        }

        @media (min-width: 768px) {
          .story-section {
            grid-template-columns: 1fr 2fr;
          }
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.05em;
        }

        .story-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .story-text {
            font-size: 1.5rem;
          }
        }

        .age-highlight {
          background: var(--primary);
          padding: 0 0.25rem;
          border-radius: 0.25rem;
        }

        .mission {
          color: var(--muted-foreground);
        }

        .mission-quote {
          color: var(--foreground);
          font-style: italic;
        }

        .work-section {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .projects-grid {
          display: grid;
          gap: 4rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 4rem 3rem;
          }
        }

        .project-link {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          text-decoration: none;
          color: inherit;
        }

        .project-link:hover .project-emoji-box {
          border-color: var(--foreground);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transform: rotate(-2deg);
        }

        .project-link:hover .project-title {
          text-decoration: underline;
          text-decoration-thickness: 4px;
          text-underline-offset: 4px;
        }

        .project-emoji-box {
          flex-shrink: 0;
          width: 6rem;
          height: 6rem;
          background: var(--muted);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.25rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .project-emoji-box {
            width: 8rem;
            height: 8rem;
            font-size: 3rem;
          }
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 900;
        }

        @media (min-width: 768px) {
          .project-title {
            font-size: 1.5rem;
          }
        }

        .project-description {
          font-weight: 500;
          color: var(--muted-foreground);
        }

        .project-tags {
          display: flex;
          gap: 0.5rem;
          padding-top: 0.5rem;
        }

        .tag {
          font-size: 0.625rem;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 0.1em;
          background: var(--muted);
          padding: 0.125rem 0.5rem;
          border-radius: 0.25rem;
          border: 1px solid var(--border);
        }

        .footer {
          padding: 5rem 1.5rem 3rem;
          border-top: 4px solid var(--foreground);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .footer {
            flex-direction: row;
          }
        }

        .footer-brand {
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-brand {
            text-align: left;
          }
        }

        .footer-handle {
          font-size: 3.125rem;
          font-weight: 900;
          letter-spacing: -0.05em;
        }

        .footer-tagline {
          font-weight: 700;
          color: var(--muted-foreground);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          padding: 1rem;
          background: var(--muted);
          border: 2px solid var(--foreground);
          border-radius: 9999px;
          transition: background 0.3s ease, color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--foreground);
        }

        .social-link:hover {
          background: var(--primary);
          color: var(--primary-foreground);
        }

        .social-icon {
          width: 24px;
          height: 24px;
        }
      `}</style>

      <div className="app">
        <header className="header">
          <div className="header-container">
            <div>
              <h1 className="name-title">
                Mohammed <br /> Yassin
              </h1>
              <p className="handle">@moyassin</p>
            </div>
            <div className="builder-box">
              <p className="builder-text">Builder of Agents</p>
            </div>
          </div>
        </header>

        <main className="main-container">
          <section className="story-section">
            <h2 className="section-title">The Story</h2>
            <div className="story-text">
              <p>
                At 16 years old, I built the largest English-teaching platform in the Arab world, helping over 80,000 Arabic speakers learn English online.
              </p>
              <p>
                After graduating high school as a math student, I enrolled in Teachers' College. I attended only a few classes, choosing instead to teach myself how to code.
              </p>
              <p>
                I hacked Scrimba.com for a year of free access, learned from the best, and immediately started freelancing, building websites and tools for clients across the MENA region.
              </p>
              <p>
                I stepped into classrooms for the first time on World Teachers' Day 2023, the day I began working on my lifelong project, Assistant. The school became my lab. Teaching ran alongside coding, building, and experimenting.
              </p>
            </div>
          </section>

        <section className="work-section">
  <h2 className="section-title">Favorite Projects</h2>
  <div className="projects-grid">
    {projects.map((project, i) => (
      <a
        key={i}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        <div className="project-emoji-box">{project.emoji}</div>
        <div className="project-info">
          <h3 className="project-title">
            {project.title}: <span className="project-description">{project.description}</span>
          </h3>
        </div>
      </a>
    ))}
  </div>
</section>


          <footer className="footer">
            <div className="footer-brand">
              <p className="footer-handle">@moyassin</p>
              <p className="footer-tagline">Across all platforms.</p>
            </div>
            <div className="social-links">
              <a href="https://x.com/moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
                </svg>
              </a>
              <a href="https://github.com/moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoinCap="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://facebook.com/moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoinCap="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://medium.com/@moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoinCap="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}