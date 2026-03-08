'use client'

import { useState } from 'react'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  
  const faqs = [
    { q: 'What qualifications will I receive?', a: 'You\'ll receive TQUK-recognized certificates upon completion.' },
    { q: 'How long are the courses?', a: 'Course duration varies from 4 weeks to 6 months depending on the program.' },
    { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment plans and employer sponsorship options.' },
    { q: 'Can international students apply?', a: 'Yes, we welcome international students and provide visa support.' },
    { q: 'What is your job placement rate?', a: 'We have a 95% job placement rate within 3 months of graduation.' },
    { q: 'Do you help with visa applications?', a: 'Yes, we provide comprehensive visa support for international programs.' },
  ]

  return (
    <section className="section-padding bg-neutral-900">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card cursor-pointer" onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                <span className="text-gold text-2xl">{open === i ? '−' : '+'}</span>
              </div>
              {open === i && <p className="text-gray-400 mt-4">{faq.a}</p>}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-gold-outline">View All FAQs</button>
        </div>
      </div>
    </section>
  )
}
