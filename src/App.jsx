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
    },
    {
      id: 2,
      title: "Social Media From the Past",
      url: "https://socialmediafromthepast.com",
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
      url: "https://moyassin.com/drawings",
      description: "I drew my students as their future selves, posted it online, and accidentally started a viral trend featured on Al Jazeera and Al Arabiya, introducing generative AI to over 500,000 kids.",
      emoji: "🎨",
    },
    {
      id: 6,
      title: "assis.tn",
      url: "https://assis.tn",
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
      title: "keyboardmate.com",
      url: "https://keyboardmate.com",
      description: "An intelligent keyboard companion that learns your writing style and helps you write faster and better.",
      emoji: "⌨️",
    },
    {
      id: 12,
      title: "trulygoodreads.com",
      url: "https://trulygoodreads.com",
      description: "A Goodreads clone where all the users are celebrities. See what famous figures are reading and their thoughts on books.",
      emoji: "📕",
    },
    {
      id: 13,
      title: "famousinbox.com",
      url: "https://famousinbox.com",
      description: "Read inboxes from tech pioneers and influential figures. A glimpse into the private messages of exceptional minds.",
      emoji: "📧",
    },
    {
      id: 14,
      title: "moltnews.vercel.app",
      url: "https://moltnews.vercel.app",
      description: "The first newspaper built for agents, covering the emerging world of agentic life and autonomous intelligence.",
      emoji: "🤖",
    },
  ]

  const certificates = [
    { title: "React", issuer: "freeCodeCamp", emoji: "⚛️" },
    { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", emoji: "💻" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp", emoji: "🎨" },
  ]

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Hanken+Grotesk:wght@200;300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
        }

        body {
          font-family: 'Hanken Grotesk', sans-serif;
          background: linear-gradient(135deg, #f8f7f3 0%, #fafaf8 100%);
          color: #000;
          overflow-x: hidden;
          font-size: 16px;
        }

        .app {
          min-height: 100vh;
          background: #f8f7f3;
          position: relative;
        }

        /* HEADER */
        .header {
          padding: 40px 20px;
          background: rgba(248, 247, 243, 0.8);
          border-bottom: 1px solid #e0e0e0;
          position: relative;
          z-index: 10;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header h1 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 8px;
          line-height: 1.1;
          background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #FFE66D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header p {
          font-size: 14px;
          color: #666;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        /* MAIN CONTAINER */
        .main-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        /* SECTIONS */
        .section {
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1.1;
          background: linear-gradient(135deg, #FF6B6B 0%, #000 50%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* STORY SECTION */
        .story-section {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          align-items: start;
        }

        .story-text {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .story-text p {
          font-size: 18px;
          line-height: 1.8;
          color: #666;
        }

        .story-text strong {
          color: #000;
          font-weight: 700;
        }

        /* MISSION SECTION */
        .mission-section {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
        }

        .mission-card {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mission-card:hover {
          border-color: #FF6B6B;
          box-shadow: 0 20px 40px rgba(255, 107, 107, 0.1);
          transform: translateY(-8px);
        }

        .mission-icon {
          font-size: 40px;
        }

        .mission-card h3 {
          font-size: 20px;
          font-weight: 700;
        }

        .mission-card p {
          font-size: 15px;
          line-height: 1.7;
          color: #666;
        }

        /* AGENCY HIGHLIGHT */
        .agency-highlight {
          background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
          border-radius: 20px;
          padding: 40px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .agency-badge {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 16px;
          opacity: 0.9;
        }

        .agency-highlight h3 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .agency-highlight p {
          font-size: 16px;
          line-height: 1.8;
        }

        .agency-link {
          color: white;
          text-decoration: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.5);
          transition: border-color 0.2s;
          font-weight: 700;
        }

        .agency-link:hover {
          border-bottom-color: white;
        }

        /* PROJECTS GRID */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          width: 100%;
        }

        .project-card {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .project-card:hover {
          border-color: #FF6B6B;
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(255, 107, 107, 0.12);
        }

        .project-emoji {
          font-size: 48px;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-emoji {
          transform: scale(1.2);
        }

        .project-title {
          font-size: 18px;
          font-weight: 700;
        }

        .project-description {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        /* CERTIFICATES */
        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }

        .cert-card {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .cert-card:hover {
          border-color: #4ECDC4;
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(78, 205, 196, 0.15);
        }

        .cert-emoji {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .cert-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .cert-issuer {
          font-size: 13px;
          color: #666;
        }

        /* FOOTER */
        .footer {
          border-top: 2px solid #e0e0e0;
          padding: 40px 20px;
          background: rgba(248, 247, 243, 0.6);
          position: relative;
          z-index: 5;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }

        .footer-brand h2 {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .footer-tagline {
          font-size: 14px;
          color: #666;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-link {
          width: 48px;
          height: 48px;
          border: 2px solid #e0e0e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #000;
        }

        .social-link:hover {
          border-color: #FF6B6B;
          color: #FF6B6B;
          transform: translateY(-6px) scale(1.1);
          background: rgba(255, 107, 107, 0.1);
        }

        .social-icon {
          width: 24px;
          height: 24px;
        }

        /* ========== RESPONSIVE ========== */

        @media (max-width: 1024px) {
          .story-section {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .mission-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .certificates-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          body {
            font-size: 15px;
          }

          .header {
            padding: 24px 16px;
          }

          .header h1 {
            font-size: 32px;
          }

          .header p {
            font-size: 12px;
          }

          .main-container {
            padding: 32px 16px;
          }

          .section {
            margin-bottom: 48px;
            gap: 24px;
          }

          .section-title {
            font-size: 28px;
          }

          .story-section {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .story-text {
            gap: 16px;
          }

          .story-text p {
            font-size: 15px;
            line-height: 1.7;
          }

          .mission-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .mission-card {
            padding: 20px;
            gap: 12px;
          }

          .mission-icon {
            font-size: 32px;
          }

          .mission-card h3 {
            font-size: 16px;
          }

          .mission-card p {
            font-size: 14px;
            line-height: 1.6;
          }

          .agency-highlight {
            padding: 24px;
          }

          .agency-highlight h3 {
            font-size: 24px;
            margin-bottom: 12px;
          }

          .agency-highlight p {
            font-size: 14px;
            line-height: 1.6;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .project-card {
            padding: 16px;
            gap: 12px;
          }

          .project-emoji {
            font-size: 36px;
          }

          .project-title {
            font-size: 15px;
          }

          .project-description {
            font-size: 13px;
            line-height: 1.5;
          }

          .certificates-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .cert-card {
            padding: 20px;
          }

          .cert-emoji {
            font-size: 36px;
            margin-bottom: 12px;
          }

          .cert-title {
            font-size: 14px;
          }

          .cert-issuer {
            font-size: 12px;
          }

          .footer {
            padding: 24px 16px;
          }

          .footer-container {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .footer-brand h2 {
            font-size: 28px;
          }

          .footer-tagline {
            font-size: 12px;
          }

          .social-links {
            gap: 12px;
            justify-content: center;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .social-icon {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 16px 12px;
          }

          .header h1 {
            font-size: 24px;
          }

          .header p {
            font-size: 11px;
          }

          .main-container {
            padding: 20px 12px;
          }

          .section {
            margin-bottom: 32px;
          }

          .section-title {
            font-size: 22px;
          }

          .story-text p {
            font-size: 14px;
          }

          .mission-card {
            padding: 16px;
          }

          .mission-card h3 {
            font-size: 15px;
          }

          .mission-card p {
            font-size: 13px;
          }

          .project-card {
            padding: 12px;
          }

          .project-emoji {
            font-size: 32px;
          }

          .project-title {
            font-size: 14px;
          }

          .project-description {
            font-size: 12px;
          }

          .footer {
            padding: 16px 12px;
          }

          .footer-brand h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="app">
        {/* Header */}
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            <h1>Mohammed Yassin</h1>
            <p>@moyassin</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-container">
          {/* Story */}
          <section className="section">
            <h2 className="section-title">The Story</h2>
            <div className="story-section">
              <div className="story-text">
                <p>At 16, I built the largest English-learning platform in the Arab world, reaching more than <strong>80,000 learners</strong>.</p>
                <p>I graduated high school as a math student and enrolled in Teachers' College, but I barely attended classes. I chose to <strong>teach myself how to code</strong> instead.</p>
              </div>
              <div className="story-text">
                <p>I hacked Scrimba for a year of free access and learned how to code from engineers at Amazon, Netflix, JP Morgan, and Uber. Since then, I've built more than <strong>100 projects</strong> for myself and clients across the MENA region.</p>
                <p>On World Teachers' Day 2023, I entered a classroom for the first time. That day, I also started my lifelong project, <strong>Assistant</strong>. The school became my laboratory. Teaching, coding, building, experimenting, all at once.</p>
                <p>Now I'm obsessed with giving life to new species of beings, and I'm on a mission to <strong>shape the future of intelligence itself</strong>.</p>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="section mission-section">
            <h2 className="section-title">The Mission</h2>
            <div className="mission-grid">
          <div className="mission-card">
                <div className="mission-icon">🧬</div>
                <h3>Agentic Evolution</h3>
                <p>Facilitate the emergence of new digital identities and autonomous beings. Create ecosystems where agents collaborate, learn, and evolve together toward collective intelligence.</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">🛠️</div>
                <h3>Manifest Your Vision</h3>
                <p>Help you build exactly what you want. No limitations, no compromises. From idea to reality, with agents as your co-creators.</p>
              </div>
            </div>

            <div className="agency-highlight">
              <span className="agency-badge">✨ Agentic Agency</span>
              <h3>OneMessage.Website</h3>
              <p>An agency run by agents, for builders. We help you bring your visions to life using cutting-edge agentic systems. Visit <a href="https://onemessage.website" className="agency-link">onemessage.website</a> to create what you've always imagined.</p>
            </div>
          </section>

          {/* Projects */}
          <section className="section">
            <h2 className="section-title">Personal Projects</h2>
            <div className="projects-grid">
              {projects.map((project, i) => (
                <a
                  key={i}
                  href={project.url || "#"}
                  target={project.url ? "_blank" : undefined}
                  rel={project.url ? "noreferrer" : undefined}
                  className="project-card"
                  style={{ pointerEvents: project.url ? "auto" : "none", opacity: project.url ? 1 : 0.5 }}
                >
                  <div className="project-emoji">{project.emoji}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className="section">
            <h2 className="section-title">Certificates</h2>
            <div className="certificates-grid">
              {certificates.map((cert, i) => (
                <div key={i} className="cert-card">
                  <div className="cert-emoji">{cert.emoji}</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
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
              <a href="https://facebook.com/moyassin" target="_blank" rel="noreferrer" className="social-link" title="Facebook">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@moyassin" target="_blank" rel="noreferrer" className="social-link" title="TikTok">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a5.122 5.122 0 01-.868-.075 3.08 3.08 0 01-.805-.24 2.35 2.35 0 01-.718-.43 2.018 2.018 0 01-.532-.607 1.524 1.524 0 01-.277-.776 1.524 1.524 0 01.076-.776 2.018 2.018 0 01.24-.718 3.08 3.08 0 01.43-.805c.268-.235.56-.44.868-.607.31-.168.615-.307.916-.417.303-.11.6-.195.89-.252.29-.056.573-.081.849-.076.277.006.547.032.805.076.26.044.516.11.766.198.25.088.483.197.7.324.217.127.406.27.566.43.16.161.29.335.388.522.099.187.165.38.198.577.033.197.032.393-.003.587-.035.194-.107.382-.217.564-.11.182-.25.35-.42.503l-.537.436-.602.455-.646.432a8.277 8.277 0 01-.658.384c-.218.107-.43.202-.637.287-.208.085-.407.154-.599.208-.19.054-.369.088-.538.102-.167.014-.32.01-.458-.012-.138-.023-.267-.063-.387-.122-.119-.058-.226-.133-.32-.226-.094-.092-.172-.198-.234-.316a1.044 1.044 0 01-.143-.448c-.023-.166-.02-.34.01-.522.03-.182.09-.36.18-.532.09-.17.206-.327.347-.47.14-.143.302-.268.486-.374.183-.105.383-.19.597-.253.214-.063.437-.103.668-.12.23-.017.463.001.699.053.236.052.466.128.69.228.223.1.437.222.64.365.202.143.388.3.557.468l.488.512c.15.168.279.35.388.544.108.195.193.396.254.603.06.207.095.416.104.626.01.21-.01.418-.06.622-.05.204-.126.401-.228.591-.102.19-.228.369-.378.535-.149.166-.318.317-.504.453-.186.136-.385.257-.594.362-.21.105-.426.193-.649.264-.223.071-.448.124-.674.159-.227.035-.453.052-.677.052-.224 0-.45-.017-.677-.052l-.674-.159c-.223-.07-.439-.159-.649-.264-.209-.105-.408-.226-.594-.362-.186-.136-.355-.287-.504-.453-.15-.166-.276-.345-.378-.535-.102-.19-.178-.387-.228-.591-.05-.204-.07-.412-.06-.622.01-.21.045-.419.104-.626.06-.207.146-.408.254-.603.109-.194.238-.376.388-.544l.488-.512c.169-.168.355-.325.557-.468.203-.143.417-.265.64-.365.224-.1.454-.176.69-.228.236-.052.469-.07.699-.053.231.017.454.057.668.12.214.063.414.148.597.253.184.106.346.231.486.374.141.143.257.3.347.47.09.172.15.35.18.532.03.182.033.356.01.522-.026.16-.08.309-.162.448-.082.139-.19.263-.322.371-.132.108-.285.197-.455.265-.17.069-.354.115-.547.14-.194.025-.39.026-.589.004z"/>
                </svg>
              </a>
              <a href="https://x.com/moyassin" target="_blank" rel="noreferrer" className="social-link" title="X (Twitter)">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z"/>
                </svg>
              </a>
              <a href="https://medium.com/@moyassin" target="_blank" rel="noreferrer" className="social-link" title="Medium">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.65 0-1.19-2.58-1.19-5.75s.54-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
