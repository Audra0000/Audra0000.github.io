# Ana Alcaraz — Portfolio

## Structure

```
ana-portfolio/
├── index.html       ← Main page
├── style.css        ← All styles
├── script.js        ← Interactions + routing
├── images/          ← Put your images here
│   ├── photo.jpg         ← Your profile photo (160×160 or larger, will be cropped to circle)
│   ├── project1.jpg      ← Project 1 card thumbnail (16:9 ratio recommended)
│   ├── project1_ss1.jpg  ← Project 1 screenshot 1
│   ├── project1_ss2.jpg  ← Project 1 screenshot 2
│   ├── project2.jpg      ← Project 2 card thumbnail
│   └── ...
└── README.md
```

## How to customize

### Your info
Open `index.html` and update:
- Your email in the `mailto:` links
- Your GitHub, LinkedIn, and itch.io URLs
- Your bio text

### Projects
Open `script.js` and find the `projects` array. Each project has:

```js
{
  title: "Project Name",
  meta: "Category · Year",
  subtitle: "One-line description shown under the title.",
  tags: ["C++", "OpenGL"],
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",  // Leave "" if no video
  description: [
    "First paragraph...",
    "Second paragraph...",
  ],
  screenshots: [
    "images/project_ss1.jpg",
    "images/project_ss2.jpg",
  ],
  links: [
    { url: "https://github.com/...", label: "View on GitHub", style: "primary" },
    { url: "https://itch.io/...",   label: "Play on itch.io", style: "secondary" },
  ]
}
```

To **add a project**, copy a project object in the array and update the values. Then add a matching card in `index.html` inside `<div class="projects-grid">`, calling `openProject(N)` where N is the array index (starting at 0).

### Video embeds
For YouTube: go to your video → Share → Embed → copy the `src` URL (looks like `https://www.youtube.com/embed/XXXX`).

## Opening locally
Just open `index.html` in a browser. For images to load correctly from local files, use a local server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.
