"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import "./App.css"

function ThemeToggle({ theme, setTheme }) {
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="theme-toggle">
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
              {[
                "Taught English online by building multiple websites and platforms, including the LearnEnglish Facebook page, the largest English teaching page in the Arab world at the time, helping nearly 100,000 people learn English when I was 16 years old.",
                "In 2019, graduated high school as a mathematics student.",
                "Attended Teachers' College, and at the same time, taught myself how to code by hacking into Scrimba.com and gaining access to one year of courses for free. Later built more than 100 websites to strengthen coding skills.",
                "Worked with clients across the MENA region in web development and digital marketing.",
                "Created a university rating website in 2021 that started in Tunisia and went viral across several countries.",
                "As a graduation project, built Facebook and Messenger clones featuring AI-generated historic figures, imagining how they would have used social media in their own time. Users could select a historical era, scroll through feeds created by these figures, and interact or chat with them as if they were living in that era, offering a novel way to explore and learn history.",
                "On October 5, World Teachers' Day, stepped into teaching for the very first time, with no prior experience.",
                "During my two years as a teacher, I dedicated myself to creating my own teaching assistant, facing countless risks, battling addiction, and enduring relentless personal struggles; through this journey, the project grew into my main assistant and companion.",
              ].map((text, index) => (
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
                  or explore my assistant at <a href="https://yassin.assis.tn">yassin.assis.tn</a>
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
