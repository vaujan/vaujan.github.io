export interface Project {
  slug: string;
  name: string;
  type: string;
  year: string;
  description: string;
  stack: string[];
  body: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    slug: "meridian-design-system",
    name: "Meridian Design System",
    type: "Design System",
    year: "2024",
    description:
      "A scalable component library and design system built for enterprise product teams. Focused on accessibility, consistency, and developer experience.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI"],
    body: `<p>Meridian was born from a simple observation: every product team was rebuilding the same buttons, inputs, and layouts. I set out to create a unified design language that could serve multiple products while remaining flexible enough for custom needs.</p>

<p>The system includes 40+ components, comprehensive documentation, and a Figma plugin for design-to-code handoff. Every component is fully accessible, tested with axe-core, and documented with interactive examples.</p>

<p>Key achievements:</p>
<ul>
<li>Reduced UI development time by 60% across 5 product teams</li>
<li> Achieved WCAG 2.1 AA compliance across all components</li>
<li> Built automated visual regression testing with Chromatic</li>
<li> Created a theming system supporting light, dark, and custom brand themes</li>
</ul>`,
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop",
  },
  {
    slug: "flux-workflow-engine",
    name: "Flux Workflow Engine",
    type: "Open Source Tool",
    year: "2024",
    description:
      "An open-source visual workflow builder for automation. Drag, connect, and deploy workflows without writing code.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    body: `<p>Flux is a visual programming environment that lets anyone build automated workflows. Inspired by node-based editors in creative software, I wanted to bring that same intuitive experience to business automation.</p>

<p>The engine supports conditional branching, loops, parallel execution, and real-time monitoring. Workflows are stored as JSON and can be versioned, shared, and deployed with a single click.</p>

<p>Key achievements:</p>
<ul>
<li>1,200+ GitHub stars in the first 3 months</li>
<li> Supports 50+ integrations (Slack, Notion, GitHub, etc.)</li>
<li> Built a custom React Flow renderer with snap-to-grid and auto-layout</li>
<li> Implemented real-time collaboration using Operational Transform</li>
</ul>`,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  },
  {
    slug: "atlas-knowledge-base",
    name: "Atlas Knowledge Base",
    type: "Productivity App",
    year: "2023",
    description:
      "A minimal, fast wiki for engineering teams. Markdown-first, real-time collaborative editing, and instant search.",
    stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "TipTap"],
    body: `<p>Atlas was designed for teams who outgrow Google Docs but don't need the complexity of Confluence. It's a wiki that feels like writing in your favorite text editor.</p>

<p>The editor is built on TipTap (ProseMirror) with custom extensions for embeds, mentions, and slash commands. Search is powered by SQLite FTS5 for instant results across thousands of pages.</p>

<p>Key achievements:</p>
<ul>
<li>Sub-100ms page loads with ISR and edge caching</li>
<li> Real-time collaborative editing with Yjs CRDT</li>
<li> Built a custom markdown parser supporting GitHub-flavored extensions</li>
<li> Implemented bidirectional linking for networked note-taking</li>
</ul>`,
    imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1200&h=800&fit=crop",
  },
  {
    slug: "northstar-analytics",
    name: "Northstar Analytics",
    type: "Data Dashboard",
    year: "2023",
    description:
      "Real-time infrastructure monitoring dashboard. Track metrics, set alerts, and visualize system health at a glance.",
    stack: ["React", "TypeScript", "D3.js", "Go", "InfluxDB"],
    body: `<p>Northstar solves the problem of alert fatigue in infrastructure monitoring. Instead of hundreds of disconnected metrics, it surfaces what actually matters using intelligent anomaly detection.</p>

<p>The dashboard features real-time charts, custom alert rules, and automated incident summaries. The visual design prioritizes clarity under pressure — when systems are failing, you need answers in seconds, not minutes.</p>

<p>Key achievements:</p>
<ul>
<li>Reduced mean time to detection (MTTD) by 40% for client teams</li>
<li> Built custom D3.js charts optimized for 60fps with 10k+ data points</li>
<li> Implemented WebSocket streaming for sub-second metric updates</li>
<li> Created an alert correlation engine to reduce false positives</li>
</ul>`,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  },
  {
    slug: "signal-studio",
    name: "Signal Studio",
    type: "Creative Tool",
    year: "2022",
    description:
      "A creative toolkit for generative art and audio visualization. Bridge the gap between code and canvas.",
    stack: ["React", "TypeScript", "WebGL", "Web Audio API", "Canvas API"],
    body: `<p>Signal Studio is where creative coding meets professional tooling. It provides a live-coding environment for generative graphics and audio-reactive visuals.</p>

<p>The editor features instant preview, parameter sliders, and a node-based modulation system. Shaders compile in real-time, and the audio analyzer provides frequency data for reactive visuals.</p>

<p>Key achievements:</p>
<ul>
<li>Featured on Chrome Experiments and Codrops</li>
<li> Built a custom WebGL renderer supporting 100k+ particles at 60fps</li>
<li> Implemented a node-based modulation system inspired by modular synthesizers</li>
<li> Created an export pipeline for video, GIF, and live performance</li>
</ul>`,
    imageUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&h=800&fit=crop",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
