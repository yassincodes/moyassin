export default function App() {
  return (
    <>
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #f5f5f5;
            color: #1a1a1a;
        }

        .hero {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            padding: 80px 40px;
        }

        .hero-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .hero-name {
            font-size: 5em;
            font-weight: 900;
            color: #fff;
            letter-spacing: -2px;
            margin-bottom: 10px;
        }

        .hero-handle {
            font-size: 2.5em;
            font-weight: 700;
            color: #fff;
            opacity: 0.95;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 40px;
        }

        .bio-section {
            margin-bottom: 40px;
        }

        .bio-text {
            font-size: 1.4em;
            font-weight: 600;
            color: #333;
            margin-bottom: 15px;
        }

        .mission-text {
            font-size: 1.2em;
            color: #666;
            margin-bottom: 50px;
        }

        .section-title {
            font-size: 3em;
            font-weight: 900;
            margin-bottom: 40px;
            color: #000;
            letter-spacing: -2px;
        }

        .story-section {
            background: #fff;
            padding: 50px;
            border-radius: 12px;
            margin-bottom: 60px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .story-text {
            font-size: 1.15em;
            line-height: 1.9;
            color: #333;
        }

        .story-text p {
            margin-bottom: 20px;
        }

        .highlight {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #fff;
            padding: 2px 6px;
            font-weight: 700;
            border-radius: 4px;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
            gap: 40px;
            margin-top: 40px;
        }

        .project-item {
            background: #fff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            border: 2px solid #e5e5e5;
        }

        .project-item:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.15);
            border-color: #10b981;
        }

        .project-image {
            width: 100%;
            height: 300px;
            background: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4em;
            position: relative;
            overflow: hidden;
        }

        .project-item:nth-child(1) .project-image {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .project-item:nth-child(2) .project-image {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .project-item:nth-child(3) .project-image {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .project-item:nth-child(4) .project-image {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }

        .project-item:nth-child(5) .project-image {
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        .project-item:nth-child(6) .project-image {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        }

        .project-item:nth-child(7) .project-image {
            background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
        }

        .project-item:nth-child(8) .project-image {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }

        .project-item:nth-child(9) .project-image {
            background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
        }

        .project-item:nth-child(10) .project-image {
            background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
        }

        .project-item:nth-child(11) .project-image {
            background: linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%);
        }

        .project-item:nth-child(12) .project-image {
            background: linear-gradient(135deg, #a1ffce 0%, #faffd1 100%);
        }

        .project-item:nth-child(13) .project-image {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .project-item:nth-child(14) .project-image {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .project-item:nth-child(15) .project-image {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .project-content {
            padding: 30px;
            background: #fff;
        }

        .project-title {
            font-size: 1.5em;
            font-weight: 900;
            color: #000;
            margin-bottom: 12px;
            text-align: center;
        }

        .project-description {
            font-size: 1.05em;
            color: #666;
            line-height: 1.7;
            text-align: center;
        }

        .footer-section {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            padding: 60px 40px;
            text-align: center;
            margin-top: 80px;
        }

        .footer-text {
            font-size: 1.8em;
            font-weight: 600;
            color: #fff;
            margin-bottom: 15px;
            opacity: 0.9;
        }

        .footer-handle {
            font-size: 4em;
            font-weight: 900;
            color: #fff;
            margin-bottom: 30px;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
        }

        .social-link {
            background: #fff;
            color: #10b981;
            padding: 15px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1em;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            background: #f0f0f0;
        }

        @media (max-width: 768px) {
            .hero {
                padding: 60px 20px;
            }

            .hero-name {
                font-size: 3em;
            }

            .hero-handle {
                font-size: 1.8em;
            }

            .projects-grid {
                grid-template-columns: 1fr;
            }

            .story-section {
                padding: 30px;
            }

            .footer-handle {
                font-size: 2.5em;
            }

            .section-title {
                font-size: 2em;
            }
        }
      `}</style>

      <div className="hero">
        <div className="hero-content">
          <div className="hero-name">Mohammed Yassin</div>
          <div className="hero-handle">@moyassin</div>
        </div>
      </div>

      <div className="container">
        <div className="bio-section">
          <div className="bio-text">teacher decoding the human mind, builder of agents at night.</div>
          <div className="mission-text">mission: eliminate reality itself.</div>
        </div>

        <div className="story-section">
          <h2 className="section-title">Story</h2>
          <div className="story-text">
            <p>At <span className="highlight">16</span>, I built the largest English‑teaching platform in the Arab world, helping over 80,000 Arabic speakers learn English online.</p>
            
            <p>After graduating high school as a math student, I went to Teachers' College. Attended classes? Sure—but very few. I taught myself how to code instead.</p>
            
            <p>I <span className="highlight">hacked Scrimba.com</span> for a year of free access, learned from the best, and immediately started freelancing—building websites and tools for clients across the MENA region, alongside wild side projects.</p>
            
            <p>I stepped into classrooms for the first time on <span className="highlight">World Teachers' Day 2023</span>, the day I began my main product and lifelong project, Assistant. The school became my lab. Teaching ran alongside coding, building, and experimenting—always pushing the limits.</p>
          </div>
        </div>

        <h2 className="section-title">Favorite Projects</h2>
        <div className="projects-grid">
          <div className="project-item">
            <div className="project-image">📚</div>
            <div className="project-content">
              <div className="project-title">teaching english</div>
              <div className="project-description">i started making content at 16 helping others learning english online, i built multiple websites and hosted a lot of chat groups back then, with 2 employees working on the platform</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">📱</div>
            <div className="project-content">
              <div className="project-title">Social Media from the Past</div>
              <div className="project-description">Graduation project: AI-powered clones of historical social platforms.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">🧩</div>
            <div className="project-content">
              <div className="project-title">Sudoku Solver</div>
              <div className="project-description">Built to level up algorithm skills.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">🗼</div>
            <div className="project-content">
              <div className="project-title">Hanoi Towers Solver</div>
              <div className="project-description">Recursive algorithm playground for problem-solving.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">🎨</div>
            <div className="project-content">
              <div className="project-title">drawing students as grown ups</div>
              <div className="project-description">i draw my students as grown ups and shared the experience on a brand new account</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">🏫</div>
            <div className="project-content">
              <div className="project-title">najmschool.tn</div>
              <div className="project-description">First online school where every teacher is built with AI.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">🤖</div>
            <div className="project-content">
              <div className="project-title">assis.tn</div>
              <div className="project-description">The next big thing in education — a living, autonomous AI entity.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">🍌</div>
            <div className="project-content">
              <div className="project-title">bananaest.com</div>
              <div className="project-description">Pinterest-style platform for AI-generated Nano Banana images. Users can browse, collect, and share unique AI creations, organize them into boards, and discover trending or new Nano Banana art.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">🐦</div>
            <div className="project-content">
              <div className="project-title">yetweets.com</div>
              <div className="project-description">Full Kanye West tweet archive. 200k+ visitors and counting.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">📧</div>
            <div className="project-content">
              <div className="project-title">famousinbox</div>
              <div className="project-description">Famous people's leaks, presented in original email format.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">⏰</div>
            <div className="project-content">
              <div className="project-title">agelogs.com</div>
              <div className="project-description">What icons were doing at your age. Motivation through timelines.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">💯</div>
            <div className="project-content">
              <div className="project-title">comerate.me</div>
              <div className="project-description">Get raw ratings, roasts, and hype from friends/fans. See where you stand.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">📖</div>
            <div className="project-content">
              <div className="project-title">xpedia.live</div>
              <div className="project-description">build a wikipedia page style based on your x posts, 1000 wikipedia pages built so far</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">⌨️</div>
            <div className="project-content">
              <div className="project-title">keyboardmate.com</div>
              <div className="project-description">AI friend that lives in your keyboard.</div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image">🤝</div>
            <div className="project-content">
              <div className="project-title">howtowinfriend.vercel.app / wijden.xyz</div>
              <div className="project-description">Book/playbook sharing real experiences with friendship.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-text">find me anywhere</div>
        <div className="footer-handle">@moyassin</div>
        <div className="social-links">
          <a href="https://facebook.com/moyassin" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://tiktok.com/@moyassin" className="social-link" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://x.com/moyassin" className="social-link" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://medium.com/@moyassin" className="social-link" target="_blank" rel="noopener noreferrer">Medium</a>
        </div>
      </div>
    </>
  );
}