"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import "./App.css"

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle"
    >
      <Sun className={`icon sun-icon ${theme === "dark" ? "hidden" : ""}`} />
      <Moon className={`icon moon-icon ${theme === "dark" ? "" : "hidden"}`} />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark"
    }
    return "dark"
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.className = theme
    document.body.className = theme
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  const bioTexts = [
    "Taught English online by building multiple websites and platforms, including the LearnEnglish Facebook page, the largest English teaching page in the Arab world at the time, helping nearly 100,000 people learn English when I was 16 years old.",
    "In 2019, graduated high school as a mathematics student.",
    "Attended Teachers' College, and at the same time, taught myself how to code by hacking into Scrimba.com and gaining access to one year of courses for free. Later built more than 100 websites to strengthen coding skills.",
    "Worked with clients across the MENA region in web development and digital marketing.",
    "Created a university rating website in 2021 that started in Tunisia and went viral across several countries.",
    "As a graduation project, built Facebook and Messenger clones featuring AI-generated historic figures, letting users explore history and interact with them as if they were living in that era.",
    "On October 5, World Teachers' Day, stepped into teaching for the very first time, with no prior experience.",
    "Shortly after stepping in, I started designing and building my own AI teaching assistant.",
    "Along the way, shiny side projects pulled me in. A few I built recently include yetweets.com (1k daily visitors) and keyboardmemeory.com (an open-source AI keyboard memory). While I’d like to improve them, I now see Assis.tn as my main life mission.",
   
  ]

  return (
    <div className={`app ${theme}`}>
      {/* Background */}
      <div className="background-container">
        <div className="background-base"></div>
        <div className="background-animated">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="site-container">
          <div className={`header-name ${isVisible ? "visible" : ""}`}>MOHAMMED YASSIN</div>
          <div className={`header-toggle ${isVisible ? "visible" : ""}`}>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="site-main">
        <div className="site-container">
          <section className="hero-section">
            <div className={`hero-title ${isVisible ? "visible" : ""}`}>
              <h1>
                <span className="play-icon">▶</span> Hi, I'm Yassin
              </h1>
            </div>

            <div className={`hero-subtitle ${isVisible ? "visible" : ""}`}>
              <p>Builder, educator, and perpetual learner.</p>
            </div>
          </section>

          <section className="bio-section">
            <div className="bio-items">
              {bioTexts.map((text, index) => (
                <div
                  key={index}
                  className={`bio-item ${isVisible ? "visible" : ""}`}
                  style={{ animationDelay: `${900 + index * 100}ms` }}
                >
                  <span className="bio-icon">▶</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="contact-section">
            <div className={`contact-content ${isVisible ? "visible" : ""}`}>
              <p className="closing-statement">
                I am now designing more of these assistants and looking forward to where destiny will lead me.
              </p>
              <div className="contact-links">
                <p>
                  Reach me via <a href="mailto:contact@moyass.in">contact@moyass.in</a>
                </p>
                <p>
                  Or explore my assistant at <a href="https://yassin.assis.tn">yassin.assis.tn</a>
                </p>
                <p>
                  <a href="https://facebook.com/moyassin">facebook: /moyassin</a>
                </p>
                <p>
                  <a href="https://tiktok.com/@moyassin">tiktok: @moyassin</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
