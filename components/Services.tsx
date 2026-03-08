'use client'

import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: `<svg class="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>`,
      title: 'Elective Recovery and RTT Services',
      description: 'Experienced workforce supporting elective recovery programmes through RTT validation, waiting list management and patient pathway operations across NHS trusts.',
      features: [
        'RTT validation and pathway correction',
        'Waiting list and PTL management',
        'Patient tracking list reviews',
        'Pathway escalation and reconciliation',
        'Elective recovery operational support'
      ],
      link: '/services#elective-recovery'
    },
    {
      icon: `<svg class="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
      title: 'Patient Access and Pathway Management',
      description: 'Experienced patient access workforce supporting the full patient pathway lifecycle from referral management through to pathway closure and discharge.',
      features: [
        'Patient access officers',
        'Pathway coordinators',
        'Appointment booking teams',
        'Referral management support',
        'Medical secretary and clinic administration'
      ],
      link: '/services#patient-access'
    },
    {
      icon: `<svg class="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,
      title: 'Clinical Coding and Data Quality',
      description: 'Experienced clinical coding workforce supporting healthcare data quality improvement, patient administration system data cleansing and pathway data accuracy.',
      features: [
        'Clinical coding workforce',
        'Healthcare data quality improvement',
        'PAS data cleansing',
        'Pathway data reviews',
        'Healthcare information accuracy support'
      ],
      link: '/services#clinical-coding'
    },
    {
      icon: `<svg class="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
      title: 'Workforce Development and Training',
      description: 'Professional workforce development programmes supporting healthcare operational services including RTT pathway training, patient access training and clinical coding training.',
      features: [
        'RTT pathway training programmes',
        'Patient access and administration training',
        'Clinical coding training',
        'Hospital administration training',
        'Programmes for healthcare organisations'
      ],
      link: '/services#workforce-development'
    }
  ]

  return (
    <section id="services" className="section-padding bg-black relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Healthcare <span className="text-gold">Operational Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experienced workforce and operational support across four core service areas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="glass-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all">
                <div dangerouslySetInnerHTML={{ __html: service.icon }} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-gold transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <span className="text-gold mr-2">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div className="flex items-center justify-between">
                <span className="text-gold font-semibold text-sm">Learn More</span>
                <span className="text-gold group-hover:translate-x-2 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
