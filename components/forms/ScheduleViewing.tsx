'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Clock, Calendar, Send } from 'lucide-react'

const TIME_SLOTS = [
  { value: 'morning', label: 'Morning (10:00 AM \u2013 12:00 PM)' },
  { value: 'afternoon', label: 'Afternoon (1:00 PM \u2013 5:00 PM)' },
  { value: 'appointment', label: 'By Appointment' },
]

interface ScheduleViewingProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export function ScheduleViewing({ isOpen, onClose, productName }: ScheduleViewingProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    piece: productName || '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({ ...prev, piece: productName }))
    }
  }, [productName])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSubmitted(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-forest-dark/50 schedule-backdrop z-[100]"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            ref={dialogRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-parchment z-[101] overflow-y-auto shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Schedule a viewing"
          >
            {/* Forest accent bar at top */}
            <div className="h-1 bg-gradient-to-r from-forest-dark via-forest to-celadon" />

            <div className="px-6 sm:px-8 py-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-forest font-sans mb-2">
                    Private Viewing
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl text-charcoal leading-tight">
                    Schedule a Visit
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-charcoal/30 hover:text-charcoal transition-colors p-1"
                  aria-label="Close"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Location card */}
              <div className="bg-cream border border-forest/8 px-5 py-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={16} strokeWidth={1.5} className="text-forest mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-sans text-charcoal font-medium">
                      Great Asian Finds Showroom
                    </p>
                    <p className="text-xs text-warm-gray font-sans mt-0.5">
                      La Brea, Dona Carmen, Commonwealth, Quezon City
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 text-[10px] text-warm-gray/60 font-sans">
                      <Clock size={11} strokeWidth={1.5} />
                      <span>Mon \u2013 Sat, 10:00 AM \u2013 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-forest/8 flex items-center justify-center mx-auto mb-6">
                      <Calendar size={28} strokeWidth={1.5} className="text-forest" />
                    </div>
                    <h3 className="font-display text-2xl text-charcoal mb-3">
                      Viewing Requested
                    </h3>
                    <p className="text-sm text-warm-gray font-sans leading-relaxed max-w-xs mx-auto mb-8">
                      We&apos;ll confirm your visit within 24 hours. We look forward to
                      sharing these pieces with you in person.
                    </p>
                    <button
                      onClick={onClose}
                      className="text-[11px] tracking-[0.18em] uppercase text-forest font-sans hover:text-charcoal transition-colors"
                    >
                      Continue Browsing
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="sv-name"
                        className="block text-[10px] tracking-[0.18em] uppercase text-warm-gray font-sans mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="sv-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-cream border border-forest/10 text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-forest/30 font-sans transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="sv-email"
                        className="block text-[10px] tracking-[0.18em] uppercase text-warm-gray font-sans mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="sv-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-cream border border-forest/10 text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-forest/30 font-sans transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="sv-phone"
                        className="block text-[10px] tracking-[0.18em] uppercase text-warm-gray font-sans mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="sv-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-cream border border-forest/10 text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-forest/30 font-sans transition-colors"
                        placeholder="+63 917 000 0000"
                      />
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="sv-date"
                          className="block text-[10px] tracking-[0.18em] uppercase text-warm-gray font-sans mb-2"
                        >
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="sv-date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={minDate}
                          required
                          className="w-full bg-cream border border-forest/10 text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-forest/30 font-sans transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="sv-time"
                          className="block text-[10px] tracking-[0.18em] uppercase text-warm-gray font-sans mb-2"
                        >
                          Time Slot *
                        </label>
                        <select
                          id="sv-time"
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          required
                          className="w-full bg-cream border border-forest/10 text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-forest/30 font-sans transition-colors appearance-none"
                        >
                          <option value="">Select time</option>
                          {TIME_SLOTS.map((slot) => (
                            <option key={slot.value} value={slot.value}>
                              {slot.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Piece of interest */}
                    <div>
                      <label
                        htmlFor="sv-piece"
                        className="block text-[10px] tracking-[0.18em] uppercase text-warm-gray font-sans mb-2"
                      >
                        Piece of Interest
                      </label>
                      <input
                        type="text"
                        id="sv-piece"
                        name="piece"
                        value={formData.piece}
                        onChange={handleChange}
                        className="w-full bg-cream border border-forest/10 text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-forest/30 font-sans transition-colors"
                        placeholder="e.g. Chiang Mai Teak Daybed"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="sv-message"
                        className="block text-[10px] tracking-[0.18em] uppercase text-warm-gray font-sans mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="sv-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-cream border border-forest/10 text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-forest/30 font-sans transition-colors resize-none"
                        placeholder="Anything you'd like us to know..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 bg-forest text-parchment text-[11px] tracking-[0.18em] uppercase py-4 hover:bg-forest-dark transition-colors duration-300 font-sans font-medium mt-2"
                    >
                      <Send size={13} strokeWidth={1.5} />
                      Request a Viewing
                    </button>

                    <p className="text-[11px] text-warm-gray/50 font-sans text-center leading-relaxed">
                      Viewings are by appointment only. We&apos;ll confirm availability within
                      24 hours via email.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
