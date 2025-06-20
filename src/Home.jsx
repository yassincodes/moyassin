"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe elements
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href") || "")
        if (target) {
          target.scrollIntoView({ behavior: "smooth" })
        }
      })
    })

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".project-card")
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight

      cards.forEach((card, index) => {
        const speed = (index + 1) * 0.5
        const x = (mouseX - 0.5) * speed
        const y = (mouseY - 0.5) * speed
        card.style.transform = `translate(${x}px, ${y}px) perspective(1000px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="bg-particles">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${i * 8 + 5}%`,
              animationDelay: `${-i * 2}s`,
              animationDuration: `${20 + (i % 3) * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="bg-gradient"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-badge">A Techno Optimist</div>
          <h1 className="hero-title">
            MOHAMED
            <br />
            YASSIN
          </h1>
          <p className="hero-subtitle">
            Building the future of education through revolutionary technology.
            <br />
            From viral content to AI-powered platforms.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="section-header fade-in">
            <h2 className="section-title">Story</h2>
          </div>

          <div className="fade-in">
            <section className="about-section">
              <p className="about-text">
                Started at <span className="highlight">16</span> by creating the most engaging English-learning Facebook
                page in the Arab world, making content and building websites that helped nearly{" "}
                <span className="highlight">100,000 people learn English online</span>. In 2021, I built a university
                rating website that <span className="highlight">went viral across multiple countries</span>. In 2023, I
                developed <span className="highlight">AI-powered Facebook and Messenger clones</span> for interacting
                with historical figures as my graduation project.
              </p>

              <p className="about-text">
                Now, I am combining my passion for technology and my experience as an{" "}
                <span className="highlight">online and school teacher</span> to build what I believe is the{" "}
                <span className="highlight">most powerful educational product on earth</span>. Every line of code, every
                feature, and every decision is made with the goal of creating something{" "}
                <span className="highlight">truly revolutionary</span>.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="section-header fade-in">
          <h2 className="section-title">Currently working on</h2>
        </div>

        <div className="projects-grid">
          {/* YeTweets */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">YeTweets.com</h3>
                <div className="project-status status-live">
                  <span className="status-dot"></span>
                  Live
                </div>
              </div>
            </div>
            <p className="project-description">An archive breaking down Kanye West's February tweets.</p>
            <div className="project-metrics">
              <div className="metric">
                <span className="metric-value">1K</span>
                <span className="metric-label">Daily Users</span>
              </div>
            </div>
            <a href="https://yetweets.com" target="_blank" className="project-link" rel="noreferrer">
              Visit YeTweets.com
            </a>
          </div>

          {/* EduTech Revolution */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">EduTech Revolution</h3>
                <div className="project-status status-dev">
                  <span className="status-dot"></span>
                  In Development
                </div>
              </div>
            </div>
            <p className="project-description">
              The most comprehensive education platform on earth. Originated as an experiment in my teaching job, now
              evolving into a full-scale product loved by every teacher who's seen it. Preparing for a big launch in
              July 2025.
            </p>
            <div className="project-metrics">
              <div className="metric">
                <span className="metric-value">50K+</span>
                <span className="metric-label">Lines of Code</span>
              </div>
              <div className="metric">
                <span className="metric-value">100%</span>
                <span className="metric-label">Teacher Approval</span>
              </div>
              <div className="metric">
                <span className="metric-value">Jul 2025</span>
                <span className="metric-label">Launch Date</span>
              </div>
            </div>
            <a href="https://facebook.com/moyassin" target="_blank" className="project-link" rel="noreferrer">
              Be First to Know
            </a>
          </div>

          {/* YeFanboi Channel */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">YeFanboi Channel</h3>
                <div className="project-status status-live">
                  <span className="status-dot"></span>
                  Live
                </div>
              </div>
            </div>
            <p className="project-description">Sharing Kanye West content.</p>
            <div className="project-metrics">
              <div className="metric">
                <span className="metric-value">+47K</span>
                <span className="metric-label">Total Views</span>
              </div>
            </div>
            <a href="https://youtube.com/@yefanboi" className="project-link">
              Watch on YouTube
            </a>
          </div>

          {/* Middle East Tracker */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">Middle East Tracker</h3>
                <div className="project-status status-dev">
                  <span className="status-dot"></span>
                  In Development
                </div>
              </div>
            </div>
            <p className="project-description">Launching soon.</p>
          </div>

          {/* Dev Agency */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">Dev Agency</h3>
                <div className="project-status status-live">
                  <span className="status-dot"></span>
                  Live
                </div>
              </div>
            </div>
            <p className="project-description">From idea to production in less than 24 hours.</p>
            <a href="#" className="project-link">
              Available Now
            </a>
          </div>

          {/* AaaS */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">AaaS</h3>
                <div className="project-status status-dev">
                  <span className="status-dot"></span>
                  In Development
                </div>
              </div>
            </div>
            <p className="project-description">Art as a Service.</p>
          </div>

          {/* Looks Rating */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">Looks Rating</h3>
                <div className="project-status status-dev">
                  <span className="status-dot"></span>
                  In Development
                </div>
              </div>
            </div>
            <p className="project-description">AI system for analyzing beauty, grooming, and aesthetics.</p>
          </div>

          {/* Human Analysis */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">Human Analysis</h3>
                <div className="project-status status-dev">
                  <span className="status-dot"></span>
                  In Development
                </div>
              </div>
            </div>
            <p className="project-description">AI-powered insight into conversations, tone, and influence.</p>
          </div>

          {/* Coin */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">Coin</h3>
                <div className="project-status status-dev">
                  <span className="status-dot"></span>
                  In Development
                </div>
              </div>
            </div>
            <p className="project-description">
              Digital token of value, identity, and access. More than money — it's a movement.
            </p>
          </div>

          {/* Agent Factory */}
          <div className="project-card fade-in">
            <div className="project-header">
              <div>
                <h3 className="project-title">Agent Factory</h3>
                <div className="project-status status-dev">
                  <span className="status-dot"></span>
                  In Development
                </div>
              </div>
            </div>
            <p className="project-description">Tools to spawn autonomous AI builders, marketers, teachers, and more.</p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="connect" id="connect">
        <div className="connect-container">
          <div className="section-header fade-in">
            <h2 className="section-title">Connect</h2>
          </div>

          <div className="connect-links">
            <div className="connect-item fade-in">
              <div className="connect-platform">Facebook</div>
              <div className="connect-handle">fb.com/moyassin</div>
              <div className="connect-note">Starting to post soon</div>
            </div>

            <div className="connect-item fade-in">
              <div className="connect-platform">TikTok</div>
              <div className="connect-handle">tiktok.com/@moyassin</div>
              <div className="connect-note">Starting to post soon</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
