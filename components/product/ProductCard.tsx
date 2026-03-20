import Link from 'next/link'
import type { Product } from '@/lib/types'
import { StatusBadge } from './StatusBadge'

const COUNTRY_FLAGS: Record<string, string> = {
  Thailand: '🇹🇭',
  China: '🇨🇳',
  Korea: '🇰🇷',
  Indonesia: '🇮🇩',
  Vietnam: '🇻🇳',
  Philippines: '🇵🇭',
}

function formatPrice(price: number): string {
  return `₱${price.toLocaleString('en-PH')}`
}

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product }: ProductCardProps) {
  const isSold = product.availability_status === 'sold'

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-cream mb-4">
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
          <div className="absolute inset-0 bg-cream/50 flex items-center justify-center">
            <span className="text-charcoal/40 text-xs tracking-[0.3em] uppercase font-sans">
              Sold
            </span>
          </div>
        )}

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <StatusBadge status={product.availability_status} size="sm" />
        </div>

        {/* Quick action on hover (non-sold) */}
        {!isSold && (
          <div className="absolute bottom-0 left-0 right-0 bg-charcoal/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-cream text-[10px] tracking-[0.2em] uppercase font-sans">
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
        <h3 className="font-serif text-[1.05rem] text-charcoal group-hover:text-warm-wood transition-colors duration-300 leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 text-[11px] text-charcoal/45 font-sans">
          <span>{COUNTRY_FLAGS[product.country]}</span>
          <span>{product.country}</span>
          <span className="text-charcoal/25">·</span>
          <span className="truncate">{product.material}</span>
        </div>
        <p className="font-serif text-[1.05rem] text-charcoal/75">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
