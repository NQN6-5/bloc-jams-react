import React from 'react';
import './Landing.css';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn the music up!</h1>

    <div className="row selling-points">

      <div className="col s12 m4 point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music, why should you have to listen to music that someone else chose?</p>
        <i class="material-icons">hearing</i>
      </div>
      <div className="col s12 m4 point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
        <i class="material-icons">mood</i>
      </div>
      <div className="col s12 m4 point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        <i class="material-icons">thumb_up</i>
      </div>

    </div>
  </section>

);

export default Landing;
