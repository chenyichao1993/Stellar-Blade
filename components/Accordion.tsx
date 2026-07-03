'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-sage/20 bg-oatmeal overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-sage/5"
            >
              <span className="font-display font-bold text-forest">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-sage transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-mist">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
