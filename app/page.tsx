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
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Experienced Workforce Supporting <span className="text-[#D4AF37]">Healthcare Operations</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              T21 Services provides experienced workforce and operational support across healthcare administration and patient pathway operations. With over five years of continuous service delivery and experience across more than 40 NHS trusts, we understand the operational requirements of healthcare organisations delivering patient care.
            </p>
          </div>

          {/* Workflow Capability */}
          <div className="mt-12 border border-gray-800 bg-gray-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-[#D4AF37] mb-2">Patient Administration Workflow Capability</h3>
            <p className="text-gray-400 mb-6 text-sm">Our workforce understands the full patient administration workflow including:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
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
                <div key={i} className="flex items-center gap-2.5">
                  <span className="text-[#D4AF37] text-xs flex-shrink-0">&#9632;</span>
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              Supporting <span className="text-[#D4AF37]">Elective Recovery Programmes</span>
            </h2>
            <p className="text-gray-400 text-base max-w-3xl mx-auto">
              T21 Services supports healthcare organisations delivering elective recovery programmes by providing experienced workforce capacity across critical operational areas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'RTT Validation', desc: 'Experienced RTT validators supporting pathway accuracy, compliance and pathway assurance across elective recovery programmes.' },
              { title: 'Patient Access Operations', desc: 'Patient access workforce supporting appointment booking, referral management and structured pathway coordination.' },
              { title: 'Pathway Management', desc: 'Pathway coordinators supporting waiting list management, PTL reviews and patient tracking list reconciliation.' },
              { title: 'Clinical Coding', desc: 'Clinical coders supporting healthcare data quality and coding accuracy across multiple specialties and service areas.' },
              { title: 'Healthcare Data Quality', desc: 'Data quality analysts supporting PAS data cleansing, information accuracy and healthcare data improvement programmes.' },
              { title: 'Administrative Capacity', desc: 'Scalable healthcare administrative workforce providing operational capacity and structured team lead oversight.' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-800 bg-gray-900/20 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-colors">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Operational Delivery */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              Example <span className="text-[#D4AF37]">Operational Delivery</span>
            </h2>
            <p className="text-gray-400 text-base max-w-3xl mx-auto">
              Sample delivery scenarios illustrating how T21 Services supports healthcare organisations with structured operational workforce capacity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Example 1 */}
            <div className="border border-gray-800 bg-gray-900/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-colors">
              <div className="bg-[#D4AF37]/5 border-b border-gray-800 px-6 py-4">
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">Programme Example</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">RTT Validation Programme</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Specialty</span>
                    <p className="text-gray-300">Gastroenterology</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Team</span>
                    <p className="text-gray-300">6 Validators + 1 Team Lead</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Focus</span>
                    <p className="text-gray-300">Waiting list validation, pathway correction and PTL review</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Outcome</span>
                    <p className="text-[#D4AF37] font-medium">Backlog clearance support and improved pathway visibility</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="border border-gray-800 bg-gray-900/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-colors">
              <div className="bg-[#D4AF37]/5 border-b border-gray-800 px-6 py-4">
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">Programme Example</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Patient Access Workforce Support</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Team</span>
                    <p className="text-gray-300">Patient access officers and pathway coordinators</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Focus</span>
                    <p className="text-gray-300">Appointment booking, referral management and clinic administration</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Outcome</span>
                    <p className="text-[#D4AF37] font-medium">Increased administrative capacity and improved patient pathway flow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="border border-gray-800 bg-gray-900/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-colors">
              <div className="bg-[#D4AF37]/5 border-b border-gray-800 px-6 py-4">
                <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">Programme Example</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Clinical Coding and Data Quality</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Team</span>
                    <p className="text-gray-300">Clinical coders and data quality analysts</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Focus</span>
                    <p className="text-gray-300">Coding support, PAS data cleansing and pathway data review</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Outcome</span>
                    <p className="text-[#D4AF37] font-medium">Improved coding accuracy and stronger data quality assurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/case-studies" className="text-[#D4AF37] font-semibold text-sm hover:underline">
              View Full Case Studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Statistics />
      
      {/* Why Organisations Work With T21 */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              Why Organisations Work With <span className="text-[#D4AF37]">T21 Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {[
              { icon: '\u2611', title: 'Experienced Workforce', desc: 'Operational experience across 40+ NHS trusts supporting patient access, RTT and elective recovery programmes.' },
              { icon: '\u2699', title: 'NHS Systems Knowledge', desc: 'Understanding of NHS patient pathway systems, PAS workflows, PTL processes and operational governance.' },
              { icon: '\u25C6', title: 'Structured Delivery', desc: 'Team lead oversight, programme coordination and structured operational delivery with QA reporting.' },
              { icon: '\u2605', title: 'Workforce Development', desc: 'Professional development capability supporting healthcare operational workforce and programme mobilisation.' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-800 bg-gray-900/20 rounded-xl p-6 text-center hover:border-[#D4AF37]/30 transition-colors">
                <div className="text-3xl text-[#D4AF37] mb-4">{item.icon}</div>
                <h3 className="text-base md:text-lg font-bold text-[#D4AF37] mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      
      {/* Partnership CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-5">
            Discuss Your <span className="text-[#D4AF37]">Operational Requirements</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact T21 Services to discuss how our experienced healthcare operational workforce can support your programme delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-[#D4AF37] text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-base"
            >
              Contact Us
            </Link>
            <Link 
              href="/operational-delivery"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-base"
            >
              Operational Delivery
            </Link>
            <Link 
              href="/programme-mobilisation"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-base"
            >
              Programme Mobilisation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}