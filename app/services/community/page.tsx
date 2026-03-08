'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function CommunityPage() {
  const initiatives = [
    {
      icon: '🤝',
      title: 'Social Impact Programs',
      description: 'Community-driven initiatives creating positive social change',
      programs: [
        'Youth empowerment programs',
        'Skills development workshops',
        'Community education initiatives',
        'Social enterprise support',
        'Volunteer coordination',
        'Community outreach programs'
      ]
    },
    {
      icon: '🌍',
      title: 'Diaspora Support',
      description: 'Supporting African diaspora communities in the UK and beyond',
      programs: [
        'Integration support services',
        'Cultural preservation programs',
        'Professional networking events',
        'Mentorship programs',
        'Business startup support',
        'Community building activities'
      ]
    },
    {
      icon: '🏘️',
      title: 'Community Projects',
      description: 'Local community development and improvement projects',
      programs: [
        'Community center programs',
        'Local business support',
        'Educational workshops',
        'Health and wellbeing initiatives',
        'Environmental projects',
        'Cultural events and festivals'
      ]
    },
    {
      icon: '🤲',
      title: 'Partnership Programs',
      description: 'Collaborative initiatives with organizations and institutions',
      programs: [
        'NGO partnerships',
        'Corporate social responsibility',
        'Educational institution collaborations',
        'Government program support',
        'International development projects',
        'Charitable fundraising'
      ]
    }
  ];

  const impactAreas = [
    {
      icon: '🎓',
      title: 'Education & Skills',
      description: 'Providing access to education and skills development',
      impact: '500+ individuals trained'
    },
    {
      icon: '💼',
      title: 'Employment Support',
      description: 'Helping community members find meaningful employment',
      impact: '200+ job placements'
    },
    {
      icon: '🏢',
      title: 'Business Development',
      description: 'Supporting entrepreneurs and small businesses',
      impact: '50+ businesses supported'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Support',
      description: 'Strengthening families and community bonds',
      impact: '300+ families helped'
    }
  ];

  const getInvolved = [
    {
      icon: '🙋',
      title: 'Volunteer',
      description: 'Join our team of volunteers making a difference',
      action: 'Sign Up'
    },
    {
      icon: '💰',
      title: 'Donate',
      description: 'Support our programs with financial contributions',
      action: 'Contribute'
    },
    {
      icon: '🤝',
      title: 'Partner',
      description: 'Collaborate with us on community initiatives',
      action: 'Partner With Us'
    },
    {
      icon: '📢',
      title: 'Spread the Word',
      description: 'Help us reach more people who need support',
      action: 'Share'
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
            <div className="text-6xl mb-6">🤝</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Community <span className="text-[#D4AF37]">Impact</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              AU Gateway Global CIC - Social initiatives and community support programs making a real difference
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

      {/* About AU Gateway Global CIC */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-[#D4AF37]">AU Gateway Global CIC</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                AU Gateway Global is a Community Interest Company (CIC) dedicated to creating positive social impact through education, empowerment, and community development.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We work with communities, particularly African diaspora communities, to provide support, resources, and opportunities for growth and development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our programs focus on education, employment, entrepreneurship, and social integration, helping individuals and families thrive in their communities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#FFD700] h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🌟</div>
                <p className="text-black font-bold text-2xl">Making a Difference</p>
                <p className="text-black text-lg">Together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#D4AF37]">Initiatives</span>
          </h2>

          <div className="space-y-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-6xl mb-4">{initiative.icon}</div>
                    <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">{initiative.title}</h3>
                    <p className="text-gray-300 mb-6">{initiative.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-bold text-[#D4AF37] mb-4">Programs:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {initiative.programs.map((program, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">✓</span>
                          <span className="text-gray-300">{program}</span>
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

      {/* Our Impact */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#D4AF37]">Impact</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all text-center">
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3">{area.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                <p className="text-[#D4AF37] font-bold">{area.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Get <span className="text-[#D4AF37]">Involved</span>
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            There are many ways you can support our mission and make a difference
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getInvolved.map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all text-center">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3">{option.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{option.description}</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-[#D4AF37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-sm"
                >
                  {option.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Success <span className="text-[#D4AF37]">Stories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-gray-300 italic mb-4">
                "The skills training program helped me secure my dream job in healthcare administration. Forever grateful!"
              </p>
              <p className="text-[#D4AF37] font-bold">- Sarah M.</p>
              <p className="text-gray-400 text-sm">Program Graduate</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-gray-300 italic mb-4">
                "The business support helped me launch my startup. Now employing 5 people from the community!"
              </p>
              <p className="text-[#D4AF37] font-bold">- James O.</p>
              <p className="text-gray-400 text-sm">Entrepreneur</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-gray-300 italic mb-4">
                "The diaspora support program helped our family integrate and thrive in our new community."
              </p>
              <p className="text-[#D4AF37] font-bold">- Amina K.</p>
              <p className="text-gray-400 text-sm">Community Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What is AU Gateway Global CIC?</h3>
              <p className="text-gray-300">AU Gateway Global is a Community Interest Company (CIC) dedicated to creating positive social impact through education, empowerment, and community development, particularly for African diaspora communities.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">How can I volunteer?</h3>
              <p className="text-gray-300">We welcome volunteers! Contact us through our website, tell us about your skills and interests, and we'll match you with suitable opportunities. No minimum commitment required.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Can I donate to support your work?</h3>
              <p className="text-gray-300">Yes! We accept donations to fund our community programs. All donations go directly to supporting our initiatives. Contact us for donation options including one-time and recurring contributions.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Do you only work with African diaspora communities?</h3>
              <p className="text-gray-300">While we have a special focus on African diaspora communities, our programs are open to all. We believe in inclusive community development that benefits everyone.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">How can my organization partner with you?</h3>
              <p className="text-gray-300">We're always looking for partners! Whether you're a business, NGO, or institution, we can collaborate on community projects, co-host events, or create joint initiatives. Contact us to discuss partnership opportunities.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Where are you located?</h3>
              <p className="text-gray-300">We're based in Liverpool, UK, but our programs reach communities across the UK and internationally. Many of our initiatives are accessible online, making them available to people worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Us in Making a <span className="text-[#D4AF37]">Difference</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Together, we can create stronger, more vibrant communities
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/consultation"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Get Involved
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
