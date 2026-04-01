import Link from 'next/link'

const EXPLORE_LINKS = [
  { href: '/shop', label: 'Shop All Pieces' },
  { href: '/collections', label: 'Collections' },
  { href: '/countries', label: 'Browse by Origin' },
  { href: '/rooms', label: 'Browse by Room' },
  { href: '/journal', label: 'The Journal' },
]

const HELP_LINKS = [
  { href: '/about', label: 'Our Story' },
  { href: '/delivery', label: 'Delivery & Shipping' },
  { href: '/schedule', label: 'Schedule a Visit' },
  { href: '/consultation', label: 'Design Consultation' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-forest-dark text-parchment/80 relative">
      <div className="teak-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/gaf-logo.svg"
                alt="Great Asian Finds"
                className="h-16 w-auto brightness-[2.5] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-sm leading-relaxed text-parchment/45 max-w-sm font-sans">
              A curated showroom of Asian furniture, decor, and statement home pieces. Every object
              carries a story — of the craftsmen who shaped it, the tradition it belongs to, and the
              space it will inhabit.
            </p>
            <div className="mt-8 space-y-1">
              <p className="text-xs tracking-[0.15em] uppercase text-parchment/25 font-sans leading-relaxed">
                La Brea, Dona Carmen<br />
                Commonwealth, Quezon City<br />
                Metro Manila, Philippines
              </p>
              <p className="text-xs text-parchment/25 font-sans mt-2">hello@greatasianfinds.com</p>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-parchment/25 font-sans mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-parchment/55 hover:text-parchment transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-parchment/25 font-sans mb-5">
              Help & Info
            </h3>
            <ul className="space-y-3">
              {HELP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-parchment/55 hover:text-parchment transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-parchment/8 pt-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h3 className="font-display text-xl text-parchment mb-1.5">The Edit</h3>
              <p className="text-sm text-parchment/40 font-sans">
                Stories, arrivals, and the craft behind our finds. Delivered occasionally — never
                relentlessly.
              </p>
            </div>
            <form className="flex max-w-sm w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-parchment/6 border border-parchment/12 text-parchment placeholder:text-parchment/20 text-sm px-4 py-3 focus:outline-none focus:border-parchment/30 font-sans transition-colors"
              />
              <button
                type="submit"
                className="bg-aged-gold text-forest-dark text-[11px] tracking-[0.18em] uppercase px-5 py-3 hover:bg-teak-light transition-colors font-sans font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-parchment/20 font-sans">
          <p>&copy; {new Date().getFullYear()} Great Asian Finds. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-parchment/45 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-parchment/45 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
