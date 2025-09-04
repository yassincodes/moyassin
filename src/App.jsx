"use client"

import { useEffect, useState } from "react"

export default function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.body.className = "app"
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const bioItems = [
    "Taught English online by building multiple websites and platforms, including the LearnEnglish Facebook page, the largest English teaching page in the Arab world at the time, helping nearly 100,000 people learn English when I was 16 years old.",
    "In 2019, graduated high school as a mathematics student.",
    "Attended Teachers' College, and at the same time, taught myself how to code by building more than 100 websites, trying to solve the problems I faced and the problems I saw others facing.",
    "Worked with clients across the MENA region in web development and digital marketing.",
    "Created a university rating website in 2021 that started in Tunisia and went viral across several countries.",
    "As a graduation project, built Facebook and Messenger clones featuring AI-generated historic figures, letting users explore history and interact with them as if they were living in that era.",
    "On October 5, World Teachers' Day, stepped into teaching for the very first time, with no prior experience.",
    "Shortly after stepping in, started designing and building my own AI teaching assistant.",
    "First experiment: I drew my students as grown-ups, which went viral among educators soon after I shared it.",
    {
      text: "Building tools: I started creating tools to help my fellow teachers replicate this experiment, while also trying to come up with a solution to any teaching task I see, like my journal tool 🔗 (view video).",
      link: "https://vimeo.com/976990722",
    },
    {
      text: "Side projects: Shiny side projects kept pulling me in. A few I've built recently include yetweets.com 🔗 (150,000 visitors so far) and keyboardmemory.com 🔗 (an internal tool I use daily to capture everything I type and turn it into memories).",
      links: [
        { text: "yetweets.com", url: "https://yetweets.com" },
        { text: "keyboardmemory.com", url: "https://keyboardmemory.com" },
      ],
    },
    "Although I'd like to improve them, now that I see how all the teaching tools I've built connect in one simple product, assis.tn, this has become my primary life mission.",
  ]

  const renderBioText = (item) => {
    if (typeof item === "string") {
      return <p>{item}</p>
    }

    if (item.link) {
      const parts = item.text.split("journal tool 🔗 (view video)")
      return (
        <p>
          {parts[0]}
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            journal tool 🔗 (view video)
          </a>
          {parts[1]}
        </p>
      )
    }

    if (item.links) {
      let text = item.text
      item.links.forEach((link) => {
        text = text.replace(
          link.text,
          `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a>`,
        )
      })
      return <p dangerouslySetInnerHTML={{ __html: text }} />
    }

    return <p>{item.text}</p>
  }

  return (
    <div className="app">
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
          <div className={`header-name ${isVisible ? "visible" : ""}`}>Mohammed Yassin</div>
          <button className={`theme-toggle header-toggle ${isVisible ? "visible" : ""}`} onClick={toggleTheme}>
            <svg className={`icon sun-icon ${theme === "dark" ? "hidden" : ""}`} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg className={`icon moon-icon ${theme === "dark" ? "" : "hidden"}`} viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="site-main">
        <div className="site-container">
          {/* Hero Section */}
          <section className="hero-section">
            <div className={`hero-title ${isVisible ? "visible" : ""}`}>
              <h1>▶ Hi, I'm Yassin</h1>
            </div>
            <div className={`hero-subtitle ${isVisible ? "visible" : ""}`}>
              <p>Builder, educator, and perpetual learner.</p>
            </div>
          </section>

          {/* Bio Section */}
          <section className="bio-section">
            <div className="bio-items">
              {bioItems.map((item, index) => (
                <div
                  key={index}
                  className={`bio-item ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <span className="bio-icon">▶</span>
                  {renderBioText(item)}
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <div className={`contact-content ${isVisible ? "visible" : ""}`}>
              <h2 className="closing-statement">
                I am now designing more of these assistants and looking forward to where destiny will lead me.
              </h2>
              <div className="contact-links">
                <p>
                  Reach me via <a href="mailto:contact@moyass.in">contact@moyass.in</a>
                </p>
                <p>
                  <a href="https://facebook.com/moyassin" target="_blank" rel="noopener noreferrer">
                    facebook: /moyassin
                  </a>
                </p>
                <p>
                  <a href="https://tiktok.com/@moyassin" target="_blank" rel="noopener noreferrer">
                    tiktok: @moyassin
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
