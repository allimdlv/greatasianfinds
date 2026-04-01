import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react'
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
    title: 'Lacquer of H\u1ed9i An: Seventeen Coats of Patience',
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

      {/* Featured Products */}
      <section className="py-20 lg:py-28 bg-cream teak-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-forest font-sans mb-2">
                New Arrivals
              </p>
              <h2 className="font-display text-3xl lg:text-5xl text-charcoal">Featured Pieces</h2>
            </div>
            <Link
              href="/shop"
              className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-charcoal/40 hover:text-forest transition-colors font-sans"
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
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-charcoal/50 hover:text-forest transition-colors font-sans"
            >
              View All Pieces <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <FeaturedCollections />
      <EditorialSplit />

      {/* ─── Schedule a Viewing CTA ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-forest-dark/75" />
        <div className="absolute inset-0 teak-grain-strong opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-celadon font-sans mb-4">
                Experience in Person
              </p>
              <h2 className="font-display text-3xl lg:text-5xl text-parchment leading-[1.1] mb-6">
                See the craft up close.
                <br />
                <em className="font-serif italic text-celadon/80">Feel the story.</em>
              </h2>
              <p className="text-parchment/55 font-sans text-[0.9375rem] leading-relaxed max-w-lg mb-8">
                Photographs capture form, but only your hands can read the grain. Schedule a private
                viewing at our showroom to experience the weight, the finish, and the presence of each
                piece before it becomes part of your home.
              </p>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2.5 bg-parchment text-forest text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-celadon hover:text-parchment transition-all duration-300 font-sans font-medium"
              >
                <Calendar size={15} strokeWidth={1.5} />
                Schedule a Viewing
              </Link>
            </div>

            {/* Info card */}
            <div className="bg-parchment/8 border border-parchment/12 backdrop-blur-sm p-8 lg:p-10">
              <h3 className="font-display text-xl text-parchment mb-6">Showroom Details</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={16} strokeWidth={1.5} className="text-celadon mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-sans text-parchment/80">
                      La Brea, Dona Carmen
                    </p>
                    <p className="text-sm font-sans text-parchment/80">
                      Commonwealth, Quezon City
                    </p>
                    <p className="text-xs text-parchment/40 font-sans mt-0.5">
                      Metro Manila, Philippines
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} strokeWidth={1.5} className="text-celadon mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-sans text-parchment/80">
                      Monday – Saturday
                    </p>
                    <p className="text-sm font-sans text-parchment/80">
                      10:00 AM – 5:00 PM
                    </p>
                    <p className="text-xs text-parchment/40 font-sans mt-0.5">
                      By appointment only
                    </p>
                  </div>
                </div>
                <div className="border-t border-parchment/10 pt-5">
                  <p className="text-xs text-parchment/35 font-sans leading-relaxed">
                    Private viewings include guided walk-throughs of available pieces,
                    material samples, and personalized styling consultation — complimentary,
                    no purchase required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CountryGrid />

      <div className="teak-divider" />

      {/* Journal */}
      <section className="py-20 lg:py-28 bg-cream teak-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-forest font-sans mb-2">
                The Edit
              </p>
              <h2 className="font-display text-3xl lg:text-5xl text-charcoal">
                Stories & Craft
              </h2>
            </div>
            <Link
              href="/journal"
              className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-charcoal/40 hover:text-forest transition-colors font-sans"
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
                <p className="text-[10px] tracking-[0.18em] uppercase text-warm-gray/60 font-sans mb-2">
                  {post.published_at}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{post.read_time}
                </p>
                <h3 className="font-display text-xl lg:text-[1.3rem] text-charcoal group-hover:text-forest transition-colors duration-300 leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-24 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-celadon/60 font-sans mb-3">
              Stay close
            </p>
            <h2 className="font-display text-3xl lg:text-5xl text-parchment mb-4">The Edit</h2>
            <p className="text-parchment/50 text-base max-w-md mx-auto mb-9 font-sans leading-relaxed">
              Stories of craft and origin. Newly arrived pieces. Seasonal curation. Delivered
              occasionally — never relentlessly.
            </p>
            <form className="flex flex-col sm:flex-row gap-0 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-parchment/8 border border-parchment/15 text-parchment placeholder:text-parchment/25 text-sm px-5 py-3.5 focus:outline-none focus:border-parchment/40 font-sans transition-colors"
              />
              <button
                type="submit"
                className="bg-aged-gold text-forest-dark text-[11px] tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-celadon transition-colors font-sans font-medium whitespace-nowrap"
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
