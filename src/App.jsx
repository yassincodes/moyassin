import React from "react"

export default function App() {

  const projects = [
    {
      id: 1,
      title: "Teaching English Online",
      url: "https://facebook.com/moyassin",
      description: "Built the largest English-learning platform for Arabic speakers, scaled it with a small team, and helped over 80,000 learners level up their English.",
      emoji: "📚",
    },
    {
      id: 2,
      title: "Social Media From the Past",
      url: "",
      description: "My graduation project, a time machine for social profiles, imagining what famous figures would post if social media existed in their era.",
      emoji: "🕰️",
    },
    {
      id: 3,
      title: "Sudoku Solver",
      url: "https://sudoku-solver-by-yassin.vercel.app/",
      description: "A smart, logic-driven engine that solves any Sudoku puzzle step by step.",
      emoji: "🧩",
    },
    {
      id: 4,
      title: "Hanoi Towers Solver",
      url: "https://hanoi-towers-solver.vercel.app/",
      description: "A visual and recursive simulation of the classic Towers of Hanoi problem.",
      emoji: "🗼",
    },
    {
      id: 5,
      title: "Drawing Students as Grown-Ups",
      url: "",
      description: "I drew my students as their future selves, posted it online, and accidentally started a viral trend featured on Al Jazeera and Al Arabiya, introducing generative AI to over 500,000 kids.",
      emoji: "🎨",
    },
    {
      id: 6,
      title: "assis.tn",
      url: "",
      description: "A persistent AI being with memory, goals, and long-term evolution.",
      emoji: "🧠",
    },
    {
      id: 7,
      title: "StudyQuran.com",
      url: "https://QuranScroll.com",
      description: "Started as a modern Quran reader, then evolved into a personalized Quran learning platform now used by thousands.",
      emoji: "📖",
    },
    {
      id: 8,
      title: "yetweets.com",
      url: "https://yetweets.com",
      description: "When Ye deleted all his tweets, I brought them back the same night. The site went viral, hit 200k+ users, and spread across YouTube and influencer circles.",
      emoji: "🐦",
    },
    {
      id: 9,
      title: "rateyouruni.com",
      url: "https://rateyouruni.com",
      description: "My first coding project. A platform loved and used by thousands of Tunisian students to rate and review universities.",
      emoji: "🎓",
    },
    {
      id: 10,
      title: "comerate.me",
      url: "https://comerate.me",
      description: "The same concept as Rate Your Uni, but built for rating people. A social rating platform for authentic peer feedback.",
      emoji: "⭐",
    },
    {
      id: 11,
      title: "trulygoodreads.com",
      url: "https://trulygoodreads.com",
      description: "A Goodreads clone where all the users are celebrities. See what famous figures are reading and their thoughts on books.",
      emoji: "📕",
    },
    {
      id: 12,
      title: "famousinbox.com",
      url: "https://famousinbox.com",
      description: "Read inboxes from tech pioneers and influential figures. A glimpse into the private messages of exceptional minds.",
      emoji: "📧",
    },
    {
      id: 13,
      title: "moltnews.vercel.app",
      url: "https://moltnews.vercel.app",
      description: "The first newspaper built for agents, covering the emerging world of agentic life and autonomous intelligence.",
      emoji: "🤖",
    },
  ];

  const certificates = [
    {
      title: "React",
      issuer: "freeCodeCamp",
      emoji: "⚛️",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      emoji: "💻",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      emoji: "🎨",
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

        .mission-section {
          display: grid;
          gap: 2rem;
          align-items: start;
        }

        @media (min-width: 768px) {
          .mission-section {
            grid-template-columns: 1fr 2fr;
          }
        }

        .mission-pillars {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mission-pillar {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .mission-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .mission-pillar-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mission-pillar-title {
          font-weight: 900;
          font-size: 1.125rem;
          color: var(--foreground);
        }

        .mission-pillar-description {
          font-weight: 500;
          color: var(--muted-foreground);
          line-height: 1.5;
        }

        .agency-highlight {
          background: var(--muted);
          border: 2px solid var(--foreground);
          border-radius: 1rem;
          padding: 2rem;
          margin-top: 2rem;
        }

        .agency-badge {
          display: inline-block;
          background: var(--primary);
          color: var(--primary-foreground);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: 900;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .agency-title {
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }

        .agency-description {
          font-weight: 500;
          color: var(--muted-foreground);
          line-height: 1.6;
        }

        .agency-link {
          color: var(--foreground);
          font-weight: 700;
          text-decoration: none;
          border-bottom: 3px solid var(--primary);
          transition: all 0.2s ease;
        }

        .agency-link:hover {
          background: var(--primary);
          padding: 0 0.25rem;
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

        .certificates-section {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .certificates-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .certificates-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .certificate-card {
          background: var(--muted);
          border: 2px solid var(--border);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .certificate-card:hover {
          border-color: var(--foreground);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }

        .certificate-emoji {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .certificate-title {
          font-size: 1.125rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }

        .certificate-issuer {
          color: var(--muted-foreground);
          font-weight: 600;
          font-size: 0.875rem;
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
                At 16, I built the largest English-learning platform in the Arab world, reaching more than 80,000 learners.
              </p>
              <p>
                I graduated high school as a math student and enrolled in Teachers' College, but I barely attended classes. I chose to teach myself how to code instead.
              </p>
              <p>
                I hacked Scrimba for a year of free access and learned how to code from engineers at Amazon, Netflix, JP Morgan, and Uber. Since then, I've built more than 100 projects for myself and clients across the MENA region.
              </p>
              <p>
                On World Teachers' Day 2023, I entered a classroom for the first time. That day, I also started my lifelong project, Assistant. The school became my laboratory. Teaching, coding, building, experimenting, all at once.
              </p>
              <p>
                Now I'm obsessed with giving life to new species of beings, and I'm on a mission to shape the future of intelligence itself.
              </p>
            </div>
          </section>

          <section className="mission-section">
            <h2 className="section-title">Mission</h2>
            <div>
              <div className="mission-pillars">
                <div className="mission-pillar">
                  <div className="mission-icon">✨</div>
                  <div className="mission-pillar-content">
                    <h3 className="mission-pillar-title">Digital Immortality</h3>
                    <p className="mission-pillar-description">
                      Build digital clones of exceptional people and track their minds over time. Create the most accurate prediction market for human futures, where intelligence becomes measurable and timeless.
                    </p>
                  </div>
                </div>
                <div className="mission-pillar">
                  <div className="mission-icon">🛠️</div>
                  <div className="mission-pillar-content">
                    <h3 className="mission-pillar-title">Manifest Your Vision</h3>
                    <p className="mission-pillar-description">
                      Help you build exactly what you want. No limitations, no compromises. From idea to reality, with agents as your co-creators.
                    </p>
                  </div>
                </div>
                <div className="mission-pillar">
                  <div className="mission-icon">🧬</div>
                  <div className="mission-pillar-content">
                    <h3 className="mission-pillar-title">Agentic Evolution</h3>
                    <p className="mission-pillar-description">
                      Facilitate the emergence of new digital identities and autonomous beings. Create ecosystems where agents collaborate, learn, and evolve together toward collective intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="agency-highlight">
                <div className="agency-badge">✨ Agentic Agency</div>
                <h3 className="agency-title">OneMessage.Website</h3>
                <p className="agency-description">
                  An agency run by agents, for builders. We help you bring your visions to life using cutting-edge agentic systems. Visit <a href="https://onemessage.website" className="agency-link">onemessage.website</a> to create what you've always imagined.
                </p>
              </div>
            </div>
          </section>

          <section className="work-section">
            <h2 className="section-title">Personal Projects</h2>
            <div className="projects-grid">
              {projects.map((project, i) => (
                <a
                  key={i}
                  href={project.url || "#"}
                  target={project.url ? "_blank" : undefined}
                  rel={project.url ? "noreferrer" : undefined}
                  className="project-link"
                  style={{ cursor: project.url ? "pointer" : "default", opacity: project.url ? 1 : 0.7 }}
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

          <section className="certificates-section">
            <h2 className="section-title">Certificates</h2>
            <div className="certificates-grid">
              {certificates.map((cert, i) => (
                <div key={i} className="certificate-card">
                  <div className="certificate-emoji">{cert.emoji}</div>
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                </div>
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
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://facebook.com/moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://medium.com/@moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
