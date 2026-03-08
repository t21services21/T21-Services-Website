'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'
import Link from 'next/link'

export default function ProgrammeMobilisation() {
  const steps = [
    { num: '01', title: 'Operational Requirement Review', desc: 'Understanding programme scope, specialty requirements, timelines and operational objectives.' },
    { num: '02', title: 'Workforce Identification', desc: 'Identifying experienced workforce with relevant healthcare operational skills and systems knowledge.' },
    { num: '03', title: 'Team Lead Allocation', desc: 'Assigning team lead oversight to coordinate delivery and maintain operational standards.' },
    { num: '04', title: 'Operational Deployment', desc: 'Structured onboarding and deployment of workforce into operational programme delivery.' },
    { num: '05', title: 'QA Oversight', desc: 'Ongoing quality assurance monitoring to maintain accuracy and programme compliance.' },
    { num: '06', title: 'Performance Reporting', desc: 'Regular reporting on programme progress, output metrics and operational performance.' },
  ]
  const roles = ['RTT Validators','Patient Access Officers','Pathway Coordinators','Medical Secretary Support','Clinical Coders','Data Quality Analysts']
  const workflows = ['Referral Management','Appointment Booking','Pathway Updates','Clinic Outcomes','Waiting List Processes','PTL Reconciliation','Clinical Correspondence','Pathway Closure']
  const benefits = ['Scalable workforce capacity','Structured team lead oversight','Healthcare operational understanding','Support for elective recovery delivery','Improved operational resilience']

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full px-5 py-2 mb-6">
            <span className="text-gray-300 text-sm tracking-wide">Structured Programme Delivery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Programme <span className="text-[#D4AF37]">Mobilisation</span></h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            T21 Services supports healthcare organisations with structured mobilisation of experienced operational workforce for patient access, RTT, elective recovery, coding and data quality programmes.
          </p>
        </div>
      </section>

      {/* Mobilisation Approach */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-10 text-center">Mobilisation <span className="text-[#D4AF37]">Approach</span></h2>
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="border border-gray-800 bg-gray-900/20 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-colors relative">
                <span className="text-[#D4AF37] text-xs font-bold tracking-wider">{s.num}</span>
                {i < steps.length - 1 && <span className="hidden md:block absolute top-6 -right-3 text-gray-600">&rarr;</span>}
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Structure */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4 text-center">Delivery <span className="text-[#D4AF37]">Structure</span></h2>
          <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">Programmes are supported through structured coordination ensuring operational standards and programme governance.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {['Programme Oversight','Team Lead Coordination','Operational Workforce','QA and Reporting'].map((item, i) => (
              <div key={i} className="border border-gray-800 bg-gray-900/20 rounded-xl p-6 text-center hover:border-[#D4AF37]/30 transition-colors">
                <div className="text-2xl text-[#D4AF37] mb-3">{['\u25C6','\u2605','\u25A0','\u2611'][i]}</div>
                <h3 className="text-sm font-bold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Capability */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-10 text-center">Operational Workforce <span className="text-[#D4AF37]">Capability</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {roles.map((r, i) => (
              <div key={i} className="flex items-center gap-3 border border-gray-800 bg-black/40 rounded-lg p-4">
                <span className="text-[#D4AF37] text-sm flex-shrink-0">&#9632;</span>
                <span className="text-gray-300 text-sm">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Understanding */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4 text-center">Workflow <span className="text-[#D4AF37]">Understanding</span></h2>
          <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">Our workforce understands the operational processes that underpin patient pathway management and healthcare administration.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {workflows.map((w, i) => (
              <div key={i} className="flex items-center gap-2.5 border border-gray-800 bg-gray-900/20 rounded-lg p-4">
                <span className="text-[#D4AF37] text-xs flex-shrink-0">&#10003;</span>
                <span className="text-gray-300 text-sm">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobilisation Benefits */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-10 text-center">Mobilisation <span className="text-[#D4AF37]">Benefits</span></h2>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="border border-gray-800 bg-gray-900/20 rounded-xl p-6 flex items-start gap-3 hover:border-[#D4AF37]/30 transition-colors">
                <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">&#10003;</span>
                <span className="text-gray-300">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">Discuss Your <span className="text-[#D4AF37]">Programme Requirements</span></h2>
          <p className="text-gray-400 mb-8">Contact T21 Services to discuss how we can support your operational programme mobilisation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#D4AF37] text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-[#FFD700] transition-all">Contact Us</Link>
            <Link href="/operational-delivery" className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all">Operational Delivery</Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}