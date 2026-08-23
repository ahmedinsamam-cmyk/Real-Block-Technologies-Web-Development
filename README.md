# Real Block Technologies

Enterprise website for **Real Block Technologies** — an AI, Blockchain, and Real World Asset (RWA) technology consulting company.

Built with React 19, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide React.

## Folder structure

```
src/
  components/     # Reusable UI (Navbar, Footer, Button, SEO, FAQ, etc.)
  pages/          # Route-level pages (Home, About, Services, Contact, …)
  sections/       # Page section compositions (e.g. home hero/stats)
  layouts/        # App shell (MainLayout)
  data/           # Shared content models (services, industries, case studies)
  hooks/          # Custom React hooks
  utils/          # Constants and form validation
  assets/         # Static assets imported by the app
public/           # Favicon, robots.txt, sitemap.xml, Cloudflare redirects/headers
```

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`).

Other scripts:

```bash
npm run build    # Typecheck + production build → dist/
npm run preview  # Preview the production build
npm run lint     # Lint with oxlint
```

## Push to GitHub

```bash
git add .
git commit -m "Add Real Block Technologies enterprise website"
git push -u origin <your-branch-name>
```

Create a repository on GitHub first if one does not exist, then add the remote:

```bash
git remote add origin https://github.com/<org>/<repo>.git
git push -u origin main
```

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repository.
4. Configure build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 or later (recommended)
5. Deploy. SPA routing is handled by `public/_redirects` (`/* /index.html 200`).

### CLI alternative (Wrangler)

```bash
npm run build
npx wrangler pages deploy dist --project-name=real-block-technologies
```

## SEO included

- Per-page titles and meta descriptions
- Open Graph and Twitter card tags
- `robots.txt` and `sitemap.xml`
- Organization Schema.org JSON-LD in `index.html`

## Suggested improvements for future versions

- Connect the contact form to a CRM, email API, or serverless function
- Add a headless CMS for Insights / Case Studies
- Publish real leadership bios, client logos, and approved case studies
- Add multilingual support for global markets
- Implement analytics (privacy-friendly) and conversion tracking
- Expand blog posts into full article pages with MDX
- Add authenticated careers applications and ATS integration
- Legal review of Privacy Policy and Terms before go-live
- Performance budgets, image CDN, and Core Web Vitals monitoring

## Lead generation & business operations setup

See `.env.example` for full configuration. Key integrations:

| Capability | Service / module |
|---|---|
| CRM | HubSpot via `src/services/crmService.ts` |
| Email automation | Mailchimp/ConvertKit via `src/services/emailAutomation.ts` |
| Booking | Calendly meeting types in `ConsultationBooking` |
| Chat | `AIChatWidget` (Intercom/Crisp/HubSpot ready) |
| Analytics | GA4 + LinkedIn Insight + Meta in `src/utils/analytics.ts` |
| CMS | Sanity-ready `src/services/cms.ts` |
| Documents | Cloudflare R2-ready `src/services/documentService.ts` |
| Security | reCAPTCHA, sanitization, rate limits in `src/utils/security.ts` |
| i18n | Locale architecture in `src/utils/i18n.ts` |
| Dashboard (future) | `src/services/dashboard.ts` |

Routes added for GTM: `/resources`, `/help`, `/resources/rwa-tokenization-guide`.

Replace placeholder URLs in `src/utils/constants.ts` (LinkedIn, Calendly event slugs).
