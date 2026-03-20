'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'

const NAV_LINKS = [
  { href: '/shop', label: 'Shop' },
  { href: '/collections', label: 'Collections' },
  { href: '/countries', label: 'Countries' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/96 backdrop-blur-md shadow-[0_1px_0_0_rgba(44,44,44,0.08)]'
          : 'bg-cream'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start leading-none gap-0.5">
            <span className="font-serif text-xl lg:text-[1.35rem] text-charcoal tracking-wide group-hover:text-warm-wood transition-colors duration-300">
              Great Asian Finds
            </span>
            <span className="text-[9px] tracking-[0.28em] uppercase text-muted font-sans">
              Heritage · Story · Home
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.2em] uppercase font-sans transition-colors duration-200 ${
                  pathname.startsWith(link.href)
                    ? 'text-warm-wood'
                    : 'text-charcoal/60 hover:text-warm-wood'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="hidden lg:flex text-charcoal/60 hover:text-warm-wood transition-colors"
              aria-label="Search"
            >
              <Search size={17} strokeWidth={1.5} />
            </button>
            <Link
              href="/cart"
              className="relative text-charcoal/60 hover:text-warm-wood transition-colors"
              aria-label="Cart (0 items)"
            >
              <ShoppingBag size={17} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-jade text-cream text-[9px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-sans font-medium">
                0
              </span>
            </Link>
            <button
              className="lg:hidden text-charcoal/60 hover:text-warm-wood transition-colors ml-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-charcoal/8 bg-cream">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase text-charcoal font-sans hover:text-warm-wood transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-charcoal/8 px-6 py-4">
            <button className="flex items-center gap-2 text-charcoal/60 text-sm font-sans">
              <Search size={15} strokeWidth={1.5} />
              <span>Search pieces</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
