# Great Asian Finds

> A premium, story-driven hybrid showroom and ecommerce platform for curated Asian furniture, decor, and statement home pieces.

Built as a **digital showroom first, online store second** — designed to create emotional connection through story, photography, and curation while supporting direct purchase, reservations, and inquiry-led sales.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Environment Variables](#environment-variables)
5. [Project Structure](#project-structure)
6. [Database Setup](#database-setup)
7. [Development Workflow](#development-workflow)
8. [API Reference](#api-reference)
9. [Deployment](#deployment)
10. [AI-Assisted Development](#ai-assisted-development)
11. [MVP Milestones](#mvp-milestones)
12. [Contributing](#contributing)

---

## Project Overview

Great Asian Finds sells and showcases curated pieces sourced from across Asia — Thailand, China, Korea, Indonesia, Vietnam, the Philippines, and beyond. The platform supports three sales modes:

- **Direct checkout** for regularly available pieces via PayMongo
- **Reservation holds** for one-of-a-kind items with expiration timestamps
- **Inquiry-led sales** for high-consideration or custom pieces

The experience should feel like stepping into a curated gallery, not scrolling through a marketplace. Every UI, copy, and architecture decision should reinforce that.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) App Router + TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Framer Motion](https://www.framer.com/motion/) |
| Database | PostgreSQL via [Supabase](https://supabase.com/) |
| Auth | Supabase Auth (role-aware) |
| Storage | Supabase Storage |
| Payments | [PayMongo](https://www.paymongo.com/) Checkout API |
| Hosting | [Vercel](https://vercel.com/) |
| Analytics | GA4 + Microsoft Clarity + Meta Pixel |
| Email | [Resend](https://resend.com/) |
| Validation | [Zod](https://zod.dev/) |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm
- A [Supabase](https://supabase.com/) project
- A [PayMongo](https://www.paymongo.com/) account (test mode for local dev)
- A [Vercel](https://vercel.com/) account (for deployment)

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-org/great-asian-finds.git
cd great-asian-finds

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp env.example .env.local

# 4. Fill in your .env.local values (see Environment Variables section)

# 5. Run Supabase migrations
npx supabase db push

# 6. Seed the database (optional, for local dev)
npx supabase db seed

# 7. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Environment Variables

Copy `env.example` to `.env.local` and fill in the following values. **Never commit `.env.local` to version control.**

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# PayMongo
PAYMONGO_SECRET_KEY=
PAYMONGO_PUBLIC_KEY=
PAYMONGO_WEBHOOK_SECRET=

# Resend (transactional email)
RESEND_API_KEY=
EMAIL_FROM=

# Analytics (public, client-safe)
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Important:** `SUPABASE_SERVICE_ROLE_KEY` and `PAYMONGO_SECRET_KEY` are server-only. They must only appear in route handlers and server actions — never in client components or `NEXT_PUBLIC_` variables.

---

## Project Structure

```
great-asian-finds/
├─ app/
│  ├─ (marketing)/          # Public-facing marketing pages
│  │  ├─ page.tsx           # Homepage
│  │  ├─ about/
│  │  ├─ journal/           # Editorial blog
│  │  ├─ consultation/
│  │  └─ contact/
│  ├─ shop/                 # Catalog listing + product detail
│  ├─ collections/          # Curated collection pages
│  ├─ countries/[slug]/     # Browse by country of origin
│  ├─ rooms/[slug]/         # Browse by room type
│  ├─ cart/
│  ├─ checkout/
│  ├─ account/              # Customer account, orders, wishlist
│  ├─ admin/                # Staff-only back office
│  └─ api/                  # Route handlers (write paths + webhooks)
├─ components/              # UI components grouped by domain
│  ├─ layout/
│  ├─ home/
│  ├─ shop/
│  ├─ product/
│  ├─ forms/
│  ├─ cart/
│  ├─ account/
│  ├─ admin/
│  └─ shared/
├─ lib/                     # Business logic, data access, integrations
│  ├─ auth/
│  ├─ db/
│  ├─ payments/
│  ├─ analytics/
│  ├─ email/
│  ├─ search/
│  ├─ utils/
│  └─ validations/
├─ supabase/
│  ├─ migrations/           # Versioned schema migrations
│  ├─ policies/             # Row-level security policies
│  └─ seed/                 # Local dev seed data
├─ content/
│  ├─ journal/              # File-backed editorial content (pre-CMS)
│  └─ static/
├─ tests/
│  ├─ e2e/                  # Playwright tests
│  ├─ integration/
│  └─ unit/
├─ middleware.ts             # Auth and role-based route protection
├─ env.example
└─ CLAUDE.md                # AI development context file
```

---

## Database Setup

The database lives on Supabase (PostgreSQL). Schema is managed via migrations in `supabase/migrations/`.

### Core Tables

| Table | Purpose |
|---|---|
| `products` | Master product catalog with slug, price, story, and status |
| `product_images` | Ordered gallery images per product |
| `collections` | Curated groupings of products |
| `product_collections` | Many-to-many product ↔ collection mapping |
| `countries` | Origin/inspiration country buckets |
| `categories` | Merchandising and nav groupings |
| `customers` | Buyer and lead profiles |
| `orders` | Paid or pending transactions |
| `order_items` | Line items within each order |
| `inquiries` | Product and consultation lead submissions |
| `reservations` | Time-bound item holds with expiration |
| `journal_posts` | Editorial content and SEO blog posts |

### Key Constraints

- All `slug` fields have **unique indexes**
- Foreign keys enforced on images, orders, order items, and inquiries
- `reservations.expires_at` is required for automatic cleanup logic
- Status fields use constrained enums — not free text
- Orders are created via **webhook confirmation only** — never trust client-side payment state

### Running Migrations

```bash
# Apply all pending migrations to your Supabase project
npx supabase db push

# Create a new migration
npx supabase migration new your_migration_name

# Reset local database and reseed
npx supabase db reset
```

---

## Development Workflow

### Key Conventions

- **TypeScript only** — no plain `.js` files in `app/`, `components/`, or `lib/`
- **Zod** for all form parsing and request body validation
- **Server components by default** — use `"use client"` only when interactivity requires it
- **Server actions** for lightweight mutations (cart, wishlist, newsletter, admin inline edits)
- **Route handlers** for external-facing endpoints (webhooks, checkout, search)
- Slugs must be stable and SEO-safe at creation time

### Scripts

```bash
npm run dev          # Start local dev server
npm run build        # Production build
npm run lint         # ESLint check
npm run type-check   # TypeScript check without emit
npm run test         # Run unit and integration tests
npm run test:e2e     # Run Playwright e2e tests
```

### Branch Strategy

```
main          → production (Vercel auto-deploys)
staging       → pre-production QA
feature/*     → feature branches (open PRs against staging)
fix/*         → bug fixes
```

Every push to a feature branch creates a **Vercel preview deployment** automatically.

---

## API Reference

All public write endpoints live under `/api/`. Read paths are handled by server components and direct database queries.

### Public Routes

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/api/search` | Search catalog by keyword, country, category, price, sort |
| `POST` | `/api/inquiries` | Submit product or consultation inquiry |
| `POST` | `/api/reservations` | Place a reservation hold on an item |
| `POST` | `/api/checkout/session` | Create PayMongo checkout session |
| `POST` | `/api/payments/paymongo/webhook` | Receive and verify payment events |
| `POST` | `/api/newsletter` | Subscribe an email address |

### Admin Routes (authenticated, admin role required)

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/api/admin/products` | List all products |
| `POST` | `/api/admin/products` | Create new product |
| `PATCH` | `/api/admin/products/:id` | Update product details or status |
| `DELETE` | `/api/admin/products/:id` | Soft-delete (archive) a product |
| `GET` | `/api/admin/orders` | List orders filtered by status |
| `PATCH` | `/api/admin/orders/:id` | Update order state (paid → packed → delivered) |
| `GET` | `/api/admin/inquiries` | View and manage lead inbox |

### Security Notes

- Webhook handlers verify the **PayMongo signature header** before processing
- Checkout sessions recalculate order totals **server-side** — client-provided amounts are ignored
- Admin routes are protected by **role-based middleware** in `middleware.ts`
- Public form routes enforce **rate limiting** and basic bot protection

---

## Deployment

The app deploys to **Vercel** from the `main` branch.

### Production Deploy

```bash
# Vercel deploys automatically on push to main.
# To deploy manually:
vercel --prod
```

### Pre-Launch Checklist

- [ ] All production environment variables set in Vercel dashboard and Supabase
- [ ] PayMongo test mode keys replaced with live keys in production environment only
- [ ] `NEXT_PUBLIC_SITE_URL` set to the production domain
- [ ] Image alt text, `<title>`, and canonical URLs reviewed for all core pages
- [ ] `sitemap.ts` generating correct URLs for the production domain
- [ ] Basic accessibility pass complete (navigation, forms, color contrast)
- [ ] GA4, Clarity, and Meta Pixel verified as firing in production
- [ ] Supabase row-level security policies reviewed and active
- [ ] Admin accounts created and verified for staff
- [ ] Backups and monitoring configured in Supabase

---

## AI-Assisted Development

This project includes a `CLAUDE.md` file at the repo root. It is the authoritative context file for AI coding assistants (Claude, Copilot, Cursor, etc.) and contains:

- Brand guardrails and vibe rules
- Full tech stack with rationale
- Engineering conventions and security rules
- Database schema with field-level detail
- Complete API route map
- UX rules for product pages
- MVP milestone definitions
- Post-MVP deferrals (do not build in MVP)

**When working with Claude or any AI assistant on this codebase:**

1. Open `CLAUDE.md` and include it in the context window or attach it to your session
2. Reference it when asking for new components, routes, or schema changes
3. Any suggestion that conflicts with the brand guardrails, TypeScript convention, or security rules in `CLAUDE.md` should be rejected or revised

### Prompt Tips for This Project

- Ask for components in the voice of the brand: *"Create a product card that feels editorial and gallery-like, not marketplace-heavy"*
- Always specify the sales mode when building CTAs: *"This is a one-of-a-kind item — the CTA should be Reserve or Inquire, not Add to Cart"*
- When generating API routes, remind Claude: *"Totals must be recalculated server-side. Use Zod for validation."*
- For admin features: *"This route is admin-only. Apply role-based middleware."*

---

## MVP Milestones

| Milestone | Scope | Status |
|---|---|---|
| M1. Discovery + Design System | Brand direction, sitemap, wireframes, UI kit | ⬜ Not started |
| M2. Platform Foundation | Repo, auth, DB, storage, deployment pipeline | ⬜ Not started |
| M3. Catalog + Story Pages | Homepage, shop, product detail, collections | ⬜ Not started |
| M4. Conversion Workflows | Inquiry, reservation, cart, checkout, webhooks | ⬜ Not started |
| M5. Admin + Content Ops | Product CRUD, image upload, order/inquiry management | ⬜ Not started |
| M6. Launch Hardening | SEO, analytics, QA, monitoring, regression tests | ⬜ Not started |

**Target cadence:** 10 weeks from project kickoff to production launch.

---

## Contributing

1. Branch off `staging` using `feature/your-feature-name`
2. Follow all conventions in `CLAUDE.md` — TypeScript, Zod, server-only secrets
3. Run `npm run lint` and `npm run type-check` before opening a PR
4. All PRs require at least one review before merging to `staging`
5. Merges to `main` require staging to be verified

---

*Great Asian Finds — Furniture with heritage. Spaces with story.*
