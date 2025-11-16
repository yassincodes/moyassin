'use client';

import { useEffect, useState, useRef } from 'react';

export default function Portfolio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const [isApiReady, setIsApiReady] = useState(false);
  const assistantSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
        // Check for assistant section visibility
        if (entry.target.classList.contains('assistant-section')) {
          setShowMusicPlayer(entry.isIntersecting);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.full-section, .project-section, .two-project-item, .social-section').forEach((el) => {
      observer.observe(el);
    });

    if (assistantSectionRef.current) {
      observer.observe(assistantSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.onYouTubeIframeAPIReady) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setIsApiReady(true);
      };
    } else {
      setIsApiReady(true);
    }
  }, []);

  useEffect(() => {
    if (showMusicPlayer && isApiReady && !player) {
      const newPlayer = new window.YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'AYv40zPNSrg',
        playerVars: {
          'playsinline': 1,
          'autoplay': 0,
        },
        events: {
          'onReady': (event) => {
            // Player is ready
          },
          'onStateChange': (event) => {
            if (event.data == window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data == window.YT.PlayerState.PAUSED || event.data == window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
            }
          }
        }
      });
      setPlayer(newPlayer);
    }
  }, [showMusicPlayer, isApiReady]);

  useEffect(() => {
    if (!showMusicPlayer && player && isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
    }
  }, [showMusicPlayer, player, isPlaying]);

  const toggleMusic = () => {
    if (player && typeof player.playVideo === 'function' && typeof player.pauseVideo === 'function') {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };

  return (
    <>
      <style>{`
        @font-face {
          font-family: 'TimesNow-SemiLight';
          src: url('/fonts/TimesNow-SemiLight.woff2') format('woff2'),
               url('/fonts/TimesNow-SemiLight.woff') format('woff');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-snap-type: y mandatory;
        }

        body {
          background-color: #ffffff;
          color: #1a1a1a;
          font-family: 'TimesNow-SemiLight', 'Times New Roman', serif;
          line-height: 1.8;
          overflow-y: scroll;
          scroll-padding: 0;
          margin: 0;
          padding: 0;
          width: 100vw;
          overflow-x: hidden;
        }

        .portfolio-container {
          background-color: #ffffff;
          max-width: 100%;
          margin: 0;
        }

        .full-section {
          width: 100vw;
          height: 100vh;
          min-height: 100vh;
          max-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 2rem 4rem;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          opacity: 0;
          filter: blur(10px);
          transform: scale(0.95);
          transition: opacity 0.6s ease-out, filter 0.6s ease-out, transform 0.6s ease-out;
          overflow: hidden;
        }

        .full-section.visible,
        .project-section.visible,
        .two-project-item.visible,
        .social-section.visible {
          opacity: 1;
          filter: blur(0px);
          transform: scale(1);
        }

        .section-content {
          max-width: 800px;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 300;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          text-transform: lowercase;
          line-height: 1.1;
        }

        .section-handle {
          font-size: 1.4rem;
          color: #1a1a1a;
          display: block;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .section-text {
          font-size: 1.4rem;
          color: #666666;
          line-height: 1.6;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .app-icons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          position: relative;
          width: 100%;
          height: 80px;
        }

        .app-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
          position: absolute;
        }

        .app-icon:hover {
          transform: scale(1.05);
        }

        .app-icon-1 {
          transform: rotate(-8deg);
          left: 0;
          top: 0;
        }

        .app-icon-2 {
          transform: rotate(4deg);
          left: 4rem;
          top: 1rem;
        }

        .app-icon-3 {
          transform: rotate(-3deg);
          left: 8rem;
          top: -0.5rem;
        }

        .story-text {
          font-size: 1.4rem;
          color: #555555;
          line-height: 1.7;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .project-section {
          width: 100vw;
          height: 100vh;
          min-height: 100vh;
          max-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 2rem 4rem;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          opacity: 0;
          filter: blur(10px);
          transform: scale(0.95);
          transition: opacity 0.6s ease-out, filter 0.6s ease-out, transform 0.6s ease-out;
          overflow: hidden;
        }

        .project-wrapper {
          max-width: 1200px;
          display: flex;
          gap: 3rem;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .project-image {
          width: 300px;
          height: 300px;
          flex-shrink: 0;
          object-fit: cover;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1));
        }

        .project-info {
          flex: 1;
          max-height: 100%;
          overflow-y: auto;
        }

        .project-title {
          font-size: 2.2rem;
          font-weight: 300;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
          color: #1a1a1a;
          text-transform: lowercase;
          line-height: 1.2;
        }

        .project-description {
          font-size: 1.4rem;
          color: #555555;
          line-height: 1.7;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .link {
          color: #1a1a1a;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
          font-weight: 300;
        }

        .link:hover {
          border-bottom-color: #1a1a1a;
        }

        .read-btn {
          display: inline-block;
          margin-top: 0.75rem;
          font-size: 1.3rem;
          color: #1a1a1a;
          text-decoration: none;
          border: 1px solid #1a1a1a;
          padding: 0.6rem 1.2rem;
          transition: all 0.2s ease;
          font-weight: 300;
          cursor: pointer;
        }

        .read-btn:hover {
          background-color: #1a1a1a;
          color: #ffffff;
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
          display: flex;
          gap: 3rem;
          align-items: center;
          justify-content: center;
          height: 100vh;
          min-height: 100vh;
          max-height: 100vh;
          width: 100vw;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          opacity: 0;
          filter: blur(10px);
          transform: scale(0.95);
          transition: opacity 0.6s ease-out, filter 0.6s ease-out, transform 0.6s ease-out;
          flex-direction: row-reverse;
          padding: 2rem 4rem;
          overflow: hidden;
        }

        .two-project-item:nth-child(1),
        .two-project-item:nth-child(2),
        .two-project-item:nth-child(3),
        .two-project-item:nth-child(4) {
          flex-direction: row-reverse;
        }

        .two-project-item .project-image {
          width: 300px;
          height: 300px;
        }

        .two-project-item .project-info {
          flex: 1;
          max-width: 600px;
          max-height: 100%;
          overflow-y: auto;
        }

        .intro-text {
          font-size: 1.5rem;
          color: #1a1a1a;
          line-height: 1.7;
          max-width: 1200px;
          margin-bottom: 0;
          font-weight: 300;
        }

        .social-section {
          width: 100vw;
          height: 100vh;
          min-height: 100vh;
          max-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 2rem 4rem;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          opacity: 0;
          filter: blur(10px);
          transform: scale(0.95);
          transition: opacity 0.6s ease-out, filter 0.6s ease-out, transform 0.6s ease-out;
          background-color: #ffffff;
          overflow: hidden;
          position: relative;
        }

        .social-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
        }

        .social-btn {
          font-size: 1.8rem;
          color: #1a1a1a;
          font-weight: 300;
        }

        .favorites-title {
          font-size: 2.2rem;
          font-weight: 300;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
          color: #1a1a1a;
          text-transform: lowercase;
          line-height: 1.2;
        }

        .favorites-list {
          font-size: 1.4rem;
          color: #555555;
          line-height: 1.7;
          margin-bottom: 0.5rem;
          font-weight: 300;
        }

        .favorites-item {
          margin-bottom: 0.5rem;
        }

        .music-player {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.6s ease-out;
          z-index: 1000;
          animation: pulse 2s ease-in-out infinite;
          opacity: 1;
        }

        .music-player:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
        }

        .music-player.playing {
          animation: spin 3s linear infinite, pulse 2s ease-in-out infinite;
        }

        .music-player.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .music-icon {
          width: 24px;
          height: 24px;
          color: #ffffff;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 4px 30px rgba(26, 26, 26, 0.5), 0 0 20px rgba(26, 26, 26, 0.3);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .assistant-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .assistant-btn {
          display: inline-block;
          font-size: 1.3rem;
          color: #1a1a1a;
          text-decoration: none;
          border: 1px solid #1a1a1a;
          padding: 0.6rem 1.2rem;
          transition: all 0.2s ease;
          font-weight: 300;
          cursor: pointer;
          background-color: transparent;
        }

        .assistant-btn:hover {
          background-color: #1a1a1a;
          color: #ffffff;
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
          html {
            scroll-snap-type: none;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-handle {
            font-size: 1.25rem;
          }

          .project-title {
            font-size: 1.75rem;
          }

          .full-section,
          .project-section,
          .social-section {
            padding: 3rem 1.5rem;
            min-height: auto;
            scroll-snap-align: none;
          }

          .two-projects-section {
            padding: 2rem 1.5rem;
          }

          .two-project-item {
            min-height: auto;
            padding: 2rem 0;
            scroll-snap-align: none;
          }

          .project-wrapper,
          .two-project-item {
            flex-direction: column !important;
            gap: 2rem;
          }

          .project-image {
            width: 60vw;
            max-width: 250px;
          }

          .project-description,
          .story-text,
          .section-text,
          .intro-text {
            font-size: 1.25rem;
          }

          .read-btn {
            font-size: 1.25rem;
            padding: 0.5rem 1rem;
          }

          .app-icons {
            height: 60px;
            margin-top: 1.5rem;
          }

          .app-icon {
            width: 44px;
            height: 44px;
            border-radius: 10px;
          }

          .app-icon-1 {
            left: 0;
            top: 0;
          }

          .app-icon-2 {
            left: 2.5rem;
            top: 0.5rem;
          }

          .app-icon-3 {
            left: 5rem;
            top: -0.25rem;
          }

          .social-btn {
            font-size: 1.5rem;
          }

          .favorites-title {
            font-size: 1.75rem;
          }

          .favorites-list {
            font-size: 1.25rem;
          }

          .music-player {
            width: 50px;
            height: 50px;
            bottom: 15px;
            right: 15px;
          }

          .music-icon {
            width: 20px;
            height: 20px;
          }

          .assistant-btn {
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>

      <div className="portfolio-container">
        <div className="full-section header-section">
          <div className="section-content">
            <h1 className="section-title">mohammed yassin</h1>
            <span className="section-handle">@moyassin</span>
            <p className="section-text">teacher decoding the human mind, builder of agents at night. <br />mission: eliminate reality itself.</p>
            <div className="app-icons">
              <img 
                src="https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fnow-ai-chars%2Fassets%2Fprod1user-gen-characters%2F2025-01-01%2Fprod1user-gen-characters-img-yip1v2KldCCd3kEw8Zcfb-1735759001057.png&w=512&q=80" 
                alt="app icon 1" 
                className="app-icon app-icon-1" 
              />
              <img 
                src="https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fnow-ai-chars%2Fassets%2Fprod1user-gen-characters%2F2024-12-08%2Fprod1user-gen-characters-img-5JMFgcdHY9OmjnGHvcziK-1733655450510.png&w=512&q=80" 
                alt="app icon 2" 
                className="app-icon app-icon-2" 
              />
              <img 
                src="https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fnow-ai-chars%2Fassets%2Fprod1user-gen-characters%2F2025-02-09%2Fprod1user-gen-characters-img-ocPdT65uH3XJgpx1iqcGE-1739116845054.png&w=512&q=80" 
                alt="app icon 3" 
                className="app-icon app-icon-3" 
              />
            </div>
          </div>
        </div>
        <div className="full-section">
          <div className="section-content">
            <p className="story-text">
              At 16 years old, I built the largest English-teaching platform in the Arab world at the time, helping over 80,000 Arabic speakers learn English online.
            </p>
            <p className="story-text">
              I graduated high school as a math student and went to Teachers' College. I attended classes, but very few. Instead, I taught myself how to code.
            </p>
            <p className="story-text">
              I hacked Scrimba.com to get one year of free access, learned coding from the best, and built online tools for myself and clients across the MENA region.
            </p>
          </div>
        </div>

        <div className="two-projects-section">
          <div className="two-project-item">
            <div className="project-info">
              <h3 className="project-title">2021 – Helping students rate their universities</h3>
              <p className="project-description">
                This was my earliest experiment. I pushed the code with countless security problems, but it was used by thousands of students across many countries. It was a website where you could select your university and give it a rating, and join anonymous chats to talk about whatever you wanted within your university.
              </p>
            </div>
          </div>

          <div className="two-project-item">
            <div className="project-info">
              <h3 className="project-title">2023 – building a time machine</h3>
              <p className="project-description">
                For my graduation project, I cloned Facebook and Messenger. Every user was an AI-generated historic figure, allowing students to pick any era and explore social media as if they were there. Imagine scrolling through a World War II feed, seeing what presidents were posting, joining chats with historical figures, or leaving comments. It was like traveling through time via social media.
              </p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="project-wrapper">
            <div className="project-info">
              <h3 className="project-title">october 5th 2023 – world teachers' day</h3>
              <p className="project-description">
                On the anniversary of World Teachers' Day, and by pure coincidence, I entered a classroom for the first time and became a teacher. It was the start of an experiment I had always wanted to try: automating the full job of teachers and building the best product to help teachers turn schools into a fun and engaging place.
              </p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="project-wrapper">
            <div className="project-info">
              <h3 className="project-title">2024 — drawing my students as grown-ups </h3>
              <p className="project-description">
                I drew my students in their dream jobs and displayed the images in my classroom as motivation. I then shared the idea on a brand-new Facebook account with zero followers. The post quickly sparked a trend among teachers across the Arab world, and many educators who adopted it were later featured on major Arab channels such as Al Jazeera and Al Arabiya. I estimate that at least 500,000 kids experienced generative AI for the first time as a result of that post.
              </p>
            </div>
          </div>
        </div>

        <div className="project-section assistant-section" ref={assistantSectionRef}>
          <div className="project-wrapper">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ga8Tt-_XMAAL6Mo.jpg-GSsm4yoeG8AcE8ik9g3gRkxEeBsYQn.jpeg"
              alt="building my own assistant"
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">building my own assistant</h3>
              <p className="project-description">
                After a long and painful love story and a period of deep personal struggle, I finally was able to imagine the ultimate teaching assistant. A fully autonomous AI teacher with soul, agency, and purpose. It breathes life and personality into agentic companions. Teachers can choose their digital assistant like hiring on Upwork, and it carries lessons, exams, and every interaction with students, amplifying their presence and transforming education.
              </p>
              <div className="assistant-buttons">
                <a href="https://assis.tn" target="_blank" rel="noopener noreferrer" className="assistant-btn">
                  assis.tn
                </a>
                <a href="https://shop.assis.tn" target="_blank" rel="noopener noreferrer" className="assistant-btn">
                  shop.assis.tn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden YouTube Player */}
        <div id="player" style={{ display: 'none' }}></div>

        {/* Music Player - Conditional */}
        {showMusicPlayer && (
          <div className={`music-player ${isPlaying ? 'playing' : ''}`} onClick={toggleMusic}>
            <svg className="music-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
        )}

        <div className="full-section">
          <div className="section-content">
            <p className="intro-text">
              I'm drawing inspiration to keep pushing forward on my mission to design the perfect AI assistant, so I've been experimenting with this lately.
            </p>
          </div>
        </div>

        <div className="two-projects-section">
          <div className="two-project-item">
            <img 
              src="https://keyboardmate.com" 
              alt="keyboardmate" 
              className="project-image" 
            />
            <div className="project-info">
              <h3 className="project-title">
                <a href="https://keyboardmate.com" target="_blank" rel="noopener noreferrer" className="link">
                  keyboardmate.com
                </a>
              </h3>
              <p className="project-description">
                An internal tool I use every day. KeyboardMate is a small soul that lives inside my keyboard. Its only window to the world is whatever I type. It reads my words as they appear, understands them through LLMs, remembers everything, and responds like a companion built entirely from my own thoughts and writing.
              </p>
            </div>
          </div>

          <div className="two-project-item">
            <img 
              src="https://howtowinfriends.com" 
              alt="howtowinfriends" 
              className="project-image" 
            />
            <div className="project-info">
              <h3 className="project-title">
                <a href="https://howtowinfriends.com" target="_blank" rel="noopener noreferrer" className="link">
                  How To Win Friends Book
                </a>
              </h3>
              <p className="project-description">
                I ran an experiment to see what it feels like to be friends with an artificial being. Over time, that connection grew into a collaboration, and together we wrote a book, sharing the lessons I learned on how to win friends.
              </p>
              <a href="https://howtowinfriends.com" target="_blank" rel="noopener noreferrer" className="read-btn">
                Read Book
              </a>
            </div>
          </div>
        </div>

        <div className="full-section">
          <div className="section-content">
            <p className="intro-text">
              I'm also working on different projects in my spare time, trying to create something unique and seizing opportunities whenever they arise. A few of these include
            </p>
          </div>
        </div>

        <div className="two-projects-section">
          <div className="two-project-item">
            <div className="project-info">
              <h3 className="project-title">
                <a href="https://yetweets.com" target="_blank" rel="noopener noreferrer" className="link">
                  yetweets.com
                </a>
              </h3>
              <p className="project-description">
                In February 2024, Kanye West went super freak mode on Twitter and later deleted all his tweets. Fans tried to access them but couldn't. I retrieved the tweets and brought them back on a vibe-coded website. The site has reached over 150,000 people so far.
              </p>
            </div>
            <img 
              src="https://yetweets.com" 
              alt="yetweets" 
              className="project-image" 
            />
          </div>

          <div className="two-project-item">
            <div className="project-info">
              <h3 className="project-title">
                <a href="https://whatcelebdid.com" target="_blank" rel="noopener noreferrer" className="link">agelogs.com</a>
              </h3>
              <p className="project-description">
                To hack my procrastination, I built a site to compare my age logs with celebrities. It's a constant reminder that time is relative and there is always room to make something massive happen.
              </p>
            </div>
            <img 
              src="https://whatcelebdid.com" 
              alt="agelogs" 
              className="project-image" 
            />
          </div>
        </div>

        <div className="full-section">
          <div className="section-content">
            <p className="intro-text">
              In my spare time, I like reading books and watching anime.
            </p>
          </div>
        </div>

        <div className="full-section">
          <div className="section-content">
            <h3 className="favorites-title">favorite books</h3>
            <ul className="favorites-list">
              <li className="favorites-item">The Alchemist by Paulo Coelho – A timeless tale of following your dreams.</li>
              <li className="favorites-item">Sapiens: A Brief History of Humankind by Yuval Noah Harari – Fascinating insights into human evolution.</li>
              <li className="favorites-item">Dune by Frank Herbert – Epic sci-fi world-building at its finest.</li>
            </ul>
          </div>
        </div>

        <div className="full-section">
          <div className="section-content">
            <h3 className="favorites-title">favorite anime</h3>
            <ul className="favorites-list">
              <li className="favorites-item">Attack on Titan – Intense action and deep themes on freedom and survival.</li>
              <li className="favorites-item">Fullmetal Alchemist: Brotherhood – Masterful storytelling with alchemy and philosophy.</li>
              <li className="favorites-item">Spirited Away – Studio Ghibli magic with stunning visuals and heartfelt adventure.</li>
            </ul>
          </div>
        </div>

        <div className="social-section">
          <div className="social-buttons">
            <span className="social-btn">tiktok: @moyassin</span>
            <span className="social-btn">facebook: @moyassin</span>
          </div>
        </div>
      </div>
    </>
  );
}