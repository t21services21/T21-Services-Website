'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Statistics from '@/components/Statistics'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'
import Link from 'next/link'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className={`min-h-screen bg-black ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
      <Navigation />
      <Hero />

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8 text-center">
            Experienced Workforce Supporting <span className="text-[#D4AF37]">Healthcare Operations</span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              T21 Services provides experienced workforce and operational support across healthcare administration and patient pathway operations. With over five years of continuous service delivery and experience across more than 40 NHS trusts, we understand the operational requirements of healthcare organisations delivering patient care.
            </p>
            <p>
              Our organisation supports healthcare services including RTT validation, waiting list management, patient pathway administration, patient access operations, clinical coding, healthcare data quality and elective recovery programmes.
            </p>
          </div>

          {/* Workflow Understanding */}
          <div className="mt-12 glass-card">
            <h3 className="text-2xl font-playfair font-bold text-[#D4AF37] mb-6">Patient Administration Workflow Capability</h3>
            <p className="text-gray-300 mb-6">Our workforce understands the full patient administration workflow including:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Referral Processing',
                'Episode Creation',
                'Appointment Booking',
                'Patient Pathway Updates',
                'Clinic Outcomes',
                'Clinical Correspondence',
                'Follow-up Management',
                'Pathway Closure'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#D4AF37] text-sm">&#10003;</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      {/* Supporting Elective Recovery */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8 text-center">
            Supporting <span className="text-[#D4AF37]">Elective Recovery Programmes</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            T21 Services supports healthcare organisations delivering elective recovery programmes by providing experienced workforce capacity across critical operational areas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'RTT Validation', desc: 'Experienced RTT validators supporting pathway accuracy and compliance across elective recovery programmes.' },
              { title: 'Patient Access Operations', desc: 'Experienced patient access workforce supporting appointment booking, referral management and pathway coordination.' },
              { title: 'Pathway Management', desc: 'Experienced pathway coordinators supporting waiting list management and patient tracking list reviews.' },
              { title: 'Clinical Coding', desc: 'Experienced clinical coders supporting healthcare data quality and coding accuracy across specialties.' },
              { title: 'Healthcare Data Quality', desc: 'Experienced data quality analysts supporting PAS data cleansing and healthcare information accuracy.' },
              { title: 'Administrative Capacity', desc: 'Experienced healthcare administrative workforce providing operational capacity across programme requirements.' }
            ].map((item, i) => (
              <div key={i} className="glass-card">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Statistics />
      
      {/* Why Organisations Work With T21 */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
            Why Organisations Work With <span className="text-[#D4AF37]">T21 Services</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Experienced Workforce</h3>
              <p className="text-gray-300 text-sm">Operational experience across 40+ NHS trusts and healthcare organisations</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">NHS Systems Knowledge</h3>
              <p className="text-gray-300 text-sm">Understanding of NHS patient pathway systems, PAS and operational workflows</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Structured Delivery</h3>
              <p className="text-gray-300 text-sm">Team lead oversight and structured operational delivery coordination</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Workforce Development</h3>
              <p className="text-gray-300 text-sm">Professional development capability supporting healthcare operational services</p>
            </div>
          </div>
        </div>
      </section>

      <Partners />
      
      {/* Partnership CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Discuss Your <span className="text-[#D4AF37]">Operational Requirements</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact T21 Services to discuss how our experienced healthcare operational workforce can support your organisation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="/services"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              View All Services
            </Link>
            <Link 
              href="/operational-delivery"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              Operational Delivery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}
