import React from 'react';

function Feelings() {
  return (
    <div>
      <h2>Notes for 10.07.24</h2>
      <p>What makes me wonder,</p>
      <p>is that in all the madness this year,</p>
      <p>almost landing in jail,</p>
      <p>every day felt like the end!</p>
      <p>Yet my heart, steady at 72 BPM,</p>
      <p>slowed in fear.</p>
      <p>What happened?</p>
      <p>I shed fears,</p>
      <p>and feelings.</p>
      <p>Like the Monster anime,</p>
      <p>I did the Kinderheim 511 experiment,</p>
      <p>in my home, mosque, church,</p>
      <p>30 days, 3500dt spent!,</p>
      <p>feelings erased.</p>
      <p>Dark rabbit hole,</p>
      <p>Violence in the night, violence in the night</p>
      <p>0 feelings.</p>
      <p>Believe it?</p>
      <p>Living without feelings?</p>
      <p className="song-suggestion">Walking a risky path? Guess you gonna go to jail tonight? Listen to this song! </p>
      <div style={{ marginTop: '20px', position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src="https://www.youtube.com/embed/IviYsgJXG5k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <style jsx>{`
        .song-suggestion {
          margin-top: 10px;
          font-style: italic;
          font-size: 14px;
          color: #666;
        }
      `}</style>
    </div>
  );
}

export default Feelings;
