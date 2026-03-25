import Link from 'next/link'

export function EditorialSplit() {
  return (
    <section className="py-16 lg:py-28 bg-cream teak-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-wood font-sans mb-5">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl lg:text-[2.8rem] text-charcoal leading-[1.15] mb-7">
              Every object has
              <br />
              <em className="font-light">earned its place.</em>
            </h2>
            <div className="space-y-5 text-charcoal/65 leading-relaxed font-sans text-[0.9375rem]">
              <p>
                Great Asian Finds was born from a simple belief: that furniture is not furniture,
                it is the accumulated craft of generations. The teak chair that grounds your reading
                corner was shaped by hands that learned from hands that learned from hands — each
                generation refining the form until it arrived at yours.
              </p>
              <p>
                We travel across Thailand, China, Korea, Indonesia, Vietnam, and the Philippines
                seeking pieces that carry that inheritance honestly. Not reproductions. Not trends.
                Objects that were worth making, and that are worth keeping.
              </p>
            </div>
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link
                href="/about"
                className="group flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-charcoal font-sans"
              >
                <span className="w-6 h-px bg-charcoal group-hover:w-10 transition-all duration-300" />
                Our Story
              </Link>
              <Link
                href="/consultation"
                className="group flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-jade font-sans"
              >
                <span className="w-6 h-px bg-jade group-hover:w-10 transition-all duration-300" />
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Image side */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div
                className="aspect-[4/5] bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85)',
                }}
              />
              {/* Stat card */}
              <div className="absolute -bottom-5 -left-5 lg:-bottom-7 lg:-left-7 bg-parchment px-6 py-5 shadow-sm">
                <p className="font-serif text-[2rem] text-charcoal leading-none">12+</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal/50 font-sans mt-1">
                  Countries sourced
                </p>
              </div>
              {/* Accent image */}
              <div
                className="hidden lg:block absolute -top-6 -right-6 w-32 h-40 bg-cover bg-center border-4 border-cream"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&q=80)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
