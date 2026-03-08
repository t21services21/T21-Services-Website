'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'
import Link from 'next/link'

export default function NHSTrusts() {
  const serviceAreas = [
    'RTT Validation and Pathway Compliance',
    'Waiting List Management and PTL Reviews',
    'Patient Access and Appointment Booking',
    'Referral Management and Processing',
    'Clinical Coding and Episode Classification',
    'Healthcare Data Quality and PAS Cleansing',
    'Medical Secretary and Clinic Administration',
    'Elective Recovery Programme Support'
  ]

  const regions = [
    'London and South East',
    'Midlands',
    'North West',
    'North East and Yorkshire',
    'South West',
    'East of England'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Supporting <span className="text-[#D4AF37]">NHS Trusts</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            T21 Services has provided experienced operational workforce across more than 40 NHS trusts supporting patient pathway operations, elective recovery and healthcare administration.
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">40+</div>
              <div className="text-gray-400 text-sm">NHS Trusts Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">500,000+</div>
              <div className="text-gray-400 text-sm">Pathways Validated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">5+</div>
              <div className="text-gray-400 text-sm">Years Operating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Services for <span className="text-[#D4AF37]">NHS Organisations</span></h2>
          <div className="grid md:grid-cols-2 gap-4">
            {serviceAreas.map((item, i) => (
              <div key={i} className="glass-card flex items-center gap-3">
                <span className="text-[#D4AF37] text-lg">&#10003;</span>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Regional <span className="text-[#D4AF37]">Coverage</span></h2>
          <p className="text-gray-300 text-lg text-center mb-8 max-w-3xl mx-auto">T21 Services has delivered operational services across NHS trusts in multiple regions throughout England, supporting both on-site and remote operational requirements.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {regions.map((item, i) => (
              <div key={i} className="glass-card text-center">
                <span className="text-[#D4AF37] font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Working with <span className="text-[#D4AF37]">T21 Services</span></h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4">For NHS Trusts</h3>
              <p className="text-gray-300 mb-4">T21 Services can support your operational requirements across patient access, RTT validation, waiting list management and elective recovery programmes with experienced workforce capacity.</p>
              <Link href="/contact" className="text-[#D4AF37] font-semibold hover:underline">Discuss requirements &rarr;</Link>
            </div>
            <div className="glass-card">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4">For Insourcing Partners</h3>
              <p className="text-gray-300 mb-4">T21 Services works with insourcing providers and operational partners to deliver healthcare workforce capacity across programmes requiring experienced operational staff.</p>
              <Link href="/insourcing-partners" className="text-[#D4AF37] font-semibold hover:underline">Partner with us &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}
