'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import type { ActiveFilters } from '@/lib/types'

const COUNTRIES = ['Thailand', 'China', 'Korea', 'Indonesia', 'Vietnam', 'Philippines']
const CATEGORIES = ['Seating', 'Lighting', 'Storage', 'Accent', 'Ceramics', 'Textiles']
const AVAILABILITY_OPTIONS = [
  { value: 'in-stock', label: 'In Stock' },
  { value: 'one-of-a-kind', label: 'One of a Kind' },
  { value: 'reserve', label: 'Reserve' },
]
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

interface ShopFiltersProps {
  activeFilters: ActiveFilters
}

export function ShopFilters({ activeFilters }: ShopFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateParam = useCallback(
    (key: string, value: string, multi = false) => {
      const params = new URLSearchParams(searchParams.toString())
      if (multi) {
        const existing = params.getAll(key)
        params.delete(key)
        if (existing.includes(value)) {
          existing.filter((v) => v !== value).forEach((v) => params.append(key, v))
        } else {
          ;[...existing, value].forEach((v) => params.append(key, v))
        }
      } else {
        if (params.get(key) === value) {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams]
  )

  const clearAll = () => router.push(pathname, { scroll: false })

  const hasFilters = !!(
    activeFilters.countries?.length ||
    activeFilters.categories?.length ||
    activeFilters.availability?.length
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-charcoal/10">
        <h3 className="text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal">
          Filter
        </h3>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-[11px] text-warm-wood underline font-sans hover:text-charcoal transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Sort */}
      <FilterGroup label="Sort By">
        {SORT_OPTIONS.map((option) => (
          <FilterButton
            key={option.value}
            label={option.label}
            active={(activeFilters.sort || 'featured') === option.value}
            onClick={() => updateParam('sort', option.value)}
          />
        ))}
      </FilterGroup>

      {/* Country */}
      <FilterGroup label="Country">
        {COUNTRIES.map((country) => (
          <FilterButton
            key={country}
            label={country}
            active={activeFilters.countries?.includes(country) ?? false}
            onClick={() => updateParam('country', country, true)}
          />
        ))}
      </FilterGroup>

      {/* Category */}
      <FilterGroup label="Category">
        {CATEGORIES.map((cat) => (
          <FilterButton
            key={cat}
            label={cat}
            active={activeFilters.categories?.includes(cat) ?? false}
            onClick={() => updateParam('category', cat, true)}
          />
        ))}
      </FilterGroup>

      {/* Availability */}
      <FilterGroup label="Availability">
        {AVAILABILITY_OPTIONS.map((a) => (
          <FilterButton
            key={a.value}
            label={a.label}
            active={activeFilters.availability?.includes(a.value) ?? false}
            onClick={() => updateParam('availability', a.value, true)}
          />
        ))}
      </FilterGroup>
    </div>
  )
}

function FilterGroup({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h4 className="text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal/40 mb-3">
        {label}
      </h4>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-sm font-sans text-left w-full transition-colors duration-150 ${
        active ? 'text-warm-wood' : 'text-charcoal/55 hover:text-warm-wood'
      }`}
    >
      <span
        className={`w-3.5 h-3.5 border flex-shrink-0 flex items-center justify-center transition-colors ${
          active ? 'border-warm-wood bg-warm-wood' : 'border-charcoal/25'
        }`}
      >
        {active && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path
              d="M1 3L3 5L7 1"
              stroke="#FDFAF5"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label}
    </button>
  )
}
