'use client'

export default function Team() {
  const team = [
    { name: 'Amb. Tosin M. Owonifari', role: 'Founder & CEO', linkedin: '#' },
    { name: 'Director of Training', role: 'Training Lead', linkedin: '#' },
    { name: 'Head of Recruitment', role: 'Recruitment Lead', linkedin: '#' },
    { name: 'Head of Software', role: 'Technology Lead', linkedin: '#' },
    { name: 'Head of International', role: 'Global Programs', linkedin: '#' },
    { name: 'Head of Business Dev', role: 'Business Development', linkedin: '#' },
  ]

  return (
    <section id="team" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Meet Our <span className="text-gold">Team</span>
          </h2>
          <p className="text-xl text-gray-300">The experts behind your success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="glass-card text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center text-4xl">
                👤
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-gold mb-4">{member.role}</p>
              <a href={member.linkedin} className="text-sm text-gray-400 hover:text-gold">LinkedIn →</a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-gold">Join Our Team</button>
        </div>
      </div>
    </section>
  )
}
