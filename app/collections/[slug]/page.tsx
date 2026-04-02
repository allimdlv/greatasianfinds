import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { COLLECTIONS, getCollectionBySlug } from '@/lib/data/collections'
import { PRODUCTS } from '@/lib/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { ArrowLeft } from 'lucide-react'

interface CollectionPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const collection = getCollectionBySlug(params.slug)
  if (!collection) return {}
  return {
    title: collection.name,
    description: collection.description,
  }
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const collection = getCollectionBySlug(params.slug)
  if (!collection) notFound()

  const products = PRODUCTS.filter((p) => collection.product_ids.includes(p.id))

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${collection.hero_image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-charcoal/25 to-charcoal/10" />

        {/* Back nav */}
        <div className="relative pt-6 px-6 lg:px-10">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-parchment/55 text-[11px] tracking-[0.18em] uppercase font-sans hover:text-parchment transition-colors"
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            All Collections
          </Link>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-10 pb-10 lg:pb-14 max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-celadon/70 font-sans mb-3">
            Collection
          </p>
          <h1 className="font-display text-4xl lg:text-6xl text-parchment mb-3 leading-tight">
            {collection.name}
          </h1>
          <p className="font-serif text-xl text-parchment/55 italic">{collection.tagline}</p>
        </div>
      </div>

      {/* Story */}
      <div className="bg-cream py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-serif text-xl lg:text-2xl text-warm-gray leading-relaxed italic">
            &ldquo;{collection.story}&rdquo;
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="flex items-center justify-between py-8 border-b border-forest/8 mb-10">
          <h2 className="font-display text-xl lg:text-2xl text-charcoal">
            {products.length} {products.length === 1 ? 'Piece' : 'Pieces'} in This Collection
          </h2>
          <Link
            href="/shop"
            className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 hover:text-forest transition-colors font-sans"
          >
            Shop All
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-charcoal/25">
              No pieces currently in this collection
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
