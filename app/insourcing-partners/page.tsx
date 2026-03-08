'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'
import Link from 'next/link'

export default function InsourcingPartners() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Insourcing <span className="text-[#D4AF37]">Partners</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            T21 Services works with insourcing providers and operational partners to deliver experienced healthcare workforce capacity across programme requirements.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>Insourcing providers and healthcare operational partners require experienced workforce capacity to support programme delivery across NHS trusts. T21 Services provides this capacity through our experienced healthcare operational workforce, supporting partners with the staffing resources needed to deliver programme objectives.</p>
          <p>Our partnership model is designed to complement existing programme structures, providing workforce capacity that integrates with partner operational delivery frameworks and client requirements.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-12 text-center">Partnership <span className="text-[#D4AF37]">Model</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Workforce Supply', desc: 'Experienced healthcare operational workforce available for deployment across partner programmes including RTT validation, patient access, clinical coding and data quality.' },
              { title: 'Flexible Capacity', desc: 'Scalable workforce capacity to support programme requirements, with the ability to increase or adjust team sizes based on operational demand.' },
              { title: 'Quality Assurance', desc: 'All workforce deployed through partnerships maintains the same quality standards, governance compliance and professional conduct as direct T21 Services engagements.' },
              { title: 'Programme Integration', desc: 'Workforce integrates with partner delivery structures, reporting frameworks and client-specific operational requirements.' }
            ].map((item, i) => (
              <div key={i} className="glass-card">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Workforce <span className="text-[#D4AF37]">Available</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {['RTT Validators', 'Patient Access Officers', 'Pathway Coordinators', 'Clinical Coders', 'Data Quality Analysts', 'Medical Secretaries', 'Healthcare Administrators', 'Waiting List Coordinators', 'Booking Team Members'].map((item, i) => (
              <div key={i} className="glass-card text-center py-4">
                <span className="text-[#D4AF37] font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">Discuss a <span className="text-[#D4AF37]">Partnership</span></h2>
          <p className="text-gray-300 text-lg mb-8">Contact T21 Services to discuss how our experienced healthcare operational workforce can support your programme delivery requirements.</p>
          <Link href="/contact" className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg inline-block">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}
