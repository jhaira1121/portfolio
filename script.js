/* ---- EmailJS ---- */
const EMAILJS_CONFIG = {
  publicKey:  "zjN7eHAYynZ3GtMFp",   // EmailJS > Account > Public Key
  serviceId:  "service_goa2tsa",   // EmailJS > Email Services
  templateId: "template_w00xxdo"   // EmailJS > Email Templates
};

/* ---- Social links ---- */
const socialLinks = {
  facebook:  "https://www.facebook.com/share/1JvNthTgXn/",
  instagram: "https://www.instagram.com/jhairaflor?srtk=MWlybzFvaWZ0dzNlNA==",
  github:    "https://github.com/jhaira1121"
};
/* ---- Mini profile cards shown inside the phone ---- */
const socialProfiles = {
  facebook:  { name: "Jhaira Flor", handle: "taongcalbo101",   bio: "🐢", photo: "assets/images/social/facebook.jpg" },
  instagram: { name: "", handle: "jhairaflor",       bio: "🐢", photo: "assets/images/social/instagram.jpg" },
  github:    { name: "", handle: "jhaira1121", bio: "", photo: "assets/images/social/github.png" }
};

/* ---- Favorite songs: used by BOTH the phone's Spotify app and the plushie ---- */
const favoriteSongs = [
  { title: "Closer", artist: "GEHLEE", spotifyUrl: "https://open.spotify.com/track/7D2ZnXa4KgOg68ojItelCe?si=00bcddadb3f24cc4" },
  { title: "drop dead", artist: "Olivia Rodrigo", spotifyUrl: "https://open.spotify.com/track/6gkbtMtioHgtyGjrMel6ei?si=cae1cd2a1af64a08" },
    { title: "the cure", artist: "Olivia Rodrigo", spotifyUrl: "https://open.spotify.com/track/4EoJ151oQ5jY48z4RhSE96?si=cf566ee9cb3e474e" },
  { title: "Out Of The Woods (Taylor's Version)", artist: "Taylor Swift", spotifyUrl: "https://open.spotify.com/track/045ZeOHPIzhxxsm8bq5kyE?si=65b6b7be61914dba" },
    { title: "New Romantics (Taylor's Version)", artist: "Taylor Swift", spotifyUrl: "https://open.spotify.com/track/2vPMoMDXxu9uX1igWZmXSG?si=33251b93b9994403" },
];

/* ---- Profile / About / Skills / Resume ---- */
const profile = {
  name:  "Jhaira E. Flor",
  intro: "I'm Jhaira, a Computer Science student who’s still figuring things out, learning along the way, and making the most of every opportunity.",
  photo: "assets/images/profile.JPG",
  education: [
    "School: Cavite State University - Bacoor City Campus",
    "Course / Program: Bachelor of Science in Computer Science",
    "Year Level: Third Year",
    "Other details: Fan of cute things, pastel colors, and little details that make ordinary things special."
  ],
  technicalSkills: [
    { label: "Programming",         items: ["Python"] },
    { label: "Web Development",     items: ["HTML, CSS, JavaScript"] },
    { label: "Database Management", items: ["MySQL (Basic), Google Sheets"] },
    { label: "Software & Tools",    items: ["Visual Studio Code,\n" +
      "      Arduino IDE,\n" +
      "      Cisco Packet Tracer,\n" +
      "      Oracle VirtualBox,\n" +
      "      PyCharm,\n" +
      "      GitHub"] }
  ],
  personalSkills: ["Communication", "Teamwork", "Problem-solving", "Time Management"],
  interests: ["Collecting and Taking Photos with Digicams", "Photography and Visual Arts"],
  funFacts:  ["Almost everything I own is pink because it's my favorite color!,\n" +
  "  I have naturally hairy arms and legs because, according to my family, I was 'pinaglihi sa balut'!"],
  resumePdf:   "assets/images/resume.pdf",
  resumeImage: "assets/images/resume.jpg"
};

/* ---- Academic documents (brown envelope + Certificates section) ----
   16 documents, in chronological order. */
const CERT_DIR = "assets/images/certificates/";
const certificates = [
  // ---- Junior High School ----
  { level: "Junior High School", group: "Educational Credential", title: "Junior High School Diploma", period: "", image: CERT_DIR + "jhs-01-diploma.jpg" },
  // ---- Senior High School ----
  { level: "Senior High School", group: "Educational Credential", title: "Senior High School Diploma", period: "", image: CERT_DIR + "shs-01-diploma.jpg" },
  { level: "Senior High School", group: "Certificates of Recognition", title: "Grade 11 – With Honors", period: "S.Y. 2022–2023", image: CERT_DIR + "shs-02-grade11-with-honors.jpg" },
  { level: "Senior High School", group: "Certificates of Recognition", title: "Grade 12 – First Semester Rank 3", period: "S.Y. 2023–2024", image: CERT_DIR + "shs-03-grade12-sem1-rank3.jpg" },
  { level: "Senior High School", group: "Certificates of Recognition", title: "Grade 12 – Amazing Performance and Great Efforts in the Subject Contemporary Philippine Arts from the Regions (ARTS)", period: "First Semester, S.Y. 2023–2024", image: CERT_DIR + "shs-04-grade12-arts.jpg" },
  { level: "Senior High School", group: "Certificates of Recognition", title: "Grade 12 – With High Honors", period: "Second Semester, S.Y. 2023–2024", image: CERT_DIR + "shs-05-grade12-high-honors.jpg" },
  { level: "Senior High School", group: "Certificates of Recognition", title: "Grade 12 – With Honors (Overall Sem)", period: "S.Y. 2023–2024", image: CERT_DIR + "shs-06-grade12-overall-honors.jpg" },
  { level: "Senior High School", group: "Certificate of Participation", title: "Actively Participating in the Foreign Language Seminar – Basic Japanese Language", period: "", image: CERT_DIR + "shs-07-japanese-seminar.jpg" },
  // ---- College ----
  { level: "College", group: "Certificates of Achievement", title: "First Year, Second Semester – Top 1 with 1.25 GWA", period: "", image: CERT_DIR + "college-01-y1-sem2-top1.jpg" },
  { level: "College", group: "Certificates of Achievement", title: "First Year, Whole Year – Top 2 with 1.32 GWA", period: "S.Y. 2024–2025", image: CERT_DIR + "college-02-y1-whole-top2.jpg" },
  { level: "College", group: "Certificates of Achievement", title: "Second Year, Second Semester – Top 3 in Class with 1.51 GWA", period: "S.Y. 2025–2026", image: CERT_DIR + "college-03-y2-sem2-top3.jpg" },
  { level: "College", group: "Certificates of Recognition", title: "Recognized as the Top 1, Organizational Excellence Awardee (Committee) under the Alliance of Computer Scientists during Gawad Parangal 2025", period: "", image: CERT_DIR + "college-04-organizational-excellence.jpg" },
  { level: "College", group: "Certificates of Recognition", title: "Second Year, Second Semester – Vice President Lister with 1.51 GWA", period: "S.Y. 2025–2026", image: CERT_DIR + "college-05-vp-lister.jpg" },
  { level: "College", group: "Certificate of Completion", title: "National Service Training Program (NSTP)", period: "", image: CERT_DIR + "college-06-nstp.jpg" },
  { level: "College", group: "Certificates of Appreciation", title: "Dedicated Efforts of BSCS General Assembly 2025", period: "", image: CERT_DIR + "college-07-bscs-general-assembly.jpg" },
  { level: "College", group: "Certificates of Appreciation", title: "Dedicated Service as Section Secretary During School Year 2024–2026", period: "S.Y. 2024–2026", image: CERT_DIR + "college-08-section-secretary.jpg" }
];
const CERT_INTRO = "Every certificate and diploma represents a milestone in my academic journey. From completing my basic education to earning recognitions in college, each document reminds me of the hard work, dedication, and experiences that brought me where I am today.";

/* ---- Projects (folder + Projects section). */
const PROJ_DIR = "assets/images/projects/";
const projects = [
 { title: "Bato-Bato Pick Game", category: "Python Game",
  description: "A game created with Python in Visual Studio Code, developed as a group class project.",
  details: "Bato-Bato Pick Game is a game created using Python and developed in Visual Studio Code. It was made as a class project for Ma'am Issay.\n\nI was one of the developers who built the game. Our group presented the finished project to Ma'am Issay.",
  tools: ["Python", "Visual Studio Code"],
  thumbnail: PROJ_DIR + "project-01-thumb.jpeg",
  screenshots: [PROJ_DIR + "project-01-screen1.jpeg", PROJ_DIR + "project-01-screen2.jpg"], link: "" },
  { title: "Fast Food Kiosk POS", category: "Point-of-Sale System",
  description: "A point-of-sale (POS) kiosk system for a fast food restaurant, built in Apache NetBeans as a first-year group project.",
  details: "This project is a point-of-sale (POS) kiosk system for a fast food restaurant, made in Apache NetBeans. It was a group project for Ma'am Issay during our first year.\n\nI was one of the group members who helped develop the system.\n\nDuring the presentation, Ma'am Issay removed parts of our code on purpose and picked two members of our group to fix the resulting errors. Because of this, every member had to understand and learn each part of the code, not only their own.",
  tools: ["Apache NetBeans"],
  thumbnail: PROJ_DIR + "project-02-thumb.jpg",
  screenshots: [PROJ_DIR + "project-02-screen1.jpg"], link: "" },
  { title: "RFID-Based Automated Attendance Logging System", category: "Arduino / IoT System",
  description: "An automated attendance monitoring system built with Arduino and RFID technology that logs student attendance in Google Sheets.",
  details: "We developed an automated attendance monitoring system using Arduino and RFID technology. The system allows students to register and log their attendance by scanning their RFID cards. It records student information, date, time, and attendance status, then stores the records in Google Sheets through Python integration.\n\nThis was a group project for Sir Jae's subject COSC 65, made during our second year.\n\nMy contributions: I wrote the Arduino IDE code that connects the Arduino to the LCD, built the connection between the Arduino and Python, and built the connection between Python and Google Sheets.",
  tools: ["Arduino IDE", "Python", "MFRC522 RFID", "RTC Module", "I2C LCD", "Google Sheets"],
  thumbnail: PROJ_DIR + "project-03-thumb.jpg",
  screenshots: [PROJ_DIR + "project-03-screen1.jpg", PROJ_DIR + "project-03-screen2.jpg"], link: "" },
  { title: "Basketball Shooting Game", category: "Web Game",
  description: "A simple basketball game I created during my free time out of boredom, where players can shoot hoops, score points, and test their accuracy.",
  details: "A simple basketball game I created during my free time out of boredom. What started as a small pastime turned into a fun interactive project where players can shoot hoops, score points, and test their accuracy. Click the View Project to Play!",
  tools: ["HTML", "CSS", "JavaScript"],
  thumbnail: PROJ_DIR + "project-04-thumb.png",
  screenshots: [PROJ_DIR + "project-04-screen1.png"], link: "https://jhaira1121.github.io/basketball_game/" },
  { title: "Catch the Fish!", category: "Web Game",
  description: "A mini arcade game where players help a cat catch falling fish while avoiding unwanted objects before time runs out.",
  details: "Inspired by the idea of creating a simple and enjoyable game, I developed Catch the Fish, a mini arcade game where players help a cat catch falling fish while avoiding unwanted objects. The goal is to collect as many fish as possible before time runs out.\n\nThis project allowed me to explore basic game mechanics and create an entertaining experience through interactive gameplay. Click the View Project to Play!",
  tools: ["HTML", "CSS", "JavaScript"],
  thumbnail: PROJ_DIR + "project-05-thumb.png",
  screenshots: [PROJ_DIR + "project-05-screen1.png"], link: "https://jhaira1121.github.io/CATch_the_fish/" },
];

/* ---- Gallery photos (polaroids) ---- */
const GAL_DIR = "assets/images/gallery/";
const gallery = [
  { src: GAL_DIR + "photo-01.JPG", caption: "01.\n" +
        "\n" +
        "A little food trip captured through my digicam, turning an ordinary meal into a lovely memory." },
  { src: GAL_DIR + "photo-02.JPG", caption: "02.\n" +
        "\n" +
        "A mirror selfie captured with my digicam, keeping the little details and memories alive through photography." },
  { src: GAL_DIR + "photo-03.JPG", caption: "03.\n" +
        "\n" +
        "Sharing Korean food and laughter with my favorite people. It's always the company that makes simple moments special." },
  { src: GAL_DIR + "photo-04.JPG", caption: "04.\n" +
        "\n" +
        "A special moment with my boyfriend, reminding me that the simplest memories become the most meaningful when shared with someone special." },
  { src: GAL_DIR + "photo-05.JPG", caption: "05.\n" +
        "\n" +
        "A little collection of my favorite things. If there's a pink version, chances are I'll choose it!" }
];

/* ============================ HELPERS ============================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const isUrl = u => /^https?:\/\/\S+$/i.test(u || "");

/* Cute placeholder picture (SVG data URI) used whenever an image is empty or missing. */
function placeholder(label) {
  const words = String(label || "Your image here").split(" "), lines = [];
  let cur = "";
  words.forEach(w => { if ((cur + " " + w).trim().length > 30) { lines.push(cur); cur = w; } else cur = (cur + " " + w).trim(); });
  lines.push(cur);
  const shown = lines.slice(0, 6); if (lines.length > 6) shown[5] += "…";
  const y0 = 190 - (shown.length - 1) * 17;
  const text = shown.map((l, i) => `<tspan x="320" y="${y0 + i * 34}">${esc(l)}</tspan>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480"><rect width="640" height="480" fill="#fbf1de"/><rect x="20" y="20" width="600" height="440" fill="none" stroke="#c79a6b" stroke-width="3" stroke-dasharray="12 10" rx="10"/><text font-family="Georgia" font-size="27" fill="#7a5530" text-anchor="middle">${text}</text><text x="320" y="425" font-family="Georgia" font-size="19" font-style="italic" fill="#b85a78" text-anchor="middle">scanned copy coming soon ♡</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function img(src, alt, label) {
  const ph = placeholder(label || "Your image here");
  return `<img src="${esc(src || ph)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${ph}'">`;
}
const chips = a => a.map(x => `<span class="chip">${esc(x)}</span>`).join("");

/* ====================== PAGE SECTIONS (render) ===================== */
function renderPage() {
  $("#year").textContent = new Date().getFullYear();
}
function projectCards() {
  return projects.map((p, i) => `<button class="card" data-p="${i}" aria-label="Open project: ${esc(p.title)}">${img(p.thumbnail, p.title + " thumbnail", "Project screenshot")}
    <div class="body"><span class="meta">${esc(p.category)}</span><h4>${esc(p.title)}</h4><p>${esc(p.description)}</p>${p.tools.map(t => `<span class="badge">${esc(t)}</span>`).join("")}</div></button>`).join("");
}

/* =========================== MODAL SYSTEM ========================== */
let lastTrigger = null;
function openPanel(html, cls, opener) {
  lastTrigger = opener || document.activeElement;
  $("#modal").className = "modal " + (cls || "");
  $("#modalBody").innerHTML = html;
  $("#overlay").hidden = false;
  document.body.style.overflow = "hidden";
  $("#closeModal").focus();
}
function closePanel() {
  $$("#navLinks a[data-bag].active").forEach(l => l.classList.remove("active"));
  unmountPlayer();                       // stops any Spotify audio
  $("#overlay").hidden = true;
  $("#modalBody").innerHTML = "";
  document.body.style.overflow = "";
  if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
}
/* Viewer (lightbox) with previous / next. `list` = [{src, caption, sub}] and `i` = start index. */
let viewer = { list: [], i: 0 };
function showViewer() {
  const it = viewer.list[viewer.i], many = viewer.list.length > 1;
  $("#lbImg").onerror = () => { $("#lbImg").onerror = null; $("#lbImg").src = placeholder(it.caption); };
  $("#lbImg").src = it.src || placeholder(it.caption);
  $("#lbImg").alt = it.caption || "Enlarged preview";
  $("#lbCap").textContent = it.caption || "";
  $("#lbSub").textContent = it.sub || "";
  $("#lbCount").textContent = many ? `${viewer.i + 1} / ${viewer.list.length}` : "";
  $("#lbPrev").hidden = $("#lbNext").hidden = !many;
}
function openViewer(list, i) { viewer = { list, i }; showViewer(); $("#lightbox").hidden = false; $("#closeLb").focus(); }
function stepViewer(d) { viewer.i = (viewer.i + d + viewer.list.length) % viewer.list.length; showViewer(); }
function openLightbox(src, cap) { openViewer([{ src, caption: cap }], 0); }   // single image
function closeLightbox() { $("#lightbox").hidden = true; }

/* Certificate collection: used by the envelope popup AND the Certificates section.
   Grouped by school level, then by document type, with a small count per level. */
function certCollection() {
  const levels = [...new Set(certificates.map(c => c.level))];
  return levels.map(lv => {
    const inLv = certificates.map((c, i) => ({ c, i })).filter(x => x.c.level === lv);
    const groups = [...new Set(inLv.map(x => x.c.group))];
    return `<div class="level-block"><h3 class="level-head">${esc(lv)} <span class="count">${inLv.length} document${inLv.length > 1 ? "s" : ""}</span></h3>
      ${groups.map(g => `<div class="group"><span class="group-label">${esc(g)}</span><div class="docs">
        ${inLv.filter(x => x.c.group === g).map(({ c, i }) => `<button class="doc" data-cert="${i}" aria-label="Preview: ${esc(c.title)}">
          ${img(c.image, c.title, c.title)}<span class="doc-title">${esc(c.title)}</span>
          <span class="doc-meta">${esc(c.level)}${c.period ? " · " + esc(c.period) : ""}</span></button>`).join("")}
      </div></div>`).join("")}</div>`;
  }).join("");
}

/* ============================ ENVELOPE ============================= */
function openEnvelope(btn) {
  const html = `<div class="panel envelope"><div class="env-flap" aria-hidden="true"></div>
    <h2>Little Achievements, Big Memories.</h2><p class="env-intro">${esc(CERT_INTRO)}</p>
    <div class="env-papers">${certCollection()}</div>
    <div class="row" style="justify-content:center"><button class="btn alt" id="backBag">← Back to the Handbag</button></div></div>`;
  openPanel(html, "", btn);
  $("#backBag").onclick = closePanel;
}

/* ============================== FOLDER ============================= */
function openFolder(btn) {
  openPanel(`<div class="panel folder"><h2>My Projects</h2><div class="cards" id="folderCards">${projectCards()}</div></div>`, "", btn);
}
function openProject(i) {
  const p = projects[i];
  const shots = (p.screenshots.length ? p.screenshots : [p.thumbnail]).map(s => img(s, p.title + " screenshot", "Screenshot")).join("");
  openPanel(`<div class="panel folder proj-detail"><h2>${esc(p.title)}</h2><p class="meta">${esc(p.category)}</p><p class="long">${esc(p.details || p.description)}</p>
    <h3>Tools &amp; Technologies</h3><div class="chips">${chips(p.tools)}</div>${shots}
    ${isUrl(p.link) ? "" : `<p class="mini-note no-link">Note: There is no link available for this project.</p>`}
    <div class="row">${isUrl(p.link) ? `<a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">View Project ♡</a>` : ""}<button class="btn alt" id="backFolder">← Back to Projects</button></div></div>`, "", lastTrigger);
  $("#backFolder").onclick = () => openFolder(lastTrigger);
}

/* ============================ CLIPBOARD ============================ */
function openClipboard(btn) {
  const pdf = profile.resumePdf, rimg = profile.resumeImage;
  let resume;
  if (pdf) resume = `<iframe src="${esc(pdf)}" title="Resume preview"></iframe><div class="row"><a class="btn" href="${esc(pdf)}" target="_blank" rel="noopener">View Resume</a><a class="btn alt" href="${esc(pdf)}" download>Download Resume</a></div>`;
  else if (rimg) resume = `<img src="${esc(rimg)}" alt="Resume" id="resumeImg" style="cursor:zoom-in"><div class="row"><button class="btn" id="viewResume">View Resume</button><a class="btn alt" href="${esc(rimg)}" download>Download Resume</a></div>`;
  else resume = `<p><b>Resume placeholder</b> — add your PDF to <code>assets/images/</code> and set <code>profile.resumePdf</code> in script.js. A View / Download button will appear.</p>`;
  const html = `<div class="panel clipboard"><div class="paper sheet">
    <h2 style="color:var(--pink-dd)">About Me &amp; Resume</h2>
    <div class="profile-top">${img(profile.photo, "Profile photo", "Photo")}<div><h3 style="margin:0">${esc(profile.name)}</h3><p>${esc(profile.intro)}</p></div></div>
    <h3>Educational Background</h3><ul>${profile.education.map(e => `<li>${esc(e)}</li>`).join("")}</ul>
    <h3>Technical Skills</h3>${profile.technicalSkills.map(s => `<p><b>${esc(s.label)}:</b> ${esc(s.items.join(", "))}</p>`).join("")}
    <h3>Personal Skills</h3><div class="chips">${chips(profile.personalSkills)}</div>
    <h3>Interests &amp; Hobbies</h3><div class="chips">${chips(profile.interests)}</div>
    <h3>Resume</h3><div class="resume-box">${resume}</div></div></div>`;
  openPanel(html, "", btn);
  const v = $("#viewResume"); if (v) v.onclick = () => openLightbox(rimg, "Resume");
  const r = $("#resumeImg"); if (r) r.onclick = () => openLightbox(rimg, "Resume");
}

/* ======================= SPOTIFY (shared logic) ==================== */
function parseSpotify(url) {
  const m = /^https:\/\/open\.spotify\.com\/(?:intl-[a-z-]+\/)?(track|album|playlist|episode)\/([A-Za-z0-9]+)/.exec((url || "").trim());
  return m ? { type: m[1], id: m[2], embed: `https://open.spotify.com/embed/${m[1]}/${m[2]}` } : null;
}
let selectedSong = Math.max(0, favoriteSongs.findIndex(s => parseSpotify(s.spotifyUrl)));  // first valid song = default
let playerMount = null;   // only ONE player container exists at a time

function unmountPlayer() { if (playerMount) { playerMount.innerHTML = ""; playerMount = null; } }

/* Builds the player UI inside `box` (replaces any other player so audio never overlaps) */
function renderPlayer(box) {
  unmountPlayer();
  playerMount = box;
  const s = favoriteSongs[selectedSong];
  if (!s) { box.innerHTML = `<p class="mini-note">No songs yet. Add some to <code>favoriteSongs</code> in script.js ♡</p>`; return; }
  const sp = parseSpotify(s.spotifyUrl);
  box.innerHTML = `<div class="player"><p><b>${esc(s.title)}</b> — ${esc(s.artist)}</p><div class="notes" aria-hidden="true"><span>♪</span><span>♫</span><span>♪</span></div>
    ${sp ? `<iframe title="Spotify player: ${esc(s.title)}" src="${sp.embed}" allow="encrypted-media; clipboard-write" loading="lazy"></iframe><p class="mini-note">Press Play in the Spotify player to listen. ♡</p>`
         : `<p class="mini-note">This song's Spotify link looks invalid. Paste a link like https://open.spotify.com/track/… in script.js.</p>`}
    <div class="row"><button class="btn alt" data-song="prev">‹ Prev</button><button class="btn alt" data-song="notes">♪ Music notes</button><button class="btn alt" data-song="next">Next ›</button></div></div>`;
  box.onclick = e => {
    const b = e.target.closest("[data-song]"); if (!b) return;
    if (b.dataset.song === "notes") { $(".notes", box).classList.toggle("on"); return; }   // visual state only (Spotify doesn't expose playback state)
    selectSong((selectedSong + (b.dataset.song === "next" ? 1 : -1) + favoriteSongs.length) % favoriteSongs.length, box);
  };
}
function selectSong(i, box) {
  selectedSong = i;
  $$(".songs button").forEach(b => b.classList.toggle("sel", +b.dataset.i === i));
  renderPlayer(box || playerMount);
}

/* ============================== PLUSHIE ============================ */
function openPlushie(btn) {
  btn.classList.add("bounce"); setTimeout(() => btn.classList.remove("bounce"), 650);
  openPanel(`<div class="panel music"><h2 style="color:var(--pink-dd)">My Little Music ♡</h2><div id="plushiePlayer"></div><p class="cap">A little peek at what's on my playlist. ♡</p></div>`, "", btn);
  renderPlayer($("#plushiePlayer"));
}

/* ============================ SMARTPHONE =========================== */
const ICONS = {
  facebook: `<svg viewBox="0 0 64 64"><rect width="64" height="64" fill="#1877F2"/><path transform="translate(16 16) scale(1.33)" fill="#fff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  instagram: `<svg viewBox="0 0 64 64"><defs><linearGradient id="ig" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#feda75"/><stop offset=".35" stop-color="#fa7e1e"/><stop offset=".6" stop-color="#d62976"/><stop offset="1" stop-color="#4f5bd5"/></linearGradient></defs><rect width="64" height="64" fill="url(#ig)"/><rect x="16" y="16" width="32" height="32" rx="9" fill="none" stroke="#fff" stroke-width="3.5"/><circle cx="32" cy="32" r="7.5" fill="none" stroke="#fff" stroke-width="3.5"/><circle cx="42" cy="22" r="2.2" fill="#fff"/></svg>`,
  github: `<svg viewBox="0 0 64 64"><rect width="64" height="64" fill="#24292f"/><path transform="translate(12 12) scale(2.5)" fill="#fff" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`,
  gmail: `<svg viewBox="0 0 64 64"><rect width="64" height="64" fill="#fff"/><path d="M12 46V20l20 15 20-15v26" fill="none" stroke="#EA4335" stroke-width="6" stroke-linejoin="round"/><path d="M12 46h6V28M52 46h-6V28" stroke="#4285F4" stroke-width="6" fill="none"/><path d="M12 20l20 15" stroke="#C5221F" stroke-width="6" fill="none"/></svg>`,
  gallery: `<svg viewBox="0 0 64 64"><rect width="64" height="64" fill="#ffd1e1"/><rect x="14" y="14" width="36" height="36" rx="5" fill="#fff"/><rect x="18" y="18" width="28" height="22" rx="2" fill="#f7a8c4"/><circle cx="26" cy="25" r="3.5" fill="#fff"/><path d="M18 40l9-9 6 6 5-5 8 8z" fill="#e0709a"/></svg>`,
  spotify: `<svg viewBox="0 0 64 64"><rect width="64" height="64" fill="#fff"/><circle cx="32" cy="32" r="22" fill="#1DB954"/><g fill="none" stroke="#fff" stroke-linecap="round"><path d="M19 26c9-3 19-2 27 3" stroke-width="4.5"/><path d="M21 34c7-2 15-1 21 3" stroke-width="3.8"/><path d="M23 41c5-1.5 11-1 16 2" stroke-width="3.2"/></g></svg>`
};
const CONTACT_INTRO = "Have something to say? I'd love to hear from you! Leave me a little message below. ♡";
const APPS = [["facebook", "Facebook"], ["instagram", "Instagram"], ["github", "GitHub"], ["gmail", "Gmail"], ["spotify", "Spotify"], ["gallery", "Gallery"]];
let phoneHistory = ["home"];

function openPhone(btn, startApp) {
  phoneHistory = ["home"];
    const social = k => {
    const nm = APPS.find(a => a[0] === k)[1], url = socialLinks[k], p = socialProfiles[k];
    return `<div class="app-head">${ICONS[k]}<h3>${nm}</h3></div>
      <div class="mini-profile">${img(p.photo || profile.photo, p.name + " profile photo", "Photo")}
        <h4>${esc(p.name)}</h4><span class="handle">@${esc(p.handle)}</span><p>${esc(p.bio)}</p>
        ${isUrl(url)
          ? `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">Open ${nm} ♡</a>`
          : `<p class="mini-note">Not set yet. Add your ${nm} URL to <code>socialLinks.${k}</code> in script.js.</p>`}
      </div>`;
  };
  const html = `<div class="phone"><span class="notch" aria-hidden="true"><i></i></span><div class="screen">
    <div class="view on" data-v="home"><p class="clock" id="phClock"></p><p class="cap">my little phone ♡</p>
      <div class="apps">${APPS.map(a => `<button class="app" data-app="${a[0]}" aria-label="Open ${a[1]}">${ICONS[a[0]]}${a[1]}</button>`).join("")}</div></div>
    <div class="view" data-v="facebook">${social("facebook")}</div>
    <div class="view" data-v="instagram">${social("instagram")}</div>
    <div class="view" data-v="github">${social("github")}</div>
    <div class="view" data-v="gmail"><div class="app-head">${ICONS.gmail}<h3>Contact Me</h3><p>${esc(CONTACT_INTRO)}</p></div>${contactFormHTML("phone")}</div>
    <div class="view" data-v="gallery"><div class="app-head">${ICONS.gallery}<h3>My Gallery ♡</h3></div>
      <div class="ph-gallery">${gallery.map((g, i) => `<button class="polaroid" data-g="${i}" aria-label="Enlarge photo: ${esc(g.caption)}"><span class="tape"></span>${img(g.src, g.caption, "Photo " + (i + 1))}</button>`).join("")}</div>
      <p class="cap">Tap a photo to enlarge it. ♡</p></div>
    <div class="view" data-v="spotify"><div class="app-head">${ICONS.spotify}<h3>My Favorite Songs ♡</h3></div>
      <ul class="songs">${favoriteSongs.map((s, i) => `<li><button data-i="${i}" class="${i === selectedSong ? "sel" : ""}"><b>${esc(s.title)}</b>${esc(s.artist)}</button></li>`).join("")}</ul>
      <div id="phonePlayer"></div><p class="cap">A little peek at what's on my playlist. ♡</p></div>
    <div class="bar"><button data-nav="back" aria-label="Back">◀</button><button data-nav="home" aria-label="Home">●</button><button data-nav="close" aria-label="Close phone and return to bag">✕</button></div>
  </div></div>`;
  openPanel(html, "phone-modal", btn);
  const clk = () => { const c = $("#phClock"); if (c) c.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); };
  clk();
  const scr = $(".screen");
  const show = v => {
    if (v !== "spotify") unmountPlayer();
    $$(".view", scr).forEach(x => x.classList.toggle("on", x.dataset.v === v));
    if (v === "spotify") renderPlayer($("#phonePlayer"));
  };
  scr.onclick = e => {
    const a = e.target.closest("[data-app]"), n = e.target.closest("[data-nav]"), s = e.target.closest(".songs button");
    if (a) { phoneHistory.push(a.dataset.app); show(a.dataset.app); }
    else if (s) selectSong(+s.dataset.i, $("#phonePlayer"));
    else if (n) {
      if (n.dataset.nav === "close") closePanel();
      else if (n.dataset.nav === "home") { phoneHistory = ["home"]; show("home"); }
      else { if (phoneHistory.length > 1) phoneHistory.pop(); show(phoneHistory[phoneHistory.length - 1]); }
    }
  };
  bindContactForm(scr);
  // Opened from the "Contacts" nav link: tap the Gmail icon for the visitor after the phone has slid up.
  if (startApp) setTimeout(() => {
    const icon = $(`[data-app="${startApp}"]`, scr);
    if ($("#overlay").hidden || !icon || !$(".view.on", scr) || $(".view.on", scr).dataset.v !== "home") return;
    icon.classList.add("tapped");
    setTimeout(() => { if (!$("#overlay").hidden && $(".view.on", scr)?.dataset.v === "home") icon.click(); }, 380);
  }, 750);
}

/* ============================ EMAILJS FORM ========================= */
function contactFormHTML(p) {
  return `<form class="form" novalidate data-form="${p}" data-t="${Date.now()}">
    <div><label for="${p}-n">Your name</label><input id="${p}-n" name="from_name" autocomplete="name" required maxlength="80"></div>
    <div><label for="${p}-e">Your email</label><input id="${p}-e" name="from_email" type="email" autocomplete="email" required maxlength="120"></div>
    <div><label for="${p}-s">Subject</label><input id="${p}-s" name="subject" required maxlength="120"></div>
    <div><label for="${p}-m">Message</label><textarea id="${p}-m" name="message" required maxlength="2000"></textarea></div>
    <div class="hp" aria-hidden="true"><label>Leave empty<input name="website" tabindex="-1" autocomplete="off"></label></div>
    <button class="btn" type="submit">Send Email ♡</button><div class="status" role="status" aria-live="polite"></div></form>`;
}
let lastSent = 0;
function bindContactForm(root) {
  $$("form[data-form]", root).forEach(f => {
    f.addEventListener("submit", async e => {
      e.preventDefault();
      const st = $(".status", f), btn = $("button[type=submit]", f), d = Object.fromEntries(new FormData(f));
      const say = (m, ok) => { st.className = "status " + (ok ? "ok" : "err"); st.textContent = m; };
      if (d.website) return;                                                   // honeypot: bots fill this
      if (Date.now() - (+f.dataset.t) < 3000) return say("Please take a moment to write your message, then try again ♡");
      if (Date.now() - lastSent < 30000) return say("Please wait a little before sending another message ♡");
      if (!d.from_name.trim() || !d.subject.trim() || !d.message.trim() || !d.from_email.trim()) return say("Please fill in every field ♡");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.from_email.trim())) return say("That email address doesn't look right. Please check it ♡");
      if (Object.values(EMAILJS_CONFIG).some(v => v.startsWith("YOUR_"))) return say("The email form isn't set up yet. The site owner needs to add EmailJS keys in script.js.");
      if (typeof emailjs === "undefined") return say("Couldn't load the email service. Please check your internet connection.");
      btn.disabled = true; btn.textContent = "Sending…";
      try {
        emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
        await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId,
          { from_name: d.from_name.trim(), from_email: d.from_email.trim(), reply_to: d.from_email.trim(), subject: d.subject.trim(), message: d.message.trim() });
        lastSent = Date.now(); f.reset(); say("Your message is on its way! Thank you ♡", true);
      } catch (err) {
        say("Oops, the message couldn't be sent. Please try again in a bit, or check the EmailJS settings.");
        console.error("EmailJS error:", err);
      } finally { btn.disabled = false; btn.textContent = "Send Email ♡"; }
    });
  });
}

/* ============================ WIRING / UI ========================== */
function init() {
  renderPage();

  // Bag objects: one opener per item, shared by the hotspots AND the top-nav links
  const open = { envelope: openEnvelope, folder: openFolder, clipboard: openClipboard, phone: (b, app) => openPhone(b, app) };
  $$(".hotspot[data-open]").forEach(b => b.addEventListener("click", () => open[b.dataset.open](b)));   // direct click: no auto-launch

  // Top nav: About Me / My Projects / My Certificates / Contacts open the matching bag item
  // (same handler as clicking the item itself), after gliding up to the bag.
  const bagLinks = $$("a[data-bag]", $("#navLinks"));
  const setActive = k => $$("a", $("#navLinks")).forEach(l => l.classList.toggle("active", l.dataset.bag === k));
  let navTimer = 0;
  function openBagItem(k, updateHash = true) {
    const hs = $(`.hotspot[data-open="${k}"]`); if (!hs) return;
    clearTimeout(navTimer);
    if (!$("#overlay").hidden) closePanel();
    if (!$("#lightbox").hidden) closeLightbox();
    const stage = $(".bag-stage"), r = stage.getBoundingClientRect();
    const inView = r.top >= 0 && r.top < window.innerHeight * .5;
    if (!inView) $("#inside").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth" });
    navTimer = setTimeout(() => { setActive(k); open[k](hs, k === "phone" ? "gmail" : undefined); }, inView ? 0 : 450);
    if (updateHash) history.replaceState(null, "", "#" + $(`a[data-bag="${k}"]`).hash.slice(1));
  }
  bagLinks.forEach(a => a.addEventListener("click", e => { e.preventDefault(); openBagItem(a.dataset.bag); }));
  const fromHash = () => { const a = bagLinks.find(l => l.hash === location.hash); if (a) openBagItem(a.dataset.bag, false); };
  window.addEventListener("hashchange", fromHash);
  fromHash();
  $("#plushie").addEventListener("click", e => openPlushie(e.currentTarget));

  // Delegated clicks (project cards, certificates, gallery)
  document.addEventListener("click", e => {
    const p = e.target.closest("[data-p]"), c = e.target.closest("[data-cert]"), g = e.target.closest("[data-g]");
   if (p) { if ($("#overlay").hidden) lastTrigger = p; openProject(+p.dataset.p); }
    else if (c) openViewer(certificates.map(x => ({ src: x.image, caption: x.title, sub: x.level + (x.period ? " · " + x.period : "") })), +c.dataset.cert);
    else if (g) openViewer(gallery.map(x => ({ src: x.src, caption: x.caption })), +g.dataset.g);
  });

  // Close controls
  $("#closeModal").onclick = closePanel; $("#closeLb").onclick = closeLightbox;
  $("#lbPrev").onclick = () => stepViewer(-1); $("#lbNext").onclick = () => stepViewer(1);
  $("#overlay").addEventListener("click", e => { if (e.target.id === "overlay") closePanel(); });
  $("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", e => { if (!$("#lightbox").hidden && viewer.list.length > 1) { if (e.key === "ArrowLeft") stepViewer(-1); if (e.key === "ArrowRight") stepViewer(1); }
    if (e.key === "Escape") { if (!$("#lightbox").hidden) closeLightbox(); else if (!$("#overlay").hidden) closePanel(); } });

  // Nav toggle + close on link click
  const nl = $("#navLinks"), nt = $("#navToggle");
  nt.onclick = () => { const o = nl.classList.toggle("open"); nt.setAttribute("aria-expanded", o); };
  $$("a", nl).forEach(a => a.addEventListener("click", () => { nl.classList.remove("open"); nt.setAttribute("aria-expanded", "false"); }));

  // Back to top
  const top = $("#toTop");
  window.addEventListener("scroll", () => { top.hidden = window.scrollY < 500; }, { passive: true });
  top.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Active nav link + gentle reveal
  if ("IntersectionObserver" in window) {
    const links = $$("a", nl);
    const so = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section").forEach(s => so.observe(s));
    const ro = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); } }), { threshold: .1 });
    $$(".section .paper, .section .card, .gallery .polaroid, .about-grid > *").forEach(el => { el.classList.add("reveal"); ro.observe(el); });
  }

  // Floating hearts and flowers
  const fl = $("#floaties");
  for (let i = 0; i < 12; i++) {
    const s = document.createElement("span");
    s.textContent = ["♡", "✿", "❀", "♡"][i % 4];
    s.style.cssText = `left:${Math.random() * 100}%;font-size:${14 + Math.random() * 18}px;animation-duration:${16 + Math.random() * 14}s;animation-delay:${-Math.random() * 20}s;color:${["#e88aa6", "#b9a0e6", "#8fd1b2"][i % 3]}`;
    fl.appendChild(s);
  }
}
document.addEventListener("DOMContentLoaded", init);
