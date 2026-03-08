'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'

export default function Leadership() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            <span className="text-[#D4AF37]">Leadership</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            T21 Services is led by healthcare operational professionals with direct experience across NHS trusts and healthcare organisations.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <span className="text-[#D4AF37] text-4xl font-playfair font-bold">CEO</span>
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-white mb-2">Chief Executive Officer</h2>
                <p className="text-[#D4AF37] font-semibold mb-4">Founder and CEO, T21 Services</p>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>With over 14 years of healthcare operational experience, the CEO of T21 Services brings direct, hands-on knowledge of NHS operational services spanning patient access administration, RTT validation, waiting list management, clinical coding and healthcare data quality.</p>
                  <p>This experience has been gained through direct operational roles across more than 40 NHS trusts throughout England, providing a comprehensive understanding of the operational challenges faced by healthcare organisations delivering patient care.</p>
                  <p>T21 Services was founded to provide healthcare organisations with experienced operational workforce capacity, drawing on this extensive direct experience to deliver services that understand the realities of NHS operational environments.</p>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D4AF37]">14+</div>
                    <div className="text-xs text-gray-400">Years Healthcare Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D4AF37]">40+</div>
                    <div className="text-xs text-gray-400">NHS Trusts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D4AF37]">50+</div>
                    <div className="text-xs text-gray-400">Workforce Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D4AF37]">5+</div>
                    <div className="text-xs text-gray-400">Years Leading T21</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Leadership <span className="text-[#D4AF37]">Expertise</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Healthcare Operations', desc: 'Direct operational experience across patient access, RTT validation, waiting list management and healthcare administration services.' },
              { title: 'NHS Systems Knowledge', desc: 'Working knowledge of NHS patient administration systems, pathway workflows and operational processes across multiple trust environments.' },
              { title: 'Workforce Management', desc: 'Experience building, developing and managing healthcare operational workforce teams across diverse programme requirements.' },
              { title: 'Programme Delivery', desc: 'Experience delivering operational programmes across elective recovery, data quality improvement and patient access initiatives.' },
              { title: 'Stakeholder Engagement', desc: 'Experience working with NHS trust operational leaders, programme managers and healthcare partners to deliver service requirements.' },
              { title: 'Workforce Development', desc: 'Established workforce development capability through TQUK-approved training programmes supporting healthcare operational services.' }
            ].map((item, i) => (
              <div key={i} className="glass-card">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}
