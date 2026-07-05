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
        text: "A significant part of my work went into the resource management system - both the offline and runtime sides. Offline: detecting dropped assets, generating engine-ready library files, and creating .meta files to store import settings. Runtime: reference counting to ensure only one copy of each resource lives in memory at a time, and handling renames, moves, and deletions without breaking dependencies.",
        image: "images/resourcemanager.png", // e.g. "images/wave_resources.gif"
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
        text: "I implemented point and directional lights from scratch - both the shader-side calculations and the editor integration. Lights are fully editable from the editor: colour, intensity, and range can be tweaked in real time and the results are immediately reflected on scene materials. The lighting model computes diffuse and specular contributions per light type and feeds them into the material pipeline.",
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
    whatILearned: "Building a resource manager from scratch taught me that asset pipelines are deceptively complex - handling renames, moves, and deletions without breaking dependencies requires careful design from day one. Shadow mapping forced me to fully understand coordinate spaces and the rendering pipeline at a level that reading about it never would have. Every system I built revealed a new layer of how professional engines actually work under the hood.",

    // ─── SCREENSHOTS ─────────────────────────────────────────────────────────
    // These are NOT used in the new layout (images go inside contributions above).
    // Kept here in case you want to add a gallery later.
    screenshots: [],

    links: [
      { url: "https://github.com/NobodyGamesStudio/WaveEngine", label: "View on GitHub", style: "primary" }
    ]
  },

  {
    title: "Son of Ithaca",
    category: "UI Programming",
    meta: "UI Programming · 2024",
    subtitle: "An Odyssey-inspired action-adventure game built on Wave Engine, where I developed the interaction and UI systems that tie the player's actions to the world.",
    tags: ["C++", "Wave Engine", "NoesisGUI"],

    videoUrl: "https://www.youtube.com/embed/PYzuc0fsHpM",

    contributions: [
      {
        title: "Interaction UI",
        text: "I designed and implemented the on-screen prompts that guide the player through the game's statue puzzles, showing a button indicator to freeze enemy statues and a separate one to rotate puzzle statues into place. The system reads the active input device and updates the prompt accordingly.",
        image: "images/enemigolock.jpg",
      },
      {
        title: "Dynamic Popups",
        text: "Using NoesisGUI, I built a popup system that can be triggered from anywhere in the game to display contextual information without interrupting gameplay flow, handling layout, animation and dismissal logic in a reusable way.",
        image: "images/mask.jpg",
      },
      {
        title: "Input-Aware Tutorials",
        text: "I implemented a tutorial system that swaps its prompts and icons depending on whether the player is using a gamepad or a keyboard, so instructions always match the input the player is actually using.",
        image: "images/ControlsHint.jpg",
      },
      {
        title: "UI Stack System",
        text: "To keep the interface predictable as multiple screens and popups could appear at once, I built a stack-based manager that tracks which UI elements are open and closes or pauses lower layers automatically, preventing overlapping menus and popups from breaking the experience.",
        image: "images/UIQueueManager.jpg",
      },
    ],

    keySystems: [
      "Button-prompt UI for statue puzzle interactions",
      "Dynamic popup system built with NoesisGUI",
      "Input-aware tutorials that adapt to gamepad or keyboard",
      "Stack-based UI manager preventing overlapping screens",
    ],
    techStack: ["C++", "Wave Engine", "NoesisGUI", "XAML"],
    whatILearned: "Working on Son of Ithaca's UI taught me how much care goes into making an interface feel invisible: prompts have to react instantly to input changes, and popups need to never fight each other for the player's attention. Building the UI stack in particular pushed me to think about interface state the same way I would think about a game state machine.",

    screenshots: [],
    links: [
      { url: "https://nobody-games-studio.itch.io/son-of-ithaca", label: "Play on itch.io", style: "primary" }
    ]
  },

  {
    title: "Railway to Hell",
    category: "Gameplay Programming",
    meta: "Lead Programmer · 2024",
    subtitle: "A 2D metroidvania set in a hellish version of a railway system, where a girl from a trapped gang fights her way through demonic lords to escape with her deceased sister. Built in C++ with SDL2, with no game engine.",
    tags: ["C++", "SDL2", "Metroidvania"],

    videoUrl: "https://www.youtube.com/embed/J-ttC8Gt458",

    contributions: [
      {
        title: "Team Coordination & Production",
        text: "As lead programmer, I coordinated the programming team's workload and priorities alongside general production duties, ensuring that the different systems being developed in parallel came together into a cohesive game. I also used project management tools such as Notion to organize tasks, track progress, and facilitate communication within the team.",
        image: "images/production.png",
      },
      {
        title: "Final Boss & Enemies",
        text: "I developed the game's final boss encounter, which features three distinct phases. In each phase, the boss changes its size and attack patterns, requiring the player to adapt their strategy throughout the fight. I also designed several of the smaller enemies encountered while exploring the railway lines. Some enemies use simple melee attacks to directly chase and attack the player, while others rely on area-of-effect attacks that force the player to dodge and reposition. Their behaviours and combat balance were designed to create varied and engaging encounters.",
        image: "images/bossf.jpg",
      },
      {
        title: "Player Mechanics",
        text: "I implemented the game's UI and the player's main mechanics, including three different attack types: a melee attack, a medium-range whip attack, and an unlimited-range projectile attack using energy balls. I also implemented the player's movement abilities, such as the double jump and dash, as well as the progressive skill upgrade system that players unlock while exploring the game world.",
        image: "images/combat.gif",
      },
      {
        title: "Technical Art",
        text: "Beyond programming, I worked as technical artist for the project, adding the animations and transitions that bring the characters and world to life and hooking them into the gameplay systems.",
        image: "",
      },
    ],

    keySystems: [
      "Final boss and enemy encounter design",
      "Melee and ranged player combat with skill upgrades",
      "Core UI implementation",
      "Animation and transition pipeline as technical artist",
      "Team coordination and production oversight",
    ],
    techStack: ["C++", "SDL2"],
    whatILearned: "Leading the programming team on Railway to Hell taught me how much of game development is coordination rather than just code: keeping combat, UI, boss design and animation moving together on schedule required constant communication. Building enemy and boss behaviour from scratch also gave me a much deeper appreciation for how combat feel is tuned, not just implemented.",

    screenshots: [],
    links: [
      { url: "https://anaalcaraz.itch.io/railway-to-hell", label: "Play on itch.io", style: "primary" }
    ]
  },

  {
    title: "Superliminal: Liminal Spaces",
    category: "Level Design",
    meta: "Level Design · 2024",
    subtitle: "A three-room level for Superliminal built with a team of three, using the kishotenketsu narrative structure to introduce, develop and twist the game's perspective-scaling mechanic across the level.",
    tags: ["Unreal Engine", "Blueprints", "Level Design"],

    videoUrl: "https://www.youtube.com/embed/X68Ad7ryohU",

    contributions: [
      {
        title: "Room 1: Teaching the Mechanic",
        text: "The level opens with a short corridor where knee-height obstacles push the player toward jumping without any on-screen prompt, the same trick the original game uses to teach movement implicitly. Right after it, the first room asks for a single clear action: pick up the object left at the start, scale it up while pulling it closer, and drop it into the gap in the floor to reach the exit. The goal was to teach the core scaling mechanic through one unmissable puzzle before adding any more layers on top of it.",
        image: "images/lvl1.png",
      },
      {
        title: "Room 2: Buttons and Doors",
        text: "The second room introduces buttons and doors working together. Three doors face three buttons, and the real exit only opens once all three are pressed at the same time. Players can either explore the side corridors to find two extra cubes, or realize that a single cube, scaled up enough, can cover all three buttons at once. We added soft lights above each button later on, after early testing showed players didn't immediately connect the three buttons to the same door.",
        image: "images/lvl2.png",
      },
      {
        title: "Room 3: The Twist",
        text: "The third room hides a wall that can be grabbed and pulled aside, revealing a drop into near total darkness. From there, the player follows a row of wall lamps facing upward toward a glowing cube that works as a portable light source. That cube activates a button seen through a hidden window, opens a door, and later doubles as a bridge over a gap before the level moves into a short platforming section built on top of the maze walls below, lit from underneath by the same lamps.",
        image: "images/lvl3.png",
      },
    ],

    keySystems: [
      "Kishotenketsu-based three-room structure: setup, mechanic, and twist",
      "Room 1: single-puzzle introduction to the scaling mechanic",
      "Room 2: multi-button puzzle with two valid solution paths",
      "Room 3: light-guided navigation twist built around a portable light source",
      "Perspective-scaling and interaction systems built in Blueprints to support the design",
    ],
    techStack: ["Unreal Engine", "Blueprints"],
    whatILearned: "The hardest part of this project was finding the idea for the third room. Superliminal's whole mechanic is about scale, and once we'd already built a corridor and a two-room puzzle around it, finding a new angle without repeating what we'd done felt like running out of directions. We spent a long time stuck there before landing on light: turning the same mechanic into something the player has to trust rather than see clearly, using darkness and a moving light source to guide them instead of their eyes. The other real challenge was designing around a game we all knew well without copying it. We didn't want our corridor to feel like Superliminal's tutorial, or any other room to feel like a level we'd already played, so every idea had to pass that check before it made it into the level.",

    screenshots: [],
    links: [
      { url: "https://anaalcaraz.itch.io/level-design-of-3-levels-superliminal", label: "Play & read the LDD", style: "primary" }
    ]
  },

  {
    title: "Racing Game",
    category: "Gameplay Programming",
    meta: "Gameplay Programming · 2024",
    subtitle: "A top-down racing game with multiplayer support and two AI-controlled karts to race against, built with Raylib, Box2D and C++.",
    tags: ["C++", "Raylib", "Box2D"],

    // TEMP: replace with the actual Racing Game gameplay video when ready.
    videoUrl: "https://www.youtube.com/embed/J-ttC8Gt458",

    contributions: [
      {
        title: "Core Gameplay & Systems",
        text: "I worked across most areas of the game rather than owning a single system, contributing to the AI karts, the lap and timing systems, the kart selection and win screens, and the track hazards that affect how the race plays out.",
        image: "",
      },
    ],

    keySystems: [
      "Moving AI karts that challenge the player",
      "Lap timer with lap and best lap tracking",
      "Lap counter and FPS counter",
      "Win screens for each player type and the AI",
      "Player and kart selection screen with four karts, each with different stats",
      "Speed boost panels and a snow surface that slows karts down",
      "Drift mechanic bound to the shift key",
    ],
    techStack: ["C++", "Raylib", "Box2D"],
    whatILearned: "This project was a good introduction to building a full game loop with physics from the ground up. Tuning the drift and the different kart stats with Box2D showed me how much iteration goes into making a vehicle feel fun to control rather than just functional.",

    screenshots: [],
    links: [
      { url: "https://github.com/AsiGamer29/RacingGame", label: "View on GitHub", style: "primary" }
    ]
  },

  {
    title: "Pinball",
    category: "Gameplay Programming",
    meta: "Gameplay Programming · 2024",
    subtitle: "An adaptation of the Game Boy Advance game Pokémon Pinball: Ruby and Sapphire, rebuilding its core pinball mechanics with Raylib, Box2D and C++.",
    tags: ["C++", "Raylib", "Box2D"],

    // TEMP: replace with the actual Pinball gameplay video when ready.
    videoUrl: "https://www.youtube.com/embed/J-ttC8Gt458",

    contributions: [
      {
        title: "Core Pinball Mechanics",
        text: "I worked across most of the project rather than a single isolated feature, focusing on rebuilding the core pinball mechanics of the original game while trimming it down to what mattered: the orange track, the Pokémon center and mart, bonus stages, power-ups and the catching mechanic were all left out so the flippers, ball physics and scoring could take center stage.",
        image: "",
      },
    ],

    keySystems: [
      "Physics-based pinball mechanics with Box2D",
      "Score, highscore and previous score tracking",
      "Life counter and FPS counter",
      "Pokéball and Pokémon animations on the track",
    ],
    techStack: ["C++", "Raylib", "Box2D"],
    whatILearned: "Adapting an existing game rather than designing one from scratch was a different kind of challenge: it meant deciding which mechanics were essential to keep the game feeling right and which ones could be cut without losing what made the original fun. It also gave me hands-on experience tuning ball physics until it actually felt like pinball.",

    screenshots: [],
    links: [
      { url: "https://github.com/Aniolobolo/PinballGameFisica2", label: "View on GitHub", style: "primary" }
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
      ? `<iframe src="${p.videoUrl}" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`
      : `<video controls playsinline><source src="${p.videoUrl}" type="video/mp4"><source src="${p.videoUrl}" type="video/webm"></video>`;
    videoWrap.style.display = 'block';
  } else {
    videoBox.innerHTML = '';
    videoWrap.style.display = 'none';
  }

  // Contributions - alternating layout
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