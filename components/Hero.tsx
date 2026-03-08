'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(0,0,0,0.8)_100%)]"></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full px-5 py-2 mb-8">
          <span className="text-[#D4AF37] text-sm">&#9877;</span>
          <span className="text-gray-300 text-sm tracking-wide">Healthcare Operational Workforce Partner</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight max-w-5xl mx-auto">
          <span className="text-white">Healthcare Operational</span><br className="hidden sm:block" />
          <span className="text-white"> Workforce and Service Support for</span><br />
          <span className="text-[#D4AF37]">Patient Access, RTT and Elective Recovery</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          T21 Services supports healthcare organisations, NHS trusts and operational partners with experienced workforce across patient access administration, RTT validation, waiting list management, clinical coding and healthcare data quality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/services" className="bg-[#D4AF37] text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-base">
            Our Services
          </Link>
          <Link href="/contact" className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-base">
            Discuss Requirements
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            { value: '500,000+', label: 'RTT Pathways Validated' },
            { value: '50+', label: 'Experienced Workforce' },
            { value: '40+', label: 'NHS Trusts Supported' },
            { value: '5+', label: 'Years Supporting Healthcare' },
          ].map((stat, i) => (
            <div key={i} className="border border-gray-800 bg-gray-900/30 rounded-xl p-4 md:p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}