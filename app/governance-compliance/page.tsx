'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'

export default function GovernanceCompliance() {
  const frameworks = [
    { title: 'Data Protection and GDPR', desc: 'All operational services are delivered in compliance with data protection requirements including GDPR and the Data Protection Act 2018. Our workforce completes mandatory information governance training.' },
    { title: 'NHS Information Governance', desc: 'Our workforce understands NHS information governance requirements including the Caldicott Principles, patient confidentiality obligations and appropriate data handling procedures.' },
    { title: 'Professional Standards', desc: 'T21 Services maintains professional standards across all operational services including staff conduct, quality assurance and service delivery governance.' },
    { title: 'Quality Assurance', desc: 'Structured quality assurance processes including work sampling, accuracy monitoring and regular performance reviews to maintain service delivery standards.' },
    { title: 'Safeguarding', desc: 'All workforce members complete safeguarding training and DBS checks are maintained in accordance with healthcare sector requirements.' },
    { title: 'Cyber Security Awareness', desc: 'Our workforce completes cyber security awareness training covering NHS-specific security requirements, data handling and system access protocols.' }
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Governance and <span className="text-[#D4AF37]">Compliance</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            T21 Services maintains governance and compliance standards across all operational services, ensuring workforce delivery meets healthcare sector requirements.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>Governance and compliance are foundational to healthcare operational services. T21 Services ensures all workforce deployment and service delivery operates within established governance frameworks, regulatory requirements and professional standards expected by NHS trusts and healthcare organisations.</p>
          <p>Our governance approach covers data protection, information governance, professional standards, quality assurance, safeguarding and cyber security awareness across all operational services.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-12 text-center">Compliance <span className="text-[#D4AF37]">Framework</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {frameworks.map((item, i) => (
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
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Mandatory <span className="text-[#D4AF37]">Training</span></h2>
          <div className="glass-card max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg mb-6">All T21 Services workforce members complete mandatory training covering:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Information Governance', 'Data Protection and GDPR', 'NHS Caldicott Principles', 'Patient Confidentiality', 'Cyber Security Awareness', 'Safeguarding', 'Equality and Diversity', 'Health and Safety'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">&#10003;</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Workforce <span className="text-[#D4AF37]">Accreditation</span></h2>
          <div className="glass-card max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg mb-4">T21 Services maintains TQUK Approved Centre status (Centre #36257481088) supporting workforce development across healthcare operational services. This accreditation supports our professional development programmes and demonstrates our commitment to recognised training standards.</p>
            <p className="text-gray-300 text-lg">TQUK accreditation is maintained as a supporting credential for our workforce development capability, complementing the operational experience that forms the foundation of our service delivery.</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}
