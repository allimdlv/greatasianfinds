'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function HeroBanner() {
  return (
    <section className="relative h-[92vh] min-h-[580px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&q=85)',
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      {/* Teak wood grain overlay */}
      <div className="absolute inset-0 teak-grain-strong opacity-50" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full z-10">
        {/* Logo watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/2 right-8 lg:right-16 -translate-y-1/2 pointer-events-none"
        >
          <Image
            src="/brand/gaf-logo.png"
            alt=""
            width={400}
            height={400}
            className="w-48 lg:w-80 h-auto brightness-[3] opacity-30"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block text-cream/60 text-[10px] tracking-[0.35em] uppercase font-sans"
          >
            New Arrivals — Spring Collection 2024
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-serif text-4xl sm:text-5xl lg:text-[5.5rem] text-cream leading-[1.05] mb-6 max-w-3xl"
        >
          Furniture with heritage.
          <br />
          <em className="text-soft-gold font-light">Spaces with story.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-cream/70 text-base lg:text-lg max-w-md leading-relaxed font-sans mb-10"
        >
          Curated pieces from Thailand, China, Korea, Indonesia, Vietnam, and the Philippines —
          each chosen for its craft, its narrative, and its ability to make a room feel
          genuinely lived-in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-cream text-charcoal text-[11px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-soft-gold transition-colors duration-300 font-sans font-medium"
          >
            Explore the Collection
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center border border-cream/40 text-cream text-[11px] tracking-[0.25em] uppercase px-8 py-4 hover:border-cream hover:bg-cream/10 transition-colors duration-300 font-sans"
          >
            Browse by Story
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
        <div className="w-px h-12 bg-cream/30 animate-[scroll-line_2s_ease-in-out_infinite]" />
        <span className="text-cream/30 text-[9px] tracking-[0.3em] uppercase font-sans">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
