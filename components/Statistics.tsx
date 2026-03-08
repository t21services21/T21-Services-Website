'use client'

export default function Statistics() {
  const stats = [
    { value: '500,000+', label: 'RTT Pathways Validated' },
    { value: '50+', label: 'Experienced Workforce' },
    { value: '40+', label: 'NHS Trusts Supported' },
    { value: '5+', label: 'Years in Healthcare' },
    { value: '200,000+', label: 'Operational Hours Delivered' },
    { value: '14+', label: 'Years Leadership Experience' },
    { value: '20+', label: 'Specialties Covered' },
    { value: '500+', label: 'Professionals Developed' },
  ]

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">
            Operational Delivery in <span className="text-gold">Numbers</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Proven track record across NHS trusts and healthcare organisations throughout the United Kingdom.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
