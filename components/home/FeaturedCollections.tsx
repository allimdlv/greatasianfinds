import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedCollections } from '@/lib/data/collections'
import { PRODUCTS } from '@/lib/data/products'

export function FeaturedCollections() {
  const collections = getFeaturedCollections()

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-forest font-sans mb-2">
              Curated Narratives
            </p>
            <h2 className="font-display text-3xl lg:text-5xl text-charcoal">
              Featured Collections
            </h2>
          </div>
          <Link
            href="/collections"
            className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-charcoal/40 hover:text-forest transition-colors font-sans"
          >
            View All <ArrowRight size={13} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Horizontal scroll rail */}
      <div
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6 lg:px-10 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {collections.map((collection) => {
          const pieceCount = collection.product_ids.length
          const previewProducts = PRODUCTS.filter((p) =>
            collection.product_ids.slice(0, 2).includes(p.id)
          )

          return (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="flex-shrink-0 w-[260px] sm:w-[320px] lg:w-[380px] group"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-clay">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${collection.hero_image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-forest-dark/5 group-hover:bg-transparent transition-colors duration-500" />

                {/* Piece count pill */}
                <div className="absolute top-4 left-4">
                  <span className="bg-parchment/90 text-forest text-[10px] tracking-[0.18em] uppercase font-sans px-3 py-1">
                    {pieceCount} {pieceCount === 1 ? 'piece' : 'pieces'}
                  </span>
                </div>

                {/* Preview thumbnails */}
                {previewProducts.length > 0 && (
                  <div className="absolute bottom-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {previewProducts.map((p) => (
                      <div
                        key={p.id}
                        className="w-10 h-10 bg-cover bg-center border border-parchment/40"
                        style={{ backgroundImage: `url(${p.images[0]})` }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Text */}
              <h3 className="font-display text-xl lg:text-2xl text-charcoal group-hover:text-forest transition-colors duration-300 leading-snug">
                {collection.name}
              </h3>
              <p className="text-sm text-warm-gray font-serif italic mt-1 leading-snug">
                {collection.tagline}
              </p>
            </Link>
          )
        })}

        {/* "All Collections" card */}
        <Link
          href="/collections"
          className="flex-shrink-0 w-[260px] sm:w-[320px] lg:w-[380px] group"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div className="aspect-[3/4] bg-cream border border-forest/8 flex flex-col items-center justify-center mb-4 group-hover:border-forest/25 transition-colors duration-300">
            <div className="w-10 h-px bg-forest/20 mb-4 group-hover:bg-forest/40 transition-colors" />
            <p className="font-display text-xl text-charcoal/40 group-hover:text-forest transition-colors">
              All Collections
            </p>
            <div className="w-10 h-px bg-forest/20 mt-4 group-hover:bg-forest/40 transition-colors" />
          </div>
          <p className="font-serif text-lg text-charcoal/35 italic">View the full archive</p>
        </Link>
      </div>
    </section>
  )
}
