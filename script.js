/* =============================================
   CUSTOM CURSOR
   ============================================= */
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = -200, mouseY = -200;
let curX   = -200, curY   = -200;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});
document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup',   () => cursor.classList.remove('click'));

document.querySelectorAll('a, button, .project-row, .skill-pill, .hero-link, .contact-link').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

(function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top  = curY + 'px';
  requestAnimationFrame(animateCursor);
})();

/* =============================================
   SCROLL PROGRESS BAR
   ============================================= */
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
  const scrollTop  = window.scrollY;
  const docHeight  = document.body.scrollHeight - window.innerHeight;
  const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = pct + '%';
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });

/* =============================================
   NAV SCROLL EFFECT
   ============================================= */
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* =============================================
   REVEAL ON SCROLL
   ============================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-fade, .reveal-up').forEach(el => {
  revealObserver.observe(el);
});

/* =============================================
   PROJECT DATA
   ============================================= */
const projects = [
  {
    title: "Wave Engine",
    category: "Engine Programming",
    meta: "Engine Programming · 2024",
    subtitle: "A custom 3D game engine built entirely from scratch in C++ and OpenGL. Wave Engine was developed as part of a university engine programming course at CITM (UPC). The engine was built collaboratively over one semester, and was later selected as the foundation for Son of Ithaca. These are my contributions to the engine.",
    tags: ["C++", "OpenGL", "GLSL", "Lua", "Engine"],

    // ─── VIDEO ───────────────────────────────────────────────────────────────
    // Paste your unlisted YouTube embed URL, e.g. "https://www.youtube.com/embed/VIDEO_ID"
    // Leave as "" if you have no video yet.
    videoUrl: "",

    // ─── CONTRIBUTIONS ───────────────────────────────────────────────────────
    // Each entry is a section shown as: text on one side, image on the other.
    // They alternate left/right automatically.
    // image: path to a screenshot or gif, or "" to skip the image.
    contributions: [
      {
        title: "Shadow Mapping",
        text: "I implemented a complete shadow mapping solution for directional lights. This required generating depth maps from the light's perspective, managing multiple coordinate spaces (world, light, NDC), and integrating the resulting shadow information into the fragment shader. Building it from scratch forced a deep understanding of the full rendering pipeline.",
        image: "images/wave_shadows.gif", // e.g. "images/wave_shadows.jpg"
      },
      {
        title: "Resource Management",
        text: "A significant part of my work went into the resource management system — both the offline and runtime sides. Offline: detecting dropped assets, generating engine-ready library files, and creating .meta files to store import settings. Runtime: reference counting to ensure only one copy of each resource lives in memory at a time, and handling renames, moves, and deletions without breaking dependencies.",
        image: "", // e.g. "images/wave_resources.gif"
      },
      {
        title: "Lua Scripting System",
        text: "I embedded Lua into the engine via LuaBridge, treating scripts as first-class resources with their own importer and component type. The engine compiles script files to bytecode at import time, and the scripting layer exposes engine functionality so designers can drive behaviour without touching C++.",
        image: "images/scripting.gif", // e.g. "images/wave_scripting.jpg"
      },
      {
        title: "Octree & Spatial Partitioning",
        text: "I built an Octree-based spatial partitioning system to accelerate scene queries. By subdividing the scene into an octree, the engine can quickly discard geometry outside the view frustum and speed up ray-casting for mouse picking and physics queries.",
        image: "", // e.g. "images/wave_octree.jpg"
      },
      {
        title: "Lighting System",
        text: "I implemented point and directional lights from scratch — both the shader-side calculations and the editor integration. Lights are fully editable from the editor: colour, intensity, and range can be tweaked in real time and the results are immediately reflected on scene materials. The lighting model computes diffuse and specular contributions per light type and feeds them into the material pipeline.",
        image: "images/wave_light.gif", // e.g. "images/wave_lighting.jpg"
      },
    ],

    keySystems: [
      "Shadow mapping for directional lights",
      "Octree-based spatial partitioning",
      "Offline & runtime resource management with .meta files and reference counting",
      "Lua scripting system via LuaBridge",
      "Editor camera, navigation controls & viewport mouse-picking",
      "Point and directional lights with real-time editor colour & intensity controls",
    ],
    techStack: ["C++", "OpenGL", "GLSL", "Lua", "LuaBridge", "Assimp", "Dear ImGui"],
    whatILearned: "Building a resource manager from scratch taught me that asset pipelines are deceptively complex — handling renames, moves, and deletions without breaking dependencies requires careful design from day one. Shadow mapping forced me to fully understand coordinate spaces and the rendering pipeline at a level that reading about it never would have. Every system I built revealed a new layer of how professional engines actually work under the hood.",

    // ─── SCREENSHOTS ─────────────────────────────────────────────────────────
    // These are NOT used in the new layout (images go inside contributions above).
    // Kept here in case you want to add a gallery later.
    screenshots: [],

    links: [
      { url: "https://github.com/Audra0000", label: "View on GitHub", style: "primary" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROJECT TEMPLATE — duplicate this block for each new project
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "Indie Game",
    category: "Game Design",
    meta: "Game Design · 2024",
    subtitle: "Replace with a 1-2 sentence summary of the project.",
    tags: ["Unity", "C#", "Design"],

    videoUrl: "",
    // Example: "https://www.youtube.com/embed/VIDEO_ID"

    contributions: [
      {
        title: "Feature Name",
        text: "Describe what you built, why it was hard, and what it enables.",
        image: "", // "images/game_feature1.gif"
      },
      {
        title: "Another Feature",
        text: "Describe what you built.",
        image: "",
      },
    ],

    keySystems: [
      "Custom state machine for player AI",
      "Procedural level generation",
      "Save system with JSON serialisation"
    ],
    techStack: ["Unity", "C#", "UI Toolkit"],
    whatILearned: "Replace this with what you actually learned.",

    screenshots: [],
    links: [
      { url: "", label: "Play on itch.io", style: "primary" }
    ]
  }
];

/* =============================================
   ROUTING — project page
   ============================================= */
const mainSite    = document.getElementById('mainSite');
const projectPage = document.getElementById('projectPage');
const navLinks    = document.getElementById('navLinks');
const navBack     = document.getElementById('navBack');
const navLogo     = document.getElementById('navLogo');
let projectPageVisible = false;

function openProject(index) {
  const p = projects[index];
  if (!p) return;

  // Header
  document.getElementById('projectBreadcrumb').innerHTML =
    `<span>${p.category}</span> <span>/</span> ${p.title}`;
  document.getElementById('projectMeta').textContent     = p.meta;
  document.getElementById('projectTitle').textContent    = p.title;
  document.getElementById('projectSubtitle').textContent = p.subtitle;
  document.getElementById('projectTagsEl').innerHTML = p.tags
    .map(t => `<span class="tag">${t}</span>`).join('');

  // Video
  const videoWrap = document.getElementById('projectVideoWrap');
  const videoBox  = document.getElementById('projectVideoContainer');
  if (p.videoUrl) {
    const isYouTube = p.videoUrl.includes('youtube.com') || p.videoUrl.includes('youtu.be');
    videoBox.innerHTML = isYouTube
      ? `<iframe src="${p.videoUrl}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`
      : `<video controls playsinline><source src="${p.videoUrl}" type="video/mp4"><source src="${p.videoUrl}" type="video/webm"></video>`;
    videoWrap.style.display = 'block';
  } else {
    videoBox.innerHTML = '';
    videoWrap.style.display = 'none';
  }

  // Contributions — alternating layout
  const contribEl = document.getElementById('projectContributions');
  contribEl.innerHTML = (p.contributions || []).map((c, i) => {
    const reversed = i % 2 === 1 ? 'contrib-row--reversed' : '';
    const imgHtml = c.image
      ? `<div class="contrib-media"><img src="${c.image}" alt="${c.title}" onerror="this.parentElement.style.display='none'"></div>`
      : `<div class="contrib-media contrib-media--empty"></div>`;
    return `
      <div class="contrib-row ${reversed}">
        <div class="contrib-text">
          <h3 class="contrib-title">${c.title}</h3>
          <p class="contrib-desc">${c.text}</p>
        </div>
        ${imgHtml}
      </div>`;
  }).join('');

  // Key Systems
  document.getElementById('projectSystems').innerHTML = (p.keySystems || [])
    .map(s => `<li>${s}</li>`).join('');

  // Tech Stack
  document.getElementById('projectStack').innerHTML = (p.techStack || [])
    .map(t => `<span class="tag">${t}</span>`).join('');

  // What I Learned
  document.getElementById('projectWhatILearned').textContent = p.whatILearned || '';

  // Links
  const validLinks = (p.links || []).filter(l => l.url);
  document.getElementById('projectLinksEl').innerHTML = validLinks
    .map(l => `<a href="${l.url}" target="_blank" class="project-link-btn ${l.style || 'primary'}">${l.label}</a>`)
    .join('');

  window.location.hash = `project/${index}`;
  showProjectPage();
}

function showProjectPage() {
  projectPageVisible = true;
  mainSite.style.display    = 'none';
  projectPage.style.display = 'block';
  navLinks.style.display    = 'none';
  navLogo.style.display     = 'none';
  navBack.style.display     = 'flex';
  projectPage.scrollTop     = 0;
  document.body.style.overflow = 'hidden';

  projectPage.addEventListener('scroll', onProjectScroll, { passive: true });
  requestAnimationFrame(() => projectPage.classList.add('visible'));
}

function onProjectScroll() {
  const el  = projectPage;
  const pct = el.scrollHeight - el.clientHeight > 0
    ? (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
    : 0;
  scrollProgress.style.width = pct + '%';
}

function goHome(e) {
  if (e) e.preventDefault();
  if (!projectPageVisible) return;

  projectPageVisible = false;
  projectPage.classList.remove('visible');
  projectPage.removeEventListener('scroll', onProjectScroll);

  setTimeout(() => {
    projectPage.style.display    = 'none';
    mainSite.style.display       = 'block';
    navLinks.style.display       = 'flex';
    navLogo.style.display        = '';
    navBack.style.display        = 'none';
    document.body.style.overflow = '';
    window.location.hash         = '';
    updateScrollProgress();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 360);
}

function handleHash() {
  const match = window.location.hash.match(/^#project\/(\d+)$/);
  if (match) openProject(parseInt(match[1]));
  else if (projectPageVisible) goHome(null);
}

window.addEventListener('hashchange', handleHash);
handleHash();

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && projectPageVisible) goHome(null);
});
