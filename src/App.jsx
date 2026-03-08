import { useState } from "react";

const story = [
  "At 16, I built the largest English-learning platform in the Arab world, reaching more than 80,000 learners.",
  "I graduated high school as a math student and enrolled in Teachers' College, but I barely attended classes. I chose to teach myself how to code instead.",
  "I hacked Scrimba for a year of free access and learned how to code from engineers at Amazon, Netflix, JP Morgan, and Uber. Since then, I've built more than 100 projects for myself and many different clients.",
  "On World Teachers' Day 2023, I entered a classroom for the first time. That day, I also started my lifelong project, Assistant. The school became my laboratory. Teaching, coding, building, experimenting, all at once.",
  "Now I'm obsessed with giving life to new species of beings, and I'm on a mission to shape the future of intelligence itself.",
];

const projects = [
  { name: "English Teaching Platform", desc: "Built at 16, this became the largest English-learning platform for Arabic speakers. With a small team, I scaled it to tens of thousands of active learners across the Arab world — proving that a teenager with a laptop and an idea could out-execute institutions that had been trying to solve the same problem for decades.", effect: "Reached 80,000 learners across the Arab world." },
  { name: "Social Media From the Past", desc: "A time machine for social profiles. What would Napoleon tweet? What would Cleopatra post? This project imagines the feeds of history's most iconic figures as if social media had always existed — blending education with satire in a way that makes history feel alive and relevant.", effect: "Graduation project that reimagined how we interact with history." },
  { name: "Drawing Students as Grown-Ups", desc: "I used generative AI to draw my students as their future selves and shared it online. What started as a personal experiment accidentally triggered a viral wave across the Arab world, landing on Al Jazeera and Al Arabiya. For hundreds of thousands of children, it was the first time they ever encountered AI — and it showed them something hopeful about their own future.", effect: "Featured on Al Jazeera & Al Arabiya. 500,000 kids introduced to generative AI." },
  { name: "StudyQuran.com", desc: "What started as a clean, modern Quran reader evolved into a full personalized learning platform. It adapts to each learner's pace and goals, giving millions of Muslims around the world a more thoughtful and accessible way to connect with their most sacred text.", effect: "Used daily by thousands of learners worldwide." },
  { name: "YeTweets", desc: "The night Kanye wiped every tweet from his account, I built and launched a site to preserve them all — before anyone else could. By morning it had spread across YouTube, influencer circles, and media outlets worldwide. Sometimes the product is just being fast enough to show up.", effect: "200,000 users in under 24 hours." },
  { name: "KeyboardMate", desc: "An intelligent keyboard companion that quietly learns how you write — your tone, your vocabulary, your rhythm — and uses that knowledge to help you compose faster and better. Not generic autocomplete. A writing partner that sounds like you, not like everyone else.", effect: "A new kind of writing tool built around your voice." },
  { name: "ComeRate.me", desc: "A social platform built around one question: what do people actually think of each other? ComeRate lets you rate and be rated by peers, creating an honest layer of social feedback that most platforms are too polite to offer. Authentic, sometimes uncomfortable, always real.", effect: "A social rating platform for authentic peer feedback." },
  { name: "TrulyGoodReads", desc: "Goodreads, but every user is a celebrity. See what Elon Musk is reading, what Obama thought of a biography, or what books shaped the minds of the world's most influential people. It reframes book discovery around the question: what are exceptional people actually paying attention to?", effect: "A new lens on books — through the eyes of people who shape the world." },
  { name: "FamousInbox", desc: "A window into the private correspondence of tech pioneers and influential figures. FamousInbox surfaces the emails, letters, and messages that shaped decisions, sparked ideas, and changed industries — giving you a rare glimpse into how exceptional minds actually communicate when no one's watching.", effect: "Read the private messages that changed history." },
  { name: "AgeLogs", desc: "See what famous people were doing at exactly your age. AgeLogs tracks the milestones of celebrities, entrepreneurs, and historical figures so you can compare your journey to theirs — not to feel behind, but to understand that every path looks different, and greatness rarely runs on schedule.", effect: "A mirror that puts your timeline next to greatness." },
];

const styles = {
  page: { fontFamily: "'Inter', sans-serif", background: "#fff", color: "#111", maxWidth: 640, margin: "0 auto", padding: "80px 24px", lineHeight: 1.6 },
  name: { fontSize: 15, fontWeight: 500, marginBottom: 12 },
  story: { fontSize: 15, color: "#444", marginBottom: 64 },
  storyP: { marginBottom: 16 },
  sectionLabel: { fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginBottom: 24, display: "block" },
  project: { padding: "28px 0", borderTop: "1px solid #f0f0f0" },
  projectLast: { padding: "28px 0", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" },
  projectName: { fontSize: 15, fontWeight: 500, marginBottom: 8 },
  projectDesc: { fontSize: 13, color: "#666", lineHeight: 1.75, marginBottom: 10 },
  projectEffect: { fontSize: 12, color: "#999", fontStyle: "italic" },
  nowSection: { marginTop: 64 },
  nowCard: { marginBottom: 32 },
  nowDot: { display: "inline-block", width: 6, height: 6, background: "#22c55e", borderRadius: "50%", marginRight: 8, verticalAlign: "middle" },
  nowTitle: { fontSize: 15, fontWeight: 500, marginBottom: 4 },
  nowSubtitle: { fontSize: 12, color: "#999", marginBottom: 10 },
  nowDesc: { fontSize: 13, color: "#666", lineHeight: 1.75, marginBottom: 12 },
  nowLink: { fontSize: 12, color: "#111", textDecoration: "none", borderBottom: "1px solid #ccc" },
};

function LiveDot() {
  return (
    <span style={{ ...styles.nowDot, animation: "blink 2s infinite" }} />
  );
}

export default function Portfolio() {
  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>

      <div style={styles.name}>Mohammed Yassin</div>

      <div style={styles.story}>
        {story.map((p, i) => (
          <p key={i} style={i < story.length - 1 ? styles.storyP : {}}>{p}</p>
        ))}
      </div>

      <span style={styles.sectionLabel}>Selected Work</span>

      {projects.map((p, i) => (
        <div key={i} style={i === projects.length - 1 ? styles.projectLast : styles.project}>
          <div style={styles.projectName}>{p.name}</div>
          <div style={styles.projectDesc}>{p.desc}</div>
          <div style={styles.projectEffect}>{p.effect}</div>
        </div>
      ))}

      <div style={styles.nowSection}>
        <span style={styles.sectionLabel}>
          <LiveDot />Right Now
        </span>

        <div style={styles.nowCard}>
          <div style={styles.nowTitle}>Assistant</div>
          <div style={styles.nowSubtitle}>A living AI entity — not a chatbot</div>
          <div style={styles.nowDesc}>My main obsession. I'm building a persistent AI entity with memory, goals, and long-term evolution. Not something you open and close — something closer to a living worker that exists between sessions, learns over time, and gets better at being useful the longer it's alive. The first real step toward AI that works like a human being.</div>
        </div>

        <div style={styles.nowCard}>
          <div style={styles.nowTitle}>OneMessage</div>
          <div style={styles.nowSubtitle}>A one-man agency, fully run by agents</div>
          <div style={styles.nowDesc}>A system I built from my room to help people build whatever they want using AI. Tell me what you need — a website, an app, a video, anything — and my agents handle it. An agency, fully run by agents I built myself.</div>
          <a href="https://onemessage.website" style={styles.nowLink}>onemessage.website →</a>
        </div>
      </div>
    </div>
  );
}