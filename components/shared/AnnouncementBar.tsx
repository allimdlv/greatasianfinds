'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-charcoal text-cream/80 text-[11px] tracking-[0.2em] py-2.5 px-4 flex items-center justify-center relative">
      <p className="font-sans uppercase text-center">
        Free white-glove delivery in Metro Manila on orders above ₱50,000&nbsp;&nbsp;·&nbsp;&nbsp;
        Makati showroom open by appointment
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream/80 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={13} />
      </button>
    </div>
  )
}
