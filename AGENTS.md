# AGENTS.md — Portfolio V2 Design Rules

## Project Context
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **UI System**: shadcn/ui v4 — `radix-nova` style, `taupe` base color, `sky` theme
- **Font**: Geist (heading + body), Tabler icons
- **Theme**: Dark/light via `next-themes`, CSS variables
- **Package Manager**: Bun

## CRITICAL: Preset Protection Rules

The project was initialized with preset `b7Uc7Fnnl` (`nova`, `taupe`, `sky`, `geist`).
**These rules are non-negotiable and must be followed by ALL future implementations.**

### 1. Color System — Semantic Tokens Only
- ALWAYS use semantic Tailwind tokens: `bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`, `bg-muted`, `bg-primary`, `text-primary-foreground`, `bg-secondary`, `text-secondary-foreground`, `bg-accent`, `text-accent-foreground`, `bg-destructive`, `text-destructive-foreground`.
- NEVER use raw color values like `bg-blue-500`, `text-purple-600`, `bg-gray-900`, `text-slate-400`.
- NEVER manually set `dark:` color overrides. The preset's CSS variables handle dark mode automatically via `class="dark"`.
- NEVER add custom CSS variables to `globals.css` that conflict with the preset's theme. If extending, prefix with `--app-*`.

### 2. Typography — Geist Only
- NEVER import or use other fonts (Inter, Roboto, Space Grotesk, etc.).
- Use Tailwind font utilities: `font-sans` (maps to Geist), `font-mono` (for code).
- For display/heading styles, use `font-heading` if configured, otherwise `font-sans` with weight/tracking adjustments.
- NEVER set `font-family` manually in CSS or inline styles.

### 3. Spacing & Layout — Tailwind Scale + gap-*
- ALWAYS use `flex` + `gap-*` for spacing. NEVER use `space-x-*` or `space-y-*`.
- Use `size-*` when width and height are equal (e.g., `size-10` not `w-10 h-10`).
- Use Tailwind's spacing scale (`p-4`, `m-8`, `gap-6`, etc.) rather than arbitrary values.
- For layout, prefer CSS Grid and Flexbox with semantic gap utilities.

### 4. Component Usage — shadcn/ui First
- ALWAYS check if a shadcn component exists before writing custom markup.
- Install components via CLI: `bunx --bun shadcn@latest add <component>`.
- Use built-in variants before custom styles: `variant="outline"`, `size="sm"`, `variant="ghost"`.
- NEVER modify files in `components/ui/` directly. If you need a custom variant, wrap the component in `components/` (not `components/ui/`).
- Use `asChild` (Radix) or `render` (Base) for custom triggers.

### 5. Icon System — Tabler Only
- ALWAYS use `@tabler/icons-react` (the preset's configured icon library).
- NEVER use `lucide-react`, `@phosphor-icons/react`, or other icon libraries.
- Pass icons as objects, not string keys: `icon={IconName}`, not `icon="icon-name"`.
- Icons inside components use `data-icon` attribute, no sizing classes.

### 6. Conditional Classes — `cn()` Utility
- ALWAYS use the `cn()` utility from `lib/utils.ts` for conditional class merging.
- NEVER write manual template literal ternaries for classes.

### 7. Accessibility — Maintain shadcn Standards
- Dialog, Sheet, and Drawer ALWAYS need a Title (`DialogTitle`, `SheetTitle`, `DrawerTitle`). Use `className="sr-only"` if visually hidden.
- `Avatar` always needs `AvatarFallback`.
- `TabsTrigger` must be inside `TabsList`.
- Maintain ARIA attributes and keyboard navigation from Radix primitives.

### 8. Form Patterns — FieldGroup + Field
- NEVER use raw `div` with `space-y-*` or `grid gap-*` for form layout.
- Use `FieldGroup` + `Field` + `FieldLabel` + `InputGroup` patterns.
- Validation uses `data-invalid` on `Field`, `aria-invalid` on the control.

### 9. Design Direction — Editorial Minimalism
- NO traditional landing-page sections (no "Hero", "About", "Skills", "Projects", "Contact" nav).
- NO large navigation bars with section links.
- Design is scroll-driven, editorial, long-form.
- Whitespace is intentional and generous.
- Typography is the primary design element.
- Content speaks for itself; decoration is minimal.

### 10. File Organization
- shadcn components: `components/ui/`
- Custom composed components: `components/`
- Utility functions: `lib/utils.ts`
- Mock data: `lib/projects.ts`
- Custom hooks: `hooks/`

### 11. Component Selection Quick Reference
| Need | Use |
|---|---|
| Button/action | `Button` with variant |
| Form inputs | `Input`, `Textarea`, `Select` via `FieldGroup` |
| Data display | `Card`, `Badge`, `Separator` |
| Overlays | `Dialog`, `Sheet`, `Tooltip` |
| Feedback | `Skeleton`, `Badge` |
| Layout | `Separator`, `ScrollArea` |

## Enforcement
If any implementation violates these rules, the agent MUST fix it before proceeding.

## Commit Convention

All commits must follow **Conventional Commits** with the **Atomic Commit** principle.

### Format
```
type(scope?): subject

[optional body]
```

### Types
- `feat`: New feature or capability
- `fix`: Bug fix
- `chore`: Tooling, config, deps, or maintenance
- `refactor`: Code restructuring with no behavior change
- `docs`: Documentation-only changes
- `style`: Code style/formatting (no logic change)
- `test`: Adding or updating tests
- `revert`: Reverting a previous commit

### Rules
1. **Atomic Commits**: One logical change per commit. Each commit must be self-contained, buildable (if applicable), and revertible without breaking unrelated features.
2. **Subject Line**: Imperative mood ("Add...", "Fix...", "Refactor..."), max 50 characters, no trailing period.
3. **Body** (when needed): Explain *why*, not just *what*. Wrap at 72 characters.
4. **Pre-Commit Checklist**:
   - Only stage files belonging to this single logical change.
   - No `console.log`, `debugger`, or temporary comments.
   - No unrelated files (e.g., do not commit `node_modules/`, `.next/`, `.env*.local`, `*.tsbuildinfo`).
   - Use `bun` only; never commit `package-lock.json`.
5. **Scope** (optional but encouraged): `app/`, `components/`, `lib/`, `ui/`, `config/`, `deps/`, `styles/`, `pages/`, etc.

### Example
```
feat(components): add interactive pixel blast background

Implements a WebGL-powered pixel blast effect using Three.js
and postprocessing. Supports multiple shapes, ripple effects,
and liquid distortion on mouse interaction.
```
