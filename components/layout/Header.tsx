'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X, Search, Calendar } from 'lucide-react'

const NAV_LINKS = [
  { href: '/shop', label: 'Shop' },
  { href: '/collections', label: 'Collections' },
  { href: '/countries', label: 'Origins' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'Our Story' },
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
          ? 'bg-parchment/97 backdrop-blur-md shadow-[0_1px_0_0_rgba(61,80,56,0.08)]'
          : 'bg-parchment'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 leading-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/gaf-logo.svg"
              alt="Great Asian Finds"
              className="h-10 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.18em] uppercase font-sans transition-colors duration-200 ${
                  pathname.startsWith(link.href)
                    ? 'text-forest'
                    : 'text-charcoal/50 hover:text-forest'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/schedule"
              className="hidden lg:flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-forest border border-forest/25 px-3.5 py-2 hover:bg-forest hover:text-parchment transition-all duration-300 font-sans"
            >
              <Calendar size={13} strokeWidth={1.5} />
              Visit Showroom
            </Link>
            <button
              className="hidden lg:flex text-charcoal/40 hover:text-forest transition-colors"
              aria-label="Search"
            >
              <Search size={17} strokeWidth={1.5} />
            </button>
            <Link
              href="/cart"
              className="relative text-charcoal/40 hover:text-forest transition-colors"
              aria-label="Cart (0 items)"
            >
              <ShoppingBag size={17} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-forest text-parchment text-[9px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-sans font-medium">
                0
              </span>
            </Link>
            <button
              className="lg:hidden text-charcoal/50 hover:text-forest transition-colors ml-1"
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
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-forest/8 bg-parchment">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.18em] uppercase font-sans transition-colors ${
                  pathname.startsWith(link.href) ? 'text-forest' : 'text-charcoal/60 hover:text-forest'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-forest/8 px-6 py-4 flex flex-col gap-4">
            <Link
              href="/schedule"
              className="flex items-center gap-2 text-forest text-sm font-sans"
            >
              <Calendar size={15} strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.15em] uppercase">Schedule a Visit</span>
            </Link>
            <button className="flex items-center gap-2 text-charcoal/50 text-sm font-sans">
              <Search size={15} strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.15em] uppercase">Search pieces</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
