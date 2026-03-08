'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function InternationalPage() {
  const programs = [
    {
      icon: 'briefcase',
      title: 'Leadership Training Programs',
      description: 'Comprehensive leadership development for African leaders',
      features: [
        'Executive leadership skills',
        'Strategic management',
        'Change leadership',
        'Team building & motivation',
        'Decision making & problem solving',
        'Cross-cultural leadership',
        'Global business practices'
      ],
      duration: '2-4 weeks',
      locations: 'UK, USA, Europe, Canada'
    },
    {
      icon: 'academic',
      title: 'Study Tours',
      description: 'Educational visits to leading institutions and organizations',
      features: [
        'University campus visits',
        'Corporate headquarters tours',
        'Government institution visits',
        'Healthcare facility tours',
        'Technology company visits',
        'Cultural immersion experiences',
        'Networking opportunities'
      ],
      duration: '1-3 weeks',
      locations: 'UK, USA, Europe, Canada'
    },
    {
      icon: 'document',
      title: 'Visa Support Services',
      description: 'Complete visa application and documentation support',
      features: [
        'Visa application assistance',
        'Document preparation',
        'Invitation letters',
        'Sponsorship documentation',
        'Application tracking',
        'Interview preparation',
        'Post-arrival support'
      ],
      duration: 'As needed',
      locations: 'All destinations'
    },
    {
      icon: 'globe',
      title: 'Travel & Logistics',
      description: 'End-to-end travel arrangements and support',
      features: [
        'Flight bookings',
        'Accommodation arrangements',
        'Airport transfers',
        'Local transportation',
        'Travel insurance',
        'Itinerary planning',
        '24/7 support during travel'
      ],
      duration: 'Full trip duration',
      locations: 'Worldwide'
    }
  ];

  const destinations = [
    {
      country: '🇬🇧 United Kingdom',
      highlights: [
        'London Business School visits',
        'NHS healthcare system tours',
        'Parliament and government institutions',
        'Technology hubs in London & Manchester',
        'Cultural heritage sites'
      ]
    },
    {
      country: '🇺🇸 United States',
      highlights: [
        'Silicon Valley tech companies',
        'Harvard & MIT campus tours',
        'Wall Street financial institutions',
        'Healthcare innovation centers',
        'Government institutions in Washington DC'
      ]
    },
    {
      country: '🇪🇺 Europe',
      highlights: [
        'EU institutions in Brussels',
        'Business schools in France & Germany',
        'Innovation hubs across Europe',
        'Healthcare systems tours',
        'Cultural and historical sites'
      ]
    },
    {
      country: '🇨🇦 Canada',
      highlights: [
        'Toronto business district',
        'University of Toronto & McGill',
        'Healthcare system tours',
        'Technology companies',
        'Multicultural experiences'
      ]
    }
  ];

  const benefits = [
    {
      icon: '🎓',
      title: 'World-Class Education',
      description: 'Learn from leading institutions and industry experts'
    },
    {
      icon: '🤝',
      title: 'Global Networking',
      description: 'Connect with international leaders and professionals'
    },
    {
      icon: '🌍',
      title: 'Cultural Exchange',
      description: 'Experience different cultures and business practices'
    },
    {
      icon: '📜',
      title: 'Certification',
      description: 'Receive recognized certificates and credentials'
    },
    {
      icon: '💼',
      title: 'Career Advancement',
      description: 'Enhance your professional profile and opportunities'
    },
    {
      icon: '🔗',
      title: 'Ongoing Support',
      description: 'Alumni network and continued mentorship'
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🌍</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              International <span className="text-[#D4AF37]">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Leadership training for African leaders in UK, Europe, USA, and Canada with complete visa support and travel services
            </p>
            <Link 
              href="/services"
              className="text-[#D4AF37] hover:text-[#FFD700] transition-colors inline-flex items-center gap-2"
            >
              ← Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#D4AF37]">Programs</span>
          </h2>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-6xl mb-4">{program.icon}</div>
                    <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">{program.title}</h3>
                    <p className="text-gray-300 mb-4">{program.description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm text-gray-400">
                        <span className="text-[#D4AF37]">Duration:</span> {program.duration}
                      </p>
                      <p className="text-sm text-gray-400">
                        <span className="text-[#D4AF37]">Locations:</span> {program.locations}
                      </p>
                    </div>
                    <Link 
                      href="/contact"
                      className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
                    >
                      Apply Now
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-bold text-[#D4AF37] mb-4">What's Included:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {program.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Study <span className="text-[#D4AF37]">Destinations</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">{dest.country}</h3>
                <ul className="space-y-3">
                  {dest.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Program <span className="text-[#D4AF37]">Benefits</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Application <span className="text-[#D4AF37]">Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Submit Application</h3>
              <p className="text-gray-300 text-sm">Complete online application form with required documents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Review & Selection</h3>
              <p className="text-gray-300 text-sm">Application reviewed and interview scheduled</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Visa & Travel</h3>
              <p className="text-gray-300 text-sm">Complete visa support and travel arrangements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Begin Program</h3>
              <p className="text-gray-300 text-sm">Start your international learning journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Participant Success Stories */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Participant <span className="text-[#D4AF37]">Success Stories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The UK leadership program was transformative! I gained invaluable insights and connections that have elevated my career to new heights."
              </p>
              <p className="text-[#D4AF37] font-bold">Dr. Chioma Nwosu</p>
              <p className="text-gray-400 text-sm">Healthcare Executive, Nigeria</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The visa support was seamless, and the study tour exceeded all expectations. I returned home with knowledge and networks that transformed my organization."
              </p>
              <p className="text-[#D4AF37] font-bold">Ambassador Kwame Mensah</p>
              <p className="text-gray-400 text-sm">Government Official, Ghana</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "T21 handled everything from visa to accommodation. The program was world-class, and I've implemented so many learnings in my business."
              </p>
              <p className="text-[#D4AF37] font-bold">Fatima Ibrahim</p>
              <p className="text-gray-400 text-sm">Business Owner, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Do you help with visa applications?</h3>
              <p className="text-gray-300">Yes! We provide comprehensive visa support including document preparation, application submission, interview coaching, and tracking. We have high success rates for UK, US, EU, and Canadian visas.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What is included in the program cost?</h3>
              <p className="text-gray-300">Program costs typically include training materials, facility visits, some meals, and certificates. Accommodation, flights, and visa fees are usually separate but we can arrange package deals.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">How long are the programs?</h3>
              <p className="text-gray-300">Programs range from 1-week study tours to 4-week intensive leadership programs. We also offer customized programs for groups with flexible durations.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Can I bring family members?</h3>
              <p className="text-gray-300">Yes! We can arrange family visas and accommodation. Family members can participate in cultural activities while you attend the program.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What if my visa is denied?</h3>
              <p className="text-gray-300">We have a high visa success rate, but if denied, we'll help you reapply or defer to the next program. Program fees are refundable if visa is denied (visa application fees are non-refundable).</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Do you offer group discounts?</h3>
              <p className="text-gray-300">Yes! We offer attractive discounts for groups of 5 or more participants. We also create customized programs for organizational delegations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Expand Your <span className="text-[#D4AF37]">Global Horizons?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join African leaders who have transformed their careers through our international programs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/consultation"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Apply Now
            </Link>
            <Link 
              href="/services"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
