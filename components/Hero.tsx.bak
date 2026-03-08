'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Particle Background */}
      <div className="particles-bg">
        <div className="particle" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ left: '20%', top: '60%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ left: '30%', top: '40%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ left: '40%', top: '80%', animationDelay: '1.5s' }}></div>
        <div className="particle" style={{ left: '50%', top: '30%', animationDelay: '0.5s' }}></div>
        <div className="particle" style={{ left: '60%', top: '70%', animationDelay: '2.5s' }}></div>
        <div className="particle" style={{ left: '70%', top: '50%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ left: '80%', top: '20%', animationDelay: '3s' }}></div>
        <div className="particle" style={{ left: '90%', top: '60%', animationDelay: '0.8s' }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        {/* Healthcare Badge */}
        <div className="badge mx-auto mb-8 animate-fade-in">
          <span className="text-gold">&#9877;</span>
          Healthcare Operational Workforce Partner
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 animate-slide-up leading-tight">
          <span className="text-white">Healthcare Operational Workforce</span><br />
          <span className="text-white">and Service Support for</span><br />
          <span className="text-gold">Patient Access, RTT and Elective Recovery</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          T21 Services supports healthcare organisations, NHS trusts and operational partners with experienced workforce across patient access administration, RTT validation, waiting list management, clinical coding and healthcare data quality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <Link href="/services" className="btn-gold text-lg px-8 py-4">
            Our Services
          </Link>
          <Link href="/contact" className="btn-gold-outline text-lg px-8 py-4">
            Discuss Requirements
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="glass-card text-center">
            <div className="text-4xl font-bold text-gold mb-2">500,000+</div>
            <div className="text-sm text-gray-300">RTT Pathways Validated</div>
          </div>
          <div className="glass-card text-center">
            <div className="text-4xl font-bold text-gold mb-2">50+</div>
            <div className="text-sm text-gray-300">Experienced Workforce</div>
          </div>
          <div className="glass-card text-center">
            <div className="text-4xl font-bold text-gold mb-2">40+</div>
            <div className="text-sm text-gray-300">NHS Trusts Supported</div>
          </div>
          <div className="glass-card text-center">
            <div className="text-4xl font-bold text-gold mb-2">5+</div>
            <div className="text-sm text-gray-300">Years Supporting Healthcare</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-gold text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gold rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gold rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
