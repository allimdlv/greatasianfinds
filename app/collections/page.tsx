import type { Metadata } from 'next'
import Link from 'next/link'
import { COLLECTIONS } from '@/lib/data/collections'

export const metadata: Metadata = {
  title: 'Collections',
  description:
    'Browse our curated collections — each one a story of material, origin, and a particular way of seeing the home.',
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-cream border-b border-charcoal/8 py-12 lg:py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-warm-wood font-sans mb-2">
            Curated Narratives
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl text-charcoal">Collections</h1>
          <p className="text-charcoal/50 font-sans mt-3 text-sm max-w-lg leading-relaxed">
            Each collection is a story — of material, of origin, of a particular way of seeing
            the home.
          </p>
        </div>
      </div>

      {/* Collections grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="space-y-14 lg:space-y-20">
          {COLLECTIONS.map((collection, i) => {
            const isWide = i % 3 === 0 // Every 3rd item is featured wide
            return (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group block"
              >
                <div
                  className={`grid grid-cols-1 gap-8 items-center ${
                    isWide ? '' : 'lg:grid-cols-2 lg:gap-14'
                  } ${!isWide && i % 2 === 0 ? '' : !isWide ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isWide ? 'aspect-[21/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url(${collection.hero_image})` }}
                    />
                    <div className="absolute inset-0 bg-charcoal/25 group-hover:bg-charcoal/15 transition-colors duration-500" />
                    {/* Piece count */}
                    <div className="absolute bottom-5 left-5">
                      <span className="bg-cream/90 text-charcoal text-[10px] tracking-[0.2em] uppercase font-sans px-3 py-1.5">
                        {collection.product_ids.length} pieces
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={isWide ? 'max-w-2xl' : ''}>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-warm-wood font-sans mb-3">
                      Collection
                    </p>
                    <h2 className="font-serif text-2xl lg:text-4xl text-charcoal group-hover:text-warm-wood transition-colors duration-300 mb-2 leading-tight">
                      {collection.name}
                    </h2>
                    <p className="font-serif text-lg text-charcoal/45 italic mb-5 leading-snug">
                      {collection.tagline}
                    </p>
                    <p className="text-sm text-charcoal/55 font-sans leading-relaxed max-w-md">
                      {collection.description}
                    </p>
                    <div className="mt-6 group/link flex items-center gap-3">
                      <span className="w-6 h-px bg-charcoal group-hover:bg-warm-wood transition-colors duration-300 group-hover/link:w-10 transition-all" />
                      <span className="text-[11px] tracking-[0.2em] uppercase font-sans text-charcoal/60 group-hover:text-warm-wood transition-colors duration-300">
                        Explore collection
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
