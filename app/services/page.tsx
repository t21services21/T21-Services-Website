'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'elective-recovery',
      title: 'Elective Recovery and RTT Services',
      desc: 'Experienced workforce supporting elective recovery programmes through RTT validation, waiting list management and patient pathway operations across NHS trusts.',
      features: ['RTT validation and pathway correction', 'Waiting list and PTL management', 'Patient tracking list reviews', 'Pathway escalation and reconciliation', 'Elective recovery operational support', 'Multi-specialty coverage'],
      stat: '500,000+ Pathways Validated'
    },
    {
      id: 'patient-access',
      title: 'Patient Access and Pathway Management',
      desc: 'Experienced patient access workforce supporting the full patient pathway lifecycle from referral management through to pathway closure and discharge.',
      features: ['Patient access officers', 'Pathway coordinators', 'Appointment booking teams', 'Referral management support', 'Medical secretary and clinic administration', 'Outpatient administration'],
      stat: '40+ NHS Trusts Supported'
    },
    {
      id: 'clinical-coding',
      title: 'Clinical Coding and Data Quality',
      desc: 'Experienced clinical coding workforce supporting healthcare data quality improvement, patient administration system data cleansing and pathway data accuracy.',
      features: ['Clinical coding workforce', 'Healthcare data quality improvement', 'PAS data cleansing', 'Pathway data reviews', 'Duplicate record management', 'Healthcare information accuracy'],
      stat: '20+ Specialties Covered'
    },
    {
      id: 'workforce-development',
      title: 'Workforce Development and Training',
      desc: 'Professional workforce development programmes supporting healthcare operational services including RTT pathway training, patient access training and clinical coding training.',
      features: ['RTT pathway training programmes', 'Patient access and administration training', 'Clinical coding training', 'Hospital administration training', 'TQUK-approved programme delivery', 'Programmes for healthcare organisations'],
      stat: '500+ Professionals Developed'
    }
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Healthcare <span className="text-[#D4AF37]">Operational Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experienced workforce and operational support across four core healthcare service areas, supporting NHS trusts and healthcare organisations.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto space-y-16">
          {services.map((service, i) => (
            <div key={i} id={service.id} className="glass-card scroll-mt-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-playfair font-bold text-white">{service.title}</h2>
                <span className="text-[#D4AF37] font-semibold text-sm bg-[#D4AF37]/10 px-4 py-2 rounded-full hidden md:block">{service.stat}</span>
              </div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">{service.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">&#10003;</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 md:hidden">
                <span className="text-[#D4AF37] font-semibold text-sm">{service.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">
            Operational Delivery <span className="text-[#D4AF37]">Approach</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                <span className="text-[#D4AF37] text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Requirements Review</h3>
              <p className="text-gray-300 text-sm">Understanding your operational requirements, system environments and programme objectives.</p>
            </div>
            <div className="glass-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                <span className="text-[#D4AF37] text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Workforce Deployment</h3>
              <p className="text-gray-300 text-sm">Deploying experienced workforce with team lead oversight and structured delivery coordination.</p>
            </div>
            <div className="glass-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                <span className="text-[#D4AF37] text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Quality Delivery</h3>
              <p className="text-gray-300 text-sm">Ongoing quality assurance, performance monitoring and reporting throughout the engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Discuss Your <span className="text-[#D4AF37]">Requirements</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact T21 Services to discuss how our experienced healthcare operational workforce can support your organisation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg">
              Contact Us
            </Link>
            <Link href="/operational-delivery" className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg">
              Operational Delivery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
