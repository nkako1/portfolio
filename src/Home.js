import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Case from './Case.js';
import './Home.css';
import thumbnail_downdog from './img/thumbnail_downdog.png';
import downdog from './img/downdog.png';
import thumbnail_mindful_mamas from './img/thumbnail_mindful_mamas.png';
import mindful_mamas from './img/mindful_mamas.png';
import thumbnail_retain from './img/thumbnail_retain.png';
import retain from './img/retain.png';
import thumbnail_kapwing from './img/thumbnail_kapwing.png';
import kapwing from './img/kapwing.png';
import thumbnail_reduct from './img/thumbnail_reduct.png';
import reduct from './img/reduct.png';
import thumbnail_eiq_mobility from './img/thumbnail_eiq_mobility.png';
import eiq_mobility from './img/eiq_mobility.png';
import Pdf from './img/NoraKakoResume.pdf';


function Home() {
  return (

    <div className="wrapper">
      <div id="hello">
      	Nora is a product & UX/UI designer 
      	<br/>
      	who also likes to code
      </div>
      <div id="work">
        <Case 
        	thumbnail={thumbnail_downdog} 
        	content={downdog} 
        	title={"Down Dog"}
        	subtitle={"An app for practicing yoga"}
          closeColor={"white"}
        />
        <Case 
        	thumbnail={thumbnail_mindful_mamas} 
        	content={mindful_mamas} 
        	title={"Mindful Mamas"}
        	subtitle={"A meditation app for new moms"}
          closeColor={"black"}
        />
        <Case 
        	thumbnail={thumbnail_retain} 
        	content={retain} 
        	title={"Retain"}
        	subtitle={"A tool to understand the time cost of customers"}
          closeColor={"black"}
        />
        <Case 
        	thumbnail={thumbnail_kapwing} 
        	content={kapwing} 
        	title={"Kapwing"}
        	subtitle={"An online content creation platform"}
          closeColor={"black"}
        />
        <Case 
        	thumbnail={thumbnail_reduct} 
        	content={reduct} 
        	title={"Reduct"}
        	subtitle={"A new text / audio artifact"}
          closeColor={"black"}
        />
         <Case 
        	thumbnail={thumbnail_eiq_mobility} 
        	content={eiq_mobility} 
        	title={"eIQ Mobility"}
        	subtitle={"A company helping electrify commercial fleets"}
          closeColor={"white"}
        />
      </div>
      <div id="contact">
        <div className="signOff">
          <div>
            Hit me up at <a href="mailto:nora.i.kako@gmail.com?Subject=Hello%20there" target="_top">nora.i.kako@gmail.com</a>
            </div>
            <div>
            Or check out my <a href={Pdf} target="_blank">resume</a>
            </div>
        </div>
        <a target="_blank" href="https://www.flocksf.com">Flock Studio </a>•<a target="_blank" href="https://www.linkedin.com/in/norakako/"> Linkedin</a>
      </div>
    </div>
  );
}

export default Home;
