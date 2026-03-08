'use client'

export default function UpcomingEvents() {
  const events = [
    { title: 'Free Webinar: NHS RTT Careers', date: 'Nov 15, 2025' },
    { title: 'Open House: Campus Tour', date: 'Nov 22, 2025' },
    { title: 'Graduation Ceremony', date: 'Dec 1, 2025' },
    { title: 'Leadership Summit (London)', date: 'Dec 10, 2025' },
  ]

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">
            Upcoming <span className="text-gold">Events</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {events.map((e, i) => (
            <div key={i} className="glass-card flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-white">{e.title}</h3>
                <p className="text-sm text-gray-400">📅 {e.date}</p>
              </div>
              <button className="btn-gold text-sm px-4 py-2">Register</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-gold-outline">View All Events</button>
        </div>
      </div>
    </section>
  )
}
