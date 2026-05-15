import { useRef } from "react";
import SiteNav from "./SiteNav.jsx";
import { usePageLive, useReveal } from "./useSiteMotion.js";

const paragraphs = [
  "I started my journey at 16 years old, when I built the largest English-learning platform in the Arab world — reaching more than 80,000 learners. That was the first time I understood what it means to build something real: not a school project, not a demo, but a living product that thousands of people used every day.",
  "I graduated high school as a math student and enrolled in Teachers' College, but I barely attended classes. I chose to teach myself how to code instead. I hacked Scrimba for a year of free access and learned from engineers at Amazon, Netflix, JP Morgan, and Uber. Since then I have built more than a hundred projects — for myself, for clients, and for the sheer need to make things exist.",
  "Along the way I built things that went viral and things that almost made it. EduMap with a JPMorgan engineer. rateyouruni for Tunisian students. Elon vs Putin during the moment the whole internet was watching. A graduation project that cloned Twitter, Facebook, and Messenger to show what social media would look like in another century. YeTweets the night Kanye deleted everything. Tools for reading the Quran, for exploring CEOs' emails, for mixing startup ideas like a DJ mixes tracks.",
  "On World Teachers' Day 2023, I entered a classroom for the first time. That same day I started my lifelong project, Assistant. The school became my laboratory — teaching, coding, building, experimenting, all at once. I drew students as their grown-up selves and put generative AI in front of half a million children for the first time. I was featured on Al Jazeera and Al Arabiya. I suggested the calendar idea for Jmail; it went live and reached millions. I built the first Situation Monitor before dashboards like it were everywhere.",
  "Now I am obsessed with giving life to new species of beings. DigitalBeings is my life's work — not a product category that already exists, but a new one I am trying to force into existence. I am a builder, a teacher, and an artist. I still type at about one and a half words per second. I still believe the most powerful work comes from human truth, not from playbooks.",
  "If you scrolled through the gallery first — good. The work speaks before the biography. This is the rest.",
];

export default function About() {
  const mainRef = useRef(null);
  const live = usePageLive();

  useReveal(mainRef, live);

  const pageClass = ["site-page", live && "is-live", live && "nav-in"].filter(Boolean).join(" ");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Source+Sans+3:wght@400;500;600&display=swap');
      `}</style>

      <div className={pageClass} ref={mainRef}>
        <SiteNav active="about" />

        <main className="site-shell about-prose" style={{ paddingTop: "calc(var(--site-pad-y) + 44px)" }}>
          <p className="about-lead" data-reveal="soft">
            {paragraphs[0]}
          </p>

          {paragraphs.slice(1).map((p, i) => (
            <p key={i} data-reveal="soft" style={{ transitionDelay: `${50 + i * 40}ms` }}>
              {p}
            </p>
          ))}

          <nav className="about-links-block sig-platforms" aria-label="Links" data-reveal="soft" style={{ transitionDelay: "200ms" }}>
            <a href="/" className="sig-platform">
              <span className="sig-platform-name">Work</span>
              <span className="sig-platform-handle">moyass.in</span>
            </a>
            <a href="https://x.com/moyassin" className="sig-platform" target="_blank" rel="noopener noreferrer">
              <span className="sig-platform-name">X</span>
              <span className="sig-platform-handle">@moyassin</span>
            </a>
          </nav>
        </main>
      </div>
    </>
  );
}
