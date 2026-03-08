'use client'

export default function LatestNews() {
  const news = [
    { title: 'New TQUK Course Launched', date: 'Oct 25, 2025', excerpt: 'We\'re excited to announce our latest TQUK-endorsed course...' },
    { title: 'Leadership Program Success', date: 'Oct 20, 2025', excerpt: 'Our international leadership program welcomed 50 African leaders...' },
    { title: '100 Students Graduated', date: 'Oct 15, 2025', excerpt: 'Congratulations to our latest cohort of NHS RTT graduates...' },
  ]

  return (
    <section className="section-padding bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">
            Latest <span className="text-gold">News & Updates</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((n, i) => (
            <div key={i} className="glass-card">
              <div className="w-full h-48 bg-gradient-gold rounded-lg mb-4 flex items-center justify-center text-4xl">
                📰
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{n.title}</h3>
              <p className="text-sm text-gold mb-4">{n.date}</p>
              <p className="text-gray-400 mb-4">{n.excerpt}</p>
              <a href="#" className="text-gold hover:text-gold-light">Read More →</a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-gold-outline">View All News</button>
        </div>
      </div>
    </section>
  )
}
