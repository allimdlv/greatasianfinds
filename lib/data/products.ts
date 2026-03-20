import type { Product } from '../types'

export const PRODUCTS: Product[] = [
  {
    id: 'p001',
    slug: 'chiang-mai-teak-meditation-chair',
    name: 'Chiang Mai Meditation Chair',
    price: 28500,
    country: 'Thailand',
    category: 'Seating',
    material: 'Reclaimed Teak Wood',
    room: ['Living', 'Bedroom', 'Office'],
    availability_status: 'in-stock',
    story:
      'Shaped by northern Thai craftsmen who have carved teak for generations, this meditation chair carries the patience of the forest within its grain. Its low profile and raked back invite the body into a posture of ease — perfect for a reading corner or a morning ritual. Each piece shows the natural figure of old-growth teak: no two are alike.',
    dimensions: {
      width: '65 cm',
      depth: '55 cm',
      height: '72 cm',
    },
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    ],
    is_featured: true,
    collection_slugs: ['warm-earth-tones', 'natural-fibers'],
    tags: ['teak', 'handcrafted', 'meditation', 'chair'],
  },
  {
    id: 'p002',
    slug: 'lanna-gilt-console-table',
    name: 'Lanna Gilt Console Table',
    price: 95000,
    country: 'Thailand',
    category: 'Accent',
    material: 'Gilded Mango Wood',
    room: ['Living', 'Dining'],
    availability_status: 'one-of-a-kind',
    story:
      'Inspired by the altar tables of the Lanna Kingdom, this console is hand-gilded in three layers of genuine gold leaf over mango wood. The carved apron depicts lotus motifs — a symbol of purity that has adorned Thai sacred spaces for centuries. Commissioned from a family atelier in Chiang Rai that has worked the gilding craft for four generations, this singular piece will not be repeated.',
    dimensions: {
      width: '120 cm',
      depth: '35 cm',
      height: '82 cm',
    },
    images: [
      'https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    ],
    is_featured: true,
    collection_slugs: ['warm-earth-tones'],
    tags: ['gold', 'gilded', 'statement', 'console', 'lanna'],
  },
  {
    id: 'p003',
    slug: 'blue-willow-porcelain-table-lamp',
    name: 'Blue Willow Porcelain Table Lamp',
    price: 18500,
    country: 'China',
    category: 'Lighting',
    material: 'Jingdezhen Porcelain & Brass',
    room: ['Living', 'Bedroom', 'Dining'],
    availability_status: 'in-stock',
    story:
      'Fired in the kilns of Jingdezhen — China\'s porcelain capital for over a thousand years — this table lamp carries the cobalt blue willow pattern that has journeyed from Song Dynasty scholars\' studios to English manor houses and back. The brass fittings are hand-turned in Guangzhou, and the shade is hand-stitched raw linen. It casts a warm, amber glow that transforms any corner into a study in quiet refinement.',
    dimensions: {
      height: '54 cm',
      diameter: '28 cm (shade)',
    },
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a35a65b33?w=800&q=80',
    ],
    is_featured: true,
    collection_slugs: ['artisan-ceramics'],
    tags: ['porcelain', 'blue-white', 'lighting', 'Jingdezhen'],
  },
  {
    id: 'p004',
    slug: 'ming-scholars-cabinet',
    name: 'Ming Scholar\'s Cabinet',
    price: 220000,
    country: 'China',
    category: 'Storage',
    material: 'Chinese Elm & Cinnabar Lacquer',
    room: ['Living', 'Office', 'Dining'],
    availability_status: 'reserve',
    story:
      'Modeled after the storage cabinets found in Ming Dynasty scholar\'s studios — spaces devoted to contemplation, ink, and rare objects — this cabinet is constructed entirely from Chinese elm using traditional mortise-and-tenon joinery: no nails, no glue. The panels are coated in twelve layers of cinnabar lacquer, each dried and polished before the next is applied. Made to order; arrives in 12–16 weeks.',
    dimensions: {
      width: '90 cm',
      depth: '42 cm',
      height: '165 cm',
    },
    images: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80',
    ],
    is_featured: false,
    collection_slugs: ['heritage-lacquer'],
    tags: ['elm', 'lacquer', 'scholar', 'storage', 'made-to-order'],
  },
  {
    id: 'p005',
    slug: 'goryeo-celadon-moon-vase',
    name: 'Goryeo Celadon Moon Vase',
    price: 45000,
    country: 'Korea',
    category: 'Ceramics',
    material: 'Celadon Glazed Stoneware',
    room: ['Living', 'Dining', 'Accent Corner'],
    availability_status: 'one-of-a-kind',
    story:
      'The full-moon vase — called "dal hang-ari" in Korean — was first made during the Joseon Dynasty to represent the ideal of humble beauty through imperfection. This contemporary interpretation by master potter Kim Jae-won is thrown and rounded over two firings, achieving the soft, uneven silhouette that makes each moon jar uniquely alive. The pale jade celadon glaze pools into deeper tones at the base, evoking overcast skies over Gyeongju.',
    dimensions: {
      height: '38 cm',
      diameter: '32 cm',
    },
    images: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80',
    ],
    is_featured: true,
    collection_slugs: ['artisan-ceramics'],
    tags: ['celadon', 'moon-jar', 'korean', 'handmade'],
  },
  {
    id: 'p006',
    slug: 'lombok-rattan-daybed',
    name: 'Lombok Rattan Daybed',
    price: 65000,
    country: 'Indonesia',
    category: 'Seating',
    material: 'Natural Rattan & Kapok Linen',
    room: ['Living', 'Bedroom'],
    availability_status: 'in-stock',
    story:
      'Woven by hand on the island of Lombok using rattan harvested sustainably from Kalimantan\'s managed forests, this daybed is the embodiment of Indonesian ease — santai living distilled into form. The frame uses steam-bent rattan poles lashed with traditional binding that flexes slightly underfoot, giving the piece its characteristic warmth. Cushions are filled with kapok and covered in undyed linen.',
    dimensions: {
      width: '200 cm',
      depth: '90 cm',
      height: '75 cm',
    },
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded4d4f3be?w=800&q=80',
    ],
    is_featured: true,
    collection_slugs: ['natural-fibers', 'warm-earth-tones'],
    tags: ['rattan', 'daybed', 'natural', 'sustainable', 'lombok'],
  },
  {
    id: 'p007',
    slug: 'hoi-an-lacquer-sideboard',
    name: 'Hội An Lacquer Sideboard',
    price: 115000,
    country: 'Vietnam',
    category: 'Storage',
    material: 'Vietnamese Rosewood & Mother-of-Pearl Lacquer',
    room: ['Living', 'Dining'],
    availability_status: 'in-stock',
    story:
      'From the UNESCO-listed streets of Hội An, where the lacquer tradition dates back four centuries, comes this sideboard inlaid with crushed mother-of-pearl in a pattern of cresting waves. The lacquer surface — built up in seventeen coats over six months — achieves a depth that shifts from black to mahogany depending on how light falls. Three hand-carved doors conceal generous interior shelving.',
    dimensions: {
      width: '150 cm',
      depth: '45 cm',
      height: '80 cm',
    },
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
    ],
    is_featured: false,
    collection_slugs: ['heritage-lacquer'],
    tags: ['lacquer', 'mother-of-pearl', 'sideboard', 'vietnam'],
  },
  {
    id: 'p008',
    slug: 'capiz-shell-chandelier',
    name: 'Capiz Shell Chandelier',
    price: 125000,
    country: 'Philippines',
    category: 'Lighting',
    material: 'Capiz Shell & Brass',
    room: ['Living', 'Dining'],
    availability_status: 'reserve',
    story:
      'Gathered from the shores of Capiz province in the Western Visayas, these translucent windowpane shells have graced Philippine homes since the Spanish colonial era — first as windows, then as art. This chandelier suspends 280 hand-cut capiz discs from a brass armature, creating a floating cloud of light that diffuses warm gold throughout a room. Each disc is individually wired, cleaned, and polished before assembly. Custom sizing available on inquiry.',
    dimensions: {
      diameter: '80 cm',
      height: '60 cm (adjustable drop)',
    },
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a35a65b33?w=800&q=80',
    ],
    is_featured: true,
    collection_slugs: ['natural-fibers'],
    tags: ['capiz', 'chandelier', 'philippine', 'colonial', 'brass'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.is_featured)
}
