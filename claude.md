# CLAUDE.md — Great Asian Finds

> Developer context file for AI-assisted development on the Great Asian Finds platform.
> This file orients Claude (and any AI coding assistant) to the project's architecture, conventions, and priorities.

---

## Project Overview

**Great Asian Finds** is a premium, story-driven hybrid showroom and ecommerce platform for curated Asian furniture, decor, and statement home pieces. It is a **digital showroom first, online store second** — built to create emotional appeal through story, texture, photography, and curation, while supporting direct purchase, reservations, and inquiry-led sales.

**Business Type:** Curated Asian furniture, decor, and statement home pieces
**Target Market:** Philippines-based storefront with PayMongo as the payment provider

---

## Brand & Design Guardrails

These rules are non-negotiable and should be respected across every UI component, copy suggestion, and design decision.

- **Vibe:** Refined, warm, timeless, story-rich, premium but approachable — never crowded or marketplace-like
- **Motif:** Warm woods, parchment neutrals, jade accents, soft gold, editorial photography, clean negative space
- **Inspiration:** Curated Asian living, artisan heritage, vintage treasures, collected-home interiors, boutique gallery merchandising

**Avoid** visual keywords or patterns that are: loud, crowded, bargain-feeling, flashy, or marketplace-heavy.

**Use** art direction that highlights: wood grain, craftsmanship, silhouette, and room mood.

**Copy tone:** Editorial and story-driven for product descriptions; friction-light for checkout flows.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | Next.js App Router + React + TypeScript |
| Styling | Tailwind CSS + shadcn/ui + Framer Motion |
| Backend | Next.js Route Handlers + Server Actions |
| Database | PostgreSQL on Supabase |
| Auth | Supabase Auth with role-aware access |
| Storage | Supabase Storage (Cloudinary optional later) |
| Payments | PayMongo Checkout API + webhook-driven confirmation |
| Hosting | Vercel |
| Analytics | GA4 + Microsoft Clarity + Meta Pixel |
| Email | Resend or SMTP provider |

---

## Engineering Conventions

Always follow these rules when writing or suggesting code for this project:

- **TypeScript only** across app code, validation, and data-access boundaries — no plain JS
- **Zod** for all request validation and form parsing
- **Server-only secrets** must stay in route handlers and server actions — never in client components
- **Slugs** for products, collections, and editorial posts must be stable and SEO-friendly
- Use **image optimization**, **structured metadata**, and **semantic HTML** by default
- Prefer **server components** for read paths; use client components only when interactivity requires it
- Use **server actions** for lightweight mutations (cart, wishlist, newsletter, admin inline edits)
- Webhook handlers must **verify signatures** before processing payment events
- Totals must be **recalculated server-side** before checkout session creation — never trust the client
- Admin routes must be protected by **role-based middleware**
- Public forms require **rate limiting** and basic bot protection
- Status fields should use **constrained enums** or validated text unions
- Prefer **soft delete** (archived status) over hard deletes on products and orders

---

## Folder Structure

```
great-asian-finds/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ journal/page.tsx
│  │  ├─ journal/[slug]/page.tsx
│  │  ├─ consultation/page.tsx
│  │  └─ contact/page.tsx
│  ├─ shop/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  ├─ collections/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  ├─ countries/[slug]/page.tsx
│  ├─ rooms/[slug]/page.tsx
│  ├─ cart/page.tsx
│  ├─ checkout/page.tsx
│  ├─ account/
│  │  ├─ page.tsx
│  │  ├─ orders/page.tsx
│  │  └─ wishlist/page.tsx
│  ├─ admin/
│  │  ├─ page.tsx
│  │  ├─ products/page.tsx
│  │  ├─ collections/page.tsx
│  │  ├─ orders/page.tsx
│  │  ├─ inquiries/page.tsx
│  │  └─ content/page.tsx
│  ├─ api/
│  │  ├─ checkout/session/route.ts
│  │  ├─ payments/paymongo/webhook/route.ts
│  │  ├─ inquiries/route.ts
│  │  ├─ reservations/route.ts
│  │  ├─ newsletter/route.ts
│  │  └─ search/route.ts
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ sitemap.ts
├─ components/
│  ├─ layout/
│  ├─ home/
│  ├─ shop/
│  ├─ product/
│  ├─ forms/
│  ├─ cart/
│  ├─ account/
│  ├─ admin/
│  └─ shared/
├─ lib/
│  ├─ auth/
│  ├─ db/
│  ├─ payments/
│  ├─ analytics/
│  ├─ email/
│  ├─ search/
│  ├─ cms/
│  ├─ utils/
│  └─ validations/
├─ public/
│  ├─ images/
│  ├─ icons/
│  └─ brand/
├─ supabase/
│  ├─ migrations/
│  ├─ policies/
│  └─ seed/
├─ content/
│  ├─ journal/
│  └─ static/
├─ tests/
│  ├─ e2e/
│  ├─ integration/
│  └─ unit/
├─ middleware.ts
├─ env.example
├─ package.json
└─ README.md
```

**Folder purpose notes:**
- `app/` — route tree, layouts, metadata, and route handlers
- `components/` — reusable, presentation-oriented UI grouped by domain
- `lib/` — business logic, data access, integrations, and validation
- `supabase/` — migrations, row-level security policies, and seed scripts
- `content/` — file-backed journal entries (pre-CMS phase)
- `tests/` — Playwright e2e, integration, and unit tests

---

## Database Schema

### Primary Tables

| Table | Purpose | Key Fields |
|---|---|---|
| `products` | Master product catalog | `id, slug, name, price, availability_status, story, country_id, category_id` |
| `product_images` | Ordered gallery assets | `id, product_id, image_url, sort_order, is_primary` |
| `collections` | Curated product groupings | `id, name, slug, description, is_featured` |
| `product_collections` | Many-to-many mapping | `product_id, collection_id` |
| `countries` | Origin/inspiration buckets | `id, name, slug` |
| `categories` | Merchandising and nav grouping | `id, name, slug` |
| `customers` | Buyer or lead profiles | `id, full_name, email, phone` |
| `orders` | Paid or pending transactions | `id, customer_id, order_status, payment_status, total` |
| `order_items` | Products inside each order | `id, order_id, product_id, quantity, unit_price` |
| `inquiries` | Product or consultation requests | `id, product_id, email, inquiry_type, message` |
| `reservations` | Time-bound item holds | `id, product_id, customer_id, status, expires_at` |
| `journal_posts` | Editorial and SEO content | `id, slug, title, excerpt, published_at` |

### Index & Constraint Rules
- **Unique indexes** on all `slug` fields (products, collections, countries, categories, journal posts)
- **Foreign key enforcement** on product images, orders, order items, and inquiries
- **Status fields** must use constrained enums or validated text unions
- **Reservations** must include `expires_at` for automatic cleanup
- **Order creation** is webhook-driven — never trust client-side payment state

---

## API Route Map

| Method | Path | Purpose | Notes |
|---|---|---|---|
| `GET` | `/api/search` | Catalog and collection search | Params: keyword, country, category, price, sort |
| `POST` | `/api/inquiries` | Create product/consultation inquiry | Zod validation; rate-limit; notify staff |
| `POST` | `/api/reservations` | Create reservation hold | Requires availability check + expiry timestamp |
| `POST` | `/api/checkout/session` | Create PayMongo checkout session | Server-side amount calculation only |
| `POST` | `/api/payments/paymongo/webhook` | Handle payment events | Verify webhook signature; create/update order |
| `POST` | `/api/newsletter` | Add subscriber | Store or forward to email platform |
| `GET` | `/api/admin/products` | Admin product listing | Protected by admin role |
| `POST` | `/api/admin/products` | Create product | Accept metadata and image references |
| `PATCH` | `/api/admin/products/:id` | Update product | Track status changes and featured flags |
| `DELETE` | `/api/admin/products/:id` | Archive/remove product | Prefer soft delete |
| `GET` | `/api/admin/orders` | Admin order queue | Filter by payment and fulfillment status |
| `PATCH` | `/api/admin/orders/:id` | Update order state | States: paid, packed, delivered, refunded |
| `GET` | `/api/admin/inquiries` | Admin lead inbox | Filter by open/closed and inquiry type |

### Server Action Candidates
- Add to cart and update cart quantity
- Submit newsletter forms
- Authenticated wishlist save/remove
- Admin inline edits for featured flags or homepage placement

---

## UX Rules

These are product-level rules that should be respected in all page components:

- Every product page must show **dimensions, material, availability, and delivery guidance above the fold**
- One-of-a-kind items surface urgency through **status badges** — never with cheap sales language
- **Inquiry and reservation CTAs** must remain visible even when checkout is unavailable
- **Filtering must feel instant** on mobile and desktop; preserve filter state in the URL
- Every product page must answer three questions immediately: *What is it? Why is it special? How do I get it?*

---

## Merchandising Dimensions

Treat these as **first-class filtering and browsing dimensions** across the catalog:

- **Country** (Thailand, China, Korea, Indonesia, Vietnam, Philippines, etc.)
- **Category / Style**
- **Material**
- **Room** (Living, Dining, Bedroom, Office, Accent Corner)
- **Availability** (In stock, One of a kind, Reserve, Sold)
- **Price range**

---

## MVP Milestone Plan

| Milestone | Scope | Exit Criteria |
|---|---|---|
| M1. Discovery + Design System | Brand direction, sitemap, wireframes, UI kit | Homepage and product page approved in design |
| M2. Platform Foundation | Repo, auth, DB, storage, deployment | Developers can run locally and deploy to preview |
| M3. Catalog + Story Pages | Homepage, shop listing, product detail, collections | Catalog reads stable on desktop and mobile |
| M4. Conversion Workflows | Inquiry, reservation, cart, checkout, webhooks | Test payments and lead submissions pass end-to-end |
| M5. Admin + Content Ops | Product CRUD, image upload, order/inquiry management | Staff can manage catalog without developer help |
| M6. Launch Hardening | Metadata, sitemap, analytics, monitoring, regression tests | Launch checklist signed off |

### Suggested Cadence (10 Weeks)
- **Weeks 1–2:** Discovery, design system, wireframes, data taxonomy
- **Weeks 3–4:** Repo setup, Supabase schema, auth, storage, deployment pipeline
- **Weeks 5–6:** Homepage, collection pages, shop filters, product detail pages
- **Weeks 7–8:** Inquiry flows, cart, checkout, webhook-driven orders
- **Weeks 9–10:** Admin dashboard, SEO hardening, analytics, testing, launch prep

---

## Launch Checklist

- [ ] All production environment variables configured in Vercel and Supabase
- [ ] Payment test and live modes separated cleanly
- [ ] Image alt text, metadata, and canonical URLs reviewed
- [ ] Basic accessibility pass complete for navigation, forms, and contrast
- [ ] Backups, monitoring, and staff admin access verified

---

## Component Inventory

Reference for what components need to be built:

**Layout & Navigation**
- Header, mobile nav, footer, announcement bar

**Homepage & Editorial**
- Hero banner, editorial split section, featured collection carousel

**Product**
- Product card, product gallery, product metadata panel, status badges

**Catalog**
- Filter sidebar, active filter chips, sort dropdown, pagination / infinite scroll

**Conversion**
- Inquiry form, reservation drawer, consultation lead form

**Commerce**
- Cart drawer, order summary, checkout confirmation panel

**Admin**
- Admin table, product editor form, image uploader, order state badge

---

## Post-MVP Enhancements (Do Not Build in MVP)

These are deferred — do not scope them into early milestones:

- Wishlist and returning customer account enhancements
- Journal/CMS expansion with richer editorial templates
- Trade or interior-designer accounts
- Delivery estimator by location and item size
- Advanced on-site search and recommendations
- Multilingual support for regional expansion

---

## Visual Reference Words

**Use:** collected, heritage, artisan, editorial, warm, refined, tactile, storied, timeless, sculptural

**Avoid:** loud, crowded, bargain, flashy, marketplace-heavy
