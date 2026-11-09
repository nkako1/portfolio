import React, { useEffect } from 'react';
import './Home.css';
import './Lamps.css';
import hero from './img/lamps/hero.jpg';
import knotHanging from './img/lamps/knot-hanging.jpg';
import knotDetail from './img/lamps/knot-detail.jpg';
import flame from './img/lamps/flame.jpg';
import flameTips from './img/lamps/flame-tips.jpg';
import scallop from './img/lamps/scallop.jpg';
import scallopFlame from './img/lamps/scallop-flame.jpg';
import oyster from './img/lamps/oyster.jpg';
import oysterDetail from './img/lamps/oyster-detail.jpg';
import cloudRoom from './img/lamps/cloud-room.jpg';
import cloudDinner from './img/lamps/cloud-dinner.jpg';
import cloudSide from './img/lamps/cloud-side.jpg';
import cone from './img/lamps/cone.jpg';
import bug from './img/lamps/bug.jpg';
import bugTwist from './img/lamps/bug-twist.jpg';
import bugDetail from './img/lamps/bug-detail.jpg';
import process1 from './img/lamps/process-1.jpg';
import tent from './img/lamps/tent.jpg';

const LAMPS_EMAIL = 'nora.i.kako@gmail.com';

// A gallery photo. width/height are the file's pixel size so the page
// reserves the right space before the image loads.
function Photo({ src, alt, w, h, className = '', caption }) {
  return (
    <figure className={className}>
      <img className="lamps-photo" src={src} alt={alt} width={w} height={h} loading="lazy" />
      {caption}
    </figure>
  );
}

function Caption({ title, children }) {
  return (
    <figcaption className="lamps-caption">
      <em>{title}</em>{children && <> — {children}</>}
    </figcaption>
  );
}

function Lamps() {
  useEffect(() => {
    document.title = 'Handmade Paper Lamps — Nora Kako, Brooklyn';
  }, []);

  return (
    <>
      <section className="lamps-hero">
        <img
          className="lamps-hero-img"
          src={hero}
          alt="Handmade paper lamp shade glowing against a dark wall"
        />
        <h1 id="hello" className="lamps-title">Lamps</h1>
      </section>

      <div className="wrapper lamps">
      <section className="lamps-gallery">
        <p className="lamps-intro">
          Lamps and light sculptures, shaped by hand from paper, reed, and
          found objects in Brooklyn.
        </p>

        {/* Knot */}
        <Photo className="b-knot-a" src={knotHanging} w={1068} h={1600}
          alt="Woven paper pendant lamp hanging in a dim room" />
        <Photo className="b-knot-b" src={knotDetail} w={1800} h={1202}
          alt="Close-up of the woven paper bands of the pendant"
          caption={<Caption title="Knot">pendant, mulberry paper and reed</Caption>} />

        {/* Flame */}
        <Photo className="b-flame-a" src={flame} w={1068} h={1600}
          alt="Tall paper table lamp shaped like flames, lit in a dark corner" />
        <Photo className="b-flame-c" src={flameTips} w={2200} h={1469}
          alt="The tips of the flame lamp glowing against a grey wall"
          caption={<Caption title="Flame">table lamp, mulberry paper and reed</Caption>} />

        {/* Scallop */}
        <Photo className="b-scallop-a" src={scallop} w={1025} h={1535}
          alt="Scalloped paper cylinder lamp glowing on a wooden table" />
        <Photo className="b-scallop-b" src={scallopFlame} w={1800} h={1202}
          alt="The scalloped lamp and the flame lamp lit side by side"
          caption={<Caption title="Scallop">table lamp, mulberry paper on a found wire frame, shown with Flame</Caption>} />

        {/* Oyster */}
        <Photo className="b-oyster-a" src={oyster} w={1024} h={1535}
          alt="Large oval paper wall light against wood slats" />
        <Photo className="b-oyster-b" src={oysterDetail} w={1800} h={1202}
          alt="Close-up of the oyster light's layered paper rings around the bulb"
          caption={<Caption title="Oyster">wall light, mulberry paper and reed</Caption>} />

        {/* Cloud */}
        <Photo className="b-cloud-a" src={cloudRoom} w={1448} h={1086}
          alt="Sculptural paper pendant over a dining table by a brick wall" />
        <Photo className="b-cloud-b" src={cloudDinner} w={768} h={1024}
          alt="Two people at dinner under the lit paper pendant" />
        <Photo className="b-cloud-c" src={cloudSide} w={768} h={1024}
          alt="The cloud pendant glowing, seen from the side"
          caption={<Caption title="Cloud">pendant, mulberry paper and reed</Caption>} />

        {/* Bug: tall full view on the left, detail and twist stacked on the right */}
        <Photo className="b-bug-a" src={bug} w={1200} h={1600}
          alt="Tall segmented paper floor lamp glowing in the corner of a room"
          caption={<Caption title="Bug">floor lamp, mulberry paper and reed</Caption>} />
        <Photo className="b-bug-c" src={bugDetail} w={1178} h={939}
          alt="Close-up of the bug lamp's paper and reed ribs" />
        <Photo className="b-bug-b" src={bugTwist} w={1200} h={1600}
          alt="The bug lamp's twisting paper segments, seen from the front" />

        {/* Cone */}
        <Photo className="b-cone" src={cone} w={1068} h={1600}
          alt="Cone-shaped paper pendant casting a halo on a dark wall"
          caption={<Caption title="Cone">pendant, mulberry paper and reed</Caption>} />

        {/* Process */}
        <Photo className="b-process-a" src={process1} w={1800} h={1202}
          alt="Nora covering a spiral rattan frame with paper" />
        <p className="lamps-note b-process-note">
          Every piece is made by hand in a tent in my backyard in Brooklyn,
          also known as “the bubble.”
        </p>
        <Photo className="b-process-b" src={tent} w={1069} h={1600}
          alt="Nora carrying a paper lamp inside a clear tent in a Brooklyn backyard" />
      </section>

      <section className="lamps-contact">
        <p className="lamps-contact-label">Please send inquiries to</p>
        <a className="hover-underline-animation lamps-email" href={`mailto:${LAMPS_EMAIL}`}>
          {LAMPS_EMAIL}
        </a>
      </section>
      </div>
    </>
  );
}

export default Lamps;
