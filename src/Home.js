import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  useEffect(() => {
    document.title = 'Nora Kako — Product & UI/UX Designer';
  }, []);

  return (

    <div className="wrapper">
      <div id="hello">
        Hi I’m <span className="nora-hover">Nora</span>.
        <br />I’m a multidisciplinary designer based in Brooklyn, focused on creating clean and functional digital experiences.
        <br /><br />
      	For 6 years, I led design at <a className="hover-underline-animation" href="https://flocksf.com" target="_blank" rel="noopener noreferrer">Flock Studio</a>. Please go check out our work.
        <br /><br />
        Currently helping out at <a className="hover-underline-animation" href="https://www.ode.com/" target="_blank" rel="noopener noreferrer">Ode</a> and <Link className="hover-underline-animation" to="/lamps">making lamps</Link>.
      </div>
    </div>
  );
}

export default Home;
