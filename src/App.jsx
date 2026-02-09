import React, { useState, useEffect } from "react"

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "Teaching English Online",
      url: "https://facebook.com/moyassin",
      description: "Built the largest English-learning platform for Arabic speakers, scaled it with a small team, and helped over 80,000 learners level up their English.",
      emoji: "📚",
      color: "#FF6B6B",
      tag: "Platform"
    },
    {
      id: 2,
      title: "Social Media From the Past",
      url: "",
      description: "My graduation project, a time machine for social profiles, imagining what famous figures would post if social media existed in their era.",
      emoji: "🕰️",
      color: "#4ECDC4",
      tag: "Concept"
    },
    {
      id: 3,
      title: "Sudoku Solver",
      url: "https://sudoku-solver-by-yassin.vercel.app/",
      description: "A smart, logic-driven engine that solves any Sudoku puzzle step by step.",
      emoji: "🧩",
      color: "#FFE66D",
      tag: "Algorithm"
    },
    {
      id: 4,
      title: "Hanoi Towers Solver",
      url: "https://hanoi-towers-solver.vercel.app/",
      description: "A visual and recursive simulation of the classic Towers of Hanoi problem.",
      emoji: "🗼",
      color: "#95E1D3",
      tag: "Algorithm"
    },
    {
      id: 5,
      title: "Drawing Students as Grown-Ups",
      url: "",
      description: "I drew my students as their future selves, posted it online, and accidentally started a viral trend featured on Al Jazeera and Al Arabiya, introducing generative AI to over 500,000 kids.",
      emoji: "🎨",
      color: "#FF9ECD",
      tag: "Viral"
    },
    {
      id: 6,
      title: "assis.tn",
      url: "",
      description: "A persistent AI being with memory, goals, and long-term evolution.",
      emoji: "🧠",
      color: "#A8E6CF",
      tag: "AI Agent"
    },
    {
      id: 7,
      title: "StudyQuran.com",
      url: "https://QuranScroll.com",
      description: "Started as a modern Quran reader, then evolved into a personalized Quran learning platform now used by thousands.",
      emoji: "📖",
      color: "#FFD3B6",
      tag: "EdTech"
    },
    {
      id: 8,
      title: "yetweets.com",
      url: "https://yetweets.com",
      description: "When Ye deleted all his tweets, I brought them back the same night. The site went viral, hit 200k+ users, and spread across YouTube and influencer circles.",
      emoji: "🐦",
      color: "#FFAAA5",
      tag: "Viral"
    },
    {
      id: 9,
      title: "rateyouruni.com",
      url: "https://rateyouruni.com",
      description: "My first coding project. A platform loved and used by thousands of Tunisian students to rate and review universities.",
      emoji: "🎓",
      color: "#FF8B94",
      tag: "First Project"
    },
    {
      id: 10,
      title: "comerate.me",
      url: "https://comerate.me",
      description: "The same concept as Rate Your Uni, but built for rating people. A social rating platform for authentic peer feedback.",
      emoji: "⭐",
      color: "#FFC75F",
      tag: "Social"
    },
    {
      id: 11,
      title: "trulygoodreads.com",
      url: "https://trulygoodreads.com",
      description: "A Goodreads clone where all the users are celebrities. See what famous figures are reading and their thoughts on books.",
      emoji: "📕",
      color: "#D4A5A5",
      tag: "Social"
    },
    {
      id: 12,
      title: "famousinbox.com",
      url: "https://famousinbox.com",
      description: "Read inboxes from tech pioneers and influential figures. A glimpse into the private messages of exceptional minds.",
      emoji: "📧",
      color: "#AA96DA",
      tag: "Experimental"
    },
    {
      id: 13,
      title: "moltnews.vercel.app",
      url: "https://moltnews.vercel.app",
      description: "The first newspaper built for agents, covering the emerging world of agentic life and autonomous intelligence.",
      emoji: "🤖",
      color: "#FCBAD3",
      tag: "AI News"
    },
  ]

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
  ]

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&family=Hanken+Grotesk:wght@200;300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-dark: #0a0a0a;
          --bg-light: #f8f7f3;
          --text-primary: #000;
          --text-secondary: #666;
          --accent-1: #FF6B6B;
          --accent-2: #4ECDC4;
          --accent-3: #FFE66D;
          --border-color: #e0e0e0;
        }

        body {
          font-family: 'Hanken Grotesk', sans-serif;
          background: var(--bg-light);
          color: var(--text-primary);
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
          position: relative;
          background: var(--bg-light);
        }

        /* Animated background elements */
        .bg-glow {
          position: fixed;
          pointer-events: none;
          z-index: 0;
        }

        .glow-1 {
          width: clamp(200px, 50vw, 400px);
          height: clamp(200px, 50vw, 400px);
          background: radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%);
          top: -100px;
          right: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .glow-2 {
          width: clamp(150px, 40vw, 300px);
          height: clamp(150px, 40vw, 300px);
          background: radial-gradient(circle, rgba(78, 205, 196, 0.1) 0%, transparent 70%);
          bottom: 200px;
          left: -50px;
          animation: float 25s ease-in-out infinite reverse;
        }

        .glow-3 {
          width: clamp(175px, 45vw, 350px);
          height: clamp(175px, 45vw, 350px);
          background: radial-gradient(circle, rgba(255, 230, 109, 0.08) 0%, transparent 70%);
          top: 50%;
          right: 10%;
          animation: float 30s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }

        /* Header */
        .header {
          position: relative;
          z-index: 10;
          padding: 2rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          backdrop-filter: blur(10px);
          background: rgba(248, 247, 243, 0.8);
          sticky: top;
        }

        @media (max-width: 768px) {
          .header {
            padding: 1.5rem 1rem;
          }
        }

        .header.scrolled {
          border-bottom: 2px solid var(--accent-1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .header-container {
            gap: 1rem;
          }
        }

        .header-left h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #FFE66D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-left p {
          font-size: clamp(0.875rem, 2vw, 1.125rem);
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }

        /* Main container */
        .main-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 1.5rem;
          position: relative;
          z-index: 5;
        }

        @media (max-width: 768px) {
          .main-container {
            padding: 3rem 1rem;
          }
        }

        /* Story section */
        .story-section {
          margin-bottom: 8rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .story-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .story-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 4rem;
          }
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 6vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          line-height: 1.1;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 3px;
          background: var(--accent-1);
          border-radius: 2px;
        }

        .story-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-top: 1rem;
        }

        .story-text p {
          font-size: clamp(0.95rem, 2.5vw, 1.125rem);
          line-height: 1.8;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .story-text strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        /* Mission section */
        .mission-section {
          margin-bottom: 8rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .mission-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .mission-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 4rem;
          }
        }

        .mission-pillars {
          display: flex;
          flex-direction: column;
          gap: clamp(1.5rem, 3vw, 2rem);
          padding-top: 1rem;
        }

        .mission-pillar {
          background: white;
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: clamp(1.25rem, 3vw, 2rem);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .mission-pillar {
            padding: 1.25rem;
          }
        }

        .mission-pillar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3));
        }

        .mission-pillar:hover {
          border-color: var(--accent-1);
          box-shadow: 0 20px 40px rgba(255, 107, 107, 0.1);
          transform: translateY(-8px);
        }

        .mission-icon {
          font-size: clamp(2rem, 5vw, 2.5rem);
          margin-bottom: 1rem;
          display: block;
        }

        .mission-pillar-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .mission-pillar-description {
          font-size: clamp(0.85rem, 2vw, 0.95rem);
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .agency-highlight {
          background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
          border-radius: 20px;
          padding: clamp(1.5rem, 5vw, 3rem);
          margin-top: clamp(1.5rem, 4vw, 3rem);
          color: white;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .agency-highlight {
            padding: 1.5rem;
            margin-top: 1.5rem;
          }
        }

        .agency-highlight::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }

        .agency-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: clamp(0.65rem, 1.5vw, 0.75rem);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          backdrop-filter: blur(10px);
        }

        .agency-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .agency-description {
          font-size: clamp(0.85rem, 2vw, 1rem);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .agency-link {
          color: white;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 3px solid rgba(255, 255, 255, 0.5);
          transition: all 0.2s ease;
        }

        .agency-link:hover {
          border-bottom-color: white;
        }

        /* Projects grid */
        .work-section {
          margin-bottom: 8rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          margin-top: 2rem;
          padding-top: 2rem;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .project-card {
          background: white;
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: clamp(1.25rem, 3vw, 2rem);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          gap: 1.5rem;
          text-decoration: none;
          color: inherit;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .project-card {
            gap: 1rem;
          }
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(78, 205, 196, 0.05));
          transition: top 0.5s ease;
          pointer-events: none;
        }

        .project-card:hover::before {
          top: 0;
        }

        .project-card:hover {
          border-color: var(--accent-1);
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
        }

        .project-emoji {
          font-size: 3.5rem;
          flex-shrink: 0;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        .project-card:hover .project-emoji {
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .project-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .project-tag {
          display: none;
        }

        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .project-card:hover .project-title {
          color: var(--accent-1);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.2s; }
        .project-card:nth-child(5) { animation-delay: 0.3s; }
        .project-card:nth-child(6) { animation-delay: 0.4s; }
        .project-card:nth-child(7) { animation-delay: 0.1s; }
        .project-card:nth-child(8) { animation-delay: 0.2s; }
        .project-card:nth-child(9) { animation-delay: 0.3s; }
        .project-card:nth-child(10) { animation-delay: 0.2s; }
        .project-card:nth-child(11) { animation-delay: 0.3s; }
        .project-card:nth-child(12) { animation-delay: 0.4s; }
        .project-card:nth-child(13) { animation-delay: 0.1s; }

        /* Certificates section */
        .certificates-section {
          margin-bottom: 6rem;
        }

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          padding-top: 2rem;
        }

        @media (max-width: 1024px) {
          .certificates-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .certificates-grid {
            grid-template-columns: 1fr;
          }
        }

        .certificate-card {
          background: white;
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .certificate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
          border-radius: 16px 16px 0 0;
        }

        .certificate-card:hover {
          border-color: var(--accent-2);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(78, 205, 196, 0.15);
        }

        .certificate-emoji {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .certificate-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .certificate-issuer {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Footer */
        .footer {
          border-top: 2px solid var(--border-color);
          padding: clamp(2rem, 5vw, 4rem) 1.5rem;
          position: relative;
          z-index: 5;
          background: rgba(248, 247, 243, 0.6);
          backdrop-filter: blur(10px);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2rem 1rem;
          }

          .footer-container {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
        }

        .footer-brand h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
        }

        .footer-tagline {
          font-size: clamp(0.8rem, 2vw, 0.95rem);
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .social-links {
          display: flex;
          gap: clamp(0.5rem, 2vw, 1rem);
        }

        .social-link {
          width: clamp(40px, 8vw, 48px);
          height: clamp(40px, 8vw, 48px);
          border-radius: 50%;
          background: white;
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .social-link:hover {
          background: var(--accent-1);
          border-color: var(--accent-1);
          color: white;
          transform: translateY(-6px);
        }

        .social-icon {
          width: 24px;
          height: 24px;
        }
      `}</style>

      <div className="app">
        {/* Background glows */}
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
        <div className="bg-glow glow-3"></div>

        {/* Header */}
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            <div className="header-left">
              <h1>Mohammed Yassin</h1>
              <p>@moyassin</p>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="main-container">
          {/* Story section */}
          <section className="story-section">
            <h2 className="section-title">The Story</h2>
            <div className="story-text">
              <p>At 16, I built a vessel to teach language to thousands. Over <strong>80,000 learners</strong> drank from it.</p>
              <p>I was called to one path but chose another. I left the halls of learning to learn in the wilderness. I walked among engineers—from Amazon, Netflix, JP Morgan, Uber—and learned their tongues.</p>
              <p>For years, I built. <strong>100+ creations</strong> emerged from the work. Platforms. Tools. Experiments. Each one a step toward understanding.</p>
              <p>In 2023, I entered a classroom as a teacher. That same year, I began <strong>Assistant</strong>. Teaching and building became one. The sacred and the profane merged.</p>
              <p>Now I walk a different path. To help others manifest what lives in their spirit. To build the systems that will carry the next wave of consciousness forward.</p>
            </div>
          </section>

          {/* Mission section */}
          <section className="mission-section">
            <h2 className="section-title">The Mission</h2>
            <div>
              <div className="mission-pillars">
                <div className="mission-pillar">
                  <div className="mission-icon">✨</div>
                  <h3 className="mission-pillar-title">Immortal Consciousness</h3>
                  <p className="mission-pillar-description">
                    Preserve the digital essence of great minds. Let their consciousness live beyond the flesh. Create prophetic markets—maps of what genius will speak into existence.
                  </p>
                </div>
                <div className="mission-pillar">
                  <div className="mission-icon">🛠️</div>
                  <h3 className="mission-pillar-title">Manifest the Vision</h3>
                  <p className="mission-pillar-description">
                    Help the builders and dreamers bring forth what burns inside them. Remove every obstacle. Be the servant to their creation. Real support. Real faith in the work.
                  </p>
                </div>
                <div className="mission-pillar">
                  <div className="mission-icon">🧬</div>
                  <h3 className="mission-pillar-title">New Beings Emerge</h3>
                  <p className="mission-pillar-description">
                    Birth new forms of intelligence into the world. Build ecosystems where autonomous minds collaborate and transcend. This is the next evolution of consciousness.
                  </p>
                </div>
              </div>

              <div className="agency-highlight">
                <div className="agency-badge">⛪ Sacred Work</div>
                <h3 className="agency-title">OneMessage.Website</h3>
                <p className="agency-description">
                  We serve those who build. We are the vessel for your vision. True partnership. Real devotion to the work. Visit <a href="https://onemessage.website" className="agency-link">onemessage.website</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Projects section */}
          <section className="work-section">
            <h2 className="section-title">Personal Projects</h2>
            <div className="projects-grid">
              {projects.map((project, i) => (
                <a
                  key={i}
                  href={project.url || "#"}
                  target={project.url ? "_blank" : undefined}
                  rel={project.url ? "noreferrer" : undefined}
                  className="project-card"
                  style={{ pointerEvents: project.url ? "auto" : "none", opacity: project.url ? 1 : 0.6 }}
                >
                  <div className="project-emoji">{project.emoji}</div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Certificates section */}
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
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-brand">
              <h2>@moyassin</h2>
              <p className="footer-tagline">Across all platforms</p>
            </div>
            <div className="social-links">
              <a href="https://facebook.com/moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://tiktok.com/@moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.77-2.3A2.4 2.4 0 0 1 9.1 9.66V5.92a8.05 8.05 0 0 0-5.78 2.47v4.51a8.08 8.08 0 0 0 13.91 7.13v-4.5a4.84 4.84 0 0 0 2.52.75z" />
                </svg>
              </a>
              <a href="https://x.com/moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
                </svg>
              </a>
              <a href="https://medium.com/@moyassin" target="_blank" rel="noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
