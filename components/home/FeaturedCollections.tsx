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
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-wood font-sans mb-2">
              Curated Narratives
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl text-charcoal">
              Featured Collections
            </h2>
          </div>
          <Link
            href="/collections"
            className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-charcoal/50 hover:text-warm-wood transition-colors font-sans"
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
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-cream">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${collection.hero_image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-500" />

                {/* Piece count pill */}
                <div className="absolute top-4 left-4">
                  <span className="bg-cream/90 text-charcoal text-[10px] tracking-[0.2em] uppercase font-sans px-3 py-1">
                    {pieceCount} {pieceCount === 1 ? 'piece' : 'pieces'}
                  </span>
                </div>

                {/* Preview thumbnails */}
                {previewProducts.length > 0 && (
                  <div className="absolute bottom-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {previewProducts.map((p) => (
                      <div
                        key={p.id}
                        className="w-10 h-10 bg-cover bg-center border border-cream/40"
                        style={{ backgroundImage: `url(${p.images[0]})` }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Text */}
              <h3 className="font-serif text-xl lg:text-2xl text-charcoal group-hover:text-warm-wood transition-colors duration-300 leading-snug">
                {collection.name}
              </h3>
              <p className="text-sm text-charcoal/50 font-sans italic mt-1 leading-snug">
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
          <div className="aspect-[3/4] bg-parchment border border-charcoal/10 flex flex-col items-center justify-center mb-4 group-hover:border-warm-wood transition-colors duration-300">
            <div className="w-10 h-px bg-charcoal/30 mb-4 group-hover:bg-warm-wood transition-colors" />
            <p className="font-serif text-xl text-charcoal/50 group-hover:text-warm-wood transition-colors">
              All Collections
            </p>
            <div className="w-10 h-px bg-charcoal/30 mt-4 group-hover:bg-warm-wood transition-colors" />
          </div>
          <p className="font-serif text-xl text-charcoal/40">View the full archive</p>
        </Link>
      </div>
    </section>
  )
}
