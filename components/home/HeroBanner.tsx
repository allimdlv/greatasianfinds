'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function HeroBanner() {
  return (
    <section className="relative h-[94vh] min-h-[600px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&q=85)',
        }}
      />

      {/* Layered overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/35 to-charcoal/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/15" />
      <div className="absolute inset-0 teak-grain-strong opacity-30" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full z-10">
        {/* Logo watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2.5, delay: 0.8 }}
          className="absolute top-1/2 right-8 lg:right-16 -translate-y-1/2 pointer-events-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/gaf-logo.svg"
            alt=""
            className="w-48 lg:w-72 h-auto brightness-[4] opacity-40"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-5"
        >
          <span className="inline-block text-parchment/50 text-[10px] tracking-[0.35em] uppercase font-sans">
            Curated Asian Furniture & Decor
          </span>
        </motion.div>

        {/* DM Serif Display headline — high contrast against organic imagery */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] text-parchment leading-[1.05] mb-6 max-w-3xl"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
        >
          Furniture with heritage.
          <br />
          <em className="text-celadon italic">Spaces with story.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-parchment/65 text-base lg:text-lg max-w-md leading-relaxed font-sans mb-10"
        >
          Curated pieces from Thailand, China, Korea, Indonesia, Vietnam, and the Philippines —
          each chosen for its craft, its narrative, and its ability to transform a space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-parchment text-forest text-[11px] tracking-[0.22em] uppercase px-8 py-4 hover:bg-celadon hover:text-parchment transition-all duration-300 font-sans font-medium"
          >
            Explore the Collection
          </Link>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center border border-parchment/35 text-parchment text-[11px] tracking-[0.22em] uppercase px-8 py-4 hover:border-celadon hover:text-celadon transition-all duration-300 font-sans"
          >
            Schedule a Viewing
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-3 z-10"
      >
        <div className="w-px h-12 bg-parchment/25 animate-scroll-line" />
        <span className="text-parchment/25 text-[9px] tracking-[0.3em] uppercase font-sans">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
