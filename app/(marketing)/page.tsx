import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroBanner } from '@/components/home/HeroBanner'
import { FeaturedCollections } from '@/components/home/FeaturedCollections'
import { EditorialSplit } from '@/components/home/EditorialSplit'
import { CountryGrid } from '@/components/home/CountryGrid'
import { ProductCard } from '@/components/product/ProductCard'
import { getFeaturedProducts } from '@/lib/data/products'

export const metadata: Metadata = {
  title: 'Great Asian Finds — Furniture with heritage. Spaces with story.',
}

const JOURNAL_POSTS = [
  {
    slug: 'the-art-of-celadon',
    title: "The Art of Celadon: Korea's Jade-Green Legacy",
    excerpt:
      'How a thousand-year-old glazing technique became one of East Asia\'s most enduring art forms, and what it asks of the spaces that hold it.',
    published_at: 'November 2024',
    cover_image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700&q=80',
    read_time: '6 min read',
  },
  {
    slug: 'lacquer-of-hoi-an',
    title: 'Lacquer of Hội An: Seventeen Coats of Patience',
    excerpt:
      'Inside the workshops where time moves differently and depth is measured in months, not millimetres.',
    published_at: 'October 2024',
    cover_image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=700&q=80',
    read_time: '8 min read',
  },
  {
    slug: 'teak-and-the-north',
    title: "Teak and the North: Chiang Mai's Living Craft Heritage",
    excerpt:
      'A journey through the workshops of northern Thailand, where the wood still speaks and the craftsmen still listen.',
    published_at: 'September 2024',
    cover_image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80',
    read_time: '5 min read',
  },
]

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4)

  return (
    <>
      <HeroBanner />

      {/* Featured products */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-warm-wood font-sans mb-2">
                New Arrivals
              </p>
              <h2 className="font-serif text-3xl lg:text-5xl text-charcoal">Featured Pieces</h2>
            </div>
            <Link
              href="/shop"
              className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-charcoal/50 hover:text-warm-wood transition-colors font-sans"
            >
              View All <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center lg:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-charcoal/60 hover:text-warm-wood transition-colors font-sans"
            >
              View All Pieces <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <FeaturedCollections />
      <EditorialSplit />
      <CountryGrid />

      {/* Journal */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-warm-wood font-sans mb-2">
                The Edit
              </p>
              <h2 className="font-serif text-3xl lg:text-5xl text-charcoal">
                Stories & Craft
              </h2>
            </div>
            <Link
              href="/journal"
              className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-charcoal/50 hover:text-warm-wood transition-colors font-sans"
            >
              The Journal <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {JOURNAL_POSTS.map((post) => (
              <Link key={post.slug} href={`/journal/${post.slug}`} className="group">
                <div className="overflow-hidden aspect-[16/10] mb-5">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url(${post.cover_image})` }}
                  />
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal/35 font-sans mb-2">
                  {post.published_at}&nbsp;&nbsp;·&nbsp;&nbsp;{post.read_time}
                </p>
                <h3 className="font-serif text-xl lg:text-[1.3rem] text-charcoal group-hover:text-warm-wood transition-colors duration-300 leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-charcoal/55 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-24 bg-warm-wood">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-cream/50 font-sans mb-3">
              Stay close
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl text-cream mb-4">The Edit</h2>
            <p className="text-cream/65 text-base max-w-md mx-auto mb-9 font-sans leading-relaxed">
              Stories of craft and origin. Newly arrived pieces. Seasonal curation. Delivered
              occasionally — never relentlessly.
            </p>
            <form className="flex flex-col sm:flex-row gap-0 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-cream/10 border border-cream/25 text-cream placeholder:text-cream/35 text-sm px-5 py-3.5 focus:outline-none focus:border-cream/55 font-sans transition-colors"
              />
              <button
                type="submit"
                className="bg-cream text-charcoal text-[11px] tracking-[0.2em] uppercase px-6 py-3.5 hover:bg-soft-gold transition-colors font-sans font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
