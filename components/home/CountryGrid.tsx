import Link from 'next/link'

const COUNTRIES = [
  {
    name: 'Thailand',
    slug: 'thailand',
    description: 'Teak, gilding, temple craft',
    image: 'https://images.unsplash.com/photo-1490810194309-344b3661ba39?w=700&q=80',
    pieces: 12,
  },
  {
    name: 'China',
    slug: 'china',
    description: 'Porcelain, lacquer, silk',
    image: 'https://images.unsplash.com/photo-1537547606-95a594fdffb0?w=700&q=80',
    pieces: 18,
  },
  {
    name: 'Korea',
    slug: 'korea',
    description: 'Celadon, hanji, moonjar',
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=700&q=80',
    pieces: 9,
  },
  {
    name: 'Indonesia',
    slug: 'indonesia',
    description: 'Rattan, batik, teakwood',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80',
    pieces: 14,
  },
  {
    name: 'Vietnam',
    slug: 'vietnam',
    description: 'Lacquer, mother-of-pearl, bamboo',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    pieces: 11,
  },
  {
    name: 'Philippines',
    slug: 'philippines',
    description: 'Capiz, abacá, burnished gold',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80',
    pieces: 8,
  },
]

export function CountryGrid() {
  return (
    <section className="py-20 lg:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 lg:mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-warm-wood font-sans mb-2">
            Origins & Traditions
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl text-charcoal">Browse by Country</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {COUNTRIES.map((country, i) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className={`group relative overflow-hidden block ${
                i === 0 ? 'row-span-2' : ''
              }`}
            >
              <div
                className={`bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                  i === 0 ? 'h-full min-h-[320px] lg:min-h-[460px]' : 'aspect-[4/3]'
                }`}
                style={{ backgroundImage: `url(${country.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <h3
                  className={`font-serif text-cream leading-tight ${
                    i === 0 ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'
                  }`}
                >
                  {country.name}
                </h3>
                <p className="text-cream/60 text-xs font-sans mt-0.5 leading-snug">
                  {country.description}
                </p>
                <p className="text-cream/35 text-[10px] tracking-[0.2em] uppercase font-sans mt-2">
                  {country.pieces} pieces
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
