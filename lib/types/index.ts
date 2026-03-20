export type AvailabilityStatus = 'in-stock' | 'one-of-a-kind' | 'reserve' | 'sold'

export type Country = 'Thailand' | 'China' | 'Korea' | 'Indonesia' | 'Vietnam' | 'Philippines'

export type Room = 'Living' | 'Dining' | 'Bedroom' | 'Office' | 'Accent Corner'

export type Category = 'Seating' | 'Lighting' | 'Storage' | 'Accent' | 'Ceramics' | 'Textiles'

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest'

export interface ProductDimensions {
  width?: string
  depth?: string
  height?: string
  diameter?: string
  weight?: string
}

export interface Product {
  id: string
  slug: string
  name: string
  price: number
  country: Country
  category: Category
  material: string
  room: Room[]
  availability_status: AvailabilityStatus
  story: string
  dimensions: ProductDimensions
  images: string[]
  is_featured: boolean
  collection_slugs: string[]
  tags?: string[]
}

export interface Collection {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  story: string
  hero_image: string
  accent_color: string
  is_featured: boolean
  product_ids: string[]
}

export interface JournalPost {
  id: string
  slug: string
  title: string
  excerpt: string
  published_at: string
  cover_image: string
  read_time: string
  category: string
}

export interface ActiveFilters {
  countries?: string[]
  categories?: string[]
  availability?: string[]
  sort?: string
  priceMax?: number
}
