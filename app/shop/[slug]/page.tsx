import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PRODUCTS, getProductBySlug } from '@/lib/data/products'
import { ProductGallery } from '@/components/product/ProductGallery'
import { StatusBadge } from '@/components/product/StatusBadge'
import { ProductCard } from '@/components/product/ProductCard'
import { ProductActions } from '@/components/product/ProductActions'
import { MessageSquare, Calendar, ShoppingBag, Eye } from 'lucide-react'

const COUNTRY_FLAGS: Record<string, string> = {
  Thailand: '\u{1F1F9}\u{1F1ED}',
  China: '\u{1F1E8}\u{1F1F3}',
  Korea: '\u{1F1F0}\u{1F1F7}',
  Indonesia: '\u{1F1EE}\u{1F1E9}',
  Vietnam: '\u{1F1FB}\u{1F1F3}',
  Philippines: '\u{1F1F5}\u{1F1ED}',
}

function formatPrice(price: number): string {
  return `\u20B1${price.toLocaleString('en-PH')}`
}

interface ProductPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.story.slice(0, 160),
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = PRODUCTS.filter(
    (p) => p.id !== product.id && p.country === product.country
  ).slice(0, 4)

  const canAddToCart = product.availability_status === 'in-stock'
  const canReserve =
    product.availability_status === 'one-of-a-kind' ||
    product.availability_status === 'reserve'
  const isSold = product.availability_status === 'sold'

  const hasDimensions = Object.values(product.dimensions).some(Boolean)

  return (
    <div className="min-h-screen bg-parchment">
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-charcoal/8 px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[11px] font-sans text-charcoal/40">
            <Link href="/shop" className="hover:text-warm-wood transition-colors">
              Shop
            </Link>
            <span>/</span>
            <Link
              href={`/countries/${product.country.toLowerCase()}`}
              className="hover:text-warm-wood transition-colors"
            >
              {product.country}
            </Link>
            <span>/</span>
            <span className="text-charcoal/70">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main product layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product details */}
          <div className="flex flex-col">
            {/* Status */}
            <div className="mb-4">
              <StatusBadge status={product.availability_status} />
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl lg:text-[2.4rem] text-charcoal leading-tight mb-3">
              {product.name}
            </h1>

            {/* Origin line */}
            <p className="text-sm text-charcoal/45 font-sans mb-5 flex items-center gap-1.5">
              <span>{COUNTRY_FLAGS[product.country]}</span>
              <span>{product.country}</span>
              <span className="text-charcoal/25">&middot;</span>
              <span>{product.material}</span>
            </p>

            {/* Price */}
            <p className="font-serif text-2xl lg:text-[1.8rem] text-charcoal mb-8">
              {formatPrice(product.price)}
            </p>

            {/* CTAs — always visible */}
            <div className="space-y-2.5 mb-4">
              {canAddToCart && (
                <button className="w-full flex items-center justify-center gap-2 bg-charcoal text-cream text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-warm-wood transition-colors duration-300 font-sans font-medium">
                  <ShoppingBag size={14} strokeWidth={1.5} />
                  Add to Cart
                </button>
              )}
              {canReserve && (
                <button className="w-full flex items-center justify-center gap-2 bg-soft-gold text-charcoal text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-warm-wood hover:text-cream transition-colors duration-300 font-sans font-medium">
                  <Calendar size={14} strokeWidth={1.5} />
                  Reserve This Piece
                </button>
              )}
              {isSold && (
                <div className="w-full flex items-center justify-center bg-charcoal/5 text-charcoal/30 text-[11px] tracking-[0.2em] uppercase py-4 font-sans">
                  This Piece Has Found Its Home
                </div>
              )}
              {/* Inquiry — always visible */}
              <button className="w-full flex items-center justify-center gap-2 border border-charcoal text-charcoal text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-charcoal hover:text-cream transition-colors duration-300 font-sans">
                <MessageSquare size={14} strokeWidth={1.5} />
                Make an Inquiry
              </button>
            </div>

            {/* Schedule a Viewing — client component */}
            <ProductActions productName={product.name} />

            {/* Delivery note */}
            <p className="text-[11px] text-charcoal/35 font-sans leading-relaxed mb-8 mt-4">
              Free white-glove delivery in Metro Manila for orders above {'\u20B1'}50,000.
              Provincial and international shipping available on inquiry.
            </p>

            {/* Divider */}
            <div className="teak-divider mb-8" />

            <div className="pt-4 mb-8">
              {/* The Story */}
              <h3 className="font-serif text-lg text-charcoal mb-3">The Story</h3>
              <p className="text-charcoal/65 leading-relaxed font-sans text-[0.9rem]">
                {product.story}
              </p>
            </div>

            {/* Details grid */}
            {hasDimensions && (
              <>
                <div className="teak-divider mb-8" />
                <div className="pt-4">
                  <h3 className="font-serif text-lg text-charcoal mb-5">Details</h3>
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-sans">
                    <div>
                      <dt className="text-[10px] tracking-[0.2em] uppercase text-charcoal/35 mb-0.5">
                        Material
                      </dt>
                      <dd className="text-charcoal/75">{product.material}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] tracking-[0.2em] uppercase text-charcoal/35 mb-0.5">
                        Origin
                      </dt>
                      <dd className="text-charcoal/75">{product.country}</dd>
                    </div>
                    {product.dimensions.width && (
                      <div>
                        <dt className="text-[10px] tracking-[0.2em] uppercase text-charcoal/35 mb-0.5">
                          Width
                        </dt>
                        <dd className="text-charcoal/75">{product.dimensions.width}</dd>
                      </div>
                    )}
                    {product.dimensions.height && (
                      <div>
                        <dt className="text-[10px] tracking-[0.2em] uppercase text-charcoal/35 mb-0.5">
                          Height
                        </dt>
                        <dd className="text-charcoal/75">{product.dimensions.height}</dd>
                      </div>
                    )}
                    {product.dimensions.depth && (
                      <div>
                        <dt className="text-[10px] tracking-[0.2em] uppercase text-charcoal/35 mb-0.5">
                          Depth
                        </dt>
                        <dd className="text-charcoal/75">{product.dimensions.depth}</dd>
                      </div>
                    )}
                    {product.dimensions.diameter && (
                      <div>
                        <dt className="text-[10px] tracking-[0.2em] uppercase text-charcoal/35 mb-0.5">
                          Diameter
                        </dt>
                        <dd className="text-charcoal/75">{product.dimensions.diameter}</dd>
                      </div>
                    )}
                    <div className="col-span-2">
                      <dt className="text-[10px] tracking-[0.2em] uppercase text-charcoal/35 mb-0.5">
                        Rooms
                      </dt>
                      <dd className="text-charcoal/75">{product.room.join(', ')}</dd>
                    </div>
                  </dl>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-cream teak-bg py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="font-serif text-2xl lg:text-3xl text-charcoal mb-10">
              More from {product.country}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
