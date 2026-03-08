'use client'

export default function WhyChooseUs() {
  const reasons = [
    { icon: '🏆', title: 'TQUK Approved', desc: 'Official approved centre with quality assurance' },
    { icon: '👨‍🏫', title: 'Expert Instructors', desc: 'Learn from industry professionals' },
    { icon: '🎯', title: 'Proven Results', desc: '95% job placement rate' },
    { icon: '🌍', title: 'Global Reach', desc: 'Serving 3 continents' },
    { icon: '💼', title: 'Industry Partnerships', desc: 'NHS, LJMU, Councils' },
    { icon: '🤝', title: 'Ongoing Support', desc: 'Alumni network and mentorship' },
  ]

  return (
    <section className="section-padding bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Why Choose <span className="text-gold">T21 Services?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="glass-card text-center">
              <div className="text-5xl mb-4">{r.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{r.title}</h3>
              <p className="text-gray-400">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
