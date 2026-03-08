'use client'

export default function Statistics() {
  const stats = [
    { value: '500,000+', label: 'RTT Pathways Validated' },
    { value: '50+', label: 'Experienced Workforce' },
    { value: '40+', label: 'NHS Trusts Supported' },
    { value: '5+', label: 'Years Supporting Healthcare' },
    { value: '200,000+', label: 'Operational Hours Delivered' },
    { value: '14+', label: 'Years Leadership Experience' },
    { value: '20+', label: 'Specialties Covered' },
    { value: '500+', label: 'Professionals Developed' },
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-3">
            Operational Delivery in <span className="text-[#D4AF37]">Numbers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Proven track record across NHS trusts and healthcare organisations throughout the United Kingdom.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center border border-gray-800 bg-gray-900/20 rounded-xl p-5 md:p-6 hover:border-[#D4AF37]/30 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2 tracking-tight">{s.value}</div>
              <div className="text-gray-400 text-xs md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}