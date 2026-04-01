import type { AvailabilityStatus } from '@/lib/types'

const STATUS_CONFIG: Record<
  AvailabilityStatus,
  { label: string; className: string; dot: string }
> = {
  'in-stock': {
    label: 'In Stock',
    className: 'bg-forest/8 text-forest border-forest/20',
    dot: 'bg-forest',
  },
  'one-of-a-kind': {
    label: 'One of a Kind',
    className: 'bg-amber/8 text-amber border-amber/20',
    dot: 'bg-amber',
  },
  reserve: {
    label: 'Reserve Now',
    className: 'bg-aged-gold/10 text-teak-dark border-aged-gold/25',
    dot: 'bg-aged-gold',
  },
  sold: {
    label: 'Sold',
    className: 'bg-charcoal/5 text-charcoal/30 border-charcoal/10',
    dot: 'bg-charcoal/25',
  },
}

interface StatusBadgeProps {
  status: AvailabilityStatus
  size?: 'sm' | 'md'
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status]

  return (
    <span
      className={`inline-flex items-center gap-1.5 border font-sans ${config.className} ${
        size === 'sm'
          ? 'px-2 py-0.5 text-[9px] tracking-[0.18em]'
          : 'px-3 py-1 text-[10px] tracking-[0.18em]'
      } uppercase`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`} />
      {config.label}
    </span>
  )
}
