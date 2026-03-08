'use client'

export default function Partners() {
  const partners = [
    'NHS Trusts',
    'Integrated Care Boards',
    'Insourcing Providers',
    'Healthcare Organisations',
    'Elective Recovery Programmes'
  ]

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">
            Who We <span className="text-gold">Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            T21 Services supports healthcare organisations across the United Kingdom delivering operational services and workforce capacity.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
          {partners.map((p, i) => (
            <div key={i} className="border border-gray-800 bg-gray-900/20 rounded-xl px-6 py-4 text-center hover:border-[#D4AF37]/30 transition-colors">
              <p className="text-sm md:text-base font-semibold text-[#D4AF37]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
