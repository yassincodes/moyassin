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
    "Shortly after stepping in, started designing and building my own AI teaching assistant.",
    <>
      My first experiment was drawing my students as grown-ups. I had to set up a new Facebook account in 2024 to share the idea, after almost 7 years of not using Facebook. Soon, the concept went viral.
    </>,
    <>
      I then started building tools to help teachers do the same, while also creating tools for different tasks, like my{" "}
      <a
        href="https://vimeo.com/976990722"
        target="_blank"
        rel="noopener noreferrer"
      >
        journal tool 🔗 (view video)
      </a>.
    </>,
    "Kept building AI educational tools, but still couldn’t see the full connection between everything. My goal from the start was to build a simple, very simple tool that combined all my experimenting into one product.",
    <>
      Shiny side projects kept pulling me in as well, a few I built recently include{" "}
      <a href="https://yetweets.com" target="_blank" rel="noopener noreferrer">
        yetweets.com 🔗
      </a>{" "}
      (150,000 visitors so far) and{" "}
      <a href="https://keyboardmemory.com" target="_blank" rel="noopener noreferrer">
        keyboardmemory.com 🔗
      </a>{" "}
      (an internal tool I use daily to capture everything I type and turn it into memories).
    </>,
    "Although I’d like to improve them, now that I have the full vision for my assistant, I see this project as my main life mission."
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
              </
