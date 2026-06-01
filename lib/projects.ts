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
    slug: "monkeio",
    name: "Monkeio",
    type: "Productivity SaaS",
    year: "2025",
    description:
      "A hassle-free deep work tracker built as an independent SaaS. Product strategy, UX design, branding, and full-stack development by a single person.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "shadcn/ui"],
    body: `<p><strong>Monkeio</strong> is a productivity SaaS built from scratch as an independent project. It is a deep work tracker designed to help users focus and measure productive sessions without friction.</p>

<h2>The origin</h2>

<p>Most productivity tools are either too complex or too rigid. I wanted something that respects the user's workflow rather than forcing one. Monkeio was born from that idea — a tracker that gets out of the way so you can do the work.</p>

<blockquote>The best productivity tool is the one you actually use.</blockquote>

<h2>What I built</h2>

<p>As the sole founder, I handled everything: product strategy, market research, UX design, branding, and full-stack engineering.</p>

<h3>Key features</h3>

<ol>
<li>Simple session tracking with minimal UI overhead.</li>
<li>Progress dashboards that surface meaningful patterns, not vanity metrics.</li>
<li>Iterative feature prioritization driven by user-centered design principles.</li>
<li>Responsive design that works seamlessly across desktop and mobile.</li>
</ol>

<h3>Technical stack</h3>

<ul>
<li><strong>Frontend</strong> — Next.js with TypeScript and Tailwind CSS</li>
<li><strong>Backend</strong> — Supabase for auth, database, and real-time features</li>
<li><strong>UI</strong> — shadcn/ui components with a custom minimal theme</li>
<li><strong>Deployment</strong> — Vercel with automatic preview environments</li>
</ul>

<p>Monkeio is currently in Beta. It represents what one person can build when design thinking and engineering discipline meet.</p>`,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
  },
  {
    slug: "patuhpdp",
    name: "SentraPDP / PatuhPDP",
    type: "UI/UX Design",
    year: "2024",
    description:
      "A data protection compliance platform for enterprise clients. Designed end-to-end user flows and high-fidelity interfaces.",
    stack: ["Figma", "Design Systems", "UX Writing"],
    body: `<p><strong>SentraPDP / PatuhPDP</strong> is a data protection compliance platform built for enterprise clients navigating Indonesia's Personal Data Protection (PDP) regulations. I was responsible for the complete UI/UX design of the platform.</p>

<h2>The challenge</h2>

<p>Compliance software is notorious for being dense, intimidating, and hard to navigate. The goal was to turn a complex regulatory requirement into an intuitive operational tool that legal and operational teams could actually use.</p>

<h2>The approach</h2>

<p>I started by mapping the compliance workflow from data mapping to reporting. Every screen was designed to reduce cognitive load and guide users through multi-step processes without overwhelm.</p>

<h3>Key design decisions</h3>

<ol>
<li>Dashboard-first navigation that surfaces actionable tasks, not documents.</li>
<li>Wizard-style flows for complex compliance assessments.</li>
<li>Consistent design system applied across the platform for predictability.</li>
<li>UX writing that replaces legal jargon with plain language.</li>
</ol>

<h3>Outcomes</h3>

<ul>
<li>Reduced time-to-complete for core compliance workflows</li>
<li>Improved stakeholder confidence in audit readiness</li>
<li>Design system adopted by adjacent product teams</li>
</ul>

<p>The platform is now in active use by multiple enterprise clients within the Telkom Group ecosystem.</p>`,
    imageUrl: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1200&h=800&fit=crop",
  },
  {
    slug: "digisign",
    name: "Digisign",
    type: "UI/UX Design",
    year: "2024",
    description:
      "A digital signature platform designed for BUMN and state-owned enterprises. End-to-end UX from document upload to signature verification.",
    stack: ["Figma", "Prototyping", "Design Systems"],
    body: `<p><strong>Digisign</strong> is a digital signature platform tailored for BUMN (state-owned enterprises) and large government institutions. I led the UI/UX design for the entire product, from document upload flows to signature verification.</p>

<h2>Designing for trust</h2>

<p>Digital signatures carry legal weight. Every interaction needed to communicate security, clarity, and trustworthiness without feeling bureaucratic.</p>

<h2>Core flows</h2>

<p>I designed the complete signature lifecycle: document preparation, multi-party signing sequences, audit trail visualization, and certificate management.</p>

<h3>Key design contributions</h3>

<ol>
<li>Simplified document upload with progress indication and error recovery.</li>
<li>Visual signing sequence that makes multi-party workflows transparent.</li>
<li>Audit trail interface that presents legal logs in a scannable format.</li>
<li>Responsive design supporting both desktop offices and mobile approvals.</li>
</ol>

<p>Digisign is actively used by enterprise clients for legally binding digital document workflows.</p>`,
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
  },
  {
    slug: "e-procurement",
    name: "E-procurement",
    type: "UI/UX Design",
    year: "2023",
    description:
      "An enterprise procurement system for large organizations. Designed procurement workflows from requisition to vendor selection.",
    stack: ["Figma", "Wireframing", "UX Writing"],
    body: `<p><strong>E-procurement</strong> is an enterprise procurement system designed for large organizations managing high-volume purchasing workflows. I was the UI/UX designer responsible for translating complex procurement processes into usable interfaces.</p>

<h2>The complexity</h2>

<p>Enterprise procurement involves multiple approval tiers, vendor comparisons, budget checks, and compliance requirements. The interface had to serve both operational staff and decision-makers without confusing either.</p>

<h2>The solution</h2>

<p>I broke the system into role-based views: requesters see simplified forms, approvers see decision dashboards, and procurement officers see vendor and contract management tools.</p>

<h3>Key design decisions</h3>

<ol>
<li>Role-based dashboards that surface only relevant actions.</li>
<li>Vendor comparison views with side-by-side evaluation criteria.</li>
<li>Approval workflow visualization showing status at a glance.</li>
<li>Responsive forms that adapt to procurement complexity levels.</li>
</ol>

<p>The system is deployed across enterprise clients, streamlining procurement from requisition to vendor selection.</p>`,
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
  },
  {
    slug: "frederica",
    name: "Frederica (Risk Management System)",
    type: "UI/UX Design",
    year: "2023",
    description:
      "An enterprise risk management system. Designed risk assessment dashboards, reporting workflows, and mitigation tracking interfaces.",
    stack: ["Figma", "Design Systems", "Data Visualization"],
    body: `<p><strong>Frederica</strong> is an enterprise risk management system designed to help organizations identify, assess, and mitigate operational risks. I was the UI/UX designer for the platform, designing everything from risk assessment dashboards to mitigation tracking interfaces.</p>

<h2>Designing for risk</h2>

<p>Risk management is about visibility and action. The interface had to make risk levels immediately understandable while guiding users through structured assessment and response workflows.</p>

<h2>Core modules</h2>

<p>I designed modules for risk identification, impact scoring, mitigation planning, and executive reporting. Each served a different user persona from operational risk officers to C-level executives.</p>

<h3>Key design contributions</h3>

<ol>
<li>Risk heatmap dashboards with color-coded severity indicators.</li>
<li>Structured assessment forms that guide users through scoring criteria.</li>
<li>Mitigation tracking with timeline and responsibility assignment.</li>
<li>Executive reporting views with high-level summaries and drill-down capability.</li>
</ol>

<p>Frederica is in active use within the Telkom Group, supporting enterprise-wide risk management operations.</p>`,
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b0ba5d?w=1200&h=800&fit=crop",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
