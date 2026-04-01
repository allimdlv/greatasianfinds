import { Suspense } from 'react'
import type { Metadata } from 'next'
import { PRODUCTS } from '@/lib/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { ShopFilters } from '@/components/shop/ShopFilters'
import type { Country, Category, AvailabilityStatus, ActiveFilters } from '@/lib/types'
import { SlidersHorizontal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shop All Pieces',
  description:
    'Browse our curated catalog of Asian furniture, lighting, ceramics, and decor. Filter by country, category, room, and availability.',
}

interface ShopPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

function toArray<T>(val: string | string[] | undefined): T[] | undefined {
  if (!val) return undefined
  return (Array.isArray(val) ? val : [val]) as T[]
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  const countries = toArray<Country>(searchParams.country)
  const categories = toArray<Category>(searchParams.category)
  const availability = toArray<AvailabilityStatus>(searchParams.availability)
  const sort = (searchParams.sort as string) || 'featured'
  const priceMax = searchParams.price_max ? Number(searchParams.price_max) : undefined

  let filtered = [...PRODUCTS]

  if (countries?.length) {
    filtered = filtered.filter((p) => countries.includes(p.country))
  }
  if (categories?.length) {
    filtered = filtered.filter((p) => categories.includes(p.category))
  }
  if (availability?.length) {
    filtered = filtered.filter((p) => availability.includes(p.availability_status))
  }
  if (priceMax) {
    filtered = filtered.filter((p) => p.price <= priceMax)
  }

  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    default:
      filtered.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0))
  }

  const activeFilters: ActiveFilters = {
    countries: countries as string[] | undefined,
    categories: categories as string[] | undefined,
    availability: availability as string[] | undefined,
    sort,
    priceMax,
  }

  const hasActiveFilters = !!(countries?.length || categories?.length || availability?.length)

  return (
    <div className="min-h-screen bg-parchment">
      {/* Page header */}
      <div className="bg-cream border-b border-forest/6 py-12 lg:py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-forest font-sans mb-2">
            The Collection
          </p>
          <h1 className="font-display text-4xl lg:text-6xl text-charcoal">Shop All Pieces</h1>
          <p className="text-warm-gray font-sans mt-3 text-sm">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} &middot;{' '}
            {hasActiveFilters ? 'Filtered results' : 'Sourced from across Asia'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex gap-14">
          {/* Filter sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0 pt-1">
            <Suspense fallback={<div className="animate-pulse h-96 bg-clay" />}>
              <ShopFilters activeFilters={activeFilters} />
            </Suspense>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter bar */}
            <div className="lg:hidden flex items-center justify-between mb-6 pb-5 border-b border-forest/8">
              <span className="text-sm text-warm-gray font-sans">
                {filtered.length} pieces
              </span>
              <button className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-sans text-charcoal">
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter & Sort
              </button>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-display text-2xl text-charcoal/30">No pieces found</p>
                <p className="text-sm text-warm-gray/50 font-sans mt-2">
                  Try adjusting your filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
