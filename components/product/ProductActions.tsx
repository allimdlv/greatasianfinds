'use client'

import { useState } from 'react'
import { Eye } from 'lucide-react'
import { ScheduleViewing } from '@/components/forms/ScheduleViewing'

interface ProductActionsProps {
  productName: string
}

export function ProductActions({ productName }: ProductActionsProps) {
  const [viewingOpen, setViewingOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setViewingOpen(true)}
        className="w-full flex items-center justify-center gap-2 bg-warm-wood text-cream text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-teak-dark transition-colors duration-300 font-sans font-medium"
      >
        <Eye size={14} strokeWidth={1.5} />
        Schedule a Viewing
      </button>

      <ScheduleViewing
        isOpen={viewingOpen}
        onClose={() => setViewingOpen(false)}
        productName={productName}
      />
    </>
  )
}
