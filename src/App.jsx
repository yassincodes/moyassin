export default function Portfolio() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: #ffffff;
          color: #1a1a1a;
          font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
        }

        .portfolio-container {
          background-color: #ffffff;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-section {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          z-index: 1000;
          animation: heroFadeOut 1.2s ease-out 1.5s forwards;
        }

        .hero-content {
          text-align: center;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 300;
          letter-spacing: -0.02em;
          text-transform: lowercase;
          color: #1a1a1a;
        }

        .full-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 2rem 4rem;
        }

        .header-section {
          animation: fadeIn 0.8s ease-out 2.7s forwards;
          opacity: 0;
        }

        .section-content {
          max-width: 800px;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 300;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
          text-transform: lowercase;
        }

        .section-handle {
          font-size: 1.125rem;
          color: #7c3aed;
          display: block;
          margin-bottom: 1.5rem;
        }

        .section-text {
          font-size: 1.125rem;
          color: #666666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .story-text {
          font-size: 1.125rem;
          color: #555555;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .project-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 2rem 4rem;
        }

        .project-wrapper {
          max-width: 1200px;
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .project-image {
          width: 250px;
          height: 250px;
          flex-shrink: 0;
          object-fit: cover;
          border-radius: 8px;
          background-color: #ffffff;
          border: 1px solid #f0f0f0;
        }

        .project-info {
          flex: 1;
        }

        .project-title {
          font-size: 2rem;
          font-weight: 300;
          letter-spacing: -0.01em;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
          text-transform: lowercase;
        }

        .project-description {
          font-size: 1.125rem;
          color: #555555;
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .link {
          color: #7c3aed;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }

        .link:hover {
          border-bottom-color: #7c3aed;
        }

        .two-projects-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 4rem 4rem;
          gap: 0;
        }

        .two-project-item {
          max-width: 1200px;
          display: flex;
          gap: 3rem;
          align-items: center;
          min-height: 100vh;
          width: 100%;
        }

        .intro-text {
          font-size: 1.25rem;
          color: #1a1a1a;
          line-height: 1.8;
          max-width: 1200px;
          margin-bottom: 0;
          font-weight: 400;
        }

        .social-section {
          width: 100vw;
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 4rem;
        }

        .social-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .social-btn {
          padding: 0.75rem 1.5rem;
          background-color: #7c3aed;
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
          display: inline-block;
        }

        .social-btn:hover {
          background-color: #6d28d9;
          transform: scale(1.05);
        }

        @keyframes heroFadeOut {
          0% {
            opacity: 1;
            pointer-events: auto;
          }
          100% {
            opacity: 0;
            pointer-events: none;
            visibility: hidden;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .project-title {
            font-size: 1.5rem;
          }

          .full-section,
          .project-section,
          .two-projects-section,
          .social-section {
            padding: 2rem 1rem;
          }

          .project-wrapper,
          .two-project-item {
            flex-direction: column;
            gap: 1.5rem;
          }

          .project-image {
            width: 180px;
            height: 180px;
          }

          .project-description,
          .story-text,
          .section-text,
          .intro-text {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="portfolio-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">mohammed yassin</h1>
          </div>
        </div>

        <div className="full-section header-section">
          <div className="section-content">
            <h1 className="section-title">mohammed yassin</h1>
            <span className="section-handle">@moyassin</span>
            <p className="section-text">teacher decoding the human mind, builder of agents at night. mission: eliminate reality itself.</p>
          </div>
        </div>

        <div className="full-section">
          <div className="section-content">
            <p className="story-text">at 16 y/o, i built one of the largest english-teaching pages in the arab world, helping more than 80,000 arab speakers learn english online.</p>
            <p className="story-text">i graduated high school as a math student, went to teachers' college, and never attended a class. instead, i started teaching myself how to code.</p>
            <p className="story-text">i hacked into scrimba.com to get 1 year of free access, learned coding from the best, and built online tools for myself and for clients across the MENA region.</p>
          </div>
        </div>

        <div className="two-projects-section">
          <div className="two-project-item">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-11-14_at_9.41.23_AM-removebg-preview-lNvH5Dg9ggu5s4TtSEuQcxHEPPSihm.png" alt="rate your university" className="project-image" />
            <div className="project-info">
              <h3 className="project-title">rate your university</h3>
              <p className="project-description">my first project. built with react and firebase. i pushed the code with countless security problems, but it was used by thousands of students across many countries.</p>
            </div>
          </div>
          <div className="two-project-item">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-11-14_at_9.41.23_AM-removebg-preview-lNvH5Dg9ggu5s4TtSEuQcxHEPPSihm.png" alt="graduation project" className="project-image" />
            <div className="project-info">
              <h3 className="project-title">graduation project</h3>
              <p className="project-description">facebook + messenger clones with ai-generated historic figures living in their eras.</p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="project-wrapper">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/english%20teaching%20-X9rPy2t0sT5hRNV0lqvl9lJaPLbHfU.jpg" alt="world teachers' day 2023" className="project-image" />
            <div className="project-info">
              <h3 className="project-title">world teachers' day 2023</h3>
              <p className="project-description">i entered a classroom for the first time on world teachers' day.</p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="project-wrapper">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-14%20at%2010.24.17%E2%80%AFAM-WJsarZtWEbxMgBWeQIuBZB0A7E5yrp.png" alt="drawing my students as grown-ups" className="project-image" />
            <div className="project-info">
              <h3 className="project-title">drawing my students as grown-ups — 2024</h3>
              <p className="project-description">a generative-ai concept that reached half a million people.</p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="project-wrapper">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ga8Tt-_XMAAL6Mo.jpg-GSsm4yoeG8AcE8ik9g3gRkxEeBsYQn.jpeg" alt="building my assistant" className="project-image" />
            <div className="project-info">
              <h3 className="project-title">building my assistant</h3>
              <p className="project-description">i'm building my own teaching assistant now.</p>
            </div>
          </div>
        </div>

        <div className="full-section">
          <div className="section-content">
            <p className="intro-text">i'm drawing inspiration to keep looking forward on the mission to design the perfect assistant. for that i built the following projects:</p>
          </div>
        </div>
        
        <div className="two-projects-section">
          <div className="two-project-item">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-11-14_at_9.42.46_AM-removebg-preview-UeAZq9z95yZvmTKwLBsRrsuQXgtQSN.png" alt="keyboardmate" className="project-image" />
            <div className="project-info">
              <h3 className="project-title">
                <a href="https://keyboardmate.com" target="_blank" rel="noopener noreferrer" className="link">keyboardmate.com</a>
              </h3>
              <p className="project-description">a tool to help you master keyboard shortcuts and improve your typing efficiency.</p>
            </div>
          </div>
          <div className="two-project-item">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled_design__26_-removebg-preview-uhxST2JnPePtqLvYKe9pSiFn6NLdnv.png" alt="howtowinfriends" className="project-image" />
            <div className="project-info">
              <h3 className="project-title">
                <a href="https://howtowinfriends.com" target="_blank" rel="noopener noreferrer" className="link">howtowinfriends.com</a>
              </h3>
              <p className="project-description">practical social skills and communication strategies based on dale carnegie's principles.</p>
            </div>
          </div>
        </div>

        <div className="full-section">
          <div className="section-content">
            <p className="intro-text">i'm also building things in my spare time, trying to make something unique and grabbing the opportunity whenever needed.</p>
          </div>
        </div>
        
        <div className="two-projects-section">
          <div className="two-project-item">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-11-14_at_9.43.23_AM-removebg-preview-IhQliZoGXZ7wVTXXTRQ3xGVaDx97pu.png" alt="yetweets" className="project-image" />
            <div className="project-info">
              <h3 className="project-title">
                <a href="https://yetweets.com" target="_blank" rel="noopener noreferrer" className="link">yetweets.com</a>
              </h3>
              <p className="project-description">discover what happened on twitter on any date in history.</p>
            </div>
          </div>
          <div className="two-project-item">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-11-14_at_9.42.07_AM-removebg-preview-bG5wGIDkVIbu4RZp0uPbY4LeWCWkch.png" alt="whatcelebdid" className="project-image" />
            <div className="project-info">
              <h3 className="project-title">
                <a href="https://whatcelebdid.com" target="_blank" rel="noopener noreferrer" className="link">whatcelebdid.com</a>
              </h3>
              <p className="project-description">explore what celebrities were doing at your age and get inspired by their journey.</p>
            </div>
          </div>
        </div>

        <div className="social-section">
          <div className="social-buttons">
            <a href="https://tiktok.com/@moyassin" target="_blank" rel="noopener noreferrer" className="social-btn">tiktok: @moyassin</a>
            <a href="https://facebook.com/moyassin" target="_blank" rel="noopener noreferrer" className="social-btn">facebook: @moyassin</a>
            <a href="mailto:mohammedyassinkhalifi@gmail.com" className="social-btn">email</a>
          </div>
        </div>
      </div>
    </>
  );
}