'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'
import Link from 'next/link'

export default function CaseStudies() {
  const studies = [
    {
      tag: 'RTT Validation',
      title: 'Elective Recovery RTT Validation Programme',
      client: 'NHS Acute Trust',
      region: 'London',
      service: 'RTT Validation and Pathway Correction',
      challenge: 'Large-scale RTT validation backlog requiring experienced workforce to support elective recovery compliance and pathway accuracy across multiple surgical and medical specialties.',
      solution: 'T21 Services deployed a team of experienced RTT validators with team lead oversight, working across orthopaedics, general surgery, ophthalmology and ENT specialties to validate patient pathways and correct pathway data.',
      structure: 'Team lead coordination with daily validation targets, QA sampling and weekly progress reporting to programme leads.',
      outcomes: ['Validated thousands of patient pathways across four specialties', 'Improved pathway data accuracy and RTT compliance', 'Supported elective recovery programme timelines', 'Provided structured reporting and governance documentation']
    },
    {
      tag: 'Patient Access',
      title: 'Patient Access Administration Support',
      client: 'NHS Foundation Trust',
      region: 'North West',
      service: 'Patient Access Workforce Deployment',
      challenge: 'Increased demand for patient access administration capacity across outpatient services, with pressure on appointment booking, referral processing and clinic administration timelines.',
      solution: 'T21 Services provided experienced patient access officers supporting appointment booking, referral management and patient pathway administration across outpatient departments with team lead oversight.',
      structure: 'Programme oversight with team lead, daily operational coordination and structured handover processes.',
      outcomes: ['Maintained appointment booking capacity during peak demand', 'Supported referral processing within operational timelines', 'Reduced administrative backlog across outpatient services', 'Provided operational continuity and structured delivery']
    },
    {
      tag: 'Elective Recovery',
      title: 'Waiting List Management Programme',
      client: 'NHS Trust',
      region: 'Midlands',
      service: 'Elective Recovery Operational Support',
      challenge: 'Waiting list management programme requiring experienced workforce to review patient tracking lists, update pathway statuses and support data quality across surgical specialties.',
      solution: 'T21 Services deployed experienced pathway coordinators and data quality analysts to review PTLs, update pathway information and support waiting list accuracy with structured QA oversight.',
      structure: 'Team lead allocated with daily PTL review targets, QA sampling on pathway updates and weekly reporting to trust programme leads.',
      outcomes: ['Reviewed and updated patient tracking lists across specialties', 'Improved waiting list data accuracy and pathway visibility', 'Supported pathway status reconciliation and escalation', 'Delivered structured reporting to programme governance']
    },
    {
      tag: 'Data Quality',
      title: 'Healthcare Data Quality Improvement',
      client: 'NHS Acute Trust',
      region: 'South East',
      service: 'Clinical Coding and Data Quality Support',
      challenge: 'Healthcare data quality improvement programme requiring experienced workforce to cleanse patient administration system data and improve information accuracy across multiple service areas.',
      solution: 'T21 Services provided experienced data quality analysts and clinical coders supporting PAS data cleansing, duplicate record identification and pathway data correction across departments.',
      structure: 'Programme oversight with data quality lead, structured cleansing methodology and regular accuracy reporting.',
      outcomes: ['Improved PAS data quality across targeted service areas', 'Identified and resolved duplicate patient records', 'Corrected pathway data inaccuracies supporting RTT compliance', 'Supported ongoing data quality monitoring and reporting']
    }
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full px-5 py-2 mb-6">
            <span className="text-gray-300 text-sm tracking-wide">Anonymised Delivery Examples</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Case <span className="text-[#D4AF37]">Studies</span></h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Examples of operational delivery across NHS trusts and healthcare organisations. Client details are anonymised to maintain confidentiality.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto space-y-10">
          {studies.map((study, i) => (
            <div key={i} className="border border-gray-800 bg-gray-900/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/20 transition-colors">
              <div className="bg-[#D4AF37]/5 border-b border-gray-800 px-6 py-4 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-[#D4AF37] text-xs font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full">{study.tag}</span>
                  <span className="text-gray-400 text-xs">{study.client} &middot; {study.region}</span>
                </div>
                <span className="text-gray-500 text-xs">{study.service}</span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mb-6">{study.title}</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-[#D4AF37] font-semibold text-sm mb-2 uppercase tracking-wide">Operational Challenge</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] font-semibold text-sm mb-2 uppercase tracking-wide">Workforce Solution</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-[#D4AF37] font-semibold text-sm mb-2 uppercase tracking-wide">Delivery Structure</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{study.structure}</p>
                </div>
                <div>
                  <h4 className="text-[#D4AF37] font-semibold text-sm mb-3 uppercase tracking-wide">Outcome Summary</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.outcomes.map((outcome, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-0.5 flex-shrink-0 text-xs">&#10003;</span>
                        <span className="text-gray-300 text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">Discuss Your <span className="text-[#D4AF37]">Operational Requirements</span></h2>
          <p className="text-gray-400 mb-8">Contact T21 Services to discuss how our experienced operational workforce can support your organisation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#D4AF37] text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-[#FFD700] transition-all">Contact Us</Link>
            <Link href="/programme-mobilisation" className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all">Programme Mobilisation</Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}