import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6', color: '#333' }}>
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '10px', color: '#333' }}>moyass.in</h1>
        <p style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#666' }}>Links:</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '8px' }}><a href="https://facebook.com/moyassin" style={{ textDecoration: 'none', color: '#007bff' }}>Facebook @moyassin</a></li>
          <li style={{ marginBottom: '8px' }}><a href="https://tiktok.com/@moyassin" style={{ textDecoration: 'none', color: '#007bff' }}>TikTok @moyassin</a></li>
          <li style={{ marginBottom: '8px' }}><a href="https://github.com/yassincodes" style={{ textDecoration: 'none', color: '#007bff' }}>Old Projects @yassincodes</a></li>
        </ul>
        <p style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#666' }}>Notes:</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '8px' }}><Link to="/feelings" style={{ textDecoration: 'none', color: '#007bff' }}>10.07.24</Link></li>
        <li style={{ marginBottom: '8px' }}><Link to="/decision" style={{ textDecoration: 'none', color: '#007bff' }}>07.07.24</Link></li>
          <li style={{ marginBottom: '8px' }}><Link to="/reflections" style={{ textDecoration: 'none', color: '#007bff' }}>06.07.24</Link></li>
          <li style={{ marginBottom: '8px' }}><Link to="/destiny" style={{ textDecoration: 'none', color: '#007bff' }}>05.07.24</Link></li>
          <li style={{ marginBottom: '8px' }}><Link to="/independence" style={{ textDecoration: 'none', color: '#007bff' }}>04.07.24</Link></li>
        </ul>
      </header>

      <section style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '1.2em', marginBottom: '10px', color: '#666' }}>Here's a bit about my journey:</p>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Started writing at 12, caught the attention of this guy <a href="https://ar.wikipedia.org/wiki/%D8%A8%D9%88%D8%B1%D8%A7%D9%88%D9%8A_%D8%B9%D8%AC%D9%8A%D9%86%D8%A9" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>بوراوي عجينة</a>, but life took different turns.</li>
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
      </section>

      <section style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '1.2em', marginBottom: '10px', color: '#666' }}>Writers that shaped my thinking:</p>
        <ul style={{ lineHeight: '1.8' }}>
          <li>2020: Explored Karl Marx's writings on society and economics (initially liked them, but later grew to dislike them more than anything else).</li>
          <li>2020: Enjoyed Fyodor Dostoevsky's novels, which gave me profound insights into human nature.</li>
          <li>2021: Read all of Friedrich Nietzsche's works, who gave me deep insights into life's existential questions.</li>
          <li>Todo: Reflect on the writers who have profoundly influenced my thinking; I've devoured works from over 100 authors :)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '1.2em', marginBottom: '10px', color: '#666' }}>People I look up to:</p>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Nietzsche for his profound thinking.</li>
          <li>Steve Jobs for his innovative spirit.</li>
          <li>Kanye West for his artistic courage.</li>
          <li>Levelsio for his entrepreneurial journey.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '1.2em', marginBottom: '10px', color: '#666' }}>This summer, my goal is to work for at least 15 hours a day. I'm excited about these projects:</p>
        <ul style={{ lineHeight: '1.8' }}>
          <li><a href="https://journalai.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>JournalAI</a></li>
          <li><a href="https://anisai.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>AnisAI</a></li>
          <li>headshotsAI (building it for a friend)</li>
          <li>cloneme (first user: najmkmar)</li>
          <li>rateme</li>
          <li>UH (been planning this for 4 years!)</li>
          <li>emergency meeting</li>
          <li>war room</li>
        </ul>
      </section>

      <section>

        <p style={{ marginTop: '10px', fontSize: '1.1em', color: '#777' }}>
          If I fall if I die<br />
          Know I lived it to the fullest<br />
          If I fall if I die<br />
          Know I lived and missed some bullets
        </p>
        <div style={{ marginTop: '20px', position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/7xzU9Qqdqww"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>



      </section>

    </div>
  );
}

export default Home;
