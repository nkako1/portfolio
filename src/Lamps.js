import React, { useEffect } from 'react';
import './Home.css';
import './Lamps.css';
import hero from './img/lamps/hero.jpg';
import bowlineHanging from './img/lamps/bowline-hanging.jpg';
import bowlineDetail from './img/lamps/bowline-detail.jpg';
import wick from './img/lamps/wick.jpg';
import wickTips from './img/lamps/wick-tips.jpg';
import scallop from './img/lamps/scallop.jpg';
import scallopWick from './img/lamps/scallop-wick.jpg';
import mabe from './img/lamps/mabe.jpg';
import mabeDetail from './img/lamps/mabe-detail.jpg';
import syceeRoom from './img/lamps/sycee-room.jpg';
import syceeDinner from './img/lamps/sycee-dinner.jpg';
import syceeSide from './img/lamps/sycee-side.jpg';
import point from './img/lamps/point.jpg';
import husk from './img/lamps/husk.jpg';
import huskTwist from './img/lamps/husk-twist.jpg';
import huskDetail from './img/lamps/husk-detail.jpg';
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

        {/* Bowline */}
        <Photo className="b-bowline-a" src={bowlineHanging} w={1068} h={1600}
          alt="Woven paper pendant lamp hanging in a dim room" />
        <Photo className="b-bowline-b" src={bowlineDetail} w={1800} h={1202}
          alt="Close-up of the woven paper bands of the pendant"
          caption={<Caption title="Bowline">pendant, mulberry paper and reed</Caption>} />

        {/* Wick */}
        <Photo className="b-wick-a" src={wick} w={1068} h={1600}
          alt="Tall paper table lamp shaped like flames, lit in a dark corner"
          caption={<Caption title="Wick">table lamp, mulberry paper and reed</Caption>} />
        <Photo className="b-wick-c" src={wickTips} w={2200} h={1469}
          alt="The tips of Wick glowing against a grey wall" />

        {/* Scallop */}
        <Photo className="b-scallop-b" src={scallopWick} w={1800} h={1202}
          alt="The scalloped lamp and Wick lit side by side"
          caption={<Caption title="Scallop">table lamp, mulberry paper on a found wire frame, shown with Wick</Caption>} />
        <Photo className="b-scallop-a" src={scallop} w={1025} h={1535}
          alt="Scalloped paper cylinder lamp glowing on a wooden table" />

        {/* Mabe */}
        <Photo className="b-mabe-a" src={mabe} w={1024} h={1535}
          alt="Large oval paper wall light against wood slats" />
        <Photo className="b-mabe-b" src={mabeDetail} w={1800} h={1202}
          alt="Close-up of Mabe's layered paper rings around the bulb"
          caption={<Caption title="Mabe">wall light, mulberry paper and reed</Caption>} />

        {/* Sycee */}
        <Photo className="b-sycee-a" src={syceeRoom} w={1448} h={1086}
          alt="Sculptural paper pendant over a dining table by a brick wall"
          caption={<Caption title="Sycee">pendant, mulberry paper and reed</Caption>} />
        <Photo className="b-sycee-b" src={syceeDinner} w={768} h={1024}
          alt="Two people at dinner under the lit paper pendant" />
        <Photo className="b-sycee-c" src={syceeSide} w={768} h={1024}
          alt="The Sycee pendant glowing, seen from the side" />

        {/* Husk: tall full view on the left, detail and twist stacked on the right */}
        <Photo className="b-husk-a" src={husk} w={1200} h={1600}
          alt="Tall segmented paper floor lamp glowing in the corner of a room"
          caption={<Caption title="Husk">floor lamp, mulberry paper and reed</Caption>} />
        <Photo className="b-husk-c" src={huskDetail} w={1178} h={939}
          alt="Close-up of Husk's paper and reed ribs" />
        <Photo className="b-husk-b" src={huskTwist} w={1200} h={1600}
          alt="Husk's twisting paper segments, seen from the front" />

        {/* Point */}
        <Photo className="b-point" src={point} w={1068} h={1600}
          alt="Cone-shaped paper pendant casting a halo on a dark wall"
          caption={<Caption title="Point">pendant, mulberry paper and reed</Caption>} />

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
