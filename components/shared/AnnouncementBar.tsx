'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-forest-dark text-parchment/75 text-[11px] tracking-[0.15em] py-2.5 px-4 flex items-center justify-center relative">
      <p className="font-sans uppercase text-center">
        Free white-glove delivery in Metro Manila on orders above ₱50,000&nbsp;&nbsp;·&nbsp;&nbsp;
        <Link href="/schedule" className="underline underline-offset-2 hover:text-parchment transition-colors">
          Visit our showroom by appointment
        </Link>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-parchment/30 hover:text-parchment/70 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={13} />
      </button>
    </div>
  )
}
