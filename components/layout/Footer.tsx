import Link from 'next/link'
import Image from 'next/image'

const EXPLORE_LINKS = [
  { href: '/shop', label: 'Shop All Pieces' },
  { href: '/collections', label: 'Collections' },
  { href: '/countries', label: 'Browse by Country' },
  { href: '/rooms', label: 'Browse by Room' },
  { href: '/journal', label: 'The Journal' },
]

const HELP_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/delivery', label: 'Delivery & Shipping' },
  { href: '/reservations', label: 'Reservations' },
  { href: '/consultation', label: 'Book a Consultation' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 relative">
      {/* Teak divider at top */}
      <div className="teak-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <Image
                src="/brand/gaf-logo.png"
                alt="Great Asian Finds"
                width={44}
                height={44}
                className="h-11 w-auto brightness-[1.8] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="font-serif text-xl text-cream tracking-wide group-hover:text-soft-gold transition-colors duration-300">
                Great Asian Finds
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/50 max-w-sm font-sans">
              A curated showroom of Asian furniture, decor, and statement home pieces. Every object
              carries a story — of the craftsmen who made it, the tradition it belongs to, and the
              space it will inhabit.
            </p>
            <div className="mt-8 space-y-1">
              <p className="text-xs tracking-[0.2em] uppercase text-cream/30 font-sans">
                La Brea, Dona Carmen
                Commonwealth, Quezon City
                Metro Manila, Philippines
              </p>
              <p className="text-xs text-cream/30 font-sans">hello@greatasianfinds.com</p>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-cream/30 font-sans mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-cream/30 font-sans mb-5">
              Help & Info
            </h3>
            <ul className="space-y-3">
              {HELP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-cream/10 pt-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h3 className="font-serif text-xl text-cream mb-1.5">The Edit</h3>
              <p className="text-sm text-cream/50 font-sans">
                Stories, arrivals, and the craft behind our finds. Delivered occasionally — never
                relentlessly.
              </p>
            </div>
            <form className="flex max-w-sm w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-cream/8 border border-cream/15 text-cream placeholder:text-cream/25 text-sm px-4 py-3 focus:outline-none focus:border-cream/35 font-sans transition-colors"
              />
              <button
                type="submit"
                className="bg-soft-gold text-charcoal text-[11px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-warm-wood hover:text-cream transition-colors font-sans font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-cream/25 font-sans">
          <p>&copy; {new Date().getFullYear()} Great Asian Finds. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream/50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
