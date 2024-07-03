import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.5' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1>moyass.in</h1>
        <p>Important Links:</p>
        <ul>
          <li><a href="https://blog.moyass.in">blog.moyass.in</a></li>
          <li><a href="https://facebook.com/moyassin">Facebook @moyassin</a></li>
          <li><a href="https://tiktok.com/@moyassin">TikTok @moyassin</a></li>
          <li><a href="https://github.com/moyassin">Old Projects @yassincodes</a></li>
        </ul>
      </header>



      {
        // <p style={{ textShadow: '2px 2px 4px #aaa' }}>
        // Spent 4 years feeling trapped, but now I'm free! What's missing? Just one girl! Anyway, I'm working on cloning her, metaphorically.
        // </p>
      }

      <p>Here's a bit about my journey:</p>
      <ul>
        <li>Started writing at 12, caught the attention of this famous guy <a href="https://ar.wikipedia.org/wiki/%D8%A8%D9%88%D8%B1%D8%A7%D9%88%D9%8A_%D8%B9%D8%AC%D9%8A%D9%86%D8%A9" target="_blank" rel="noopener noreferrer">بوراوي عجينة</a>, but life took different turns.</li>
        <li>At 16, created the most popular and interactive English teaching platform in the Arab world.</li>
        <li>Made $40 on my first day freelancing at 20, a small win but a big motivation.</li>
        <li>Once considered dropping out, but listened to my father's advice, leading to a period of introspection.</li>
        <li>Launched a startup at 21 that gained traction nationwide, though I lost the code later on.</li>
        <li>Used AI to draw students' portraits at 24, a simple idea that spread joy across classrooms.</li>
        <li>Grateful for amazing friends who make life an amazing journey.</li>
        <li>Was an atheist for 7 years until a life-changing event in 2023 led me to discover faith.</li>
        <li>Faced tough times and thoughts of ending my life (on July 26, 2021), but chose to endure.</li>
        <li>Believe in personal freedom and proudly identify as a libertarian.</li>
      </ul>
      <p>writers that shaped my thinking:</p>
      <ul>
        <li>2020: Explored Karl Marx's writings on society and economics (initially liked them, but later grew to dislike them more than anything else).</li>
        <li>2020: Enjoyed Fyodor Dostoevsky's novels, which gave me profound insights into human nature.</li>
        <li>2021: Read all of Friedrich Nietzsche's works, who gave me deep insights into life's existential questions.</li>
        <li>Todo: Reflect on the writers who have profoundly influenced my thinking; I've devoured works from over 100 authors :)</li>
      </ul>
      <p>I look up to:</p>
      <ul>
        <li>Nietzsche for his profound thinking.</li>
        <li>Steve Jobs for his innovative spirit.</li>
        <li>Kanye West for his artistic courage.</li>
        <li>Levelsio for his entrepreneurial journey.</li>
      </ul>
      <p>This summer, my goal is to work for at least 15 hours a day. I'm excited about these projects:</p>
      <ul>
        <li><a href="https://anisai.vercel.app" target="_blank">AnisAI</a></li>
        <li><a href="https://journalai.vercel.app" target="_blank">JournalAI</a></li>
        <li>headshotsAI (building it for a friend)</li>
        <li>cloneme (first user: najmkmar)</li>
        <li>rateme</li>
        <li>UH (been planning this for 4 years!)</li>
        <li>emergency meeting</li>
        <li>war room</li>
      </ul>
      <p style={{ fontStyle: 'italic', fontSize: '1.2em' }}>
        "We finna go where the stars at<br />
        And beyond that<br />
        This that rip up the contract<br />
        Fuck all that"
      </p>
      <div style={{ marginTop: '20px', position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>

        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0hOIT3io4F8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
