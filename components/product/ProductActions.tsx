'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'
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
        className="w-full flex items-center justify-center gap-2 bg-forest text-parchment text-[11px] tracking-[0.18em] uppercase py-4 hover:bg-forest-dark transition-colors duration-300 font-sans font-medium"
      >
        <Calendar size={14} strokeWidth={1.5} />
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
