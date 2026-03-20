import type { Collection } from '../types'

export const COLLECTIONS: Collection[] = [
  {
    id: 'c001',
    slug: 'warm-earth-tones',
    name: 'Warm Earth Tones',
    tagline: 'The palette of ancient soil.',
    description:
      'Pieces rooted in the earth — terracotta, teak, rattan, and raw linen — that anchor a room in warmth and belonging.',
    story:
      'Every civilization has returned to earth. The potters of Jingdezhen, the teak carvers of Chiang Mai, the rattan weavers of Lombok — all drew their vocabulary from the same source: soil, bark, clay, and stone. This collection gathers pieces that share that rootedness, building rooms that feel inhabited, not decorated.',
    hero_image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    accent_color: '#8B6F47',
    is_featured: true,
    product_ids: ['p001', 'p002', 'p006'],
  },
  {
    id: 'c002',
    slug: 'artisan-ceramics',
    name: 'Artisan Ceramics',
    tagline: 'Form born from fire.',
    description:
      'Vessels, lamps, and sculptural objects shaped by hand in the great ceramic traditions of East Asia.',
    story:
      'The kiln has always been a place of transformation — raw clay surrendering to fire, emerging as something irreversible and beautiful. The pieces in this collection carry that alchemy: Jingdezhen porcelain etched in cobalt, Korean celadon pooling in its pale glaze, Philippine clay burnished smooth. Each object rewards slow looking.',
    hero_image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80',
    accent_color: '#4A7C59',
    is_featured: true,
    product_ids: ['p003', 'p005'],
  },
  {
    id: 'c003',
    slug: 'natural-fibers',
    name: 'Natural Fibers',
    tagline: 'Woven with patience.',
    description:
      'Rattan, capiz, hemp, and linen — materials that breathe with the room and age gracefully alongside it.',
    story:
      'In every corner of Asia, hands have learned to coax structure from plant fibers. Rattan bends into daybed frames in Indonesia; capiz shells are strung into windows in the Philippines; hemp is twisted into rope and woven into floor mats from Korea to Vietnam. This collection celebrates that ingenuity: pieces from materials that grow, breathe, and slowly acquire the patina of a lived life.',
    hero_image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
    accent_color: '#C9A84C',
    is_featured: true,
    product_ids: ['p001', 'p006', 'p008'],
  },
  {
    id: 'c004',
    slug: 'heritage-lacquer',
    name: 'Heritage Lacquer',
    tagline: 'Layers of memory.',
    description:
      'Storage, display, and surface pieces finished in centuries-old lacquer techniques from China and Vietnam.',
    story:
      'Lacquer is the art of patience: each coat must cure completely before the next can be applied, and a single piece may require months of layering before it is ready for carving or inlay. The Chinese and Vietnamese traditions differ in method but share the same reverence for depth and time. The pieces in this collection are functional objects that double as archives — surfaces holding centuries of technique in their finish.',
    hero_image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80',
    accent_color: '#2C2C2C',
    is_featured: false,
    product_ids: ['p004', 'p007'],
  },
]

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug)
}

export function getFeaturedCollections(): Collection[] {
  return COLLECTIONS.filter((c) => c.is_featured)
}
