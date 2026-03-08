'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'

export default function CaseStudies() {
  const studies = [
    {
      title: 'Elective Recovery RTT Validation Programme',
      client: 'NHS Acute Trust',
      region: 'London',
      challenge: 'Large-scale RTT validation backlog requiring experienced workforce to support elective recovery compliance and pathway accuracy across multiple specialties.',
      solution: 'T21 Services deployed experienced RTT validators working across orthopaedics, general surgery, ophthalmology and ENT specialties to validate patient pathways and correct pathway data.',
      outcomes: ['Validated thousands of patient pathways', 'Improved pathway data accuracy', 'Supported elective recovery compliance', 'Reduced validation backlog within programme timeline']
    },
    {
      title: 'Patient Access Administration Support',
      client: 'NHS Foundation Trust',
      region: 'North West',
      challenge: 'Increased demand for patient access administration capacity across outpatient services requiring experienced workforce to maintain appointment booking and referral processing.',
      solution: 'T21 Services provided experienced patient access officers supporting appointment booking, referral management and patient pathway administration across outpatient departments.',
      outcomes: ['Maintained appointment booking capacity', 'Supported referral processing timelines', 'Reduced administrative backlog', 'Provided continuity across service requirements']
    },
    {
      title: 'Waiting List Management Programme',
      client: 'NHS Trust',
      region: 'Midlands',
      challenge: 'Waiting list management programme requiring experienced workforce to review patient tracking lists, update pathway statuses and support data quality across surgical specialties.',
      solution: 'T21 Services deployed experienced pathway coordinators and data quality analysts to review PTLs, update pathway information and support waiting list accuracy.',
      outcomes: ['Reviewed and updated patient tracking lists', 'Improved waiting list data accuracy', 'Supported pathway status reconciliation', 'Provided structured reporting to programme leads']
    },
    {
      title: 'Healthcare Data Quality Improvement',
      client: 'NHS Acute Trust',
      region: 'South East',
      challenge: 'Healthcare data quality improvement programme requiring experienced workforce to cleanse patient administration system data and improve information accuracy across services.',
      solution: 'T21 Services provided experienced data quality analysts supporting PAS data cleansing, duplicate record identification and pathway data correction across multiple departments.',
      outcomes: ['Improved PAS data quality', 'Identified and resolved duplicate records', 'Corrected pathway data inaccuracies', 'Supported ongoing data quality monitoring']
    }
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Case <span className="text-[#D4AF37]">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Examples of operational delivery across NHS trusts and healthcare organisations. Client details are anonymised to maintain confidentiality.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto space-y-12">
          {studies.map((study, i) => (
            <div key={i} className="glass-card">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#D4AF37] text-sm font-semibold bg-[#D4AF37]/10 px-3 py-1 rounded-full">{study.client}</span>
                <span className="text-gray-400 text-sm">{study.region}</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">{study.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#D4AF37] font-semibold mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-[#D4AF37] font-semibold mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-[#D4AF37] font-semibold mb-3">Outcomes</h4>
                <div className="grid grid-cols-2 gap-2">
                  {study.outcomes.map((outcome, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <span className="text-[#D4AF37]">&#10003;</span>
                      <span className="text-gray-300 text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </main>
  )
}
