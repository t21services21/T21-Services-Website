'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'

export default function OperationalDelivery() {
  const roles = [
    { role: 'RTT Validators', desc: 'Experienced RTT validators supporting pathway validation, waiting list accuracy and elective recovery compliance.' },
    { role: 'Patient Access Officers', desc: 'Experienced patient access workforce supporting appointment booking, referral processing and pathway administration.' },
    { role: 'Pathway Coordinators', desc: 'Experienced pathway coordinators managing patient tracking lists, pathway updates and waiting list coordination.' },
    { role: 'Medical Secretary Support', desc: 'Experienced medical secretaries supporting clinical correspondence, clinic administration and patient communication.' },
    { role: 'Clinical Coders', desc: 'Experienced clinical coders supporting coding accuracy, healthcare data quality and episode classification.' },
    { role: 'Data Quality Analysts', desc: 'Experienced data quality analysts supporting PAS data cleansing, pathway data reviews and information accuracy.' }
  ]

  const workflows = [
    'Referral Management', 'Appointment Booking', 'Patient Pathway Updates', 'Clinic Outcomes',
    'Clinical Correspondence', 'Waiting List Management', 'Episode Creation', 'Pathway Closure'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Operational Delivery <span className="text-[#D4AF37]">Capability</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            T21 Services supports healthcare operational programmes through structured workforce capability, experienced team coordination and quality-focused service delivery.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>T21 Services delivers healthcare operational services through a structured delivery model designed to support programme requirements across NHS trusts and healthcare organisations. Our approach ensures experienced workforce deployment with clear coordination, oversight and quality assurance.</p>
          <p>With experience across more than 40 NHS trusts over the past five years, our delivery model has been refined to support diverse organisational requirements, regional variations and system-specific workflows.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-12 text-center">Delivery <span className="text-[#D4AF37]">Structure</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Programme Oversight', desc: 'Strategic programme management ensuring alignment with organisational objectives, operational requirements and delivery timelines.' },
              { num: '2', title: 'Team Lead Coordination', desc: 'Experienced team leads coordinating day-to-day operational delivery, quality monitoring and workforce scheduling.' },
              { num: '3', title: 'Operational Workforce', desc: 'Experienced healthcare operational staff delivering front-line services across RTT validation, patient access and clinical coding.' }
            ].map((item, i) => (
              <div key={i} className="glass-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] text-2xl font-bold">{item.num}</span>
                </div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-4">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-12 text-center">Workforce <span className="text-[#D4AF37]">Capability</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((item, i) => (
              <div key={i} className="glass-card">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-3">{item.role}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">System Workflow <span className="text-[#D4AF37]">Understanding</span></h2>
          <p className="text-gray-300 text-lg text-center mb-8 max-w-3xl mx-auto">Our workforce understands healthcare administration systems and patient pathway workflows including:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {workflows.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#D4AF37]">&#10003;</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Workforce <span className="text-[#D4AF37]">Development</span></h2>
          <div className="glass-card max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">T21 Services maintains workforce development capability supporting operational services across healthcare administration. Professional training programmes are delivered through recognised standards including TQUK-approved training.</p>
            <p className="text-gray-300 text-lg leading-relaxed">This capability supports both the development of our operational workforce and the delivery of workforce development programmes for healthcare organisations seeking to build internal capacity.</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}
