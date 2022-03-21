import React from 'react';
import './Home.css';

function Home() {
  return (

    <div className="wrapper">
      <div id="hello">
        Hi I’m Nora.
        <br />I’m a multidisciplinary designer, focused on creating clean and functional digital experiences.
        <br /><br />
      	Currently, I’m leading design at <a className="hover-underline-animation" href="https://flocksf.com" target="_blank" rel="noopener noreferrer">Flock Studio</a>. Please reach out and say hello.
        <br /><br />
        <a className="hover-underline-animation" id="contact" href="mailto:nora@flocksf.com?Subject=Hello%20there" target="_blank" rel="noopener noreferrer">nora[at]flocksf.com</a>
      </div>
    </div>
  );
}

export default Home;
