import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="intro">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pg0olhsa1xiwgo5i.jpg-tcUeUYjbxPyCjOhf6udIqQZRHy7nIK.jpeg" 
            alt="Mohamed Yassin" 
            className="profile-pic"
            crossOrigin="anonymous"
          />
          <h1>Mohamed Yassin</h1>
          <p>happy, confused and lonely at the same time.</p>
        </div>

        <div className="social-links">
          <div>
            <a
              href="https://facebook.com/moyassin"
              target="_blank"
              rel="noreferrer"
            >
              facebook.com/moyassin
            </a>
          </div>
          <div>
            <a
              href="https://tiktok.com/@moyassin"
              target="_blank"
              rel="noreferrer"
            >
              tiktok.com/@moyassin
            </a>
          </div>
        </div>

        <div className="blog-link">
          <Link to="/blog">→ blog</Link>
        </div>
      </div>
    </div>
  )
}

export default Home