# DatoCMS Setup Guide

The portfolio is already integrated with DatoCMS. When no API token is configured, it gracefully falls back to the mock data in `lib/projects.ts`.

## Quick Start

### 1. Create a DatoCMS Project

1. Go to [datocms.com](https://www.datocms.com) and sign up for a free account.
2. Create a new project (choose "Blank project").
3. Note your project subdomain (e.g., `your-project.admin.datocms.com`).

### 2. Define the Schema

In your DatoCMS project dashboard:

1. Go to **Settings > Models**.
2. Click **"Add new model"**.
   - **Name**: Project
   - **API Identifier**: `project` (this is critical — it must be exactly `project`)
3. Add the following fields to the **Project** model:

| Field Label | API Key | Type | Required | Notes |
|-------------|---------|------|----------|-------|
| Slug | `slug` | Slug | Yes | Must be unique. Use "Name" as the title field reference. |
| Name | `name` | Single-line string | Yes | |
| Type | `project_type` | Single-line string | Yes | e.g., "Design System", "Open Source Tool". Note: `type` is a reserved keyword in DatoCMS. |
| Year | `year` | Single-line string | Yes | e.g., "2024" |
| Description | `description` | Multi-paragraph text | Yes | Short summary for cards and SEO |
| Stack | `stack` | JSON | Yes | Array of strings: `["React", "TypeScript"]` |
| Body | `body` | Multi-paragraph text | Yes | Full HTML content for the project detail page |
| Image | `image` | Single asset | Yes | Upload or reference an image. DatoCMS serves via imgix CDN. |

4. Save the model.

### 3. Migrate Content

Create a new **Project** record for each of the 5 mock projects. You can copy the HTML body directly from `lib/projects.ts`.

For the **Stack** JSON field, use this format:
```json
["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI"]
```

For **images**, you can either:
- Upload new images to DatoCMS
- Use the same Unsplash URLs (paste them into the asset field — DatoCMS will fetch them)

### 4. Get Your API Token

1. In your DatoCMS dashboard, go to **Settings > API tokens**.
2. Create a new token:
   - **Name**: Portfolio Delivery
   - **Role**: Read-only
   - **Permissions**: Content Delivery API (CDA)
3. Copy the token.

### 5. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
DATOCMS_API_TOKEN=your-read-only-api-token-here
# Optional: specify a DatoCMS environment (defaults to primary)
# DATOCMS_ENVIRONMENT=main
```

### 6. Build and Test

```bash
bun run build
bun run start
```

Visit `/work` and any `/work/[slug]` page. The site should now pull content from DatoCMS instead of the mock data.

## How It Works

- `lib/datocms.ts` is the data layer. It exports `getAllProjects()` and `getProjectBySlug(slug)`.
- If `DATOCMS_API_TOKEN` is missing, these functions fall back to the mock data in `lib/projects.ts`.
- The dynamic route `app/work/[slug]/page.tsx` uses ISR with a 60-second revalidation window. Content changes in DatoCMS will reflect on the site within a minute.
- Images from DatoCMS are served through `www.datocms-assets.com` (imgix) and are whitelisted in `next.config.mjs`.

## Troubleshooting

**Build fails with "DatoCMS API token is not configured"**
- Make sure `.env.local` exists and contains `DATOCMS_API_TOKEN`.
- If you want to use mock data instead, simply delete or rename `.env.local`.

**Images are not loading**
- Verify the `image` field in DatoCMS has a valid asset.
- Check that `www.datocms-assets.com` is in `next.config.mjs` (it should be already).

**Content is not updating after changes in DatoCMS**
- The site uses ISR with `revalidate = 60`. Wait up to 60 seconds, or redeploy.
- If running locally in dev mode (`bun run dev`), refresh the page — dev mode does not cache.
