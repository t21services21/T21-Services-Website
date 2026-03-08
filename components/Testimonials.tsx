'use client'

export default function Testimonials() {
  const testimonials = [
    { name: 'Sarah J.', role: 'NHS RTT Coordinator', quote: 'T21\'s RTT training changed my life. Now I have a rewarding career in the NHS.', rating: 5 },
    { name: 'Michael A.', role: 'Digital Specialist', quote: 'The digital skills training opened doors I never knew existed.', rating: 5 },
    { name: 'Dr. Emma W.', role: 'Healthcare Manager', quote: 'T21\'s recruitment service helped us find exceptional talent quickly.', rating: 5 },
  ]

  return (
    <section className="section-padding bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">
            Transforming Lives, Building <span className="text-gold">Futures</span>
          </h2>
          <p className="text-xl text-gray-300">Real results from real people</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-gray-300 mb-6 italic">"{t.quote}"</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-gold">{t.role}</p>
                <div className="text-gold mt-2">{'⭐'.repeat(t.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
