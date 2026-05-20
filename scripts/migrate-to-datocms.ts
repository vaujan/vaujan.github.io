/**
 * DatoCMS Migration Script
 * Uses the official DatoCMS CMA client to create schema and migrate content.
 *
 * Run: bun run scripts/migrate-to-datocms.ts
 */

import { buildClient, LogLevel } from "@datocms/cma-client-node";

const API_TOKEN = process.env.DATOCMS_API_TOKEN;
const ENVIRONMENT = process.env.DATOCMS_ENVIRONMENT || undefined;

if (!API_TOKEN) {
  console.error("❌ DATOCMS_API_TOKEN is not set in .env");
  process.exit(1);
}

const client = buildClient({
  apiToken: API_TOKEN,
  environment: ENVIRONMENT,
  logLevel: LogLevel.NONE,
});

const PROJECTS = [
  {
    slug: "meridian-design-system",
    name: "Meridian Design System",
    type: "Design System",
    year: "2024",
    description:
      "A scalable component library and design system built for enterprise product teams. Focused on accessibility, consistency, and developer experience.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI"],
    body: `<p><strong>Meridian</strong> was born from a simple observation: every product team was rebuilding the same buttons, inputs, and layouts. I set out to create a unified design language that could serve multiple products while remaining flexible enough for custom needs.</p>

<h2>The challenge</h2>

<p>We had five product teams, five different button styles, and zero shared vocabulary. Onboarding a new engineer meant learning five separate codebases. Something had to change.</p>

<blockquote>Design systems are not about constraints. They are about freeing teams to focus on what matters.</blockquote>

<h2>The approach</h2>

<p>I started with primitives — <code>color</code>, <code>type</code>, <code>space</code>, and <code>shadow</code> tokens — then composed them into 40+ components. Each component is built on <a href="#">Radix UI</a> primitives for accessibility, styled with Tailwind CSS, and documented in Storybook.</p>

<h3>Key architectural decisions</h3>

<ol>
<li>Tokens live in a single source of truth (Style Dictionary).</li>
<li>Components expose a <code>className</code> escape hatch for one-off overrides.</li>
<li>Every component ships with an axe-core test and a visual regression snapshot.</li>
<li>Theming is runtime, not build-time.</li>
</ol>

<h3>Key achievements</h3>

<ul>
<li>Reduced UI development time by <strong>60%</strong> across 5 product teams</li>
<li>Achieved <strong>WCAG 2.1 AA</strong> compliance across all components</li>
<li>Built automated visual regression testing with Chromatic</li>
<li>Created a theming system supporting light, dark, and custom brand themes</li>
</ul>

<pre><code>import { Button } from "@meridian/ui";

export default function App() {
  return &lt;Button variant="primary" size="lg"&gt;Get started&lt;/Button&gt;;
}</code></pre>

<p>Today, Meridian powers the UI of every product at the company. New teams spin up in hours, not weeks.</p>`,
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop",
  },
  {
    slug: "flux-workflow-engine",
    name: "Flux Workflow Engine",
    type: "Open Source Tool",
    year: "2024",
    description:
      "An open-source visual workflow builder for automation. Drag, connect, and deploy workflows without writing code.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    body: `<p><strong>Flux</strong> is a visual programming environment that lets anyone build automated workflows. Inspired by node-based editors in creative software, I wanted to bring that same intuitive experience to business automation.</p>

<h2>Why visual programming?</h2>

<p>Most automation tools are either too simple (Zapier) or too complex (Airflow). Flux sits in the middle: powerful enough for engineers, intuitive enough for operations teams.</p>

<blockquote>The best tools are the ones you can explain to your manager in five minutes.</blockquote>

<h2>Core engine</h2>

<p>Workflows are directed acyclic graphs stored as JSON. The runtime executes them with a custom scheduler that handles retries, timeouts, and parallel branches.</p>

<h3>Runtime features</h3>

<ol>
<li>Each node runs in an isolated sandbox (Node.js <code>vm2</code>).</li>
<li>State is persisted to PostgreSQL with optimistic locking.</li>
<li>WebSocket streams push real-time logs to the dashboard.</li>
<li>Deployments are atomic — rollback on failure.</li>
</ol>

<h3>Integrations</h3>

<ul>
<li><strong>50+ native integrations</strong> (Slack, Notion, GitHub, Airtable, etc.)</li>
<li>Custom webhook nodes with signature verification</li>
<li>OAuth 2.0 token refresh handled automatically</li>
<li>Community-driven plugin marketplace</li>
</ul>

<pre><code>// A simple Flux workflow
{
  "nodes": [
    { "id": "trigger", "type": "webhook" },
    { "id": "filter", "type": "condition", "expr": "payload.status === 'paid'" },
    { "id": "notify", "type": "slack", "channel": "#sales" }
  ],
  "edges": [
    { "from": "trigger", "to": "filter" },
    { "from": "filter", "to": "notify" }
  ]
}</code></pre>

<p>Within three months of launch, Flux reached <strong>1,200+ GitHub stars</strong> and was featured on Hacker News. Today it processes over 2 million workflows per month.</p>`,
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  },
  {
    slug: "atlas-knowledge-base",
    name: "Atlas Knowledge Base",
    type: "Productivity App",
    year: "2023",
    description:
      "A minimal, fast wiki for engineering teams. Markdown-first, real-time collaborative editing, and instant search.",
    stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "TipTap"],
    body: `<p><strong>Atlas</strong> was designed for teams who outgrow Google Docs but don't need the complexity of Confluence. It's a wiki that feels like writing in your favorite text editor — fast, minimal, and built for engineers.</p>

<h2>Editor architecture</h2>

<p>The heart of Atlas is a custom <a href="#">TipTap</a> editor built on ProseMirror. We extended it with embeds, @mentions, and a slash-command palette that feels native.</p>

<blockquote>Documentation should live where work happens, not in a separate tab you forget to open.</blockquote>

<h2>Search that actually works</h2>

<p>Most team wikis have terrible search. Atlas uses <strong>SQLite FTS5</strong> with custom ranking logic. Results appear in under 50ms, even across tens of thousands of pages.</p>

<h3>Performance strategy</h3>

<ol>
<li>Pages are rendered at build time with <strong>Next.js ISR</strong>.</li>
<li>Edge caching via Vercel's CDN keeps TTFB under 100ms.</li>
<li>SQLite is embedded — no external database to manage.</li>
<li>Incremental static regeneration updates pages in the background.</li>
</ol>

<h3>Notable features</h3>

<ul>
<li><strong>Real-time collaboration</strong> powered by Yjs CRDT</li>
<li>Bidirectional <code>[[links]]</code> for networked note-taking</li>
<li>GitHub-flavored markdown with custom table and math extensions</li>
<li>Dark mode support out of the box</li>
</ul>

<pre><code>// Atlas page schema (Prisma)
model Page {
  id        String   @id @default(cuid())
  title     String
  slug      String   @unique
  content   Json     // ProseMirror document tree
  links     Page[]   @relation("Backlinks")
  createdAt DateTime @default(now())
}</code></pre>

<p>Today, Atlas serves as the single source of truth for documentation across the engineering org. New hires ship their first doc within an hour.</p>`,
    imageUrl:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1200&h=800&fit=crop",
  },
  {
    slug: "northstar-analytics",
    name: "Northstar Analytics",
    type: "Data Dashboard",
    year: "2023",
    description:
      "Real-time infrastructure monitoring dashboard. Track metrics, set alerts, and visualize system health at a glance.",
    stack: ["React", "TypeScript", "D3.js", "Go", "InfluxDB"],
    body: `<p><strong>Northstar</strong> solves the problem of alert fatigue in infrastructure monitoring. Instead of hundreds of disconnected metrics, it surfaces what actually matters using intelligent anomaly detection.</p>

<h2>Clarity under pressure</h2>

<p>When a production system is failing, you don't need more dashboards. You need the right signal, right now. Northstar's visual design is built around that constraint.</p>

<blockquote>Every pixel on the screen should justify its existence during an incident.</blockquote>

<h2>Real-time pipeline</h2>

<p>Metrics stream from <strong>InfluxDB</strong> through a Go-powered aggregator, then to the browser via WebSocket. The frontend renders with a custom D3.js layer optimized for 60fps at 10k+ data points.</p>

<h3>Anomaly detection</h3>

<ol>
<li>Baseline is computed with a 24-hour rolling window per metric.</li>
<li>Seasonal decomposition removes daily/weekly patterns.</li>
<li>Z-score threshold triggers only on statistically significant deviations.</li>
<li>Correlated alerts are grouped into a single incident.</li>
</ol>

<h3>Dashboard features</h3>

<ul>
<li><strong>Sub-second</strong> metric updates via WebSocket streaming</li>
<li>Custom D3.js charts with canvas fallback for large datasets</li>
<li>Drag-and-drop alert rule builder</li>
<li>Auto-generated incident summaries with root-cause timeline</li>
</ul>

<pre><code>// Alert rule engine (Go)
func Evaluate(rule Rule, point Metric) (Alert, bool) {
  baseline := rollingMean(rule.Window, rule.MetricID)
  deviation := math.Abs(point.Value - baseline) / baseline.StdDev()
  if deviation > rule.Threshold {
    return NewAlert(rule, point), true
  }
  return Alert{}, false
}</code></pre>

<p>After deployment, client teams reduced their mean time to detection (MTTD) by <strong>40%</strong> and cut false-positive alerts by more than half.</p>`,
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  },
  {
    slug: "signal-studio",
    name: "Signal Studio",
    type: "Creative Tool",
    year: "2022",
    description:
      "A creative toolkit for generative art and audio visualization. Bridge the gap between code and canvas.",
    stack: ["React", "TypeScript", "WebGL", "Web Audio API", "Canvas API"],
    body: `<p><strong>Signal Studio</strong> is where creative coding meets professional tooling. It provides a live-coding environment for generative graphics and audio-reactive visuals — a bridge between the code editor and the canvas.</p>

<h2>The idea</h2>

<p>Most creative tools force a choice: power or accessibility. Signal Studio gives you both. Write GLSL shaders, patch audio-reactive parameters, and see the result instantly.</p>

<blockquote>Code is a creative medium. The screen is just the canvas.</blockquote>

<h2>Rendering engine</h2>

<p>The core is a custom <strong>WebGL</strong> renderer written from scratch. It handles 100k+ particles at 60fps, supports instanced geometry, and compiles shaders on the fly.</p>

<h3>Audio analysis</h3>

<ol>
<li>FFT data is streamed from the Web Audio API in real time.</li>
<li>Frequency bins are mapped to shader uniforms via the modulation graph.</li>
<li>Smoothing and peak detection prevent jitter in reactive visuals.</li>
<li>MIDI clock support keeps everything in sync with hardware.</li>
</ol>

<h3>Export pipeline</h3>

<ul>
<li><strong>Video</strong> — H.264/HEVC via MediaRecorder with lossless intermediate frames</li>
<li><strong>GIF</strong> — color-optimized palette with dithering</li>
<li><strong>Live</strong> — Syphon/Spout output for VJ software integration</li>
<li><strong>Image</strong> — PNG sequence at 4K resolution</li>
</ul>

<pre><code>// A simple audio-reactive shader
uniform float u_time;
uniform float u_bass;

void main() {
  float pulse = sin(u_time * 10.0) * u_bass;
  vec3 color = vec3(0.5 + pulse, 0.2, 0.8);
  gl_FragColor = vec4(color, 1.0);
}</code></pre>

<p>Signal Studio was featured on <a href="#">Chrome Experiments</a> and <a href="#">Codrops</a>. It is now used by visual artists and musicians for live performances worldwide.</p>`,
    imageUrl:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&h=800&fit=crop",
  },
];

/* ------------------------------------------------------------------ */
// Main
/* ------------------------------------------------------------------ */

async function main() {
  console.log("🚀 Starting DatoCMS migration...\n");

  // 1. Delete existing project item type if it exists
  console.log("🔍 Checking for existing 'project' item type...");
  const existingItemTypes = await client.itemTypes.list();
  const existingProject = existingItemTypes.find(
    (it) => it.api_key === "project"
  );

  if (existingProject) {
    console.log(`  Deleting existing item type: ${existingProject.id}`);
    await client.itemTypes.destroy(existingProject.id);
    console.log("  ✅ Deleted\n");
  } else {
    console.log("  No existing item type found\n");
  }

  // 2. Create item type
  console.log("🛠️  Creating item type 'project'...");
  const itemType = await client.itemTypes.create({
    name: "Project",
    api_key: "project",
    all_locales_required: false,
    draft_mode_active: true,
    sortable: false,
    tree: false,
  });
  console.log(`✅ Item type created: ${itemType.id}\n`);

  // 3. Create fields
  console.log("➕ Creating fields...");

  const nameField = await client.fields.create(itemType.id, {
    api_key: "name",
    label: "Name",
    field_type: "string",
    validators: { required: {} },
    appearance: { editor: "single_line", parameters: {}, addons: [] },
    localized: false,
  });
  console.log("  ✅ name");

  const slugField = await client.fields.create(itemType.id, {
    api_key: "slug",
    label: "Slug",
    field_type: "slug",
    validators: {
      slug_title_field: { title_field_id: nameField.id },
      required: {},
    },
    appearance: { editor: "slug", parameters: {}, addons: [] },
    localized: false,
  });
  console.log("  ✅ slug");

  const typeField = await client.fields.create(itemType.id, {
    api_key: "project_type",
    label: "Type",
    field_type: "string",
    validators: { required: {} },
    appearance: { editor: "single_line", parameters: {}, addons: [] },
    localized: false,
  });
  console.log("  ✅ project_type");

  const yearField = await client.fields.create(itemType.id, {
    api_key: "year",
    label: "Year",
    field_type: "string",
    validators: { required: {} },
    appearance: { editor: "single_line", parameters: {}, addons: [] },
    localized: false,
  });
  console.log("  ✅ year");

  const descriptionField = await client.fields.create(itemType.id, {
    api_key: "description",
    label: "Description",
    field_type: "text",
    validators: { required: {} },
    appearance: { editor: "textarea", parameters: {}, addons: [] },
    localized: false,
  });
  console.log("  ✅ description");

  const stackField = await client.fields.create(itemType.id, {
    api_key: "stack",
    label: "Stack",
    field_type: "json",
    validators: { required: {} },
    appearance: { editor: "json", parameters: {}, addons: [] },
    localized: false,
  });
  console.log("  ✅ stack");

  const bodyField = await client.fields.create(itemType.id, {
    api_key: "body",
    label: "Body",
    field_type: "text",
    validators: { required: {} },
    appearance: { editor: "wysiwyg", parameters: {}, addons: [] },
    localized: false,
  });
  console.log("  ✅ body");

  const imageField = await client.fields.create(itemType.id, {
    api_key: "image",
    label: "Image",
    field_type: "file",
    validators: { required: {} },
    appearance: { editor: "file", parameters: {}, addons: [] },
    localized: false,
  });
  console.log("  ✅ image\n");

  // 4. Create project records
  console.log("📦 Creating project records...\n");
  for (const project of PROJECTS) {
    console.log(`  Creating: ${project.name}`);

    let uploadId: string | undefined;
    try {
      const upload = await client.uploads.createFromUrl({
        url: project.imageUrl,
        default_field_metadata: {
          id: { alt: "", title: "", custom_data: {} },
        },
      });
      uploadId = upload.id;
      console.log(`    📤 Image uploaded: ${uploadId}`);
    } catch (err) {
      console.warn(`    ⚠️ Failed to upload image: ${err}`);
    }

    const item = await client.items.create({
      item_type: { id: itemType.id, type: "item_type" },
      name: project.name,
      slug: project.slug,
      project_type: project.type,
      year: project.year,
      description: project.description,
      stack: JSON.stringify(project.stack),
      body: project.body,
      ...(uploadId ? { image: { upload_id: uploadId } } : {}),
    });

    console.log(`  ✅ ${project.name} created (id: ${item.id})\n`);
  }

  console.log("🎉 Migration complete!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
