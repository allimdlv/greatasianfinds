import Link from 'next/link'
import type { Product } from '@/lib/types'
import { StatusBadge } from './StatusBadge'

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

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product }: ProductCardProps) {
  const isSold = product.availability_status === 'sold'

  return (
    <Link href={`/shop/${product.slug}`} className="group block teak-card">
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-clay mb-4">
        {/* Primary image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-[1.04]"
          style={{ backgroundImage: `url(${product.images[0]})` }}
        />

        {/* Secondary image on hover */}
        {product.images[1] && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundImage: `url(${product.images[1]})` }}
          />
        )}

        {/* Sold overlay */}
        {isSold && (
          <div className="absolute inset-0 bg-parchment/50 flex items-center justify-center">
            <span className="text-charcoal/35 text-xs tracking-[0.3em] uppercase font-sans">
              Sold
            </span>
          </div>
        )}

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <StatusBadge status={product.availability_status} size="sm" />
        </div>

        {/* Quick action on hover */}
        {!isSold && (
          <div className="absolute bottom-0 left-0 right-0 bg-forest-dark/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-parchment text-[10px] tracking-[0.18em] uppercase font-sans">
              {product.availability_status === 'in-stock'
                ? 'View & Add to Cart'
                : product.availability_status === 'one-of-a-kind' ||
                    product.availability_status === 'reserve'
                  ? 'View & Reserve'
                  : 'View Details'}
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="font-display text-[1.05rem] text-charcoal group-hover:text-forest transition-colors duration-300 leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 text-[11px] text-warm-gray/70 font-sans">
          <span>{COUNTRY_FLAGS[product.country]}</span>
          <span>{product.country}</span>
          <span className="text-warm-gray/30">&middot;</span>
          <span className="truncate">{product.material}</span>
        </div>
        <p className="font-serif text-[1.05rem] text-charcoal/70">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
