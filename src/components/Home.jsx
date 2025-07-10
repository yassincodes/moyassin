import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="intro">
          <h1>Mohamed Yassin</h1>
          <p>a developer</p>
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