'use client'

export default function About() {
  return (
    <section id="about" className="section-padding bg-neutral-900 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Founder Image */}
          <div className="relative">
            <div className="glass-card p-8">
              <div className="w-full aspect-square bg-gradient-gold rounded-lg flex items-center justify-center mb-6">
                <div className="text-8xl">🏆</div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                  Amb. Tosin Michael Owonifari
                </h3>
                <p className="text-gold mb-4">Founder & CEO</p>
                <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Excellence Through <span className="text-gold">Innovation</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6">
              Founded by Amb. Tosin Michael Owonifari, T21 Services UK is a TQUK-approved training provider 
              and innovative solutions company dedicated to empowering individuals and organizations.
            </p>

            <p className="text-gray-400 mb-8">
              Since our incorporation in December 2020, we've trained over 500 professionals, placed hundreds 
              in rewarding careers, and developed cutting-edge software solutions that transform healthcare 
              and business operations across three continents.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-card">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-bold text-white mb-1">TQUK Approved</h4>
                <p className="text-sm text-gray-400">Centre #36257481088</p>
              </div>
              <div className="glass-card">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-bold text-white mb-1">Strategic Partnerships</h4>
                <p className="text-sm text-gray-400">NHS, LJMU, Councils</p>
              </div>
              <div className="glass-card">
                <div className="text-3xl mb-2">🌍</div>
                <h4 className="font-bold text-white mb-1">Global Reach</h4>
                <p className="text-sm text-gray-400">UK, Europe, USA, Africa</p>
              </div>
              <div className="glass-card">
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-bold text-white mb-1">Multi-Service</h4>
                <p className="text-sm text-gray-400">6 Core Services</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gold">Partner With Us</button>
              <button className="btn-gold-outline">Our Story</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
