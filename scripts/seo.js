// Runs after `react-scripts build` (see "postbuild" in package.json).
//
// GitHub Pages only serves real files, so client-side routes like /lamps have no
// HTML of their own. This script writes build/<route>.html for each route,
// each with its own title, description, canonical URL, link-preview tags,
// structured data, and a plain-HTML copy of the page's text for crawlers that
// don't run JavaScript (React replaces it on load). It also writes the sitemap,
// including image entries for the lamp photos.

const fs = require('fs');
const path = require('path');

const SITE = 'https://norakako.com';
const BUILD = path.join(__dirname, '..', 'build');
const today = new Date().toISOString().slice(0, 10);

const template = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(BUILD, 'asset-manifest.json'), 'utf8')).files;

// Absolute URL of a bundled image, e.g. media('flame.jpg')
function media(name) {
  const url = manifest[`static/media/${name}`];
  if (!url) throw new Error(`seo.js: no bundled image named ${name}`);
  return SITE + url;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const PERSON = { '@type': 'Person', '@id': `${SITE}/#nora`, name: 'Nora Kako', url: `${SITE}/` };
const MATERIALS = 'Mulberry paper and reed';

const LAMPS = [
  { name: 'Knot', form: 'Pendant lamp', image: 'knot-hanging.jpg' },
  { name: 'Flame', form: 'Table lamp', image: 'flame.jpg' },
  { name: 'Scallop', form: 'Table lamp', image: 'scallop.jpg', medium: 'Mulberry paper on a found wire frame' },
  { name: 'Oyster', form: 'Wall light', image: 'oyster.jpg' },
  { name: 'Cloud', form: 'Pendant lamp', image: 'cloud-room.jpg' },
  { name: 'Bug', form: 'Floor lamp', image: 'bug.jpg' },
  { name: 'Cone', form: 'Pendant lamp', image: 'cone.jpg' },
];

// Every lamp photo, for the image sitemap
const LAMP_IMAGES = [
  ['hero.jpg', 'Knot, a handmade mulberry paper pendant lamp'],
  ['knot-hanging.jpg', 'Knot, woven paper pendant lamp'],
  ['knot-detail.jpg', 'Knot pendant lamp, detail of woven paper bands'],
  ['flame.jpg', 'Flame, paper table lamp shaped like flames'],
  ['flame-tips.jpg', 'Flame table lamp, glowing paper tips'],
  ['scallop.jpg', 'Scallop, scalloped paper table lamp'],
  ['scallop-flame.jpg', 'Scallop and Flame paper lamps side by side'],
  ['oyster.jpg', 'Oyster, oval paper wall light'],
  ['oyster-detail.jpg', 'Oyster wall light, layered paper rings around the bulb'],
  ['cloud-room.jpg', 'Cloud, sculptural paper pendant over a dining table'],
  ['cloud-dinner.jpg', 'Cloud pendant lamp over dinner'],
  ['cloud-side.jpg', 'Cloud pendant lamp, side view'],
  ['bug.jpg', 'Bug, tall segmented paper floor lamp'],
  ['bug-detail.jpg', 'Bug floor lamp, paper and reed detail'],
  ['bug-twist.jpg', 'Bug floor lamp, twisting paper segments'],
  ['cone.jpg', 'Cone, paper pendant lamp'],
  ['process-1.jpg', 'Covering a reed lamp frame with mulberry paper'],
  ['tent.jpg', 'Backyard tent studio in Brooklyn where the lamps are made'],
];

const ROUTES = [
  {
    path: '/lamps',
    title: 'Handmade Paper Lamps — Nora Kako, Brooklyn',
    description:
      'Handmade lamps and light sculptures by Nora Kako, shaped from mulberry paper, reed, and found objects in Brooklyn, NY. Pendants, table lamps, floor lamps, and wall lights.',
    image: `${SITE}/og-lamps.jpg`,
    jsonld: () => ({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Lamps by Nora Kako',
      url: `${SITE}/lamps`,
      description: 'Handmade lamps and light sculptures made from mulberry paper, reed, and found objects in Brooklyn, NY.',
      author: PERSON,
      hasPart: LAMPS.map((l) => ({
        '@type': 'VisualArtwork',
        name: l.name,
        artform: l.form,
        artMedium: l.medium || MATERIALS,
        image: media(l.image),
        creator: PERSON,
        locationCreated: { '@type': 'Place', name: 'Brooklyn, NY' },
      })),
    }),
    body: `
      <main>
        <h1>Lamps</h1>
        <p>Lamps and light sculptures, shaped by hand from paper, reed, and found objects in Brooklyn.</p>
        <ul>
          ${LAMPS.map((l) => `<li><em>${l.name}</em> — ${l.form.toLowerCase()}, ${(l.medium || MATERIALS).toLowerCase()}</li>`).join('')}
        </ul>
        <p>Every piece is made by hand in a tent in my backyard in Brooklyn, also known as “the bubble.”</p>
        <p>Please send inquiries to nora.i.kako@gmail.com</p>
        <p><a href="/">Nora Kako</a></p>
      </main>`,
  },
  {
    path: '/contact',
    title: 'Contact — Nora Kako',
    description: 'Get in touch with Nora Kako, a product designer and lamp maker based in Brooklyn, NY.',
    image: `${SITE}/og-image.png`,
    body: `
      <main>
        <h1>Contact Nora Kako</h1>
        <p>Email: nora.i.kako@gmail.com</p>
        <p><a href="https://www.linkedin.com/in/norakako/">LinkedIn</a></p>
        <p><a href="/">Home</a></p>
      </main>`,
  },
];

function setAttr(html, selector, value) {
  // selector is the part before content=, e.g. 'name="description"'
  const re = new RegExp(`(<meta ${selector} content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`seo.js: tag not found: ${selector}`);
  return html.replace(re, `$1${esc(value)}$2`);
}

function renderRoute(r) {
  const url = SITE + r.path;
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(r.title)}</title>`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = setAttr(html, 'name="description"', r.description);
  html = setAttr(html, 'property="og:title"', r.title);
  html = setAttr(html, 'property="og:description"', r.description);
  html = setAttr(html, 'property="og:url"', url);
  html = setAttr(html, 'property="og:image"', r.image);
  html = setAttr(html, 'name="twitter:title"', r.title);
  html = setAttr(html, 'name="twitter:description"', r.description);
  html = setAttr(html, 'name="twitter:image"', r.image);
  if (r.jsonld) {
    const block = `<script type="application/ld+json">${JSON.stringify(r.jsonld())}</script>`;
    html = html.replace('</head>', `${block}</head>`);
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${r.body.trim()}</div>`);
  return html;
}

// GitHub Pages serves /lamps from lamps.html with no redirect (a lamps/ folder
// would redirect to /lamps/ instead).
for (const r of ROUTES) {
  fs.writeFileSync(path.join(BUILD, `${r.path.slice(1)}.html`), renderRoute(r));
}

// Sitemap
const imageTags = LAMP_IMAGES.map(
  ([file, caption]) => `
    <image:image>
      <image:loc>${media(file)}</image:loc>
      <image:title>${esc(caption)}</image:title>
    </image:image>`
).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE}/lamps</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>${imageTags}
  </url>
  <url>
    <loc>${SITE}/contact</loc>
    <lastmod>${today}</lastmod>
    <priority>0.5</priority>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(BUILD, 'sitemap.xml'), sitemap);

console.log(`seo.js: wrote ${ROUTES.map((r) => r.path.slice(1) + '.html').join(', ')} and sitemap.xml`);
